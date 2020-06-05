import React, { useState, useReducer } from 'react';
import moment from 'moment';
import { Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';

import '../../styles/variants.scss'
import styles from './Reminders.module.scss';
import AddReminderModal from './AddReminderModal.js/AddReminderModal';

const reminderReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return { ...state, isCompleted: !state.isCompleted };
        default:
            throw new Error();
    }
};

const Reminder = (props) => {
    const [state, dispatch] = useReducer(reminderReducer, props.reminder);

    return (
        <Row className={state.isCompleted ? `${styles.reminder} align-items-center ${styles.completed}` : `${styles.reminder} align-items-center`}>
            <Button variant={state.isCompleted ? 'reminder-complete' : 'reminder'} onClick={() => dispatch({ type: 'toggle' })}>
                <FontAwesomeIcon icon={faCheck} />
            </Button>
            <div className={state.isCompleted ? `${styles.reminderName} ${styles.completed}` : styles.reminderName}>
                {state.name}
                <div className={styles.dueDate}>
                    {moment(new Date(state.dueDate)).format("MMM Do YY")}
                </div>
            </div>
        </Row>
    )
}


const Reminders = () => {
    const { reminders } = useSelector(state => state.reminder);
    const [modalShow, setModalShow] = useState(false);

    return (
        <Container className={styles.remindersContainer}>
            <div className={styles.remindersHeader}>Hello</div>
            <Container>
                {reminders.map((reminder, index) => {
                    return <Reminder key={index} reminder={reminder} />
                })}
                <Row>
                    <Button variant='new' className='align-items-center' onClick={() => setModalShow(true)}>
                        <FontAwesomeIcon icon={faPlusCircle} /> New Reminder
                    </Button>
                </Row>
            </Container>
            <AddReminderModal show={modalShow} onHide={() => setModalShow(false)} />
        </Container>
    )
}

export default Reminders;