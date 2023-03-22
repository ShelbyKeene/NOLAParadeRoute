
// This array contains the coordinates for the parade route in New Orleans.
const parade = [
  [-90.06777156653771, 29.952651251773844 ],
  [-90.06568344321505, 29.955425368493767],
  [-90.06391294630575, 29.957422790757015],
  [-90.06477935968691, 29.958016787674914],
  [-90.06754434847718, 29.954890104729344],
  [-90.06844843200534, 29.955477589194548],
  [-90.06639917600819, 29.95782096490734],
  [-90.0635739149827, 29.955960629376378],
  [-90.06517467311814, 29.954177214281806],
  [-90.06714115880452, 29.95197864379801],
  [-90.06604974395766, 29.951228288253052],
  [-90.0659470265266, 29.948435968272356],
  [-90.06333273813982, 29.94804887372301]
];

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlbGJ5a2VlbmUiLCJhIjoiY2xmNDhzZDJqMGQyaTQzbzc3M254Y3pqcyJ9.yxMaDo8JYarFlv9r54O2ig';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-90.0716693330329, 29.951055127758398],
  zoom: 14,
});

var marker = new mapboxgl.Marker()
  .setLngLat(parade[0])
  .addTo(map);
// counter here represents the index of the current parade route
let counter = 0;
function move() {
  marker.setLngLat(parade[counter])
  counter = (counter + 1)% parade.length;
  setTimeout(move,1000);
}
move();
