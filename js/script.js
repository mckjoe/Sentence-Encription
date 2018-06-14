$(document).ready(function() {
  $('#input').submit(function(event) {
    function stripSpace() {
    return sentence.replace(/\s/g,'');
  }
  function reverse(remix) {
    return remix.split('').reverse().join('');
  }
    var sentence = $('#sentence').val();
    var letterNumber = parseInt(sentence.length / 2);
    var beginning = stripSpace(sentence).charAt(letterNumber);
    var letters = sentence.charAt(sentence.length-1).toUpperCase() + sentence.charAt(0).toUpperCase();
    // console.log(sentence);
    var remix = beginning + sentence + letters;
    alert(reverse(remix));
    event.preventDefault();
  });
});
