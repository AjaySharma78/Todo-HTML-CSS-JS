const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const button = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (inputBox.value === "") {
    swal.fire("Hey", "You need to add task", "error");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  dataSaved();
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    dataSaved();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    dataSaved();
  }
});

function dataSaved() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
