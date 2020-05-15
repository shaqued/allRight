import seed from './user.seed';
import {single as emailAddress} from 'email-address';
import {createSeedModel} from 'mongoose-plugin-seed';
import passportLocalMongoose from 'passport-local-mongoose';
import {Schema} from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    email: {
        match: emailAddress,
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    admin: Boolean
});


/**
 * Plugins
 */
UserSchema
    .plugin(passportLocalMongoose, {
        usernameField: 'email'
    });

/**
 * Virtuals
 */

UserSchema
    .virtual('name.full')
    .get(function () {
        return `${this.name.first} ${this.name.last}`;
    });

/**
 * Pre-save hook
 */
UserSchema
    .pre('save', function (next) {
        var user = this;

        // only hash the password if it has been modified (or is new)
        if (!user.isModified('password')) return next();

        // generate a salt
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if (err) return next(err);

            // hash the password using our new salt
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);

                // override the cleartext password with the hashed one
                user.password = hash;
                next();
            });
        });
    });

    UserSchema.methods.comparePassword = function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    };

/**
 * Methods
 */
export default createSeedModel('User', UserSchema, seed);
