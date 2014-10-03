/**
 * Index Controller
 *
 * @module partySite
 * @author Dominic Rönicke <dominic.roenicke@sandboxer-online.de>
 * @license MIT <http://opensource.org/licenses/MIT>
 */
partySite.controller('IndexCtrl', ['$scope', '$sce', 'config', function ($scope, $sce, config) {

    $scope.party = config;

    /**
     * Initializer namespace
     *
     * @type {object}
     */
    var init = {};


    /**
     * Initializes the countdown
     */
    init.countdown = function()
    {
        var partyTimestamp = Date.parse(config.clock.date),
            currentTimestamp = Date.now();

        $('.' + config.clock.cssClass).FlipClock((partyTimestamp - currentTimestamp) / 1000, config.clock.config);
    };


    /**
     * Formats the date
     */
    init.date = function()
    {
        $scope.party.date = $.format.date(config.clock.date, config.clock.dateFormat)
    };


    /**
     * Initializes LiveFyre Comments
     */
    init.livefyre = function()
    {
        //Enabled?
        if (!config.comment || true !== config.comment.enable) {
            return;
        }

        var articleId = fyre.conv.load.makeArticleId(null);

        fyre.conv.load({}, [{
            el: 'livefyre-comments',
            network: "livefyre.com",
            siteId: config.comment.siteId,
            articleId: articleId,
            signed: false,
            collectionMeta: {
                articleId: articleId,
                url: fyre.conv.load.makeCollectionUrl()
            }
        }], function() {});
    };


    /**
     * Bypasses the sanitizer
     *
     * @param {string} html
     * @returns {string}
     */
    $scope.trust = function(html)
    {
        return $sce.trustAsHtml(html);
    };

    init.countdown();
    init.date();
    init.livefyre();
}]);