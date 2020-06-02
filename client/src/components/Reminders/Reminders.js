import React, { useState, useReducer } from 'react';
import moment from 'moment';
import { Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import '../../variants.scss'
import styles from './Reminders.module.scss';

const reminderReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return {...state, isCompleted: !state.isCompleted};
        default:
            throw new Error();
    }
};

const Reminder = (props) => {
    const [state, dispatch] = useReducer(reminderReducer, props.reminder);

    return (
        <Row className={state.isCompleted ? `${styles.reminder} align-items-center ${styles.completed}` : `${styles.reminder} align-items-center`}>
            <Button variant={state.isCompleted ? 'reminder-complete' : 'reminder'} onClick={() => dispatch({type: 'toggle'})}>
                <FontAwesomeIcon icon={faCheck} />
            </Button>
            <div className={state.isCompleted ? `${styles.reminderName} ${styles.completed}` : styles.reminderName }>
                {state.name}
                <div className={styles.dueDate}>
                    {moment(new Date(state.dueDate)).format("MMM Do YY")}
                </div>
            </div>
        </Row>
    )
}

export const Reminders = (props) => {
    const [reminders, setReminders] = useState([
        {
            name: "Take out trash",
            dueDate: "2020-06-01T04:02:14.301Z",
            listId: "",
            completed: false
        },
        {
            name: "Set the world on fire",
            dueDate: "2020-09-01T04:02:14.301Z",
            listId: "",
            completed: false
        }
    ]);

    return (
        <Container className={styles.remindersContainer}>
            <div className={styles.remindersHeader}>Hello</div>
            <Container>
                {reminders.map((reminder, index) => {
                    return <Reminder key={index} reminder={reminder} />
                })}
            </Container>
        </Container>
    )
}