eventsApp.factory('eventData', function($resource) {
    var resource = $resource('/data/event/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: false, params: {something: "foo"}}});


    return {
        getAllEvents: function() {
            return resource.query();
        },
        getEvent: function() {
            return resource.get({id:1});
         },
        save: function(event) {
            //var result = resource.get({id:'highest'});
            var result = resource.query();
            console.log('logging result');
            console.log(result);
            var idd = result.length;
            event.id = idd;
            console.log('logging event');
            console.log(event);
            return resource.save(event);
        }
    };
});