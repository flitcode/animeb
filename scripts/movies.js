$(document).ready(function(){
    $.ajax({
        url: "https://cors-anime.herokuapp.com/https://animeflix.io/api/anime/popular?limit=20&type=Movie",
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
			var url = window.location.href.replace('/movies.html','/anime.html#');
			var title;
			var a = "";
			
            $.each(data.data, function(index, value){
                /*console.log(value);*/
				title = value.title;
				if(title==null){
				title = "No value given";
				}
				else if(title.length>30){
					a="...";
				}
				else {
					a="";
				}
                event_data += '<tr>';
                event_data += '<td maxlength="10"> <a href="' + url + value.id +  '">  '+title.substring(0, 30) + a+'</td>';
                event_data += '<td>' + value.gwa_rating+'</td>';
				event_data += '<td><img src="' + value.cover_photo + '" width="250px"  class="img-fluid" alt="Responsive image"/></td>';
                event_data += '</tr>';
            });
            $("#list_table_json").append(event_data);
        },
        error: function(xhr, d){
            console.log("error");
           // alert("404. Please wait until the File is Loaded.");
        }
    });
});

var number = 1;

function loadmore(){
number++;
$.ajax({
        url: "https://cors-anime.herokuapp.com/https://animeflix.io/api/anime/popular?limit=20&type=Movie&page=" + number,
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
			var url = window.location.href.replace('/movies.html','/anime.html#');
			var title;
			var a = "";
			
            $.each(data.data, function(index, value){
                /*console.log(value);*/
				title = value.title;
				if(title==null){
				title = "No value given";
				}
				else if(title.length>30){
					a="...";
				}
				else {
					a="";
				}
                event_data += '<tr>';
                event_data += '<td maxlength="10"> <a href="' + url + value.id +  '">  '+title.substring(0, 30) + a+'</td>';
                event_data += '<td>' + value.gwa_rating+'</td>';
				event_data += '<td><img src="' + value.cover_photo + '" width="250px"  class="img-fluid" alt="Responsive image"/></td>';
                event_data += '</tr>';
            });
            $("#list_table_json").append(event_data);
        },
        error: function(xhr, d){
            console.log("error");
           // alert("404. Please wait until the File is Loaded.");
        }
    });
}