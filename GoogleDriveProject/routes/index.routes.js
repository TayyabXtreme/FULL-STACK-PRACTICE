const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();
const upload = require('../config/multer.config');
const fileModel = require('../models/files.model');
const { uploadToSupabase, downloadFromSupabase } = require('../config/supabaseconfig');

const bucketName = 'googledrive'; // Ensure this matches your Supabase bucket name

// Home Route
router.get('/home', authMiddleware, async (req, res) => {
    try {
        const userFiles = await fileModel.find({ user: req.user.userID });
        res.render('home', { files: userFiles });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user files' });
    }
});

// Upload File Route
router.post('/upload-file', authMiddleware, upload.single('file'), async (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const timestamp = Date.now();
    const originalName = file.originalname;
    const extension = originalName.substring(originalName.lastIndexOf('.'));
    const fileName = originalName.replace(extension, '') + '-' + timestamp + extension;
    const fileBuffer = file.buffer;
    const mimeType = file.mimetype;

    try {
        const { publicUrl } = await uploadToSupabase(bucketName, fileName, fileBuffer, mimeType);
        const newFile = await fileModel.create({
            path: publicUrl,
            originalName: fileName,
            user: req.user.userID,
        });
        res.json(newFile);
    } catch (error) {
        console.error('Error uploading file:', error.message);
        res.status(500).json({ message: 'Error uploading file' });
    }
});

// Download File Route
router.get('/download/:fileName', authMiddleware, async (req, res) => {
    const fileName = req.params.fileName;
    console.log("file",fileName);
    try {
        const file = await fileModel.findOne({ user: req.user.userID, originalName: fileName });
        
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }
        
        const { publicUrl } = await downloadFromSupabase(bucketName, fileName);
        
        res.redirect(publicUrl);
    } catch (error) {
        console.error('Error downloading file:', error.message);
        res.status(500).json({ message: 'Error downloading file' });
    }
});

module.exports = router;
