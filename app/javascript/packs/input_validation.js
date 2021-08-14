const inputs = Array.from(document.getElementsByTagName('input'))

inputs.forEach(input => {
    input.addEventListener('change',() => { // "change" works after finish typing
        const plaHol = input.getAttribute("placeholder")
        const inpVal = input.value // User entered text
        
        if (inpVal.trim() == '' || null) { // Empty input field
            input.removeAttribute('id')
        } else if (comparePlaceholderAndInputValue(plaHol, inpVal)) { // Right answer
            input.setAttribute("id", "success")
        } else { // Wrong answer
            input.setAttribute("id", "error")
        }
    });
});

/**
 * Parse placeholder text and compare with user input.
 * 
 * @param {string} placeholder As "3 × 7"...
 * @param {string} value The value entered by user in HTML \<input\> tag.
 * @returns {boolean} true If user entered value equal to interpred placeholder value.
 */
function comparePlaceholderAndInputValue(placeholder, inputValue) {
    return interpretPlaceholdes(placeholder) === Number(inputValue)
};

/**
 * Calculete expression in HTML placeholder attribute.
 * 
 * @param {string} placeholderString Format as "3 × 7"...
 * @returns {number} Result of "3 × 7" = 21
 */
function interpretPlaceholdes(placeholderString) {
    const numbers = placeholderString.match(/\d+/g) // ["3", "7"]
    if (placeholderString.includes('×')) { // Multiplication sign in string
        return numbers[0] * numbers[1] // 21
    }
};
