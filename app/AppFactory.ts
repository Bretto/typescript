module AppModule {
    'use strict';

    export class AppFactory {

        static iterator() {
            return function(argArray, range) {
                var range = range || 1;
                var currentIndex = 0;
                if (!Array.isArray(argArray)) {
                    throw new Error('iteratorFactory expects an array.');
                }
                function hasNext() {
                    if (currentIndex + range < argArray.length) {
                        return true;
                    } else {
                        return false;
                    }
                }

                function hasBack() {
                    if (currentIndex - range < 0) {
                        return false;
                    } else {
                        return true;
                    }
                }

                function next() {
                    if (hasNext()) {
                        currentIndex += range;
                        return true;
                    } else {
                        return false;
                    }
                }

                function back() {
                    if (hasBack()) {
                        currentIndex -= range;
                        return true;
                    } else {
                        return false;
                    }
                }

                function getCurrent() {
                    return argArray.length && currentIndex >= 0 && argArray[currentIndex];
                }

                function getNext() {
                    if (next()) {
                        return getCurrent();
                    }
                }

                function getBack() {
                    if (back()) {
                        return getCurrent();
                    }
                }

                function getCurrentIndex(){
                    return currentIndex;
                }

                function setCurrentIndex(index){
                    currentIndex = index;
                }

                function getIndexBy(prop, target){
                    var index = null;
                    for (var i = 0; i < argArray.length; i++) {
                        var obj = argArray[i];
                        if(obj[prop] === target){
                            index = i;
                        }
                    }
                    return index;
                }

                function getrange(){
                    return range;
                }

                var iterator = {
                    hasNext: hasNext,
                    hasBack: hasBack,
                    getNext: getNext,
                    getBack: getBack,
                    getCurrent: getCurrent,
                    getCurrentIndex: getCurrentIndex,
                    setCurrentIndex: setCurrentIndex,
                    getrange: getrange,
                    getIndexBy: getIndexBy
                };


                return iterator;
            }
        }


    }


}