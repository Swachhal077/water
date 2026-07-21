const TRUCK_IMG =
  'https://images.unsplash.com/photo-1642738535034-e32c0be029c1?auto=format&fit=crop&w=1000&q=80'

/* Delivery gets the page's one warm photograph: jars on the back of a truck
   at dusk, mid-route. The ink panel beside it carries the terms of the
   service in the same term / figure / note grammar as the analysis.

   Orange is the delivery voice — it comes straight off the MODI logo and
   appears nowhere else on the page. */
const loop = [
  { step: 'Deliver', detail: 'Full jars at your door on your fixed day.' },
  { step: 'Collect', detail: 'Empties leave on the same truck.' },
  { step: 'Sanitize', detail: 'Washed, sterilised and inspected at the plant.' },
  { step: 'Refill', detail: 'Straight back onto the line, and onto the route.' },
]

/* The wheel: the loop as circular text, turning at truck speed. Chrome
   ignores textLength on a textPath, so the type is letter-spaced to fill
   the circumference (2π × 85) exactly — change the copy and the spacing
   needs re-fitting. */
const RING_TEXT = 'DELIVER → COLLECT → SANITIZE → REFILL → '

export default function Delivery() {
  return (
    <section id="delivery" className="bg-accent text-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 data-reveal className="type-display text-[clamp(2.25rem,5.5vw,3.75rem)]">
          Door to door,
          <br />
          week after week
        </h2>

        <div className="mt-12 grid lg:grid-cols-2">
          <img
            data-reveal
            src={TRUCK_IMG}
            alt="A delivery truck stacked with water jars heading down the valley road at dusk"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover object-[50%_55%] lg:h-full lg:aspect-auto"
          />

          <div
            data-reveal
            className="flex flex-col bg-ink p-8 text-white sm:p-12 lg:order-first"
            style={{ animationDelay: '120ms' }}
          >
            <p className="max-w-md text-base leading-relaxed text-white/85">
              Homes, offices, hotels, and shops across the valley get MODI on a
              fixed weekly route. Your empties leave with the same truck that
              brings the full jars — nothing goes to waste, and nothing runs
              out.
            </p>

            <dl className="mt-10 border-t border-white/25 pt-6">
              <dt className="type-label text-[11px] text-white/60">
                Route days
              </dt>
              <dd>
                <span className="type-data block text-3xl sm:text-4xl">
                  Tue · Thu · Sat
                </span>
                <span className="mt-2 block text-sm leading-snug text-white/70">
                  Fixed weekly rounds, valley-wide. Miss a day and the next one
                  is never far.
                </span>
              </dd>
            </dl>

            {/* The wheel fills the panel's quiet middle: the four steps
                turning in the delivery orange, every week in the hub. */}
            <div className="relative mx-auto mt-14 mb-6 w-full max-w-[20rem] sm:max-w-[24rem] lg:my-auto lg:translate-y-8">
              <svg viewBox="0 0 200 200" aria-hidden="true" className="w-full">
                <defs>
                  <path
                    id="cap-ring"
                    d="M100 15a85 85 0 1 1-.01 0"
                    fill="none"
                  />
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="99"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1"
                  opacity="0.45"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="76"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1"
                  opacity="0.45"
                />
                <g className="cap-spin">
                  <text
                    className="type-label"
                    fontSize="16"
                    style={{ letterSpacing: '0.215em' }}
                    fill="var(--color-accent)"
                  >
                    <textPath href="#cap-ring">{RING_TEXT}</textPath>
                  </text>
                </g>
              </svg>
              <p className="absolute inset-0 flex items-center justify-center text-center">
                <span className="type-display text-3xl sm:text-4xl">
                  Every
                  <br />
                  week
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* The four steps behind every stop, in truck order. The last arrow
            turns back — that's the whole business model. */}
        <ol
          aria-label="The MODI refill loop"
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {loop.map(({ step, detail }, i) => (
            <li
              key={step}
              data-reveal
              style={{ animationDelay: `${i * 110}ms` }}
              className="border-t-2 border-ink pt-4"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="type-display text-2xl sm:text-[1.7rem]">
                  {step}
                </h3>
                <span aria-hidden="true" className="type-data text-xl">
                  {i < loop.length - 1 ? '→' : '↺'}
                </span>
              </div>
              <p className="mt-2 max-w-xs text-[15px] leading-relaxed">
                {detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
