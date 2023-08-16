function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // a debaixo é completa, mas o programa ja tem um resumo desse cdg pronto.
  const img = document.querySelector("#profile img")

  //if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  // html.classList.add("light")}

  // pegar a tag img
  //const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adc a imagem light
    img.setAttribute("src", "./assests/avatar-light.png")
  } else {
    // se tiver sem light monde, manter a img normal
    img.setAttribute("src", "./assests/Avatar.png")
  }
}
