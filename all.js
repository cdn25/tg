    $(function() {
      let curtainOpen = false;
      $(".rope").click(function() {
        $(this).blur();
        if (!curtainOpen) {
          $(this).animate({ top: '-171%' }, 350, 'easeOutBounce');
          $(".leftcurtain, .rightcurtain").animate({ width: '0px' }, 2000);
          curtainOpen = true;
        } else {
          $(this).animate({ top: '-40px' }, 350, 'easeOutBounce');
          $(".leftcurtain, .rightcurtain").animate({ width: '50%' }, 2000);
          curtainOpen = false;
        }
        return false;
      });
    });
    function PlaySound() {
      var sound = document.getElementById("audiocracker");
      sound.play();
    }
    var countDownDate = new Date("Nov 28, 2024 00:00:00").getTime();
    setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("demo").innerHTML = `<div style='font-size: 20px; font-weight: 800; color: green;margin-top:-5px;'>${days}<font color='#FA069A'> day, </font>${hours}<font color='#11680B'> hours, </font>${minutes}<font color='#9B274C'>  minutes, <br></font>${seconds}<font color='#F47810'> seconds before</font></div>`;
      if (distance < 0) {
        clearInterval();
        document.getElementById("demo").innerHTML = "";
      }
    }, 1000);
    function getUrlParameter(name) {
      const urlParams = new URLSearchParams(window.location.search);
      let paramValue = urlParams.get(name);
      return paramValue ? decodeURIComponent(paramValue).replace(/[+|\-#&@<>]/g, ' ') : 'Your Name';
    }
    const n_value = getUrlParameter('n');
    document.querySelectorAll(".simpleName").forEach(el => el.textContent = n_value);
            window.onload = function() {
            // Create the first marquee (scrolling up)
            var marquee1 = document.createElement('marquee');
            marquee1.classList.add('m1');
            marquee1.setAttribute('behavior', 'scroll');
            marquee1.setAttribute('direction', 'up');
            marquee1.setAttribute('scrolldelay', '0');
            
            // Array of image URLs
            var imageUrls = [
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m1.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m2.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m3.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m4.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m5.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m6.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m7.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m8.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m1.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m2.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m3.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m4.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m5.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m6.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m7.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m8.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m1.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m2.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m3.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m4.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m5.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m6.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m7.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m8.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m1.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m2.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m3.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m4.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m5.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m6.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m7.png",
                "https://cdn.jsdelivr.net/gh/cdn25/pic2025/all/xmas/m8.png"
            ];

            // Append multiple images to the first marquee with <br> after each image
            imageUrls.forEach(function(url) {
                var img = document.createElement('img');
                img.setAttribute('src', url);
                img.setAttribute('height', '25px');
                img.setAttribute('width', '25px');
                img.setAttribute('alt', '');
                marquee1.appendChild(img);
                
                // Create a <br> tag and append it after each image
                var br1 = document.createElement('br');
                var br2 = document.createElement('br');
                marquee1.appendChild(br1);
                marquee1.appendChild(br2);
            });

            // Append the first marquee to the body
            document.body.appendChild(marquee1);

            // Create the second marquee (scrolling down)
            var marquee2 = document.createElement('marquee');
            marquee2.classList.add('m2');
            marquee2.setAttribute('behavior', 'scroll');
            marquee2.setAttribute('direction', 'down');
            marquee2.setAttribute('scrolldelay', '0');
            
            // Append the same images with <br> after each image to the second marquee
            imageUrls.forEach(function(url) {
                var img = document.createElement('img');
                img.setAttribute('src', url);
                img.setAttribute('height', '25px');
                img.setAttribute('width', '25px');
                img.setAttribute('alt', '');
                marquee2.appendChild(img);
                
                // Create a <br> tag and append it after each image
                var br1 = document.createElement('br');
                var br2 = document.createElement('br');
                marquee2.appendChild(br1);
                marquee2.appendChild(br2);
            });

            // Append the second marquee to the body
            document.body.appendChild(marquee2);
        };
