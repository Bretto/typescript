/// <reference path='./_all.d.ts' />
/// <reference path='./AppCtrl.ts' />
/// <reference path='./AppService.ts' />
/// <reference path='./AppFilter.ts' />
/// <reference path='./AppFactory.ts' />
/// <reference path='../table/TableModule.ts' />




module AppModule {
    "use strict";

    var appModule = angular.module('AppModule', [
        'ngAnimate',
        'TableModule'
    ]);

    appModule.service('AppService', AppService);
    appModule.filter('StartFromFilter', AppFilter.startFrom);
    appModule.factory('IteratorFactory', AppFactory.iterator);
    appModule.controller('AppCtrl', AppCtrl);


//    appModule.directive('scrollIf', function ($log, $parse, $timeout) {
//        function link(scope, element, attrs) {
//
//            scope.$watch(attrs.scrollIf, function (value) {
//                if (scope.$eval(attrs.scrollIf)) {
//                    $timeout(function () {
//                        element[0].scrollIntoView(true);
//                    }, 500);
//                }
//            });
//        }
//
//        return {
//            restrict: 'A',
//            link: link
//        };
//    });
//
//    appModule.directive('setPos', function ($log, $parse, $timeout) {
//
//        function link(scope, element, attrs) {
//
//            var intervalID = window.setInterval(animate, 100);
//            var target = element.parent();
//            var scroll = target.parent();
//
//            function animate() {
//                var pos = target.position();
//                element.css({top: (pos.top) + (scroll.scrollTop()), left: pos.left});
//            }
//
//            scope.$on('$destroy', function () {
//                clearInterval(intervalID);
//            });
//
//        }
//
//        return {
//            restrict: 'A',
//            link: link
//        };
//    });
//
//    appModule.filter('startFrom', function () {
//        return function (input, start) {
//            start = +start; //parse to int
//            return input.slice(start);
//        };
//    });

//    appModule.controller('AppCtrl', function ($scope, $http, $timeout) {
//        console.log('AppCtrl');
//
//        $scope.currentPage = 0;
//
//        $scope.onSelect = function (row) {
//            $scope.activeRow = row;
//            $scope.editRow = angular.copy(row);
//            $scope.modalOpened = true;
//
//            $timeout(function () {
//                $scope.animate = true;
//            });
//        };
//
//        $scope.onGridSelect = function (row) {
//            $scope.activeRow = row;
//            $scope.editRow = angular.copy(row);
//            $scope.isGridClose = true;
//
//        };
//
//        $scope.isGridClose = false;
//
//        $scope.isActiveRow = function (row) {
//            return ($scope.activeRow === row);
//        };
//
//        $scope.getModalOpened = function () {
//            return $scope.modalOpened;
//        };
//
//        function closeModal() {
//            $scope.isGridClose = false;
//            $scope.activeRow = null;
//            $scope.animate = false;
//
//            $timeout(function () {
//                $scope.modalOpened = false;
//            }, 150);
//        }
//
//        $scope.onModalClose = function () {
//            closeModal();
//        };
//
//        $scope.onModalSave = function () {
//            angular.copy($scope.editRow, $scope.activeRow);
//
//            closeModal();
//        };
//
//        $scope.onPage = function (index) {
//            $scope.currentPage = index;
//        };
//
//
//    });


}