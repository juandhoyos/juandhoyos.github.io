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
  // escondo rta y explicaciones
  $("#rta1").hide(); $("#exp1").hide();   $("#rta2").hide(); $("#exp2").hide();   $("#rta3").hide(); $("#exp3").hide();   $("#rta4").hide(); $("#exp4").hide();  $("#rta5").hide(); $("#exp5").hide();  $("#rta6").hide(); $("#exp6").hide();  $("#rta7").hide(); $("#exp7").hide();  $("#rta8").hide(); $("#exp8").hide(); $("#rta9").hide(); $("#exp9").hide();   $("#rta10").hide(); $("#exp10").hide();  $("#rta11").hide(); $("#exp11").hide();  $("#rta12").hide(); $("#exp12").hide();   $("#rta13").hide(); $("#exp13").hide();   $("#rta14").hide(); $("#exp14").hide();  $("#rta15").hide(); $("#exp15").hide();  $("#rta16").hide(); $("#exp16").hide();  $("#rta17").hide(); $("#exp17").hide();  $("#rta18").hide(); $("#exp18").hide();  $("#rta19").hide(); $("#exp19").hide();  $("#rta20").hide(); $("#exp20").hide();
   // arranca la 1ra pregunta
  $("#hacertrivia").click(function(event){
    sumo();
  });
  // paso de pregunta
    $(".next").click(function(event){
    sumo();
    $(".mito").hide();    $(".mito3l").hide();    $(".mito4l").hide();
    $(".verdad").hide();  $(".verdad3l").hide();    $(".verdad4l").hide(); 
  });
  // veo resultados
  $("#resultados").click(function(){
    $(".trivia10").hide();
     $(".wrap").hide();
    $(".resultado").show();
  });
 // oculto por defecto las cruces y ticks en Resultados
 $("#cor1").hide();  $("#cor2").hide();  $("#cor3").hide();  $("#cor4").hide();  $("#cor5").hide();  $("#cor6").hide();  $("#cor7").hide();  $("#cor8").hide();  $("#cor9").hide();  $("#cor10").hide();
 $("#inc1").hide();  $("#inc2").hide();  $("#inc3").hide();  $("#inc4").hide();  $("#inc5").hide();  $("#inc6").hide();  $("#inc7").hide();  $("#inc8").hide();  $("#inc9").hide();  $("#inc10").hide();
 // oculto por defecto las coincidencias en la pantalla de Resultados
 $("#p1m").hide(); $("#p2m").hide(); $("#p3m").hide(); $("#p4m").hide(); $("#p5m").hide(); $("#p6m").hide(); $("#p7m").hide(); $("#p8m").hide(); $("#p9m").hide(); $("#p10m").hide();
 $("#p1v").hide(); $("#p2v").hide(); $("#p3v").hide(); $("#p4v").hide(); $("#p5v").hide(); $("#p6v").hide(); $("#p7v").hide(); $("#p8v").hide(); $("#p9v").hide(); $("#p10v").hide();
  //oculto team
$("#foto1").hide(); $("#foto2").hide(); $("#foto3").hide(); $("#foto4").hide(); $("#foto5").hide(); $("#foto6").hide(); $("#foto7").hide(); $("#foto8").hide(); $("#foto9").hide(); $("#foto10").hide();
//oculto todos los graficos
$("#0").show(); $("#10").hide(); $("#20").hide(); $("#30").hide(); $("#40").hide(); $("#50").hide(); $("#60").hide(); $("#70").hide(); $("#80").hide(); $("#90").hide(); $("#100").hide();
//oculto los bien/mal
$(".verdad").hide(); $(".verdad3l").hide(); $(".verdad4l").hide(); $(".mito").hide(); $(".mito3l").hide(); $(".mito4l").hide();

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

  $("#Reiniciar").click(function(){
  morir();
});
      // sumo coincidencias   y ademas veo las rtas
  $("#boton1").click(function(){
    verdad1();
    $("#boton1").button('toggle');
    $("#boton1").attr('disabled',true);
    $("#preg1").hide(); $("#img1").hide();
    $("#rta1").show(); $("#exp1").show();
    // $("#boton1").hide();   $("#boton2").hide();
    $("#inc1").show();
    $("#p1v").show();
    $("#foto1").show();
    $("#boton2").attr('disabled',true);
    $(".verdad").show();
  });
  $("#boton3").click(function(){
    verdad2();
    $("#boton3").button('toggle');
    $("#boton3").attr('disabled',true);$("#boton4").attr('disabled',true);
    $("#preg2").hide(); $("#img2").hide();
    $("#rta2").show(); $("#exp2").show();
    atr();
    $("#cor2").show();
    $("#p2v").show();
    $("#foto2").show();
    $(".verdad3l").show();
  });
  $("#boton5").click(function(){
    verdad3();
    $("#boton5").button('toggle');
    $("#boton5").attr('disabled',true);$("#boton6").attr('disabled',true);
    $("#preg3").hide(); $("#img3").hide();
    $("#rta3").show(); $("#exp3").show();
    atr();
    $("#cor3").show();
    $("#p3v").show();
    $("#foto3").show();
    $(".verdad3l").show();
  });
  $("#boton7").click(function(){
    verdad4();
    $("#boton7").attr('disabled',true); $("#boton8").attr('disabled',true);
    $("#boton7").button('toggle');
    $("#preg4").hide(); $("#img4").hide();
    $("#rta4").show(); $("#exp4").show();
    $("#inc4").show();
    $("#p4v").show();
    $("#foto4").show();
    $(".verdad").show();
  });
  $("#boton9").click(function(){
    verdad5();
    $("#boton9").button('toggle');
    $("#boton9").attr('disabled',true); $("#boton10").attr('disabled',true);
    $("#preg5").hide(); $("#img5").hide();
    $("#rta5").show(); $("#exp5").show();
    $("#inc5").show();
$("#p5v").show();
$("#foto5").show();
$(".verdad").show();
  });
  $("#boton11").click(function(){
    verdad6();
    $("#boton11").button('toggle');
    $("#boton11").attr('disabled',true); $("#boton12").attr('disabled',true);
    $("#preg6").hide(); $("#img6").hide();
    $("#rta6").show(); $("#exp6").show();
    atr();
    $("#cor6").show();
    $("#p6v").show();
    $("#foto6").show();
    $(".verdad").show();
  });
$("#boton13").click(function(){
    verdad7();
    $("#boton13").button('toggle');
    $("#boton13").attr('disabled',true); $("#boton14").attr('disabled',true);
    $("#preg7").hide(); $("#img7").hide();
    $("#rta7").show(); $("#exp7").show();
    $("#inc7").show();
    $("#p7v").show();
    $("#foto7").show();
    $(".verdad").show();
  });
    $("#boton15").click(function(){
    verdad8();
    $("#boton15").button('toggle');
    $("#boton15").attr('disabled',true); $("#boton16").attr('disabled',true);
    $("#preg8").hide(); $("#img8").hide();
    $("#rta8").show(); $("#exp8").show();
    $("#inc8").show();
    $("#p8v").show();
    $("#foto8").show();
    $(".verdad3l").show();
  });
  $("#boton17").click(function(){
    verdad9();
    $("#boton17").button('toggle');
    $("#boton17").attr('disabled',true); $("#boton18").attr('disabled',true);
    $("#preg9").hide(); $("#img9").hide();
    $("#rta9").show(); $("#exp9").show();
    atr();
    $("#cor9").show();
    $("#p9v").show();
    $("#foto9").show();
    $(".verdad3l").show();
  });
  $("#boton19").click(function(){
    verdad10();
    $("#boton19").button('toggle');
    $("#boton19").attr('disabled',true); $("#boton20").attr('disabled',true);
    $("#preg10").hide(); $("#img10").hide();
    $("#rta10").show(); $("#exp10").show();
    atr();
    $("#cor10").show();
    $("#p10v").show();
    $("#foto10").show();
    $(".verdad4l").show();
  });
//botones de mito
  $("#boton2").click(function(){
    mito1();
    $("#preg1").hide(); $("#img1").hide();
    $("#boton1").attr('disabled',true); $("#boton2").attr('disabled',true);
    $("#rta1").show(); $("#exp1").show();
    atr();
    $("#cor1").show();
    $("#p1m").show();
    $("#foto1").show();
    $(".mito").show();
  });
  $("#boton4").click(function(){
    mito2();
    $("#boton3").attr('disabled',true); $("#boton4").attr('disabled',true);
    $("#preg2").hide(); $("#img2").hide();
    $("#rta2").show(); $("#exp2").show();
    $("#inc2").show();
    $("#p2m").show();
    $("#foto2").show();
      $(".mito3l").show();
  });
  $("#boton6").click(function(){
    mito3();
    $("#boton5").attr('disabled',true); $("#boton6").attr('disabled',true);
    $("#preg3").hide(); $("#img3").hide();
    $("#rta3").show(); $("#exp3").show();
    $("#inc3").show();
    $("#p3m").show();
    $("#foto3").show();
      $(".mito3l").show();
  });
  $("#boton8").click(function(){
    mito4();
    $("#boton7").attr('disabled',true); $("#boton8").attr('disabled',true);
    $("#preg4").hide(); $("#img4").hide();
    $("#rta4").show(); $("#exp4").show();
    atr();
    $("#cor4").show();
      $("#p4m").show();
      $("#foto4").show();
        $(".mito").show();
  });
  $("#boton10").click(function(){
    mito5();
    $("#boton9").attr('disabled',true); $("#boton10").attr('disabled',true);
    $("#preg5").hide(); $("#img5").hide();
    $("#rta5").show(); $("#exp5").show();
    atr();
    $("#cor5").show();
    $("#p5m").show();
    $("#foto5").show();
      $(".mito").show();
  });
  $("#boton12").click(function(){
    mito6();
    $("#boton11").attr('disabled',true); $("#boton12").attr('disabled',true);
    $("#preg6").hide(); $("#img6").hide();
    $("#rta6").show(); $("#exp6").show();
    $("#inc6").show();
    $("#p6m").show();
    $("#foto6").show();
      $(".mito").show();
   });
  $("#boton14").click(function(){
    mito7();
    $("#boton13").attr('disabled',true); $("#boton14").attr('disabled',true);
    $("#preg7").hide(); $("#img7").hide();
    $("#rta7").show(); $("#exp7").show();  atr();
    $("#cor7").show();
    $("#p7m").show();
    $("#foto7").show();
      $(".mito").show();
   });
  $("#boton16").click(function(){
    mito8();
    $("#preg8").hide(); $("#img8").hide();
    $("#boton15").attr('disabled',true); $("#boton16").attr('disabled',true);
    $("#rta8").show(); $("#exp8").show();  atr();
    $("#cor8").show();
    $("#p8m").show();
    $("#foto8").show();
      $(".mito3l").show();
   });
  $("#boton18").click(function(){
    mito9();
    $("#boton17").attr('disabled',true); $("#boton18").attr('disabled',true);
    $("#preg9").hide(); $("#img9").hide();
    $("#rta9").show(); $("#exp9").show();
    $("#inc9").show();
    $("#p9m").show();
    $("#foto9").show();
      $(".mito3l").show();
   });
  $("#boton20").click(function(){
    mito10();
    $("#boton19").attr('disabled',true); $("#boton20").attr('disabled',true);
    $("#preg10").hide(); $("#img10").hide();
    $("#rta10").show(); $("#exp10").show();
    $("#inc10").show();
    $("#p10m").show();
    $("#foto10").show();
      $(".mito4l").show();
    });
//cuando voy a carreras saco a los tipitos
  $("#Ir-a-carreras").click(function(){

  $(".ver").hide();
});
$("#Ir-a-carreras2").click(function(){

  $(".ver").hide();
});
  
 //____________________CARRERAS______________________//


 //____________________CARRERAS______________________//


//______NUTRICION_______//

 $(".duracion_nutricion").hide(); $(".planestudios_nutricion").hide(); $(".teoricas_nutricion").hide(); 
 $("#btn-cerrar1").hide();
 $("#der-n-d").hide(); $("#der-n-p").hide(); $("#der-n-t").hide();
 $("#iz-n-d").hide(); $("#iz-n-p").hide(); $("#iz-n-t").hide();

   // ________plan de estudios__________

  $("#btn_plan_n").click(function(event){
    $(".btn-planestudio-n").hide(); $(".btn-teoricas-n").hide(); $(".btn-duracion-n").hide(); 
    $(".planestudios_nutricion").show(); $("#btn-cerrar1").show(); $("#der-n-p").show(); $("#iz-n-p").show(); $(".duracion_nutricion").hide(); $(".teoricas_nutricion").hide(); 
  });

  $("#iz-n-p").click(function(event){
   $(".btn-planestudio-n").hide(); $(".btn-teoricas-n").hide(); $(".btn-duracion-n").hide(); 
   $(".planestudios_nutricion").hide(); $("#der-n-p").hide(); $("#iz-n-p").hide(); $(".duracion_nutricion").show(); $("#der-n-d").show(); $("#iz-n-d").show();
  }); 

  $("#der-n-p").click(function(event){
    $(".btn-planestudio-n").hide(); $(".btn-teoricas-n").hide(); $(".btn-duracion-n").hide(); 
    $(".planestudios_nutricion").hide(); $("#der-n-p").hide(); $("#iz-n-p").hide();$(".teoricas_nutricion").show(); $("#der-n-t").show(); $("#iz-n-t").show();
  }); 



  // ________teoricas y practicas__________

  $("#btn_teo_n").click(function(event){
   $(".btn-planestudio-n").hide(); $(".btn-teoricas-n").hide(); $(".btn-duracion-n").hide();  
   $(".teoricas_nutricion").show(); $("#btn-cerrar1").show(); $("#der-n-t").show(); $("#iz-n-t").show();  $(".duracion_nutricion").hide(); $(".planestudios_nutricion").hide();
  });

  $("#iz-n-t").click(function(event){
   $(".btn-planestudio-n").hide(); $(".btn-teoricas-n").hide(); $(".btn-duracion-n").hide(); 
   $(".teoricas_nutricion").hide(); $("#der-n-t").hide(); $("#iz-n-t").hide(); $(".planestudios_nutricion").show(); $("#der-n-p").show(); $("#iz-n-p").show();
  }); 

  $("#der-n-t").click(function(event){
   $(".btn-planestudio-n").hide(); $(".btn-teoricas-n").hide(); $(".btn-duracion-n").hide(); 
   $(".teoricas_nutricion").hide(); $("#der-n-t").hide(); $("#iz-n-t").hide(); $(".duracion_nutricion").show(); $("#der-n-d").show(); $("#iz-n-d").show();
  }); 



  // ________duracion__________

  $("#btn_duración_n").click(function(event){
   $(".btn-planestudio-n").hide(); $(".btn-teoricas-n").hide(); $(".btn-duracion-n").hide();  
   $(".duracion_nutricion").show(); $("#btn-cerrar1").show(); $("#der-n-d").show(); $("#iz-n-d").show(); $(".planestudios_nutricion").hide(); $(".teoricas_nutricion").hide(); 
  });

  $("#iz-n-d").click(function(event){
   $(".btn-planestudio-n").hide(); $(".btn-teoricas-n").hide(); $(".btn-duracion-n").hide(); 
   $(".duracion_nutricion").hide(); $("#der-n-d").hide(); $("#iz-n-d").hide(); $(".teoricas_nutricion").show(); $("#der-n-t").show(); $("#iz-n-t").show();
  }); 

  $("#der-n-d").click(function(event){
    $(".btn-planestudio-n").hide(); $(".btn-teoricas-n").hide(); $(".btn-duracion-n").hide(); 
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
    $(".btn-planestudio-m").hide(); $(".btn-teoricas-m").hide(); $(".btn-duracion-m").hide(); 
    $(".planestudios_medicina").show(); $("#btn-cerrar2").show(); $("#der-m-p").show(); $("#iz-m-p").show(); $(".duracion_medicina").hide(); $(".teoricas_medicina").hide(); 
  });

  $("#iz-m-p").click(function(event){
   $(".btn-planestudio-m").hide(); $(".btn-teoricas-m").hide(); $(".btn-duracion-m").hide(); 
   $(".planestudios_medicina").hide(); $("#der-m-p").hide(); $("#iz-m-p").hide(); $(".duracion_medicina").show(); $("#der-m-d").show(); $("#iz-m-d").show();
  }); 

  $("#der-m-p").click(function(event){
    $(".btn-planestudio-m").hide(); $(".btn-teoricas-m").hide(); $(".btn-duracion-m").hide(); 
    $(".planestudios_medicina").hide(); $("#der-m-p").hide(); $("#iz-m-p").hide();$(".teoricas_medicina").show(); $("#der-m-t").show(); $("#iz-m-t").show();
  }); 



  // ________teoricas y practicas__________

  $("#btn_teo_m").click(function(event){
    $(".btn-planestudio-m").hide(); $(".btn-teoricas-m").hide(); $(".btn-duracion-m").hide(); 
    $(".teoricas_medicina").show(); $("#btn-cerrar2").show(); $("#der-m-t").show(); $("#iz-m-t").show();  $(".duracion_medicina").hide(); $(".planestudios_medicina").hide();
  });

  $("#iz-m-t").click(function(event){
   $(".btn-planestudio-m").hide(); $(".btn-teoricas-m").hide(); $(".btn-duracion-m").hide(); 
   $(".teoricas_medicina").hide(); $("#der-m-t").hide(); $("#iz-m-t").hide(); $(".planestudios_medicina").show(); $("#der-m-p").show(); $("#iz-m-p").show();
  }); 

  $("#der-m-t").click(function(event){
    $(".btn-planestudio-m").hide(); $(".btn-teoricas-m").hide(); $(".btn-duracion-m").hide(); 
    $(".teoricas_medicina").hide(); $("#der-m-t").hide(); $("#iz-m-t").hide(); $(".duracion_medicina").show(); $("#der-m-d").show(); $("#iz-m-d").show();
  }); 



  // ________duracion__________

  $("#btn_duración_m").click(function(event){
    $(".btn-planestudio-m").hide(); $(".btn-teoricas-m").hide(); $(".btn-duracion-m").hide(); 
    $(".duracion_medicina").show(); $("#btn-cerrar2").show(); $("#der-m-d").show(); $("#iz-m-d").show(); $(".planestudios_medicina").hide(); $(".teoricas_medicina").hide(); 
  });

  $("#iz-m-d").click(function(event){
   $(".btn-planestudio-m").hide(); $(".btn-teoricas-m").hide(); $(".btn-duracion-m").hide(); 
   $(".duracion_medicina").hide(); $("#der-m-d").hide(); $("#iz-m-d").hide(); $(".teoricas_medicina").show(); $("#der-m-t").show(); $("#iz-m-t").show();
  }); 

  $("#der-m-d").click(function(event){
    $(".btn-planestudio-m").hide(); $(".btn-teoricas-m").hide(); $(".btn-duracion-m").hide(); 
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
        $(".btn-planestudio-e").hide(); $(".btn-teoricas-e").hide(); $(".btn-duracion-e").hide(); $(".planestudios_enfermeria").show(); $("#btn-cerrar3").show(); $("#der-e-p").show(); $("#iz-e-p").show(); $(".duracion_enfermeria").hide(); $(".teoricas_enfermeria").hide(); 
      });

      $("#iz-e-p").click(function(event){
       $(".btn-planestudio-e").hide(); $(".btn-teoricas-e").hide(); $(".btn-duracion-e").hide(); $(".planestudios_enfermeria").hide(); $("#der-e-p").hide(); $("#iz-e-p").hide(); $(".duracion_enfermeria").show(); $("#der-e-d").show(); $("#iz-e-d").show();
      }); 

      $("#der-e-p").click(function(event){
        $(".btn-planestudio-e").hide(); $(".btn-teoricas-e").hide(); $(".btn-duracion-e").hide(); $(".planestudios_enfermeria").hide(); $("#der-e-p").hide(); $("#iz-e-p").hide();$(".teoricas_enfermeria").show(); $("#der-e-t").show(); $("#iz-e-t").show();
      }); 



      // ________teoricas y practicas__________

      $("#btn_teo_e").click(function(event){
        $(".btn-planestudio-e").hide(); $(".btn-teoricas-e").hide(); $(".btn-duracion-e").hide(); $(".teoricas_enfermeria").show(); $("#btn-cerrar3").show(); $("#der-e-t").show(); $("#iz-e-t").show();  $(".duracion_enfermeria").hide(); $(".planestudios_enfermeria").hide();
      });

      $("#iz-e-t").click(function(event){
       $(".btn-planestudio-e").hide(); $(".btn-teoricas-e").hide(); $(".btn-duracion-e").hide(); $(".teoricas_enfermeria").hide(); $("#der-e-t").hide(); $("#iz-e-t").hide(); $(".planestudios_enfermeria").show(); $("#der-e-p").show(); $("#iz-e-p").show();
      }); 

      $("#der-e-t").click(function(event){
        $(".btn-planestudio-e").hide(); $(".btn-teoricas-e").hide(); $(".btn-duracion-e").hide(); $(".teoricas_enfermeria").hide(); $("#der-e-t").hide(); $("#iz-e-t").hide(); $(".duracion_enfermeria").show(); $("#der-e-d").show(); $("#iz-e-d").show();
      }); 



      // ________duracion__________

      $("#btn_duración_e").click(function(event){
        $(".btn-planestudio-e").hide(); $(".btn-teoricas-e").hide(); $(".btn-duracion-e").hide(); $(".duracion_enfermeria").show(); $("#btn-cerrar3").show(); $("#der-e-d").show(); $("#iz-e-d").show(); $(".planestudios_enfermeria").hide(); $(".teoricas_enfermeria").hide(); 
      });

      $("#iz-e-d").click(function(event){
       $(".btn-planestudio-e").hide(); $(".btn-teoricas-e").hide(); $(".btn-duracion-e").hide(); $(".duracion_enfermeria").hide(); $("#der-e-d").hide(); $("#iz-e-d").hide(); $(".teoricas_enfermeria").show(); $("#der-e-t").show(); $("#iz-e-t").show();
      }); 

      $("#der-e-d").click(function(event){
        $(".btn-planestudio-e").hide(); $(".btn-teoricas-e").hide(); $(".btn-duracion-e").hide(); $(".duracion_enfermeria").hide(); $("#der-e-d").hide(); $("#iz-e-d").hide(); $(".planestudios_enfermeria").show(); $("#der-e-p").show(); $("#iz-e-p").show();
      }); 


      // ________FIN ENFERMERIA__________


    //______OBSTETRICIA_______//

     $(".duracion_obstetricia").hide(); $(".planestudios_obstetricia").hide(); $(".teoricas_obstetricia").hide(); 
     $("#btn-cerrar4").hide();
     $("#der-o-d").hide(); $("#der-o-p").hide(); $("#der-o-t").hide();
     $("#iz-o-d").hide(); $("#iz-o-p").hide(); $("#iz-o-t").hide();

       // ________plan de estudios__________

      $("#btn_plan_o").click(function(event){
       $(".btn-planestudio-o").hide(); $(".btn-teoricas-o").hide(); $(".btn-duracion-o").hide();  $(".planestudios_obstetricia").show(); $("#btn-cerrar4").show(); $("#der-o-p").show(); $("#iz-o-p").show(); $(".duracion_obstetricia").hide(); $(".teoricas_obstetricia").hide(); 
      });

      $("#iz-o-p").click(function(event){
      $(".btn-planestudio-o").hide(); $(".btn-teoricas-o").hide(); $(".btn-duracion-o").hide();  $(".planestudios_obstetricia").hide(); $("#der-o-p").hide(); $("#iz-o-p").hide(); $(".duracion_obstetricia").show(); $("#der-o-d").show(); $("#iz-o-d").show();
      }); 

      $("#der-o-p").click(function(event){
       $(".btn-planestudio-o").hide(); $(".btn-teoricas-o").hide(); $(".btn-duracion-o").hide();   $(".planestudios_obstetricia").hide(); $("#der-o-p").hide(); $("#iz-o-p").hide();$(".teoricas_obstetricia").show(); $("#der-o-t").show(); $("#iz-o-t").show();
      }); 



      // ________teoricas y practicas__________

      $("#btn_teo_o").click(function(event){
        $(".btn-planestudio-o").hide(); $(".btn-teoricas-o").hide(); $(".btn-duracion-o").hide(); $(".teoricas_obstetricia").show(); $("#btn-cerrar4").show(); $("#der-o-t").show(); $("#iz-o-t").show();  $(".duracion_obstetricia").hide(); $(".planestudios_obstetricia").hide();
      });

      $("#iz-o-t").click(function(event){
       $(".btn-planestudio-o").hide(); $(".btn-teoricas-o").hide(); $(".btn-duracion-o").hide(); $(".teoricas_obstetricia").hide(); $("#der-o-t").hide(); $("#iz-o-t").hide(); $(".planestudios_obstetricia").show(); $("#der-o-p").show(); $("#iz-o-p").show();
      }); 

      $("#der-o-t").click(function(event){
        $(".btn-planestudio-o").hide(); $(".btn-teoricas-o").hide(); $(".btn-duracion-o").hide(); $(".teoricas_obstetricia").hide(); $("#der-o-t").hide(); $("#iz-o-t").hide(); $(".duracion_obstetricia").show(); $("#der-o-d").show(); $("#iz-o-d").show();
      }); 



      // ________duracion__________

      $("#btn_duración_o").click(function(event){
        $(".btn-planestudio-o").hide(); $(".btn-teoricas-o").hide(); $(".btn-duracion-o").hide(); $(".duracion_obstetricia").show(); $("#btn-cerrar4").show(); $("#der-o-d").show(); $("#iz-o-d").show(); $(".planestudios_obstetricia").hide(); $(".teoricas_obstetricia").hide(); 
      });

      $("#iz-o-d").click(function(event){
       $(".btn-planestudio-o").hide(); $(".btn-teoricas-o").hide(); $(".btn-duracion-o").hide(); $(".duracion_obstetricia").hide(); $("#der-o-d").hide(); $("#iz-o-d").hide(); $(".teoricas_obstetricia").show(); $("#der-o-t").show(); $("#iz-o-t").show();
      }); 

      $("#der-o-d").click(function(event){
        $(".btn-planestudio-o").hide(); $(".btn-teoricas-o").hide(); $(".btn-duracion-o").hide(); $(".duracion_obstetricia").hide(); $("#der-o-d").hide(); $("#iz-o-d").hide(); $(".planestudios_obstetricia").show(); $("#der-o-p").show(); $("#iz-o-p").show();
      }); 


      // ________FIN OBSTETRICIA__________

    //______TPC_______//

     $(".duracion_tpc").hide(); $(".planestudios_tpc").hide(); $(".teoricas_tpc").hide(); 
     $("#btn-cerrar5").hide();
     $("#der-t-d").hide(); $("#der-t-p").hide(); $("#der-t-t").hide();
     $("#iz-t-d").hide(); $("#iz-t-p").hide(); $("#iz-t-t").hide();

       // ________plan de estudios__________

      $("#btn_plan_t").click(function(event){
       $(".btn-planestudio-t").hide(); $(".btn-teoricas-t").hide(); $(".btn-duracion-t").hide();  $(".planestudios_tpc").show(); $("#btn-cerrar5").show(); $("#der-t-p").show(); $("#iz-t-p").show(); $(".duracion_tpc").hide(); $(".teoricas_tpc").hide(); 
      });

      $("#iz-t-p").click(function(event){
      $(".btn-planestudio-t").hide(); $(".btn-teoricas-t").hide(); $(".btn-duracion-t").hide();  $(".planestudios_tpc").hide(); $("#der-t-p").hide(); $("#iz-t-p").hide(); $(".duracion_tpc").show(); $("#der-t-d").show(); $("#iz-t-d").show();
      }); 

      $("#der-t-p").click(function(event){
       $(".btn-planestudio-t").hide(); $(".btn-teoricas-t").hide(); $(".btn-duracion-t").hide();  $(".planestudios_tpc").hide(); $("#der-t-p").hide(); $("#iz-t-p").hide();$(".teoricas_tpc").show(); $("#der-t-t").show(); $("#iz-t-t").show();
      }); 



      // ________teoricas y practicas__________

      $("#btn_teo_t").click(function(event){
        $(".btn-planestudio-t").hide(); $(".btn-teoricas-t").hide(); $(".btn-duracion-t").hide(); $(".teoricas_tpc").show(); $("#btn-cerrar5").show(); $("#der-t-t").show(); $("#iz-t-t").show();  $(".duracion_tpc").hide(); $(".planestudios_tpc").hide();
      });

      $("#iz-t-t").click(function(event){
       $(".btn-planestudio-t").hide(); $(".btn-teoricas-t").hide(); $(".btn-duracion-t").hide(); $(".teoricas_tpc").hide(); $("#der-t-t").hide(); $("#iz-t-t").hide(); $(".planestudios_tpc").show(); $("#der-t-p").show(); $("#iz-t-p").show();
      }); 

      $("#der-t-t").click(function(event){
        $(".btn-planestudio-t").hide(); $(".btn-teoricas-t").hide(); $(".btn-duracion-t").hide(); $(".teoricas_tpc").hide(); $("#der-t-t").hide(); $("#iz-t-t").hide(); $(".duracion_tpc").show(); $("#der-t-d").show(); $("#iz-t-d").show();
      }); 



      // ________duracion__________

      $("#btn_duración_t").click(function(event){
        $(".btn-planestudio-t").hide(); $(".btn-teoricas-t").hide(); $(".btn-duracion-t").hide(); $(".duracion_tpc").show(); $("#btn-cerrar5").show(); $("#der-t-d").show(); $("#iz-t-d").show(); $(".planestudios_tpc").hide(); $(".teoricas_tpc").hide(); 
      });

      $("#iz-t-d").click(function(event){
       $(".btn-planestudio-t").hide(); $(".btn-teoricas-t").hide(); $(".btn-duracion-t").hide(); $(".duracion_tpc").hide(); $("#der-t-d").hide(); $("#iz-t-d").hide(); $(".teoricas_tpc").show(); $("#der-t-t").show(); $("#iz-t-t").show();
      }); 

      $("#der-t-d").click(function(event){
        $(".btn-planestudio-t").hide(); $(".btn-teoricas-t").hide(); $(".btn-duracion-t").hide(); $(".duracion_tpc").hide(); $("#der-t-d").hide(); $("#iz-t-d").hide(); $(".planestudios_tpc").show(); $("#der-t-p").show(); $("#iz-t-p").show();
      }); 


      // ________FIN TPC__________

      //________BOTONES CERRAR POPUPS_______}

  $("#btn-cerrar1").click(function(event){

    $(".duracion_nutricion").hide(); $(".planestudios_nutricion").hide(); $(".teoricas_nutricion").hide(); 
    $(".btn-planestudio-n").show(); $(".btn-teoricas-n").show(); $(".btn-duracion-n").show();
    $("#btn-cerrar1").hide();
    $("#der-n-d").hide(); $("#der-n-p").hide(); $("#der-n-t").hide();
    $("#iz-n-d").hide(); $("#iz-n-p").hide(); $("#iz-n-t").hide();
  });

  $("#btn-cerrar2").click(function(event){

    $(".duracion_medicina").hide(); $(".planestudios_medicina").hide(); $(".teoricas_medicina").hide();
    $(".btn-planestudio-m").show(); $(".btn-teoricas-m").show(); $(".btn-duracion-m").show();
    $("#btn-cerrar2").hide();
    $("#der-m-d").hide(); $("#der-m-p").hide(); $("#der-m-t").hide();
    $("#iz-m-d").hide(); $("#iz-m-p").hide(); $("#iz-m-t").hide();
  });

  $("#btn-cerrar3").click(function(event){
    $("#btn-cerrar3").hide();
    $(".duracion_enfermeria").hide(); $(".planestudios_enfermeria").hide(); $(".teoricas_enfermeria").hide(); 
    $(".btn-planestudio-e").show(); $(".btn-teoricas-e").show(); $(".btn-duracion-e").show();
    $("#der-e-d").hide(); $("#der-e-p").hide(); $("#der-e-t").hide();
    $("#iz-e-d").hide(); $("#iz-e-p").hide(); $("#iz-e-t").hide();
  });

  $("#btn-cerrar4").click(function(event){
    $("#btn-cerrar4").hide();
    $(".duracion_obstetricia").hide(); $(".planestudios_obstetricia").hide(); $(".teoricas_obstetricia").hide(); 
    $(".btn-planestudio-o").show(); $(".btn-teoricas-o").show(); $(".btn-duracion-o").show();
    $("#der-o-d").hide(); $("#der-o-p").hide(); $("#der-o-t").hide();
    $("#iz-o-d").hide(); $("#iz-o-p").hide(); $("#iz-o-t").hide();
  });

  $("#btn-cerrar5").click(function(event){
    $("#btn-cerrar5").hide();
    $(".duracion_tpc").hide(); $(".planestudios_tpc").hide(); $(".teoricas_tpc").hide(); 
    $(".btn-planestudio-t").show(); $(".btn-teoricas-t").show(); $(".btn-duracion-t").show();
    $("#der-t-d").hide(); $("#der-t-p").hide(); $("#der-t-t").hide();
    $("#iz-t-d").hide(); $("#iz-t-p").hide(); $("#iz-t-t").hide();
  });

  $("#li_selected").click(function(event){

  });  




  //  ____________fin de jQuery___________________
});

var pag = 0;

function sumo() {
  pag = pag + 1;

  if(pag == 1){ $("#T").fadeOut(); $(".trivia1").fadeIn(); $(".trivia-sup").fadeIn(); $(".wrap").fadeIn();}
  else if (pag == 2){ $("#T").hide();  $(".trivia1").hide();  $(".trivia2").show();}
  else if (pag == 3){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").show();}
  else if (pag == 4){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").show();}
  else if (pag == 5){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide();  $(".trivia5").show();}
  else if (pag == 6){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide();  $(".trivia5").hide();  $(".trivia6").show();}
  else if (pag == 7){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide();  $(".trivia5").hide();  $(".trivia6").hide();  $(".trivia7").show();}
  else if (pag == 8){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide();  $(".trivia5").hide();  $(".trivia6").hide();  $(".trivia7").hide();  $(".trivia8").show();}
  else if (pag == 9){ $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide(); $(".trivia5").hide();  $(".trivia6").hide();  $(".trivia7").hide();  $(".trivia8").hide(); $(".trivia9").show();}
  else if (pag == 10){ $(".trivia1").hide(); $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide();  $(".trivia5").hide(); $(".trivia6").hide();  $(".trivia7").hide(); $(".trivia8").hide();  $(".trivia9").hide(); $(".trivia10").show(); $(".next").hide();  }

}


// contador de las coincidencias en la trivia

var m1=0; var m2=0; var m3=0;  var m4=0; var m5=0;  var m6=0; var m7=0; var m8=0; var m9=0; var m10=0;
var v1=0; var v2=0; var v3=0;  var v4=0; var v5=0;  var v6=0; var v7=0; var v8=0; var v9=0; var v10=0;
var ver1 = true; var ver2 = true; var ver3 = true; var ver4 = true; var ver5 = true; var ver6 = true; var ver7 = true;  var ver8 = true; var ver9 = true; var ver10 = true; var ver11 = true; var ver12 = true;var ver13 = true;var ver14 = true;var ver15 = true;var ver16 = true; var ver17 = true;var ver18 = true;var ver19 = true; var ver20 = true;
var mit1 = true; var mit2 = true; var mit3 = true; var mit4 = true; var mit5 = true; var mit6 = true; var mit7 = true;  var mit8 = true; var mit9 = true; var mit10 = true; var mit11 = true; var mit12 = true;var mit13 = true;var mit14 = true;var mit15 = true;var mit16 = true; var mit17 = true;var mit18 = true;var mit19 = true; var mit20 = true;
e1=document.getElementById('p1m');
e1.innerHTML = m1;
e2=document.getElementById('p2m');
e2.innerHTML = m2;
e3=document.getElementById('p3m');
e3.innerHTML = m3;
e4=document.getElementById('p4m');
e4.innerHTML = m4;
e5=document.getElementById('p5m');
e5.innerHTML = m5;
e6=document.getElementById('p6m');
e6.innerHTML = m6;
e7=document.getElementById('p7m');
e7.innerHTML = m7;
e8=document.getElementById('p8m');
e8.innerHTML = m8;
e9=document.getElementById('p9m');
e9.innerHTML = m9;
e10=document.getElementById('p10m');
e10.innerHTML = m10;

c1=document.getElementById('p1v');
c1.innerHTML = v1;
c2=document.getElementById('p2v');
c2.innerHTML = v2;
c3=document.getElementById('p3v');
c3.innerHTML = v3;
c4=document.getElementById('p4v');
c4.innerHTML = v4;
c5=document.getElementById('p5v');
c5.innerHTML = v5;
c6=document.getElementById('p6v');
c6.innerHTML = v6;
c7=document.getElementById('p7v');
c7.innerHTML = v7;
c8=document.getElementById('p8v');
c8.innerHTML = v8;
c9=document.getElementById('p9v');
c9.innerHTML = v9;
c10=document.getElementById('p10v');
c10.innerHTML = v10;

function verdad1(){
  if(ver1 == true){
    v1 = v1 + 1;
  }
  c1.innerHTML = v1;
}
function verdad2(){
  if(ver2 == true){
    v2 = v2 + 1;
  }
  c2.innerHTML = v2;
}
function verdad3(){
  if(ver3 == true){
    v3 = v3 + 1;
  }
  c3.innerHTML = v3;
}
function verdad4(){
  if(ver4 == true){
    v4 = v4 + 1;
  }
  c4.innerHTML = v4;
}
function verdad5(){
  if(ver5 == true){
    v5 = v5 + 1;
  }
  c5.innerHTML = v5;
}
function verdad6(){
  if(ver6 == true){
    v6 = v6 + 1;
  }
  c6.innerHTML = v6;
}
function verdad7(){
  if(ver7 == true){
    v7 = v7 + 1;
  }
  c7.innerHTML = v7;
}
function verdad8(){
  if(ver8 == true){
    v8 = v8 + 1;
  }
  c8.innerHTML = v8;
}
function verdad9(){
  if(ver9 == true){
    v9 = v9 + 1;
  }
  c9.innerHTML = v9;
}
function verdad10(){
  if(ver10 == true){
    v10 = v10 + 1;
  }
  c10.innerHTML = v10;
}

function mito1(){
  if(mit1 == true){
    m1 = m1 + 1;
  }
  e1.innerHTML = m1;
}
function mito2(){
  if(mit2 == true){
    m2 = m2 + 1;
  }
  e2.innerHTML = m2;
}
function mito3(){
  if(mit3 == true){
    m3 = m3 + 1;
  }
  e3.innerHTML = m3;
}
function mito4(){
  if(mit4 == true){
    m4 = m4 + 1;
  }
  e4.innerHTML = m4;
}
function mito5(){
  if(mit5 == true){
    m5 = m5 + 1;
  }
  e5.innerHTML = m5;
}
function mito6(){
  if(mit6 == true){
    m6 = m6 + 1;
  }
  e6.innerHTML = m6;
}
function mito7(){
  if(mit7 == true){
    m7 = m7 + 1;
  }
  e7.innerHTML = m7;
}
function mito8(){
  if(mit8 == true){
    m8 = m8 + 1;
  }
  e8.innerHTML = m8;
}
function mito9(){
  if(mit9 == true){
    m9 = m9 + 1;
  }
  e9.innerHTML = m9;
}
function mito10(){
  if(mit10 == true){
    m10 = m10 + 1;
  }
  e10.innerHTML = m10;
}

// porcentaje de aciertos

var at=0; var hola = true;
a=document.getElementById('aciertos');
a.innerHTML=at + '%';

function atr(){
  if(hola == true) {
    at = at + 10 ;
  }

  if(at==10){
  $("#0").hide();  $("#10").show();
  a.innerHTML= at;
  }
  else if(at==20){
   $("#10").hide(); $("#20").show();
  }
  if(at==30){
  $("#20").hide(); $("#30").show();
  }
  if(at==40){
  $("#30").hide();  $("#40").show();
  }
  if(at==50){
  $("#40").hide();  $("#50").show();
  }
  if(at==60){
  $("#50").hide();  $("#60").show();
  }
  if(at==70){
  $("#60").hide();  $("#70").show();
  }
  if(at==80){
  $("#70").hide();  $("#80").show();
  }
  if(at==90){
  $("#80").hide();  $("#90").show();
  }
  if(at==100){
  $("#90").hide();  $("#100").show();
  }

  a.innerHTML= at + '%';
}

// Reinicio todo a la mierda

function morir(){
//reinicio de trivia
   // voy al inicio
   pag = 0;
   at = 0;
   $("#w").show();
   // habilito botones again
   $("#boton1").attr('disabled',false); $("#boton2").attr('disabled',false); $("#boton3").attr('disabled',false); $("#boton4").attr('disabled',false); $("#boton5").attr('disabled',false); $("#boton6").attr('disabled',false); $("#boton7").attr('disabled',false); $("#boton8").attr('disabled',false); $("#boton9").attr('disabled',false); $("#boton10").attr('disabled',false);
   $("#boton11").attr('disabled',false); $("#boton12").attr('disabled',false); $("#boton13").attr('disabled',false); $("#boton14").attr('disabled',false); $("#boton15").attr('disabled',false); $("#boton16").attr('disabled',false); $("#boton17").attr('disabled',false); $("#boton18").attr('disabled',false); $("#boton19").attr('disabled',false); $("#boton20").attr('disabled',false);
   $(".next").show();
   // aparece lo que oculte en la experiencia
   $("#preg1").show(); $("#img1").show(); $("#preg2").show(); $("#img2").show(); $("#preg3").show(); $("#img3").show();  $("#preg4").show(); $("#img4").show();  $("#preg5").show(); $("#img5").show();  $("#preg6").show(); $("#img6").show();  $("#preg7").show(); $("#img7").show();  $("#preg8").show(); $("#img8").show();  $("#preg9").show(); $("#img9").show();  $("#preg10").show(); $("#img10").show(); 
   // aco lo fixed y todo basicamente
   $(".trivia-sup").hide(); $(".wrap").hide(); $(".resultado").hide();$("#T").hide();
   // no se ve ninguna pregunta
   $(".trivia1").hide();  $(".trivia2").hide();  $(".trivia3").hide();  $(".trivia4").hide();  $(".trivia5").hide(); $(".trivia6").hide();  $(".trivia7").hide(); $(".trivia8").hide();  $(".trivia9").hide(); $(".trivia10").hide();
   $(".rta1").hide();  $(".rta2").hide();  $(".rta3").hide();  $(".rta4").hide();  $(".rta5").hide(); $(".rta6").hide();  $(".rta7").hide(); $(".rta8").hide();  $(".rta9").hide(); $(".rta10").hide();
  // escondo rta y explicaciones
   $("#rta1").hide(); $("#exp1").hide();   $("#rta2").hide(); $("#exp2").hide();   $("#rta3").hide(); $("#exp3").hide();   $("#rta4").hide(); $("#exp4").hide();  $("#rta5").hide(); $("#exp5").hide();  $("#rta6").hide(); $("#exp6").hide();  $("#rta7").hide(); $("#exp7").hide();  $("#rta8").hide(); $("#exp8").hide(); $("#rta9").hide(); $("#exp9").hide();   $("#rta10").hide(); $("#exp10").hide();  $("#rta11").hide(); $("#exp11").hide();  $("#rta12").hide(); $("#exp12").hide();   $("#rta13").hide(); $("#exp13").hide();   $("#rta14").hide(); $("#exp14").hide();  $("#rta15").hide(); $("#exp15").hide();  $("#rta16").hide(); $("#exp16").hide();  $("#rta17").hide(); $("#exp17").hide();  $("#rta18").hide(); $("#exp18").hide();  $("#rta19").hide(); $("#exp19").hide();  $("#rta20").hide(); $("#exp20").hide();
   // oculto por defecto las cruces y ticks en Resultados
   $("#cor1").hide();  $("#cor2").hide();  $("#cor3").hide();  $("#cor4").hide();  $("#cor5").hide();  $("#cor6").hide();  $("#cor7").hide();  $("#cor8").hide();  $("#cor9").hide();  $("#cor10").hide();
   $("#inc1").hide();  $("#inc2").hide();  $("#inc3").hide();  $("#inc4").hide();  $("#inc5").hide();  $("#inc6").hide();  $("#inc7").hide();  $("#inc8").hide();  $("#inc9").hide();  $("#inc10").hide();
   // oculto por defecto las coincidencias en la pantalla de Resultados
   $("#p1m").hide(); $("#p2m").hide(); $("#p3m").hide(); $("#p4m").hide(); $("#p5m").hide(); $("#p6m").hide(); $("#p7m").hide(); $("#p8m").hide(); $("#p9m").hide(); $("#p10m").hide();
   $("#p1v").hide(); $("#p2v").hide(); $("#p3v").hide(); $("#p4v").hide(); $("#p5v").hide(); $("#p6v").hide(); $("#p7v").hide(); $("#p8v").hide(); $("#p9v").hide(); $("#p10v").hide();
    //oculto team
   $("#foto1").hide(); $("#foto2").hide(); $("#foto3").hide(); $("#foto4").hide(); $("#foto5").hide(); $("#foto6").hide(); $("#foto7").hide(); $("#foto8").hide(); $("#foto9").hide(); $("#foto10").hide();
   //oculto todos los graficos
   $("#0").show(); $("#10").hide(); $("#20").hide(); $("#30").hide(); $("#40").hide(); $("#50").hide(); $("#60").hide(); $("#70").hide(); $("#80").hide(); $("#90").hide(); $("#100").hide();
   a.innerHTML= at + '%';
  //oculto los bien/mal
   $(".verdad").hide(); $(".verdad3l").hide(); $(".verdad4l").hide(); $(".mito").hide(); $(".mito3l").hide(); $(".mito4l").hide();



//reinicio de carreras

}
