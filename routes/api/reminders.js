import { Router } from 'express';
import Reminder from '../../models/Reminder';

const router = Router();

// @route GET api/reminders
// @desc Get all reminders
// @access Public
router.get('/', async (req, res) => {
    try {
        const reminders = await Reminder.find();

        res.status(200).json(reminders);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route POST api/reminders
// @desc Create a reminder
// @access Public
router.post('/', async (req, res) => {
    const newReminder = new Reminder({
        name: req.body.name,
        dueDate: new Date(req.body.dueDate),
        listId: req.body.listId
    });

    try {
        const reminder = await newReminder.save();
        if (!reminder) throw Error('An error occured saving the reminder');

        res.status(200).json(reminder.id);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route PUT api/reminders
// @desc Update a reminder
// @access Public
router.put('/:id', async (req, res) => {
    try {
        const reminderToUpdate = await Reminder.findById(req.params.id);
        if (!reminderToUpdate) throw Error(`Reminder not found for id: ${req.params.id}`);

        reminderToUpdate.name = req.body.name;
        reminderToUpdate.dueDate = req.body.dueDate;
        reminderToUpdate.listId = req.body.listId;
        reminderToUpdate.isCompleted = req.body.isCompleted;

        const updatedReminder = await reminderToUpdate.save();
        if (!updatedReminder) throw Error('An error occured updating the reminder')

        res.status(200).json(updatedReminder.id);
    }
    catch (err) {
        if (err.message === 'Reminder not found') {
            res.status(404).json({ success: false, message: err.message })
        }
        else {
            res.status(400).json({ success: false, message: err.message })
        }
    }
});

// @route DELETE api/reminders/:id
// @desc Delete a reminder
// @access Public
router.delete('/:id', async (req, res) => {
    try {
        const reminderToRemove = await Reminder.findById(req.params.id);
        if (!reminderToRemove) throw Error(`Reminder not found for id: ${req.params.id}`);

        const removedReminder = await Reminder.remove(reminderToRemove);
        if (!removedReminder) throw Error('An error occured deleting the reminder');

        res.status(200).json({ success: true });
    }
    catch (err) {
        if (err.message === 'Reminder not found') {
            res.status(404).json({ success: false, message: err.message })
        }
        else {
            res.status(400).json({ success: false, message: err.message })
        }
    }
});

export default router;