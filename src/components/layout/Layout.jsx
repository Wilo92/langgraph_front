import { Header } from './Header';
import { Footer } from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* El estilo minHeight asegura que el footer siempre esté abajo */}
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;