 // document.body.style.background = 'pink';
 $(document).ready(function() {
 	$('*').on('mouseover',function(){
 		var type = $(this).attr('type');
 		var id = $(this).attr('id');
 		var name = $(this).attr('name');
 		//console.log('id :' + id);
 		$(this).attr('title','[type ='+type+'] [id ='+id +'] [name ='+name+']');
 	});
 });

