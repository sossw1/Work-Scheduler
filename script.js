// Date at top
$("#currentDay").html(moment().format('dddd[, ]MMMM Do'));

// Create time blocks
var hours = [9,10,11,12,1,2,3,4,5];
for(let i=0; i<hours.length; i++) {
    var row = `<div class='row row${i}'>`;
    var hour = `<div class='hour col-2 col-sm-2 col-md-1'>${hours[i]}`;
    var text = `<textarea class='col-8 col-sm-8 col-md-10'>`;
    var save = `<button class="saveBtn col-2 col-sm-2 col-md-1">`;
    $(".container").append(row);
    var currentRow = $(`.row${i}`)
    currentRow.append(hour);
    currentRow.append(text);
    currentRow.append(save);

};