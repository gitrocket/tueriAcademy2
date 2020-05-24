
anime({
  targets: '#logo',
  duration: 500,
  translateX: [-1000,0],
  easing: 'linear',
});

anime({
  targets: '#prep',
  duration: 500,
  translateX: [1000,0],
  easing: 'linear',
});




var btn = document.querySelector('#services-btn');

btn.addEventListener('click', function() {
            anime({
              targets: '#services',
              duration: 1000,
              opacity: [0,1],
              easing: 'linear',
            });
})
