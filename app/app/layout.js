import Asideber from "@/componnent/Asideber";
import AppHeader from "../../componnent/AppHeader";

export default function AppLayout({ children }) {
    return (
        <div>
            <div className="grid grid-cols-10 justify-between w-screen">
                <div className="hidden lg:block w-full bg-gray-50 lg:col-span-2 h-screen relative asideWrperWrper">
                    <div className="asideWrper bg-gray-50">
                        <Asideber />
                    </div>
                </div>
                <div className="col-span-10 lg:col-span-8 h-screen bg-gray-100 w-full relative">
                    <AppHeader />
                    <div className="w-full">
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
