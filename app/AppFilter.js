var AppModule;
(function (AppModule) {
    'use strict';

    var AppFilter = (function () {
        function AppFilter() {
        }
        AppFilter.startFrom = function () {
            return function startFrom(input, start) {
                start = +start;
                return input.slice(start);
            };
        };
        return AppFilter;
    })();
    AppModule.AppFilter = AppFilter;
})(AppModule || (AppModule = {}));
//# sourceMappingURL=AppFilter.js.map
