for (let i = 0; i < 120; i++) {
  let confeti = document.createElement("div");
  confeti.style.position = "fixed";
  confeti.style.width = "8px";
  confeti.style.height = "8px";
  confeti.style.backgroundColor =
    ["#ff80ab", "#f06292", "#ba68c8"][Math.floor(Math.random() * 3)];
  confeti.style.left = Math.random() * 100 + "vw";
  confeti.style.top = "-10px";
  confeti.style.borderRadius = "50%";
  document.body.appendChild(confeti);

  let velocidad = Math.random() * 3 + 2;

  let caer = setInterval(() => {
    confeti.style.top = parseInt(confeti.style.top) + velocidad + "px";
    if (parseInt(confeti.style.top) > window.innerHeight) {
      confeti.remove();
      clearInterval(caer);
    }
  }, 20);
}