"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { miel } from "@/app/content";

const centreFrance: [number, number] = [46.4, 2.5];

const pinIcon = L.divIcon({
  className: "",
  html: `<div style="
      width:26px;height:26px;border-radius:50% 50% 50% 0;
      background:#C9922E;transform:rotate(-45deg);
      box-shadow:0 2px 6px rgba(59,42,32,0.4);
      border:2px solid #FAF6EC;
    "></div>`,
  iconSize: [26, 26],
  iconAnchor: [13, 26],
  popupAnchor: [0, -24],
});

/** Anime un léger zoom depuis un niveau plus large à l'apparition de la carte. */
function ZoomOnAppear() {
  const map = useMap();
  const done = useRef(false);

  useEffect(() => {
    const container = map.getContainer();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          map.setView(centreFrance, 4.4, { animate: false });
          window.setTimeout(() => {
            map.flyTo(centreFrance, 5.6, { duration: 1.4 });
          }, 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [map]);

  return null;
}

export function Carte() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[360px] rounded-[2rem] bg-sauge/10 animate-pulse" />
    );
  }

  return (
    <MapContainer
      center={centreFrance}
      zoom={5.6}
      scrollWheelZoom={false}
      className="w-full h-full min-h-[360px] rounded-[2rem] z-0"
      style={{ background: "#eadfc4" }}
    >
      <ZoomOnAppear />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {miel.lieux.map((lieu) => (
        <Marker key={lieu.id} position={[lieu.lat, lieu.lng]} icon={pinIcon}>
          <Popup>
            <div className="font-sans">
              <p className="font-semibold text-brun mb-0.5">{lieu.nom}</p>
              <p className="text-sauge-dark text-sm font-medium mb-1">
                Miel de {lieu.fleur.toLowerCase()}
              </p>
              <p className="text-brun-soft text-sm leading-snug">
                {lieu.description}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
