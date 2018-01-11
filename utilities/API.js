  const api =
    async function(){
     const url='http://192.168.0.3:3000/api/hotels/';
     // const url='http://192.168.10.148:3000/api/hotels/';
     const response = await fetch(url);
     let hoteles=  await response.json();
     return hoteles;
  };

  const apiDetalle =
    async function(id){
     const url='http://192.168.0.3:3000/api/hotels/'+ id;
     // const url='http://192.168.10.148:3000/api/hotels/'+ id;
     const responsedetail = await fetch(url);
     let detalleHoteles=  await responsedetail.json();
     return detalleHoteles;
  };

module.exports.api = api;
module.exports.apiDetalle = apiDetalle;
