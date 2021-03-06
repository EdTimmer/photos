const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CookieSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  restaurantname: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  username: {
    type: String
  },
});

CookieSchema.index({
  "$**": "text"
})

module.exports = mongoose.model('Cookie', CookieSchema);