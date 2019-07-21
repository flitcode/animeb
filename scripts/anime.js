$(document).ready(myfunc1);

	var number = 0;

function myfunc(){
	document.getElementById("btn1").style.visibility = "hidden";
	document.getElementById("btn2").style.visibility = "visible";

	var v = window.location.hash.substring(1);
	
    $.ajax({
        url: "https://cors-anime.herokuapp.com/https://animeflix.io/api/episodes?anime_id=" + v + "&limit=30&sort=DESC",
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
			
			var url = window.location.href.split('#')[0];
			
			var title;
			var a = "";
			document.getElementById("animename").append(data.anime.title + " Episodes");
			
            $.each(data.data, function(index, value){
                /*console.log(value);*/
				title = value.title;
				if(title==null)
				{
				title = "No value given";
				}
				else if(title.length>30){
					a="...";
				}
				else {
					a="";
				}
                event_data += '<tr>';
                event_data += '<td maxlength="10"> <a href="' + url.replace('/anime.html','/episode.html#') + value.id +  '">  '+title.substring(0, 30) + a+'</td>';
                event_data += '<td>'+ "Ep: " + value.episode_num+'</td>';
				//event_data += '<td><img src="' + value.thumbnail + '" width="250px"  class="img-fluid" alt="Responsive image"/></td>';
				event_data += '<td>'+  value.airing_date +'</td>';
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
	
	function myfunc1(){
	number++;
	var v = window.location.hash.substring(1);
	
	
    $.ajax({
        url: "https://cors-anime.herokuapp.com/https://animeflix.io/api/episodes?anime_id=" + v + "&limit=30&sort=DESC&page=" + number,
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
			
			var url = window.location.href.split('#')[0];
			
			var title;
			var a = "";
			
			document.getElementById("animename").innerHTML = data.anime.title + " Episodes";
			document.title = data.anime.title + " Episodes";
            $.each(data.data, function(index, value){
                /*console.log(value);*/
				title = value.title;
				if(title == null){
				title="No value given";
				}
				else if(title.length>30){
					a="...";
				}
				else {
					a="";
				}
                event_data += '<tr>';
                event_data += '<td maxlength="10"> <a href="' + url.replace('/anime.html','/episode.html#') + value.id +  '">  '+title.substring(0, 30) + a+'</td>';
                event_data += '<td>'+ "Ep: " + value.episode_num+'</td>';
				//event_data += '<td><img src="' + value.thumbnail + '" width="250px"  class="img-fluid" alt="Responsive image"/></td>';
				event_data += '<td>'+  value.airing_date +'</td>';
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