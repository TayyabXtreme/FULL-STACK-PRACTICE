const mapService=require('../services/map.service')
const {validationResult}=require('express-validator')


module.exports.getCoordinates=async(req,res)=>{

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {address}=req.query
    try {
        const coordinates=await mapService.getAddressCoordinate(address)
        res.status(200).json(coordinates)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}