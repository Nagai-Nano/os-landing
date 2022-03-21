import HeroBg from 'assets/hero-bg.png'
import { redirectToMainPage } from 'utils/functions'
import Button from './Button'

function Hero() {
  return (
    <div
      className="w-full min-h-screen !bg-cover !bg-no-repeat !bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="containerr min-h-screen pt-[4.6875rem] flex flex-col items-start justify-center">
        <div className="relative max-w-[36rem] before:content-[''] before:absolute before:top-[3px] before:left-[-3.75rem] before:bg-primary before:w-1.5 before:h-full before:rounded-lg">
          <div className="text-[3.125rem] font-bold leading-none">
            Cùng nhau chia sẻ
          </div>
          <h1 className="text-[3.125rem] font-bold text-primary">
            Manga - Light Novel
          </h1>
          <p className="text-lg tracking-[.2px] mt-4">
            Nếu bạn là translator và đang mong muốn sở hữu một trang quản lý
            riêng cho mình nhưng vẫn muốn có liên kết với các translator khác
            thì đây là nơi dành cho bạn.
          </p>
        </div>
        <Button size="large" className="mt-7" onClick={redirectToMainPage}>
          Tham gia ngay
        </Button>
      </div>
    </div>
  )
}

export default Hero
