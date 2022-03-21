import { footerLinks } from 'utils/data'

function Footer() {
  return (
    <div className="border-t border-[#414141]">
      <div className="containerr flex flex-wrap items-center justify-center sm:justify-between py-6 text-sm gap-4">
        <div className="inline-flex items-center gap-4 md:gap-10">
          {footerLinks.map(({ label, url }) => (
            <a
              key={url}
              href={url}
              className="font-medium hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="">© {new Date().getFullYear()} Otaku Sanctuary.</div>
      </div>
    </div>
  )
}

export default Footer
