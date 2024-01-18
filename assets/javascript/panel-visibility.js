/* Algorithms/Pseudocode:

Begin with all tabs visible, the coffee tab .is-active, and the coffee panel visible.
Assign a class to a tab and remove another class, based on which tab was clicked
Find all the tabs, make them into a variable and put click event listeners on them.
Find the first tab you encounter, make it a variable and set the class to "is-active".
Find the first panel you encounter, make it a variable and set it to display: block.
Make an additional variable to hold the present display status to become the formerly active tab
Clicks on tabs need to be connected to the panels being shown and hidden via a hitherto non-existent attribute which stores the id of the panel that the tab relates to.


/*Wait until DOM has fully loaded */
document.addEventListener('DOMContentLoaded', mainFunction() {

    // The initial panel which will be displaed
    var setView = document.getElementById("coffee-price-display");
    // all the tabs stored as an array for purposes of iteration
    const tabs = document.querySelectorAll(".toggle-tab");
    // finds the first tab in the code which is for coffee so it can be dynamically styled as active
    var isActive = document.querySelector(".toggle-tab");
    // saves the panels which are initially hidden as an array
    var panes = document.querySelectorAll('.default-hide');
    //Create a variable to hold the id of a tab's related panel as a string
    var tabId = this.getAttribute('data-tab');
    //
    var tabPane = document.querySelectorAll('.tab-pane');

    function setView () {
        setView.classList.remove("default-hide");
        setView.classList.add("show");
        var previousView = setView;
          }

  tabs.addEventListener('click', function toggleView(clicked) {
        var clickedTab = clicked.target;
    });

    toggleView {
        clicked
    }
  
    panes.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var tabId = this.getAttribute('data-tab');
        var tabPanes = document.querySelectorAll('.tab-pane');
  
        tabPanes.forEach(function(pane) {
          pane.style.display = 'none';
        });
  
        document.getElementById(tabId).style.display = 'block';
      });
    });
  });

  //Modal script for when the favorites button is clicked
  const openModalButton = document.getElementById('open-modal-favorites');
  const modal = document.getElementById('modal');
  const closeButton = document.querySelector('.close');
  
  openModalButton.addEventListener('click', () => {
    modal.classList.add('is-active');
  });
  
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });