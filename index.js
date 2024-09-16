var isstatus = document.querySelector("h5");
var btn = document.querySelector("#add");
let check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    isstatus.innerHTML = "Freinds";
    isstatus.style.color = "green";
    btn.innerHTML = "Remove freind";
    check = 1;
  } else {
    isstatus.innerHTML = "Strangers";
    isstatus.style.color = "red";
    btn.innerHTML = "Add freinds";
    check = 0;
  }
});
