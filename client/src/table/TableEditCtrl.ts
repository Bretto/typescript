/// <reference path='../references.ts' />


module nsTable {

    export class TableEditCtrl extends TableBase {

        public currentItem:any;
        public editItem:any;

        constructor($scope, AppService, CollectionIteratorFactory, $routeParams, $location, $timeout) {
            super($scope, AppService, CollectionIteratorFactory, $routeParams, $location, $timeout);
            console.log('TableEditCtrl');
//            var index = this.dataIterator.getIndexBy('id', $routeParams.itemId);
//            this.currentItem = AppService.data[index];
            this.currentItem = this.dataIterator.getItemBy('id', $routeParams.itemId);
            this.editItem = angular.copy(this.currentItem);
        }

        public onSave(){
            angular.copy(this.editItem, this.currentItem);
            this.appService.goTo('/table/' + this.currentItem.id + '/save', 'slide-next');
        }

        public onCancel(){
            this.appService.goTo('/table', 'slide-back');
        }

    }
}