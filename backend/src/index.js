require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/usersRoute');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const app = express(); 
 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Connect to MongoDB database 
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('Connected to MongoDB'); 
}).catch((error) => { 
    console.error('Error connecting to MongoDB:', error);
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
   