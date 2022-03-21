import Cta from 'assets/cta.png'
import { redirectToMainPage } from 'utils/functions'
import Button from './Button'

function CallToAction() {
  return (
    <div className="section-container">
      <div className="containerr flex items-center gap-20">
        <img src={Cta} alt="cta" className="max-h-[28.75rem]" />
        <div className="text-center">
          <h1 className="text-[2.75rem] font-bold">
            Hãy đăng nhập và đăng truyện <br /> của bạn ngay hôm nay
          </h1>
          <Button size="large" className="mt-10" onClick={redirectToMainPage}>
            Tham gia ngay
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
