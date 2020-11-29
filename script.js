// Date at top
$("#currentDay").html(moment().format('dddd[, ]MMMM Do'));

// Create time blocks
var hours = [9,10,11,12,1,2,3,4,5];
var ampm = ["am","am","am","pm","pm","pm","pm","pm","pm"]
for(let i=0; i<hours.length; i++) {
    var row = `<div class='row row${i}'>`;
    var hour = `<div class='hour col-2 col-sm-2 col-md-1'>${hours[i]}${ampm[i]}`;
    var text = `<textarea class='textarea${i} col-8 col-sm-8 col-md-10'>`;
    var save = `<button class="saveBtn save${i} col-2 col-sm-2 col-md-1">Save`;
    $(".container").append(row);
    var currentRow = $(`.row${i}`)
    currentRow.append(hour);
    currentRow.append(text);
    currentRow.append(save);
};
// Find out which time block INDEX is present (if any)
var presentIndex;
var presentHour = parseInt(moment().format("hh"));
var presentAmPm = moment().format('a');
for(let i=0; i<hours.length; i++) {
    if(presentHour === hours[i] && presentAmPm === ampm[i]) {
        presentIndex = i;
    }
}
// Set classes based on time
for(let i=0; i<hours.length; i++) {
    if(i<presentIndex) {
        $(`.textarea${i}`).attr("class", `textarea${i} past col-8 col-sm-8 col-md-10`);
    } else if (i>presentIndex) {
        $(`.textarea${i}`).attr("class", `textarea${i} future col-8 col-sm-8 col-md-10`);
    } else if (i === presentIndex) {
        $(`.textarea${i}`).attr("class", `textarea${i} present col-8 col-sm-8 col-md-10`);
    }
}

// Event listeners
for(let i=0; i<hours.length; i++) {
    $(`.save${i}`).on("click",function(){
        // call function to update local storage

    });
}

// local storage