import React, { useState } from 'react';

import styles from './Reminders.module.scss';
import { Container } from 'react-bootstrap';

export const Reminders = (props) => {
    const [reminders, setReminders] = useState([
        { 
            name: "Hello World",
            dueDate: "2020-06-01T04:02:14.301Z",
            listId: ""
        },
        { 
            name: "Set the world on fire",
            dueDate: "2020-09-01T04:02:14.301Z",
            listId: ""
        }
    ]);

    return (
        <Container className={styles.remindersContainer}>
            <div className={styles.remindersHeader}>Hello</div>
        </Container>
    )
}