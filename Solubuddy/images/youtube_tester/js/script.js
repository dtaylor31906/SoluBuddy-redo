//Test Document for pulling videos off of a user's channel list, etc.

//Test Variable
var channelName = 'TechGuyWeb';

$(document).ready(function(){
	$.get(
		"https://www.googleapis.com/youtube/v3/channels",{
			part: 'contentDetails', 
			forUsername: channelName,
			key: 'AIzaSyAh9r-M5EioveDSTZwDeYL4RIObcg76v9Y'}, //API KEY
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
			key: 'AIzaSyAh9r-M5EioveDSTZwDeYL4RIObcg76v9Y'},
			function(data){
				
				var output;
				
				//Loop to grab each item, then logs it to the console before extracting the title and the video.
				$.each(data.items, function(i, item) {
					console.log(item);
					videTitle = item.snippet.title;
					vidID = item.snippet.resourceId.videoId;
					
					title_output = '<li>'+videTitle+'</li>';
					vid_output = '<li><iframe src=\"//www.youtube.com/embed/'+vidID+'\"></iframe></li>';
					
					//Appends the contents of the videos to the test.html file where the unordered list has id results
					$('#results').append(title_output);
					$('#results').append(vid_output);
				})
			}
					
		);
	}		
});