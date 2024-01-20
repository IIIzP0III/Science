const space = document.querySelector("#space"),
  drawer = space.getContext("2d");
let startTime = new Date().getTime();
const draw = () => {
  space.width = space.clientWidth;
  space.height = space.clientHeight;
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

  const radius = Math.min(space.width, space.height) * 1.5;
  const length = (end.x - start.x) * 4;
  const initialArcRadius = length * 0.03;
  const currentTime = new Date().getTime(),
    elapsedTime = (currentTime - startTime) / 1000;
  const arcRadius = length * 0.05,
    maxAngle = 2 * Math.PI;

  for (i = 1; i <= 21; i++) {
    const o = i / 5,
      velocity = 0.3 - o / 5,
      angle = Math.PI + elapsedTime * velocity,
      modDistance = angle % maxAngle;
    adjustedAngle =
      modDistance >= Math.PI ? modDistance : maxAngle - modDistance;
    const x = center.x + initialArcRadius * o * Math.cos(adjustedAngle),
      y = center.y + initialArcRadius * o * Math.sin(adjustedAngle);
    drawer.strokeStyle = "orange";
    drawer.lineWidth = 1;
    drawer.beginPath();

    drawer.arc(center.x, center.y, initialArcRadius * o, Math.PI, 2 * Math.PI);
    drawer.stroke();

    drawer.fillStyle = "orange";
    drawer.beginPath();

    drawer.arc(x, y, initialArcRadius * 0.05, 0, Math.PI * 2);
    drawer.fill();
    drawer.stroke();
  }
  requestAnimationFrame(draw);
};
draw();

