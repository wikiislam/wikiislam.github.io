
// As if October 2022, the original site is back online, so redirect to it.
var newurl = location.href.replace('wikiislam.github.io', 'wikiislam.net').replace('.html', '').replace('Category-', 'Category:')


document.addEventListener("DOMContentLoaded", function(event) {

    var newUsers = document.getElementById('n-New-Users');
    if (newUsers) newUsers.style.display = 'none';
    
    var viewSource = document.getElementById('ca-viewsource');
    if (viewSource) viewSource.style.display = 'none';

    var mainPage = document.getElementById('n-Main-Page');
    if (mainPage) mainPage.insertAdjacentHTML('AfterEnd', '<li><a href="https://wikiislam.net/">Go to official WikiIslam.net</a></li>')
    
    //if (location.href.indexOf('Main_Page.html') != -1) {
        var body = document.getElementById('mw-content-text');
        body.insertAdjacentHTML('AfterBegin', '<div style="font-weight: bold; background: #EF947C; padding:7px;">This is a 2015 snapshot of WikiIslam.net.<br>You might want to visit the renovated <a href="'+newurl+'">wikiislam.net</a> instead (not all pages were migrated there, however).</div>');
        
        body.querySelector("a[href*=':Userlogin']").parentNode.parentNode.style.display = 'none';
    //}


    document.getElementById('searchform').addEventListener('submit', function(e){
        window.location = 'https://www.google.com/search?q=site:'+ location.host + ' ' + encodeURIComponent(document.getElementById('searchInput').value);
        e.preventDefault();
        return false;
    });
});

