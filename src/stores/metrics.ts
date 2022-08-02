import create from 'zustand'

interface MetricsState {
    positives: number
    incPositives: () => void

    neutrals: number
    incNeutrals: () => void

    negatives: number
    incNegatives: () => void

    total: number
}

const useMetrics = create<MetricsState>()((set) => ({
    positives: 0,
    neutrals: 0,
    negatives: 0,
    total: 0,

    incPositives: () =>
        set((state) => ({
            positives: state.positives + 1,
            total: state.total + 1,
        })),

    incNeutrals: () =>
        set((state) => ({ neutrals: state.neutrals + 1, total: state.total + 1 })),

    incNegatives: () =>
        set((state) => ({
            negatives: state.negatives + 1,
            total: state.total + 1,
        })),
}))

export default useMetrics
