import {Shape,Point, Circle, Rect, Polyline, Polygon} from "../classes/shapes";

const ShapeFactory = {
    types: ['point', 'circle', 'rect', 'polyline', 'polygon'],

    get random(): number {
        return this.getRandomNumber(1, 10);
    },

    get randomType():string{
        return  this.types[this.getRandomNumber(0,this.types.length - 1)]
    },

    getRandomNumber(min: number, max: number): number{
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    generatePointsArr(amount: number): Point[]{
        let arr = [];
        for(let i = 0; i < amount; i++){
            arr.push(this.create('point'))
        }
        return arr;
    },

    create(type: string = this.randomType):Shape{
        let instance;

        switch (type) {
            case "point":
                instance = new Point(this.random, this.random);
                break;
            case "circle":
                instance = new Circle(this.create('point'), this.random);
                break;
            case "rect":
                instance = new Rect(this.create('point'), this.create('point'));
                break;
            case "polyline":
                let polylinePoints:Point[] = this.generatePointsArr(this.getRandomNumber(2,5));
                instance = new Polyline(...polylinePoints);
                break;
            case "polygon":
                let poligonPoints:Point[] = this.generatePointsArr(this.getRandomNumber(4,8));
                instance = new Polygon(...poligonPoints);
                break;

        }
        return instance;
    }
};

export default ShapeFactory;