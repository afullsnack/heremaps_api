export function drawPropertyLine(linestring, H, map, cords) {
  let polygon;
  // Initialize a linestring and add all the points to it:
  // var linestring = new H.geo.LineString();
  cords.forEach((point) => {
    // console.log(point);
    linestring.pushPoint(point);
  });

  // if (polygon !== undefined) {
  //   map.removeObject(polygon);
  // }

  polygon = new H.map.Polygon(linestring, {
    style: {
      fillColor: "#9b1d20",
      strokeColor: "#4A86FF",
      lineWidth: 2,
    },
  });

  // Add the polyline to the map:
  map.addObject(polygon);
  map.setCenter(cords[cords.length - 1]);
  map.getViewModel().setLookAtData({
    zoom: 20,
    bounds: polygon.getBoundingBox(),
  });
}
