import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, createRef } from "react";
import withLayout from "../components/withLayout";
import styles from "../styles/Home.module.css";
import { initMap } from "../lib/map";
import { drawPropertyLine } from "../lib/drawPropertyLine";
import "isomorphic-fetch";

function Home() {
  const mapRef = createRef();
  // const [map, setmap] = useState(null);
  // useEffect(async () => {
  //   /**
  //    * Boilerplate map initialization code starts below:
  //    */

  //   if (!mapRef.current) return;

  //   const H = window.H;

  //   var { map, behavior } = initMap(H, mapRef);

  //   // marker location
  //   var markerLocation = { lat: 9, lng: 7 };
  //   // icon
  //   var icon = new H.map.Icon("/favicon.ico", { size: { w: 40, h: 40 } });
  //   // initialize marker location
  //   var marker = new H.map.Marker(markerLocation, {
  //     icon: icon,
  //     volatility: true,
  //   });
  //   marker.draggable = true;
  //   map.addObject(marker);
  //   // map.setCenter(markerLocation);

  //   // marker event listeners
  //   // Add event listeners for marker movement
  //   map.addEventListener(
  //     "dragstart",
  //     (evt) => {
  //       if (evt.target instanceof H.map.Marker) behavior.disable();
  //     },
  //     false
  //   );
  //   map.addEventListener(
  //     "dragend",
  //     (evt) => {
  //       if (evt.target instanceof H.map.Marker) {
  //         behavior.enable();
  //         // calculateIsoline();
  //       }
  //     },
  //     false
  //   );
  //   map.addEventListener(
  //     "drag",
  //     (evt) => {
  //       const pointer = evt.currentPointer;
  //       if (evt.target instanceof H.map.Marker) {
  //         evt.target.setGeometry(
  //           map.screenToGeo(pointer.viewportX, pointer.viewportY)
  //         );
  //         // console.log(`lat: ${pointer.viewportX}, lng: ${pointer.viewportY}`);
  //       }
  //     },
  //     false
  //   );

  //   // draw line
  //   const lineString = new H.geo.LineString();

  //   const provider = map.getBaseLayer().getProvider();
  //   provider.getConfig;

  //   var res = await fetch("/prop_data.csv").then((r) => r.text());
  //   // console.log(res);
  //   var rows = res.split(/\r?\n|\r/);
  //   // console.log("Rows", rows);
  //   var parsedCords = rows[0].split(",");
  //   // console.log("parsed cords", parsedCords);
  //   let propertyObj;
  //   let plotNum = "14";
  //   let cords = [];
  //   for (const i in rows) {
  //     // let rect = rows[i];
  //     if (plotNum === rows[i].split(",")[0]) {
  //       // cords += "\n";
  //       cords.push({
  //         lat: rows[i].split(",").splice(1, 2)[0],
  //         lng: rows[i].split(",").splice(1, 2)[1],
  //       });
  //       // console.log("Plotnumber: ", plotNum, "Cords: ", cords);
  //     } else {
  //       propertyObj = { plotNum, cords };
  //       console.log(propertyObj);
  //       // drawPropertyLine(lineString, H, map, propertyObj.cords);
  //       // break;
  //       plotNum = rows[i].split(",")[0];
  //       cords = [];
  //       // cords.push({
  //       //   lat: rows[i].split(",").splice(1, 2)[0],
  //       //   lng: rows[i].split(",").splice(1, 2)[1],
  //       // });
  //       // console.log("Plotnumber else: ", plotNum, "Cords: ", cords);
  //       continue;
  //     }
  //   }

  //   // setmap(map);
  //   // Now use the map as required...
  //   window.addEventListener("resize", () => map.getViewPort().resize());
  //   window.onload = function () {
  //     //  map.setCenter({ lat: 9, lng: 7 });
  //     map.setZoom(25);
  //   };

  //   return () => {
  //     map.dispose();
  //   }
  // }, [mapRef]);

  useEffect(
    () => {
      const here = {
        apiKey: "lGKTZBcbuYZSIFESrHSNqgvaJkMfobEPSafo_3ACcDo",
      };
      const style = "normal.day";
      var mymap = L.map(mapRef.current).setView(
        [7.5139517536387, 10.515956857701],
        13
      );
      L.tileLayer(
        `https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/${style}/{z}/{x}/{y}/512/png8?apiKey=${here.apiKey}&ppi=320`,
        {
          attribution:
            'Map data &copy; <a href="https://www.here.com/">heremaps</a>',
          // maxZoom: 18,
          zoom: 11,
          // id: "satellite.day",
          // tileSize: 512,
          // zoomOffset: -1,
          // accessToken: "lGKTZBcbuYZSIFESrHSNqgvaJkMfobEPSafo_3ACcDo",
        }
      ).addTo(mymap);
      var polygon = L.polygon([
        [7.5139517536387, 10.515956857701],
        [7.5140801414507, 10.515921628155],
        [7.5140617264628, 10.515857799994],
        [7.5139342039181, 10.515891686421],
        [7.5139517536387, 10.515956857701],
      ]).addTo(mymap);
      polygon.bindPopup("I am a polygon.");
    },
    { mapRef }
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Map at a specified location</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
        />
        <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />

        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="https://js.api.here.com/v3/3.1/mapsjs-ui.css"
        />
        <script
          type="text/javascript"
          src="https://js.api.here.com/v3/3.1/mapsjs-core.js"
        ></script>
        <script
          type="text/javascript"
          src="https://js.api.here.com/v3/3.1/mapsjs-service.js"
        ></script>
        <script
          type="text/javascript"
          src="https://js.api.here.com/v3/3.1/mapsjs-ui.js"
        ></script>
        <script
          type="text/javascript"
          src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"
        ></script>
        <script>window.ENV_VARIABLE = 'developer.here.com'</script> */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
        {/* Makr sure this comes after css file */}
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossorigin=""
        ></script>
        {/* <script src="../iframeheight.js"></script> */}
      </Head>

      <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
    </div>
  );
}

export default withLayout(Home);
