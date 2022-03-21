import { MouseEventHandler, useEffect } from 'react'
import { motion } from 'framer-motion'
import cx from 'classnames'

import { Close } from 'icons'
import Button from 'components/Button'
import { navItems } from 'utils/data'
import { redirectToMainPage } from 'utils/functions'

interface Props {
  active: string
  scrollIntoView: (id: string) => void
  onClose: () => void
}

function Sider({ active, scrollIntoView, onClose }: Props) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [])

  const handleClose: MouseEventHandler<HTMLDivElement> = event => {
    if ((event.target as HTMLDivElement).classList.contains('z-[3080]')) {
      onClose()
    }
  }

  const handleClick = (id: string) => {
    scrollIntoView(id)
    onClose()
  }

  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 z-[3080] bg-black/30 cursor-pointer"
      onClick={handleClose}
    >
      <motion.div
        initial={{ left: '-14rem' }}
        animate={{ left: 0 }}
        exit={{ left: '-14rem' }}
        transition={{ type: 'tween' }}
        className="fixed top-0 bottom-0 h-screen flex flex-col left-0 z-[3090] bg-[#212121] text-white w-[14rem]"
      >
        <div className="m-6 mt-4 text-right cursor-pointer" onClick={onClose}>
          <Close className="w-6 h-6 ml-auto" />
        </div>
        <div className="px-6 flex flex-col gap-4">
          {navItems.map(({ key, label }) => (
            <div
              key={key}
              onClick={() => handleClick(key)}
              className={cx(
                'relative h-full base-transition inline-flex items-center py-[2px]',
                'font-medium cursor-pointer text-white/70 hover:!text-primary',
                key === active && '!text-primary !border-primary'
              )}
            >
              <div
                className={cx(
                  'base-transition absolute left-[-14px] w-1 h-full rounded-sm',
                  key === active ? 'bg-primary' : 'bg-transparent'
                )}
              />
              {label}
            </div>
          ))}
        </div>
        <div className="mx-6 mb-6 mt-auto">
          <Button className="w-full" onClick={redirectToMainPage}>
            Tham gia ngay
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default Sider
