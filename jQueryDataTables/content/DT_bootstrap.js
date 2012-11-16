 
/* Table initialisation */
$(document).ready(function() {
    $('#table_id').dataTable();
	//$('input').attr('checked','checked');

	$('#btnUp').click(function(){
		$('#table_id').dataTable();
		$('input').attr('checked','checked');
	});
} );