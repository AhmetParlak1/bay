/* */
const menuLink = document.getElementById('menu-link');
    const toggleBtn = document.getElementById('nav-toggle');

    toggleBtn.addEventListener('click', () => {
        menuLink.classList.toggle('active');
    });
/* */
  document.querySelectorAll('.img-showcase').forEach(elem =>{
    let x,y, width, height;
    elem.onmouseenter = () => {
        const size = elem.getBoundingClientRect();

        x = size.x;
        y = size.y;
        width = size.width;
        height = size.height;
  };

  elem.onmousemove = (e) => {
    const horizontal = (e.clientX - x) / width*30;
    const vertical = (e.clientY - y) / height*120;

    elem.style.setProperty('--x', horizontal + '%');
    elem.style.setProperty('--y', vertical + '%');
  };
});

/* */
(function selam() {
  var options = {
              whatsapp: "+905415322340",
              call_to_action: "Bizim ile iletişime geçin",
              position: "left",
          };
          var proto = 
          document.location.protocol, 
          host = "getbutton.io", 
          url = proto + "//static." + host;

          var s = document.createElement('script'); 
          s.type = 'text/javascript'; 
          s.async = true; 
          s.src = url + '/widget-send-button/js/init.js';
          s.onload = function () 
          { WhWidgetSendButton.init(host, proto, options); };
          
          var x = document.getElementsByTagName('script')[0]; 
          x.parentNode.insertBefore(s, x);
      })();



       