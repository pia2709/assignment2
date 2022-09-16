window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   let convertButton = document.getElementById("convertButton");
   let cInput = document.getElementById('cInput');
   let fInput = document.getElementById('fInput');

   cInput.addEventListener("input", function () { fInput.value = "" });
   fInput.addEventListener("input", function () { cInput.value = "" });

   convertButton.addEventListener("click", function () {
      if (cInput.value === "") {
         if (isNaN(parseFloat(fInput.value))) {
            document.getElementById("errorMessage").innerHTML = fInput.value + " is not a number";
         }
         else {
            document.getElementById("errorMessage").innerHTML = "";
            cInput.value = convertFtoC(parseFloat(fInput.value));
            if (parseFloat(fInput.value) < 32) {
               document.getElementById("weatherImage").src = "cold.png";
            }
            else if (parseFloat(fInput.value) >= 32 && parseFloat(fInput.value) <= 50) {
               document.getElementById("weatherImage").src = "cool.png";
            }
            else {
               document.getElementById("weatherImage").src = "warm.png";
            }
         }


      }
      else {
         if (isNaN(parseFloat(cInput.value))) {
            document.getElementById("errorMessage").innerHTML = cInput.value + " is not a number";
         }
         else {
            document.getElementById("errorMessage").innerHTML = "";
            fInput.value = convertCtoF(parseFloat(cInput.value));
            if (parseFloat(fInput.value) < 32) {
               document.getElementById("weatherImage").src = "cold.png";
            }
            else if (parseFloat(fInput.value) >= 32 && parseFloat(fInput.value) <= 50) {
               document.getElementById("weatherImage").src = "cool.png";
            }
            else {
               document.getElementById("weatherImage").src = "warm.png";
            }
         }
      }
   })
}

function convertCtoF(degreesCelsius) {
   let f = degreesCelsius * 9 / 5 + 32;
   return f;
}

function convertFtoC(degreesFahrenheit) {
   let c = (degreesFahrenheit - 32) * 5 / 9;
   return c;

}
