
const { Schema, model, modelNames } = require('mongoose')


const ALexSchema = new Schema({
    studentID: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },

    yes: {
        type: Boolean,
        required: true,
    },
    no: {
        type: Boolean,
        required: true,
    },
    word: {
        type: Number,
        required: true,
    }
})



const ALexData = model('ALexData', ALexSchema)




module.exports = ALexData
