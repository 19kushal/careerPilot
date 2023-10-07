const express = require('express');
const path = require('path');
const User = require('../Models/User');
const Student = require('../Models/Student');
const Branch = require('../Models/Branch');

module.exports.getAllBranch = async (req, res)=>{
    await Branch.find().then((branch)=>{
        res.json(branch);
        res.render('branch.ejs', {branch: branch});
    })
}
module.exports.getEachBranch = async (req, res)=>{
    const id = req.params.id;
    await Branch.findById(id).then((branch)=>{
        res.json(branch);
        res.render('eachBranch.ejs', {branch: branch});
    })
}
module.exports.getAddBranch = async (req, res)=>{
    res.render('addBranch.ejs');
    res.json("Add branch");
}
module.exports.addBranch = async (req, res)=>{
    const {
        name,
        description,
        cutOff,
        availableSeats,
        fees,
        scope,
        salary,
        placedAt,
    } = req.body;
    try{
        const branch = new Branch({
            name,
            description,
            cutOff,
            availableSeats,
            fees,
            scope,
            salary,
            placedAt,
        });
        if(branch){
            await branch.save();
            res.json(branch);
            res.redirect('/allBranch');
            res.status(201).json({
                status: 'success',
                data: {
                    branch,
                },
            });
        } else {
            res.json("Branch not added");
        }
    } catch(err){
        console.log(err);
        res.json("Error in adding branch");
    } 
}
module.exports.getUpdateBranch = async (req, res)=>{
    const id = req.params.id;
    await Branch.findById(id).then((branch)=>{
        res.json(branch);
        res.render('updateBranch.ejs', {branch: branch});
    })
}
module.exports.updateBranch = async (req, res)=>{
    const id = req.params.id;
    const {
        name,
        description,
        cutOff,
        availableSeats,
        fees,
        scope,
        salary,
        placedAt,
    } = req.body;
    try{
        await Branch.findByIdAndUpdate(id, {
            name,
            description,
            cutOff,
            availableSeats,
            fees,
            scope,
            salary,
            placedAt,
        },{new:true})
        .then((branch)=>{
            res.json(branch);
            res.redirect('/allBranch');
        })
    } catch(err){
        console.log(err);
        res.json("Error in updating branch");
    }
}
module.exports.deleteBranch = async (req, res)=>{
    const id = req.params.id;
    try{
        await Branch.findByIdAndDelete(id).then((branch)=>{
            res.json(branch);
            res.redirect('/allBranch');
        })
    } catch(err){
        console.log(err);
        res.json("Error in deleting branch");
    }
}

// Student Controller 
module.exports.getAllStudent = async (req, res)=>{
    await Student.find().then((student)=>{
        res.json(student);
        res.render('student.ejs', {student: student});
    })
}