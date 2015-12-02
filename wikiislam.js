
document.addEventListener("DOMContentLoaded", function(event) {

    var newUsers = document.getElementById('n-New-Users');
    if (newUsers) newUsers.style.display = 'none';
    
    var viewSource = document.getElementById('ca-viewsource');
    if (viewSource) viewSource.style.display = 'none';

    var mainPage = document.getElementById('n-Main-Page');
    if (mainPage) mainPage.insertAdjacentHTML('AfterEnd', '<li><a href="https://github.com/wikiislam/wikiislam.github.io">Fork on GitHub</a></li>')
    
    if (location.href.indexOf('Main_Page.html') != -1) {
        var body = document.getElementById('mw-content-text');
        body.insertAdjacentHTML('AfterBegin', '<div style="font-weight: bold; background: #EF947C; padding:7px;">This is a static mirror of the now defunct WikiIslam.net. It is also available as a <a href="https://github.com/wikiislam/wikiislam.github.io">GitHub repository</a>. Images will be uploaded at a later time.</div>');
        
        body.querySelector("a[href*=':Userlogin']").parentNode.parentNode.style.display = 'none';
    }


    document.getElementById('searchform').addEventListener('submit', function(e){
        window.location = 'https://www.google.com/search?q=site:'+ location.host + ' ' + encodeURIComponent(document.getElementById('searchInput').value);
        e.preventDefault();
        return false;
    });
});

