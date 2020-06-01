import { Router } from 'express';
import List from '../../models/List';
const router = Router();

// @route GET api/lists
// @desc Get all Lists
// @access Public
router.get('/', async (req, res) => {
    try {
        const lists = await List.find();
        if (!lists || lists.length === 0) throw Error('No Lists found');

        res.status(200).json(lists);
    }
    catch (err) {
        if (err.message === 'No Lists found') {
            res.status(404).json({ message: err.message });
        }
        else {
            res.status(400).json({ message: err.message });
        }
    }
});

// @route POST api/lists
// @desc Create a Lists
// @access Public
router.post('/', async (req, res) => {
    const newList = new List({
        name: req.body.name
    });

    try {
        const list = await newList.save();
        if (!list) throw Error('An error occured saving the List');

        res.status(200).json(list.id);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route PUT api/lists
// @desc Update a List
// @access Public
router.put('/:id', async (req, res) => {
    try {
        const listToUpdate = await List.findById(req.params.id);
        if (!listToUpdate) throw Error(`List not found for id: ${req.params.id}`);

        listToUpdate.name = req.body.name;
        const updatedList = await listToUpdate.save();
        if (!updatedList) throw Error('An error occured updating the List')

        res.status(200).json(updatedList.id);
    }
    catch (err) {
        if (err.message === 'List not found') {
            res.status(404).json({ success: false, message: err.message})
        }
        else {
            res.status(400).json({ success: false, message: err.message})
        }    }
});

// @route DELETE api/lists/:id
// @desc Delete a List
// @access Public
router.delete('/:id', async (req, res) => {
    try {
        const listToRemove = await List.findById(req.params.id);
        if (!listToRemove) throw Error(`List not found for id: ${req.params.id}`);

        const removedList = await List.remove(listToRemove);
        if (!removedList) throw Error('An error occured deleting the list');

        res.status(200).json({ success: true });
    }
    catch (err) {
        if (err.message === 'List not found') {
            res.status(404).json({ success: false, message: err.message})
        }
        else {
            res.status(400).json({ success: false, message: err.message})
        }
    }
});

export default router;