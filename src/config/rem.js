(function (doc, win) {
    var docEl 
    docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return
      if (clientWidth >= 750) {
        docEl.style.fontSize = '100px'
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
      }
    }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
  })(document, window)

  // $(function() {
  //   /* 10px=0.1rem */
  //   function fontSize() {
  //     var deviceWidth = $(document).width();
  //     if (deviceWidth > 750) {
  //       deviceWidth = 750;
  //       console.log(deviceWidth);
  //     }
  
  //     var fontSize = deviceWidth / 7.5;
  //     $("html").css("fontSize", fontSize);
  //   }
  //   fontSize();
  //   $(window).resize(function() {
  //     fontSize();
  //   });
  // });
