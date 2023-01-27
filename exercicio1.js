/*1º exercício
Crie uma classe "Animal" que deve receber dois parâmetros no método construtor, nome e idade, e anotá-los em propriedades da classe. Além disso, ele também deve possuir um método chamado apresentar() que ao ser chamado exibirá a mensagem "Oi! Eu sou um Animal".*/

class Animal {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }

    apresentar(){
        return 'Oi! Eu sou um Animal';
    }
}
const animal = new Animal('Pesto', 2)
console.log(animal)
console.log(animal.apresentar())

/*Crie classes "Mamifero", "Ave" e "Peixe". Essas classes devem herdar os atributos e métodos da classe "Animal". Crie atributos e métodos próprios para cada uma dessas classes. Lembre-se que, o método apresentar() precisa ser atualizado informando se o objeto é um Mamifero, Ave ou Peixe.*/

class Mamifero extends Animal{
    qtdPatas;

    constructor(nome, idade, qtdPatas){
        super(nome, idade);
        this.qtdPatas = qtdPatas
    }

    apresentar(){
        return 'Oi! Eu sou um Mamifero';
    }
}
const mamifero = new Mamifero('Mimosa', 5, 4)
console.log(mamifero)
console.log(mamifero.apresentar())


class Ave extends Animal{
    selvagem;

    constructor(nome, idade, selvagem){
        super(nome, idade);
        this.selvagem = selvagem
    }

    apresentar(){
        return 'Oi! Eu sou um Ave';
    }
}
const ave = new Ave('Aguia', 1, true)
console.log(ave)
console.log(ave.apresentar())


class Peixe extends Animal{
    viveNoMar;

    constructor(nome, idade, viveNoMar){
        super(nome, idade);
        this.viveNoMar = viveNoMar
    }

    apresentar(){
        return 'Oi! Eu sou um Peixe';
    }
}
const peixe = new Peixe('Tucunare', 3, false)
console.log(peixe)
console.log(peixe.apresentar())


//! Sinta-se livre para criar novas classes extendendo "Ave" ou "Peixe".

/*Crie classes "Humano" e "Cachorro", ambos devem extender de "Mamifero". Assim como feito anteriormente, crie métodos e atributos para cada um deles.*/

class Humano extends Mamifero{
    sexo;

    constructor(nome, idade, qtdPatas, sexo){
        super(nome, idade, qtdPatas);
        this.sexo = sexo
    }

    apresentar(){
        return 'Oi! Eu sou um Humano';
    }
}
const humano = new Humano('Franklin', 33, 2, 'm')
console.log(humano)
console.log(humano.apresentar())


class Cachorro extends Mamifero{
    raca;

    constructor(nome, idade, qtdPatas, raca){
        super(nome, idade, qtdPatas);
        this.raca = raca
    }

    apresentar(){
        return 'Oi! Eu sou um Cachorro';
    }
}
const cachorro = new Cachorro('Bart', 5, 4, 'Beagle')
console.log(cachorro)
console.log(cachorro.apresentar())

/*Crie agora algumas classes de profissões como, por exemplo: "Advogado", "Medico" e "Desenvolvedor". Siga a mesma ideia do que foi solicitado anteriormente.*/
class Profissao{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return 'Oi! Eu tenho uma Profissao'
    }
}
const profissao = new Profissao('Franklin', 33)
console.log(profissao)
console.log(profissao.apresentar())


class Advogado extends Profissao{
    apvOAB;

    constructor(nome, idade, apvOAB){
        super(nome, idade);
        this.apvOAB = apvOAB
    }

    apresentar(){
        return 'Oi! Eu sou um Advogado'
    }
}
const advogado = new Advogado('Franklin', 33, true)
console.log(advogado)
console.log(advogado.apresentar())


class Medico extends Profissao{
    atendePlanoDeSaude;

    constructor(nome, idade, atendePlanoDeSaude){
        super(nome, idade);
        this.atendePlanoDeSaude = atendePlanoDeSaude
    }

    apresentar(){
        return 'Oi! Eu sou um Medico'
    }
}
const medico = new Medico('Franklin', 33, false)
console.log(medico)
console.log(medico.apresentar())



class Desenvolvedor extends Profissao{
    possuiEmprego;

    constructor(nome, idade, possuiEmprego){
        super(nome, idade);
        this.possuiEmprego = possuiEmprego
    }

    apresentar(){
        return 'Oi! Eu sou um Desenvolvedor'
    }
}
const desenvolvedor = new Desenvolvedor('Franklin', 33, false)
console.log(desenvolvedor)
console.log(desenvolvedor.apresentar())

/*Extendendo de Desenvolvedor, crie um FrontEnd e um BackEnd. Cada um deles deve ter métodos próprios e aproveita para adicionar também condicionais, como, por exemplo, o desenvolvedor BackEnd pode ter um método chamado darDesculpa(), onde você gera um número aleatório. Se ele for par, exibe a mensagem "Na minha máquina funciona" e se for impar "Terminei! Falta só testar".*/

class FrontEnd extends Desenvolvedor{
    programaJavaScript;

    constructor(nome, idade, possuiEmprego, programaJavaScript){
        super(nome, idade, possuiEmprego);
        this.programaJavaScript = programaJavaScript
    }

    apresentar(){
        return 'Oi! Eu sou um Desenvolvedor FrontEnd'
    }
}
const frontEnd = new FrontEnd('Franklin', 33,false, true)
console.log(frontEnd)
console.log(frontEnd.apresentar())


class BackEnd extends Desenvolvedor{
    linguagemQuePrograma;

    constructor(nome, idade, possuiEmprego, linguagemQuePrograma){
        super(nome, idade, possuiEmprego);
        this.linguagemQuePrograma = linguagemQuePrograma
    }

    darDesculpa(){
        let numAlet = this.calcularNumeroAleatorio();
        console.log(numAlet);
        if(numAlet % 2 == 0){
            return 'Na minha máquina funciona'
        }
        else{
            return 'Terminei! Falta só testar'
        }
    }
    calcularNumeroAleatorio(){
        return Math.floor(Math.random() * 10 + 1);
    }
}

const backEnd = new BackEnd ('Franklin', 33, false, 'Java')
console.log(backEnd)
console.log(backEnd.darDesculpa())

/*Suba tudo no git para apresentar na próxima aula :)*/