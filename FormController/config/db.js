const mongoose=require('mongoose');


const connection=mongoose.connect('mongodb+srv://tayyabxtrem:123123123@cluster0.gwsz3.mongodb.net').then(()=>{
    console.log('Database Connected')

})

module.exports=connection;