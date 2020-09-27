const img = document.getElementsByClassName("img");

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function () {
    let content = this.nextElementSibling;
    content.classList.toggle("active");
  });
}
