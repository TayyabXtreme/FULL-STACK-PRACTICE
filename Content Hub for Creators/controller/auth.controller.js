const userModel = require("../model/user.model");

const registerUser = async (username, email, password) => {
  try {
    const existingUser = await userModel.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return {
        success: false,
        status: 400,
        message: "User already exists with the provided username or email.",
      };
    }

    
    const newUser = await userModel.create({
      username,
      email,
      password,
      role: "user",
    });

    return {
      success: true,
      status: 201,
      message: "User created successfully.",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    };
  } catch (error) {
    console.error("Error during registration:", error);
    return {
      success: false,
      status: 500,
      message: "An error occurred during user registration. Please try again later.",
    };
  }
};

module.exports = { registerUser };
