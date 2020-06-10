const mongoose = require('mongoose');
const GetSchema = mongoose.Schema({
    State: {
        type: String,
        required: true
    },
    Products: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Product-State', GetSchema);