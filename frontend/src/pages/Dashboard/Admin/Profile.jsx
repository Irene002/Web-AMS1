import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // Data statis untuk biodata
  const biodata = {
    photo: "https://via.placeholder.com/150", // 
    name: "Sean Ishak Adare",
    company: "Infinite Learning",
    jobTitle: "Software Engineer",
    division: "Development",
    email: "sean@example.com",
    phone: "123-456-7890",
    username: "sean123",
    password: "********"
  };

  const Navigate = useNavigate();

  return (
    <div className="FadeInSection">
      <div className="flex flex-row gap-2 items-center mb-4">
        <div className="flex flex-row gap-2 items-center opacity-50">
          <button onClick={() => Navigate('/Dashboard')}>Dasbor</button>
          <FaChevronRight size={11} />
        </div>
        <div>
          <p className="text-purple-500">Profile</p>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-left mb-12">Profile</h1>


      {/* CONTENTS */}
      <div className="w-full min-h-screen">
        <div className="bg-purple-500 p-8 rounded-lg w-full text-white text-center mb-10">
          <img
            src={biodata.photo}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-8"
          />
          <h4 className="text-4xl">{biodata.name}</h4>
          <p className="text-xl">{biodata.company}</p>
        </div>

        <div className="bg-white p-8 rounded-lg w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col">
              <label className="text-xl font-semibold mb-2">Role</label>
              <p className="text-lg">{biodata.jobTitle}</p>
            </div>


            <div className="flex flex-col">
              <label className="text-xl font-semibold mb-2">Division</label>
              <p className="text-lg">{biodata.division}</p>
            </div>


            <div className="flex flex-col">
              <label className="text-xl font-semibold mb-2">Email</label>
              <p className="text-lg">{biodata.email}</p>
            </div>

            <div className="flex flex-col">
              <label className="text-xl font-semibold mb-2">Phone Number</label>
              <p className="text-lg">{biodata.phone}</p>
            </div>

            <div className="flex flex-col">
              <label className="text-xl font-semibold mb-2">Username</label>
              <p className="text-lg">{biodata.username}</p>
            </div>

            <div className="flex flex-col">
              <label className="text-xl font-semibold mb-2">Password</label>
              <p className="text-lg">{biodata.password}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
