// TODO: Implemente a função avaliarCandidato() aqui
// Dicas:
// 1. Pegue os valores dos inputs usando getElementById() e .value
// 2. Converta os valores para número usando Number()
// 3. Declare variáveis para armazenar os valores
// 4. Use if/else para verificar os critérios
// 5. Atualize o parágrafo com id="resultado" usando innerHTML
// 6. Adicione a classe apropriada (.apto ou .inapto) usando classList.add()

function avaliarCandidato() {
    //limpando os campos e classes
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('resultado').classList.remove("apto");
    document.getElementById('resultado').classList.remove("inapto");
   document.getElementById('idade').value 
   let idade = document.getElementById('idade').value;
   let nota = document.getElementById('nota').value;
   let horasVoo = document.getElementById('horasVoo').value;
   idade = parseInt(idade);
   nota =parseInt(nota);
   horasVoo = parseInt(horasVoo);
   let resultado = document.getElementById('resultado').value;
   if(idade < 25 || idade > 45 ){
        document.getElementById('resultado').innerHTML = "Inapto ,idade Inadequada";
        document.getElementById('resultado').classList.add("inapto");

    }else if(horasVoo < 1000){
        document.getElementById('resultado').innerHTML = "Inapto, horas de Voo Inadequado";
        document.getElementById('resultado').classList.add("inapto");
    }else if(nota < 8){
        document.getElementById('resultado').innerHTML = "Inapto ,Notas Psicológicas insuficiênte";
        document.getElementById('resultado').classList.add("inapto");
    }else{
        document.getElementById('resultado').innerHTML = "Apto";
        document.getElementById('resultado').classList.remove("inapto");
        document.getElementById('resultado').classList.add("apto");
   }
}
