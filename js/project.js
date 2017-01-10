$(document).ready(function(){
         
    //$("body.content").snapscroll();



    $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$(".typed-bmore").typed({
	strings: ["Born in Baltimore.", "Programmer.","Rock Climber.","Hiker,", "Scrambler", "Thinker.", "Political", "Community-Minded", "French", "","","", "Born in Baltimore."],
	typeSpeed: 60
	});

	$(".typed-mtl").typed({
	strings: [ "Musician In Montreal.", "Percussionist.", "Electric-Harp", "Drum-Set.", "Vibraphone.", "Hammer-Dulcimer.", "Pianist.", "German","","","","Musician In Montreal."],
	typeSpeed: 60
	});

	$(".typed-nyc").typed({
	strings: [ "Innovator in New York City.", "Digital Specialist", "Content Strategist", "Tech-Enthusiast", "Coder.", "Entrepreneaur", "English", "","","", "Innovator In New York City."],
	typeSpeed: 60
	});


   function initial() {
      $('.nyc-pic').parallax('../img/city2.jpg');
      $('.blt-pic').parallax('../img/baltimore.jpg');
      $('.mtl-pic').parallax('../img/Montreal.jpg');
 }

 $(window).resize(function(){
	if ($(window).innerWidth() > 768){
	 	initial();
	 } else {
		$('nyc.pic').removeData('data-parallax');
		$('blt.pic').removeData('parallax');
		$('mtl.pic').removeData('parallax');
	 }
 });

 $(".test-form").validate({
  rules: {
    field: {
      required: true
    }
  }
});

 // jQuery(window).resize(function() {
 //           if ( jQuery(window).width() < 768 ) return false;
 //           showCover();
 //        }).resize();

// conditional phrases. 
// create function for initialization. 
// To disable use a destroy function
	// below 768 don't initialize the plugin
	// $(window).innerWidth(768)
    // $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});
	// 1.) When the page loads, if the browser window is wider than a certain amount, initialize plugin 
	// 2.) if page width changes, if the width is above a certain amount, and the plugin is not initialized, initialize the plugin. 
	// 3.) If window is smaller than a certain amount, and the width changes, and the plugin is initialized, un initialize the plugin. 

});