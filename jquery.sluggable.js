(function( $ ){

  $.fn.sluggable = function( options ) {  

    var settings = {
      'target' : null
    };

    return this.each(function() {        
      // If options exist, lets merge them
      // with our default settings
      if ( options ) { 
        $.extend( settings, options );
      }

      $(this).bind('keyup.sluggable', function(){
    	  if( settings.target ){
    		  $(settings.target).val(
	    		  $(this).val()
	 			  		 .toLowerCase()
	 			  		 .replace(/^\s+|\s+$/g, "")	
	 			  		 .replace(/[_|\s]+/g, "-")
	 			  		 .replace(/[^a-z0-9-]+/g, "")
	 			  		 .replace(/[-]+/g, "-")
	 			  		 .replace(/^-+|-+$/g, "")
    		  );
    	  }
      });

    });

  };
})( jQuery );