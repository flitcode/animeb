$(document).ready(function(){
    $.ajax({
	
        url: "https://cors-anime.herokuapp.com/https://animeflix.io/api/episodes/latest?limit=25",
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
			var url = window.location.href.replace('/home.html','/episode.html#');
			var title;
			var a = "";
            $.each(data.data, function(index, value){
                /*console.log(value);*/
				title = value.title;
				if(title.length>30){
					a="...";
				}
				else {
					a="";
				}
                event_data += '<tr>';
                event_data += '<td> <a href="' + url + value.episode.id +  '">  '+title.substring(0, 30) + a +'</td>';
                event_data += '<td>'+ "Ep: " + value.episode.episode_num+'</td>';
				event_data += '<td><img src="' + value.thumbnail + '" width="250px"  class="img-fluid" alt="Responsive image"/></td>';
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