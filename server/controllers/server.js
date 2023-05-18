
var id_antena = 1
var lista_antenas = [];

class antena {
    _id_antena;
    _mensaje;
    _lista_celulares;
    _largo_lista;

    // Crear_antena()
    constructor(lista_celulares) {
        this._id_antena = id_antena;
        this._mensaje ={};
        this._lista_celulares = lista_celulares;
        this._largo_lista = lista_celulares.length;
        id_antena = id_antena + 1;
    }
    
    Actualizar_antena(celular){
        this._lista_celulares[this._largo_lista] = celular;
        this._largo_lista = this._largo_lista + 1;
        return true
    }

    Visualizar_antena(){
        return [this._id_antena,this._lista_celulares]
    }

    eliminar_antena(){
        delete(lista_antenas[this._id_antena])
    }
  }

function crear_antena(){
    let created_antena = new antena([]);
    lista_antenas[id_antena-1] = created_antena;
    console.log(lista_antenas)
    return created_antena
}

var id_celular = 1
var lista_celulares = [];

class celular {
    _id_celular;
    _usuario;
    _mensajes;
    _amigos;
    _conectado;

    // crearCelular()
    constructor(usuario) {
        this._id_celular = id_celular;
        this._usuario = usuario;
        this._mensajes = {};
        this._amigos = [];
        this._conectado = false;
        id_celular = id_celular + 1;
    }

    visualizarCelular(){
        return [this._id_celular,this._usuario,this._amigos,this._conectado]
    }

    eliminarCelular(){
        delete(lista_celulares[this._id_celular-2])
    }
  }

function crear_celular(){
    let created_celular = new celular([]);
    lista_celulares[id_celular-1] = created_celular;
    console.log(lista_celulares)
    return created_celular
}


