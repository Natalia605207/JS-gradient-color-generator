const gradientContainer = document.querySelector(".gradient-container");
const select = document.querySelector("select");
const chosenColors = document.querySelectorAll(".chosen-color");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if(isRandom) { 
        chosenColors[0].value = getRandomColor();
        chosenColors[1].value = getRandomColor();
    }

    const gradient = `linear-gradient(${select.value}, ${chosenColors[0].value}, ${chosenColors[1].value})`;
    gradientContainer.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}

chosenColors.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
});

select.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);