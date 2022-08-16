const carCanvas=document.getElementById("carCanvas");
carCanvas.width=200;
const networkCanvas=document.getElementById("networkCanvas");
networkCanvas.width=300;

// Draw car on canvas
const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");
const road = new Road(carCanvas.width/2,carCanvas.width*0.9);

// User's car
// first arg for which lane (0 indexing)
const car = new Car(road.getLaneCenter(1),100,30,50,"AI");

const traffic=[
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2)
];

// Animate
animate();

// to animate Neural Network, animate(time), and write Visualizer.js
function animate(){
    // Update cars in traffic
    for(let i=0; i<traffic.length;i++){
        traffic[i].update(road.borders,[]);  // Pass empty -> Traffic NOT collide with itself
    }
    car.update(road.borders,traffic);

    // Refreshes canvas ea. time car moves
    carCanvas.height=window.innerHeight;
    networkCanvas.height=window.innerHeight;

    carCtx.save();
    carCtx.translate(0, -car.y + carCanvas.height*0.7);

    road.draw(carCtx);

    // Draw traffic
    for(let i=0;i<traffic.length;i++){
        traffic[i].draw(carCtx,"red");
    }

    car.draw(carCtx, "blue");
    
    carCtx.restore();
    // networkCtx.lineDashOffset = -time/50;
    // Visualizer.drawNetwork(networkCtx, car.brain);
    requestAnimationFrame(animate);
}