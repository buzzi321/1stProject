eventsApp.factory('eventData', function($http) {
    return {
        getEvent: function() {
            return $http({method: 'GET', url: '/data/event/1'});
        }
    };
});