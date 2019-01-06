var subject = $('#val-subject').val()
var text = $('#val-ask').val()

$("#kirim").click(function() {
    let payload = {subject, text}
    console.log(payload);
})

$( document ).ready(function() {
    console.log( "ready!" );
});