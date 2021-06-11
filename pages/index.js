import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, createRef } from "react";
import withLayout from "../components/withLayout";
import styles from "../styles/Home.module.css";
import { initMap } from "../lib/map";

function Home() {
  const mapRef = createRef();
  // const [map, setmap] = useState(null);
  useEffect(() => {
    /**
     * Boilerplate map initialization code starts below:
     */

    if (!mapRef.current) return;

    const H = window.H;

    var { map } = initMap(H, mapRef);

    // marker location
    var markerLocation = { lat: 9, lng: 7 };
    // icon
    var icon = new H.map.Icon("/favicon.ico", { size: { w: 40, h: 40 } });
    // initialize marker location
    var marker = new H.map.Marker(markerLocation, { icon: icon });
    map.addObject(marker);
    map.setCenter(markerLocation);
    const provider = map.getBaseLayer().getProvider();

    // Now use the map as required...
    window.addEventListener("resize", () => map.getViewPort().resize());
    window.onload = function () {
      map.setCenter({ lat: 9, lng: 7 });
      map.setZoom(8.5);
    };

    // setmap(map);

    return () => {
      map.dispose();
    };
  }, [mapRef]);

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
        <link
          rel="stylesheet"
          type="text/css"
          href="https://js.api.here.com/v3/3.1/mapsjs-ui.css"
        />
        {/* <script type="text/javascript" src="../test-credentials.js"></script> */}
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
        <script>window.ENV_VARIABLE = 'developer.here.com'</script>
        {/* <script src="../iframeheight.js"></script> */}
      </Head>

      <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
    </div>
  );
}

export default withLayout(Home);
