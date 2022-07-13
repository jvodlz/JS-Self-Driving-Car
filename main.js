const canvas=document.getElementById("myCanvas");
canvas.width=200;

// Draw car on canvas
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2,canvas.width*0.9);

// first arg for which lane (0 indexing)
const car = new Car(road.getLaneCenter(1),100,30,50);

// Animate
animate();

function animate(){
    car.update(road.borders);

    // Refreshes canvas ea. time car moves
    canvas.height=window.innerHeight;

    ctx.save();
    ctx.translate(0, -car.y + canvas.height*0.7);

    road.draw(ctx);
    car.draw(ctx);
    
    ctx.restore();
    requestAnimationFrame(animate);
}