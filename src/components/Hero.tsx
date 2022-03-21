import { motion } from 'framer-motion'

import HeroBg from 'assets/hero-bg.png'
import HeroMobileBg from 'assets/hero-mobile-bg.png'

import Button from 'components/Button'
import { redirectToMainPage } from 'utils/functions'

function Hero() {
  return (
    <motion.div
      id="home"
      className="relative w-full min-h-[42.5rem] md:min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div
        style={{ backgroundImage: `url(${HeroBg})` }}
        className="hidden md:block absolute top-0 left-0 bottom-0 right-0 !bg-cover !bg-no-repeat !bg-center"
      />
      <div
        style={{ backgroundImage: `url(${HeroMobileBg})` }}
        className="block md:hidden absolute top-0 left-0 bottom-0 right-0 !bg-cover !bg-no-repeat !bg-center"
      />
      <div className="containerr min-h-[42.5rem] md:min-h-screen pt-[3.4375rem] md:pt-[4.6875rem] flex flex-col items-start justify-start md:justify-center">
        <div className="relative max-w-none sm:max-w-[31rem] md:max-w-[36rem] pt-[3.2rem] md:pt-0 before:content-[''] before:absolute before:top-[3px] before:left-[-3.75rem] before:bg-primary before:w-0 before:lg:w-1.5 before:h-0 before:lg:h-full before:rounded-lg">
          <div className="text-[2rem] md:text-[3.125rem] font-bold leading-none">
            Cùng nhau chia sẻ
          </div>
          <h1 className="text-[2rem] md:text-[3.125rem] font-bold text-primary">
            Manga - Light Novel
          </h1>
          <p className="text-base md:text-lg tracking-[.2px] mt-3 md:mt-4">
            Nếu bạn là translator và đang mong muốn sở hữu một trang quản lý
            riêng cho mình nhưng vẫn muốn có liên kết với các translator khác
            thì đây là nơi dành cho bạn.
          </p>
        </div>
        <Button
          size="large"
          className="mt-6 md:mt-7"
          onClick={redirectToMainPage}
        >
          Tham gia ngay
        </Button>
      </div>
    </motion.div>
  )
}

export default Hero
