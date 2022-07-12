$(document).ready(function(){
   const add= ()=>{   
      var input =$('#input').val();
      if(input!==""){
         $('ul').append('<li>' + input + '<i class="fas fa-check fa-trash "> </li>');
         $('#input').val("");
      }
   }  
   $('#input').change(function(){
      add();
   });
   $('#add-btn').click(()=>{
      add();
   });
   $('ul').on("click", '.fa-trash',function(){
      $(this).parent('li').fadeOut(200);
   });
});