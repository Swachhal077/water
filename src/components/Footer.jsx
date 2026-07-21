import logo from '../assets/logo.jpg'

/* The footer is the label's last panel: ordering info typeset in the same
   term / figure / note grammar as the mineral analysis. The page closes on
   the story it has been telling all along — the descent itself, drawn as an
   elevation profile that runs out at your door, flush on the closing rule. */
const channels = [
  {
    term: 'Order',
    figure: 'orders@modiwater.example',
    href: 'mailto:orders@modiwater.example',
    note: 'Quotes and standing orders — answered the same day.',
  },
  {
    term: 'Call',
    figure: '+977 (0)00-000-0000',
    href: 'tel:+9770000000',
    note: 'Sun–Fri, 8:00–18:00. Nepali and English.',
  },
  {
    term: 'Routes',
    figure: 'Tue · Thu · Sat',
    note: 'Fixed weekly rounds, valley-wide.',
  },
]

/* Every section sits above the footer, so the index honestly points up. */
const index = [
  { href: '#water', label: 'The water' },
  { href: '#analysis', label: 'Analysis' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#products', label: 'Products' },
]

/* The whole journey as one line: summit, ridge, valley shelf, run-out. The
   final point exits at the bottom-right corner, into the closing rule.
   pathLength=1 lets the draw-in animation work in fractions. */
const PROFILE_LINE =
  'M0 52 L70 26 L150 64 L215 50 L300 104 L380 92 L470 128 L560 138 L660 134 L780 152 L920 168 L1080 182 L1200 199'

/* Stations sit at fractions of the 1200 × 200 viewBox, so the HTML labels
   stay pinned to the stretched SVG at any width (preserveAspectRatio="none"
   keeps the mapping linear on both axes). Figures match the Journey section —
   same stops, same numbers, now drawn to shape. Labels are always flagged
   above the terrain so they never cross the line.

   Delays are set against the stroke's own progress, not spread evenly: the
   2s draw runs on cubic-bezier(0.45, 0, 0.3, 1), so it passes 5.8% of the
   path at ~330ms, 55% at ~860ms and 90% at ~1355ms. Each dot lands a beat
   after the line has gone through it. */
const stations = [
  {
    term: 'The spring',
    figure: '3,600 m',
    x: '5.83%',
    y: '13%',
    labelClass: 'bottom-2.5 left-3',
    delay: '420ms',
  },
  {
    term: 'The plant',
    figure: '1,400 m',
    x: '55%',
    y: '67%',
    labelClass: 'bottom-2.5 left-3',
    delay: '960ms',
  },
  {
    term: 'Your door',
    figure: '0 km left',
    x: '90%',
    y: '91%',
    labelClass: 'right-3 bottom-3 text-right',
    delay: '1460ms',
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-glacier-deep text-white">
      <div className="mx-auto max-w-6xl px-5 pt-20 sm:px-8 sm:pt-28">
        {/* Two rows, not two stacks: the ask sits beside the mark, the
            channels beside the index. Because the second row starts on one
            grid line, the rule over the channels and the rule over the index
            are the same line across the footer — the alignment holds at any
            type size, instead of depending on two columns happening to grow
            to the same height. */}
        <div className="grid gap-x-24 gap-y-12 lg:grid-cols-[1.5fr_1fr]">
          <div data-reveal className="lg:col-start-1 lg:row-start-1">
            <h2 className="type-display text-[clamp(2.5rem,6vw,4.5rem)]">
              Order water
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/85">
              Call or write and we&apos;ll put you on this week&apos;s route —
              jars for the office, bottles for the shop, or a custom run for
              your hotel.
            </p>
          </div>

          <dl className="border-t border-white/25 lg:col-start-1 lg:row-start-2">
            {channels.map((channel, i) => (
              <div
                key={channel.term}
                data-reveal
                style={{ animationDelay: `${i * 90}ms` }}
                className="grid gap-x-8 gap-y-1 border-b border-white/15 py-6 sm:grid-cols-[7rem_1fr] sm:items-baseline"
              >
                <dt className="type-label text-[11px] text-white/60">
                  {channel.term}
                </dt>
                <dd>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="type-data text-2xl leading-none break-words transition-colors hover:text-brand sm:text-3xl"
                    >
                      {channel.figure}
                    </a>
                  ) : (
                    <span className="type-data block text-2xl leading-none sm:text-3xl">
                      {channel.figure}
                    </span>
                  )}
                  <span className="mt-2 block max-w-sm text-sm leading-snug text-white/70">
                    {channel.note}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          {/* Row 1, right: the mark, level with the ask. */}
          <div
            data-reveal
            className="lg:col-start-2 lg:row-start-1"
            style={{ animationDelay: '150ms' }}
          >
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                className="size-10 rounded-full bg-white object-cover"
              />
              <span className="leading-none">
                <span className="type-display block text-xl">MODI</span>
                <span className="type-label mt-1 block text-[10px] text-white/70">
                  Himalayan drinking water
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Bottling plant, valley road. Captured at a protected spring,
              bottled in the valley, lab-tested every batch.
            </p>
          </div>

          {/* Row 2, right: the index, on the channels' rule. */}
          <nav
            data-reveal
            aria-label="Page sections"
            className="lg:col-start-2 lg:row-start-2"
            style={{ animationDelay: '220ms' }}
          >
            <ul className="border-t border-white/25">
              {index.map((item) => (
                <li key={item.href} className="border-b border-white/15">
                  <a
                    href={item.href}
                    className="group flex items-baseline justify-between gap-6 py-4 transition-colors hover:text-brand"
                  >
                    <span className="type-data text-xl">{item.label}</span>
                    <span
                      aria-hidden="true"
                      className="type-label text-[11px] text-white/40 transition-colors group-hover:text-brand"
                    >
                      ↑
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* The descent, drawn: the elevation line the water travels is the
          last thing on the page, and it runs out at your door. */}
      <div data-reveal className="relative mt-16 sm:mt-20">
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-48 w-full sm:h-64"
        >
          <path
            d={`${PROFILE_LINE} L1200 200 L0 200 Z`}
            fill="var(--color-brand)"
            opacity="0.08"
          />
          {/* No vector-effect here on purpose. `non-scaling-stroke` measures
              the dash pattern in screen space, while pathLength={1} normalizes
              it to user space — and preserveAspectRatio="none" pulls the two
              apart, so `stroke-dasharray: 1` came up short and the line
              stopped before the last station. The shortfall scaled with the
              viewport: ~93% of the path at 1265px, ~65% at 1920px. Letting the
              stroke scale keeps both measurements in user space, so the dash
              covers the path exactly at every width. */}
          <path
            d={PROFILE_LINE}
            pathLength={1}
            fill="none"
            stroke="var(--color-brand)"
            strokeWidth="2"
            className="draw-line"
          />
        </svg>
        {stations.map((station) => (
          <div
            key={station.term}
            className="absolute"
            style={{
              left: station.x,
              top: station.y,
              '--station-delay': station.delay,
            }}
          >
            <span className="station-dot absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-4 ring-white/15" />
            <span
              className={`station-label absolute whitespace-nowrap ${station.labelClass}`}
            >
              <span className="type-label block text-[10px] text-white/60">
                {station.term}
              </span>
              <span className="type-data block text-lg leading-tight sm:text-xl">
                {station.figure}
              </span>
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 py-5 text-xs text-white/70 sm:px-8">
          <p>© 2026 MODI Himalayan Drinking Water. All rights reserved.</p>
          <a
            href="#home"
            className="type-label text-[10px] transition-colors hover:text-white"
          >
            Back to the top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
