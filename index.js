// Random letters
sequence = ["w", "e1", "a1", "r", "e2", "n", "o1", "t", "a2", "l", "o2", "n", "e3"]
const runSequence = (delay = 0) => {
  sequence.forEach(id => {
    setTimeout(() => $("#"+id).addClass("highlight"), delay)
    setTimeout(() => $("#"+id).removeClass("highlight"), delay + 2000)
    delay += 4000
  });
  setTimeout(runSequence, 65000)
}
runSequence(10000)


// Animate navigation
const showPage = () => {
  hash = window.location.hash
  console.log(hash)

  if (!hash) {
    $(".content").removeClass("hide")
    $("section").removeClass("hide")
    $("article").addClass("hide")
    $("nav").addClass("hide")
    return
  }

  $(".content").addClass("hide")
  $("#navtitle").empty().append(hash.substring(1))
  $("section").addClass("hide")
  $("nav").removeClass("hide")

  switch(hash) {
    case "#about":
      $(hash).removeClass('hide')
  }
}
showPage()

$(window).on('popstate', e => {
  showPage()
})

$("#backarrow").click(() => {
  history.pushState('', document.title, window.location.pathname);
  showPage()
})

// Background
var partJson = {
	"particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#dddddd"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#e0e0e0",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(partJson));
$(window).on("load", function() {
  particlesJS.load('particles', jsonUri, () =>{});
})