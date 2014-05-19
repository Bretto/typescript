/// <reference path='./_all.d.ts' />
/// <reference path='./AppFactory.ts' />
var AppModule;
(function (AppModule) {
    'use strict';

    var AppCtrl = (function () {
        function AppCtrl($scope, AppService) {
            console.log('AppCtrl');
            this.data = AppService.data;
        }
        AppCtrl.prototype.onTest = function () {
            console.log('test');
        };
        return AppCtrl;
    })();
    AppModule.AppCtrl = AppCtrl;
})(AppModule || (AppModule = {}));
//# sourceMappingURL=AppCtrl.js.map
