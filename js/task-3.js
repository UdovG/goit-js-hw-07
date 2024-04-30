const inputName = document.querySelector('input');
console.log(inputName);
const outputName = document.querySelector('span');
console.log(outputName);

const onInputName = event => {
    const inputEl = event.currentTarget.value;

    
    if (inputEl.length === 0 || inputEl.trim() === "") {
        outputName.textContent = `${Anonymous}`;
    }

    outputName.textContent = inputEl.trim();
   
}

inputName.addEventListener('input', onInputName);
