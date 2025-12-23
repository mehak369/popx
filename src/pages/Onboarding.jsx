import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';

const Onboarding = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full justify-end p-5 pb-10 bg-[#F7F8F9]">
      <h1 className="text-2xl font-bold text-[#1D2226] mb-2">Welcome to PopX</h1>
      <p className="text-[#1D2226] opacity-60 mb-6 text-sm">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
      </p>
      <div className="space-y-3">
        <PrimaryButton text="Create Account" onClick={() => navigate('/signup')} />
        <PrimaryButton 
          text="Already Registered? Login" 
          color="bg-[#6C25FF4D]" 
          textColor="text-[#1D2226]" 
          onClick={() => navigate('/login')} 
        />
      </div>
    </div>
  );
};
export default Onboarding;