import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import moment from 'moment';

import styles from './Overview.module.scss';

const Group = (props) => {
    const { list } = props;

    const styleObj = {
        backgroundColor: list.iconColor,
        height: "30px",
        width: "30px",
        borderRadius: "50%",
        display: "flex",
        color: "white"
    };

    const fontIconStyle = {
        display: "inline",
        margin: "auto"
    };

    return (
        <Col xs="5" className={styles.group}>
            <Container>
                <Row className="justify-content-between align-items-center">
                    <div style={styleObj}>
                        <FontAwesomeIcon style={fontIconStyle} icon={list.icon} />
                    </div>
                    <div>
                        <div className={styles.reminderCount}>{list.count}</div>
                    </div>
                </Row>
                <Row>
                    {list.name}
                </Row>
            </Container>
        </Col>
    )
}

const Overview = () => {
    const { reminders } = useSelector(state => state.reminder);

    const [defaultLists, setList] = useState([
        {
            name: "Today",
            iconColor: "#197bfc",
            icon: "calendar",
            count: reminders.filter((reminder) => { return moment(new Date(reminder.dueDate)).isSame(moment(), 'd') }).length
        },
        {
            name: "All",
            iconColor: "gray",
            icon: "inbox",
            count: reminders.length
        }
    ]);

    return <Row className="justify-content-center">
        {defaultLists.map((list, index) => {
            return <Group list={list} key={index} />
        })}
    </Row>
}

export default Overview;