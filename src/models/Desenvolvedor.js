import Aluno from './Aluno.js';

class Desenvolvedor {
    constructor(aluno, equipe, funcao) {
        this.id = this.generateId();
        this.aluno = aluno;
        this.equipe = equipe;
        this.funcao = funcao;
    }
}

export default Desenvolvedor;