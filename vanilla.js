let myBtn = document.querySelector('.btn');
let myform = document.querySelector('form');
let myTable = document.querySelector('.myTable_cls');


myform.addEventListener(('submit') , (event) => {
    let myDetails = [];
    myDetails.push(document.querySelector('#firstName_id').value);
    myDetails.push(document.querySelector('#lastName_id').value);

    myDetails.push(document.querySelector('#address_id1').value);
    myDetails.push(document.querySelector('#address_id2').value);

    myDetails.push(document.querySelector('#district_id').value);
    
    myDetails.push(document.querySelector('#state_id').value);
    myDetails.push(document.querySelector('#country_id').value);

    myDetails.push(document.querySelector('#pincode_id').value);

    //let select all the radio button :
    let myRadioBtn = document.querySelectorAll("input[type = 'radio']");
    
    for(let i = 0 ; i <myRadioBtn.length ;i++) {
        if(myRadioBtn[i].checked === true) {
            myDetails.push(myRadioBtn[i].value);
        }
    }
    

    let foodTag = document.querySelectorAll("input[name = 'foody']");
    let tempArray = [];
    for(let i = 0 ; i < foodTag.length ; i++) {
        if(foodTag[i].checked === true) {
            tempArray.push(foodTag[i].value);
        }
    }
 
    if(tempArray.length <= 2) {
        alert("Please Select more than 2 food \n");
        return ;
    }

    
    myDetails.push(tempArray);
    tableCreater(myDetails);
    event.preventDefault();
});

function tableCreater(myArray) {
    let mytr = document.createElement('tr');
    for(let i = 0 ; i <= myArray.length ; i++) {
        if(typeof myArray[i] === "object"){
            let newTd = document.createElement('td');
            for(let j = 0 ; j < myArray[i].length ; j++) {
                let newDiv = document.createElement('div');
                newDiv.className = "foodContent";
                newDiv.innerText = myArray[i][j];
                newDiv.style.border = "1px solid black";
                newTd.className = "FoodListy";
                newTd.append(newDiv);
            }
            mytr.appendChild(newTd);
        }
        else if(i === myArray.length) {
                let newTd = document.createElement('td');
                newTd.innerHTML = '<i class="fas fa-user-minus"></i>';
                mytr.appendChild(newTd);
        }
        else{
                let newTd = document.createElement('td');
                newTd.textContent = myArray[i];
                mytr.appendChild(newTd);
        }
    }
    // console.log(mytr);
    myTable.append(mytr);

    console.dir(document.querySelector('.btn'));
}
myTable.addEventListener(('click') , (event) => {
    if(event.target.tagName === "I") {
        if(confirm("Are u sure?")) {
            let parentElem = event.target.parentNode.parentNode;
            parentElem.remove();
        }
        
    }
})



    


