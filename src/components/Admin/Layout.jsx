import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
const Layout = ({ children }) => {
  const [side, setSide] = useState(280);
  const [accountmenu, setAccountMenu] = useState(false);
  // Handle the sidebar
  function handleSideBar() {
    setSide(side === 0 ? 280 : 0);
  }
  return (
    <>
      <aside
        className="bg-indigo-600 fixed top-0 left-0 h-full"
        style={{
          width: side,
          transition: "0.3s",
        }}
      ></aside>

      <section
        className="bg-gray-100 h-screen"
        style={{ marginLeft: side, transition: "0.3s" }}
      >
        <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
          <div className="flex items-center gap-2">
            <IoMenu
              className="text-4xl bg-gray-50 hover:bg-indigo-600 hover:text-white"
              onClick={handleSideBar}
            />
            <h1 className="text-2xl">Fashion</h1>
          </div>
          {/* Account div */}

          <div>
            <button className="relative">
              <img
                src="/images/avt.webp"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
                onClick={() => {
                  setAccountMenu(!accountmenu);
                }}
              />

              {accountmenu && (
                <div className="absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg">
                  <div>
                    <h1 className="text-lg font-semibold">Er Lavinsh</h1>
                    <p className="text-gray-500">example@gmail.com</p>
                    <div className="h-px bg-gray-200 my-4" />
                    <button className="flex items-center m-auto">
                      <CiLogout className="mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </nav>
        <div className="p-6">{children}</div>
      </section>
    </>
  );
};

export default Layout;
