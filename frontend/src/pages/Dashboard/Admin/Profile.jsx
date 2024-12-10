import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import image1 from '../../../assets/test.png'

import { FaPenToSquare } from "react-icons/fa6";


const Profile = () => {
  const biodata = {
    photo: image1, // 
    name: "Sean Ishak Adare",
    company: "Infinite Learning",
    role: "Intern",
    division: "Tech Development",
    email: "s******ple.com",
    phone: "123-456-7890",
    username: "sean123",
    password: "********"
  };

  const Navigate = useNavigate();

  return (
    <div className="FadeInSection">
      <div className="flex flex-row gap-2 items-center mb-4">
        <div className="flex flex-row gap-2 items-center opacity-50">
          <button onClick={() => Navigate('/Dashboard')}>Dashboard</button>
          <FaChevronRight size={11} />
        </div>
        <div>
          <p className="text-purple-500">Profile</p>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-left mb-8">Profile</h1>

      {/* CONTENTS */}

      <div className="flex flex-col gap-8">
        <div className="bg-white shadow-md rounded-md items-center p-8 gap-4 flex flex-row">
          <img src={biodata.photo} className="w-[10rem] h-[10rem] rounded-full border-solid border border-white object-cover" />
          <div className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-col">
              <h4>{biodata.name}</h4>
              <div className="flex flex-row gap-2">
                <p className="opacity-50">{biodata.email}</p>
                <button className="underline text-purple-500">Reveal</button>
              </div>
            </div>
            <button className="bg-purple-500 text-white rounded-md p-4 transition-all duration-300 hover:bg-purple-400">Edit Name</button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-8">
          <div className="flex justify-between items-center mb-8">
            <h4>Biodata</h4>
            <button className="flex flex-row gap-4 items-center p-4 rounded-md bg-purple-500 text-white transition-all duration-300 hover:bg-purple-400">
              <p>Edit</p>
              <FaPenToSquare />
            </button>
          </div>
          <div className="gap-8 grid grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="role">Role</label>
              <input className="p-4 border border-black cursor-default rounded-md" type="text" name="role" value={biodata.role} readonly />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="division">Division</label>
              <input className="p-4 border border-black cursor-default rounded-md" type="text" name="division" value={biodata.division} readonly />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="telephone">Telephone Number</label>
              <input className="p-4 border border-black cursor-default rounded-md" type="text" name="telephone" value={biodata.phone} readonly />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
