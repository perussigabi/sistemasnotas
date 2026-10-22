const nomeAluno = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const idade = document.querySelector("#idade");
const primeiraNota = document.querySelector("#nota1");
const segundaNota = document.querySelector("#nota2");
const terceiraNota = document.querySelector("#nota3");
const enviar = document.querySelector("#submit");
let media = 0;
let mediaAluno = document.querySelector("#media");
let situacao = "";
const situacaoAluno = document.querySelector("#situacao");
let nome = nomeAluno;
const resultadoNome= document.querySelector("#resultadoNome");
let sobrenomeAluno = sobrenome;
const resultadoSobrenome = document.querySelector("#resultadoSobrenome");
let idadeAluno = idade;
const resultadoIdade = document.querySelector("#resultadoIdade");
let nota1 = primeiraNota;
const nota1Aluno = document.querySelector("#resultadoNota1");
let nota2 = segundaNota;
const nota2Aluno = document.querySelector("#resultadoNota2");
let nota3 = terceiraNota;
const nota3Aluno = document.querySelector("#resultadoNota3");
let mediaDoAluno = mediaAluno;
const resultadoMedia = document.querySelector("#resultadoMedia");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nomeAluno = nome.value;
    const sobrenomeAluno = sobrenome.value;
    const idadeAluno = idade.value;

    const n1 = Number(primeiraNota.value);
    const n2 = Number(segundaNota.value);
    const n3 = Number(terceiraNota.value);

    media = (n1 + n2 + n3)/3;
    mediaAluno.textContent = media.toFixed(2);

     if(media>= 7){
        situacao = "Aprovado!";
        situacaoAluno.classList.add("aprovado");
    }
    else if (media >= 5 && media < 7){
        situacao = "Recuperação";
        situacaoAluno.classList.add("recuperacao");
    }
    else {
        situacao = "Reprovado";
        situacaoAluno.classList.add("reprovado");
    }
   
    situacaoAluno.textContent = situacao;


    resultadoNome.textContent = nomeAluno;
    resultadoSobrenome.textContent = sobrenomeAluno;
    resultadoIdade.textContent = idadeAluno;

    nota1Aluno.textContent = n1;
    nota2Aluno.textContent = n2;
    nota3Aluno.textContent = n3;

    resultadoMedia.textContent = mediaDoAluno;
    
    
  
});

