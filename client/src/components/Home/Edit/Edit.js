import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

import styles from './Edit.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { editList } from '../../../redux/actions/listActions';

const Edit = () => {
    const { isEditing } = useSelector(state => state.list);
    const dispatch = useDispatch();

    return (
        <Container className={styles.editContainer}>
            <Row className="justify-content-end">
                <Button variant="link" onClick={() => dispatch(editList(isEditing))}>{isEditing ? "Done" : "Edit"}</Button>
            </Row>
        </Container>
    )
}

export default Edit;