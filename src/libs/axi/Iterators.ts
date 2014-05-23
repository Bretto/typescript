module nsAxi {

    export interface ICollectionIterator {

        currentIndex: number;
        range: number;
        collection: any[] ;

        hasNext(): boolean ;
        hasBack(): boolean ;
        getNext(): any ;
        getBack(): any ;
        getCurrent(): any ;

        getIndexBy(prop:string, target:any): number;
    }


    export class CollectionIterator implements ICollectionIterator {

        public currentIndex = 0;
        public range = 1;
        public collection;

        constructor(collection:any[], range?:number) {
            this.range = range || 1;
            this.currentIndex = 0;
            this.collection = collection;
        }


        public hasNext():boolean {
            if (this.currentIndex + this.range < this.collection.length) {
                return true;
            } else {
                return false;
            }
        }

        public hasBack():boolean {
            if (this.currentIndex - this.range < 0) {
                return false;
            } else {
                return true;
            }
        }

        private next():boolean {
            if (this.hasNext()) {
                this.currentIndex += this.range;
                return true;
            } else {
                return false;
            }
        }

        private back():boolean {
            if (this.hasBack()) {
                this.currentIndex -= this.range;
                return true;
            } else {
                return false;
            }
        }

        public getCurrent():any {
            return this.collection.length && this.currentIndex >= 0 && this.collection[this.currentIndex];
        }

        public getNext():any {
            if (this.next()) {
                return this.getCurrent();
            }
        }

        public getBack():any {
            if (this.back()) {
                return this.getCurrent();
            }
        }

        public getIndexBy(prop:string, target:any):number {
            var index = null;
            for (var i = 0; i < this.collection.length; i++) {
                var obj = this.collection[i];
                if (obj[prop] === target) {
                    index = i;
                }
            }
            return index;
        }

    }


    export function CollectionIteratorFactory():typeof CollectionIterator {
        return CollectionIterator;
    }

}




