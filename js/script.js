  let RENDERER = {
    TWELVE_HOUR_CLOCK: false
  };

  function second_passed() {
    $('.clock').removeClass('is-off');
  }
  setTimeout(second_passed, 2000)

  $('.switcher').on('click', function(e) {
    e.preventDefault();
    $('.screen').toggleClass('glitch');
  });


  var newDate = new Date();
  newDate.setDate(newDate.getDate());

  setInterval( function() {

    var hours    = new Date().getHours();
    var seconds  = new Date().getSeconds();
    var minutes  = new Date().getMinutes();
	
	if (RENDERER.TWELVE_HOUR_CLOCK && hours > 12) hours -= 12;

    var realTime = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes + ' : ' + ( seconds < 10 ? '0' : '' ) + seconds

    $('.time').html(realTime);
    $('.time').attr('data-time', realTime);

  }, 1000);

  document.addEventListener("DOMContentLoaded", () => {   
      window.wallpaperPropertyListener = {
          applyUserProperties: (properties) => {
              if (properties.twelve_hour_clock) RENDERER.TWELVE_HOUR_CLOCK = properties.twelve_hour_clock.value;
		  }
	  };
  });