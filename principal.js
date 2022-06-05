function calculo() {
    /* -------------------Calculo das Notas------------------ */
    var notas_B1 = [parseInt(B1_N1.value), parseInt(B1_N2.value), parseInt(B1_N3.value)]
    var notas_B2 = [parseInt(B2_N1.value), parseInt(B2_N2.value), parseInt(B2_N3.value)]

    
    var totprimeiro = 0;
    for (var i = 0; i < notas_B1.length; i++) {
        totprimeiro += notas_B1[i] / notas_B1.length;
    }

    var totsegundo = 0;
    for (var i = 0; i < notas_B2.length; i++) {
        totsegundo += notas_B2[i] / notas_B2.length;
    }
    resultado.value = (totprimeiro + totsegundo) / 2 ;

    /* -------------------Calculo da Frequencia------------------ */

    var b1_freq = ((parseInt(B1_qaulas.value) - parseInt(B1_qfaltas.value)) / parseInt(B1_qaulas.value)) * 100;
    var b2_freq = ((parseInt(B2_qaulas.value) - parseInt(B2_qfaltas.value)) / parseInt(B2_qaulas.value)) * 100;
    resultado_freq.value = (b1_freq + b2_freq) / 2;

    /* -------------------Teste de Aprovação------------------ */

    if ((resultado.value >= 7) && (resultado_freq.value >= 75)) {
        situacao.value = "Aluno aprovado!";
    } else if (resultado_freq.value <= 75) {
        situacao.value = "Aluno Reprovado!";
    } else {
        situacao.value = "Aluno em exame!";
    }

    /* ---------------------------------------------------------- */

}

function exames() {
    var resexame = (((parseInt(resultado.value) + parseInt(exame.value)) / 2))
    if (exame.value === "") {
        ExameSituacao.value = "Preencha o Campo Nota do Exame!"
    }
    else if ((situacao.value === "") || (resultado.value === "") || (resultado_freq.value === "")) {
        ExameSituacao.value = "Conclua o Primeiro Passo!"
    }
    else if (situacao.value === "Aluno Reprovado!") {
        ExameSituacao.value = "O Aluno já foi Reprovado!"
    }
    else if (resexame > 5) {
        ExameSituacao.value = "Aluno Aprovado!"
    } else {
        ExameSituacao.value = "Aluno Reprovado!"
    }
}