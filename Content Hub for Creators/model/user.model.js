const mongoose=require('mongoose')

const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            minLength:[3,"username must be atleast 3 charachter long"],
            maxLength:[12,"username must be almost 12 character long "]
        },
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            minLength:[7,"email must be atleast 7 charachter long"],
            maxLength:[25,"email must be almost 25 character long "]

        },
        password:{
            type:String,
            required:true,
            trim:true,
            minLength:[6,"password must be atleast 6 charachter long"],
            maxLength:[14,"username must be almost 14 character long "]
            
        },
        bio:{
            type:String,
            trim:true,
            minLength:[1,"bio must be at atleast 1 character long"],
            maxLength:[255,"bio must be at almost 255 character long "]
        },
        profilePic:{
            type: String,
            validate: {
                validator: function (v) {
                    return /^https?:\/\/[^\s/$.?#].[^\s]*$/.test(v); // Regex for valid URLs
                },
                message: "Profile picture must be a valid URL"
            }
        },
        socialUrls: {
            type: [String], 
            validate: {
              validator: function (v) {
                return v.every((url) => /^https?:\/\/[^\s/$.?#].[^\s]*$/.test(url)); 
              },
              message: "Each social media link must be a valid URL",
            },
          },
          
        protfolioUrl: {
            type: String,
            validate: {
                validator: function (v) {
                    return /^https?:\/\/[^\s/$.?#].[^\s]*$/.test(v); // Regex for valid URLs
                },
                message: "Portfolio URL must be a valid URL"
            }
        },
        role:{
            type:String,
            required:true,
            enum:['user','admin'],
            default:'user'

        },
        dob:Date,
        followers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user', // Reference to the User model
          }],
          following: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user', // Reference to the User model
          }],

    },
    {
        timestamps:true
    }

)


const user=mongoose.model('user',userSchema)

module.exports=user