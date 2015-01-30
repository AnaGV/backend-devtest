# test


Prueba realizada en Framework Sails

1. Instalar Sails -> npm -g install sails
2. Instalar mongodb para la base de datos.
3. clonar repositorio del proyecto
4. restaurar la base de datos con el backup en la carpeta dump


Estructura

 Un modelo para las marcas con su controlador -> Modelo: Marca, Controlador: MarcaController, Metodo : BuscarMarca
 Un modelo para los tipo de ropas con su controlador -> Modelo: TipoRopa, Controlador: TipoRopaController, Metodo : BuscarTipoRopa.



1. El index muestra el formulario para enviar la búsqueda.
2. Una vez que se envía el formulario va a la ruta /buscar este llama al método buscarMarca del controlador MarcaController.
3. BuscarMarca se encarga de recibir el texto a buscar,  obtiene todas las marcas guardadas en la base de datos y las va comparando por palabras, cuando encuentra una o más palabras les da el formato en negrita. Redirecciona a BuscarTipoRopa con el texto formateado.
4. BuscarTipoRopa recibe el texto formateado del metodo BuscarMarca del controlador MarcaController, compara por palabras con los tipos de ropas guardadas en la base de datos y les da formato en cursiva y retorna la respuesta.
5. La informacion se envia con ajax y retorna la respuesta con jquery.



a [Sails](http://sailsjs.org) application


