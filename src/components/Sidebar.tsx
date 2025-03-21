import { CalendarClock, LayoutDashboard, ChartLine, Package, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface navData {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem = ({ to, icon, label, isActive, onClick }: navData) => {
  return (
    <Link to={to} onClick={onClick} className={`w-full rounded py-1 px-2 flex space-x-3 items-center cursor-pointer text-sm transition-colors duration-300 ${isActive ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-100 text-zinc-700'} ${isActive ? 'font-semibold' : 'font-medium'}`}>
      <div className="flex justify-center items-center p-1">{icon}</div>
      <p>{label}</p>
    </Link>
  );
};

const Sidebar = () => {    
  const [activePath, setActivePath] = useState("/");

  const handleNavClick = (path: string) => {
    setActivePath(path);
  };

  return (
    <div className="flex flex-col py-4 w-[20%] h-full border-r-2 text-black">
        <div className="w-full space-y-5 mt-0 text-sm p-4 font-semibold text-zinc-700 overflow-auto">
            <NavItem to="/" label="Dashboard" icon={<LayoutDashboard size={20} />} isActive={activePath === "/"} onClick={() => handleNavClick("/")} />
            <NavItem to="/add-new-patient" label="Add New Patient" icon={<Plus size={20} />} isActive={activePath === "/add-new-patient"} onClick={() => handleNavClick("/add-new-patient")} />
            <NavItem to="/patients-history" label="Patients History" icon={<CalendarClock size={20} />} isActive={activePath === "/patients-history"} onClick={() => handleNavClick("/patients-history")} />
            <NavItem to="/sales-insights" label="Sales Insights" icon={<ChartLine size={20} />} isActive={activePath === "/sales-insights"} onClick={() => handleNavClick("/sales-insights")} />
            <NavItem to="/stocks" label="Stocks" icon={<Package size={20} />} isActive={activePath === "/stocks"} onClick={() => handleNavClick("/stocks")} />
        </div>
    </div>
  );
}

export default Sidebar;