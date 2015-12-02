document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('searchform').addEventListener('submit', function(e){
        window.location = 'https://www.google.com/search?q=site:'+ location.host + ' ' + encodeURIComponent(document.getElementById('searchInput').value);
        return false;
    });
});

