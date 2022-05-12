fetch('../nav.html')
    .then(resp => resp.text())
    .then(data => {
        const nav = document.getElementById("nav");
        nav.innerHTML = data;

        const activeUrlParts = document.location.pathname.split('/');
        const activeUrl = activeUrlParts[activeUrlParts.length - 1];
        const activeLink = nav.querySelector(`a[href*="${activeUrl}"]`)
        
        if (activeLink) {
            activeLink.parentNode.classList.add('active')
        }
    })
