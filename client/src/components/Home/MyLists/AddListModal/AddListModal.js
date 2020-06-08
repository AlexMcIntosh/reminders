import React, { useState } from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { addList } from '../../../../redux/actions/listActions';
import { useDispatch } from 'react-redux';

const AddListModal = (props) => {
    const [listName, setListName] = useState();
    const dispatch = useDispatch();

    const addNewList = () => {
        dispatch(addList({ name: listName }));
        props.onHide();
    }

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Body>
                <InputGroup size="lg" className="mb-3">
                    <FormControl
                        value={listName}
                        onChange={(e) => { setListName(e.target.value) }}
                        placeholder="New List"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="primary" onClick={() => addNewList()} disabled={!listName}>Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Modal.Body>
        </Modal>
    );
}

export default AddListModal;