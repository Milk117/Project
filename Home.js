function expandBox(element) {

    if (event.target.classList.contains('quantity-input') || event.target.classList.contains('add-to-cart-btn')) {

        return;

    }

    element.classList.toggle('expanded');
}

function updateClock() {

    var now = new Date();
    
    var hours = now.getHours();
    
    var minutes = now.getMinutes();
    
    var seconds = now.getSeconds();
    
    document.getElementById('clock').textContent =
        
        (hours < 10 ? '0' : '') + hours + ':' +
        
        (minutes < 10 ? '0' : '') + minutes + ':' +
        
        (seconds < 10 ? '0' : '') + seconds;

}
setInterval(updateClock, 1000);

updateClock();


function toggleSearch() {
    
    var widget = document.getElementById('search-widget');
    
    widget.classList.toggle('active');
    
}