myAppModule.factory('commentFactory', function($http){
	var factory = {}

	factory.addComment = function(data, callback){
		// console.log('add post data', data)
		$http.post('/comments',data).success(function(output){
			console.log('output return after add comment',output)
			//get the latest topic data and run callback from topics controller
			$http.get('/topics/' + data.topic_id).success(function(topic_data){
				callback(topic_data)
			})
		})
	}
	return factory;
})