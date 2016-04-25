
(function(spin){
  var d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      windowHalfX = window.innerHeight || e.clientHeight || g.clientHeight,
      windowHalfY = window.innerWidth || e.clientWidth || g.clientWidth,
			targetRotationOnMouseDown = 0;

      function onDocumentMouseDown( event ) {
				event.preventDefault();
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mouseup', onDocumentMouseUp, false );
				document.addEventListener( 'mouseout', onDocumentMouseOut, false );
				mouseXOnMouseDown = event.clientX - windowHalfX;
				targetRotationOnMouseDown = spin.x;
			}
			function onDocumentMouseMove( event ) {
				mouseX = event.clientX - windowHalfX;
				spin.x = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.01;
			}
			function onDocumentMouseUp( event ) {
				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
				document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
			}
			function onDocumentMouseOut( event ) {
				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
				document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
			}
			function onDocumentTouchStart( event ) {
				if ( event.touches.length === 1 ) {
					event.preventDefault();
					mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
					targetRotationOnMouseDown = spin.x;
				}
			}
			function onDocumentTouchMove( event ) {
				if ( event.touches.length === 1 ) {
					event.preventDefault();
					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					spin.x = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
				}
			}

      document.addEventListener( 'mousedown', onDocumentMouseDown, false );
      document.addEventListener( 'touchstart', onDocumentTouchStart, false );
      document.addEventListener( 'touchmove', onDocumentTouchMove, false );

})(spin);
