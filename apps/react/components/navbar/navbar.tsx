import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react-core";

const Navbar: React.FC = () => {
  // const navigate = useNavigate();

  const { user, isPending, authStatus } = useAuthenticator((context) => [
    context.route,
  ]);

  console.log(au);
  return (
    <>
      <header className=" p-2 flex justify-between items-center bg-white flex-wrap top-0">
        <div className="header1" id="header1">
          <img
            src="https://www.google.com/logos/doodles/2024/india-general-elections-2024-ph-4-6753651837110505.2-s.png"
            alt=""
            id="logo"
          />
        </div>

        <span className="text-black cursor-pointer font-semibold text-lg hover:text-blue-500">
          How to use?
        </span>
      </header>
    </>
  );
};

export default Navbar;
