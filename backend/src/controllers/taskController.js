import Task from '../models/Task.js';
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};
export const createTask = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        if (!title || !title.trim()) {
            res.status(400).json({ message: 'Title is required' });
            return;
        }
        const task = new Task({
            title: title.trim(),
            description: description?.trim() || '',
            status: status || 'todo',
            priority: priority || 'medium',
        });
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status, priority } = req.body;
        const updateData = {};
        if (title !== undefined)
            updateData.title = title.trim();
        if (description !== undefined)
            updateData.description = description.trim();
        if (status !== undefined)
            updateData.status = status;
        if (priority !== undefined)
            updateData.priority = priority;
        const task = await Task.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!task) {
            res.status(404).json({ message: 'Task not found' });
            return;
        }
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            res.status(404).json({ message: 'Task not found' });
            return;
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};
//# sourceMappingURL=taskController.js.map