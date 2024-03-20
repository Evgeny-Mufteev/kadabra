import { Helmet } from 'react-helmet-async';
import { BrandsList } from '../../components/main/brands-list';

const Main = (): JSX.Element => (
  <>
    <Helmet>
      <title>{'tz_ixora'}</title>
    </Helmet>
    <h1 className="visually-hidden">Work</h1>

    <BrandsList />
  </>
);

export default Main;
