"use strict";

document.querySelectorAll('li button').forEach(button => {
    button.textContent = 'Видалити';
});

document.querySelector('ul').addEventListener("click", (event) => {
   if (event.target.nodeName === "BUTTON") {
       event.target.parentElement.remove();
   }
});

// document.querySelector('div').addEventListener('click', (event) => {
//     if (event.target.nodeName === "BUTTON") {
//         const li = document.createElement("li");
//         const button = document.createElement('button');
//
//         const addTask = document.querySelector('input');
//         const valueOfTask = addTask.value;
//
//         button.textContent = 'Видалити';
//         li.append(button);
//         li.prepend(valueOfTask);
//
//         document.querySelector("ul").append(li);
//     }
// });

document.querySelector('div button').onclick = () => {

    const addTask = document.querySelector('input');
    addTask.value;

    if (addTask.value?.trim()) {
        const li = document.createElement("li");
        const button = document.createElement('button');

        // const addTask = document.querySelector('input');
        const valueOfTask = addTask.value;

        button.textContent = 'Видалити';
        li.append(button);
        li.prepend(valueOfTask);

        document.querySelector("ul").append(li);
    }
};