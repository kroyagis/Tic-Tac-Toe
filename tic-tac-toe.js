$(function(){
  var turn = 0;
  $(document).on('click', '.canvas-grid', function(){
    console.log("clicked");
    if (turn%2 === 0){
      console.log($(this).attr('id'));
      $(this).attr('id', 'x');
      turn++;
    }else if(turn%2 === 1){
      $(this).attr('id', 'o');
      turn++;
    }
  });
});
