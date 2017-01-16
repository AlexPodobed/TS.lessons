interface IContainer {
    getFirst(): any,
    getLast(): any
    addFirst(item: any): any,
    addLast(item: any): any,
    removeFirst(): any,
    removeLast(): any,
    getSize(): number,
    isEmpty(): boolean,
    clear(): void,
}

class Container implements IContainer {
    private _store: any[];

    constructor() {
        this._store = [];
    }

    getFirst() {
        return this._store[0]
    }

    getLast() {
        let size = this.getSize();
        return size > 0 ? this._store[size - 1] : undefined
    }

    addLast(item: any) {
        this._store.push(item);
        return item;
    }

    addFirst(item: any) {
        this._store.unshift(item);
        return item;
    }

    removeLast() {
        return this._store.pop();
    }

    removeFirst() {
        return this._store.shift();
    }

    getSize() {
        return this._store.length
    }

    isEmpty() {
        return this.getSize() === 0
    }

    clear() {
        this._store = [];
    }
}

let container = new Container();

container.addLast(1);
container.addLast(2);
container.addLast(3);

console.log(container.getSize());