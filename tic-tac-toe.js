$(function(){
  var winner = false;
  var turn = 0;
  $(document).on('click', '.canvas-grid', function(){
    console.log("clicked");
    if (turn%2 === 0 && !(this.id)) {
      $(this).attr('id', 'x');
      turn++;
    }else if(turn%2 === 1 && !(this.id)){
      $(this).attr('id', 'o');
      turn++;
    }
    checkWinner();
  });

  var checkWinner = function(){

    if(
      $('[data-id=1]').attr('id') == $('[data-id=2]').attr('id')
      && $('[data-id=1]').attr('id') == $('[data-id=3]').attr('id')
      && $('[data-id=1]').attr('id')

    ){
      alert($('[data-id=1]').attr('id') + " has won!");
      winner = true;
    }else if(
      $('[data-id=1]').attr('id') == $('[data-id=4]').attr('id')
      && $('[data-id=1]').attr('id') == $('[data-id=7]').attr('id')
      && $('[data-id=1]').attr('id')
    ){
      alert($('[data-id=1]').attr('id') + " has won!");
      winner = true;
    }else if(
      $('[data-id=7]').attr('id') == $('[data-id=8]').attr('id')
      && $('[data-id=7]').attr('id') == $('[data-id=9]').attr('id')
      && $('[data-id=7]').attr('id')
    ){
      alert($('[data-id=1]').attr('id') + " has won!");
      winner = true;
    }else if(
      $('[data-id=3]').attr('id') == $('[data-id=9]').attr('id')
      && $('[data-id=3]').attr('id') == $('[data-id=6]').attr('id')
      && $('[data-id=3]').attr('id')
    ){
      alert($('[data-id=1]').attr('id') + " has won!");
      winner = true;
    }else if(
      $('[data-id=1]').attr('id') == $('[data-id=5]').attr('id')
      && $('[data-id=1]').attr('id') == $('[data-id=9]').attr('id')
      && $('[data-id=1]').attr('id')
    ){
      alert($('[data-id=1]').attr('id') + " has won!");
      winner = true;
    }else if(
      $('[data-id=3]').attr('id') == $('[data-id=5]').attr('id')
      && $('[data-id=3]').attr('id') == $('[data-id=7]').attr('id')
      && $('[data-id=3]').attr('id')
    ){
      alert($('[data-id=1]').attr('id') + " has won!");
      winner = true;
    }
  }
});

// var resetBoard = function(){
//   $('.canvas-grid').attr('id', '')
// }
