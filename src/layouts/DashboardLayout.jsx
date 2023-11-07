import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex justify-around m-10 gap-10">

            <ul className="w-1/5 text-xl p-5 font-bold bg-gray-300 shadow-lg">
                <li>
                    <Link to={'/dashboard'}>
                        dashboard
                    </Link>
                </li>
                <li>
                    <Link to={'/dashboard/profile'}>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to={'/dashboard/editProfile'}>
                        edit Profile
                    </Link>
                </li>
            </ul>
            <div className="w-4/5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;