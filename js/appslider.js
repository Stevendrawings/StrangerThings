
$(document).ready(function(){

  var slider = {
    // Initialisation du code
    init: function(){
      slider.renderHtml();
      slider.showSlider(1);
      slider.event();
    },
    // appel du DOM HTML
    renderHtml: function(){
      slider.$nextArrow = $('.arrow-next');
      slider.$prevArrow = $('.arrow-prev');
      slider.$cell = $('.cell');
      slider.$cells = $('.cell-element figure img');
      slider.$cellTitle = $('.title-element');
      slider.$cellTexte = $('.texte-element');
      slider.$slideIndex = slider.$cell.first().length;	// equal '1'
    },
    // Next & Prev Arrow slider
    event: function(){
      slider.$nextArrow.on('click', function(){
        slider.moveSlide(1)
    })

      slider.$prevArrow.on('click', function(){
        slider.moveSlide(-1)
      })
    },

    // systeme d'affichage du slider
    showSlider: function(x){
      var i;
      if(x > slider.$cell.length){ slider.$slideIndex = 1 }
      if(x < 1){ slider.$slideIndex = slider.$cell.length }

      slider.$cells.each(function(){
      slider.$cells.removeClass("fadeInRight animated animated");
      slider.$cells.eq(slider.$slideIndex - 1).addClass("fadeInRight animated");
    });
      slider.$cellTitle.each(function(){
      slider.$cellTitle.removeClass("fadeInRight animated quick");
      slider.$cellTitle.eq(slider.$slideIndex - 1).addClass("fadeInRight animated quick");
    });
      slider.$cellTexte.each(function(){
      slider.$cellTexte.removeClass("fadeInRight animated fast");
      slider.$cellTexte.eq(slider.$slideIndex - 1).addClass("fadeInRight animated fast");
    });
      slider.$cell.each(function(){
      slider.$cell.css({ opacity: "0"})
      slider.$cell.eq(slider.$slideIndex - 1).css({ opacity : "1"});
    });
  },
    moveSlide: function(x){
			slider.showSlider(slider.$slideIndex += x);
		}
  }
  slider.init()
})
