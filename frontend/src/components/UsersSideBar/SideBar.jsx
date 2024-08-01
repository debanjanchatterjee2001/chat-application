import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="max-w-[150px] sm:max-w-[300px] bg-slate-700 border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
