/**
 * TipoRopaController
 *
 * @description :: Server-side logic for managing Tiporopas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	buscarTipoRopa : function (req, res) {

		var vectorPalabras = req.param('textoMarca').split(' ');

  		TipoRopa.find({}).exec(function (err,tipoRopa){

			for (var i = 0; i < tipoRopa.length; i++){								
				for (var j = 0; j < vectorPalabras.length; j++) {
					if(UtilityService.strcmpi(vectorPalabras[j],tipoRopa[i].name)){
						vectorPalabras[j]= '<i>'+vectorPalabras[j].toString()+'</i>';
					}
				}
			}
    		res.ok({data:vectorPalabras.join(' ') });
		});

  	}
};

