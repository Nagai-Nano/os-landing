import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { debounce } from 'lodash'
import cx from 'classnames'

import { Logo, Menu } from 'icons'
import Button from 'components/Button'
import { navItems } from 'utils/data'
import { redirectToMainPage } from 'utils/functions'

import Sider from './Sider'

function Header() {
  const [scrollTop, setScrollTop] = useState(0)
  const [active, setActive] = useState('home')
  const [visible, setVisible] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const nodesRef = useRef<{ [key: string]: HTMLElement | null }>()

  useEffect(() => {
    nodesRef.current = {
      home: document.getElementById('home'),
      benefits: document.getElementById('benefits'),
      features: document.getElementById('features'),
      extra: document.getElementById('extra')
    }
  }, [])

  useEffect(() => {
    const handler = () => setScrollTop(window.scrollY)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    handleScrollTopChange(scrollTop)
  }, [scrollTop])

  const handleScrollTopChange = useCallback(
    debounce((scrollTop: number) => {
      if (!headerRef.current) return
      const headerHeight = headerRef.current.offsetHeight
      const offsetTop = (n: number) => Math.max(n + scrollTop - headerHeight, 0)

      const isActive = Object.values(nodesRef.current || []).some(node => {
        if (!node) return false
        const { top, bottom } = node.getBoundingClientRect()
        if (scrollTop >= offsetTop(top) && scrollTop <= offsetTop(bottom)) {
          setActive(node.id)
          return true
        }
      })
      if (!isActive) setActive('')
    }, 77),
    []
  )

  const scrollIntoView = (id: string) => {
    const node = nodesRef?.current?.[id]
    if (!node || !headerRef.current) return
    window.scrollTo({
      top: Math.max(
        scrollTop +
          (node.getBoundingClientRect().top + 1) -
          headerRef.current.offsetHeight,
        0
      ),
      behavior: 'smooth'
    })
  }

  return (
    <Fragment>
      <div
        ref={headerRef}
        className={cx(
          'base-transition fixed top-0 left-0 right-0 w-full h-[3.4375rem] md:h-[4.6875rem] bg-background/20 backdrop-blur-[2px] z-[2]',
          scrollTop > 10 && '!bg-[#202020]'
        )}
      >
        <div className="containerr h-full flex items-center justify-between gap-4">
          <a href="/">
            <Logo className="text-white w-32 md:w-40" />
          </a>
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setVisible(true)}
          >
            <Menu className="w-6 h-6" />
          </div>
          <div className="hidden md:flex h-full items-center gap-8 lg:gap-9">
            {navItems.map(({ key, label }) => (
              <div
                key={key}
                onClick={() => scrollIntoView(key)}
                className={cx(
                  'relative h-full base-transition inline-flex items-center px-1',
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
            <Button
              className="hidden lg:flex ml-3"
              ghost={active === 'home'}
              onClick={redirectToMainPage}
            >
              Tham gia ngay
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {visible && (
          <Sider
            active={active}
            scrollIntoView={scrollIntoView}
            onClose={() => setVisible(false)}
          />
        )}
      </AnimatePresence>
    </Fragment>
  )
}

export default Header
