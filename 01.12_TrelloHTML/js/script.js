//criei uma variavel chamada elemento 
//document acessa o documento html que esta sendo chamado o script
//query selector e um methodo interno do javaScript que nos retorna um elemento html 
var elemento = document.querySelector('h1')
//variavel recebendo inner html para incremento ou alteracao descrtivo
elemento.innerHTML += ' JS';
//variavel elemento recebendo estilizacao de cor 
elemento.style.color = '#white';
//console log e o nosso print retorno variavel
console.log(elemento);

//criei uma variavel chamada limpar
function limpar(event){
    //preventDefault nao atualiza o reload da pagina
    event.preventDefault();
    //acessando documento html buscando elemento form e resetando formulario
    document.querySelector('form').reset();
    
    //console log limpando
    console.log('Limpando....');
}

function salvar(event){
    event.preventDefault();
    console.log('salvando....');
    
    var name = document.getElementsByName('nome')[0].value;
    var doc_people = document.getElementsByName('cpf')[0].value;
    var year = document.getElementsByName('idade')[0].value;

    var listaFuncionarios = JSON.parse(localStorage.getItem('Funcionarios'));

    if(listaFuncionarios == null){
        listaFuncionarios = [];
    }
    var id = JSON.parse(localStorage.getItem('IdFuncionario'));
    if(listaFuncionarios == null){
        id = 0;
    }
    id = id +1;

    var Funcionario = {
                    'id': id,
                    'nome': name,
                    'cpf': doc_people,
                    'idade': year
        };listaFuncionarios.push(Funcionario);

    
    localStorage.setItem('IdFuncionario', JSON.stringify(id));    
    localStorage.setItem('Funcionario', JSON.stringify(listaFuncionarios));
    limpar(event)
}

document.getElementById('salvar').addEventListener('click', salvar)
