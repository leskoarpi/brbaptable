// Fetch data.json file
fetch('data.json')
.then(response => response.json())
.then(data => {
  // Loop through the data and create a div for each item
  data.forEach(item => {
    const a = document.createElement('div');
    a.innerHTML = `
      <div>
        <p class="number">${item.atomicNumber}</p>
        <p class="symbol">${item.symbol}</p>
        <p class="name" onclick="this.id = 'active', openPopup()">${item.atomicName}</p>
        <p class="mass">${String(item.atomicMass).substring(0,5)}</p>

      </div>
      `;
    a.setAttribute('class', 'elem '+'div'+item.atomicNumber);
    document.getElementById('dataContainer').appendChild(a);
  });
});


