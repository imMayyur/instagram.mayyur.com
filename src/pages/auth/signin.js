import { getProviders, signIn as SignIntoProvider } from 'next-auth/react';
import Header from '../../components/Header';

function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-32 text-center px-14">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="text-xs italic">
          This is not a REAL app, it is built for learning purposes only.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 text-white bg-blue-500 rounded-lg"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  console.log('P', providers);
  return {
    props: {
      providers,
    },
  };
}

export default signIn;
