const userModel = require('../model/user.model');

const getUser = async (userId) => {
  try {
    // Validate if userId is a valid MongoDB ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(userId)) {
      return {
        success: false,
        status: 400,
        message: "Invalid user ID format",
      };
    }

    // Find user by ID
    const user = await userModel.findById(userId).select('-password'); 
    if (!user) {
      return {
        success: false,
        status: 404,
        message: "User does not exist",
      };
    }

    return {
      success: true,
      status: 200,
      message: "User fetched successfully",
      user: user,
    };

  } catch (error) {
    console.error("Error fetching user:", error);
    return {
      success: false,
      status: 500,
      message: "An error occurred while fetching user data",
    };
  }
};

const updateUser = async (userId, updatedData) => {
    try {
      // Validate profilePic if it is being updated
      if (updatedData.profilePic && !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(updatedData.profilePic)) {
        return {
          success: false,
          status: 400,
          message: "Profile picture must be a valid URL",
        };
      }
  
      // Validate socialUrls if they are being updated
      if (updatedData.socialUrls && !updatedData.socialUrls.every(url => /^https?:\/\/[^\s/$.?#].[^\s]*$/.test(url))) {
        return {
          success: false,
          status: 400,
          message: "Each social media link must be a valid URL",
        };
      }
  
      // Validate portfolioUrl if it is being updated
      if (updatedData.protfolioUrl && !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(updatedData.protfolioUrl)) {
        return {
          success: false,
          status: 400,
          message: "Portfolio URL must be a valid URL",
        };
      }
  
      // Validate username if it is being updated
      if (updatedData.username) {
        if (updatedData.username.length < 3 || updatedData.username.length > 12) {
          return {
            success: false,
            status: 400,
            message: "Username must be between 3 and 12 characters long",
          };
        }
      }
  
      // Validate email if it is being updated
      if (updatedData.email) {
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(updatedData.email)) {
          return {
            success: false,
            status: 400,
            message: "Email must be valid",
          };
        }
      }
  
      // Validate password if it is being updated
      if (updatedData.password && updatedData.password.length < 6) {
        return {
          success: false,
          status: 400,
          message: "Password must be at least 6 characters long",
        };
      }
  
      // If all validations pass, update the user
      const user = await userModel.findById(userId).select('-password').updateOne(updatedData);
      if (!user) {
        return {
          success: false,
          status: 404,
          message: "User does not exist",
        };
      }
  
      return {
        success: true,
        status: 200,
        message: "User updated successfully",
        user: user,
      };
    } catch (error) {
      console.error("Error updating user:", error);
      return {
        success: false,
        status: 500,
        message: "An error occurred while updating user data",
      };
    }
  };
  
  


module.exports = { getUser,updateUser };
