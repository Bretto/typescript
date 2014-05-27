/// <reference path='../references.ts' />


module nsTable {

    export class TableDetailCtrl extends TableBase {

        public currentItem:any;

        constructor($scope, AppService, CollectionIteratorFactory, $routeParams, $location, $timeout) {
            super($scope, AppService, CollectionIteratorFactory, $routeParams, $location, $timeout);
            console.log('TableDetailCtrl');
            var index = this.dataIterator.getIndexBy('id', $routeParams.itemId);
            this.currentItem = AppService.data[index];
        }

        public onEdit(){
            this.appService.goTo('/table/' + this.currentItem.id + '/edit', 'slide-next');
        }

        public onOk(){
            this.appService.goTo('/table', 'slide-back');
        }

    }
}