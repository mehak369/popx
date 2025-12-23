const CustomInput = ({ label, placeholder, type = "text", required = false, value = "" }) => (
  <div className="relative mb-6 w-full">
    <label className="absolute -top-2.5 left-3 bg-[#F7F8F9] px-1 text-[#6C25FF] text-xs font-medium z-10">
      {label}{required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      className="w-full border border-[#CBCBCB] rounded-md py-3 px-4 text-sm focus:outline-none focus:border-[#6C25FF] bg-transparent"
    />
  </div>
);

export default CustomInput;