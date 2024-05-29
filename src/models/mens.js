const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({
  ID: {
    type: Number,
   
  },
  Name: {
    type: String,
    
  },
  Sex: {
    type: String,
    
  },
  Age: {
    type: Number,
    
  },
  NOC: {
    type: String,
    
  },
  Year: {
    type: Number,
    
  },
  Season: {
    type: String,
    
  },
  Medal: {
    type: String,
    
    enum: ['Gold', 'Silver', 'Bronze', 'NA']
  }
}, {
  versionKey: false // optional: removes the __v field
});

const MensRanking = mongoose.model('MenRanking',menSchema);

module.exports = MensRanking;
