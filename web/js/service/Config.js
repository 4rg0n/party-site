/**
 * Config
 *
 * @module partySite
 * @author Dominic Rönicke <dominic.roenicke@sandboxer-online.de>
 * @license MIT <http://opensource.org/licenses/MIT>
 * @copyright Copyright (c) 2014 Sandboxer-Online
 */
partySite.factory('config', [function() {
    return {
        name: 'R&ouml;nickes Party!',
        headerImage: 'img/header.png',
        clock: {
            cssClass: 'party-clock',
            date: '2014-10-11 19:00:00',
            dateFormat: 'dd.MM.yyyy HH:mm',
            config: {
                autoStart: true,
                countdown: true,
                clockFace: "DailyCounter",
                defaultLanguage: "german"
            }
        }
    };
}]);

