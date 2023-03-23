require('dotenv').config();
const express = require('express');
const config = require('./config/serverConfig');

// роутеры
const themesRouter = require('./routes/themes.routes');
const loginRouter = require('./routes/login.routes');
const usersRouter = require('./routes/users.routes')

const app = express(); 
config(app);

app.use('/api/themes', themesRouter);
app.use('/api/auth', loginRouter);
app.use('/api/users', usersRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/`));
