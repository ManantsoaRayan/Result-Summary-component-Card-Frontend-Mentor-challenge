import dataJSON from "./data.json" assert {type : "json"};

let cardStatus = document.getElementById("r-section__status");
let cardItem = cardStatus.children;


function fillCardStatus(data, item, component) {
  for (let i = 0; i < data.length; i++) {
    // create a row to the flew item
    let row = document.createElement("div");
    // set the value of that row
    row.innerHTML = `
    <div>
      <span id= "icone">
        <img
          src=${data[i].icon}
          alt=${data[i].category}
        />
      </span>
      <p>${data[i].category}</p>
    </div>
    <div>
      <p class= "score"><span id= "score">${data[i].score}</span> /100</p>
    </div>
    `;
    // add a class to the rows
    row.className = "right-section__item";
    // push the row inside the item-container
    item.appendChild(row);
  }

  for (let i = 0; i < component.length; i++) {
    component[i].style.backgroundColor = dataJSON[i].background;
    component[i].style.color = dataJSON[i].color;
  }
}

document.onload = fillCardStatus(dataJSON, cardStatus, cardItem);

