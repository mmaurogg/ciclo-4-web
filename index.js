var registrarOpercion = require('./src');
var port = 4040;

registrarOpercion.registrarOpercion(15000, "ingreso", "cualquiera", "");

() => {
    console.log('Conexion a BD lograda');
    app.listen(port, () => {
        console.log('servidor corriendo en puerto', port);
    });
});