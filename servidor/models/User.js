
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
{
    email: {
        type: String,
        
    },
    password: {
        type: String,
        
    }

},
{
    timestamps: true
},
{
    collection: 'users'
}
);


module.exports = mongoose.model('User', userSchema);