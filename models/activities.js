
const { Schema, model } = require('mongoose')

const ActivitiesSchema = new Schema({
    studentID: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },

    play: {
        type: Boolean,
        required: true,
    },
    stop: {
        type: Boolean,
        required: true,
    },
    audio: {
        type: Number,
        required: true,
    }
})

const Activities = model('Activities', ActivitiesSchema)

module.exports = Activities