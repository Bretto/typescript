/// <reference path='../app/_all.d.ts' />
/// <reference path='../app/AppService.ts' />
var TableModule;
(function (TableModule) {
    "use strict";

    var tableModule = angular.module('TableModule', []);

    var TableCtrl = (function () {
        function TableCtrl($scope, AppService, IteratorFactory) {
            this.pageRange = 10;
            this.onPage = function (page) {
                var dataIndex = this.data.indexOf(page);
                this.dataIterator.setCurrentIndex(dataIndex);

                var pageIndex = this.pages.indexOf(page);
                this.pagesIterator.setCurrentIndex(pageIndex);
            };
            this.onNextPage = function () {
                if (this.pagesIterator.hasNext()) {
                    var dataIndex = this.data.indexOf(this.pagesIterator.getNext());
                    this.dataIterator.setCurrentIndex(dataIndex);
                }
            };
            this.onBackPage = function () {
                if (this.pagesIterator.hasBack()) {
                    var dataIndex = this.data.indexOf(this.pagesIterator.getBack());
                    this.dataIterator.setCurrentIndex(dataIndex);
                }
            };
            console.log('TableCtrl');
            this.appService = AppService;
            this.iteratorFactory = IteratorFactory;

            this.dataIterator = IteratorFactory(AppService.data);
            this.pages = this.getPages(AppService.data);
            this.pagesIterator = IteratorFactory(this.pages);
            this.data = AppService.data;
        }
        TableCtrl.prototype.getPages = function (data) {
            var iter = this.iteratorFactory(this.appService.data, this.pageRange);
            var pages = [];
            do {
                pages.push(iter.getCurrent());
            } while(iter.getNext());

            iter.setCurrentIndex(0);

            return pages;
        };

        TableCtrl.prototype.isActivePage = function (id) {
            return (id === this.dataIterator.getCurrent().id) ? true : false;
        };
        return TableCtrl;
    })();

    tableModule.controller('TableCtrl', TableCtrl);
})(TableModule || (TableModule = {}));
//# sourceMappingURL=TableModule.js.map
