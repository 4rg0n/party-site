/**
 * Sarcasm Directive
 *
 * @module partySite
 * @author Dominic Rönicke <dominic.roenicke@sandboxer-online.de>
 * @license MIT <http://opensource.org/licenses/MIT>
 */
partySite.directive('sarcasm',function($timeout, $compile){
    return{
        restrict:'A',
        link: function(scope, elem){
            $timeout(function(){
                var html = SarcasmJs.sarcasmnize(elem.html());

                elem.html(html);
                $compile(elem.contents())(scope);
            });
        }
    };
});