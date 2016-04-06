/*
 * A jQuery library to add arrows to point to any element on the 8 standard angles. 
 * Written By: Greg Borbonus
 *
 */

function arrow(elem,position,color,blink){
if(typeof(color) == 'undefined') color="red";
if(typeof(blink) == 'undefined') blink=0;
  telem=elem;
  elem=$(elem);
  //position='tl'; //Default.
  em=$('body').css('font-size').replace('px','')*7;
  ah='1em';
  aw='1em';
  ath=em;
  atw=em;


  offset=elem.offset();

  v='t';
  h='l';
  noarrow=0;

    negate=0;
//Check to see if the element can even show it.
  a=(elem.height() + ath)*(elem.outerWidth() + atw);
  if(a > ($(window).height()*$(window).width())){
   // Put it on the inside.
   negate=1;
  }
 
  if(offset.top < ath){
    if($(window).height()-(offset.top + elem.height()) < ath){
     v='c';
    }else{ 
     v='b';
    }
  }

  if(offset.left < atw ){
   if($(window).width()-(offset.top + elem.outerWidth()) < ath){
     h='c';
   }else{
     h='r';
   }
   

  }
  if(typeof(position) !== 'undefined'){
    if(position == 'all'){
    	arrow(telem,'lt',color,blink);
        arrow(telem,'lc',color,blink);
        arrow(telem,'lb',color,blink);
        arrow(telem,'ct',color,blink);
        arrow(telem,'cb',color,blink);
        arrow(telem,'rt',color,blink);
        arrow(telem,'rc',color,blink);
        arrow(telem,'rb',color,blink);
	return;
	
    }
   h=position[0]
   v=position[1];
  }
  padding=em*.1; //em/21
  console.log( v + ' ' + h);
        ntw=0;
        nth=0;
       
        //npadding=0;
         if(negate > 0){
           //atw and ath are the width and the height of the arrow.
           padding=0-padding;
           nth=ath;
           ntw=atw;
           atw=0;
           ath=0;

         }
  if(noarrow == 0 ){
    //Now, we take the position, and get the absolute top and left for the arrow.
    if(h == 'l'){
         
	 al=(offset.left - atw) - padding;
         console.log('Setting al ' + h);

     }
    if(h == 'c'){
	 al=offset.left + ((elem.outerWidth() - atw)/2);
         console.log('Setting al ' + h);
     }
    if(h == 'r'){
         
	 al=(offset.left + elem.outerWidth() - ntw)+ padding;
         console.log('Setting al ' + h);

     }
    if(v == 't'){
	 at=(offset.top - ath) -padding;
         console.log('Setting at ' + v);

     }
    if(v == 'c'){
	 at=offset.top + ((elem.outerHeight() - ath)/2);
         console.log('Setting at ' + v);
     }
    if(v == 'b'){
	 at=(offset.top + elem.outerHeight() - nth)+padding;
         console.log('Setting at ' + v);

         
     }
     
    ar=$('<div>');
    ar.addClass('arrowflag');
    tp=h+v;
    if(negate > 0 ){
        if(v == 'b'){ 
            v='t';
        }else{
            if(v == 't'){ 
                v='b';
            }
        }
        if(h == 'l'){
            h='r';
        }else{
            if(h == 'r'){
                h='l';
            }
        }
    }
    p=h+v;


    ar.css('top',at + 'px')
    .css('left',al +'px')
    .css('position','absolute')
    .css('font-weight','bold')
    .css('font-size','7em')
    //.css('color','red')
    .css('line-height','.5em')
    .attr('id','arrow_' + tp)
    .html('<img src="img/' + color + p +'.png" style="width:1em;">');
    ar.appendTo('body');

  }
  elem.addClass('arrowflagged');
  if(blink > 0 )
   blink_it(ar,-1,500);
   
}

function clear_arrow(){
$('.arrowflagged').removeClass('arrowflagged');
$('.arrowflag').remove();
}


function blink_it(elem, times, speed) {
  if(!$(elem)) return;
    if (times > 0 || times < 0) {
        if ($(elem).hasClass("blink")) $(elem).removeClass("blink");
        else $(elem).addClass("blink");
    }

    clearTimeout(function () {
        blink(elem, times, speed);
    });

    if (times > 0 || times < 0) {
        setTimeout(function () {
            blink_it(elem, times, speed);
        }, speed);
        times -= .5;
    }
}

