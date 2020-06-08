import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Row, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import AddListModal from './AddListModal/AddListModal';
import { getLists, deleteList } from '../../../redux/actions/listActions';

import '../../../styles/variants.scss';
import styles from './MyLists.module.scss'

const MyLists = (props) => {
    const { lists } = useSelector(state => state.list)
    const { isEditing } = useSelector(state => state.list);
    const dispatch = useDispatch();

    const history = useHistory();

    const [modalShow, setModalShow] = useState(false);

    const faStyle = {
        color: "white"
    }

    const viewReminders = (listId) => {
        history.push(`/reminders/${listId}`);
    }

    useEffect(() => {
        dispatch(getLists());
    }, []);

    return (
        <Container className={styles.myListsContainer}>
            <div className={styles.myListsHeader}>My Lists</div>
            <ListGroup>
                {lists.map((list, index) => {
                    let button;
                    if (!isEditing) {
                        button = (
                            <div>
                                {list.count}
                                <Button variant="primary round" onClick={() => { viewReminders(list.id) }}>
                                    <FontAwesomeIcon style={faStyle} icon={faChevronRight}></FontAwesomeIcon>
                                </Button>
                            </div>
                        );
                    }
                    else {
                        button = (
                            <div>
                                <Button variant="primary round" onClick={() => { dispatch(deleteList(list.id)) }}>
                                    <FontAwesomeIcon style={faStyle} icon={faTrashAlt}></FontAwesomeIcon>
                                </Button>
                            </div>
                        )
                    }
                    return <ListGroup.Item variant="reminderList" key={index}>
                        <Container>
                            <Row className="justify-content-between align-items-center">
                                <div className={styles.listName}>
                                    {list.name}
                                </div>
                                {button}
                            </Row>
                        </Container>
                    </ListGroup.Item>
                })}
            </ListGroup>
            <Row>
                <Button variant='new' className='align-items-center' onClick={() => setModalShow(true)}>
                    <FontAwesomeIcon icon={faPlusCircle} /> Add List
                </Button>
            </Row>
            <AddListModal show={modalShow} onHide={() => setModalShow(false)}></AddListModal>
        </Container>
    );
};

export default MyLists;