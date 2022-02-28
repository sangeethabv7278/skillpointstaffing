questionFirst= $('[data-question]:first').attr('data-question');
$('#chatlist ul').append('<li class="admin-message">'+questionFirst+'</li>');
$('[data-question]:first').appendTo('.message-box');

$("#send").click(function(event){
  questionVal=$('.message-box [data-question]').val();
  $("#chatlist ul").append('<li class="client-message">'+questionVal+'</li>');
  dataName=$('.admin-client-message-wrap [data-name]').attr('data-question');
   if($('.message-box[name]').attr('name')=="name"){
     nameVal=$('.message-box [name]').val();
     $('.admin-client-message-wrap[data-name]').attr('data-question',"hi "+ nameVal +",</br>"+dataName);
   }
  $('.message-box [data-question]').appendTo('.submit_info');

if($('.admin-client-message-wrap').children().length !=0){
  questionFirst= $('[data-question]:first').attr('data-question');
  $('#chatlist ul').append('<li class="admin-message">'+questionFirst+'</li>');
  $('[data-question]:first').appendTo('.message-box');
}

$('#chatlist').animate({scroll:5000})
});

$('.chat_icon').click(function(event){
  $('.chatbot-box').toggleClass('active');
});

$("#confirm").click(function(event){
  $('#submit').trigger('click');
});
$("#notconfirm").click(function(event){
  location.reload();
});
