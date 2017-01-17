import Container from './service/container';
import ShapeFactory from './service/shapes-factory';
import {Shape} from './classes/shapes';

const shapeContainer = new Container();

for(let i = 0; i < 20; i++){
    let shape = ShapeFactory.create();
    shapeContainer.addLast(shape);
}

Container.printDivider();
Shape.printCount();
Container.printDivider();
shapeContainer.iterate((shape:any) => shape.printDetails());
Container.printDivider();
shapeContainer.clear(Shape.resetCounter);
Shape.printCount();