/**
 * MarcaController
 *
 * @description :: Server-side logic for managing marcas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    
    buscarMarca : function (req, res) {
        
        var vectorPalabras = req.param('name').split(' ');
        var vectorPalabrasResult = req.param('name').split(' ');

        Marca.find({}).exec(function (err,marcas){

            for (var i = 0; i < marcas.length; i++){

                var vectorMarcas = marcas[i].name.split(' ');

                if (vectorMarcas.length == 1) {
                    for (var j = 0; j < vectorPalabras.length; j++) {
                        if(UtilityService.strcmpi(vectorPalabras[j], marcas[i].name)){
                            vectorPalabrasResult[j] = '<b>'+vectorPalabras[j].toString()+'</b>';
                        }
                    }
                }
                else{
                    for (var j = 0; j < vectorPalabras.length; j++) {
                        if(UtilityService.strcmpi(vectorPalabras[j], vectorMarcas[0]) && j+1 < vectorPalabras.length){
                            var sonIguales = true;
                            for (var k = 1; k < vectorMarcas.length; k++) {
                                
                                if( !UtilityService.strcmpi(vectorPalabras[j+k],vectorMarcas[k]) ){
                                    sonIguales = false;
                                    break;
                                }
                            }
                            if (sonIguales) {
                                vectorPalabrasResult[j] = '<b>'+vectorPalabras[j].toString();
                                vectorPalabrasResult[j+k-1] = vectorPalabras[j+k-1].toString()+'</b>';
                            }
                        }
                    }
                }             
            }
            res.redirect('/buscarTipoRopa/'+encodeURIComponent( vectorPalabrasResult.join(' ') ) );
        });
    }    
};
