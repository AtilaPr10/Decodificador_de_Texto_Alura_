

//Função para limpar os campos
function limpar() {

    document.getElementById('formulario').onreset;

}

//rertorna parte de uma string de uma determinada posição
function ASC(String) {
  return String.charCodeAt(0);
}

//é usado para criar uma string a partir de uma determinada sequência de unidades de código UTF-16
function CHAR(Ascii) {

   return String.fromCharCode(Ascii);
}

var chave = "sdfsdfkdsdfjdsfjsjsakdjlkasdjd";

//Função para Codificar o texto
function encriptar() {
      //pega os dados do campo text area 1
      var dados  = document.getElementById("txt_1").value;
      var texto = "";
      var len;
      var p = 0;
      var i;

      for (i = 0; i < dados.length; i++){
         p++;
         len = (ASC(dados.substr(i,1)) + (ASC(chave.substr(p,1))));
         if (p == 50){
             p = 1;
         }
         if(len > 255){
           len -= 256;
         }
         texto += (CHAR(len));
      }
      document.getElementById("txt_2").value =  texto;  

}

//Função para Decodificar o texto
function desencriptar() {
          
    console.log("ok");
    var dados  = document.getElementById("txt_2").value;
    var texto = "";
    var len;
    var p = 0;
    var i;
    for (i = 0; i < dados.length; i++){
       p++;
       len = (ASC(dados.substr(i,1)) - (ASC(chave.substr(p,1))));
       if (p == 50){
           p = 1;
       }
       if(len < 0){
         len += 256;
       }
       texto += (CHAR(len));
    }
    document.getElementById("txt_3").value =  texto;  

}

     