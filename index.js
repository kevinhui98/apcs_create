$("#yes").click(function(){
    $("#firstMove").show();
    $("#decision").hide();
});
$("#no").click(function(){
    $("#retry").show();
    $("#decision").hide();
});
$("#Start").click(function(){
    $("#firstMove").hide();
    $("#theFight").show();
    $('#image').append("<img id= superSonic src='http://pre12.deviantart.net/aa72/th/pre/i/2017/003/7/5/super_sonic_legacy_render_by_nibroc_rock-dau4a2f.png' />");
    $('#sonic').hide();
});
$("#Detour").click(function(){
    $("#firstMove").hide();
    $("#friends").show();
    // $('#image').append("<img src= 'http://i.mdldb.net/cache/ejj/v/81y88Nm4_88760f_c.jpg' />");
});
$("#Shadow").click(function(){
    $("#friends").hide();
    $("#theFight").show();
});
$("#Silver").click(function(){
    $("#friends").hide();
    $("#theFight").show();
});
$('.friend').click(function() {
    var friends = {
        Silver: 'https://vignette3.wikia.nocookie.net/sonic/images/5/5d/Super_silver_final.png/revision/latest?cb=20091211143347',
        Shadow: 'https://vignette4.wikia.nocookie.net/sonic/images/c/c9/Super_shadow_final.png/revision/latest?cb=20091210224334',
    };
    var friend_name = $(this).attr('id');
    // console.log( friend_name );
    // console.log( friends['silver'] );
    $('#image').append("<img id=largeImg src='"+ friends[friend_name] +"' />");
    console.log( friend_name );
});

$("#spin").click(function(){
   $('#image').append("<img id=tornado src='http://25.media.tumblr.com/cf12cb1ce25cc83c0855fcda25f66624/tumblr_mxrgvoLx6o1qe1uqko1_1280.gif' />");
   document.onkeydown = function(event){
	if(event.keyCode === 32)	//space
		player.pressingRight = true;
}
});