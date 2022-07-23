const https = (() => {
if ((window.location.host == 'ginahenderson.me') && (window.location.protocol != 'https:'))
    window.location.protocol = 'https';
})();
