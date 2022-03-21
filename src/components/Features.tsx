import cx from 'classnames'
import { ArrowRight } from 'icons'

import { features } from 'utils/data'

function Features() {
  return (
    <div id="features" className="section-container">
      <div className="containerr">
        <div className="mb-20">
          <h1 className="text-[2.75rem] font-bold mb-2.5">Tính năng</h1>
          <p className="text-lg text-text-color tracking-[.2px]">
            Nhiều tính năng hữu ích giúp cho việc trải nghiệm trở nên đơn giản
            và thú vị hơn
          </p>
        </div>
        {features.map(({ title, desc, img, url }, idx) => {
          const isEven = idx % 2 === 0
          return (
            <div
              key={title}
              className="relative flex items-center gap-8 py-6 px-7 bg-primary-lv1 mb-20 last:mb-0 rounded-md"
            >
              <div
                className={cx(
                  'absolute top-0 bg-primary/95 w-1.5 h-full',
                  isEven ? 'right-0 rounded-r-md' : 'left-0 rounded-l-md'
                )}
              />
              <img
                src={img}
                alt={title}
                className="max-w-[28.75rem] rounded-sm"
                style={{ boxShadow: '0px 2px 8px rgba(110, 170, 183, 0.1)' }}
              />
              <div className={cx('grow', !isEven && 'order-[-1]')}>
                <div className="text-[1.5rem] leading-none mb-3.5 font-medium">
                  {title}
                </div>
                <div className="text-text-color/90">{desc}</div>
                {url && (
                  <a
                    className="base-transition inline-flex mt-4 font-medium text-primary items-center gap-2 hover:text-primary/90"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Xem thêm
                    <ArrowRight />
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Features
