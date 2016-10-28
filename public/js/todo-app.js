'use strict';

var toggleEdit = function () {
  var id = $(this).data('id');
  $('.done[data-id="' + id + '"]').fadeToggle(0);
  $('.done-editing[data-id="' + id + '"]').fadeToggle(0);
  $('.todo[data-id="' + id + '"]').fadeToggle(0);
  $('.edit-todo[data-id="' + id + '"]').fadeToggle(0);
  $('.remove[data-id="' + id + '"]').fadeToggle(0);
  $('.cancel[data-id="' + id + '"]').fadeToggle(0);
  $('.edit[data-id="' + id + '"]').fadeToggle(0);
}

$( document ).ready(function () {

  $('.edit-todo').fadeToggle(0);
  $('.cancel').fadeToggle(0);
  $('.done-editing').fadeToggle(0);

  // edit button
  $('.edit').on('click', function () {
    toggleEdit.apply(this);
  });

  // cancel button
  $('.cancel').on('click', function () {
    toggleEdit.apply(this);
  });

  // remove button
  $('.remove').on('click', function () {
    $(this).closest('tr').remove();
    // TODO: call api endpoint for delete
  });

  // done button
  $('.done').on('click', function () {
    var id = $(this).data('id');
    $('.done[data-id="' + id + '"]').fadeOut(200);
    $('.edit[data-id="' + id + '"]').fadeOut(200);
    $('.todo[data-id="' + id + '"]').wrapInner('<del></del>');
    // TODO: call api endpoint for update done state
  });

  // done-editing button
  $('.done-editing').on('click', function () {
    toggleEdit.apply(this);
    // TODO: call api endpoint for update the todo text
  });

});
