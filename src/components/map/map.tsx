import {Icon, Marker, Map as MapLeaflet, TileLayer} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {PointsType} from '../../types/offer';
import {useRef, useEffect} from 'react';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  points: PointsType;
  hoveredOfferId: string | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

// Почему сделал так, а не как в примере-репозитории intensive-design-demo?
// Основная причина, хотелось, чтобы все маркеры не удалялись при наведении на какой-то маркер
// А в отдельный, кастомный хук не вынес, т.к. хотел, чтобы было по другому, чем в примере

function Map({points, hoveredOfferId}: MapProps): JSX.Element {
  console.log('Map', hoveredOfferId); // eslint-disable-line no-console

  const mapRef = useRef(null);
  const isRenderedMapRef = useRef<boolean>(false);
  const mapLeaflet = useRef<MapLeaflet | null>(null);
  const mapPoints = useRef<{ [key: string]: Marker }>({});

  // Шаг 1. Отрендерим Leaflet карту (пока без маркеров)
  useEffect(() => {
    console.log('Шаг 1 старт', isRenderedMapRef.current); // eslint-disable-line no-console
    // проверка на isRenderedRef.current нужна, чтобы в React.StrictMode
    // хук не выполнялся два раза и не было ошибки повторного рендера карты
    if (isRenderedMapRef.current || !mapRef.current) {
      return;
    }

    mapLeaflet.current = new MapLeaflet(mapRef.current as HTMLDivElement);

    const tileLayer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    });

    mapLeaflet.current.addLayer(tileLayer);
    isRenderedMapRef.current = true;
    console.log('Шаг 1 конец'); // eslint-disable-line no-console
  }, []);

  // Шаг 2. Нанесем все маркеры на карту и подберем нужный масштаб отображения, чтобы все маркеры вместились
  useEffect(() => {
    console.log('Шаг 2 старт', mapLeaflet.current); // eslint-disable-line no-console
    if (!mapLeaflet.current) {
      return;
    }

    const markersFitBounds: [number, number][] = [];

    points.forEach(({location: {latitude, longitude}, id}) => {
      const marker = new Marker({
        lat: latitude,
        lng: longitude,
      });

      marker.setIcon(defaultCustomIcon).addTo(mapLeaflet.current as MapLeaflet);
      mapPoints.current[id] = marker;

      markersFitBounds.push([latitude, longitude]);
    });

    mapLeaflet.current.fitBounds(markersFitBounds, {padding: [20, 20]});
    console.log('Шаг 2 конец'); // eslint-disable-line no-console
    return () => {
      console.log('Шаг 2 отмена'); // eslint-disable-line no-console
      Object.values(mapPoints.current).forEach((marker) => {
        if (mapLeaflet.current) { // чтобы обдурить Typescript
          mapLeaflet.current.removeLayer(marker);
        }
      });
      mapPoints.current = {};
    };
  }, [points]);

  // Шаг 3. Отметим текущий (hovered) офер другим цветом маркера
  useEffect(() => {
    console.log('Шаг 3 старт', hoveredOfferId); // eslint-disable-line no-console

    if (!Object.keys(mapPoints.current)) {
      return;
    }

    Object.entries(mapPoints.current).forEach(([id, marker]) => {
      const currentIconUrl = marker.options.icon?.options.iconUrl;
      if (hoveredOfferId === id) {
        if (currentIconUrl !== currentCustomIcon.options.iconUrl) {
          console.log('currentCustomIcon', id); // eslint-disable-line no-console
          marker.setIcon(currentCustomIcon);
        }
      } else {
        if (currentIconUrl !== defaultCustomIcon.options.iconUrl) {
          console.log('defaultCustomIcon', id); // eslint-disable-line no-console
          marker.setIcon(defaultCustomIcon);
        }
      }
    });
    console.log('Шаг 3 конец'); // eslint-disable-line no-console
  }, [hoveredOfferId]);

  return <div style={{height: '100%'}} ref={mapRef}/>;
}

export default Map;
