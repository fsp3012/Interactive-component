let firstDiv = document.querySelector(".first-div");
let secondDiv = document.querySelector(".second-div");

let submitButton = document.querySelector(".first-div button");
let allSpans = document.querySelectorAll("span");
let ratingOutput = document.querySelector(".selected");

let choosenRating = null;

let popUp = document.querySelector(".pop-up");

allSpans.forEach((eachSpan) => {
  eachSpan.addEventListener("click", () => {
    console.log(eachSpan.textContent);
    choosenRating = eachSpan.textContent;
    ratingOutput.textContent = `You selected ${choosenRating} out of 5`;
  });
});

submitButton.addEventListener("click", () => {
  // firstDiv.style.display = 'none'
  // secondDiv.style.display = 'none'
  if (choosenRating === null) {
    popUp.classList.add("active");

    setTimeout(() => {
      popUp.classList.remove("active");
    }, 3000);
  } else {
    // ratingOutput.textContent = `You selected ${choosenRating} out of 5`
    firstDiv.classList.remove("d-flex");
    firstDiv.classList.add("d-none");
    secondDiv.classList.remove("d-none");
    secondDiv.classList.add("d-flex");
  }
});

setTimeout(() => {
  console.log("hello world");
}, 10000);

setInterval(() => {});
