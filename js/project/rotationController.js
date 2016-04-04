  function drag() {
    box = document.getElementById("box");
    var controlsHolder = document.getElementById("controls");
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        sy = w.innerHeight|| e.clientHeight|| g.clientHeight;
    box.style.height = (sy + 150) + 'px';
    box.style.marginTop = -((sy + 150) / 2) + 'px';


    Draggable.create(box, {
      type:"x, y",
      throwProps:true,
      bounds:"#container",
      onDrag: update,
      onThrowUpdate: update,
      onThrowComplete: update,
      onDragStart: function() {
        dragging = true;
      },
      onDragEnd: function() {
        dragging = false;
      }
    });


    function update() {

      spin.x = this.x;
      spin.y = this.y;
      //spin.y = this.y;
    }

    var controls = controlsHolder.querySelectorAll(".control");
    for (var i = 0; i<controls.length; i++){
       const control = controls[i];
       const input = control.querySelector('input');
       const output = control.querySelector('span');

       input.addEventListener('input', function(e){
         output.innerHTML = this.value;
         set();
       });
    }

    function set() {
      console.log(
          parseInt(controls[0].querySelector('input').value),
          parseInt(controls[1].querySelector('input').value),
          parseInt(controls[2].querySelector('input').value)
      );

      camera.position.set(
        parseInt(controls[0].querySelector('input').value),
        parseInt(controls[1].querySelector('input').value),
        parseInt(controls[2].querySelector('input').value)
      );

      light.position.set(
        parseInt(controls[3].querySelector('input').value),
        parseInt(controls[4].querySelector('input').value),
        parseInt(controls[5].querySelector('input').value)
      );
    }



  }
