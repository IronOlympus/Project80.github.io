var GuestName = [];
var total_guest_list_array = [];
function submit()
{
    GuestName = document.getElementById("name1").value;
    total_guest_list_array.push(GuestName);
    console.log(total_guest_list_array);
    document.getElementById("display_raw_guest_list_name").innerHTML=total_guest_list_array;
    document.getElementById("sorting_button").style.display = "inline-block";
}

function sort() {
    sorted_guest_list = total_guest_list_array.sort();
    console.log(sorted_guest_list);
    var remove_commas = sorted_guest_list.join(" ");
    console.log(remove_commas);
    document.getElementById("sorted_guest_list").innerHTML=remove_commas;
}

function search() {
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for(j=0; j < total_guest_list_array.length; j++)
     {
         if(s==total_guest_list_array[j]){
             found = found+1;
         }
     }
     document.getElementById("p2").innerHTML="name found" + found + "time/s";
     console.log("found name" + found+ "time/s");
}