/// <reference path='../AxiModule' />

module nsAxi {

    export class TransitionEnd {

        constructor() {
            var directive:ng.IDirective = {};
            directive.restrict = "A";
            directive.link = function ($scope, $elem, $attrs) {

                console.log('link');
                $elem.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
                    console.log('TransitionEnd Directive');
                    $scope.$broadcast('TransitionEnd');
                });
            }
            return directive;
        }
    }

}