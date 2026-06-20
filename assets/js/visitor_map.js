(function () {
    var container = document.getElementById("visitor-world-map");
    if (!container || !window.d3 || !window.topojson) {
        return;
    }

    var width = 900;
    var height = 440;
    var projection = d3.geoNaturalEarth1()
        .scale(165)
        .translate([width / 2, height / 2 + 8]);
    var path = d3.geoPath(projection);
    var dataUrl = container.getAttribute("data-map-url");
    var fallbackUrl = container.getAttribute("data-fallback-url");

    var svg = d3.select(container)
        .append("svg")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("role", "img")
        .attr("aria-label", "World map showing visitor distribution");

    svg.append("rect")
        .attr("class", "visitor-map-ocean")
        .attr("width", width)
        .attr("height", height);

    function fetchJsonWithTimeout(url, timeoutMs) {
        var controller = new AbortController();
        var timeout = setTimeout(function () {
            controller.abort();
        }, timeoutMs);

        return fetch(url, {
            cache: "no-store",
            signal: controller.signal
        }).then(function (response) {
            clearTimeout(timeout);
            if (!response.ok) {
                throw new Error("Failed to load " + url);
            }
            return response.json();
        });
    }

    function normalizeVisitors(payload) {
        var countryCenters = {
            AU: { name: "Australia", latitude: -25.2744, longitude: 133.7751 },
            CA: { name: "Canada", latitude: 56.1304, longitude: -106.3468 },
            CN: { name: "China", latitude: 35.8617, longitude: 104.1954 },
            DE: { name: "Germany", latitude: 51.1657, longitude: 10.4515 },
            FR: { name: "France", latitude: 46.2276, longitude: 2.2137 },
            GB: { name: "United Kingdom", latitude: 55.3781, longitude: -3.4360 },
            HK: { name: "Hong Kong", latitude: 22.3193, longitude: 114.1694 },
            JP: { name: "Japan", latitude: 36.2048, longitude: 138.2529 },
            SG: { name: "Singapore", latitude: 1.3521, longitude: 103.8198 },
            TW: { name: "Taiwan", latitude: 23.6978, longitude: 120.9605 },
            US: { name: "United States", latitude: 37.0902, longitude: -95.7129 }
        };
        var rows = Array.isArray(payload) ? payload : (payload.locations || payload.visitors || payload.data || []);

        if (!Array.isArray(rows) && payload.countries) {
            rows = Object.keys(payload.countries).map(function (code) {
                return { countryCode: code, count: payload.countries[code] };
            });
        }

        if (!Array.isArray(rows) && payload && typeof payload === "object") {
            rows = Object.keys(payload).filter(function (key) {
                return typeof payload[key] === "number";
            }).map(function (code) {
                return { countryCode: code, count: payload[code] };
            });
        }

        return rows.map(function (item) {
            var code = String(item.countryCode || item.country_code || item.code || item.country || "").toUpperCase();
            var center = countryCenters[code] || {};
            return {
                name: item.name || center.name || item.country || item.city || item.countryCode || "Visitor",
                latitude: Number(item.latitude || item.lat || center.latitude),
                longitude: Number(item.longitude || item.lng || item.lon || center.longitude),
                count: Number(item.count || item.views || item.value || 1)
            };
        }).filter(function (item) {
            return Number.isFinite(item.latitude) && Number.isFinite(item.longitude);
        });
    }

    function drawVisitors(visitors) {
        var maxCount = d3.max(visitors, function (d) { return d.count; }) || 1;
        var radius = d3.scaleSqrt().domain([1, maxCount]).range([5, 15]);

        svg.selectAll(".visitor-map-point").remove();
        svg.append("g")
            .selectAll("circle")
            .data(visitors)
            .enter()
            .append("circle")
            .attr("class", "visitor-map-point")
            .attr("cx", function (d) { return projection([d.longitude, d.latitude])[0]; })
            .attr("cy", function (d) { return projection([d.longitude, d.latitude])[1]; })
            .attr("r", function (d) { return radius(d.count); })
            .append("title")
            .text(function (d) { return d.name + ": " + d.count; });
    }

    function loadVisitors() {
        return fetchJsonWithTimeout(dataUrl, 5000)
            .then(function (payload) {
                var visitors = normalizeVisitors(payload);
                if (!visitors.length) {
                    throw new Error("Visitor API returned no plottable coordinates");
                }
                container.setAttribute("data-source", "worker");
                return visitors;
            })
            .catch(function () {
                container.setAttribute("data-source", "fallback");
                return fetchJsonWithTimeout(fallbackUrl, 5000);
            })
            .then(normalizeVisitors);
    }

    var world;
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(function (loadedWorld) {
        world = loadedWorld;
        var countries = topojson.feature(world, world.objects.countries).features;

        svg.append("g")
            .selectAll("path")
            .data(countries)
            .enter()
            .append("path")
            .attr("class", "visitor-map-country")
            .attr("d", path);

        return loadVisitors();
    }).then(function (visitors) {
        drawVisitors(visitors);
    }).catch(function () {
        container.classList.add("visitor-world-map-error");
    });
}());
