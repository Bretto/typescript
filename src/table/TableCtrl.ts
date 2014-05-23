/// <reference path='../_all.ts' />


module nsTable {

    export class TableCtrl {

        public pages:any[];
        public pageRange:number = 11;
        public appService;

        public dataIterator:nsAxi.ICollectionIterator;
        public pagesIterator:nsAxi.ICollectionIterator;

        public data:any[];

        public collectionIteratorFactory:typeof nsAxi.CollectionIterator;



        constructor($scope:ng.IScope, AppService:nsApp.AppService, CollectionIteratorFactory:typeof nsAxi.CollectionIterator) {
            console.log('TableCtrl');

            this.appService = AppService;
            this.collectionIteratorFactory = CollectionIteratorFactory;
            this.dataIterator = new CollectionIteratorFactory(AppService.data);
            this.pages = this.getPages(AppService.data);
            this.pagesIterator = new CollectionIteratorFactory(this.pages);
            this.data = AppService.data;
        }

        public getPages(data) {

            var iter:nsAxi.CollectionIterator = new this.collectionIteratorFactory(this.appService.data, this.pageRange);

            var pages = [];
            do {
                pages.push(iter.getCurrent())
            } while (iter.getNext());

            return pages;
        }

        public isActivePage(id):boolean {
            return (id === this.dataIterator.getCurrent().id) ? true : false;
        }

        public onPage(page) {
            var dataIndex = this.data.indexOf(page);
            this.dataIterator.currentIndex = dataIndex;

            var pageIndex = this.pages.indexOf(page);
            this.pagesIterator.currentIndex = pageIndex;
        }

        public onNextPage() {
            if (this.pagesIterator.hasNext()) {
                var dataIndex = this.data.indexOf(this.pagesIterator.getNext());
                this.dataIterator.currentIndex = dataIndex;
            }
        }

        public onBackPage() {
            if (this.pagesIterator.hasBack()) {
                var dataIndex = this.data.indexOf(this.pagesIterator.getBack());
                this.dataIterator.currentIndex = dataIndex;
            }
        }
    }
}

