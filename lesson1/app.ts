import Container from './classes/container';
import {Shape} from './classes/shapes';
import ShapeFactory from './services/shapes-factory';

const shapeContainer = new Container<Shape>();

for(let i = 0; i < 20; i++){
    let shape:Shape = ShapeFactory.create();
    shapeContainer.addLast(shape);
}

Container.printDivider();
Shape.printCount();
Container.printDivider();
shapeContainer.iterate((shape:any) => shape.printDetails());
Container.printDivider();
shapeContainer.clear(Shape.resetCounter);
Shape.printCount();