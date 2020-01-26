const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
// Below Code with Async Await
// const connectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     })
//     .then(() => console.log('Mongo DB Connected'))
//     .catch(err => {
//       console.log(err.message);
//       process.exit(1);
//     });
// };
// Below Code With Async Await
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
