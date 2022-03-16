// Front End Web Development (Degree 2019)
// Updated Dom.js

// Study Link
// Jun 29
// Please find updates dom.js

// dom.js
// Javascript
// Class comments

let val;

// val = document;
// val = document.all;
// val = document.all[3];
// val = document.all.length;
// val = document.doctype;
// val = document.head;
// val = document.body;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms; //gives HTMLCollection
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links; //gives HTMLCollection
// val = document.links[5];
// val = document.links.length;
// val = document.links[5].id;
// val = document.links[5].className;
// val = document.links[5].classList;

// val = document.images;

// val = document.scripts;
// val = document.scripts[1].getAttribute['src'];

// let scripts = document.scripts; //gives HTMLCollection

// console.log(val);

/**
 HTMLCollection cannot be traversed through forEach as its not an array, it is like array
*/

// convert HTMLCollection to Array

// let scriptsArray = Array.from(scripts);
// scriptsArray.forEach(function(script){
//     console.log(script.getAttribute('src'));
// });

// for (let index = 0; index < scripts.length; index++) {
//     console.log(scripts[i].getAttribute('src'));
// }


/****
 ***** JS TO SELECT SINGLE ELEMENT *****
 *****/
// document.getElementById();

// val = document.getElementById("task-title");
// val = document.getElementById("task-title").tagName;
// val = document.getElementById("task-title").id;
// val = document.getElementById("task-title").className;
// val = document.getElementById("task-title").classList;
// console.log(val);

// const taskTitle = document.getElementById("task-title");
// console.log(taskTitle);

// Change Style Using JS
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#FFF";
// taskTitle.style.padding = "10px";
// taskTitle.style.display = "none";

// Change Content of an element
// taskTitle.textContent = "Tasks List";
// taskTitle.innerText = "My Tasks";
// taskTitle.innerHTML = "My TODO Tasks";

// taskTitle.textContent = "<span class='teal'>Task List</span>";
// taskTitle.innerHTML = "<span class='teal'>Task List</span>";


// querySelector()
// document.querySelector()

// val = document.querySelector("#task-title");
// val = document.querySelector(".collection-item");
// val = document.querySelector('h5');
// console.log(val);

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul').style.color = 'red';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'orange';
// document.querySelector('li:nth-child(4)').textContent = "Hello World";
// document.querySelector('li:nth-child(odd)').style.background = "#CCC";
// document.querySelector('li:nth-child(even)').style.background = "#f4f4f4";


/****
 ***** JS TO SELECT MULTIPLE ELEMENT *****
 *****/
// document.getElementsByClassName()
// val = document.getElementsByClassName('collection');
// val = document.getElementsByClassName('collection')[3];

// val[3].textContent = "Hello World";
// val[0].style.color = "red";
// console.log(val);

// document.getElementsByTagName gives HTMLCollection

// let lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'green';

//convert HTMLCollection to Array

// lis = Array.from(lis);
// console.log(lis);

// lis.reverse();

// lis.forEach( function(li,index){
//     li.textContent = `${index} : Helllo`;
// });
// console.log(lis);

// document.querySelectorAll() gives all nodelist

// const items = document.querySelectorAll('.collection-item');
// items.forEach(function(item, index){
//     item.textContent = `${index} : Hello`;
// });
// console.log(items);


/****
 ***** NodeList is type of Array and forEach woks on it  *****
 *****/
// const liOdd = document.querySelectorAll('.collection-item:nth-child(odd)');
// const liEven = document.querySelectorAll('.collection-item:nth-child(even)');

// liOdd.forEach(function(item){
//     item.style.background = '#CCC';
// }); 
// liEven.forEach(function(item){
//     item.style.background = '#F4F4F4';
// });


/****
 ***** Traversing DOM Elements  *****
 *****/
// const list = document.querySelector("ul.collection");
// const listItem = document.querySelector("li.collection-item");

// val = listItem;

//GET CHILD NODES
// val = list.childNodes; // returns NodeList
// val = list.childNodes[1];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;
// console.log(val);

/**
 * Value of Node Types-
 * 1  - Element 
 * 2  - Attributes (Deprecated)
 * 3  - Text Node
 * 8  - Comment
 * 9  - Document Itself
 * 10 - Doctype
 */

// GET CHILDREN ELEMENT OF NODES
// val = list.children;
// val = list.children[1];
// val = list.children[2].textContent = "Hello World";
// console.log(val);

// CHILDREN OF CHILDREN
// val = list.children[3].children[0].children[0].classList;
// console.log(val);

// FIRST CHILD
// val = list.firstChild;
// val = list.firstElementChild;
// console.log(val);

// LAST CHILD
// val = list.lastChild;
// val = list.lastElementChild;
// console.log(val);

// COUNT CHILD ELEMENTS
// val = list.childElementCount;
// console.log(val);

// GET NEXT SIBLING
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;
// console.log(val);

// GET PREVIOUS SIBLING
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
// console.log(val);


/****
 ***** CREATING DOM ElEMENTS  *****
 *****/
// const li = document.createElement("li");

// ADD CLASS
// li.className = "collection-item";
// console.log(li);

// ADD ID
// li.id = "new-item";

// ADD ATTRIBUTE
// li.setAttribute("title", "new-item");

// ADD CONTENT IN AN ELEMENT
// li.textContent = "hello world";
// li.innerHTML = "hello world";
// li.appendChild(document.createTextNode("Hello World"));

// CREATE A NEW LINK
// const link = document.createElement("a");
// console.log(link);

// ADD CLASS 
// link.className = "delete-item secondary-link";

// ADD CONTENT TO LINK
// link.innerHTML = "<i class='fa fa-remove'></i>";

// yaha link ko li ke saath append kiya h
// li.appendChild(link);

// document.querySelector('ul.collection').appendChild(li);
// val = li;
// console.log(val);


/****
 ***** REPLACING/REMOVING ElEMENTS  *****
 *****/

// REPLACING ELEMENT

// create a new element
// const newHeading = document.createElement("h2");
// console.log(newHeading);

// add id
// newHeading.id = "task-title";

// add textContent
// newHeading.appendChild(document.createTextNode("Task-list"));


// GET THE OLD ELEMENT
// const oldHeading = document.getElementById("task-title");

// replaceChild(newElement, oldElement) can be used with parent
// const cardAction = oldHeading.parentElement;
// console.log(cardAction);
// cardAction.replaceChild(newHeading, oldHeading);


// REMOVE AN ELEMENT
// const lis = document.querySelectorAll(".collection-item");
// const list = document.querySelector('.collection');

// remove()
// lis[0].remove();

// remove a child Element
// list.removeChild(lis[3]);

// Classes
// const firstLi = document.querySelector("li");
// console.log(firstLi);
// const firstLink = firstLi.children;
// console.log(firstLink);

// val = firstLink.classList;
// val = firstLink.classList[0];
// val = firstLink.classList.add("test");
// val = firstLink.classList.remove("test");

// Attributes
// val = firstLink.getAttribute('href');
// val = firstLink.setAttribute('href', "http://www.google.com");
// firstLink.setAttribute("title", "Google");
// val = firstLink.hasAttribute("src");
// firstLink.removeAttribute("title");
// val = firstLink;

// console.log(val);


/****
 ***** EVENT HANDLING IN JS  *****
 *****/
// val = document.querySelector(".clear-tasks").addEventListener("click", function(e){
//     console.log("Hello World");
//     console.log(e.target); // jo click event pe jo b hota h vo usko return deta h
//     e.preventDefault(); // jo b default action hota h event pe vo usko rokta h
// });

document.querySelector(".clear-tasks").addEventListener('click', onclick);

// function onclick(e){
//     console.log("Clicked");

//     val = e.target.textContent = "Hi";
//     console.log(val);

    // val = e.target.id;
    // val = e.target.className;
    // val = e.target.classList;

    // EVENT TYPE
    // val = e.type;

    // TIMESTAMP
    // val = e.timestamp;

    // COORS OF EVENT RELATED TO THE WINDOW
    // val = e.clientX;
    // val = e.clientY;

    // COORS OF EVENT RELATED TO THE ELEMENT
    // val = e.offsetX;
    // val = e.offsetY;

    // console.log(val);
    // e.preventDefault();
// }


/****
 ***** MOUSE EVENT IN JS  *****
 *****/
// const clearBtn = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const heading = document.querySelector("h5");

// CLICK
// clearBtn.addEventListener("click", runAnEvent);

// DOUBLE CLICK
// clearBtn.addEventListener("dblclick", runAnEvent);

// MOUSE DOWN
// clearBtn.addEventListener("mousedown", runAnEvent);

// MOUSE UP
// clearBtn.addEventListener("mouseup", runAnEvent);

// MOUSE ENTER
// card.addEventListener("mouseenter", runAnEvent);

// MOUSE LEAVE
// card.addEventListener("mouseleave", runAnEvent);

// MOUSE OVER
// card.addEventListener("mouseover", runAnEvent);

// MOUSE OUT
// card.addEventListener("mouseout", runAnEvent);

// MOUSE MOVE
// card.addEventListener("mousemove", runAnEvent);

// function runAnEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//     document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, ${Math.random() * 255})`;
// }


/****
 ***** KEY EVENT IN JS  *****
 *****/
// const form = document.querySelector('form');
// const taskInput = document.querySelector("#task");
// const heading = document.querySelector("#task-title");

// form.addEventListener('submit', runEvent);

// KEY DOWN
// taskInput.addEventListener("keydown", runEvent);

// KEY UP
// taskInput.addEventListener("keyup", runsEvent);

// KEY PRESS
// taskInput.addEventListener("keypress", runEvent);

// FOCUS
// taskInput.addEventListener("focus", runEvent);

// BLUR
// taskInput.addEventListener("blur", runEvent);-

// CUT
// taskInput.addEventListener("cut", runEvent);

// COPY
// taskInput.addEventListener("copy", runEvent);

// PASTE
// taskInput.addEventListener("paste", runEvent);

// INPUT
// taskInput.addEventListener("input", runEvent);

// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);
//     console.log(e.target.value);
//     heading.textContent = e.target.value;
//     e.preventDefault();
// }


/****
 ***** EVENT BUBBLING AND DELEGATION  *****
 *****/

// EVENT BUBBLING 
// sabse pehle h card uska child card-content & dono ka child card-title to agar card-title pe click kiya to log card-title card-content aur card tino dikhayega to ye jo click hota h usko bolte h event bubbling. so first clicked on card-title to vo uska output dikhake bubble krta h card-content then vo uska output dikhake bubble krta h card pe

// document.querySelector(".card-title").addEventListener("click", function(){
//     console.log("card-title");
// });

// document.querySelector(".card-content").addEventListener("click", function(){
//     console.log("card-content");
// });

// document.querySelector(".card").addEventListener("click", function(){
//     console.log("card");
// });

//EVENT DELEGATION

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener("click", deleteItem);

// function deleteItem(e){
//    if(e.target.parentElement.classList.contains('delete-item')){
//        console.log("item deleted");
//    }
// }


/****
 ***** LOCAL STORAGE AND SESSION STORAGE  *****
 *****/

// set the data to local storage
// localStorage.setItem("name", "John"); // refresh kiya browser ko to iska data jayega
// localStorage.setItem("age", "30"); 

// set the data to session storage
//  sessionStorage.setItem("session-id", 123); // jab tak session baand nhi hua tab tak rahega

// remove from local storage
// localStorage.removeItem("name");

// get from local storage
// console.log(localStorage.getItem("age"));

// clear all tasks from local storage
//  localStorage.clear();


// let tasks;
// tasks = [];
// document.querySelector("form").addEventListener("submit", function(e){
//     const task = document.querySelector("#task").value;
    
    // tasks.push(task);

    // localStorage.setItem("tasks", JSON.stringify(tasks));
    // e.preventDefault();

    // let tasksFromLS = JSON.parse(localStorage.getItem("tasks"));
    // console.log(tasksFromLS);
// });



































































































































































































































































































































































































