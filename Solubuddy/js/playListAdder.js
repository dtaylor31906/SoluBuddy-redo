//Test Document for pulling videos off of a user's channel list, etc.

//Test Variable (When applying to real channel, change variable to desired channel name. [Cannot be tested on localhost])
var channelName = 'Kreller4241';
var vidWidth = 500;
var vidHeight = 400;

/*To add more playList add their IDs from YouTube here and add another function call applying new ID.
* IDs are found by going to the user page and selecting the list link, not the video click link.
*
*/
var pidList = 'PL6F79E3FDDFBFFDDB';
var pid2012 = 'PLZMVsmxrKreGsfnEOfMUR2_z7f6q-ATUz';
var pid2013 = 'PLZMVsmxrKreHvEW476vV6LH4GVWtPoXD0'; //ListID of the youTube PlayList from url

$(document).ready(function(){
	$.get(
		"https://www.googleapis.com/youtube/v3/channels",{
<<<<<<< HEAD
			part: 'contentDetails',
=======
			part: 'contentDetails', 
>>>>>>> origin/master
			forUsername: channelName,
			key: 'AIzaSyCiS7ej-KGe66Ov2QOPdCAV_g4cLCDUbvc'}, //API KEY
			function(data){
				//Loop to grab each item, then logs it to the console before extracting pid.
				$.each(data.items, function(i, item){
					console.log(item);
					getList(pidList);
					getfall2012(pid2012);
					getfall2013(pid2013);
				})
			}
<<<<<<< HEAD

	);

	//Functions to retrieve

	function getList(pid){
		$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems",{
			part: 'snippet',
=======
					
	);
	
	//Functions to retrieve 
	
	function getList(pid){
		$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems",{
			part: 'snippet', 
>>>>>>> origin/master
			maxResults: 12,
			playlistId: pid,
			key: 'AIzaSyCiS7ej-KGe66Ov2QOPdCAV_g4cLCDUbvc'},
			function(data){
<<<<<<< HEAD

				var title_output;

=======
				
				var title_output;
				
>>>>>>> origin/master
				//Loop to grab each item, then logs it to the console before extracting the title and the video.
				$.each(data.items, function(i, item) {
					console.log(item);
					videTitle = item.snippet.title;
					vidID = item.snippet.resourceId.videoId;
<<<<<<< HEAD

					title_output = '<li><h3>'+videTitle+'</h3></li>';
					vid_output = '<li><iframe height ="'+vidHeight+'" width ="'+vidWidth+'" src=\"//www.youtube.com/embed/'+vidID+'\"></iframe></li>';

=======
					
					title_output = '<li><h3>'+videTitle+'</h3></li>';
					vid_output = '<li><iframe height ="'+vidHeight+'" width ="'+vidWidth+'" src=\"//www.youtube.com/embed/'+vidID+'\"></iframe></li>';
					
>>>>>>> origin/master
					//Appends the contents of the videos to the test.html file where the unordered list has id results
					$('#play1').append(title_output);
					$('#play1').append(vid_output);
				})
			}
<<<<<<< HEAD

		);
	}


	function getfall2013(pid){
		$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems",{
			part: 'snippet',
=======
					
		);
	}	
	
	
	function getfall2013(pid){
		$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems",{
			part: 'snippet', 
>>>>>>> origin/master
			maxResults: 12,
			playlistId: pid,
			key: 'AIzaSyCiS7ej-KGe66Ov2QOPdCAV_g4cLCDUbvc'},
			function(data){
<<<<<<< HEAD

				var title_output;

=======
				
				var title_output;
				
>>>>>>> origin/master
				//Loop to grab each item, then logs it to the console before extracting the title and the video.
				$.each(data.items, function(i, item) {
					console.log(item);
					videTitle = item.snippet.title;
					vidID = item.snippet.resourceId.videoId;
<<<<<<< HEAD

					title_output = '<li><h3>'+videTitle+'</h3></li>';
					vid_output = '<li><iframe height ="'+vidHeight+'" width ="'+vidWidth+'" src=\"//www.youtube.com/embed/'+vidID+'\"></iframe></li>';

=======
					
					title_output = '<li><h3>'+videTitle+'</h3></li>';
					vid_output = '<li><iframe height ="'+vidHeight+'" width ="'+vidWidth+'" src=\"//www.youtube.com/embed/'+vidID+'\"></iframe></li>';
					
>>>>>>> origin/master
					//Appends the contents of the videos to the test.html file where the unordered list has id results
					$('#play3').append(title_output);
					$('#play3').append(vid_output);
				})
			}
<<<<<<< HEAD

		);
	}
=======
					
		);
	}	
>>>>>>> origin/master

	function getfall2012(pid){
		$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems",{
<<<<<<< HEAD
			part: 'snippet',
=======
			part: 'snippet', 
>>>>>>> origin/master
			maxResults: 20,
			playlistId: pid,
			key: 'AIzaSyCiS7ej-KGe66Ov2QOPdCAV_g4cLCDUbvc'},
			function(data){
<<<<<<< HEAD

				var title_output;

=======
				
				var title_output;
				
>>>>>>> origin/master
				//Loop to grab each item, then logs it to the console before extracting the title and the video.
				$.each(data.items, function(i, item) {
					console.log(item);
					videTitle = item.snippet.title;
					vidID = item.snippet.resourceId.videoId;
<<<<<<< HEAD

					title_output = '<li><h3>'+videTitle+'</h3></li>';
					vid_output = '<li><iframe height ="'+vidHeight+'" width ="'+vidWidth+'" src=\"//www.youtube.com/embed/'+vidID+'\"></iframe></li>';

=======
					
					title_output = '<li><h3>'+videTitle+'</h3></li>';
					vid_output = '<li><iframe height ="'+vidHeight+'" width ="'+vidWidth+'" src=\"//www.youtube.com/embed/'+vidID+'\"></iframe></li>';
					
>>>>>>> origin/master
					//Appends the contents of the videos to the test.html file where the unordered list has id results
					$('#play2').append(title_output);
					$('#play2').append(vid_output);
				})
			}
<<<<<<< HEAD

		);
	}
});
=======
					
		);
	}	
});
>>>>>>> origin/master
