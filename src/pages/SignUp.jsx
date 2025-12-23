import { useNavigate } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5 pt-10 bg-[#F7F8F9] h-full flex flex-col">
      <h1 className="text-2xl font-bold text-[#1D2226] mb-2">Create your <br />PopX account</h1>
      <div className="mt-8 flex-grow">
        <CustomInput label="Full Name" placeholder="Enter full name" required />
        <CustomInput label="Phone number" placeholder="Enter phone number" required />
        <CustomInput label="Email address" placeholder="Enter email address" required />
        <CustomInput label="Password" placeholder="Enter password" type="password" required />
        <CustomInput label="Company name" placeholder="Enter company name" />
        
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Are you an Agency?<span className="text-red-500">*</span></p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="agency" className="accent-[#6C25FF] w-4 h-4" defaultChecked />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="agency" className="accent-[#6C25FF] w-4 h-4" />
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>
      </div>
      <PrimaryButton text="Create Account" onClick={() => navigate('/profile')} />
    </div>
  );
};
export default Signup;