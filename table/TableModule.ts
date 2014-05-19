/// <reference path='../app/_all.d.ts' />
/// <reference path='../app/AppService.ts' />

module TableModule {
    "use strict";

    var tableModule = angular.module('TableModule', [

    ]);


    class TableCtrl {

        pages:Array;
        pageRange:number =  10;
        appService:AppModule.AppService;
        dataIterator;
        public pagesIterator;
        data:Array;

        iteratorFactory;

        constructor($scope, AppService, IteratorFactory) {
            console.log('TableCtrl');
            this.appService = AppService;
            this.iteratorFactory = IteratorFactory;

            this.dataIterator = IteratorFactory(AppService.data);
            this.pages = this.getPages(AppService.data);
            this.pagesIterator = IteratorFactory(this.pages);
            this.data = AppService.data;
        }

        getPages(data) {
            var iter = this.iteratorFactory(this.appService.data, this.pageRange);
            var pages = [];
            do {
                pages.push(iter.getCurrent())
            } while (iter.getNext());

            iter.setCurrentIndex(0);

            return pages;
        }

        isActivePage(id):boolean {
            return (id === this.dataIterator.getCurrent().id) ? true : false;
        }

        onPage = function (page) {
            var dataIndex = this.data.indexOf(page);
            this.dataIterator.setCurrentIndex(dataIndex);

            var pageIndex = this.pages.indexOf(page);
            this.pagesIterator.setCurrentIndex(pageIndex);
        };

        onNextPage = function () {
            if(this.pagesIterator.hasNext()){
                var dataIndex = this.data.indexOf(this.pagesIterator.getNext());
                this.dataIterator.setCurrentIndex(dataIndex);
            }
        };

        onBackPage = function () {
            if(this.pagesIterator.hasBack()){
                var dataIndex = this.data.indexOf(this.pagesIterator.getBack());
                this.dataIterator.setCurrentIndex(dataIndex);
            }
        };
    }


    tableModule.controller('TableCtrl', TableCtrl);

}