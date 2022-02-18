/**
 * Project Requirement:
 * - Change the Background color by generating rendom hex color by clicking a button 
 * Also display the hex code to a disable input field
 */

//Staps

//Stap 1 - Create Onlad Handler
window.onload = () => {
    main();
}
function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    btn.addEventListener('click', function (){
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    })
}

// stap 2 - random color generator function

function generateHexColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

//stap 3 - collect all necessary references 

// stap 4 - handle the click event