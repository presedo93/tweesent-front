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

    socket: WebSocket | null
    setSocket: (url: string) => void
}

const useParams = create<ParamsState>()((set) => ({
    numTweets: 10,
    allowRt: false,
    allowRe: false,
    live: false,
    socket: null,

    setTweets: (tw: number) => set(() => ({ numTweets: tw })),
    setRt: (rt: boolean) => set(() => ({ allowRt: rt })),
    setRe: (re: boolean) => set(() => ({ allowRe: re })),
    setLive: (lv: boolean) => set(() => ({ live: lv })),
    setSocket: (url: string) => set(() => ({ socket: new WebSocket(url) })),
}))

export default useParams
