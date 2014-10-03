/**
 * App
 *
 * @author Dominic Rönicke <dominic.roenicke@sandboxer-online.de>
 * @license MIT <http://opensource.org/licenses/MIT>
 * @copyright Copyright (c) 2014 Sandboxer-Online
 */
var partySite = angular.module('partySite', ['ngRoute', 'ngSanitize'])
    .config(function($routeProvider, $interpolateProvider, $sceDelegateProvider) {
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

        $sceDelegateProvider
            .resourceUrlWhitelist([
                //Allow same origin resource loads.
                'self',
                //Allow loading resources from google
                'https://www.google.com/**',
                //Allow loading resources from livefyre
                'http://*.livefyre.com/**'
            ]);
    });