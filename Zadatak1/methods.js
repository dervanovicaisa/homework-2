var getInputValue = document.querySelector('input[type="text"]');
getInputValue.addEventListener("keydown", search);
function search(e) {
  let getAllItems = document.getElementsByClassName("list-group-item");
  let result = document.getElementById("result");
  for (let index = 0; index < getAllItems.length; index++) {
    if (getAllItems[index].innerHTML.toLowerCase().includes(e.target.value)) {
      getAllItems[index].style.display = "";
      getAllItems[index].addEventListener("click", (event) => {
        getInputValue.value = event.currentTarget.innerHTML;
      });
    } else if (
      !getAllItems[index].innerHTML.toLowerCase().includes(e.target.value)
    ) {
      getAllItems[index].style.display = "none";
    }
    }
  }

