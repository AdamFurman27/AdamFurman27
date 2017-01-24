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



// // ISCROLL.JS
// 	(function(){
//    var ua = navigator.userAgent,
//      isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

//    if (isMobileWebkit) {
//      $('html').addClass('mobile');
//    }

//    $(function(){
//      var iScrollInstance;

//      if (isMobileWebkit) {
//        iScrollInstance = new iScroll('wrapper');

//        $('#scroller').stellar({
//          scrollProperty: 'transform',
//          positionProperty: 'transform',
//          horizontalScrolling: false,
//          verticalOffset: 150
//        });
//      } else {
//        $('.stellar')({
//          horizontalScrolling: false,
//          verticalOffset: 150
//        });
//      }
//    	});

// })();

	// document.getElementById("last-block").onscroll = function() {typed()};

	// function typed() {
	//     document.getElementById("bmore").innerHTML = 
	//     	$(function(){
	//         	$(".bmore").typed({
	//             strings: ["Born In Baltimore.", "Rock Climber."],
	//             typeSpeed: 0
	//         	});
 //    		});
	//     ;
	// }

	// var groups = {};
	// $('.galleryItem').each(function() {
	//   var id = parseInt($(this).attr('data-group'), 10);
	  
	//   if(!groups[id]) {
	//     groups[id] = [];
	//   } 
	  
	//   groups[id].push( this );
	// });

	// $.each(groups, function() {
	  
	//   $(this).magnificPopup({
	//       type: 'image',
	//       closeOnContentClick: true,
	//       closeBtnInside: false,
	//       gallery: { enabled:true }
	//   })

	// });
});