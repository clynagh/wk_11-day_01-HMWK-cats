var app = function(){


var addCat = function(name, food){

  var ul = document.createElement("ul");
  uList.classList.add("cat");

  var li1 = document.createElement("li");
  li1.innerText = "Name: Pete";

  var li2 = document.createElement("li");
  li2.innerText = "Food: Cheese";

  ul.appendChild(li1);
  ul.appendChild(li2);
  var cats = document.getElementById("cats");
  cats.appendChild(ul);
 
  }
}

window.onload = app;


