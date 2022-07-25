const express = require('express');
require('express-async-errors');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');
const categoryRouter = require('./routers/categoryRouter');

const app = express();

app.use(express.json());
app.use('/login', authRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);

app.use((err, _req, res, _next) => {
    const { name, message } = err;
    switch (name) {
      case 'ValidationError':
        res.status(400).json({ message });
        break;
      case 'idNull':
        res.status(404).json({ message });
        break;
      case 'ValidaEmail':
        res.status(409).json({ message });
        break;
      case 'UnauthorizedError':
        res.status(401).json({ message });
        break;
      default:
        console.log(err);
        res.status(409).json({ message: 'User already registered' });
        break;
    }
  });

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
