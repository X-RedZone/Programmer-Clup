$(document).ready(function() {
    $('#profile-tab').click(function(){
        $('#home').hide();
        $('#profile').show();
        $('#profile-tab').addClass("active");
        $('#home-tab').removeClass("active");
    });
});
$(document).ready(function() {
    $('#home-tab').click(function(){
        $('#profile').hide();
        $('#home').show();
        $('#home-tab').addClass("active");
        $('#profile-tab').removeClass("active");
    });
});