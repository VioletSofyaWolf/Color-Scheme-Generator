'use strict';

const colorPicker = document.getElementById('color-picker');
const colorScheme = document.getElementById('color-scheme');
const getColorSchemeBtn = document.getElementById('get-color-scheme-btn');
const colorSchemeImage = document.getElementById('color-scheme-image');
const colorContainer = document.getElementById('color-container');

const getColorScheme = async () => {
  const hexCode = colorPicker.value.slice(1);
  const colorMode = colorScheme.value;

  const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${hexCode}&mode=${colorMode}&count=5`);

  const data = await response.json();

  let colorDisplay = '';

  for (let i = 0; i < data.colors.length; i++) {
    colorDisplay += `
        <div>
            <img src="${data.colors[i].image.bare}" class="color-box">
            <p class="hex-code">${data.colors[i].hex.value}</p>
        </div>
        `;
  }

  colorContainer.innerHTML = colorDisplay;
};

getColorSchemeBtn.addEventListener('click', getColorScheme);
