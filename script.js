let $links;

$(function() {
  $('#submitText').on('click', function() {
    $('.form').slideToggle();
  });
  $('#favoritesText').on('click', toggleFavorites);
  $links = $('.link-row');
  $('.container').on('submit', '#submitForm', function(event) {
    event.preventDefault();
    addNewLink();
  });

  $('.star').on('click', toggleFavoriteIcon);
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
  $links = $('.link-row');

  $('.star').on('click', toggleFavoriteIcon);

  //clear form
  $('#title').val('');
  $('#url').val('');
}

function toggleFavoriteIcon() {
  console.log(event.target);
  $(event.target).toggleClass('far fas');
  $(event.target)
    .parent()
    .toggleClass('favorite');
}

function toggleFavorites() {
  if ($('#links').hasClass('all')) {
    let $favorites = $('.link-row').filter('.favorite');
    $('#links').empty();
    $('#links').append($favorites);
    $('#favoritesText').text('all');
  } else {}
    $('#links').empty();
    $('#links').append($links);
    $('#favoritesText').text('favorites');
  }
  $('#links').toggleClass('all favorites');
}
