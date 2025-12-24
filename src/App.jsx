import Layout from './components/layout/Layout';
import { ChatAgentes } from './components/chat/ChatAgentes';

function App() {
  return (
    <Layout>
      <div className="container mt-4 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ChatAgentes />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;