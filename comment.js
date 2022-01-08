for (let i = 0; i < boardDivs.length; i++) {
  const element = boardDivs[i];
  console.log(element);
  element.addEventListener("mouseover", changeColor);
}

 // Array.from(boardDivs).forEach(function (element) {
  //     element.addEventListener('click', () => {
  //         console.log(element);
  //     })

  // });

  // for (let i = 0; i < boardDivs.length; i++) {
  //   const element = boardDivs[i];
  //   console.log(element);
  //   element.addEventListener("click", changeColor);
  // }

  // for (const div of boardDivs) {
  //     console.log(div)
  // }

//   for (let i = 0; i < boardDivs.length; i++) {
//     const element = boardDivs[i];
//     console.log(element);
//     element.addEventListener("mouseover", changeColor);
//   }

  let tipButton = document.getElementsByClassName("paintArea");
  console.log(tipButton);

  for (const button of tipButton) {
    // console.log(button)
    button.addEventListener("click", (e) => {
      console.log(e);
      alert("hey");
    });
  }

  range.addEventListener('change', (e)=>{
    console.log(e.target.value)
   // document.getElementById('rangeSize').innerHTML = e.target.value
   const paintArea = document.getElementsByClassName('paintArea')

   for (let j = 0; j < paintArea.length; j++) {
     const element = paintArea[j];
     //console.log(element)

     element.style.height = e.target.value + "px"
     element.style.width = e.target.value + "px"
     
   }

  })