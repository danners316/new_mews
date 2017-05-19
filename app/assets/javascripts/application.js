// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .




var About = function(){
	alert("Just a regular dude");
}

$(document).ready(function() {


        $('#articles .pagination a').attr('data-remote', 'true');
        
   setTimeout(function(){ 
   	$("#logo").fadeOut(1000);
   	$("#logo_2").fadeIn(1000);

   }, 15000);
        
        
    });

var removeType = function(){
	$("#logo").removeClass("type_it");
}

var register_hit = true;
//alert ("Works")

var register = function(){
	$("#inner_nav ul li a").css("text-decoration","none");
	$("#inner_nav ul li:nth-child(4) a").css("text-decoration","underline");
	$("#search_field").hide();
	$("#login").hide();

	if( register_hit == true ){

	register_hit == false;
	$("#register").slideDown(300);
	$("#notice h1").fadeIn(300).text("Welcome to Mo Mews").delay(3000).fadeOut(1000);
	
	}
	
	setTimout(function(){
         alert("Back");
         register == true;
   }, 4000); 
}

var login = function(){
	$("#inner_nav ul li a").css("text-decoration","none");
	$("#inner_nav ul li:nth-child(3) a").css("text-decoration","underline");
	$("#search_field").hide();
	$("#register").hide();
	$("#login").slideDown(300);
	$("#notice h1").fadeIn(300).text("Welcome Back").delay(3000).fadeOut(1000);
}
var search_field = function(){
	$("#notice_2 h1").fadeIn(300).text("Search for an article").delay(3000).fadeOut(1000);
}

var exOut = function(){
	$("#inner_nav ul li a").css("text-decoration","none");
	$("#register, #login").slideUp(300);
	$("#notice h1").text("");
}

var showResult = (function(){
	alert("clicked");
	$("#result").slideDown();
});






