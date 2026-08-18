
// Select the required HTML elements
const pageContainer = document.querySelector("#pageContainer");
const heading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

// Select the typing message
const typingMessage = document.querySelector("#typingMessage");

// Original values used by the Reset function
const originalHeading = "Event-Driven Webpage";
const originalBackground = "#f3f4f6";


// =====================================================
// GREETING EVENT
// Event Source: greetingButton
// Event Listener: click
// Event Handler: displayGreeting
// =====================================================

function displayGreeting() {
    const userName = nameInput.value.trim();

    if (userName === "") {
        messageArea.textContent = "Please enter your name.";
        console.log("Greeting button clicked, but no name was entered.");
    } else {
        heading.innerHTML =
            "Semester: 1st Academic Year: 2026-2027<br>" +
            "Hello, " + userName + "!";

        messageArea.textContent =
            "The greeting was displayed successfully.";

        console.log("Greeting displayed for: " + userName);
    }
}


// =====================================================
// INPUT EVENT
// Event Source: nameInput
// Event Listener: input
// Event Handler: showTypedText
// =====================================================

function showTypedText() {
    typingMessage.textContent =
        "You are typing: " + nameInput.value;

    console.log("User is typing: " + nameInput.value);
}


// =====================================================
// BACKGROUND EVENT
// Event Source: backgroundButton
// Event Listener: click
// Event Handler: changeBackground
// =====================================================

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";

    messageArea.textContent =
        "The background color has been changed.";

    console.log("Background color changed.");
}


// =====================================================
// RESET EVENT
// Event Source: resetButton
// Event Listener: click
// Event Handler: resetPage
// =====================================================

function resetPage() {
    heading.textContent = originalHeading;

    nameInput.value = "";

    typingMessage.textContent = "You are typing:";

    messageArea.textContent =
        "Enter your name and select an action.";

    document.body.style.backgroundColor = originalBackground;

    console.log("Page has been reset.");
}


// =====================================================
// MOUSEOVER EVENT
// Event Source: Buttons
// Event Listener: mouseover
// Event Handler: handleMouseOver
// =====================================================

function handleMouseOver(event) {
    console.log(
        "The mouse is over the " +
        event.target.textContent.trim() +
        "."
    );
}


// =====================================================
// ATTACH EVENT LISTENERS
// =====================================================

// Greeting button click listener
greetingButton.addEventListener("click", displayGreeting);

// Background button click listener
backgroundButton.addEventListener("click", changeBackground);

// Reset button click listener
resetButton.addEventListener("click", resetPage);

// Input event listener
nameInput.addEventListener("input", showTypedText);

// Mouseover event listeners
greetingButton.addEventListener("mouseover", handleMouseOver);
backgroundButton.addEventListener("mouseover", handleMouseOver);
resetButton.addEventListener("mouseover", handleMouseOver);


// Debugging / event monitoring
console.log("JavaScript file loaded successfully.");
