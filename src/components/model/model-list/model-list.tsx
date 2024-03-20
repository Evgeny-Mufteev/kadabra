import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { fetchModels } from '../../../services/wipers-service';
import { createApiClient } from '../../../services/api-client';
import styles from './model-list.module.scss';

import { Model } from '../../../types/model';

export type ModelsLocationState = {
  brandName: string;
};

export const ModelsList = (): JSX.Element => {

  const location = useLocation() as { state: ModelsLocationState };
  const brandName = location.state?.brandName;

  const [models, setModels] = useState<Model[]>([]);
  const { brandId } = useParams<{ brandId: string }>();
  const apiClient = createApiClient();

  useEffect(() => {
    const loadModels = async () => {
      try {
        const fetchedModels = await fetchModels(apiClient, Number(brandId));
        setModels(fetchedModels);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch models:', error);
      }
    };

    loadModels();
  }, [brandId, apiClient]);

  return (
    <div className={styles.models}>
      <h2>Подбор стеклоочистителей <span>{brandName}</span></h2>
      <ul className={styles.models__list}>
        {models.map((model) => (
          <li className={styles.models__item} key={model.id}>
            <Link className={styles.models__link} to={`/modifications/${model.id}`} state={{ brandName, modelName: model.name }}>
              {model.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

