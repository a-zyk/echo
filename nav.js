fetch('/nav.html')
    .then(resp => resp.text())
    .then(data => {
        const nav = document.getElementById("nav");
        nav.innerHTML = data;

        const currentUrl = document.location.pathname;
        const activeLink = nav.querySelector(`a[href="${currentUrl}"]`)
        
        if (activeLink) {
            activeLink.parentNode.classList.add('active')
        }
    })
