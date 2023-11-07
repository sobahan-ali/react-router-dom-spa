import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";

const MainLayout = () => {
    const navigation = useNavigation();
    console.log(navigation.state);
    return (
        <div>
            <section className="flex justify-between px-10 py-5 shadow-lg">
                <h1>Amazon</h1>
                <div>
                    <ul className="flex gap-5 ">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400" : ""
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400" : ""
                            }
                        >
                            Products
                        </NavLink>

                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400" : ""
                            }
                        >
                            dashboard
                        </NavLink>

                    </ul>
                </div>


            </section>
            {
                navigation.state === 'loading' ? <Spinner></Spinner> : <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;