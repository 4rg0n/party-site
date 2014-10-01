partySite.controller('IndexCtrl', ['$scope', 'config', function ($scope, config) {

    $scope.party = config;

    /**
     * Initializer namespace
     *
     * @type {object}
     */
    var init = {};

    init.clock = function()
    {
        var partyTimestamp = Date.parse(config.clock.date),
            currentTimestamp = Date.now();

        $('.' + config.clock.cssClass).FlipClock((partyTimestamp - currentTimestamp) / 1000, config.clock.config);
    };

    init.date = function()
    {
        $scope.party.date = $.format.date(config.clock.date, config.clock.dateFormat)
    };

    init.clock();
    init.date();
}]);