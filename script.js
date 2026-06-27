document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-form input');
    const searchButton = document.querySelector('.search-form button');
    const searchForm = document.querySelector('.search-form');

    const validProducts = ['ssd', 'ram', 'cpu', 'gpu'];

    function handleSearch() {
        let query = searchInput.value.trim().toLowerCase();

        searchInput.classList.remove('invalid');
        const existingNotification = document.querySelector('.search-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        if (validProducts.includes(query)) {

            window.location.href = `product/${query}.html`;
        } else if (query !== '') {

            showInvalidNotification();
            searchInput.classList.add('invalid');
            
            setTimeout(() => {
                searchInput.classList.remove('invalid');
            }, 3000);
        }

    }

    function showInvalidNotification() {
        const notification = document.createElement('div');
        notification.className = 'search-notification';
        notification.textContent = 'Invalid product. Please enter ssd, ram, cpu, or gpu.';
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: #ff4444;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            font-size: 14px;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transition = 'opacity 0.3s ease';
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    searchButton.addEventListener('click', handleSearch);

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    searchInput.addEventListener('input', function() {
        if (this.classList.contains('invalid')) {
            this.classList.remove('invalid');
        }
    });
});

document.querySelector('a[href="#search-section"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    const searchSection = document.getElementById('search-section');
    const searchInput = document.querySelector('.search-form input');
    
    if (searchSection) {
        searchSection.scrollIntoView({ behavior: 'instant' });
    }
    
    if (searchInput) {
        searchInput.focus();
        searchInput.select();
    }
});

function changeText() {

    var replaceText = document.getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll untuk melihat";

    document.getElementById("icon-up").style.display = "none";

    document.getElementById("icon-down").style.display = "block";
}

var btnSubmit = document.querySelector('.submit');
var modal = document.querySelector('.modal-container');

if (btnSubmit) {
    btnSubmit.addEventListener('click', function () {
        modal.classList.add('show');
        
        const next = document.querySelector('.next');
        next.setAttribute('value', 'https://netlify.app');
    });
}