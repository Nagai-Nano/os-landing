import Feature1 from 'assets/feature-1.png'
import Feature2 from 'assets/feature-2.png'
import Feature3 from 'assets/feature-3.png'
import Feature4 from 'assets/feature-4.png'
import Feature5 from 'assets/feature-5.png'

import Cos1 from 'assets/cos-1.jpg'
import Cos2 from 'assets/cos-2.jpg'
import Cos3 from 'assets/cos-3.jpg'
import Cos4 from 'assets/cos-4.jpg'
import Cos5 from 'assets/cos-5.jpg'
import Cos6 from 'assets/cos-6.jpg'
import Cos7 from 'assets/cos-7.jpg'
import Cos8 from 'assets/cos-8.jpg'
import Cos9 from 'assets/cos-9.jpg'
import Cos10 from 'assets/cos-10.jpg'
import Cos11 from 'assets/cos-11.jpg'
import Cos12 from 'assets/cos-12.jpg'

import { Task, Bell, Layout, News } from 'icons'

export const navItems = [
  { key: 'home', label: 'Trang chủ' },
  { key: 'benefits', label: 'Lợi ích' },
  { key: 'features', label: 'Tính năng' }
]

export const benefits = [
  {
    title: 'Dễ dàng thêm mới project',
    desc: 'Giao diện và cách thức thêm mới project đơn giản',
    Icon: Task
  },
  {
    title: 'Tùy chỉnh giao diện',
    desc: 'Bạn có thể tùy chỉnh giao diện của nhóm mình tùy thích',
    Icon: Layout
  },
  {
    title: 'Thông báo mọi hoạt động',
    desc: 'Bạn sẽ luôn được thông báo khi có comment hoặc tag mới',
    Icon: Bell
  },
  {
    title: 'Cập nhật tin tức',
    desc: 'Bạn có thể đăng tin tức của nhóm cho mọi người',
    Icon: News
  }
]

export const features = [
  {
    title: 'Hệ thống quản lý đơn giản',
    desc: 'Chỉ cần ấn vào "Đăng truyện" và đăng bài đầu tiên, hệ thống sẽ tự động tạo nhóm dịch cho bạn. Bạn có thể thêm, sửa & xóa projects của nhóm ở đây, bao gồm manga và light novel.',
    img: Feature1,
    url: 'https://otakusan.net/Home/NewAdmin'
  },
  {
    title: 'Trang riêng dành cho nhóm dịch',
    desc: 'Bạn có thể thay đổi thông tin nhóm dịch, giao diện của team page & cách hiển thị truyện... và hơn thế nữa.',
    img: Feature2,
    url: 'https://otakusan.net/Home/NewTranslationPage'
  },
  {
    title: 'Translator Workshop',
    desc: 'Nhấn bất kì chỗ nào của ảnh để chèn đoạn dịch vào đó. Khung dịch có thể được di chuyển ra chỗ khác bằng cách nắm kéo trên thanh Drag Bar.',
    img: Feature3,
    url: 'https://otakusan.net/Home/WorskopGuide'
  },
  {
    title: 'Lưu và xem lại những bộ đã theo dõi',
    desc: 'Không gian để bạn lưu lại những bộ truyện mình yêu thích. Hệ thống sẽ thông báo cho bạn khi có chapter mới.',
    img: Feature4
  },
  {
    title: 'Kho tàng sticker vui nhộn',
    desc: 'Sẽ không còn những cuộc trao đổi chiêu thức nhàm chán chỉ có chữ và chữ.',
    img: Feature5
  }
]

export const extras = [
  Cos1,
  Cos2,
  Cos3,
  Cos4,
  Cos5,
  Cos6,
  Cos7,
  Cos8,
  Cos9,
  Cos10,
  Cos11,
  Cos12
]

export const footerLinks = [
  { label: 'Otakusan', url: 'https://otakusan.net/' },
  { label: 'Facebook', url: 'https://www.facebook.com/gaming/otakusan.net2' },
  { label: 'Discord', url: 'https://discord.gg/Sc3M3ym' }
]
