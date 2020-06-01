import { Router } from 'express';
import List from '../../models/List';
const router = Router();

// @route GET api/lists
// @desc Get all Lists
// @access Public
router.get('/', async (req, res) => {
    List.find()
    .sort({ name: 1 })
    .then(lists => res.json(lists))
});

// @route POST api/lists
// @desc Create a Lists
// @access Public
router.post('/', async (req, res) => {
    const newList = new List({
        name: req.body.name
    });

    newList.save().then(list => res.json(list.id));
});

export default router;