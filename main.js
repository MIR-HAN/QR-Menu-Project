import { renderMenuItems, renderButtons } from "./scripts/ui.js";
const buttonsArea = document.getElementById('buttons')

let data;
// get datas from json 
async function fetchMenu() {
    const res = await fetch('./db.json');
    // return json to js 
    data = await res.json();
}

document.addEventListener('DOMContentLoaded', () => {
//rendering buttons
renderButtons('All');

    fetchMenu()
        .then(() => renderMenuItems(data.menu));
});

//buttons click events
buttonsArea.addEventListener('click', (event) => {
    if (event.target.id !== 'buttons') {
    }
// to finding active button rerendering the buttons
    renderButtons(event.target.innerText);

    const selectedCategory = event.target.dataset.id;

    if (selectedCategory === 'all') {
        //rendering all category
        renderMenuItems(data.menu)
    } else {
        const filtered = data.menu.filter(
            (item) => item.category === selectedCategory);

        renderMenuItems(filtered);

    }
});