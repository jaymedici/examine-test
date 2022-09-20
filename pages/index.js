import Head from 'next/head';
import LoginForm from '../components/Forms/LoginForm';
import TopBar from '../components/TopBar';

const Home = () => (
  <div>
    <Head>
      <title>Examine - login</title>
      <link rel='icon' href='img/favicon.ico'/>
    </Head>
    <TopBar />
    <main>
      <LoginForm />
    </main>
  </div>
)

export default Home