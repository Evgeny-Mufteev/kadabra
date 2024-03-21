import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { fetchModifications } from '../../../services/wipers-service';
import { createApiClient } from '../../../services/api-client';

import { Modifications } from '../../../types/modify';

export type ModificationsLocationState = {
  brandName: string;
  modelName: string;
};

export const ModificationList = (): JSX.Element => {

  const location: { state: ModificationsLocationState } = useLocation();
  const { brandName, modelName } = location.state;

  const [modify, setModify] = useState<Modifications[]>([]);
  const { modelId } = useParams<{ modelId: string }>();
  const apiClient = createApiClient();

  useEffect(() => {
    const loadModifications = async () => {
      try {
        const fetchedModifications = await fetchModifications(apiClient, Number(modelId));
        setModify(fetchedModifications);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch models:', error);
      }
    };
    loadModifications();
  }, [modelId, apiClient]);

  return (
    <div>
      <h2>Подбор стеклоочистителей <span>{brandName} {modelName}</span></h2>
      <ul>
        {modify.map((modification) => (
          <li key={modification.id}>
            <Link to={`/device/${modification.id}`} state={{ brandName, modelName, modificationName: modification.name }}>
              {modification.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

