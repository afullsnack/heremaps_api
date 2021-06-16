import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, createRef, useRef } from "react";
import withLayout from "../components/withLayout";
import styles from "../styles/Home.module.css";
import { initMap } from "../lib/map";
import { drawPropertyLine } from "../lib/drawPropertyLine";
import "isomorphic-fetch";

function Home() {
  const mapRef = useRef();
  useEffect(async () => {
    const here = {
      apiKey: "lGKTZBcbuYZSIFESrHSNqgvaJkMfobEPSafo_3ACcDo",
    };
    const style = ["reduced.night", "normal.day"];

    const hereTileUrl = `https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/${style[0]}/{z}/{x}/{y}/512/png8?apiKey=${here.apiKey}&ppi=320`;
    const hereNormalDayTile = `https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/${style[1]}/{z}/{x}/{y}/512/png8?apiKey=${here.apiKey}&ppi=320`;
    const hereStreetMap = `https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?apiKey=${here.apiKey}&ppi=320`;
    const nightLayer = L.tileLayer(hereTileUrl);
    const dayLayer = L.tileLayer(hereNormalDayTile);
    const streetLayer = L.tileLayer(hereStreetMap);
    const map = await L.map("map", {
      center: [7.5139517536387, 10.515956857701],
      zoom: 15,
      layers: [nightLayer, dayLayer],
    });
    map.attributionControl.addAttribution("&copy; HERE 2021");
    var baseMaps = {
      "Night Map": nightLayer,
      "Day Map": dayLayer,
    };

    var streetMap = {
      "Street Map": streetLayer,
    };

    L.control.layers(baseMaps, streetMap).addTo(map);

    var res = await fetch("/uploads/estates/prop_data.csv").then((r) =>
      r.text()
    );
    // console.log(res);
    var rows = res.split(/\r?\n|\r/).reverse();
    // console.log("Rows", rows);
    var parsedCords = rows[0].split(",");
    // console.log("parsed cords", parsedCords);
    let propertyObj;
    let plotNum = "10000";
    let cords = [];
    for (const i in rows) {
      // let rect = rows[i];
      if (plotNum === rows[i].split(",")[0]) {
        // cords += "\n";
        cords.push([
          rows[i].split(",").splice(1, 2)[0],
          rows[i].split(",").splice(1, 2)[1],
        ]);
        // console.log("Plotnumber: ", plotNum, "Cords: ", cords);
      } else {
        propertyObj = { plotNum, cords };
        // console.log(propertyObj);

        if (propertyObj.plotNum !== "10000") {
          new L.polygon(propertyObj.cords)
            .addTo(map)
            .bindPopup("plot Number: " + propertyObj.plotNum);
        } else {
          new L.polygon(propertyObj.cords).addTo(map);
        }

        plotNum = rows[i].split(",")[0];
        cords = [];
        // console.log("Plotnumber else: ", plotNum, "Cords: ", cords);
        continue;
      }
    }

    return () => {
      map.remove();
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
          href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
        />
        <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"></script>
        {/* <script src="../iframeheight.js"></script> */}
      </Head>

      <div
        ref={mapRef}
        id="map"
        style={{ height: "100%", width: "100%", backgroundColor: "teal" }}
      />
    </div>
  );
}

export default withLayout(Home);
