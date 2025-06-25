---
show: true
width: 4
date: 2020-01-12 00:01:00 +0800
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Visitor Map</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Leaflet map library -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <style>
    body { margin: 0; font-family: system-ui, sans-serif; }
    /* Wrapper keeps the map and the overlayed counter together */
    #map-wrapper { position: relative; width: 100%; height: 500px; }
    /* The actual map container */
    #visitors-map { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

    /* Counter badge */
    #visitor-info {
      position: absolute;
      top: 1rem;
      left: 1rem;
      z-index: 999; /* above the map */
      background: #ffffffcc;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: bold;
      backdrop-filter: blur(2px);
    }
  </style>
</head>
<body>
  <div id="map-wrapper">
    <div id="visitor-info">🎉 Visitors: <span id="visitor-count">0</span></div>
    <div id="visitors-map"></div>
  </div>

  <!-- Leaflet JS -->
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script>
    // 1. Initialize a world map (OpenStreetMap tiles)
    const map = L.map('visitors-map', {
      worldCopyJump: true,
      attributionControl: false
    }).setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 5
    }).addTo(map);

    // 2. Fetch visitor statistics and plot them
    async function loadVisitorStats() {
      /*
       * Replace the endpoint below with your own API that returns JSON like:
       * {
       *   "total": 1234,
       *   "locations": [
       *     { "lat": 31.2, "lon": 121.5 },
       *     { "lat": 51.5, "lon": -0.13 },
       *     ...
       *   ]
       * }
       */
      const res = await fetch('/api/visitors');
      const data = await res.json();

      // Update counter
      document.getElementById('visitor-count').textContent = data.total ?? 0;

      // Render each visitor location as a small red dot
      (data.locations ?? []).forEach(({ lat, lon }) => {
        L.circleMarker([lat, lon], {
          radius: 4,
          weight: 0,
          fillOpacity: 0.8,
          color: '#e02424'
        }).addTo(map);
      });
    }

    loadVisitorStats();
  </script>
</body>
</html>
