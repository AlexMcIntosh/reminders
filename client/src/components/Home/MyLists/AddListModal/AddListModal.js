import React from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

const AddListModal = (props) => {
    return (
        <Modal {...props} size="lg" centered>
            <Modal.Body>
                <InputGroup size="lg" className="mb-3">
                    <FormControl
                        placeholder="New List"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="primary">Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Modal.Body>
        </Modal>
    );
}

export default AddListModal;