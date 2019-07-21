$(document).ready(function(){
	//var qs = new Querystring();
	var v1 = window.location.hash.substring(1);
    $.ajax({
        url: "https://cors-anime.herokuapp.com/https://animeflix.io/api/videos?episode_id=" + v1,
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
		//	console.log(data);
            var event_data = '';
			var a;
			var videourl;
			
            $.each(data, function(index, value){
           //     console.log(Object.keys(value)[0]);
				videourl = value.file;
				if (videourl.endsWith(".mp4"))
				{
				a = "";
				}
				else 
				{
				a = "https://flitcode.github.io/m3u8/player/#";
				}
				 event_data += '<tr>';
                event_data += '<td> <a href="' + a + videourl + '"> '+"Watch"+'</td>';
                event_data += '<td>'+value.resolution+'</td>';
				event_data += '<td>'+value.provider+'</td>';
				event_data += '<td><img src="' + value.thumbnail + '"width="150px"  class="img-fluid" alt="Responsive image"/></td>';
				
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