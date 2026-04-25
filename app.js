mapboxgl.accessToken = 'pk.eyJ1IjoicGphaW42ODAxIiwiYSI6ImNtbDA3cHZ4bDBhNXkzbHEyMjE5ODR1azUifQ.zkm5kg40QRzCBkbFqr6ZnA';

const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v11',
center: [-73.98, 40.74],
zoom: 11
});

/* =========================
   RESTAURANT DATA
========================= */

const restaurantData = {
"type": "FeatureCollection",
"features": [

{
"type": "Feature",
"properties": {
"title": "Atomic Wings",
"views": 367305,
"category": "wings",
"location": "1227 Fulton St, Brooklyn, NY",
"videos": [
{
"url": "https://www.tiktok.com/@solissecrets/video/7562976876096916767",
"author": "solissecrets",
"caption": "Wanna know a secret?",
"likes": 557
},
{
"url": "https://www.tiktok.com/@eliteeatswithp/video/7590125551122156814",
"author": "eliteeatswithp",
"caption": "Crispy wings 🔥",
"likes": 563
}
]
},
"geometry": { "type": "Point", "coordinates": [-73.95, 40.68] }
},

{
"type": "Feature",
"properties": {
"title": "Cheese Grille",
"views": 83394,
"category": "comfort",
"location": "188 Allen St, NYC",
"videos": [
{
"url": "https://www.tiktok.com/@cheesegrille/video/7192657732472786219",
"author": "cheesegrille",
"caption": "Celebrities visited 👀",
"likes": 105
}
]
},
"geometry": { "type": "Point", "coordinates": [-73.988, 40.722] }
},

{
"type": "Feature",
"properties": {
"title": "Calexico",
"views": 1000,
"category": "mexican",
"location": "Greenpoint, Brooklyn",
"videos": [
{
"url": "https://www.tiktok.com/@seewithme_x/video/7627344861070396685",
"author": "seewithme_x",
"caption": "Best tacos 🌮",
"likes": 19
}
]
},
"geometry": { "type": "Point", "coordinates": [-73.95, 40.73] }
}

]
};

/* =========================
   MAP LOAD
========================= */

map.on('load', () => {

map.addSource('restaurants', {
type: 'geojson',
data: restaurantData
});

map.addLayer({
id: 'restaurant-points',
type: 'circle',
source: 'restaurants',
paint: {
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['get', 'views'], // Access the "views" property from your data
        1000, 2,           // If views are 0, radius is 2px
        2000000, 60           // If views are 1000, radius grows to 20px
      ],
'circle-color': [
'match',
['get', 'category'],
'wings', '#e63946',
'mexican', '#2a9d8f',
'comfort', '#f4a261',
'#888'
],
'circle-stroke-width': 2,
'circle-stroke-color': '#fff'
}
});

/* =========================
   POPUP (TIKTOK)
========================= */

map.on('click', 'restaurant-points', (e) => {

const props = e.features[0].properties;
const coords = e.features[0].geometry.coordinates.slice();

let videosHTML = '';

props.videos.forEach(video => {
videosHTML += `
<div class="tiktok-card">
  <iframe 
    src="${video.url.replace('/video/', '/embed/')}" 
    width="100%" 
    height="200" 
    frameborder="0"
    allowfullscreen>
  </iframe>
  <div class="tiktok-meta">
    <strong>@${video.author}</strong><br>
    ${video.caption}<br>
    ❤️ ${video.likes}
  </div>
</div>
`;
});

new mapboxgl.Popup()
.setLngLat(coords)
.setHTML(`
<div>
  <div class="popup-title">${props.title}</div>
  <div class="popup-location">${props.location}</div>
  ${videosHTML}
</div>
`)
.addTo(map);

});

});

/* =========================
   FILTER FUNCTION
========================= */

function setFilter(category, btn) {

if (category === 'all') {
map.setFilter('restaurant-points', null);
} else {
map.setFilter('restaurant-points', ['==', ['get', 'category'], category]);
}

/* Active button UI */
document.querySelectorAll('.filter-btn')
.forEach(b => b.classList.remove('active'));

btn.classList.add('active');
}