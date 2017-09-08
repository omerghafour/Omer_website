//zome contact//

$(document).ready(function() {
  var oldSize = parseFloat($("#content").css('font-size'));
  var newSize = oldSize  * 2;
  $("#content").hover(
    function() {
     $("#content").animate({ fontSize: newSize}, 200);
    },
    function() {
    $("#content").animate({ fontSize: oldSize}, 200);
   }
 );
});