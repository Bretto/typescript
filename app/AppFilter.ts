module AppModule {
    'use strict';

    export class AppFilter {

        static startFrom() {
            return function startFrom(input:string, start:number){
                start = +start; //parse to int
                return input.slice(start);
            }
        }
    }
}