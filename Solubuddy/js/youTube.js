//Test Document for pulling videos off of a user's channel list, etc.

//Test Variable (When applying to real channel, change variable to desired channel name. [Cannot be tested on localhost])
var channelName = 'Immortal';

$(document).ready(function(){
	$.get(
		"https://www.googleapis.com/youtube/v3/channels",{
			part: 'contentDetails', 
			forUsername: channelName,
			key: 'AIzaSyCiS7ej-KGe66Ov2QOPdCAV_g4cLCDUbvc'}, //API KEY
			function(data){
				//Loop to grab each item, then logs it to the console before extracting pid.
				$.each(data.items, function(i, item){
					console.log(item);
					pid = item.contentDetails.relatedPlaylists.uploads;
					getVids(pid);
				})
			}
					
	);
	
	//Function called in the above list
	function getVids(pid){
		$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems",{
			part: 'snippet', 
			maxResults: 10,
			playlistId: pid,
			key: 'AIzaSyCiS7ej-KGe66Ov2QOPdCAV_g4cLCDUbvc'},
			function(data){
				
				var title_output;
				
				//Loop to grab each item, then logs it to the console before extracting the title and the video.
				$.each(data.items, function(i, item) {
					console.log(item);
					videTitle = item.snippet.title;
					vidID = item.snippet.resourceId.videoId;
					
					title_output = '<li>'+videTitle+'</li>';
					vid_output = '<li><iframe src=\"//www.youtube.com/embed/'+vidID+'\"></iframe></li>';
					
					//Appends the contents of the videos to the test.html file where the unordered list has id results
					$('#res').append(title_output);
					$('#res').append(vid_output);
				})
			}
					
		);
	}		
});