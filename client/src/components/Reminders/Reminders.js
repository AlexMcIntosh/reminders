import React, { useState, useReducer } from 'react';
import moment from 'moment';
import { Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { completeReminder } from '../../redux/actions/reminderActions';

import '../../styles/variants.scss'
import styles from './Reminders.module.scss';
import AddReminderModal from './AddReminderModal.js/AddReminderModal';

const Reminder = (props) => {
    const { reminder } = props;
    const dispatch = useDispatch();

    return (
        <Row className={reminder.isCompleted ? `${styles.reminder} align-items-center ${styles.completed}` : `${styles.reminder} align-items-center`}>
            <Button variant={reminder.isCompleted ? 'reminder-complete' : 'reminder'} onClick={() => dispatch(completeReminder(reminder.id))}>
                <FontAwesomeIcon icon={faCheck} />
            </Button>
            <div className={reminder.isCompleted ? `${styles.reminderName} ${styles.completed}` : styles.reminderName}>
                {reminder.name}
                <div className={styles.dueDate}>
                    {moment(reminder.dueDate).format("MMM Do YYYY")}
                </div>
            </div>
        </Row>
    )
}


const Reminders = (props) => {
    const { listId } = props.match.params;
    const { lists } = useSelector(state => state.list);
    const { reminders } = useSelector(state => state.reminder);
    const [list] = useState(lists.find(list => { return list.id === listId }));
    const [modalShow, setModalShow] = useState(false);
    const [isTodayList] = useState(listId === 'today');

    const filterReminders = (list) => {
        if (isTodayList) {
            return reminders.filter(reminder => { return moment(reminder.dueDate).isSame(moment(), 'd') });
        }

        return list
            ? reminders.filter(reminder => { return reminder.listId === listId })
            : reminders;
    }

    const header = list ? list.name : isTodayList ? 'Today' : "All";

    return (
        <Container className={styles.remindersContainer}>
            <div className={styles.remindersHeader}>{header}</div>
            <Container>
                {filterReminders(list).map((reminder, index) => {
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