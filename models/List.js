import { Schema, model } from 'mongoose';

const ListSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const List = model('list', ListSchema);

export default List;