abstract class Printable {
    abstract printDetails(): void;
}

abstract class Shape extends Printable {
    static shapeCounter: number = 0;

    constructor() {
        super();
        Shape.shapeCounter++;
    }

    static printCount(): void {
        console.info(`Total amount: ${Shape.shapeCounter}`)
    }

}
interface IPoint {
    x: number,
    y: number
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

interface ICircle {
    radius: number,
    point: IPoint,
    getArea(): number
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

interface IRect {
    point1: Point,
    point2: Point,
    getArea():number
}

class Rect extends Shape implements IRect {
    public point1: Point;
    public point2: Point;

    constructor(point1: Point, point2: Point) {
        super();
        this.point1 = point1;
        this.point2 = point2;
    }

    getArea():number{
        return (this.point1.x + this.point2.x) * (this.point1.y + this.point2.y)
    }

    printDetails(): void {
        console.log(`I am Rect with 2 points and area: ${this.getArea()}`);
    }
}

interface IPolyline {
    points: Point[],
    addPoint(point: Point):void
}

class Polyline extends Shape implements IPolyline{
    public points:Point[];

    constructor(...points:Point[]){
        super();
        this.points = points;
    }

    addPoint(point:Point):void{
        this.points.push(point);
    }

    printDetails(): void {
        console.log(`I am Polyline with ${this.points.length} points`);
    }
}

interface IPolygon{
    points: Point[]
}

class Polygon extends Shape implements IPolygon{
    public points: Point[];

    constructor(...points:Point[]){
        super();
        this.points = points;
    }

    getArea():void{
        let len:number = this.points.length;
        let sum:number = 0;
        for(let i = 0; i < len; i++){
            let point1 = this.points[i];
            let point2 = this.points[((i + 1) !== len ? i + 1 : 0)];

            sum += (point1.x * point2.y - point1.y*point2.x);
        }
        console.log(sum/2)
    }

    printDetails(): void {
        console.log(`I am Polygon with ${this.points.length} points`);
    }
}


let point1: Point = new Point(1, 2);
let point2:Point = new Point(10, 3);
let point3:Point = new Point(20, 5);
let point4:Point = new Point(14, 11);

let circle: Circle = new Circle(point1, 10);
let rect:Rect = new Rect(point1, point2);
let polyline:Polyline = new Polyline(point1, point2);
let polygon:Polygon = new Polygon(point1, point2, point3, point4);

point1.printDetails();
point2.printDetails();
circle.printDetails();
rect.printDetails();

polyline.printDetails();
polyline.addPoint(point3);
polyline.printDetails();

polygon.getArea();

Shape.printCount();