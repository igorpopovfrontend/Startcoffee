const form = document.getElementById('coffee-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
        const name = document.getElementById('name').value;
    const phone = document.getElementById('tel').value; 
    const comment = document.getElementById('comment').value;
        if (name === '' || phone === '') {
        alert('Заполните имя и телефон!');
        return;
    }
        const message = `Новая заявка в Startcoffee!%0AИмя: ${name}%0AТелефон: ${phone}%0AПожелания: ${comment}`;
         const token = '9243452431:AAHmJUtSV6FxWSr80NBcYXSp1JIs2eFD_hk';
    const chatId = '8539569254';
    const workerUrl = 'https://black-meadow-372a.zalupa1133313.workers.dev';
    const url = `${workerUrl}/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                alert('Спасибо! Ваша заявка отправлена.');
                form.reset(); 
            } else {
                alert('Ошибка отправки. Попробуйте позже.');
            }
        })
        .catch(error => {
            alert('Ошибка сети. Проверьте интернет.');
        });
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
        const href = this.getAttribute('href');
        if (href === '#') return; 

        const target = document.querySelector(href);
        if (target) {
            event.preventDefault();
            
            
            const yOffset = -80; 
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});