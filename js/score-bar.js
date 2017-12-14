var $scoreValue = document.getElementById('score-value');
var $scoreBar = document.getElementById('score-bar');
var $scoreBarLight = $scoreBar.getElementsByClassName('value-bar')[0];

score = $scoreBarLight.hasAttribute('value')
  ? parseInt($scoreBarLight.getAttribute('value')).clamp05()
  : 0;

function updateValueBarByScore(score) {
  $scoreBarLight.style.width = score * 20 + '%'
}

function updateScore(score) {
  $scoreValue.innerText = score;
}

function updateStarValue(e) {
  var scoreBarRect = this.getBoundingClientRect();
  var mouseFromLeft = (e.x - scoreBarRect.x) / scoreBarRect.width;
  score = Math.round(mouseFromLeft * 10) / 2; // 0 ~ 5 per 0.5
  updateValueBarByScore(score);
  updateScore(score);
}

function updateStarValueWithDelay(e) {
  updateScore(score);
  this.removeEventListener('mousemove', updateStarValue);
  this.removeEventListener('click', updateStarValueWithDelay);
  var that = this;
  setTimeout(function() {
    that.addEventListener('mousemove', updateStarValue);
    that.addEventListener('click', updateStarValueWithDelay);
  }, 700);
}

$scoreBar.addEventListener('mousemove', updateStarValue);
$scoreBar.addEventListener('click', updateStarValueWithDelay);

updateValueBarByScore(score);
updateScore(score);
