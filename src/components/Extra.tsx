import PerfectScrollbar from 'react-perfect-scrollbar'

import { ArrowRight } from 'icons'
import { extras } from 'utils/data'

function Extra() {
  return (
    <div id="extra" className="bg-primary-lv1 section-container">
      <div className="containerr grid grid-cols-2 items-center gap-16">
        <div className="">
          <h1 className="text-[2.75rem] font-bold mb-2.5">Góc thư giãn</h1>
          <p className="text-lg text-text-color tracking-[.2px]">
            Kho ảnh cosplay chất lượng luôn được cập nhật mỗi ngày, nơi thích
            hợp để xả stress sau những giờ dịch dọt căng thẳng.
          </p>
          <a
            className="base-transition inline-flex mt-4 font-medium text-primary items-center gap-2 hover:text-primary/90"
            href="https://otakusan.net/Cosplay"
            target="_blank"
            rel="noreferrer"
          >
            Thư giãn thêm <ArrowRight />
          </a>
        </div>
        <PerfectScrollbar
          className="grid grid-cols-3 gap-3 max-h-[41rem] overflow-auto"
          options={{ wheelPropagation: false }}
        >
          {extras.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={idx.toString()}
              className="w-full h-[16.25rem] object-cover rounded-sm"
              style={{ boxShadow: '0px 2px 16px rgba(110, 170, 183, 0.25)' }}
            />
          ))}
        </PerfectScrollbar>
      </div>
    </div>
  )
}

export default Extra
