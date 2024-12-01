// Get all the links in the navigation
const navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and add an 'active' class to the current page
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.wrapper__menu-link');

  // Get the current URL's pathname (e.g., '/aboutpage.html')
  const currentPage = window.location.pathname;

  links.forEach((link) => {
    // Get the href attribute (relative path of the link)
    const linkPath = new URL(link.href).pathname;

    // Compare current path with link's path
    if (linkPath === currentPage) {
      link.classList.add('active-link'); // Add active class
    }
  });
});


$(document).ready(function () {
  $('.burger-button').on('click', function () {
    var w = $('.content-wrap').width(),
      h = $('.content-wrap').height() + 1,
      pT = '0,0 ' + w + ',0 0,' + h,
      pB = w + ',0 ' + w + ',' + h + ' 0,' + h;

    $(this).toggleClass('active')
      .parents('.content-wrap')
      .toggleClass('active');

    $('#top,#bottom').css({
      'width': w + 'px',
      'height': h + 'px'
    });
    $('#top polygon').attr('points', pT);
    $('#bottom polygon').attr('points', pB);
  });
});

let btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// Adjusted version of https://codepen.io/bramus/pen/yikfd
// This version also reverses the animation when elements that got slide into view
// succesively slide out of view again.

// In case you're wondering about that `.css('top', $animatable.css('top'))` part:
// -> it's the magic part in this code as it triggers layout, so the browser will 
// render after having deleted the animate-in class and having added the animate-out
// class. That way the animation-play-state will actually change from running to 
// paused to running again, thus triggering the start of the animation

jQuery(function ($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function () {

    // Calculate current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height() - -100, // Trigger earlier by reducing 100px
      $animatables = $('.animatable');

    // Check all animatables and animate them if necessary
    $animatables.each(function (i) {
      var $animatable = $(this);

      // Items that are "above the fold"
      if (($animatable.offset().top + $animatable.height()) < offset) {

        // Item previously wasn't marked as "above the fold": mark it now
        if (!$animatable.hasClass('animate-in')) {
          $animatable.removeClass('animate-out').css('top', $animatable.css('top')).addClass('animate-in');
        }

      }

      // Items that are "below the fold"
      else if (($animatable.offset().top + $animatable.height()) > offset) {

        // Item previously wasn't marked as "below the fold": mark it now
        if ($animatable.hasClass('animate-in')) {
          $animatable.removeClass('animate-in').css('top', $animatable.css('top')).addClass('animate-out');
        }

      }

    });

  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

// Show the modal
function showModal() {
  document.querySelector('.overlay').style.display = 'block';
  document.querySelector('.rating-modal').style.display = 'block';
}

// Hide the modal and handle rating
function submitRating(rating) {
  alert(`Thank you for your rating of ${rating}!`);
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.rating-modal').style.display = 'none';
}

// Trigger the modal when the page loads
window.onload = showModal;
