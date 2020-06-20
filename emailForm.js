var $form = $('form#emailform'),
    url = 'https://script.google.com/macros/s/AKfycby5ezUZz-S5_xT1zfZbkv_qZreu4cEg_UtyhsXp4vqFphhfGP_X/exec'

$.fn.serializeObject = function() {
var o = {};
var a = this.serializeArray();
$.each(a, function() {
  if (o[this.name]) {
    if (!o[this.name].push) {
      o[this.name] = [o[this.name]];
    }
    o[this.name].push(this.value || ‘’);
    } 
  else {
    o[this.name] = this.value || ‘’;
  }
});
return o;
};

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})