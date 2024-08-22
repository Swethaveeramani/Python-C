const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const profileRoute = require('./routes/profile');
const adminRoute = require('./routes/admin');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://swe:swetha%402703@cluster0.hv35p6t.mongodb.net/register?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/profile', profileRoute);
app.use('/admin-dashboard', adminRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
