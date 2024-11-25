setInterval(function() {
    let radios = document.querySelectorAll('input[name="carousel1"]');
    let current = Array.from(radios).findIndex(radio => radio.checked);
    let next = (current + 1) % radios.length;
    radios[next].checked = true;
}, 3000); // 3 seconds interval

// Autoplay for Carousel 2
setInterval(function() {
    let radios = document.querySelectorAll('input[name="carousel2"]');
    let current = Array.from(radios).findIndex(radio => radio.checked);
    let next = (current + 1) % radios.length;
    radios[next].checked = true;
}, 3000); // 3 seconds interval

// Autoplay for Carousel 3
setInterval(function() {
    let radios = document.querySelectorAll('input[name="carousel3"]');
    let current = Array.from(radios).findIndex(radio => radio.checked);
    let next = (current + 1) % radios.length;
    radios[next].checked = true;
}, 3000); // 3 seconds interval

// Autoplay for Carousel 4
setInterval(function() {
    let radios = document.querySelectorAll('input[name="carousel4"]');
    let current = Array.from(radios).findIndex(radio => radio.checked);
    let next = (current + 1) % radios.length;
    radios[next].checked = true;
}, 3000); // 3 seconds interval