$(document).ready(function() {  

  $('#update_album').on('click', function(){
    $.post('/delete_album', { id: $('#delete_album').data('albumid')});
  });

   $('#add_photo').on('click', function(){
    $.post('/delete_album', { id: $('#delete_album').data('albumid')});
  });

  $('#add_album').on('click', function(){
    $.post('/add_album', { title: $('#album :input').val()});
  });
});