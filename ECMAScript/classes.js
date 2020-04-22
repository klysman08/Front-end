class Lista {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends Lista {
    constructor() {
        super();
        this.usuario = "Klysman";
    }

    monstraUsuario(){
        console.log(this.usuario);
    }

    static soma (a, b) {
        return a + b;
    }

}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo');

}

class Matematica {
    static soma(a , b) {
        return a + b;
    }
}

MinhaLista.monstraUsuario();
console.log(Matematica.soma(50, 5));