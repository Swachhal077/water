import { Fragment } from 'react'

import Header from './Header'

const PEAK_IMG =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80'

const specs = [
  { label: 'Source', value: 'Protected spring' },
  { label: 'Altitude', value: '3,600 m' },
  { label: 'pH', value: '7.6' },
  { label: 'TDS', value: '96 mg/L' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-glacier text-white"
    >
      <img
        src={PEAK_IMG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-45 mix-blend-luminosity"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-glacier/60 via-glacier/10 to-glacier" />

      <Header />

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 sm:px-8">
        <div className="flex flex-1 flex-col justify-center py-10 sm:py-14">
          <h1 className="type-display max-w-4xl text-[clamp(3rem,8vw,5.5rem)]">
            <span className="hero-rise block">Born at</span>
            <span className="hero-rise block text-brand" style={{ animationDelay: '120ms' }}>
              3,600 metres
            </span>
          </h1>
          <p
            className="hero-rise mt-6 max-w-md text-base leading-relaxed text-white/85"
            style={{ animationDelay: '240ms' }}
          >
            Every bottle of MODI begins as Himalayan snowmelt, filtered for
            years through mountain rock. We capture it at the spring, bottle
            it in the valley, and drive it to your door.
          </p>
          <div
            className="hero-rise mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: '360ms' }}
          >
            <a
              href="#contact"
              className="type-label bg-white px-7 py-3.5 text-xs text-glacier transition-colors hover:bg-brand hover:text-white"
            >
              Order water
            </a>
            <a
              href="#analysis"
              className="type-label border border-white/50 px-7 py-3.5 text-xs text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Read the analysis
            </a>
          </div>
        </div>
      </div>

      {/* Label spec line — the bottom row of every MODI bottle label,
          running as a ticker. */}
      <div
        className="hero-rise marquee w-full overflow-hidden border-t border-white/25 py-6"
        style={{ animationDelay: '480ms' }}
      >
        <div className="marquee-track">
          {/* Eight tiles, animated to -50%: the four that make up each half
              are wider than any realistic viewport, so no gap is ever
              exposed at the trailing edge. Only the first is read out. */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((copy) => (
            <dl
              key={copy}
              className="flex shrink-0 items-stretch gap-x-16 pr-16"
              aria-hidden={copy > 0 || undefined}
            >
              {specs.map((spec) => (
                <Fragment key={spec.label}>
                  <div>
                    <dt className="type-label text-[10px] whitespace-nowrap text-white/60">
                      {spec.label}
                    </dt>
                    <dd className="type-data mt-1 text-2xl whitespace-nowrap">{spec.value}</dd>
                  </div>
                  {/* Hairline between every spec, including after the last one
                      so the seam between tiles is divided like the rest. */}
                  <span aria-hidden="true" className="w-px shrink-0 bg-white/20" />
                </Fragment>
              ))}
            </dl>
          ))}
        </div>
      </div>
    </section>
  )
}
