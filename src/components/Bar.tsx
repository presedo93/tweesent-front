import { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { FiMoon, FiSettings } from 'react-icons/fi'

import Params from './parameters/Params'
import useTheme from '../stores/themes'

import Logo from '../assets/bird.svg?component'

const Bar = () => {
    const [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show)
    }

    const { dark, switchTheme } = useTheme()
    const bgcolor = dark ? 'bg-zinc-700' : 'bg-gray-400'
    const icolor = dark ? 'text-neutral-300' : 'text-neutral-700'

    return (
        <>
            <Navbar className={'h-12 shadow-md ' + bgcolor}>
                <div className='ml-16 grid w-full'>
                    <Navbar.Brand
                        className='flex flex-row justify-self-center'
                        href='#home'
                    >
                        <Logo className='h-8 w-8 mr-2' />{' '}
                        <span className={'italic font-mono text-sm mt-2 ' + icolor}>
                            Tweesent
                        </span>
                    </Navbar.Brand>
                </div>
                <FiSettings
                    className={'mr-6 scale-125 hover:invert ' + icolor}
                    onClick={toggle}
                />
                <FiMoon
                    className={'mr-6 scale-125 hover:invert ' + icolor}
                    onClick={switchTheme}
                />
            </Navbar>

            <Params show={show} toggle={toggle} />
        </>
    )
}

export default Bar
