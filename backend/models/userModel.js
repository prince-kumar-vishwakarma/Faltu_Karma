import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const studentSchema = new mongoose.Schema({
    StudentID: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    Name: {
        type: String,
        required: true,
        trim: true
    },
    ContactNumber: {
        type: String,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    Password: {
        type: String,
        required: true
    },
    Course: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    Hostel: {
        type: String,
        required: true
    },
    RefreshToken: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});


studentSchema.pre('save', async function (next) {
    if (!this.isModified('Password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.Password = await bcrypt.hash(this.Password, salt);
        next();
    } catch (err) {
        next(err);
    }
});


studentSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.Password);
};

const Student = mongoose.model('Student', studentSchema);
export default Student;
