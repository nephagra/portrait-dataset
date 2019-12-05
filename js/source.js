$(document).ready(function(){
  var metadata = $.getJSON("portraits.json");
  console.log(metadata);
  var i = 0;
    

    $(function () {
        // setup an event handler to set the text when the range value is dragged (see event for input) or changed (see event for change)
        $('#YearRange1').on('input change', function () {
            $('#startyear').text("Start Year - " + $(this).val());
            if($('#YearRange1').val() > $('#YearRange2').val()){
                $('#searcherror').text("ERROR: Start Year greather than End Year.");
            }else{
                $('#searcherror').text("");
            }
        });
    });
    $(function () {
        // setup an event handler to set the text when the range value is dragged (see event for input) or changed (see event for change)
        $('#YearRange2').on('input change', function () {
            $('#endyear').text("End Year - " + $(this).val());
            if($('#YearRange1').val() > $('#YearRange2').val()){
                $('#searcherror').text("ERROR: Start Year greather than End Year.");
            }else{
                $('#searcherror').text("");
            }
        });
    });

    $('#m1').on({
        'click': function(){
            window.location = 'search2.html';
            // $('#exampleRadios1').attr("checked", true);
        }
    })

});
