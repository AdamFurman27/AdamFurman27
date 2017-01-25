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

	//

	$(".typed-bmore").typed({
	strings: ["Born in Baltimore.", "Programmer.","Rock Climber.","Hiker,", "Scrambler", "Thinker.", "Political", "Community-Minded", "French", "","","", "Born in Baltimore."],
	typeSpeed: 40
	});

	$(".typed-mtl").typed({
	strings: [ "Musician In Montreal.", "Percussionist.", "Electric-Harp", "Drum-Set.", "Vibraphone.", "Hammer-Dulcimer.", "Pianist.", "German","","","","Musician In Montreal."],
	typeSpeed: 40
	});

	$(".typed-nyc").typed({
	strings: [ "Innovator in New York City.", "Digital Specialist", "Content Strategist", "Tech-Enthusiast", "Coder.", "Entrepreneaur", "English", "","","", "Innovator In New York City."],
	typeSpeed: 40
	});

});