
document.addEventListener('DOMContentLoaded', function() {
    //Variable to hold all the commodity stats "panes"
    var panes = document.querySelectorAll('.default-hide');
  
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