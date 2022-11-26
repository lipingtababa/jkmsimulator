// Initialize router
const express = require('express');
const router = express.Router();

const persons = Promise.resolve(require('./data'))

// Get a specific person
router.get('/', (req, res) => {
  console.log("#####")
  console.log(persons)
  res.json(persons);
});


// Get a specific person
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(persons.filter((ele) => ele.id === id));
});

// Write
router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  persons.push(body);
  res.json({ message: 'The person has been added' });
});

// Delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  persons.forEach((person, index) => {
    if (person.id === id) {
      persons.splice(index);
    }
  });
  res.json({ message: `Person with id #${id} has been deleted` });
});

module.exports = router;