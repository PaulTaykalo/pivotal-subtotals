var updating_time_elements = false;

$(document).ready(function () {
   update_subtotals();
});

function update_subtotals() {
  //console.log("Updating elements");
 var hours_by_date = {}; 
 jQuery("#shift_table tr").each(function(i, element) {
    var date =  jQuery(element).find("td:nth-child(1)").text().trim();
    var hours =  jQuery(element).find("td:nth-child(7)").text();

    // console.log(date + " :: " + hours);
    
    var curr_hours = hours_by_date[date];
    if (curr_hours == undefined)  {
      curr_hours = parseFloat(hours);
    } else {
      curr_hours += parseFloat(hours);
    }
    hours_by_date[date] = curr_hours;
 }) 

  for (var p in hours_by_date) {
    var tr = jQuery("#shift_table tr td.date").filter(function(i, element){return jQuery(element).text().trim() == p }).last().parent();
    var subtotalRowText = 
        ' <tr>' +
        '  <td class="total">'+ p  + '</td> ' +
        ' <td class="empty"></td> ' +
        ' <td class="empty"></td> ' +
        '  <td class="empty"></td> ' +
        '  <td class="empty"></td> ' +
        '  <td class="empty"></td> ' +
        '  <td id="total_hours" class="hours total">'+hours_by_date[p]+'</td> ' +
        '  <td class="empty"></td> ' +
        '</tr> '
    // console.log(";"+p+";" +" last date element" + last_date_element);
    jQuery(subtotalRowText).insertAfter(tr);
  }

}