import { Helmet } from 'react-helmet-async';
import { DeviceList } from '../../components/device/device-list';


const Device = (): JSX.Element => (
  <>
    <Helmet>
      <title>{'tz_ixora'}</title>
    </Helmet>
    <h1 className="visually-hidden">Work</h1>

    <DeviceList />
  </>
);

export default Device;
