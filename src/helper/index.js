const { response } = require("express")

const checkID = (id) =>{
    if(isNaN(id)){
        let response = {
            ok: false,
            meta: {
                status: 400,
            },
            msg: 'Número ID incorrecto'
        }
        return response
    }
    return false
}

const check_id = (id) =>{
    if(isNaN(id)){
        response = {
            ok: false,
            meta: {
                status: 400,
            },
            msg: 'Número id incorrecto'
        }
        return response
    }
    return false
}


module.exports = {
    checkID
}

        