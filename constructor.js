function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(10);

//Circle.location ={x:1};
// 
Object.keys(Circle);