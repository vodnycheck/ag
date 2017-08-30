$(function(){
	$.getJSON( "js/TestData.json", function(data) {
		buildProgram(data);
		buildTable(data);
	});

	function buildProgram(data) {
		/*build program section*/
		var $programElement = $('#program');
		data.Programs.forEach(function(item){
			var $newItem = $('<div class="row program-item"></div>');
			$programElement.append($newItem);
			$newItem.append('' +
				'<div class="col-xs-12 col-md-6">' +
					'<div class="program-description">' +
						'<div class="image-wrap">' +
							'<img src="' + item.GroupAvatar + '" alt="">' +
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
	}

	function buildTable(data) {
		/*build table section*/
		var $tableBodyElement = $('#table');
		data.CurrentProgram.Members.forEach(function(item){
			$tableBodyElement.append('' +
				'<tr>' +
					'<td>' +
						'<a class="message" href="#" data-toggle="tooltip"></a>' +
						'<div class="image-wrap">' +
							'<img src="' + item.AvatarURL + '" alt="">' +
						'</div>' +
						'<div class="info-wrap">' +
							'<div class="name">' + item.Name + '</div>' +
							'<div class="phase">Phase: ' + item.Phase + '</div>' +
							'<div class="age">' + item.Age + '</div>' +
						'</div>' +
					'</td>' +
					'<td>' +
						'<div class="value">' + item.AvgBGPreMeal.Value + '</div>' +
						'<div class="date">' + item.AvgBGPreMeal.Date + '</div>' +
					'</td>' +
					'<td>' + item.CriticalBGLogs + '</td>' +
					'<td>' + item.LastClientMessage + '</td>' +
					'<td>' + item.LastFoodPhoto + '</td>' +
					'<td class="' + item.LastMoodReported.Color + '">' + item.LastMoodReported.Value + '</td>' +
				'</tr>' +
				'')
		});

		/*members amount*/
		$('#members-number').text(data.CurrentProgram.Members.length);

		/*table name*/
		$('#table-name').text(data.CurrentProgram.Name);

		/*tooltip init*/
		$('.message[data-toggle="tooltip"]').tooltip({
			title: "Send message",
			placement: "right",
		});
	}
});
