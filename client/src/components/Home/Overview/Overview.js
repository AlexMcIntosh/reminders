import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Overview.module.scss';

const Group = (props) => {
    const styleObj = {
        backgroundColor: props.iconColor,
        height: "30px",
        width: "30px",
        borderRadius: "50%",
        display: "flex",
        marginBottom: "8px",
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
                        <FontAwesomeIcon style={fontIconStyle} icon={props.icon}/>
                    </div>
                    <div>
                        <h3 className={styles.reminderCount}>8</h3>
                    </div>
                </Row>
                <Row>
                    {props.name}
                </Row>
            </Container>
        </Col>
    )
}

export const Overview = () => {
    const [defaultLists, setList] = useState([
        {
            name: "Today",
            iconColor: "#197bfc",
            icon: "calendar"
        },
        {
            name: "All",
            iconColor: "gray",
            icon: "inbox"
        }
    ]);

    return <Row className="justify-content-center">
            {defaultLists.map((list, index) => {
               return <Group name={list.name} iconColor={list.iconColor} icon={list.icon} key={index}/>
            })}
        </Row>
}