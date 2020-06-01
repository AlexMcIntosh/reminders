import { model, Schema } from 'mongoose';

const ReminderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date
    },
    listId: {
        type: String
    }
});

const Reminder = model('reminder', ReminderSchema);

export default Reminder;

