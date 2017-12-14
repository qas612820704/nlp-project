var $submitBtn = document.getElementById('submit-btn');
$submitBtn.addEventListener('click', submit);

function submit() {
  var qs = Qs.parse(window.location.search);
  console.log(qs);
  $mturkForm = formSetup(qs);
  $mturkForm.submit();
}

function formSetup(qs) {
  var $mturkForm = document.getElementById('mturk_form');
  $mturkForm.setAttribute('method', 'post');
  $mturkForm.setAttribute('action', qs.turkSubmitTo);
  $mturkForm.elements.assignmentId.setAttribute('value', qs.assignmentId);
  $mturkForm.elements.score.setAttribute('value', score);
  return $mturkForm;
}
var $mturkForm = document.getElementById('mturk_form');
