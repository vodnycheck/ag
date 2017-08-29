$(function(){

	$.getJSON( "js/TestData.json", function(data) {

		var $programElement = $('#program');

		data.Programs.forEach(function(item){
			var $newItem = $('<div class="row program-item"></div>');
			$programElement.append($newItem);
			$newItem.append('' +
				'<div class="col-xs-12 col-md-6">' +
					'<div class="program-description">' +
						'<div class="image-wrap">' +
							'<img src="images/defaultGroupAvatar.png" alt="">' +
						'</div>' +
						'<div class="title">' + item.GroupName + '</div>' +
						'<div class="coach-type">' + item.Description + '</div>' +
						'<div class="members">Total Members <span class="number">' + item.TotalMembers + '</span></div>' +
					'</div>' +
				'</div>' +
				'');
			if (item.LastPost) {
				$newItem.append('' +
					'<div class="col-xs-12 col-md-6">' +
						'<div class="latest-comment">' +
							'<div class="image-wrap">' +
								'<img src="' + item.LastPost.AvatarURL + '" alt="">' +
								'<div class="status">' + item.LastPost.UserName + '</div>' +
							'</div>' +
							'<div class="title">Latest Post</div>' +
							'<div class="text">' + item.LastPost.Post + '</div>' +
							'<div class="date">' + item.LastPost.Date + '</div>' +
						'</div>' +
					'</div>' +
					'');
			}
		});
		console.log(data);
	});
});

//https://dev-mdt-api.wellnesslayers.com/TestData.json
