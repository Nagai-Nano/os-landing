import { benefits } from 'utils/data'

function Benefits() {
  return (
    <div className="bg-primary-lv1 section-container">
      <div className="containerr">
        <div className="mb-20">
          <h1 className="text-[2.75rem] font-bold mb-2.5">Lợi ích</h1>
          <p className="text-lg text-text-color tracking-[.2px]">
            Tối ưu hóa trải nghiệm cá nhân luôn là ưu tiên hàng đầu
          </p>
        </div>
        <div className="grid grid-cols-2 gap-20">
          {benefits.map(({ title, desc, Icon }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="p-6 bg-primary-lv2 rounded-full">
                <Icon className="text-primary" />
              </div>
              <div>
                <div className="text-[1.5rem] leading-none mb-2.5 font-medium">
                  {title}
                </div>
                <div className="text-text-color/90">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Benefits
