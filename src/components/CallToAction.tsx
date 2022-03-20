import Cta from 'assets/cta.png'

function CallToAction() {
  return (
    <div className="section-container">
      <div className="containerr flex items-center gap-20">
        <img src={Cta} alt="cta" className="max-h-[28.75rem]" />
        <div className="text-center">
          <h1 className="text-[2.75rem] font-bold">
            Hãy đăng nhập và đăng truyện <br /> của bạn ngay hôm nay
          </h1>
          <button className="primary mt-10 !py-3 !px-8">Tham gia ngay</button>
        </div>
      </div>
    </div>
  )
}

export default CallToAction