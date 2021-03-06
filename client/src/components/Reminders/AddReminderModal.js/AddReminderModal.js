import React, { useState } from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import { addReminder } from '../../../redux/actions/reminderActions';
import '../../../styles/variants.scss';
import { useDispatch } from 'react-redux';

const AddReminderModal = (props) => {
    const [reminderName, setReminderName] = useState();
    const [reminderDate, setReminderDate] = useState();
    const dispatch = useDispatch();

    const getListId = (listId) => {
        if (listId && listId !== 'today') {
            return listId;
        }

        return '';
    }

    const saveReminder = () => {
        const newReminder = {
            name: reminderName,
            dueDate: reminderDate.toISOString(),
            listId: getListId(props.listId),
            isCompleted: false
        };

        dispatch(addReminder(newReminder));

        props.onHide();
    }

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Body>
                <InputGroup size="lg" className="mb-3">
                    <FormControl
                        onChange={(e) => setReminderName(e.target.value)}
                        value={reminderName}
                        placeholder="Take out the trash"
                    />
                </InputGroup>
                <DatePicker onChange={setReminderDate} value={reminderDate}></DatePicker>
                <Button variant='primary' size="lg" block onClick={() => saveReminder()} disabled={!reminderName || !reminderDate}>
                    Create Reminder
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default AddReminderModal;