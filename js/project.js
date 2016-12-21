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