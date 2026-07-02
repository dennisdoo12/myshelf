//this is the navigation bar that is displayed at the top of the page and allows the user to navigate between the pages. 
import { NavLink } from "react-router-dom";
import { useUiStore } from "../store/useUiStore";
//imported the nav link and the ui store so we can see the same density and link settings.

//here is the nav bar funciton that renders the nav bar and links it to the page
function NavBar() {
  const theme = useUiStore((state) => state.theme);
  const density = useUiStore((state) => state.density);
  const toggleTheme = useUiStore((state) => state.toggleTheme);
  const setDensity = useUiStore((state) => state.setDensity);
//this nav classs function styles the nav bar 
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "font-bold underline text-blue-600"
      : "text-gray-700 dark:text-gray-200";

  return (
    <nav className="flex flex-wrap gap-4 border-b p-4">
      <NavLink to="/" end className={navClass}>Home</NavLink>
      <NavLink to="/list/want" className={navClass}>Want</NavLink>
      <NavLink to="/list/active" className={navClass}>Active</NavLink>
      <NavLink to="/list/done" className={navClass}>Done</NavLink>
      <NavLink to="/list/dropped" className={navClass}>Dropped</NavLink>
      <NavLink to="/about" className={navClass}>About</NavLink>

      <button onClick={toggleTheme} className="rounded border px-2">
        Theme: {theme}
      </button>

      <select
        value={density}
        onChange={(e) => setDensity(e.target.value as "compact" | "comfortable")}
        className="rounded border px-2 text-black"
      >
        <option value="comfortable">Comfortable</option>
        <option value="compact">Compact</option>
      </select>
    </nav>
  );
}

export default NavBar;