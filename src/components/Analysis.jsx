const GLASS_IMG =
  'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=80'

/* The copy says "printed on every label" — so this section shows the label:
   the mineral analysis typeset as the physical artifact, nutrition-facts
   grammar and all, stuck slightly askew on the glacier ground. */
const rows = [
  { term: 'Source', figure: 'Protected spring', note: 'Himalayan, 3,600 m' },
  { term: 'pH', figure: '7.6', note: 'Naturally alkaline' },
  { term: 'TDS', figure: '96 mg/L', note: 'Nothing stripped, nothing added' },
  { term: 'Treatment', figure: 'UV + ozone', note: 'No chlorine, no aftertaste' },
  { term: 'Testing', figure: 'Every batch', note: 'Cleared before it ships' },
  { term: 'Bottled', figure: 'In the valley', note: 'Kilometres from the spring' },
]

/* Bar widths for the label's barcode — decorative, fixed so it never
   re-renders differently. The viewBox width tracks the bar total, so more
   bars pack in tighter rather than stretching the strip. */
const BARCODE = [
  3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 2, 4, 1, 2, 1, 3, 1, 1, 2, 1, 4, 2, 1, 3, 1, 2, 1, 1, 3, 2,
  1, 3, 1, 2, 4, 1, 2, 1, 1, 3, 2, 1, 4, 1, 2, 1, 3, 1, 2, 2, 1, 4, 1, 3, 1, 1, 2, 3, 1, 2,
]
const BARCODE_W = BARCODE.reduce((sum, w) => sum + w, 0)

export default function Analysis() {
  return (
    <section id="analysis" className="bg-glacier text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-x-20 gap-y-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 data-reveal className="type-display text-[clamp(2.25rem,5.5vw,3.75rem)]">
              The analysis
            </h2>
            <p
              data-reveal
              className="mt-6 max-w-md text-base leading-relaxed text-pretty text-white/85"
              style={{ animationDelay: '80ms' }}
            >
              Printed on every label, tested on every batch. This is the whole
              recipe — there is nothing else in the bottle.
            </p>
            <img
              data-reveal
              src={GLASS_IMG}
              alt="MODI poured into a glass — no cloud, no colour, nothing to settle out"
              loading="lazy"
              decoding="async"
              className="mt-10 aspect-[4/3] w-full object-cover"
              style={{ animationDelay: '160ms' }}
            />
            <p
              data-reveal
              className="mt-5 max-w-xs text-sm leading-relaxed text-white/60"
              style={{ animationDelay: '240ms' }}
            >
              Full mineral report available on request.
            </p>
          </div>

          {/* The label. Rotation lives on the wrapper so the reveal's
              translate animation doesn't fight it. */}
          <div className="-rotate-1">
            <article
              data-reveal
              className="bg-ice p-7 text-ink shadow-2xl shadow-black/40 sm:p-10"
              style={{ animationDelay: '150ms' }}
            >
              <header className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
                <div>
                  <p className="type-display text-3xl">MODI</p>
                  <p className="type-label mt-1 text-[10px] text-ink-mute">
                    Himalayan drinking water
                  </p>
                </div>
                <p className="type-data text-2xl text-brand-deep">20 L</p>
              </header>

              <h3 className="type-label mt-6 border-b-[6px] border-ink pb-2 text-xs">
                Mineral analysis
              </h3>

              <dl>
                {rows.map((row) => (
                  <div
                    key={row.term}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 border-b border-ink/20 py-2.5"
                  >
                    <dt className="type-label text-[11px]">{row.term}</dt>
                    <dd className="text-right">
                      <span className="type-data block text-xl">{row.figure}</span>
                      <span className="block text-xs text-ink-mute">{row.note}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <footer className="mt-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
                <p className="type-label text-[10px] leading-relaxed text-ink-mute">
                  Batch № 2607 · Lab-tested
                  <br />
                  Bottled at 1,400 m
                </p>
                <div aria-hidden="true">
                  <svg viewBox={`0 0 ${BARCODE_W} 26`} className="h-7 w-44">
                    {BARCODE.reduce(
                      (acc, w, i) => {
                        acc.rects.push(
                          <rect
                            key={i}
                            x={acc.x}
                            y="0"
                            width={w}
                            height="26"
                            fill={i % 2 === 0 ? 'var(--color-ink)' : 'transparent'}
                          />,
                        )
                        acc.x += w
                        return acc
                      },
                      { x: 0, rects: [] },
                    ).rects}
                  </svg>
                  <p className="type-data mt-1 text-center text-[10px] tracking-[0.3em] text-ink-mute">
                    977 1400 3600
                  </p>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
