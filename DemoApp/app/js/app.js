'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngCookies', 'ngSanitize', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/newEvent',
                {
                    templateUrl:'templates/NewEvent.html',
                    controller: 'EditEventController'
                })
            .when('/mainPage',
                {
                    templateUrl:'templates/EventDetails.html',
                    controller: 'EventController'
                })
            .when('/events',
                {
                    templateUrl:'templates/EventList.html',
                    controller: 'EventListController'
                })
            .when('/event/:eventId',
                {
                    templateUrl:'templates/EventDetails.html',
                    controller: 'EventController'
                })
            .otherwise({redirectTo:'/events'});

    })
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', {capacity: 3})
    });