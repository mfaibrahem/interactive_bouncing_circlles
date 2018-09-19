import {Circle, c, UIcanvas} from './circle';

function resizeCanvas() {
  UIcanvas.width = window.innerWidth;
  UIcanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', function() {
  resizeCanvas();
  generateCircles();
});



let circleArray;


// mouse move evnt
let mouse = {
  x: undefined,
  y: undefined
};
let maxRadius = Math.random()*20 + 30;

UIcanvas.addEventListener('mousemove', moveCircles);
function moveCircles(e) {
  mouse.x = e.x;
  mouse.y = e.y;
}


function generateCircles() {
  circleArray = [];
  for (let i=0; i<500; i++) {
    let r = Math.random()*3 + 1;
    let x = Math.random()*(window.innerWidth-2*r) + r;
    let y = Math.random()*(window.innerHeight-2*r) + r;
    let dx = (Math.random()-.5)*2;
    let dy = (Math.random()-.5)*1; 
  
    circleArray.push(new Circle(x, y, r, dx, dy));
  }
}

generateCircles();


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  circleArray.forEach(circle => {
    circle.update

    // interact with circle
    if (mouse.x - circle.x < 50 && mouse.x - circle.x > -50 &&
        mouse.y - circle.y < 50 && mouse.y - circle.y > -50 &&
        circle.r < maxRadius
       ) {
      circle.r += 1;
    } else if (circle.r > circle.minR) {
      circle.r -= 1;
    }
    
  });
}

export { animate };