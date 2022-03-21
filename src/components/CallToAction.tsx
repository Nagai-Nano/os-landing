import Cta from 'assets/cta.png'
import Button from 'components/Button'
import { redirectToMainPage } from 'utils/functions'

function CallToAction() {
  return (
    <div className="section-container">
      <div className="containerr flex flex-wrap lg:flex-nowrap justify-center items-center gap-16 md:gap-20">
        <img
          src={Cta}
          alt="cta"
          className="max-h-[23rem] md:max-h-[28.75rem] "
        />
        <div className="text-center order-[-1] lg:order-1">
          <h1 className="text-[2rem] md:text-[2.75rem] font-bold">
            Hãy đăng nhập và đăng truyện của bạn ngay hôm nay
          </h1>
          <Button size="large" className="mt-8" onClick={redirectToMainPage}>
            Tham gia ngay
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
