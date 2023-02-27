function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    //CHECKED HOMEM || MULHER
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //CRIANÇA
        img.setAttribute("src", "img/criancamenino.jpg");
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute("src", "img/jovemhomem.jpg");
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute("src", "img/adultohomem.jpg");
      } else {
        //IDOSO
        img.setAttribute("src", "img/velhohomem.jpg");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //CRIANÇA
        img.setAttribute("src", "./img/criancamenina.jpg");
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute("src", "./img/jovemmulher.jpg");
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute("src", "./img/adultamulher.jpg");
      } else {
        //IDOSO
        img.setAttribute("src", "./img/velhamulher.jpg");
      }
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`;
    res.appendChild(img);
  }
}
