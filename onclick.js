// Create the popup window
function createPopupWindow() {
    // Create the window element
    const popupWindow = document.createElement('div');
    popupWindow.innerHTML = '<p>This is a popup window!</p><button  id="close-button">Close</button>';
    popupWindow.style.backgroundColor = 'white';
    popupWindow.style.border = '1px solid black';
    popupWindow.style.position = 'absolute';
    popupWindow.style.top = '50%';
    popupWindow.style.left = '50%';
    popupWindow.style.transform = 'translate(-50%, -50%)';
    popupWindow.style.padding = '20px';
  
    // Add the window to the page
    document.body.appendChild(popupWindow);
  
    // Add an event listener to the <a> element to open the popup window when clicked
    const link = document.querySelector('a');

    if (link) link.addEventListener('click', function(event) {
        event.preventDefault(); // prevent the default link behavior
        createPopupWindow();
    });
    
    // Add an event listener to the close button to remove the window when clicked
    const closeButton = document.getElementById('close-button');
    if (closeButton) closeButton.addEventListener('click', function() {
      document.body.removeChild(popupWindow);
    });
  }
  
