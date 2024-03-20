import { Helmet } from 'react-helmet-async';
import { ModelsList } from '../../components/model/model-list/model-list';


const Model = (): JSX.Element => (
  <>
    <Helmet>
      <title>{'tz_ixora'}</title>
    </Helmet>
    <h1 className="visually-hidden">Work</h1>

    <ModelsList />
  </>
);

export default Model;
