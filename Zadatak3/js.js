const regex = /^[A-Za-z]*$/;
const container = document.getElementById("container");
let remove = document.createElement("button");
let edit = document.createElement("button");
const setMessage = document.getElementById("message");
function generate() {
  const btn = document.getElementById("generate");
  //   generate
  btn.addEventListener("click", function () {
    let getNo = $("#number").val();
    let add = document.createElement("button");
    add.innerText = "Add";
    add.id = "add";
    container.append(add);
    for (let index = 0; index < getNo; index++) {
      let createInput = document.createElement("input");
      let remove = document.createElement("button");
      let edit = document.createElement("button");
      remove.innerText = "X";
      remove.className = "remove";
      remove.id = "remove";
      remove.value = index;
      edit.innerText = "Edit";
      edit.className = "edit";
      edit.id = "edit";
      edit.value = index;
      createInput.className = "chars";
      createInput.id = index;
      createInput.type = "text";
      container.append(createInput);
      container.append(remove);
      container.append(edit);
    }
    crud();
    inputValues();
  });
}
function crud() {
  let getInput = document.getElementsByClassName("chars");
  let getNo = $("#number").val();
  if (
    document.getElementById("add") != undefined &&
    document.getElementById("edit") != undefined &&
    document.getElementById("remove") != undefined
  ) {
    // add
    let getAddId = document.getElementById("add");
    getAddId.addEventListener("click", function () {
      let createInput = document.createElement("input");
      createInput.type = "text";
      remove.innerText = "X";
      remove.className = "remove";
      remove.value = getNo + 1;
      remove.id = "remove" + (getNo + 1);
      edit.innerText = "Edit";
      edit.className = "edit";
      edit.id = "edit" + (getNo + 1);
      container.append(createInput);
      container.append(remove);
      container.append(edit);
    });

    $(".edit").click(function () {
      $("#" + $(this).val()).prop("disabled", false);
    });

    $(".remove").click(function () {
      console.log($(this).val());
      $("#" + $(this).val()).remove();
      $(".edit[value=" + $(this).val() + "]").remove();
      $(".remove[value=" + $(this).val() + "]").remove();
    });
  }
}

function inputValues() {
  $("input[type='text']").blur(function () {
    var getInpit = $(this);
    if ($(this).val().match(regex)) {
      if ($(this).val().length > 0) {
        $(this).prop("disabled", true);
      }
    }
    palindrome(getString());
  });
}

function getString() {
  let getNo = $("#number").val();
  let makeString = "";
  for (let index = 0; index < getNo; index++) {
    let inputValue = $("#" + index).val();
    makeString += inputValue;
  }
  return makeString;
}

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  if (reverseStr === lowRegStr) {
    setMessage.innerText = "Rijec je palindrom";
  } else {
    setMessage.innerText = "Rijec nije palindrom";
  }
}

generate();


