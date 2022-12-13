from flask import Flask, render_template, request, redirect
from pessoa import Pessoa

#
app = Flask(__name__)

pessoa1 = Pessoa('Melissa', '27', '1:61')
pessoa2 = Pessoa('Haiko', '17', '1:70')
pessoa3 = Pessoa('Everton', '32', '1:75')
                           
lista = [pessoa1, pessoa2, pessoa3]

app = Flask(__name__)

@app.route('/novo')
def novo():
    return render_template('novo.html', titulo = 'Cadastro Pessoa')

@app.route('/criar', methods=['POST'])
def criar():
    nome = request.form['nome']
    idade = request.form['idade']
    altura = request.form['altura']
    
    abacate = Pessoa(nome, idade, altura)
    
    lista.apend(abacate)
    
    return redirect('/')

app.run(debug=True)