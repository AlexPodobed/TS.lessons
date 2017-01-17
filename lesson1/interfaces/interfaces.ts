import {Point} from "../classes/shapes";

interface IPoint {
    x: number,
    y: number
}

interface ICircle {
    radius: number,
    point: IPoint,
    getArea(): number
}

interface IRect {
    point1: Point,
    point2: Point,
    getArea(): number
}

interface IPolyline {
    points: Point[],
    addPoint(point: Point): void
}

interface IPolygon {
    points: Point[]
}

interface IContainer {
    getFirst(): any,
    getLast(): any
    addFirst(item: any): any,
    addLast(item: any): any,
    removeFirst(): any,
    removeLast(): any,
    getSize(): number,
    isEmpty(): boolean,
    clear(cb:any): void,
    iterate(cb: any):void
}

export {IPoint, ICircle, IRect, IPolyline, IPolygon, IContainer}