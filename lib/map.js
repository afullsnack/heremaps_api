export const initMap = (H, mapRef) => {
  //Step 1: initialize communication with the platform
  // In your own code, replace variable window.apikey with your own apikey
  var platform = new H.service.Platform({
    apikey: "lGKTZBcbuYZSIFESrHSNqgvaJkMfobEPSafo_3ACcDo",
  });
  var defaultLayers = platform.createDefaultLayers();

  //Step 2: initialize a map
  var map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
    center: { lat: 9.05785, lng: 7.49508 },
    zoom: 8.5,
    pixelRatio: window.devicePixelRatio || 1,
  });
  // add a resize listener to make sure that the map occupies the whole container

  //Step 3: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

  // Create the default UI components
  var ui = H.ui.UI.createDefault(map, defaultLayers);

  //Initialize router and geocoder
  const router = platform.getRoutingService();
  const geocoder = platform.getGeocodingService();
  return { map, router, geocoder };
};
