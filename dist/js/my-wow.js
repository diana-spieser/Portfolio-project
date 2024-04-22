document.addEventListener('DOMContentLoaded', function () {
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    resetOnScroll: true,
  });
  console.log('coucou');
  wow.init();
  console.log('coucou');
});
