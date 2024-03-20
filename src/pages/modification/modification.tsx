import { Helmet } from 'react-helmet-async';
import { ModificationList } from '../../components/modification/modification-list';

const Modification = (): JSX.Element => (
  <>
    <Helmet>
      <title>{'tz_ixora'}</title>
    </Helmet>
    <h1 className="visually-hidden">Work</h1>

    <ModificationList />
  </>
);

export default Modification;
