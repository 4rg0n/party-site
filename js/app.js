/**
 * App
 *
 * Initialisiert die App mit den Routen Einstellungen
 *
 * @author Dominic Rönicke <dominic.roenicke@sandboxer-online.de>
 * @license MIT <http://opensource.org/licenses/MIT>
 * @copyright Copyright (c) 2014 Sandboxer-Online
 */
var partySite = angular.module('partySite', ['ngRoute', 'ngSanitize'])
    .config(function($routeProvider) {
        'use strict';

        $routeProvider
            //Skill Baum Liste
            .when('/', {
                controller: 'LoginCtrl',
                templateUrl: 'js/view/login.html'
            }).otherwise({
                redirectTo: '/'
            })

    });