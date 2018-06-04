$(function() {
  console.log('jquery loaded');
  $('#submit').on('click', function() {
    toggleSubmitForm();
  });
});

function toggleSubmitForm() {
  if ($('.form').length > 0) {
    $('.form').remove();
  } else {
    let $submitForm = $('<div class="form"><form action="#"></form></div>');
    $submitForm.append(constructFormInputDiv('title'));
    $submitForm.append(constructFormInputDiv('url'));
    $submitForm.append(
      `<div><button id="submitBtn" type="submit">submit</button></div>`
    );
    $('#navbar').after($submitForm);
  }
}

function constructFormInputDiv(id) {
  let $div = $('<div></div>');
  $div.append(`<label for="${id}">${id}: `);
  $div.append(`<input type="text" id="${id}"></input>`);
  return $div;
}
