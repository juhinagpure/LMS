import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { assets, dummyEducatorData } from "../../assets/assets";
const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const educatorData = dummyEducatorData;
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 lg:w-32" />
      </Link>

      <div className="flex items-center gap-5 text-gray-500 relative">
        <p>Hi! {user ? user.fullName : "Developers"}</p>
        {user ? (
          <UserButton />
        ) : (
          <img className="max-w-8" src={assets.profile_img} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
