import SearchInput from "./Searchinput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
    return (
        <div className="border-r border-slate-500 p-4 flex flex-col">
            <SearchInput />
            <div className="divider px-5 h-px bg-red-300"></div>
            <Conversations />
            <LogoutButton />
        </div>
        );
}

export default Sidebar;