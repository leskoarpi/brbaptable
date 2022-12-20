let popupIsOpen = false;

function openPopup() {
  if (!popupIsOpen) {
    // create the popup 
    let popup = document.createElement('div');
    popup.classList.add('popup');

    // create the close button
    let closeButton = document.createElement('div');
    closeButton.setAttribute('onclick','closePopup()');
    closeButton.setAttribute('class','bezar');
    closeButton.innerHTML = '<p class="gomb">&times</p>';
    //closeButton.addEventListener('click', closePopup);

    // append the close button to the popup
    popup.appendChild(closeButton);

    // append the popup to the body
    document.body.appendChild(popup);

    // set the popupIsOpen flag to true
    popupIsOpen = true;
    const pElement = document.getElementById('active');
    const clicked = pElement.textContent;
    console.log(clicked)

   
    // Create a new div element to hold the article summary
    const article = document.createElement("div");

    // Set the innerHTML of the div to the article summary
    article.innerHTML = `
    <div>
      <iframe src="https://hu.wikipedia.org/wiki/${clicked}" width="90%" height='600'></iframe>
    </div>
    `;

    // Append the article to the popup
    popup.appendChild(article);
  }}

function closePopup() {
  document.querySelector('#active').removeAttribute('id');
  // remove the popup from the body
  document.body.removeChild(document.querySelector('.popup'));
  document.querySelector('.name')
  
  // set the popupIsOpen flag to false
  popupIsOpen = false;

}

// add an event listener to the element with the class "elem"
//document.querySelector('.name').addEventListener('click', openPopup);
