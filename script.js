

// Get the calculator screen element
const screen = document.getElementById("calculator-screen");

// Get all the calculator buttons
const buttons = document.getElementsByClassName("button");

// Initialize the calculator screen value
let screenValue = "";

// Add click event listener to all buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        //value = Numeric Value
        const value = buttons[i].getAttribute("data-value");
        // action = Operators,Clear,Delete,Dot 
        const action = buttons[i].getAttribute("data-action");

        // Check if the button clicked is a number button
        if (value) {
            //add value to screen
            screenValue += value;
            //display value on screen
            screen.innerText = screenValue;
        }

        // Check if the button clicked is an action button
        if (action) {
            // Perform the corresponding action
            //Clear whole screen
            if (action === "clear") {
                screenValue = "";
            }
            //Delete one value at a time 
            else if (action == "delete") {
                screenValue = screenValue.slice(0, -1);
            }
            // Using operators 
            else if (action === "multiply") {
                screenValue += "*";
            } else if (action === "divide") {
                screenValue += "/";
            } else if (action === "add") {
                screenValue += "+";
            } else if (action === "subtract") {
                screenValue += "-";
            } else if (action === "modulus") {
                
                screenValue += "%";

            }
            //Using decimal  
            else if (action === "decimal") {
                screenValue += ".";
            } 
            //finally, Calculating answer
            else if (action === "calculate") {
                //If there is no error save output in screenValue 
                try {
                    screenValue = eval(screenValue);
                } 
                //If there is error  save Error message in screenValue
                catch (error) {
                    screenValue = "Error";
                }
            }

            // Update the calculator screen value
            screen.innerText = screenValue;
        }
    });
}
