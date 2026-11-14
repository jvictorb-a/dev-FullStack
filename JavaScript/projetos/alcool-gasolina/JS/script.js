function calcularMelhorPreco() {
        //Validar Campos
        let precoAlcool = document.getElementById("alcool").value;
        let precoGasolina = document.getElementById("gasolina").value;

        if (precoAlcool != "") {
          if (precoGasolina != "") {

            //calcular
            let result = precoAlcool / precoGasolina;

            if(result >= 0.7){
              //alert("Utilizar Gasolina");
              document.getElementById('result').innerHTML="Melhor utilizar Gasolina";
            } else {
              //alert("Utilizar Álcool");
              document.getElementById('result').innerHTML="Melhor utilizar Álcool";
            }
          } else {
            alert("Preencha o preço da Gasolina");
          }
        } else {
          alert("Preencha o preço do Álcool");
        }
}