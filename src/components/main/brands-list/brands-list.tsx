import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBrands } from '../../../services/wipers-service';
import { createApiClient } from '../../../services/api-client';
import styles from './brands-list.module.scss';

import { Auto } from '../../../types/auto';

export const BrandsList = (): JSX.Element => {

  const [brands, setBrands] = useState<Auto[]>([]);
  const apiClient = createApiClient();

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const fetchedBrands = await fetchBrands(apiClient);
        setBrands(fetchedBrands);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch brands:', error);
      }
    };

    loadBrands();
  }, [apiClient]);

  return (
    <div className={styles.brands}>
      <h2>Подбор стеклоочистителей</h2>
      <ul className={styles.brands__list}>
        {brands.map((brand) => (
          <li className={styles.brands__item} key={brand.id}>
            <Link className={styles.brands__link} to={`/models/${brand.id}`} state={{ brandName: brand.name }}>{brand.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
