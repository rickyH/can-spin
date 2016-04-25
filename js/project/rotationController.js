
(function(spin){
  var d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      container = document.querySelector('.viewport'),
      windowHalfX = window.innerHeight || e.clientHeight || g.clientHeight,
      windowHalfY = window.innerWidth || e.clientWidth || g.clientWidth,
			targetRotationOnMouseDownX = 0;
      targetRotationOnMouseDownY = 0;
      yMax = 0.45;
      spin.x = 3.142*2;

      function onDocumentMouseDown( event ) {
				event.preventDefault();
				container.addEventListener( 'mousemove', onDocumentMouseMove, false );
				container.addEventListener( 'mouseup', onDocumentMouseUp, false );
				container.addEventListener( 'mouseout', onDocumentMouseOut, false );
				mouseXOnMouseDown = event.clientX - windowHalfX;
				targetRotationOnMouseDownX = spin.x;

        mouseYOnMouseDown = event.clientY - windowHalfY;
        targetRotationOnMouseDownY = spin.y;
			}

			function onDocumentMouseMove( event ) {
				mouseX = event.clientX - windowHalfX;
				spin.x = targetRotationOnMouseDownX + ( mouseX - mouseXOnMouseDown ) * 0.01;

        mouseY = event.clientY - windowHalfY;
        spin.y = targetRotationOnMouseDownY + ( mouseY - mouseYOnMouseDown ) * 0.01;

        if (spin.y > yMax) {
          spin.y = yMax;
        } else if (spin.y < -(yMax)) {
          spin.y = -(yMax);
        }
			}

			function onDocumentMouseUp( event ) {
				container.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				container.removeEventListener( 'mouseup', onDocumentMouseUp, false );
				container.removeEventListener( 'mouseout', onDocumentMouseOut, false );
			}

			function onDocumentMouseOut( event ) {
				container.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				container.removeEventListener( 'mouseup', onDocumentMouseUp, false );
				container.removeEventListener( 'mouseout', onDocumentMouseOut, false );
			}

			function onDocumentTouchStart( event ) {
				if ( event.touches.length === 1 ) {
					// event.preventDefault();
					mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
					targetRotationOnMouseDownX = spin.x;

          mouseYOnMouseDown = event.touches[ 0 ].pageY - windowHalfY;
          targetRotationOnMouseDownY = spin.y;
          
				}
			}

			function onDocumentTouchMove( event ) {
				if ( event.touches.length === 1 ) {
					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					spin.x = targetRotationOnMouseDownX + ( mouseX - mouseXOnMouseDown ) * 0.015;

          mouseY = event.touches[ 0 ].pageY - windowHalfY;
          spin.y = targetRotationOnMouseDownY + ( mouseY - mouseYOnMouseDown ) * 0.015;

          if (spin.y > yMax) {
            spin.y = yMax;
          } else if (spin.y < -(yMax)) {
            spin.y = -(yMax);
          }
          else {
    				event.preventDefault();
          }
				}
			}

      container.addEventListener( 'mousedown', onDocumentMouseDown, false );
      container.addEventListener( 'touchstart', onDocumentTouchStart, false );
      container.addEventListener( 'touchmove', onDocumentTouchMove, false );

})(spin);
