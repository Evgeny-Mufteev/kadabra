import { Footer } from '../footer';
import { Header } from '../header';

interface LayoutProps {
  children: JSX.Element;

}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className='wrapper'>
    <Header />
    <main className='page__main '>
      <div className='container'>
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export default Layout;
