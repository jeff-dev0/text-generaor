'use strict';
const $ = document;
const generateInput = $.querySelector('.generate-input');
const generateBtn = $.querySelector('.generate-btn');
const copyBtn = $.querySelector('.copy-btn');
const generatedText = $.querySelector('.generated-text');
const textSection = $.querySelector('.text-section');

let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.';

const generateText = function (el) {
    el.preventDefault();
    if (generateInput.value <= 0) {
        alert(`Please Enter a Valid Number!`);
        generateInput.value = '';
    } else {
        generatedText.textContent = paragraph.repeat(generateInput.value);
        textSection.classList.remove('hidden')
    }
};

generateBtn.addEventListener('click', generateText);
window.addEventListener('load', () => {
    generateInput.value = '';
    generateText.textContent = ''
});

const copText = function (el) {
    el.preventDefault();
    navigator.clipboard.writeText(generatedText.textContent);
    $.querySelector('.copied').classList.remove('hidden');
    copyBtn.classList.add('hidden');
    setTimeout(() => {
        $.querySelector('.copied').classList.add('hidden');
        copyBtn.classList.remove('hidden');
    }, 5000)
}
copyBtn.addEventListener('click', copText);
