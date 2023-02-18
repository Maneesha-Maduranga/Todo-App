import { FaTasks } from "react-icons/fa";

function Navbar() {
  return (
    <div className="place-self-center">
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <h1 className='btn btn-ghost normal-case text-3xl'>
          <span className='px-2'>
            <FaTasks />
          </span>
          ToDo-App
        </h1>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
