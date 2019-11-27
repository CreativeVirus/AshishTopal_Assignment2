const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://AshishTopal:Admin123@cluster0-7zzqt.mongodb.net/test?retryWrites=true&w=majority';
//mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connect(dbURI, {dbName: 'mobileDB'}); 
mongoose.connection.on('connected', () => {
console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
console.log('Mongoose disconnected');
});
