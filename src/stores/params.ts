import create from 'zustand'

interface ParamsState {
    numTweets: number
    setTweets: (tw: number) => void

    allowRt: boolean
    setRt: (rt: boolean) => void

    allowRe: boolean
    setRe: (re: boolean) => void

    live: boolean
    setLive: (lv: boolean) => void

    interval: number
    setInterval: (ni: number) => void

    socket: boolean
    setSocket: (sc: boolean) => void
}

const useParams = create<ParamsState>()((set) => ({
    numTweets: 10,
    allowRt: false,
    allowRe: false,
    live: false,
    interval: 1,
    socket: false,

    setTweets: (tw: number) => set(() => ({ numTweets: tw })),
    setRt: (rt: boolean) => set(() => ({ allowRt: rt })),
    setRe: (re: boolean) => set(() => ({ allowRe: re })),
    setLive: (lv: boolean) => set(() => ({ live: lv })),
    setInterval: (ni: number) => set(() => ({ interval: ni })),
    setSocket: (sc: boolean) => set(() => ({ socket: sc })),
}))

export default useParams
