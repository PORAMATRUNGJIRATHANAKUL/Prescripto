import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";

// API For adding doctor

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      degree,
      speciality,
      about,
      available,
      fees,
      address,
      experience,
    } = req.body;
    const imageFile = req.file;

    //checking for all data to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !degree ||
      !speciality ||
      !about ||
      !available ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "Missing Details" });
    }

    //validating email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please Enter Valid Email" });
    }

    //validating strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    //hashing  doctor password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //uploading image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const doctordata = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      degree,
      speciality,
      about,
      experience,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };
    const newDoctor = await doctorModel(doctordata);
    await newDoctor.save();
    res.json({ success: true, message: "Doctor added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API for Admin Login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD,
        process.env.JWT_SECRET
      );
      res.json({ success: true, message: "Admin Login Successfully", token });
    } else {
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addDoctor, loginAdmin };
