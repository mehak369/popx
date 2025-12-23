const Profile = () => {
  return (
    <div className="bg-[#F7F8F9] h-full">
      <div className="bg-white p-5 pt-8 shadow-sm">
        <h2 className="text-lg font-medium mb-6">Account Settings</h2>
        <div className="flex gap-4 items-center mb-6">
          <div className="relative">
            <img 
              src="https://i.pravatar.cc/100" 
              alt="Profile" 
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1.5 rounded-full border-2 border-white">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm">Marry Doe</h3>
            <p className="text-xs text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-[#1D2226]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      <div className="border-t border-dashed border-gray-300 mt-4 mx-5" />
    </div>
  );
};
export default Profile;