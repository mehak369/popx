import { useNavigate } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="p-5 pt-10 bg-[#F7F8F9] h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D2226] mb-2">Signin to your <br />PopX account</h1>
        <p className="text-[#1D2226] opacity-60 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleLogin} className="flex-grow">
        <CustomInput 
          label="Email Address" 
          placeholder="Enter email address" 
          type="email" 
        />
        <CustomInput 
          label="Password" 
          placeholder="Enter password" 
          type="password" 
        />
        
        <div className="mt-2">
          <PrimaryButton 
            text="Login" 
            color="bg-[#CBCBCB]" 
            textColor="text-white"
            type="submit" 
          />
        </div>
      </form>

      <p className="text-center text-xs text-gray-500 mt-4 cursor-pointer" onClick={() => navigate('/')}>
        ← Back to Onboarding
      </p>
    </div>
  );
};

export default Login;