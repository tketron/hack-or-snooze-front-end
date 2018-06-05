$(function() {
  $('#submitText').on('click', function() {
    $('.form').slideToggle();
  });
  $('.container').on('submit', '#submitForm', function(event) {
    event.preventDefault();
    addNewLink();
  });

  $('.star').on('click', toggleFavorite);
});

function addNewLink() {
  //pull data from form
  let title = $('#title').val();
  let url = $('#url').val();

  //append to list
  let $newLink = $(
    `<li class="link-row"><i class="star far fa-star"></i><a href=${url}>${title}<span class="link">(${url})</span></a></li>`
  );
  $('#links').append($newLink);

  $('.star').on('click', toggleFavorite);
  //clear form
  $('#title').val('');
  $('#url').val('');
}

function toggleFavorite() {
  console.log(event.target);
  $(event.target).toggleClass('far fas');
  $(event.target)
    .parent()
    .toggleClass('favorite');
}
