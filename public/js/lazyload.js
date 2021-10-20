//<![CDATA[
    var adsenseLazyload = false;
    window.addEventListener("scroll", function () {
      if ((document.documentElement.scrollTop != 0 && adsenseLazyload === false) || (document.body.scrollTop != 0 &&
        adsenseLazyload === false)) {
        (function () {
          var ad = document.createElement('script');
          var att = document.createAttribute('data-ad-client');
          att.value = 'ca-pub-6514495183730318';
          ad.setAttributeNode(att);
          ad.async = true;
          ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
          var sc = document.getElementsByTagName('head')[0];
          sc.parentNode.insertBefore(ad, sc);
        })();
        adsenseLazyload = true;
      }
    }, true)
    //]]