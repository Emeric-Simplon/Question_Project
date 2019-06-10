const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
            createOn : { type: Date, default: Date.now },
            question : String,
            theme: String,
            auteur : String 
});

module.exports = mongoose.model('question', questionSchema);
