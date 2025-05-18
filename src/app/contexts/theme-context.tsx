"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const THEME_STORAGE_KEY = 'themeContextKey';

type themeType = {
   theme: 'light' | 'dark';
   setTheme: (newTheme: 'light' | 'dark') => void
}
const ThemeContext = createContext<themeType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
   const [theme, setTheme] = useState<'light' | 'dark'>(() => {
      const storaged = localStorage.getItem(THEME_STORAGE_KEY)
      return storaged === 'light' || storaged === 'dark' ? storaged : 'dark'
   });

   if (!theme || !setTheme) return;

   useEffect(() => {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
   }, [theme]);

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         <div className={theme+' body-theme'}>
            {children}
         </div>
      </ThemeContext.Provider>
   )
};

export const useTheme = () => useContext(ThemeContext);