$(document).ready(function() {
  var totalRows = $('td3.csv').find('tbody tr:has(td)').length;
  var recordPerPage = 5;
  var totalPages = Math.ceil(totalRows / recordPerPage);
  var $pages = $('<div id="pages"></div>');
  for (i = 0; i < totalPages; i++) {
    $('<span>&nbsp;' + (i + 1) + '</span>').appendTo($pages);
  }
     $pages.appendTo('#td3.csv');
  $('.pageNumber').hover(
    function() { $(this).addClass('focus'); },
    function() { $(this).removeClass('focus'); }
  );
  $('table').find('tbody tr:has(td)').hide();
  var tr = $('table tbody tr:has(td)');
  for (var i = 0; i <= recordPerPage - 1; i++) {
      $(tr[i]).show();
  }
  $('span').click(function(event) {
    $('#td3.csv').find('tbody tr:has(td)').hide();
    var nBegin = ($(this).text() - 1) * recordPerPage;
    var nEnd = $(this).text() * recordPerPage - 1;
    for (var i = nBegin; i <= nEnd; i++)
    {
      $(tr[i]).show();
    }
  });
});