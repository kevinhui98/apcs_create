$("#Yes").click(function(){
    $("#firstMove").show();
    $("#Decision").hide();
    $('#evil').append("<img id=eggMan src='http://orig14.deviantart.net/9608/f/2014/303/4/f/the_evil_eggman_by_nibrocrock-d84p1zm.png' />");
});
$("#No").click(function(){
    $("#Retry").show();
    $("#Decision").hide();
});
$("#Start").click(function(){
    $("#firstMove").hide();
    $("#theFight").show();
    $('#image').append("<img id= superSonic src='http://pre12.deviantart.net/aa72/th/pre/i/2017/003/7/5/super_sonic_legacy_render_by_nibroc_rock-dau4a2f.png' />");
    $('#sonic').hide();
});
$("#Detour").click(function(){
    $("#firstMove").hide();
    $("#Friends").show();
});
$("#Shadow").click(function(){
    $("#Friends").hide();
    $("#theFight").show();
});
$("#Silver").click(function(){
    $("#Friends").hide();
    $("#theFight").show();
});
$('.friend').click(function() {
    var friends = {
        Silver: 'https://vignette3.wikia.nocookie.net/sonic/images/5/5d/Super_silver_final.png/revision/latest?cb=20091211143347',
        Shadow: 'https://vignette4.wikia.nocookie.net/sonic/images/c/c9/Super_shadow_final.png/revision/latest?cb=20091210224334',
    };
    var friend_name = $(this).attr('id');
    $('#image').append("<img id=largeImg src='"+ friends[friend_name] +"' />");
    console.log( friend_name );
});

$("#Spin").click(function(){
   $('#image').append("<img id=tornado src='http://25.media.tumblr.com/cf12cb1ce25cc83c0855fcda25f66624/tumblr_mxrgvoLx6o1qe1uqko1_1280.gif' />");
    setTimeout(function(){
        $('#tornado').hide();
        }, 1000
    ); 
    setTimeout(function(){
        $('#eggMan').hide();
        }, 1000
    ); 
   setTimeout(function(){
        $('#evil').append("<img id=result src='https://media.giphy.com/media/xUPGcMz3nEbLVVKu1a/giphy.gif' />");
    setTimeout(function(){
        alert("You have sent eggman to the moon");
        }, 3500
    );
        }, 1000
    );
   setTimeout(function(){
        $('#lastAction').show();
        $('#theFight').hide();
   },1000
    ); 
});
$("#Punch").click(function(){
    $('#eggMan').hide();
    $('#evil').append("<img id=result src='https://media.giphy.com/media/xUPGcMz3nEbLVVKu1a/giphy.gif' />");
    setTimeout(function(){
        alert("You have sent eggman to the moon");
        }, 2500
    );
    $('#lastAction').show();
    $('#theFight').hide();
});
$("#Retry").click(function(){
    $("#Redo").hide();
    $("#Decision").show();
});
$('#Restart').click(function(){
    location.reload();
});