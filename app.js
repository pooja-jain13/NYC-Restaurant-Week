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
"title": "Duzan Mediterranean Grill",
"views": 63921,
"category": "Middle Eastern",
"location": "124-11 Steinway St, Long Island City, NY 11103",
"videos": [
{
"url": "https://www.tiktok.com/@devourpower/video/7231158637127847214",
"author": "devourpower",
"caption": "Wanna know a secret?",
"likes": 17300
},
{
"url": "https://www.tiktok.com/@duzannyc/video/7149237304664542507",
"author": "duzannyc",
"caption": "Crispy wings 🔥",
"likes": 25400
},
{
"url": "https://www.tiktok.com/@naw_sir/video/7261782354354801966",
"author": "naw_sir",
"caption": "Crispy wings 🔥",
"likes": 1123
}
]
},
"geometry": { "type": "Point", "coordinates": [-73.906470, 40.77196] }
},

{
"type": "Feature",
"properties": {
"title": "Felice 64",
"views": 47576,
"category": "Italian",
"location": "1166 1st Ave, New York, NY 10065",
"videos": [
{
"url": "https://www.tiktok.com/@alan_chengg/video/7543817135512980791",
"author": "alan_chengg",
"caption": "Wanna know a secret?",
"likes": 21
},
{
"url": "https://www.tiktok.com/@elda_sinani/video/7029139939883535662",
"author": "elda_sinani",
"caption": "Crispy wings 🔥",
"likes": 9
},
{
"url": "https://www.tiktok.com/@maria.guadagno/video/7108774530180746542",
"author": "maria.guadagno",
"caption": "Crispy wings 🔥",
"likes": 9
}
]
},
"geometry": { "type": "Point", "coordinates": [-73.959564, 40.762567] }
},

{
"type": "Feature",
"properties": {
"title": "Sybil’s Bakery and Restaurant",
"views": 465561,
"category": "Caribbean",
"location": "159-24 Hillside Ave., Jamaica, NY 11432",
"videos": [
{
"url": "https://www.tiktok.com/@hungryartistny/video/7445068164905340191",
"author": "hungryartistny",
"caption": "Wanna know a secret?",
"likes": 33300
},
{
"url": "https://www.tiktok.com/@kaylee_dharry/video/7086999903053991214",
"author": "kaylee_dharry",
"caption": "Crispy wings 🔥",
"likes": 599
},
{
"url": "https://www.tiktok.com/@shopwips/video/7358154797695946026",
"author": "shopwips",
"caption": "Crispy wings 🔥",
"likes": 28
}
]
},
"geometry": { "type": "Point", "coordinates": [-73.801868, 40.707792] }
},

{
"type": "Feature",
"properties": {
"title": "El Malecon",
"views": 160244,
"category": ["Caribbean", "Latin American"],
"location": "4141 Broadway, New York, NY 10033",
"videos": [
{
"url": "https://www.tiktok.com/@priyas_plates/video/7591213033544764685?q=malecon%20restaurant%20nyc&t=17771360392841",
"author": "priyas_plates",
"caption": "Wanna know a secret?",
"likes": 53
},
{
"url": "https://www.tiktok.com/@good.bytes/video/7596849465600773406?q=malecon%20restaurant%20nyc&t=1777136039284",
"author": "good.bytes",
"caption": "Crispy wings 🔥",
"likes": 57000
},
{
"url": "https://www.tiktok.com/@food.and.footprints/video/7563406932640353549?q=malecon%20restaurant%20nyc&t=1777136039284",
"author": "food.and.footprints",
"caption": "Crispy wings 🔥",
"likes": 1621
}
]
},
"geometry": { "type": "Point", "coordinates": [-73.938620, 40.846401] }
},

{
"type": "Feature",
"properties": {
"title": "Ariemma’s Italian Deli",
"views": 137464,
"category": "Delicatessen",
"location": "1791 Hylan BlvdStaten Island, NY 10305",
"videos": [
{
"url": "https://www.tiktok.com/@meals_by_cug/video/7080561315336621358",
"author": "meals_by_cug",
"caption": "Wanna know a secret?",
"likes": 52400
},
{
"url": "https://www.tiktok.com/@secretsofpowerfulwomen/video/7331505396227525934",
"author": "secretsofpowerfulwomen",
"caption": "Crispy wings 🔥",
"likes": 26
},
{
"url": "https://www.tiktok.com/@ariemmmasgardencenter/video/7585588559231356190",
"author": "ariemmmasgardencenter",
"caption": "Crispy wings 🔥",
"likes": 144
}
]
},
"geometry": { "type": "Point", "coordinates": [-74.093421, 40.585503] }
},

{
"type": "Feature",
"properties": {
"title": "Dos Toros Taqueria - Union Square",
"views": 7804,
"category": "Mexican",
"location": "137 4th Ave, New York, NY 10003",
"videos": [
{
"url": "https://www.tiktok.com/@eatsbynyc/video/7324830008042589482",
"author": "eatsbynyc",
"caption": "Wanna know a secret?",
"likes": 253
},
{
"url": "https://www.tiktok.com/@theerichammer/video/7322145241845239082",
"author": "theerichammer",
"caption": "Crispy wings 🔥",
"likes": 1701
},
{
"url": "https://www.tiktok.com/@christinetao/video/7623946036263914766",
"author": "christinetao",
"caption": "Crispy wings 🔥",
"likes": 751
}
]
},
"geometry": { "type": "Point", "coordinates": [-73.9896812, 40.7335742] }
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
        1000, 10,           // If views are 0, radius is 2px
        2000000, 60           // If views are 1000, radius grows to 20px
      ],
'circle-color': [
'match',
['get', 'category'],
'Middle Eastern', '#e63946',
'Mexican', '#2a9d8f',
'comfort', '#f4a261',
'Italian', '#5d6eeb',
'Caribbean', '#b83be9',
'Latin American', '#e29fbf',
'Delicatessen', '#9fe2c9',
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