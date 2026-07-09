document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".continue-btn").addEventListener("click", () => {
        const username = document.querySelector(".input-field[type='text']").value;
        const password = document.querySelector(".input-field[type='password']").value;

        if (username && password) {
            // Redirect to home.html
            window.location.href = "home.html";
        } else {
            alert("Please enter your username and password.");
        }
    });

    document.querySelector(".category1-btn").addEventListener("click", () => {
       
            window.location.href = "interest_page.html";
    });

    document.querySelectorAll(".social-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert(`${button.textContent} clicked`);
        });
    });
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const interestsBtn = document.getElementById("interests-btn");
    const searchBtn = document.getElementById("search-btn");

    if (interestsBtn) {
        interestsBtn.addEventListener("click", () => {
            window.location.href = "interest.html";
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", () => {
            window.location.href = "search.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const premiumBtn = document.querySelector(".premium-btn");
    const premiumDropdown = document.createElement("div");
    premiumDropdown.classList.add("premium-dropdown");
    premiumDropdown.innerHTML = `
        <div class="premium-option" data-price="5">Basic - $5/month</div>
        <div class="premium-option" data-price="10">Standard - $10/month</div>
        <div class="premium-option" data-price="20">Pro - $20/month</div>
    `;
    premiumBtn.parentElement.appendChild(premiumDropdown);

    premiumBtn.addEventListener("mouseenter", () => {
        premiumDropdown.classList.add("show");
    });

    premiumBtn.parentElement.addEventListener("mouseleave", () => {
        premiumDropdown.classList.remove("show");
    });

    document.querySelectorAll(".premium-option").forEach(option => {
        option.addEventListener("click", (e) => {
            alert(`You selected the ${e.target.innerText} plan.`);
        });
    });
});




