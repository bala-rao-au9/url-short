const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        rquired: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0

    }
})

module.export = mongoose.model('shortUrl', shortUrlSchema)