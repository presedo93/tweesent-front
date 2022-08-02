import create from 'zustand'

interface ThemeState {
    dark: boolean
    switchTheme: () => void
}

const useTheme = create<ThemeState>()((set) => ({
    dark: true,
    switchTheme: () => set((state) => ({ dark: !state.dark })),
}))

export default useTheme
