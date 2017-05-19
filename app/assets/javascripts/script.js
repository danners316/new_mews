

$(document).ready(function() {
    $('#quotes').cycle({
		fx: 'fade', // others fade, scrollUp, shuffle
		after: onAfter,
		timeout:  7000

	});
    $("#login").hide();
    $("#register").hide();
    $("#months").hide();
    $("#today").hide();
    //i$("#register_box").hide();
    $("body").fadeIn(2000);

});

captionArray = [

    "<h3>No Prosecution over drug death of man at Phoenix Park.</h3><br /> Irish Independent",
    "<h3>Woman loses legal challenge to home birth ruling.</h3><br /> The Times",
    "<h3>Egypt police vow to use live ammunition against attacks.</h3><br />The Guardian",
    "<h3>Conspiracy: Scores suspected of cheating on Leaving Cert.</h3><br /> Irish Examiner"


];

captionIndex = 0;

function onAfter(curr,next,opts) {
    var caption = captionArray[captionIndex];

    $('#line').html(caption);
    captionIndex++;

    if (captionIndex >= captionArray.length) {
        captionIndex = 0;
    }
}


var show_login = (function()
{
    $("#register").fadeOut({width:'hide'},350);
    $("#login").delay(700).fadeIn({width:'show'},350);
});

var show_register = (function()
{
    $("#login").fadeOut({width:'hide'},350);
    $("#register").delay(700).fadeIn({width:'show'},350);
});

var hide_box = (function()
{
    $("#register").slideUp();
    $("#login").slideUp();
});

var show_football = (function()
{

    $("#articles").load("/topics/backlog #football");

});

var show_general = (function()
{

    $("#articles").load("/topics/backlog #general");

});

var show_food = (function()
{

    $("#articles").load("/topics/backlog #food");

});

var show_travel = (function()
{

    $("#articles").load("/topics/backlog #travel");

});

var show_football1 = (function()
{

    $("#general").hide();
    $("#travel").hide();
    $("#food").hide();
    $("#football").show();
    $("#month").hide();
    $("#today").hide();

});

var show_general1 = (function()
{

    $("#general").show();
    $("#travel").hide();
    $("#food").hide();
    $("#football").hide();
    $("#month").hide();
    $("#today").hide();

});

var show_food1 = (function()
{

    $("#general").hide();
    $("#travel").hide();
    $("#food").show();
    $("#football").hide();
    $("#month").hide();
    $("#today").hide();

});

var show_travel1 = (function()
{

    $("#general").hide();
    $("#travel").show();
    $("#food").hide();
    $("#football").hide();
    $("#month").hide();
    $("#today").hide();

});

var show_all1 = (function()
{

    $("#general").show();
    $("#travel").show();
    $("#food").show();
    $("#football").show();
    $("#month").hide();
    $("#today").hide();

});

var show_today = (function()
{

    $("#today").show();
    $("#general").hide();
    $("#travel").hide();
    $("#food").hide();
    $("#football").hide();
    $("#month").hide();

});

var show_month = (function()
{

    $("#month").show();
    $("#general").hide();
    $("#travel").hide();
    $("#food").hide();
    $("#football").hide();
    $("#today").hide();

});