import React, { useState } from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import moment from 'moment';
import DatePicker from 'react-date-picker';

import '../../../styles/variants.scss';

const AddReminderModal = (props) => {
    const [reminderName, setReminderName] = useState();
    const [reminderDate, setReminderDate] = useState();

    const selectedDate = '';
    const saveReminder = () => {
        const newReminder = {
            name: reminderName,
            dueDate: reminderDate
        };
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
                <Button variant='primary' size="lg" block onClick={() => saveReminder()}>
                    Create Reminder
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default AddReminderModal;