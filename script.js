var boat_position = $("#my_image").offset();
var boat_full=0;

function didYouWin(){
// hide the hoverlays
if( $("#wolf_delivered").is(":visible") == true && $("#goat_delivered").is(":visible") == true && $("#cabbage_delivered").is(":visible") == true){
  /*You won*/
    $('.you-won').addClass('visible');
     console.log("You won");
  	$('.characters').hide();
  }
};

function startGame(){
// hide the hoverlays
   	$('.characters').show();

		$('.game-over').removeClass('visible');
    $('.you-won').removeClass('visible');
 		$('#goat').css('display','block');
 		$('#wolf').css('display','block');
 		$('#cabbage').css('display','block');
 		$('#goat_boat').css('display','none');
 		$('#wolf_boat').css('display','none');
 		$('#cabbage_boat').css('display','none');
 		$('#goat_delivered').css('display','none');
 		$('#wolf_delivered').css('display','none');
 		$('#cabbage_delivered').css('display','none');
 		$('#my_image').css('left','1050px');
    var startPosition = $("#my_image").offset();
    console.log(startPosition);

/* 		$('#my_image').css('display','block'); */

};

function restartGame() {
  		startGame();
};

function followKeys() {
  $("body").keydown(function(e) {
    var max = $('body').width();
    var min = 0;
    var move_amt = 10;
    var position = $("#my_image").offset();
    if(e.which == 37 && position.left > 200) { // left
      var new_left = ((position.left-move_amt < min) ? min : position.left-move_amt);
      $("#my_image").offset({ left: new_left});
      $("#goat_boat").offset({ left: new_left});
      $("#wolf_boat").offset({ left: new_left});
      $("#cabbage_boat").offset({ left: new_left});
    }
    else if(e.which == 39 && position.left <= 1050){ // right and less than 900pixels from the left edge
      var new_left = ((position.left+move_amt > max) ? max : position.left+move_amt);
      $("#my_image").offset({ left: new_left});
      $("#goat_boat").offset({ left: new_left});
      $("#wolf_boat").offset({ left: new_left});
      $("#cabbage_boat").offset({ left: new_left});
    }
    $('#displayPosition').html(position.left);
    console.log(position);
    console.log(position.left);
  boat_position=position.left;
   console.log(boat_position);

if( boat_position < 1000 && $("#wolf").is(":visible") == true && $("#goat").is(":visible") == true)
  {  
   /*    alert("wolf eats the goat!!");      */
    $('.game-over').addClass('visible');
		$('.characters').hide();
  }  
      
});


	$(".restart-game").click(function () {
		restartGame();
	});

  
  
}

followKeys()


function selectAnimal() {
var boat_full=0;
if( $("#wolf_boat").is(":visible") == true || $("#goat_boat").is(":visible") == true || $("#cabbage_boat").is(":visible") == true){
  boat_full=1;
}

$("#goat").click(function(e){
      console.log("your boat full flag is");
    console.log(boat_full);

  if (boat_position>1000){
    $("#goat_boat").toggle();
    $("#goat").toggle();
  }
});
$("#goat_boat").click(function(e){
        console.log("boat position is")
        console.log(boat_position)
  if (boat_position<200){ $("#goat_delivered").toggle();}
  else {$("#goat").toggle();}
  $("#goat_boat").toggle();
  didYouWin();
}); 
$("#goat_delivered").click(function(e){
  if (boat_position<200){ $("#goat_boat").toggle();
  $("#goat_delivered").toggle();}
}); 
  
$("#wolf").click(function(e){
  if (boat_position>1000){
    $("#wolf_boat").toggle();
    $("#wolf").toggle();
  }
}); 
$("#wolf_boat").click(function(e){
  if (boat_position<200){
    $("#wolf_delivered").toggle();
    $("#wolf_boat").toggle();
  }
  else if (boat_position>1000) {$("#wolf").toggle();
  $("#wolf_boat").toggle();}
  didYouWin();
});   
$("#wolf_delivered").click(function(e){
  if (boat_position<200){ $("#wolf_boat").toggle();
  $("#wolf_delivered").toggle();}
});   

$("#cabbage").click(function(e){
  if (boat_position>1000){
    $("#cabbage_boat").toggle();
    $("#cabbage").toggle();
  }
}); 
$("#cabbage_boat").click(function(e){
  if (boat_position<200){
    $("#cabbage_delivered").toggle();
    $("#cabbage_boat").toggle();
  }
  else if (boat_position>1000) {$("#cabbage").toggle();
  $("#cabbage_boat").toggle();}
  didYouWin();
});   
$("#cabbage_delivered").click(function(e){
  if (boat_position<200){ $("#cabbage_boat").toggle();
  $("#cabbage_delivered").toggle();}
});    

}

selectAnimal()

