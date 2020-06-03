import React from 'react';
import { Button, Container, Row, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import '../../../styles/variants.scss';
import styles from './MyLists.module.scss'

const MyLists = () => {
    const { lists } = useSelector(state => state.list)

    const faStyle = {
        color: "white"
    }

    return (
        <Container className={styles.myListsContainer}>
            <div className={styles.myListsHeader}>My Lists</div>
            <ListGroup>
                {lists.map((list, index) => {
                    return <ListGroup.Item variant="reminderList" key={index}>
                        <Container>
                            <Row className="justify-content-between align-items-center">
                                <div className={styles.listName}>
                                    {list.name}
                                </div>
                                <div>
                                    {list.count} <FontAwesomeIcon style={faStyle} icon={faChevronRight}></FontAwesomeIcon>
                                </div>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                })}
            </ListGroup>
            <Row>
                <Button variant='new' className='align-items-center'>
                    <FontAwesomeIcon icon={faPlusCircle} /> Add List
                </Button>
            </Row>
        </Container>
    );
};

export default MyLists;