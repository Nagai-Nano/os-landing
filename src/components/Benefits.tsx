import { motion } from 'framer-motion'

import { benefits } from 'utils/data'

function Benefits() {
  return (
    <div id="benefits" className="bg-primary-lv1 section-container">
      <div className="containerr">
        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: 'tween', ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <h1 className="text-[2rem] md:text-[2.75rem] font-bold mb-1.5 md:mb-2.5">
            Lợi ích
          </h1>
          <p className="text-base md:text-lg text-text-color tracking-[.2px]">
            Tối ưu hóa trải nghiệm cá nhân luôn là ưu tiên hàng đầu
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {benefits.map(({ title, desc, Icon }) => (
            <motion.div
              key={title}
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, type: 'tween', ease: 'easeIn' }}
              viewport={{ once: true }}
            >
              <div className="p-4 md:p-6 bg-primary-lv2 rounded-full">
                <Icon className="text-primary w-7 h-7 md:w-10 md:h-10" />
              </div>
              <div>
                <div className="text-[1.2rem] md:text-[1.5rem] leading-none mb-2.5 font-medium">
                  {title}
                </div>
                <div className="text-sm md:text-base text-text-color/90">
                  {desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Benefits
