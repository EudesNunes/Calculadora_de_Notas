
function calculo() {
    /* -------------------Calculo das Notas------------------ */
    var notas_B1 = (parseFloat(B1_N1.value) + parseFloat(B1_N2.value) + parseFloat(B1_N3.value)) / 3
    var notas_B2 = (parseFloat(B2_N1.value) + parseFloat(B2_N2.value) + parseFloat(B2_N3.value)) / 3
    var total = 0;
    total = (notas_B1 + notas_B2) / 2;
    
    resultado.value = total.toFixed(2)

    /* -------------------Calculo da Frequencia------------------ */

    var b1_freq = ((parseInt(B1_qaulas.value) - parseInt(B1_qfaltas.value)) / parseInt(B1_qaulas.value)) * 100;
    var b2_freq = ((parseInt(B2_qaulas.value) - parseInt(B2_qfaltas.value)) / parseInt(B2_qaulas.value)) * 100;
    resultado_freq.value = ((b1_freq + b2_freq) / 2).toFixed(2);

    /* -------------------Teste de Aprovação------------------ */

    if (B1_N1.value === "" || B1_N2.value === "" || B1_N3.value === "" || B2_N1.value === "" 
    || B2_N2.value === "" || B2_N3.value === "" || B1_qaulas.value === ""||B1_qfaltas.value === "" 
    || B2_qaulas.value === "" || B2_qfaltas.value === ""){
        situacao.value = "Preencha todos os Campo!!"
        resultado_freq.value = ""
        resultado.value = ""
        document.getElementById('ex').style.visibility = 'hidden';
        document.getElementById('situacao').style.backgroundColor ="red";
        document.getElementById('B1_N1').focus();

    }
    else if ((resultado.value >= 7) && (resultado_freq.value >= 75)) {
        situacao.value = "Aluno aprovado!";
        document.getElementById('ex').style.visibility = 'hidden';
        document.getElementById('situacao').style.backgroundColor ="green";
    } else if (resultado_freq.value <= 75) {
        situacao.value = "Aluno Reprovado!";
        document.getElementById('ex').style.visibility = 'hidden';
        document.getElementById('situacao').style.backgroundColor ="orange";

        
    } else {
        situacao.value = "Aluno em exame!";
        document.getElementById('ex').style.visibility = 'visible';
        document.getElementById('situacao').style.backgroundColor ="orange";
        document.getElementById('exame').focus();


    }

    /* ---------------------------------------------------------- */

}

function exames() {
    var resexame = (((parseFloat(resultado.value) + parseFloat(exame.value)) / 2))
    if (exame.value === "") {
        ExameSituacao.value = "Preencha o Campo Nota do Exame!"
        document.getElementById('ExameSituacao').style.backgroundColor ="red";
        document.getElementById('exame').focus();
    }
    else if ((situacao.value === "") || (resultado.value === "") || (resultado_freq.value === "")) {
        ExameSituacao.value = "Conclua o Primeiro Passo!"
        document.getElementById('ExameSituacao').style.backgroundColor ="red";
        document.getElementById('exame').focus();
    }
    else if (situacao.value === "Aluno Reprovado!") {
        ExameSituacao.value = "O Aluno já foi Reprovado!"
        document.getElementById('ExameSituacao').style.backgroundColor ="red";
        document.getElementById('exame').focus();
    }
    else if (resexame > 5) {
        ExameSituacao.value = "Aluno Aprovado!"
        document.getElementById('ExameSituacao').style.backgroundColor ="green";
        document.getElementById('exame').focus();
        
    } else {
        ExameSituacao.value = "Aluno Reprovado!"
        document.getElementById('ExameSituacao').style.backgroundColor ="orange";
        document.getElementById('exame').focus();
    }
}

function iniciar(){
    document.getElementById('ex').style.visibility = 'hidden';
    document.getElementById('B1_N1').focus();


}
