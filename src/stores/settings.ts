import create from "zustand";

interface ThemeState {
    dark: boolean,
    switchTheme: () => void,
}

export const useTheme = create<ThemeState>()((set) => ({
    dark: true,
    switchTheme: () => set((state) => ({ dark: !state.dark })),
}));
