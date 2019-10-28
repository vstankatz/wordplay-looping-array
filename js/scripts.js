$(document).ready(function(){

  $("form#form").submit(function(event) {
    event.preventDefault();
    var sentence = $('input#words').val();
    var newSentence = sentence.split(" ");
    console.log(newSentence);

    var sentenceLength = newSentence.filter(sentence => sentence.length >= 3);
    var sentence2 = sentenceLength.reverse();
    var result = sentence2.join(' ');
    $('.text').text(result);
    console.log(result);

    // var result = newSentence.filter(function(sentence) {
    //   return sentence.length >= 3
    // });          <===== this is the typed out version of the arrow function. ====>





  });
});
