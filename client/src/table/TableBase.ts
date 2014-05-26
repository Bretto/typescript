/// <reference path='../references.ts' />


module nsTable {

    export class TableBase {

        public appService:nsApp.AppService;
        public $scope:ng.IScope;
        public dataIterator:nsAxi.ICollectionIterator;

        constructor($scope, AppService, CollectionIteratorFactory) {
            this.$scope = $scope;
            this.appService = AppService;
            this.dataIterator = new CollectionIteratorFactory(AppService.data);
        }
    }
}