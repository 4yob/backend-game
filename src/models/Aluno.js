class Aluno {
    constructor(id, nome, idade, turma) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.turma = turma;
    }

    generateId() {
        return Math.floor(Math.random() * 999 + 1);
    }
}

export default Aluno;