var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liarray=document.querySelectorAll("ul>li");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value+" "));
	input.value = "";

	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add("delete");
	li.appendChild(btn);

	ul.appendChild(li);
	
	btn.addEventListener("click",deleteListAfterClick);
	
}

function deleteListAfterClick(event){
	event.target.parentElement.remove();	
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


function clickOnList(event) {
	event.target.classList.toggle("done");
	  }
ul.addEventListener("click", clickOnList);


function deleteButton(){
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add("delete");
	liarray[i].appendChild(btn);
	btn.addEventListener("click",deleteListAfterClick);
}
for (i=0;i<liarray.length;i++){
	deleteButton();
}

//ul.onclick=function(){
//	clickOnList(event);
//}
