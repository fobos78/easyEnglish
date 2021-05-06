const exspress = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const app = exspress();
const PORT = config.get('serverPort');

app.use(exspress.json());
app.use('/api/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"));
    app.listen(PORT,() => {
      console.log(`Server started in port - `, PORT);
    });
  } catch (error) {
    throw  error;
  }
}

start();