var Pusher = require('pusher'),
	pusher = new Pusher(
	{
		appId: '{get from portal}',
		key: '{get from portal}',
		secret: '{get from portal}'
	});

function update(item, user, request) {

	pusher.trigger('todo', 'refresh', {});
    request.execute();

}