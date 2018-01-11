var mongoose = require('mongoose');
var Hotels = require('../models/hotels');


exports.findAllHotels = function(req, res) {
	Hotels.find(function(err, hotels) {
    if(err) res.send(500, err.message);
    console.log('GET /hotels')
		res.status(200).json(hotels);
	});
};

exports.findById = function(req, res) {
	Hotels.findById(req.params.id, function(err, hotels) {
    if(err) return res.send(500, err.message);
    console.log('GET /hotels/' + req.params.id);
		res.status(200).json(hotels);
	});
};

exports.addHotels = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var hotels = new Hotels({
		name:	req.body.name,
		stars:	req.body.stars,
		price:	req.body.price,
		images:	req.body.images,
		imageMaps: req.body.imageMaps,
		address:	req.body.address,
		description:	req.body.description,
		city:	req.body.city,
		country:	req.body.country,
		wifi:	req.body.wifi,
		bed:	req.body.bed,
		television:	req.body.television,
		people:	req.body.people
	});

	hotels.save(function(err, hotels) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(hotels);
	});
};

exports.updateHotels = function(req, res) {
	console.log('PUT');
	console.log(req.body);
	Hotels.findById(req.params.id, function(err, hotels) {
		hotels.name	= req.body.name;
		hotels.stars = req.body.stars;
		hotels.price = req.body.price;
		hotels.images	= req.body.images;
		hotels.imageMaps = req.body.imageMaps;
		hotels.address = req.body.address;
		hotels.wifi = req.body.wifi;
		hotels.bed = req.body.bed;
		hotels.television = req.body.television;
		hotels.people = req.body.people;
		hotels.description = req.body.description;
		hotels.city = req.body.city;
		hotels.country = req.body.country;

		hotels.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(hotels);
		});
	});
};

exports.deleteHotels = function(req, res) {
	Hotels.findById(req.params.id, function(err, hotels) {
		hotels.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).send({message:'El hotel ha sido eliminado'});
		})
	});
};
