const menuList = document.getElementById("menu-list");
const buttonsArea = document.getElementById ('buttons');
import { buttonData } from "./constants.js";
// UI Functions
export const renderMenuItems = (data) => {
 // creatind card html for each data element

 const cardsHTML = data.map(
    (item)=> `
    
    <a href="/detail.html?id= ${item.id}" id="card" class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
    <img src="${item.img}"/>
    <div>
        <div class="d-flex justify-content-between">
            <h5 class="text-danger fw-bold" >${item.title}</h5>
            <p class="text-success fw-bold"> €${item.price} </p>
        </div>
        <p class="lead">${item.desc}
        </p>
    </div>
</a>  
    ` 
    ).join(" "); //join, changing array to string

    menuList.innerHTML = cardsHTML;
};

// for every single element rendering button

export const renderButtons = (activeText)=> {
buttonsArea.innerHTML = ' ';

    buttonData.forEach((btn) => {
        // creatin button element
 const buttonEle = document.createElement('button');

 buttonEle.className = 'btn btn-outline-dark';

 buttonEle.setAttribute("data-id", btn.value);

 buttonEle.innerText = btn.text;
 // creating buttons backgroung while active
if(btn.text === activeText) {
    buttonEle.classList.add('btn-dark', 'text-white');
}


buttonsArea.appendChild(buttonEle);
        
    });

};

