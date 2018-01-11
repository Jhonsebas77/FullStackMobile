const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const hotelsSchema = new Schema({
  name:   { type: String },
  stars:  { type: Number },
  images: { type: String },
  imageMaps:{type:String},
  price:  { type: Number },
  address:{ type: String },
  description:{ type: String },
  city: { type: String },
  country:{ type: String },
  wifi:{type:String},
  television:{type:String},
  bed:{type:Number},
  latitude:{type:Number},
  longitude:{type:Number},
  people:{type:Number}
});

module.exports = mongoose.model('hotels', hotelsSchema);
