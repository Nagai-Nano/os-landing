import PerfectScrollbar from 'react-perfect-scrollbar'
import { motion } from 'framer-motion'

import { ArrowRight } from 'icons'
import { extras } from 'utils/data'

function Extra() {
  return (
    <div id="extra" className="bg-primary-lv1 section-container">
      <div className="containerr grid grid-cols-1 lg:grid-cols-2 items-center gap-14 md:gap-20 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, type: 'tween', ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <h1 className="text-[2rem] md:text-[2.75rem] font-bold mb-1.5 md:mb-2.5">
            Góc thư giãn
          </h1>
          <p className="text-base md:text-lg text-text-color tracking-[.2px]">
            Kho ảnh cosplay chất lượng luôn được cập nhật mỗi ngày, nơi thích
            hợp để xả stress sau những giờ dịch dọt căng thẳng.
          </p>
          <a
            className="base-transition inline-flex mt-3 md:mt-4 font-medium text-primary items-center gap-2 hover:text-primary/90"
            href="https://otakusan.net/Cosplay"
            target="_blank"
            rel="noreferrer"
          >
            Thư giãn thêm <ArrowRight />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, type: 'tween', ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <PerfectScrollbar
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[41rem] overflow-auto"
            options={{ wheelPropagation: false }}
          >
            {extras.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={idx.toString()}
                className="w-full h-full sm:h-96 lg:h-[16.25rem] object-cover rounded-sm"
                style={{ boxShadow: '0px 2px 16px rgba(110, 170, 183, 0.25)' }}
              />
            ))}
          </PerfectScrollbar>
        </motion.div>
      </div>
    </div>
  )
}

export default Extra
