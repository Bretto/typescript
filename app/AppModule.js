/// <reference path='./_all.d.ts' />
/// <reference path='./AppCtrl.ts' />
/// <reference path='./AppService.ts' />
/// <reference path='./AppFilter.ts' />
/// <reference path='./AppFactory.ts' />
/// <reference path='../table/TableModule.ts' />
var AppModule;
(function (AppModule) {
    "use strict";

    var appModule = angular.module('AppModule', [
        'ngAnimate',
        'TableModule'
    ]);

    appModule.service('AppService', AppModule.AppService);
    appModule.filter('StartFromFilter', AppModule.AppFilter.startFrom);
    appModule.factory('IteratorFactory', AppModule.AppFactory.iterator);
    appModule.controller('AppCtrl', AppModule.AppCtrl);
})(AppModule || (AppModule = {}));
//# sourceMappingURL=AppModule.js.map
