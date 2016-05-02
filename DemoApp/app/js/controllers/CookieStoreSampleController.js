'use strict';

eventsApp.controller('CookieStoreSampleController',
    function CookieStoreSampleController($scope, $cookieStore) {
        $scope.event = {id: 1, name:"My Event"};

        $scope.saveEventToCookie = function(event) {
            $cookieStore.put('cookieevent', event);
        };

        $scope.getEventFromCookie = function() {
            console.log($cookieStore.get('event'));
        };

        $scope.removeEventCookie = function() {
            $cookieStore.remove('event');
        };


    }
);