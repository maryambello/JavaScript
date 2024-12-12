const name = document.getElementById("name");
list.style.display = "flex";
list.style.justifyContent = "flex-start";
list.style.alignItems = "flex-start";
let n = 1;
let delete_button = document.getElementsByName("delete-button");
let edit_button = document.getElementsByName("edit-button");
name.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    document.getElementById(
      "list"
    ).innerHTML += `<p> ${n}. <span>${name.value}</span> <button name="edit-button">Edit</button><button name="delete-button">delete</button> </p>`;
    e.target.value = "";
    n++;

    if (edit_button.length > 0) {
      edit_button.forEach((el) => {
        el.addEventListener("click", () => {
          let clicked_value = el.parentElement.children[0].innerText;
          console.log(el.parentElement.children);

          name.value = clicked_value;
        });
      });
    }

    if (delete_button.length > 0) {
      delete_button.forEach((el) => {
        el.addEventListener("click", () => {
          el.parentElement.remove();
        });
      });
    }
  }
});
