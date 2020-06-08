import React from 'react';
import { Modal, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Loading.scss';

const Loading = () => {
    const { isLoading } = useSelector(state => state.loading);

    return (
        <Modal show={isLoading} backdrop="static" keyboard={false} size="sm" centered dialogClassName="loading">
            <Modal.Body className="Hello">
                <Row className="justify-content-center align-items-center">
                    <Spinner animation="border" variant="light" />
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default Loading;