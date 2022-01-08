document.addEventListener("DOMContentLoaded", () => {
  for (let index = 0; index < 64; index++) {
    let board = document.createElement("div");
    board.className = "paintArea";
    document.getElementById("board").appendChild(board);
  }

  const board = document.getElementById("board");
  const boardDivs = board.querySelectorAll("div");
  const bacKColor = document.getElementById("bacKColor");
  const controls = document.getElementsByClassName("controls")[0];
  const cBtn = controls.querySelectorAll("button");
  window.currentMode = "Color Mode"

 

  const getColor = () => {
 //   console.log(window.currentMode);
    let color;
    if (window.currentMode === "Color Mode") {
      color = document.getElementById("color").value;
    }
    if (window.currentMode === "Rainbow") {
      const randomA = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      const randomC = Math.floor(Math.random() * 256);

      color = `rgb(${randomA}, ${randomB}, ${randomC})`;
    }

    if (window.currentMode === "Eraser") {
      color = "#ffff";
    }
   // console.log(color);

    return color;
  };
  const setCurrentMode = (e) => {
    window.currentMode = e.target.innerText.trim();
   // e.target.classList.add('active')
   
    console.log(currentMode);
    getColor();
  };

  cBtn.forEach((btn) => {
    btn.addEventListener("click", setCurrentMode);
  });

 

  boardDivs.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      //	let color = document.getElementById('color').value
      e.target.style.backgroundColor = getColor();
      //   console.log(getColor(e));
    });
  });

  bacKColor.addEventListener("change", (e) => {
    console.log(e.target.value);
    document.body.style.backgroundColor = e.target.value;
  });

});


