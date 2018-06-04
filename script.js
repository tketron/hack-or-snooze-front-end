$(function() {
  $('#submitText').on('click', toggleSubmitForm);
  $('.container').on('submit', '#submitForm', addNewLink);
});

function toggleSubmitForm() {
  if ($('.form').length > 0) {
    $('.form').remove();
  } else {
    let $formDiv = $('<div class="form"></div>');
    let $submitForm = $('<form id="submitForm"></form>');
    $submitForm.append(constructFormInputDiv('title'));
    $submitForm.append(constructFormInputDiv('url'));
    $submitForm.append(
      `<div><input id="submitBtn" type="submit"></input></div>`
    );
    $formDiv.append($submitForm);

    $('#navbar').after($formDiv);

    // $('#submitForm').on('submit', function(event) {
    //   addNewLink();
    //   event.preventDefault();
    // });
  }
}

function constructFormInputDiv(id) {
  let $div = $('<div></div>');
  $div.append(`<label for="${id}">${id}: `);
  $div.append(`<input type="text" id="${id}"></input>`);
  return $div;
}

function addNewLink() {
  //pull data from form
  let title = $('#title').val();
  let url = $('#url').val();

  //append to list
  let $newLink = $(
    `<li class="link-row"><i class="far fa-star"></i>${title}<span class="link">${url}</span></li>`
  );
  $('#links').append($newLink);
}
