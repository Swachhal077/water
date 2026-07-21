import logo from '../assets/logo.jpg'

const links = [
  { href: '#water', label: 'The water' },
  { href: '#analysis', label: 'Analysis' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#products', label: 'Products' },
]

export default function Header() {
  return (
    <header className="relative z-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt=""
            className="size-10 rounded-full bg-white object-cover"
          />
          <span className="leading-none">
            <span className="type-display block text-xl text-white">MODI</span>
            <span className="type-label mt-1 block text-[10px] text-white/70">
              Himalayan drinking water
            </span>
          </span>
        </a>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="type-label text-xs text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="type-label border border-white/40 px-4 py-2 text-xs text-white transition-colors hover:bg-white hover:text-glacier"
          >
            Order water
          </a>
        </nav>
      </div>
    </header>
  )
}
