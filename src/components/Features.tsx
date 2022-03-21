import { motion } from 'framer-motion'
import cx from 'classnames'

import { ArrowRight } from 'icons'
import { features } from 'utils/data'

function Features() {
  return (
    <div id="features" className="section-container">
      <div className="containerr">
        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: 'tween', ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <h1 className="text-[2rem] md:text-[2.75rem] font-bold mb-1.5 md:mb-2.5">
            Tính năng
          </h1>
          <p className="text-base md:text-lg text-text-color tracking-[.2px]">
            Nhiều tính năng hữu ích giúp cho việc trải nghiệm trở nên đơn giản
            và thú vị hơn
          </p>
        </motion.div>
        {features.map(({ title, desc, img, url }, idx) => {
          const isEven = idx % 2 === 0
          return (
            <motion.div
              key={title}
              className="relative flex flex-wrap lg:flex-nowrap items-center gap-5 md:gap-8 p-6 lg:py-6 lg:px-7 bg-primary-lv1 mb-5 sm:mb-10 md:mb-20 last:mb-0 rounded-md"
              initial={{ opacity: 0, x: isEven ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, type: 'tween', ease: 'easeIn' }}
              viewport={{ once: true }}
            >
              <div
                className={cx(
                  'hidden lg:block absolute top-0 bg-primary/95 w-1.5 h-full',
                  isEven ? 'right-0 rounded-r-md' : 'left-0 rounded-l-md'
                )}
              />
              <img
                src={img}
                alt={title}
                className="shrink-0 w-full lg:max-w-[28.75rem] rounded-sm"
                style={{ boxShadow: '0px 2px 8px rgba(110, 170, 183, 0.1)' }}
              />
              <div className={cx('grow', !isEven && 'order-1 lg:order-[-1]')}>
                <div className="text-[1.2rem] md:text-[1.5rem] leading-normal md:leading-none mb-2 md:mb-3.5 font-medium">
                  {title}
                </div>
                <div className="text-sm md:text-base text-text-color/90">
                  {desc}
                </div>
                {url && (
                  <a
                    className="base-transition text-sm md:text-base inline-flex mt-3 md:mt-4 font-medium text-primary items-center gap-2 hover:text-primary/90"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Xem thêm
                    <ArrowRight />
                  </a>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Features
