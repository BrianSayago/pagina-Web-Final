$('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

(function() {
    emailjs.init('-vcsV1lOY9nTwz7Bh');
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_1e5a9qp', 'template_j9u17mv', params)
    .then(function(response) {
        document.getElementById('message-box').innerHTML = "Mensaje enviado correctamente. ¡Gracias!";
        console.log("Éxito!", response.status, response.text);
    }, function(error) {
        document.getElementById('message-box').innerHTML = "Error al enviar el mensaje. Por favor, inténtalo de nuevo.";
        console.error("Error al enviar", error);
    });
});

function showTab(tabNumber) {
    const tabs = document.querySelectorAll('.solapas-info');
    tabs.forEach((tab, index) => {
        tab.classList.toggle('active', index + 1 === tabNumber);
    });

    const selectedTab = document.getElementById('tab' + tabNumber);
    if (selectedTab) {
        selectedTab.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

showTab(1);

window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
