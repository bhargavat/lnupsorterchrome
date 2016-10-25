$(document).on('click', "#help", function(e){
var className = $("#help").attr('class');

if(className == "glyphicon glyphicon-question-sign"){
$(this).toggleClass('glyphicon-question-sign').toggleClass('glyphicon-home');
    $("#hpage").css("display", "none");
    $(".instr").css("display", "block");
}else if(className == "glyphicon glyphicon-home"){
    $(".instr").css("display", "none");
    $("#hpage").css("display", "block");
    $(this).toggleClass('glyphicon-home').toggleClass('glyphicon-question-sign');
    if($("#err").html != "") $("#err").html("");
}
});
