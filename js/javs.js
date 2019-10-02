
var flocation ,  slocation , thlocation , finallocation  , Type ;
flocation = '....' ;
Type = '....' ; 
slocation = '....' ;
thlocation= '....' ;

document.querySelector('.btn-1').addEventListener('click' , function(){
   clickItem(1) ;
});
document.querySelector('.btn-2').addEventListener('click' , function(){
   clickItem(2) ;
});
document.querySelector('.btn-3').addEventListener('click' , function(){
   clickItem(3) ;
});
document.querySelector('.btn-4 ').addEventListener('click' , function(){
   clickItem(4) ;
});
document.querySelector('.btn-5 ').addEventListener('click' , function(){
   clickItem1(5) ;
   document.querySelector('.btn-7').textContent = 'كرخ اولى';
   document.querySelector('.btn-8').textContent = 'كرخ ثانية';
   document.querySelector('.btn-9').textContent = 'كرخ ثالثة';

});
document.querySelector('.btn-6 ').addEventListener('click' , function(){
   clickItem1(6) ;
   document.querySelector('.btn-7').textContent = 'رصافة اولى';
   document.querySelector('.btn-8').textContent = 'رصافة ثانية';
   document.querySelector('.btn-9').textContent = 'رصافة ثالثة';
});
document.querySelector('.btn-7 ').addEventListener('click' , function(){
   clickItem2(7);
});
document.querySelector('.btn-8 ').addEventListener('click' , function(){
   clickItem2(8);
});
document.querySelector('.btn-9 ').addEventListener('click' , function(){
   clickItem2(9);
});

document.querySelector('.btn-13 ').addEventListener('click' , function(){
   clickItem01(13);
});
document.querySelector('.btn-14 ').addEventListener('click' , function(){
   clickItem01(14);
});
























function clickItem ( x) {
      document.querySelector('.btn-13').style.left='2vw';
      document.querySelector('.btn-14').style.right='2vw';
      for (var i = 1; i <= 4; i++) {
         document.querySelector('.btn-'+ i).style.border='none';
      }
      document.querySelector('.btn-'+ x).style.border='2px solid rgba(44, 62, 80,0.9)';
      flocation =" " ;
      flocation =  document.querySelector('.btn-'+ x).textContent;
      
      finallocation = flocation + '/'+Type +'/' + slocation + '/'+thlocation ;
      document.querySelector('.show_select-text').textContent = finallocation;
}


function clickItem01 (x){
   document.querySelector('.btn-5').style.left='2vw';
   document.querySelector('.btn-6').style.right='2vw';
   for (var i = 13; i <=14; i++) {
      document.querySelector('.btn-'+ i).style.border='none';
   }
   document.querySelector('.btn-'+x).style.border='1.5px solid rgba(230, 125, 34, 0.9)';
   Type =" " ;
   Type =  document.querySelector('.btn-'+x).textContent;
   finallocation = flocation + '/'+ Type +'/' + slocation + '/'+thlocation ;
   document.querySelector('.show_select-text').textContent = finallocation;
   

}
function clickItem1 (x) { 

   document.querySelector('.btn-7').style.left='8vw';
   document.querySelector('.btn-9').style.right='8vw';
   document.querySelector('.btn-8').style.opacity='100';
   document.querySelector('.btn-8').style.borderRadius ='10px';
   slocation =" " ;
   slocation =  document.querySelector('.btn-'+x).textContent;
   for (var i = 5; i <=6 ; i++) {
      document.querySelector('.btn-'+ i).style.border='none';
   }
   document.querySelector('.btn-'+ x).style.border='3px solid rgba(230, 125, 34, 0.9)';
   finallocation = flocation + '/'+Type +'/' + slocation + '/'+thlocation ;
   document.querySelector('.show_select-text').textContent = finallocation;
} 

function clickItem2 ( x) { 
   for (var i = 7; i <=9 ; i++) {
      document.querySelector('.btn-'+ i).style.border='none';
   }
   document.querySelector('.btn-'+x).style.border='3px solid rgba(230, 125, 34, 0.9)';

   thlocation =" " ;
   thlocation =  document.querySelector('.btn-'+x).textContent;
   finallocation = flocation + '/'+Type +'/' + slocation + '/'+thlocation ;
   document.querySelector('.show_select-text').textContent = finallocation;
  
} 



