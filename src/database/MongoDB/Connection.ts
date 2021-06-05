import mongoose from 'mongoose';
const connection = () =>
  mongoose.connect(
    'mongodb://localhost:27017/Trabalho_Final_SD',
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log('Successful database connection');
    },
  );
export { connection };
