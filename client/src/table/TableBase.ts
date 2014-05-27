/// <reference path='../references.ts' />


module nsTable {

    export class TableBase {

        public appService:nsApp.AppService;
        public $scope:ng.IScope;
        public dataIterator:nsAxi.ICollectionIterator;
        public $timeout:ng.ITimeoutService;
        public $location:ng.ILocationService;
        public $routeParams:any;

        constructor($scope, AppService, CollectionIteratorFactory, $routeParams, $location, $timeout) {
            this.$scope = $scope;
            this.appService = AppService;
            this.dataIterator = new CollectionIteratorFactory(AppService.data);
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.$timeout = $timeout;

            $scope.$on('TransitionEnd', function(){
                console.log('OK Transition');
            })
        }
    }
}