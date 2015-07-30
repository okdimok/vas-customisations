define([ 'require', 'vas/core/base/components', 'vas/core/registry', 'text!../tpl/backdrop.html' ], function( require, C, R, Template ) {
   var MyBackdrop = function( hostDOM ) {
      // 2) Call parent constructor
      C.Backdrop.call(this, hostDOM);
	  hostDOM.addClass("custom-backdrop");
	  this.loadTemplate( Template  );
      this.setViewData("message", "Hello world!"); 
	  this.renderView();

	  $(window).mousemove((function(e) {
         this.select(".floating-text").css({
            'left': e.clientX,
            'top': e.clientY,
         });
      }).bind(this));


   }
   // 1) Import parent component prototype methods
   MyBackdrop.prototype = Object.create( C.Backdrop.prototype );
   // 3) Register component
   R.registerComponent( "backdrop.login", MyBackdrop );
});
