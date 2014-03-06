if (Meteor.isClient) {
	Router.map(function() {

		this.route('hello_world', {
			path:'/:id',
			notFoundTemplate:'notfound',
			data: function() {
				return null;
				}
			});

		});


}