//we gonna add stuff to this form so we can "actually" send it somewhere
//form events are fired when a person is filling out a form, the different input fields
//an event is an inner action between the user and the browser
//1. The user does something
//2. Browser responds

//We can bind events to DOM elements

//We can write event handlers
//event handlers give us the power to bind events to DOM elements
//Handle Events with Event Handlers

//Events already exist in JS
//Some events aren't bound to DOM elements, like our html DIV. If we click on it in our output, nothing happens, if we hover over it, nothing happens, browser knows if we mouse over it, but its not doing anything

//Event handlers are functions/code we write to handle events

//3 ways to write event handlers
    //1. directly in html file, not good practice. there's an example in the html file, html event handler attributes
    //2. TRADITIONAL WAY
    //3. USING EVENT LISTENERS

//I want to print the values of my form to the document
    //1. I will need a reference to my form
    let myForm = document.getElementById('my-form');
    let userNameInputField = document.getElementById('username');
    //2. i will need to listen to the events on the form
    function submitForm(e){
        //default behavior would be printing that info out in the url bar, we're stopping it from doing that
        e.preventDefault();
        //we can reset the form
        myForm.reset(); 
    }

    function listenForUser(e){
        console.log(e.target.value);
        //returns the value of the dom element you're listening to
        //this is console.logging whatever is in that username input field when a key is pressed down
    }

    myForm.addEventListener('submit', submitForm);
    userNameInputField.addEventListener('keydown', listenForUser);

// function focusOnMe(){
//     alert('You are focused on me');
// }
//TRADITIONAL WAY
// function focusOnMeTwo(){
//     console.log('You are focused on me');
// }
// let userName = document.getElementById('username');

// userName.onfocus = focusOnMeTwo(); 
//  THIRD WAY
// let password = document.getElementById('password');
// password.addEventListener('focus', focusOnMeThree);
// function focusOnMeThree(){
//     console.log('You focused a third time!');
// }

//I could also call with an anonymous function, should only be used if you're gonna use the function once, more than once and you should name it
// let password = document.getElementById('password');
// password.addEventListener('focus', function(){
//     console.log('you clicked here');
// })

//more thorough example
// let form = document.getElementById('login-form');
// form.addEventListener('click', function(){
//     console.log('you clicked a div');
// })

//whatever element you bind an event to, you also bind that event to its children
