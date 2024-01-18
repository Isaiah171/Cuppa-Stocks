
document.addEventListener('DOMContentLoaded', mainFunction() {

    const setView = document.getElementById("coffee-price-display");
    const tabs = document.querySelectorAll(".toggle-tab");

    var isActive = document.querySelector(li.is-active);
    var panes = document.querySelectorAll('.default-hide');
    var currentView
 
    tabs.addEventListener('click', showAndHide() {
        
    }
  
    setView () {
        setView.classList.remove("default-hide");
        setView.classList.add("show");
        
      
    }



    var 
  


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