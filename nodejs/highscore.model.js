import mongoose from 'mongoose';
//const mongoose = require('mongoose');


const { Schema } = mongoose;

// is id out added?
const highscoreSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId, ref: 'User',
    required: [true, 'Highscore must have User'],
    unique: true,
  },
  highscores: [{
    highscore: Number,
  }],
});
export default mongoose.model('Highscores', highscoreSchema);