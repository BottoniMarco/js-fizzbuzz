for( var i = 1; i<=100; i++) {
  if (i%3 == 0 && i%5 == 0 ) {
    console.log("fizzbuzz");
    document.getElementById('numeri').innerHTML += (" fizzbuzz "+ "<br>");
  }
  else if  (i%5 == 0 && i%3 != 0) {
    console.log("buzz");
    document.getElementById('numeri').innerHTML += (" buzz " + "<br>");

  }
  else if (i %3 == 0 && i%5 != 0 ) {
    console.log(" fizz");
    document.getElementById('numeri').innerHTML += (" fizz " + "<br>");

  }
  else {
    console.log(i);
    document.getElementById('numeri').innerHTML += (i+ " " + "<br>");
  }
}

var mostraBtn = document.getElementById('mostra');

mostraBtn.addEventListener("click",
  function() {

    console.log("hai click su uno mostra")

    var mostraMultipli = document.getElementById('multipli');

    mostraMultipli.classList.remove("hidden");
    mostraMultipli.classList.add("show");
  }
);
