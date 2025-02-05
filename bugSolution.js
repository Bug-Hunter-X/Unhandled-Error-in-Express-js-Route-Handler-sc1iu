const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  //Check if userId is a valid number
  if(isNaN(parseInt(userId))){
    return res.status(400).send('Invalid user ID');
  }
  try {
    const user = users.find(user => user.id === parseInt(userId));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Server error');
  }
});