$(document).ready(function(){
  //saco lo fixed y todo basicamente
  $(".trivia-sup").hide(); $(".wrap").hide(); $(".resultado").hide();$("#T").hide();

  // no se ve ninguna pregunta
  $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide();  $(".trivia5").hide(); $(".trivia6").hide();  $(".trivia7").hide(); $(".trivia8").hide();  $(".trivia9").hide(); $(".trivia10").hide();
  $(".rta1").hide();  $(".rta2").hide();  $(".rta3").hide();  $(".rta4").hide();  $(".rta5").hide(); $(".rta6").hide();  $(".rta7").hide(); $(".rta8").hide();  $(".rta9").hide(); $(".rta10").hide();

  //arranca seccion trivia
  $("#go").click(function(e){
    $("#w").slideUp();   $("#T").slideUp();   $("#T").show();
    e.preventDefault();
  });
  //arranca seccion trivia tocando el fondo
  $("#fotowelcome").click(function(e){
    $("#w").slideUp();   $("#T").slideUp();   $("#T").show();
    e.preventDefault();
  });  
  //arranca seccion trivia con titulo
  $("#h").click(function(e){
    $("#w").slideUp();   $("#T").slideUp();   $("#T").show();
    e.preventDefault();
  });  
  // escondo rta y explicaciones
  $("#rta1").hide(); $("#exp1").hide();   $("#rta2").hide(); $("#exp2").hide();   $("#rta3").hide(); $("#exp3").hide();   $("#rta4").hide(); $("#exp4").hide();  $("#rta5").hide(); $("#exp5").hide();  $("#rta6").hide(); $("#exp6").hide();  $("#rta7").hide(); $("#exp7").hide();  $("#rta8").hide(); $("#exp8").hide(); $("#rta9").hide(); $("#exp9").hide();   $("#rta10").hide(); $("#exp10").hide();  $("#rta11").hide(); $("#exp11").hide();  $("#rta12").hide(); $("#exp12").hide();   $("#rta13").hide(); $("#exp13").hide();   $("#rta14").hide(); $("#exp14").hide();  $("#rta15").hide(); $("#exp15").hide();  $("#rta16").hide(); $("#exp16").hide();  $("#rta17").hide(); $("#exp17").hide();  $("#rta18").hide(); $("#exp18").hide();  $("#rta19").hide(); $("#exp19").hide();  $("#rta20").hide(); $("#exp20").hide();
   // arranca la 1ra pregunta
  $("#hacertrivia").click(function(event){
    sumo();
  });
  // paso de pregunta
  $(".next").click(function(event){
    sumo();
  });
  // veo resultados
  $("#resultados").click(function(){
    $(".trivia10").hide();
     $(".wrap").hide();
    $(".resultado").show();
  });

// deslizado a otra seccion (trivia/carreras)
$(".sec").on('click', function(event) {

  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top

      //numero de velocidad
    }, 400, function(){

      window.location.hash = hash;
    });
  }
});


  // sumo coincidencias   y ademas veo las rtas
  $("#boton1").click(function(){
    verdad1();
    $("#boton1").button('toggle');
    $("#preg1").hide(); $("#img1").hide();
    $("#rta1").show(); $("#exp1").show();
    $("#boton1").hide();   $("#boton2").hide();
  });
  $("#boton3").click(function(){
    verdad2();
    $("#boton3").button('toggle');
      $("#boton3").hide();   $("#boton4").hide();
    $("#preg2").hide(); $("#img2").hide();
    $("#rta2").show(); $("#exp2").show();
    atr();
  });
  $("#boton5").click(function(){
    verdad3();
    $("#boton5").button('toggle');
    $("#boton5").hide();   $("#boton6").hide();
    $("#preg3").hide(); $("#img3").hide();
    $("#rta3").show(); $("#exp3").show();
    atr();
  });
  $("#boton7").click(function(){
    verdad4();
    $("#boton7").hide();   $("#boton8").hide();
    $("#boton7").button('toggle');
    $("#preg4").hide(); $("#img4").hide();
    $("#rta4").show(); $("#exp4").show();
  });
  $("#boton9").click(function(){
    verdad5();
    $("#boton9").button('toggle');
      $("#boton9").hide();   $("#boton10").hide();
    $("#preg5").hide(); $("#img5").hide();
    $("#rta5").show(); $("#exp5").show();

  });
  $("#boton11").click(function(){
    verdad6();
    $("#boton11").button('toggle');
    $("#boton11").hide();   $("#boton12").hide();
    $("#preg6").hide(); $("#img6").hide();
    $("#rta6").show(); $("#exp6").show();
    atr();
  });
  $("#boton13").click(function(){
    verdad7();
    $("#boton13").button('toggle');
      $("#boton13").hide();   $("#boton14").hide();
    $("#preg7").hide(); $("#img7").hide();
    $("#rta7").show(); $("#exp7").show();
  });
  $("#boton15").click(function(){
    verdad8();
    $("#boton15").button('toggle');
      $("#boton15").hide();   $("#boton16").hide();
    $("#preg8").hide(); $("#img8").hide();
    $("#rta8").show(); $("#exp8").show();
  });
  $("#boton17").click(function(){
    verdad9();
    $("#boton17").button('toggle');
      $("#boton17").hide();   $("#boton18").hide();
    $("#preg9").hide(); $("#img9").hide();
    $("#rta9").show(); $("#exp9").show();
     atr();
  });
  $("#boton19").click(function(){
    verdad10();
    $("#boton19").button('toggle');
      $("#boton19").hide();   $("#boton20").hide();
    $("#preg10").hide(); $("#img10").hide();
    $("#rta10").show(); $("#exp10").show();
    atr();
  });

  $("#boton2").click(function(){
    mito1();
    $("#preg1").hide(); $("#img1").hide();
      $("#boton1").hide();   $("#boton2").hide();
    $("#rta1").show(); $("#exp1").show();
    atr();
  });
  $("#boton4").click(function(){
    mito2();
      $("#boton3").hide();   $("#boton4").hide();
    $("#preg2").hide(); $("#img2").hide();
    $("#rta2").show(); $("#exp2").show();
  });
  $("#boton6").click(function(){
    mito3();
  $("#boton5").hide();   $("#boton6").hide();
    $("#preg3").hide(); $("#img3").hide();
    $("#rta3").show(); $("#exp3").show();
  });
  $("#boton8").click(function(){
    mito4();
      $("#boton7").hide();   $("#boton8").hide();
    $("#preg4").hide(); $("#img4").hide();
    $("#rta4").show(); $("#exp4").show();
    atr();
  });
  $("#boton10").click(function(){
    mito5();
    $("#boton9").hide();   $("#boton10").hide();
    $("#preg5").hide(); $("#img5").hide();
    $("#rta5").show(); $("#exp5").show();
    atr();
  });
  $("#boton12").click(function(){
    mito6();
      $("#boton11").hide();   $("#boton12").hide();
    $("#preg6").hide(); $("#img6").hide();
    $("#rta6").show(); $("#exp6").show();  });
  $("#boton14").click(function(){
    mito7();
      $("#boton13").hide();   $("#boton14").hide();
    $("#preg7").hide(); $("#img7").hide();
    $("#rta7").show(); $("#exp7").show();  atr(); });
  $("#boton16").click(function(){
    mito8();
    $("#preg8").hide(); $("#img8").hide();
      $("#boton15").hide();   $("#boton16").hide();
    $("#rta8").show(); $("#exp8").show();  atr(); });
  $("#boton18").click(function(){
    mito9();
      $("#boton17").hide();   $("#boton18").hide();
    $("#preg9").hide(); $("#img9").hide();
    $("#rta9").show(); $("#exp9").show();  });
  $("#boton20").click(function(){
    mito10();
      $("#boton19").hide();   $("#boton20").hide();
    $("#preg10").hide(); $("#img10").hide();
    $("#rta10").show(); $("#exp10").show();  });

 //____________________CARRERAS______________________//


//______NUTRICION_______//

 $(".duracion_nutricion").hide(); $(".planestudios_nutricion").hide(); $(".teoricas_nutricion").hide(); 
 $("#btn-cerrar1").hide();
 $("#der-n-d").hide(); $("#der-n-p").hide(); $("#der-n-t").hide();
 $("#iz-n-d").hide(); $("#iz-n-p").hide(); $("#iz-n-t").hide();

   // ________plan de estudios__________

  $("#btn_plan_n").click(function(event){
    $(".planestudios_nutricion").show(); $("#btn-cerrar1").show(); $("#der-n-p").show(); $("#iz-n-p").show(); $(".duracion_nutricion").hide(); $(".teoricas_nutricion").hide(); 
  });

  $("#iz-n-p").click(function(event){
   $(".planestudios_nutricion").hide(); $("#der-n-p").hide(); $("#iz-n-p").hide(); $(".duracion_nutricion").show(); $("#der-n-d").show(); $("#iz-n-d").show();
  }); 

  $("#der-n-p").click(function(event){
    $(".planestudios_nutricion").hide(); $("#der-n-p").hide(); $("#iz-n-p").hide();$(".teoricas_nutricion").show(); $("#der-n-t").show(); $("#iz-n-t").show();
  }); 



  // ________teoricas y practicas__________

  $("#btn_teo_n").click(function(event){
    $(".teoricas_nutricion").show(); $("#btn-cerrar1").show(); $("#der-n-t").show(); $("#iz-n-t").show();  $(".duracion_nutricion").hide(); $(".planestudios_nutricion").hide();
  });

  $("#iz-n-t").click(function(event){
   $(".teoricas_nutricion").hide(); $("#der-n-t").hide(); $("#iz-n-t").hide(); $(".planestudios_nutricion").show(); $("#der-n-p").show(); $("#iz-n-p").show();
  }); 

  $("#der-n-t").click(function(event){
    $(".teoricas_nutricion").hide(); $("#der-n-t").hide(); $("#iz-n-t").hide(); $(".duracion_nutricion").show(); $("#der-n-d").show(); $("#iz-n-d").show();
  }); 



  // ________duracion__________

  $("#btn_duración_n").click(function(event){
    $(".duracion_nutricion").show(); $("#btn-cerrar1").show(); $("#der-n-d").show(); $("#iz-n-d").show(); $(".planestudios_nutricion").hide(); $(".teoricas_nutricion").hide(); 
  });

  $("#iz-n-d").click(function(event){
   $(".duracion_nutricion").hide(); $("#der-n-d").hide(); $("#iz-n-d").hide(); $(".teoricas_nutricion").show(); $("#der-n-t").show(); $("#iz-n-t").show();
  }); 

  $("#der-n-d").click(function(event){
    $(".duracion_nutricion").hide(); $("#der-n-d").hide(); $("#iz-n-d").hide(); $(".planestudios_nutricion").show(); $("#der-n-p").show(); $("#iz-n-p").show();
  }); 


  // ________FIN NUTRICION__________ 


//______MEDICINA_______//

 $(".duracion_medicina").hide(); $(".planestudios_medicina").hide(); $(".teoricas_medicina").hide(); 
 $("#btn-cerrar2").hide();
 $("#der-m-d").hide(); $("#der-m-p").hide(); $("#der-m-t").hide();
 $("#iz-m-d").hide(); $("#iz-m-p").hide(); $("#iz-m-t").hide();

   // ________plan de estudios__________

  $("#btn_plan_m").click(function(event){
    $(".planestudios_medicina").show(); $("#btn-cerrar2").show(); $("#der-m-p").show(); $("#iz-m-p").show(); $(".duracion_medicina").hide(); $(".teoricas_medicina").hide(); 
  });

  $("#iz-m-p").click(function(event){
   $(".planestudios_medicina").hide(); $("#der-m-p").hide(); $("#iz-m-p").hide(); $(".duracion_medicina").show(); $("#der-m-d").show(); $("#iz-m-d").show();
  }); 

  $("#der-m-p").click(function(event){
    $(".planestudios_medicina").hide(); $("#der-m-p").hide(); $("#iz-m-p").hide();$(".teoricas_medicina").show(); $("#der-m-t").show(); $("#iz-m-t").show();
  }); 



  // ________teoricas y practicas__________

  $("#btn_teo_m").click(function(event){
    $(".teoricas_medicina").show(); $("#btn-cerrar2").show(); $("#der-m-t").show(); $("#iz-m-t").show();  $(".duracion_medicina").hide(); $(".planestudios_medicina").hide();
  });

  $("#iz-m-t").click(function(event){
   $(".teoricas_medicina").hide(); $("#der-m-t").hide(); $("#iz-m-t").hide(); $(".planestudios_medicina").show(); $("#der-m-p").show(); $("#iz-m-p").show();
  }); 

  $("#der-m-t").click(function(event){
    $(".teoricas_medicina").hide(); $("#der-m-t").hide(); $("#iz-m-t").hide(); $(".duracion_medicina").show(); $("#der-m-d").show(); $("#iz-m-d").show();
  }); 



  // ________duracion__________

  $("#btn_duración_m").click(function(event){
    $(".duracion_medicina").show(); $("#btn-cerrar2").show(); $("#der-m-d").show(); $("#iz-m-d").show(); $(".planestudios_medicina").hide(); $(".teoricas_medicina").hide(); 
  });

  $("#iz-m-d").click(function(event){
   $(".duracion_medicina").hide(); $("#der-m-d").hide(); $("#iz-m-d").hide(); $(".teoricas_medicina").show(); $("#der-m-t").show(); $("#iz-m-t").show();
  }); 

  $("#der-m-d").click(function(event){
    $(".duracion_medicina").hide(); $("#der-m-d").hide(); $("#iz-m-d").hide(); $(".planestudios_medicina").show(); $("#der-m-p").show(); $("#iz-m-p").show();
  }); 


  // ________FIN MEDICINA__________


    //______ENFERMERIA_______//

     $(".duracion_enfermeria").hide(); $(".planestudios_enfermeria").hide(); $(".teoricas_enfermeria").hide(); 
     $("#btn-cerrar3").hide();
     $("#der-e-d").hide(); $("#der-e-p").hide(); $("#der-e-t").hide();
     $("#iz-e-d").hide(); $("#iz-e-p").hide(); $("#iz-e-t").hide();

       // ________plan de estudios__________

      $("#btn_plan_e").click(function(event){
        $(".planestudios_enfermeria").show(); $("#btn-cerrar3").show(); $("#der-e-p").show(); $("#iz-e-p").show(); $(".duracion_enfermeria").hide(); $(".teoricas_enfermeria").hide(); 
      });

      $("#iz-e-p").click(function(event){
       $(".planestudios_enfermeria").hide(); $("#der-e-p").hide(); $("#iz-e-p").hide(); $(".duracion_enfermeria").show(); $("#der-e-d").show(); $("#iz-e-d").show();
      }); 

      $("#der-e-p").click(function(event){
        $(".planestudios_enfermeria").hide(); $("#der-e-p").hide(); $("#iz-e-p").hide();$(".teoricas_enfermeria").show(); $("#der-e-t").show(); $("#iz-e-t").show();
      }); 



      // ________teoricas y practicas__________

      $("#btn_teo_e").click(function(event){
        $(".teoricas_enfermeria").show(); $("#btn-cerrar3").show(); $("#der-e-t").show(); $("#iz-e-t").show();  $(".duracion_enfermeria").hide(); $(".planestudios_enfermeria").hide();
      });

      $("#iz-e-t").click(function(event){
       $(".teoricas_enfermeria").hide(); $("#der-e-t").hide(); $("#iz-e-t").hide(); $(".planestudios_enfermeria").show(); $("#der-e-p").show(); $("#iz-e-p").show();
      }); 

      $("#der-e-t").click(function(event){
        $(".teoricas_enfermeria").hide(); $("#der-e-t").hide(); $("#iz-e-t").hide(); $(".duracion_enfermeria").show(); $("#der-e-d").show(); $("#iz-e-d").show();
      }); 



      // ________duracion__________

      $("#btn_duración_e").click(function(event){
        $(".duracion_enfermeria").show(); $("#btn-cerrar3").show(); $("#der-e-d").show(); $("#iz-e-d").show(); $(".planestudios_enfermeria").hide(); $(".teoricas_enfermeria").hide(); 
      });

      $("#iz-e-d").click(function(event){
       $(".duracion_enfermeria").hide(); $("#der-e-d").hide(); $("#iz-e-d").hide(); $(".teoricas_enfermeria").show(); $("#der-e-t").show(); $("#iz-e-t").show();
      }); 

      $("#der-e-d").click(function(event){
        $(".duracion_enfermeria").hide(); $("#der-e-d").hide(); $("#iz-e-d").hide(); $(".planestudios_enfermeria").show(); $("#der-e-p").show(); $("#iz-e-p").show();
      }); 


      // ________FIN ENFERMERIA__________


    //______OBSTETRICIA_______//

     $(".duracion_obstetricia").hide(); $(".planestudios_obstetricia").hide(); $(".teoricas_obstetricia").hide(); 
     $("#btn-cerrar4").hide();
     $("#der-o-d").hide(); $("#der-o-p").hide(); $("#der-o-t").hide();
     $("#iz-o-d").hide(); $("#iz-o-p").hide(); $("#iz-o-t").hide();

       // ________plan de estudios__________

      $("#btn_plan_o").click(function(event){
        $(".planestudios_obstetricia").show(); $("#btn-cerrar4").show(); $("#der-o-p").show(); $("#iz-o-p").show(); $(".duracion_obstetricia").hide(); $(".teoricas_obstetricia").hide(); 
      });

      $("#iz-o-p").click(function(event){
       $(".planestudios_obstetricia").hide(); $("#der-o-p").hide(); $("#iz-o-p").hide(); $(".duracion_obstetricia").show(); $("#der-o-d").show(); $("#iz-o-d").show();
      }); 

      $("#der-o-p").click(function(event){
        $(".planestudios_obstetricia").hide(); $("#der-o-p").hide(); $("#iz-o-p").hide();$(".teoricas_obstetricia").show(); $("#der-o-t").show(); $("#iz-o-t").show();
      }); 



      // ________teoricas y practicas__________

      $("#btn_teo_o").click(function(event){
        $(".teoricas_obstetricia").show(); $("#btn-cerrar4").show(); $("#der-o-t").show(); $("#iz-o-t").show();  $(".duracion_obstetricia").hide(); $(".planestudios_obstetricia").hide();
      });

      $("#iz-o-t").click(function(event){
       $(".teoricas_obstetricia").hide(); $("#der-o-t").hide(); $("#iz-o-t").hide(); $(".planestudios_obstetricia").show(); $("#der-o-p").show(); $("#iz-o-p").show();
      }); 

      $("#der-o-t").click(function(event){
        $(".teoricas_obstetricia").hide(); $("#der-o-t").hide(); $("#iz-o-t").hide(); $(".duracion_obstetricia").show(); $("#der-o-d").show(); $("#iz-o-d").show();
      }); 



      // ________duracion__________

      $("#btn_duración_o").click(function(event){
        $(".duracion_obstetricia").show(); $("#btn-cerrar4").show(); $("#der-o-d").show(); $("#iz-o-d").show(); $(".planestudios_obstetricia").hide(); $(".teoricas_obstetricia").hide(); 
      });

      $("#iz-o-d").click(function(event){
       $(".duracion_obstetricia").hide(); $("#der-o-d").hide(); $("#iz-o-d").hide(); $(".teoricas_obstetricia").show(); $("#der-o-t").show(); $("#iz-o-t").show();
      }); 

      $("#der-o-d").click(function(event){
        $(".duracion_obstetricia").hide(); $("#der-o-d").hide(); $("#iz-o-d").hide(); $(".planestudios_obstetricia").show(); $("#der-o-p").show(); $("#iz-o-p").show();
      }); 


      // ________FIN OBSTETRICIA__________

    //______TPC_______//

     $(".duracion_tpc").hide(); $(".planestudios_tpc").hide(); $(".teoricas_tpc").hide(); 
     $("#btn-cerrar5").hide();
     $("#der-t-d").hide(); $("#der-t-p").hide(); $("#der-t-t").hide();
     $("#iz-t-d").hide(); $("#iz-t-p").hide(); $("#iz-t-t").hide();

       // ________plan de estudios__________

      $("#btn_plan_t").click(function(event){
        $(".planestudios_tpc").show(); $("#btn-cerrar5").show(); $("#der-t-p").show(); $("#iz-t-p").show(); $(".duracion_tpc").hide(); $(".teoricas_tpc").hide(); 
      });

      $("#iz-t-p").click(function(event){
       $(".planestudios_tpc").hide(); $("#der-t-p").hide(); $("#iz-t-p").hide(); $(".duracion_tpc").show(); $("#der-t-d").show(); $("#iz-t-d").show();
      }); 

      $("#der-t-p").click(function(event){
        $(".planestudios_tpc").hide(); $("#der-t-p").hide(); $("#iz-t-p").hide();$(".teoricas_tpc").show(); $("#der-t-t").show(); $("#iz-t-t").show();
      }); 



      // ________teoricas y practicas__________

      $("#btn_teo_t").click(function(event){
        $(".teoricas_tpc").show(); $("#btn-cerrar5").show(); $("#der-t-t").show(); $("#iz-t-t").show();  $(".duracion_tpc").hide(); $(".planestudios_tpc").hide();
      });

      $("#iz-t-t").click(function(event){
       $(".teoricas_tpc").hide(); $("#der-t-t").hide(); $("#iz-t-t").hide(); $(".planestudios_tpc").show(); $("#der-t-p").show(); $("#iz-t-p").show();
      }); 

      $("#der-t-t").click(function(event){
        $(".teoricas_tpc").hide(); $("#der-t-t").hide(); $("#iz-t-t").hide(); $(".duracion_tpc").show(); $("#der-t-d").show(); $("#iz-t-d").show();
      }); 



      // ________duracion__________

      $("#btn_duración_t").click(function(event){
        $(".duracion_tpc").show(); $("#btn-cerrar5").show(); $("#der-t-d").show(); $("#iz-t-d").show(); $(".planestudios_tpc").hide(); $(".teoricas_tpc").hide(); 
      });

      $("#iz-o-d").click(function(event){
       $(".duracion_tpc").hide(); $("#der-t-d").hide(); $("#iz-t-d").hide(); $(".teoricas_tpc").show(); $("#der-t-t").show(); $("#iz-t-t").show();
      }); 

      $("#der-o-d").click(function(event){
        $(".duracion_tpc").hide(); $("#der-t-d").hide(); $("#iz-t-d").hide(); $(".planestudios_tpc").show(); $("#der-t-p").show(); $("#iz-t-p").show();
      }); 


      // ________FIN TPC__________

      //________BOTONES CERRAR POPUPS_______}

  $("#btn-cerrar1").click(function(event){

    $(".duracion_nutricion").hide(); $(".planestudios_nutricion").hide(); $(".teoricas_nutricion").hide(); 
    $("#btn-cerrar1").hide();
    $("#der-n-d").hide(); $("#der-n-p").hide(); $("#der-n-t").hide();
    $("#iz-n-d").hide(); $("#iz-n-p").hide(); $("#iz-n-t").hide();
  });

  $("#btn-cerrar2").click(function(event){

    $(".duracion_medicina").hide(); $(".planestudios_medicina").hide(); $(".teoricas_medicina").hide(); 
    $("#btn-cerrar2").hide();
    $("#der-m-d").hide(); $("#der-m-p").hide(); $("#der-m-t").hide();
    $("#iz-m-d").hide(); $("#iz-m-p").hide(); $("#iz-m-t").hide();
  });

  $("#btn-cerrar3").click(function(event){
    $("#btn-cerrar3").hide();
    $(".duracion_enfermeria").hide(); $(".planestudios_enfermeria").hide(); $(".teoricas_enfermeria").hide(); 
    $("#der-e-d").hide(); $("#der-e-p").hide(); $("#der-e-t").hide();
    $("#iz-e-d").hide(); $("#iz-e-p").hide(); $("#iz-e-t").hide();
  });

  $("#btn-cerrar4").click(function(event){
    $("#btn-cerrar4").hide();
    $(".duracion_obstetricia").hide(); $(".planestudios_obstetricia").hide(); $(".teoricas_obstetricia").hide(); 
    $("#der-o-d").hide(); $("#der-o-p").hide(); $("#der-o-t").hide();
    $("#iz-o-d").hide(); $("#iz-o-p").hide(); $("#iz-o-t").hide();
  });

  $("#btn-cerrar5").click(function(event){
    $("#btn-cerrar5").hide();
    $(".duracion_tpc").hide(); $(".planestudios_tpc").hide(); $(".teoricas_tpc").hide(); 
    $("#der-t-d").hide(); $("#der-t-p").hide(); $("#der-t-t").hide();
    $("#iz-t-d").hide(); $("#iz-t-p").hide(); $("#iz-t-t").hide();
  });

  //  ____________fin de jQuery___________________
});

var pag = 0;

function sumo() {
  pag = pag + 1;

  if(pag == 1){ $("#T").hide(); $(".trivia1").show(); $(".trivia-sup").show(); $(".wrap").show();}
  else if (pag == 2){ $("#T").hide();  $(".trivia1").hide();  $(".trivia2").show();}
  else if (pag == 3){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").show();}
  else if (pag == 4){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").show();}
  else if (pag == 5){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide();  $(".trivia5").show();}
  else if (pag == 6){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide();  $(".trivia5").hide();  $(".trivia6").show();}
  else if (pag == 7){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide();  $(".trivia5").hide();  $(".trivia6").hide();  $(".trivia7").show();}
  else if (pag == 8){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide();  $(".trivia5").hide();  $(".trivia6").hide();  $(".trivia7").hide();  $(".trivia8").show();}
  else if (pag == 9){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide(); $(".trivia5").hide();  $(".trivia6").hide();  $(".trivia7").hide();  $(".trivia8").hide(); $(".trivia9").show();}
  else if (pag == 10){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide();  $(".trivia5").hide(); $(".trivia6").hide();  $(".trivia7").hide(); $(".trivia8").hide();  $(".trivia9").hide(); $(".trivia10").show(); $(".next").hide();  }

}


// contador de las coincidencias en la trivia

var cont=0;
var ver1 = true; var ver2 = true; var ver3 = true; var ver4 = true; var ver5 = true; var ver6 = true; var ver7 = true;  var ver8 = true; var ver9 = true; var ver10 = true; var ver11 = true; var ver12 = true;var ver13 = true;var ver14 = true;var ver15 = true;var ver16 = true; var ver17 = true;var ver18 = true;var ver19 = true; var ver20 = true;
var mit1 = true; var mit2 = true; var mit3 = true; var mit4 = true; var mit5 = true; var mit6 = true; var mit7 = true;  var mit8 = true; var mit9 = true; var mit10 = true; var mit11 = true; var mit12 = true;var mit13 = true;var mit14 = true;var mit15 = true;var mit16 = true; var mit17 = true;var mit18 = true;var mit19 = true; var mit20 = true;
c=document.getElementById('coincidencias');
c.innerHTML = cont;

function verdad1(){
  if(ver1 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function verdad2(){
  if(ver2 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function verdad3(){
  if(ver3 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function verdad4(){
  if(ver4 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function verdad5(){
  if(ver5 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function verdad6(){
  if(ver6 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function verdad7(){
  if(ver7 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function verdad8(){
  if(ver8 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function verdad9(){
  if(ver9 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function verdad10(){
  if(ver10 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}

function mito1(){
  if(mit1 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function mito2(){
  if(mit2 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function mito3(){
  if(mit3 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function mito4(){
  if(mit4 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function mito5(){
  if(mit5 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function mito6(){
  if(mit6 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function mito7(){
  if(mit7 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function mito8(){
  if(mit8 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function mito9(){
  if(mit9 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}
function mito10(){
  if(mit10 == true){
    cont = cont + 1;
  }
  c.innerHTML = cont;
}



 // desactivar el zoom

(function($) {
    $.fn.nodoubletapzoom = function() {
     $(this).bind('touchstart', function preventZoom(e) {
     var t2 = e.timeStamp
      , t1 = $(this).data('lastTouch') || t2
      , dt = t2 - t1
      , fingers = e.originalEvent.touches.length;
     $(this).data('lastTouch', t2);
     if (!dt || dt > 500 || fingers > 1) return; // not double-tap

     e.preventDefault(); // double tap - prevent the zoom
     // also synthesize click events we just swallowed up
     $(this).trigger('click').trigger('click');
     });
    };
});

var at=0; var hola = true;
a=document.getElementById('aciertos');
a.innerHTML=at;

function atr(){
  if(hola == true) {
    at = at + 10 ;
  }
  a.innerHTML= at;
}
