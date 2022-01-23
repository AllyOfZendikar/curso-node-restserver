const { request, response } = require( 'express' );

const usuariosGet = ( req = request, res = response ) => {

    const params = req.query;
    
    res.json({
        msg: 'get API - Controlador'
    });
}

const usuariosPost = ( req = request, res = response ) => {
    
    const { nombre, edad } = req.body;
    
    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usuariosPut = ( req = request, res = response ) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const usuariosPatch = ( req = request, res = response ) => {
    res.json({
        msg: 'patch API - Controlador'
    });
}

const usuariosDelete = ( req, res ) => {
    res.json({
        msg: 'delete API - Controlador'
    });

}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}