const PrimaryButton = ({ text, onClick, color = "bg-[#6C25FF]", textColor = "text-white" }) => (
  <button 
    onClick={onClick}
    className={`w-full ${color} ${textColor} py-3 rounded-md font-semibold text-sm transition-opacity active:opacity-80`}
  >
    {text}
  </button>
);

export default PrimaryButton;