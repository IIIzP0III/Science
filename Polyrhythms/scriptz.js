const space = document.querySelector("#space"),
  drawer = space.getContext("2d");
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
  drawer.strokeStyle = "orange";
  drawer.lineWidth = 5;
  drawer.beginPath();
  drawer.moveTo(start.x, start.y);
  drawer.lineTo(end.x, end.y);
  drawer.stroke();
  const radius = Math.min(space.width, space.height) * 0.5;
  const length = end.x - start.x;
  drawer.beginPath();
  drawer.arc(center.x, center.y, length * 0.05, Math.PI, 2 * Math.PI);
  drawer.stroke();
};
draw();

