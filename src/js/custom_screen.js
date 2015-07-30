define([ 'require', 'vas/core/base/components', 'vas/core/registry' ], function( C, R ) {
   var MyBackdrop = function( hostDOM ) {
      // 2) Call parent constructor
      C.Backdrop.call(this, hostDOM);
      hostDOM.css("background-image", "url(" + require.toUrl('../img/background.pnd') + ")");
	  hostDOM.css("background-size", "cover");

   }
   // 1) Import parent component prototype methods
   MyBackdrop.prototype = Object.create( C.Backdrop.prototype );
   // 3) Register component
   R.registerComponent( "backdrop.login", MyBackdrop );
});
