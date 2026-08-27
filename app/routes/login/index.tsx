import GradientPanel from './gradient-panel';
import SignUpForm from './login-contact-form';

const LoginPage = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-background1 text-text w-full h-screen'>
      {/* Card container */}
      <div className='w-2/3 h-4/5  flex flex-row-reverse rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.3)]'>
        {/* Left container */}
        <GradientPanel />
        {/* Right container */}
        <SignUpForm />
      </div>
    </div>
  );
};

export default LoginPage;
