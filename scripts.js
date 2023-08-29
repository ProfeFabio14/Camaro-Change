const camaroBlue = document.getElementById("blue")
const camaroOrange = document.getElementById("orange")
const camaroGray = document.getElementById("gray")
const camaroWhite = document.getElementById("white")
const trocaCamaro = document.getElementById("img-change")


camaroBlue.addEventListener ("click", function () {
    trocaCamaro.src="./assets/blue-metallic.png"
})

camaroOrange.addEventListener ("click", function () {
    trocaCamaro.src="./assets/orange.png"
})

camaroGray.addEventListener ("click", function () {
    trocaCamaro.src="./assets/gray.png"
})

camaroWhite.addEventListener ("click", function () {
    trocaCamaro.src="./assets/white.png"
})

