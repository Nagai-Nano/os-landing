import { footerLinks } from 'utils/data'

function Footer() {
  return (
    <div className="border-t border-[#414141]">
      <div className="containerr flex flex-wrap items-center justify-between py-6 text-sm">
        <div className="inline-flex items-center gap-10">
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
        <div>© {new Date().getFullYear()} Otaku Sanctuary.</div>
      </div>
    </div>
  )
}

export default Footer
