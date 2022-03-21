import { motion } from 'framer-motion'

import Cta from 'assets/cta.png'
import Button from 'components/Button'
import { redirectToMainPage } from 'utils/functions'

function CallToAction() {
  return (
    <div className="section-container">
      <div className="containerr flex flex-wrap lg:flex-nowrap justify-center items-center gap-16 md:gap-20">
        <motion.img
          src={Cta}
          alt="cta"
          className="max-h-[23rem] md:max-h-[28.75rem]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, type: 'tween', ease: 'easeIn' }}
          viewport={{ once: true }}
        />
        <motion.div
          className="text-center order-[-1] lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, type: 'tween', ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <h1 className="text-[2rem] md:text-[2.75rem] font-bold">
            Hãy đăng nhập và đăng truyện của bạn ngay hôm nay
          </h1>
          <Button size="large" className="mt-8" onClick={redirectToMainPage}>
            Tham gia ngay
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default CallToAction
