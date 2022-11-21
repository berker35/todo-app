// Query selecting made easier
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
//Main task creating function
const createTask = (task, isUrgent = false) => {
  //If nothing passed, function doesn't create task
  if (!task.length == 0) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("task");
    newDiv.innerHTML = `<input class="checkbox" type="checkbox"/>
    <p>${task}</p><i class="trash fa-solid fa-trash-can"></i>`;
    // Adds a left border
    isUrgent
      ? (newDiv.style.borderLeft = "10px solid #db3a34")
      : (newDiv.style.borderLeft = "10px solid #86ac41");
    // Adds newly created task into app
    $(".task-container").appendChild(newDiv);
  }
};
// Hides or Shows overlay
$$(".switch").forEach((e) =>
  e.addEventListener("click", () => {
    $(".overlay").classList.toggle("hide");
  })
);
$("button[type='submit']").addEventListener("click", (e) => {
  e.preventDefault();
  const task = e.target.form[0].value;
  const isUrgent = e.target.form[2].checked;
  //passes parameters (from the overlay form) into main function
  createTask(task, isUrgent);
  $(".overlay").classList.toggle("hide");
  //Clears overlay textarea
  $("textarea").value = "";
});

$(".main-body").addEventListener("click", (e) => {
  if (e.target.type == "checkbox") {
    // Text styling when the checkbox is checked
    e.target.nextElementSibling.classList.toggle("crossed");
  } else if (e.target.classList.contains("trash")) {
    // Removes task when trash bin clicked
    e.target.parentNode.remove();
  }
});
//Header date entries
const date = new Date();
const today = date.toLocaleDateString("en-US", { weekday: "long" });
const month = date.toLocaleDateString("en-US", { month: "short" });
$(".day").textContent = date.getDate();
$(".date").textContent = today;
$(".month").textContent = `${month} ${date.getFullYear()}`;
