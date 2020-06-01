import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';

import styles from './Edit.module.scss';

export const Edit = () => {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <Container className={styles.editContainer}>
            <Row className="justify-content-end">
                <Button variant="link" onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Done" : "Edit"}</Button>
            </Row>
        </Container>
    )
}