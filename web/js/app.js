/**
 * App
 *
 * @author Dominic Rönicke <dominic.roenicke@sandboxer-online.de>
 * @license MIT <http://opensource.org/licenses/MIT>
 * @copyright Copyright (c) 2014 Sandboxer-Online
 */
var partySite = angular.module('partySite', ['ngRoute', 'ngSanitize'])
    .config(function($routeProvider, $interpolateProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                controller: 'IndexCtrl'
            }).otherwise({
                redirectTo: '/'
            });

        //Change symbols because of twig conflicts
        $interpolateProvider
            .startSymbol('{[')
            .endSymbol(']}');

    });