
const color = document.querySelector('.head input[type="color"]');
const scheme = document.querySelector('.head select');
const div = document.querySelector('.color');
const button = document.querySelector('.head button');

function getColor() {
    const color = document.querySelector('.head input[type="color"]').value;
    const scheme = document.querySelector('.head select').value;
    console.log(`Selected color: ${color}, Selected scheme: ${scheme}`);
    let getColor = fetch(`https://www.thecolorapi.com/scheme?hex=${color.substring(1)}&mode=${scheme.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            div.innerHTML = '';
            data.colors.forEach(color => {
                const colorDiv = document.createElement('div');
                colorDiv.style.backgroundColor = color.hex.value;
                colorDiv.style.width = '100px';
                colorDiv.style.height = '200px';
                const colorCode = document.createElement('div');
                colorCode.className = 'color-code';
                colorCode.textContent = color.hex.value;
                colorCode.style.textAlign = 'center';
                colorDiv.appendChild(colorCode);
                div.appendChild(colorDiv);
            });
            return getColor;
        })
        .catch(error => console.error('Error fetching color scheme:', error));
}
button.addEventListener('click', getColor);


