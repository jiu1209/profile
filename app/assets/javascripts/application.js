// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},200);
	setTimeout(function(){
		$('.start').fadeOut(500);
	},3000);
});
$(function() {
	setTimeout(function(){
		$('.finish p').fadeIn(1600);
	},100);
	setTimeout(function(){
		$('.finish').fadeOut(500);
	},1000);
});