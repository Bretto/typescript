/// <reference path='./_all.d.ts' />
/// <reference path='./AppFactory.ts' />

module AppModule {
    'use strict';

    export class AppCtrl {

        data:Array<Object>;

        constructor($scope, AppService) {

            console.log('AppCtrl');
            this.data = AppService.data;

        }

        onTest(){
            console.log('test');
        }
    }
}