const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    contact: {
        type: Number,
        required: true,
    },
    grade: {
        hsc:{
            type: Number,
            required: true,
        },
        enterance:{
            type: Number,
            required: true,
        },
    },
    category: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
}
);
module.exports = mongoose.model('Student', studentSchema);