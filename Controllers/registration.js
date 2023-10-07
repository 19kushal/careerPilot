const express = require('express');
const path = require('path');
const User = require('../Models/User');
const Student = require('../Models/Student');
const Admin = require('../Models/Admin');

module.exports.adminSignIn = async (req, res)=>{
    const {email, password} = req.body;
    try{
        await User.find({email})
        .then((user) => {
            if(user){
                if(user.password === password){
                    req.session.user = user;
                    // res.redirect('/admin');
                    res.json(user, "Logged in successfully");
                    // res.status(200);
                }else{
                    res.json("Invalid credentials");
                    // res.redirect('/adminSignIn');
                }
            }else{
                res.json("No user found");
                // res.redirect('/adminSignIn');
            }

        })
    }
    catch(err){
        console.log(err);
    }
}
module.exports.studentSignIn = async (req, res)=>{
    const {email, password} = req.body;
    try{
        await User.find({email})
        .then((user) => {
            if(user){
                if(user.password === password){
                    req.session.user = user;
                    // res.redirect('/student');
                    res.json(user, "Logged in successfully");
                    // res.status(200);
                }else{
                    res.json("Invalid credentials");
                    // res.redirect('/studentSignIn');
                }
            }else{
                res.json("No user found");
                // res.redirect('/studentSignIn');
            }

        })
    }
    catch(err){
        console.log(err);
    }
}
module.exports.adminSignUp = async (req, res)=>{
    const {name,
          email,
          password,
          designation,
          contact,
          socialProfile
        } = req.body;
        try{
            const user = new User({
                name,
                email,
                password,
                role: 'Admin',
            });
            await user.save();

            if(user && user.role === 'Admin'){
                const admin = new Admin({
                    createdBy: user._id,
                    designation,
                    contact,
                    socialProfile,
                });
                await admin.save();
                res.json("Admin created successfully", admin);
            } 
            res.json("User created successfully", user);
            // res.redirect('/adminSignIn');
            // res.status(200);
        } catch(err){
              console.log(err);
            //   res.redirect('/adminSignUp');
              res.json("Error in creating admin");                       
        }
}
module.exports.studentSignUp = async (req, res)=>{
    const {name,
          email,
          password,
          contact,
          hsc,
          enterance,
          category
        } = req.body;
        try{
            const user = new User({
                name,
                email,
                password,
                role: 'Student',
            });
            await user.save();

            if(user && user.role === 'Student'){
                const student = new Student({
                    createdBy: user._id,
                    contact,
                    grade: {
                        hsc,
                        enterance,
                    },
                    category,
                });
                await student.save();
                res.status(201).json(student);
            } 
            // res.status(201).json(user);
            // res.redirect('/studentSignIn');
            // res.status(200);
        } catch(err){
              console.log(err);
            //   res.redirect('/studentSignUp');
              res.json("Error in creating student");                       
        }
}
module.exports.adminSignOut = async (req, res)=>{
    try{
        req.session.destroy();
        res.json("Admin Logged out successfully");
        // res.redirect('/adminSignIn');
    }catch(err){
        console.log(err);
    }
}
module.exports.studentSignOut = async (req, res)=>{
    try{
        req.session.destroy();
        res.json("Student Logged out successfully");
        // res.redirect('/studentSignIn');
    }catch(err){
        console.log(err);
    }
}
module.exports.getAdminSignUp = async (req, res)=>{
    try{
        res.json("Admin SignUp page");
        // res.render('adminSignUp');
    }catch(err){
        console.log(err);
    }
}
module.exports.getStudentSignUp = async (req, res)=>{   
    try{
        res.json("Student SignUp page");
        // res.render('studentSignUp');
    }catch(err){
        console.log(err);
    }
}