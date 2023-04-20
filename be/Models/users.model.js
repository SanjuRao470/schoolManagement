const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
    Name: {
        type: String,
        type: String
    },
    caseid: {
        type: String,
    },
    alertid: {
        type: Number,
        type: String

    },
    alertlevel: {
        type: String,
        type: String
    },
    accountnumber: {
        type: Number,
        type: String

    },
    alertsource: {
        type: String,
    },

    anaylystname: {
        type: String,
    },

    status: {
        type: String,
        type: String

    },
    casestatus: {
        type: String,
        type: String
    
    }


});
module.exports = mongoose.model('mycollections', userSchema);







