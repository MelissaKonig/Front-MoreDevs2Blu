function carregalocalstorage(){
    return JSON.parse(localStorage.getItem('Alunos'))
};

function carregarEditar(event, id){
    console.log('Evento de click', event);
    event.preventdefault();
    carregarEditar(id)
};

function carregar(){
    console.log('Carregando janela');
    var tbody = document.querySelector('tbody');
    tbody.innerHTML = ''

    var funcionarios = localStorage.getItem('Funcionarios');

    funcionarios = JSON.parse(funcionarios);
    
    funcionarios.forEach((e) =>{
    var tr = `<tr>
                    <td>${e['id']}</td>
                    <td>${e['nome']}</td>
                    <td>${e['cpf']}</td>
                    <td>${e['idade']}</td>
                    <td>
                    <a href="editar.html">editar</a>
                    </td>
                </tr>`

        tbody.innerHTML += tr
        
    });
}

function deletar(id){
    var lista = carregaDados
    var novalista = [];
    lista.forEach(e => {
        if(e['id'] != id){
                novalista.push()
        }
    });
    localStorage.setItem('Funcionarios', JSON.stringify(novalista))
    carregar
}

window.onload = carregar