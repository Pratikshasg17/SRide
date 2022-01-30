const mongoose = require("mongoose");

const paraSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
});

const Para = mongoose.model('Para', paraSchema);

module.exports = Para;
