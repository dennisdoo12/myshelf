//this file contains the zustand store for the ui state which includes a basic theme and density settings. 
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";
type Density = "compact" | "comfortable";
//theme density which measures the spacing between elements in the ui (compact is more dense and comfortable is less dense)
interface UiStore {
  theme: Theme;
  density: Density;
  toggleTheme: () => void;
  setDensity: (density: Density) => void;
}
//ui is a display setting that can be changed by the user and is stored in local storage so it persists across sessions. 
export const useUiStore = create<UiStore>()(
  persist(
    (set) => ({
      theme: "light",
      density: "comfortable",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
      setDensity: (density) => set({ density }),
    }),
    {
      name: "myshelf.ui",
      partialize: (state) => ({
        theme: state.theme,
        density: state.density,
      }),
    }
  )
);