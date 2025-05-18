"use client"
import { useTheme } from "@/app/contexts/theme-context"
import { FaSun, FaMoon } from "react-icons/fa";

export const ToggleTheme = () => {
   const themeCtx = useTheme();

   function handleSetTheme() {
      themeCtx?.setTheme((themeCtx.theme === 'dark' ? 'light' : 'dark'));
   };

   return (
      <div className="toggle-btn" onClick={handleSetTheme}>
         <FaMoon className="toggle-moon"/>
         <FaSun className="toggle-sun"/>
         <div className={`toggle-ball ${themeCtx?.theme === 'dark' && ' moveToggleBall'}`}></div>
      </div>
   )
}