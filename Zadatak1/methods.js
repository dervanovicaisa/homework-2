var getInputValue = document.querySelector('input[type="text"]');
getInputValue.addEventListener("keydown", search);
function search(e) {
  let getAllItems = document.getElementsByClassName("itemgroup");
  setCookie('Aisa', 20);
  for (let index = 0; index < getAllItems.length; index++) {
    if (getAllItems[index].innerHTML.toLowerCase().includes(e.target.value)) {
      getAllItems[index].style.display = "";
      getAllItems[index].addEventListener("click", (event) => {
        getInputValue.value = event.currentTarget.innerHTML;
        getAllItems[index].style.display = "";
      });
    } else if (
      !getAllItems[index].innerHTML.toLowerCase().includes(e.target.value)
    ) {
      getAllItems[index].style.display = "none";
    }
  }
}

function setCookie(name,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "="  + expires + "; path=/";
}