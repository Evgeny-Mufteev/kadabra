import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchParameters } from '../../../services/wipers-service';
import { createApiClient } from '../../../services/api-client';
import styles from './device-list.module.scss';

import { Parameters } from '../../../types/parameters';

export type DeviceLocationState = {
  brandName: string;
  modelName: string;
  modificationName: string;
};

export const DeviceList = (): JSX.Element => {

  const location: { state: DeviceLocationState } = useLocation();
  const { brandName, modelName, modificationName } = location.state;

  const [isLoading, setIsLoading] = useState(true);
  const [parameters, setParameters] = useState<Parameters[]>([]);
  const { deviceId } = useParams<{ deviceId: string }>();
  const apiClient = createApiClient();

  useEffect(() => {
    const loadParameters = async () => {
      try {
        const fetchedParameters = await fetchParameters(apiClient, Number(deviceId));
        setParameters(fetchedParameters);
        setIsLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch parameters:', error);
      }
    };

    loadParameters();
  }, [deviceId, apiClient]);

  if (isLoading) {
    return <div>Нет данных</div>;
  }

  const firstParam = parameters[0];

  return (
    <div className={styles.device}>
      <h2>Стеклоочистители для <span>{brandName} {modelName}</span> <em>{modificationName}</em></h2>
      <ul className={styles.device__list}>
        <li>Длина водительской стороны: {firstParam.length1}</li>
        <li>Длина пассажирской стороны: {firstParam.length2}</li>
        {firstParam.length3 && <li>Длина задней стороны: {firstParam.length3}</li>}
        <li>Тип крепления: {firstParam.fasten}</li>
      </ul>
    </div>
  );
};
