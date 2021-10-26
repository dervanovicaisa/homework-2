var getInputValue = document.querySelector('input[type="text"]');
getInputValue.addEventListener("keydown", search);
function search(e) {
  let getAllItems = document.getElementsByClassName("list-group-item");
  let result = document.getElementById("result");
  for (let index = 0; index < getAllItems.length; index++) {
    if (getAllItems[index].innerHTML.toLowerCase().includes(e.target.value)) {
      result.textContent = getAllItems[index].innerHTML;
    } else {
      result.textContent = "There is no item with that title :( .\nTry with a different one!";
    }
  }
}
