'use strict';

const { response } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const generateId = () => {
  const maxId = phonebook.length > 0
    ? Math.max(...phonebook.map(n => n.id))
    : 0
  return maxId + 1;
};

morgan.token('stringify', function(req, res) {
  const body = req.body;
  const name = body.name;
  const number = body.number;
  return JSON.stringify([{name, number}])
});

let phonebook = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456"
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523"
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345"
    },
    {
      id: 4,
      name: "Mary Poppendick",
      number: "39-23-6423122"
    }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});
  

app.get('/api/persons', (req, res) => {
  res.json(phonebook);
});

app.get('/info', (req, res) =>{
  let date = new Date()
  res.send(`
    <p>Phonebook has info for ${phonebook.length} people</p>
    <p>${date}</p>
  `)
})

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = phonebook.find(person => person.id === id);
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  phonebook = phonebook.filter(person => person.id !== id);

  res.status(204).end();
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :stringify'));

app.post('/api/persons', (req, res) => {
  const body = req.body;
  const name = phonebook.find(person => person.name === body.name);
  const phoneNumber = phonebook.find(number => number.number === body.number);
  
  if (!body.name || !body.number) {
    console.log('nada')
    return res.status(400).json({ 
      error: 'content missing' 
    })
  }

  if(name) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }
  
  if(phoneNumber){
    return res.status(400).json({
      error: 'phonenumber must be unique'
    })
  }

  const person = {
    content: body.content,
    id: generateId(),
    name: body.name,
    number: body.number
  }

  phonebook = phonebook.concat(person)

  res.json(person)
});

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
