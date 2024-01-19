const space = document.querySelector("#space"),
  drawer = space.getContext("2d");
let startTime = new Date().getTime();
const draw = () => {
  space.width = space.clientWidth;
  space.height = space.clientHeight;
  const currentTime = new Date().getTime(),
        elapsedTime = (currentTime - startTime) / 1000;
  const start = {
    x: space.width * 0.1,
    y: space.height * 0.9
  };
  const end = {
    x: space.width * 0.9,
    y: space.height * 0.1
  };
  const center = {
    x: space.width * 0.5,
    y: space.height * 0.5
  };

  const radius = Math.min(space.width, space.height) * 0.5;
  const length = (end.x - start.x) * 5;
  const arcRadius = length * 0.05,
        velocity = 0.3,
        angle = Math.PI + (elapsedTime * velocity);
        maxAngle = 2*Math.PI,
        modDistance = angle % maxAngle;
        adjustedAngle = modDistance >= Math.PI ? modDistance : maxAngle - modDistance;
  const x = center.x + arcRadius * Math.cos(adjustedAngle),
        y = center.y + arcRadius * Math.sin(adjustedAngle);
  
  drawer.strokeStyle = "orange";
  drawer.lineWidth = 5;
//  drawer.beginPath();
//  drawer.moveTo(start.x, start.y);
//  drawer.lineTo(end.x, end.y);
//  drawer.stroke();
  drawer.beginPath();
  drawer.arc(center.x, center.y, length * 0.05, Math.PI, 2 * Math.PI);
  drawer.stroke();

  drawer.fillStyle = "orange";
  drawer.beginPath();

  drawer.arc(x, y, length * 0.004, 0, Math.PI * 2);
  drawer.fill();
  drawer.stroke();
  
  requestAnimationFrame(draw);
};
draw();

