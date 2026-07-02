//this is the navigation bar that is displayed at the top of the page and allows the user to navigate between the pages.
import { NavLink } from "react-router-dom";
import { useUiStore } from "../store/useUiStore";

//imported the NavLink and the UI store so we can access the current theme and density settings.
function NavBar() {
  //Gets the current theme and density from the Zustand store.
  const theme = useUiStore((state) => state.theme);
  const density = useUiStore((state) => state.density);

  //Functions that update the theme and density.
  const toggleTheme = useUiStore((state) => state.toggleTheme);
  const setDensity = useUiStore((state) => state.setDensity);

  //Styles the active navigation link.
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-bold underline text-blue-600" : "";

  return (
    <nav className="flex flex-wrap gap-4 border-b p-4">
      <NavLink to="/" end className={navClass}>Home</NavLink>
      <NavLink to="/list/want" className={navClass}>Want</NavLink>
      <NavLink to="/list/active" className={navClass}>Active</NavLink>
      <NavLink to="/list/done" className={navClass}>Done</NavLink>
      <NavLink to="/list/dropped" className={navClass}>Dropped</NavLink>
      <NavLink to="/about" className={navClass}>About</NavLink>

      {/* Toggles between the light and dark themes. */}
      <button onClick={toggleTheme} className="rounded border px-2">
        Theme: {theme}
      </button>

      {/* Lets the user switch between comfortable and compact spacing. */}
      <select
        value={density}
        onChange={(e) =>
          setDensity(e.target.value as "compact" | "comfortable")
        }
        className="rounded border px-2"
      >
        <option value="comfortable">Comfortable</option>
        <option value="compact">Compact</option>
      </select>
    </nav>
  );
}

export default NavBar;