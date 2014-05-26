/// <reference path='../references.ts' />


module nsTable {

    export class TableEditCtrl extends TableBase {

        public currentItem:any;

        constructor($scope, AppService, $location, $routeParams, CollectionIteratorFactory) {
            super($scope, AppService, CollectionIteratorFactory);
            console.log('TableEditCtrl');
            var index = this.dataIterator.getIndexBy('id', $routeParams.itemId);
            this.currentItem = AppService.data[index];
        }

        public onSave(){

        }

        public onCancel(){
            this.appService.goTo('/table', 'slide-back');
        }

    }
}