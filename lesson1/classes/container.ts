import {IContainer} from "../interfaces/interfaces";

class Container <T> implements IContainer<T> {
    private _store: T[];

    constructor() {
        this._store = [];
    }

    static printDivider(): void {
        console.log(new Array(50).join('*'));
    }

    getFirst() {
        return this._store[0]
    }

    getLast() {
        let size = this.getSize();
        return size > 0 ? this._store[size - 1] : undefined
    }

    addLast(item: T) {
        this._store.push(item);
        return item;
    }

    addFirst(item: T) {
        this._store.unshift(item);
        return item;
    }

    removeLast() {
        return this._store.pop();
    }

    removeFirst() {
        return this._store.shift();
    }

    iterate(cb: (item: T) => void) {
        this._store.map(cb);
    }

    getSize() {
        return this._store.length
    }

    isEmpty() {
        return this.getSize() === 0
    }

    clear(cb?: any) {
        this._store = [];
        if (typeof cb === 'function') {
            cb();
        }
    }
}

export default Container