const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const hotelsSchema = new Schema({
  name:   { type: String },
  stars:  { type: Number },
  images: { type: String },
  price:  { type: Number },
  address:{ type: String },
  number: { type: String },
  description:{ type: String },
  city: { type: String },
  country:{ type: String },
  wifi:{type:Boolean},
  bed:{type:String},
  room:{type:String},
  people:{type:String}
});

module.exports = mongoose.model('hotels', hotelsSchema);
