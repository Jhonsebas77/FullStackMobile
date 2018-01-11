
/*  
 * Proyecto: Prueba FullStackMobile.
 * Empresa: Almundo
 * Responsable Proyecto: Sebastian Otalora
 * Responsable Contacto: jhonsebas77@outlook.com | 3217209516
 */

var mongoose = require('mongoose');
var Hotels = require('../models/hotels');

//Retorna todos los elementos de la peticion
exports.findAllHotels = function(req, res) {
	Hotels.find(function(err, hotels) {
    if(err) res.send(500, err.message);
    console.log('GET /hotels')
		res.status(200).json(hotels);
	});
};

//Retorna un unico elemento determinado por el :Id
exports.findById = function(req, res) {
	Hotels.findById(req.params.id, function(err, hotels) {
    if(err) return res.send(500, err.message);
    console.log('GET /hotels/' + req.params.id);
		res.status(200).json(hotels);
	});
};

//Permite agregar elementos a la peticion
exports.addHotels = function(req, res) {
	console.log('POST');
	console.log(req.body);

// Reasigna los valores
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
		latitude:	req.body.latitude,
		longitude:	req.body.longitude,
		people:	req.body.people
	});

//Guarda los valores en la BD
	hotels.save(function(err, hotels) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(hotels);
	});
};

//Actualiza un elmento especificandole un ID
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
		hotels.latitude =	req.body.latitude;
		hotels.longitude =	req.body.longitude;

		hotels.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(hotels);
		});
	});
};

//Elimina un elemento especificando su ID
exports.deleteHotels = function(req, res) {
	Hotels.findById(req.params.id, function(err, hotels) {
		hotels.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).send({message:'El hotel ha sido eliminado'});
		})
	});
};
