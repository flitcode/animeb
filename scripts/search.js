document.getElementById("loader").style.visibility = "hidden";
//$(document).ready(function(){
//   myFunc();
//});

function myFunc(val){
$.ajax({
        url: "https://cors-anime.herokuapp.com/https://animeflix.io/api/search?q=" + val,
        dataType: 'json',
		
		headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
        type: 'get',
		
        cache:false,
		beforeSend: function() {
		document.getElementById("loader").style.visibility = "visible";
			
		},
		complete: function(){
			document.getElementById("loader").style.visibility = "hidden";
			
		},
        success: function(data){
            /*console.log(data);*/
            var event_data = '';
			$("#list_table_json > tbody tr").remove();
			var url = window.location.href.replace('/search.html','/anime.html#');
            $.each(data.data, function(index, value){
                /*console.log(value);*/
				event_data += '<tbody>';
                event_data += '<tr>';
                event_data += '<td maxlength="10"> <a href="' + url + value.id +  '">  '+value.title.substring(0, 40) + "..."+'</td>';
                event_data += '<td>' + value.gwa_rating+'</td>';
				event_data += '<td><img src="' + value.cover_photo + '" width="250px"  class="img-fluid" alt="Responsive image"/></td>';
                event_data += '</tr>';
				event_data += '</tbody>';
            });
            $("#list_table_json").append(event_data);
        },
        error: function(xhr, d){
            console.log("error");
           // alert("404. Please wait until the File is Loaded.");
        }
    });
}

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   myFunc(input.value);
  }
});