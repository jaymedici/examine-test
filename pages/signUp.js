import Head from 'next/head';
import SignUpForm from '../components/Forms/SignUpForm';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const SignUp = () => (
  <div>
    <Head>
      <title>Examine - Sign up</title>
      <link rel='icon' href='img/favicon.ico'/>
    </Head>
    <TopBar />
    <main>
      <SignUpForm />
    </main>
    <Footer />
  </div>
)

export default SignUp