const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URI;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Key must be provided');
}

const supabase = createClient(supabaseUrl, supabaseKey);

const supabaseConnection = async () => {
    try {
        const { data, error } = await supabase.storage.listBuckets();
        if (error) throw error;
        console.log('Supabase connection successful:', data);
        return true;
    } catch (error) {
        console.error('Connection failed:', error.message);
        return false;
    }
};

const uploadToSupabase = async (bucketName, fileName, fileBuffer, mimeType) => {
    try {
        const { error: uploadError } = await supabase.storage
            .from(bucketName)
            .upload(fileName, fileBuffer, {
                contentType: mimeType,
                upsert: true, // Overwrite if file exists
            });

        if (uploadError) throw uploadError;

        const { data: publicUrlData, error: urlError } = supabase.storage
            .from(bucketName)
            .getPublicUrl(fileName);

        if (urlError) throw urlError;

        if (!publicUrlData || !publicUrlData.publicUrl) {
            throw new Error('Public URL not generated');
        }

        return { publicUrl: publicUrlData.publicUrl };
    } catch (error) {
        console.error('Error uploading to Supabase:', error.message);
        throw error;
    }
};

const downloadFromSupabase = async (bucketName, fileName) => {
    try {
        const { data: publicUrlData, error } = await supabase.storage
            .from(bucketName)
            .getPublicUrl(fileName);

        if (error) throw error;

        if (!publicUrlData || !publicUrlData.publicUrl) {
            throw new Error('Public URL not generated');
        }
        
        return { publicUrl: publicUrlData.publicUrl };
    } catch (error) {
        console.error('Error downloading from Supabase:', error.message);
        throw error;
    }
};

module.exports = {
    supabase,
    supabaseConnection,
    uploadToSupabase,
    downloadFromSupabase,
};
