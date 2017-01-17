import {Printable} from "./base";
import {IPoint, ICircle, IRect, IPolyline, IPolygon} from "../interfaces/interfaces";

abstract class Shape extends Printable {
    static shapeCounter: number = 0;

    constructor() {
        super();
        Shape.shapeCounter++;
    }

    static printCount(): void {
        console.info(`Total amount: ${Shape.shapeCounter}`)
    }

    static resetCounter():void{
        Shape.shapeCounter = 0;
    }

}

class Point extends Shape implements IPoint {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
    }

    printDetails(): void {
        console.log(`I am Point with coors: [${this.x}, ${this.y}]`)
    }
}

class Circle extends Shape implements ICircle {
    static PI: number = 3.14;
    public radius: number;
    public point: Point;

    constructor(point: Point, radius: number) {
        super();
        this.radius = radius;
        this.point = point;
    }

    getArea() {
        return Circle.PI * Math.pow(this.radius, 2)
    }

    printDetails(): void {
        console.log(`I am Circle with coors: [${this.point.x}, ${this.point.y}] and area: ${this.getArea()}`);
    }
}

class Rect extends Shape implements IRect {
    public point1: Point;
    public point2: Point;

    constructor(point1: Point, point2: Point) {
        super();
        this.point1 = point1;
        this.point2 = point2;
    }

    getArea(): number {
        return (this.point1.x + this.point2.x) * (this.point1.y + this.point2.y)
    }

    printDetails(): void {
        console.log(`I am Rect with 2 points and area: ${this.getArea()}`);
    }
}

class Polyline extends Shape implements IPolyline {
    public points: Point[];

    constructor(...points: Point[]) {
        super();
        this.points = points;
    }

    addPoint(point: Point): void {
        this.points.push(point);
    }

    printDetails(): void {
        console.log(`I am Polyline with ${this.points.length} points`);
    }
}

class Polygon extends Shape implements IPolygon {
    public points: Point[];

    constructor(...points: Point[]) {
        super();
        this.points = points;
    }

    getArea(): void {
        let len: number = this.points.length;
        let sum: number = 0;
        for (let i = 0; i < len; i++) {
            let point1 = this.points[i];
            let point2 = this.points[((i + 1) !== len ? i + 1 : 0)];

            sum += (point1.x * point2.y - point1.y * point2.x);
        }
        console.log(sum / 2)
    }

    printDetails(): void {
        console.log(`I am Polygon with ${this.points.length} points`);
    }
}

export {Shape, Point, Circle, Rect, Polyline, Polygon}