window.onload = function () {
  const contenedores = document.querySelectorAll(".questions");

  contenedores.forEach((item) => {
    if (item.classList.contains(".open")) {
      const questionsResponse = document.querySelector(".questions-response");
      questionsResponse.style.height = questionsResponse.scrollHeight + "px";
    }

    item.addEventListener("click", (e) => {
      // close another items

      contenedores.forEach(function (contenedor) {
        contenedor.classList.remove("open");
        contenedor.querySelector(
          ".questions-response"
        ).computedStyleMap.height = "0";
      });

      if (item.classList.contains("open")) {
        item.classList.toggle("close");
      } else {
        item.classList.toggle("open");
      }
    });
  });
};
