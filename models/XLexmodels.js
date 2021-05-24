
const { Schema, model, modelNames } = require('mongoose')



const XLexSchema = new Schema({
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

const XLexData = model('XLexData', XLexSchema)



module.exports = XLexData