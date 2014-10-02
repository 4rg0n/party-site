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
        },
        about: {
            enable: true
        },
        location: {
            enable: true,
            src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.602804466039!2d13.785433400000008!3d51.060421499999954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709c8c8fdc5974b%3A0x77c8927f0f1e7b58!2sK%C3%A4the-Kollwitz-Ufer+73%2C+01307+Dresden!5e0!3m2!1sde!2sde!4v1412237402001'
        }
    };
}]);

