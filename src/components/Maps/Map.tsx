import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Map = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    //로케이션표시 Google maps에서 원하는 장소 찾은 후 주변검색을 누르면 좌표를 찾을 수 있다.
    const location = new naver.maps.LatLng(37.3417, 126.7323);

    //네이버 지도 옵션 선택
    const mapOptions = {
      center: location,
      zoom: 16,
      zoomControl: false,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    //지도상에 핀 표시 할 부분
    new naver.maps.Marker({
      position: location,
      map: map,
    });
  }, []);

  return <MapContainer ref={mapElement}></MapContainer>;
};

export default Map;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
