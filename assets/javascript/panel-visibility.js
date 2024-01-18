//The goal of this javascript file was to create code that would effectively manipulate the data table
//to make the user experience more engaging. The user can select the commodity from the tabs above
//the table and the corresponding pane with data about that commodity will be displayed
//When the user selects a different tab, the data for that tab will display and all other data will be hidden
//The default was set to coffee as that is the theme of this application after all

//The .toggle-tab and .tab-pane classes are called in the queryselector
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.toggle-tab');
  const panes = document.querySelectorAll('.tab-pane');

  //This function hides the panes in the table that the user doesn't want displayed
  function hideAllPanes() {
      panes.forEach(function (pane) {
          pane.style.display = 'none';
      });
  }
//This function interprets the ID of the tab that has been clicked
  function toggleView(clickedTab) {
      const tabId = clickedTab.dataset.tab;

      // calling the function to hide all panes
      hideAllPanes();

      // Displays the pane corresponding to the ID of the tab that has been clicked by the user
      const chosenPane = document.getElementById(tabId);
      if (chosenPane) {
          chosenPane.style.display = 'block';
      }
  }

  // This sets the default to displaying the coffee data
  const defaultTab = document.querySelector('.toggle-tab[data-tab="coffee-price-display"]');
  if (defaultTab) {
      toggleView(defaultTab);
  }

  tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
          // This hides all other panes when a tab is clicked
          hideAllPanes();

          // Toggles the view for the clicked tab
          toggleView(tab);
      });
  });
});