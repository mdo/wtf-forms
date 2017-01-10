$(function() {
	$("input:file").change(function (){
		var fileName = $(this).val();
		$(".file-custom").html(fileName);
	});
});