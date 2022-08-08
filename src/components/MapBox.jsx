import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import { Map as Ymap, Placemark } from 'react-yandex-maps';
import points from '../../__fixtures__/points';

function MapBox({ address, setAddress }) {
  const [placemarkInfo, setPlacemarkerInfo] = useState(address);

  const mapState = {
    center: [55.751574, 37.573856],
    zoom: 9,
  };

  const handleAddAddressClick = () => {
    setAddress(placemarkInfo);
  };

  const handleChangeAddressClick = () => {
    setAddress(null);
  };

  const onPlacemarkClick = (point) => () => {
    setPlacemarkerInfo(point);
  };

  return address ? (
    <div className="d-flex align-items-baseline">
      <p className="me-3">{address.title}</p>
      <Button
        variant="success"
        className="btn-sm"
        onClick={handleChangeAddressClick}
      >
        Изменить
      </Button>
    </div>
  ) : (
    <div className="d-flex row">
      <div className="col-10">
        <Ymap
          width="100%"
          defaultState={mapState}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          {points.map((point) => (
            <Placemark
              modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              key={point.title}
              geometry={point.coords}
              onClick={onPlacemarkClick(point)}
            />
          ))}
        </Ymap>
      </div>
      <div className="col">
        <div className="py-2">{placemarkInfo && placemarkInfo.title}</div>
        <div>
          <Button variant="success" onClick={handleAddAddressClick}>
            Заберу отсюда
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MapBox;
