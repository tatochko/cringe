$(function(){
  
  var marksCanvas = document.getElementById("marksChart");
  
  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontSize = 24;
  Chart.defaults.scale.ticks.max = 10;
  Chart.defaults.scale.ticks.display = false;
  Chart.defaults.scale.ticks.display = false;

  var marksData = {
    labels: ["CSS", "HTML", "JS"],
    datasets: [{
      label: "Skills",
      backgroundColor: "rgba(20,0,0,0.6)",
      borderColor: "rgba(200,0,0,0.6)",
      radius: 6,
      pointRadius: 6,
      pointBorderWidth: 3,
      pointBackgroundColor: "orange",
      pointBorderColor: "rgba(200,0,0,0.6)",
      pointHoverRadius: 10,
      data: [60, 50, 30]
    }]
  };

  var chartOptions = {
      scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
          fontColor: "#000",
          stepSize: 20
        },
        gridLines: {
          color: '#000'
        },
        angleLines: { 
          color: '#000' 
        },
        pointLabels: {
          fontColor: "#fff",
          fontSize: 28
        }
      },
      legend: {
          display: false,
      }
  };


  var radarChart = new Chart(marksCanvas, {
      type: 'radar',
      data: marksData,
      options: chartOptions
  });

//////////////////////////////////////////// slider

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    arrows: false,
    dots: true
  });
  

  ///////////////////////////// burger
  var Menu = {

    el: {
    ham: $('.header__btn'),
    menuTop: $('.header__btn-top'),
    menuMiddle: $('.header__btn-middle'),
    menuBottom: $('.header__btn-bottom')
    },
    
    init: function() {
    Menu.bindUIactions();
    },
    
    bindUIactions: function() {
    Menu.el.ham
        .on(
            'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
        }
    );
    },
    
    activateMenu: function() {
    Menu.el.menuTop.toggleClass('header__btn-top-click');
    Menu.el.menuMiddle.toggleClass('header__btn-middle-click');
    Menu.el.menuBottom.toggleClass('header__btn-bottom-click'); 
    }
};

Menu.init();


$('.header__btn-global').on('click', function() {
    $('.menu ul').slideToggle();

});

});