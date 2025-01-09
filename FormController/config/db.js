const mongoose=require('mongoose');


const connection=mongoose.connect('').then(()=>{
    console.log('Database Connected')

})

module.exports=connection;