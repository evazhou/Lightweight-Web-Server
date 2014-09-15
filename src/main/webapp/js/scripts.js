
var Slides = {
   container : $('#slides'),
   totalSlides : '',
   translateAmount : 0,
   currentSlide : 0,
   slideWidth : '',

 
   init : function( totalSlides ) {
	  var each;
    
      if ( !totalSlides ) throw new Error("Please pass the total number of slides");
      Slides.totalSlides = totalSlides;
 
      // Load the slides
      Slides.loadContent();
      each = Slides.container.children('div');
      Slides.slideWidth = each.width() + ( parseInt( each.css('margin-right'), 10 ) );
      
      Slides.prevMousedown();
      Slides.nextMousedown();
   },
 
   loadContent : function() {
	 //  c = $('#slides'); console.log(c.size());
	   for ( var i = 0; i < Slides.totalSlides; i++ ) {
		   
		  // console.log(i);
		    //  c.append($('<div id="#slide-' + i + '">a</div>'));
		   $('<div id="#slide-' + i + '"></div>')
	         .load('slides/slide_' + i + '.html')
	         .appendTo( $('#slides') );
		   }
	   
   },
      
   prevMousedown : function() {
	  $(document).ready(function() {
	  $(".prev").mousedown(function(){
		    Slides.prev();
		  });
	  });
	   },
	   
   nextMousedown : function() {
	  $(document).ready(function() {	  
	  $(".next").mousedown(function(){
		    Slides.next();
	   	  });
	  });	   
		},
	   
   next : function( ) {
	      Slides.translateAmount -= Slides.slideWidth;
	      Slides.updateHash( ++Slides.currentSlide );
	      Slides.animate();
	   },
	 
   prev : function() {
	      if ( Slides.translateAmount === 0 ) return;
	 
	      Slides.translateAmount += Slides.slideWidth;
	      Slides.updateHash( --Slides.currentSlide );
	      Slides.animate();
	  },
	 
    animate : function() {
	     Slides
	      .container
	      .children()
	         .css( '-webkit-transform', 'translateX(' + Slides.translateAmount + 'px)' );
	  },
	 
    updateHash : function( direction ) { 
	     location.hash = '#slide-' + Slides.currentSlide;
	  }
}
 
Slides.init( 5 );