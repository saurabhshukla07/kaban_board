import mongoose, { Schema, Document } from 'mongoose';
const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    status: {
        type: String,
        enum: ['todo', 'inprogress', 'done'],
        default: 'todo',
        required: true,
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium',
        required: true,
    },
}, {
    timestamps: true,
});
export default mongoose.model('Task', TaskSchema);
//# sourceMappingURL=Task.js.map