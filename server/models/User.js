/**
 * Created by Mohanachandran on 8/22/2015.
 */

var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var UserSchema = new mongoose.Schema({
    email : String,
    password : String
});

UserSchema.methods.toJSON  = function(){
    var user = this.toObject();
    delete user.password;
    console.log(user);
    return user;
};


exports.model = mongoose.model('User',UserSchema);

UserSchema.pre('save', function(next){
    var user = this;

   if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(error, salt){
        if (error) {
            console.log(error);
            return next(error);
        }

        bcrypt.hash(user.password,salt, null, function(error, encryptedPassword){
            if (error) {
                console.log(error);
                return next(error);
            }

            console.log(encryptedPassword);
            user.password = encryptedPassword;
            next()
        })
    })
});