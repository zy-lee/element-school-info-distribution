$(document).ready(function(){
	$('.btn btn-success').click(function(){
		var addGrade = $("input[name = grade]").val();
		$(this).fadeOut('slow');
		alart(addGrade);
	});
});