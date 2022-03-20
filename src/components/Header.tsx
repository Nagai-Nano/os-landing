import { useEffect, useState } from 'react'
import cx from 'classnames'

import { Logo } from 'icons'
import { navItems } from 'utils/data'

function Header() {
  const [scrollTop, setScrollTop] = useState(0)
  const [active] = useState('home')

  useEffect(() => {
    const handler = () => setScrollTop(window.scrollY)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      className={cx(
        'base-transition fixed top-0 left-0 right-0 w-full h-[4.6875rem] bg-background/10 backdrop-blur-[2px] z-[1]',
        scrollTop > 5 && 'bg-[#202020]'
      )}
    >
      <div className="containerr h-full flex items-center justify-between">
        <a href="/">
          <Logo className="text-white w-40" />
        </a>
        <div className="h-full flex items-center gap-10">
          {navItems.map(({ key, label }) => (
            <div
              key={key}
              className={cx(
                'relative h-full base-transition inline-flex items-center px-1.5',
                'font-medium cursor-pointer text-white/70 hover:!text-primary',
                key === active && '!text-primary !border-primary'
              )}
            >
              <div
                className={cx(
                  'base-transition absolute bottom-0 left-0 w-full h-1 rounded-sm',
                  key === active ? 'bg-primary' : 'bg-transparent'
                )}
              />
              {label}
            </div>
          ))}
          <button className="primary ghost">Tham gia ngay</button>
        </div>
      </div>
    </div>
  )
}

export default Header
