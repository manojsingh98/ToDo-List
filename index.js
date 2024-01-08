const inputBox = document.getElementById("input-box");
const listItem = document.querySelector(".list-container");
const btnVal = document.getElementById("addToDo");
btnVal.addEventListener("click", function () {
  if (inputBox.value == "") {
    alert("please add something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listItem.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "❌";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData()
});

listItem.addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    console.log("outer",e);
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData()
    } else if (e.target.tagName === "SPAN") {
        console.log("click",e);
        e.target.parentElement.remove();
        saveData()
    }
  },
 
);

function saveData (){
    localStorage.setItem("data", listItem.innerHTML)
}
function showData(){
    listItem.innerHTML = localStorage.getItem("data")
}
showData()