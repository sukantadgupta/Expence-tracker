let form_data = document.getElementById("form_data");
let items = document.getElementById("items");
let amount = document.getElementById("amount");
let desc = document.getElementById("desc");

let category = document.getElementById("category");


items.addEventListener("click",removeItem);


function removeItem(e){

    if(e.target.classList.contains("delete")){

        let li = e.target.parentNode;
        items.removeChild(li);
    }
}


items.addEventListener("click",editItem);

function editItem(e){

    if(e.target.classList.contains("edit")){
    
        let li = e.target.parentNode;
        amount.value = li.childNodes[0].textContent.split("-")[0];
         desc.value = li.childNodes[1].textContent.split("-")[0];
         category.value = li.childNodes[2].textContent;

         items.removeChild(li);

    }
}


console.log(form_data);

form_data.addEventListener("submit",addItem);

function addItem(e){
    e.preventDefault();

    let amount = document.getElementById("amount").value;
    let desc = document.getElementById("desc").value;

    let category = document.getElementById("category").value;

    // category.addEventListener("change", function() {
    //     let selectedValue = category.value;
    //     console.log(selectedValue);
    //   });

    let li = document.createElement("li");


    li.appendChild(document.createTextNode(amount + '-'));
    li.appendChild(document.createTextNode(desc + '-'));
    li.appendChild(document.createTextNode(category));

    var del = document.createElement("button");
    del.className = 'btn btn-danger btn-sm float-right delete';

    del.appendChild(document.createTextNode("x"))

    li.appendChild(del);


    let edit = document.createElement("button");

    edit.appendChild(document.createTextNode("edit"));
    edit.className = "btn btn-primary edit";

    li.appendChild(edit);



    
items.appendChild(li);


    console.log(li);


    console.log(amount, desc, category)





}