const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    designation: {
        type: String,
        required: true,
    },
    contact:{
        type: Number,
        required: true,
    },
    socialProfile: {    
        type: String,
    }
},
{
    timestamps: true,
}
);
module.exports = mongoose.model('Admin', adminSchema);