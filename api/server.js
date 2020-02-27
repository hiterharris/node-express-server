const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const cohortsRouter = require('../cohorts/router');
const studentsRouter = require('../students/router');

const server = express();

// Middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// Routes
server.use('/api/cohorts', cohortsRouter);

server.use('/api/students', studentsRouter);

server.get('/', (req, res) => {
    res.json('API up and running');
});

module.exports = server;