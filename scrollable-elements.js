/**
 * @autor Wellington Santos Ferreira
 * inspirado por gisele. 
 */

function scrollBotoesLaterais(bar,elementoDelimitador){
	
	   var limiteSuperior = elementoDelimitador.position().top;
	   var limiteInferior = elementoDelimitador.position().top + elementoDelimitador.height() - bar.height();
	   
     $(window).scroll(function (event) {
    	 
   	   var limiteSuperior = elementoDelimitador.position().top;
   	   var limiteInferior = elementoDelimitador.position().top + elementoDelimitador.height() - bar.height();
   	   var y = $(this).scrollTop()+$(this).height();
           
         if($(this).scrollTop()> limiteSuperior && $(this).scrollTop() < limiteInferior ){
       	   bar.css('position','fixed');
       	   bar.css('top','0');
         }else if($(this).scrollTop()> limiteSuperior){
       	   bar.css('position','relative');
       	   bar.css('top',parseInt(elementoDelimitador.height())-parseInt(bar.height()));
         }else{
        	 bar.css('position','relative');
         }
     });
}