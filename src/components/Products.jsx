const JAR_IMG =
  'https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&w=1200&q=80'
const BOTTLES_IMG =
  'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80'
const LABEL_IMG =
  'https://images.unsplash.com/photo-1553564552-02656d6a2390?auto=format&fit=crop&w=800&q=80'

/* One format carries this business, so the section is weighted the way the
   route is: the 20 L jar takes a solid glacier panel — the only dark block on
   a white section, and the bridge into the footer — while the two retail
   formats sit beside it as small tiles, small because they are small formats.
   The volume and the name lock up on one baseline across Archivo's width
   axis: the litres in the 68% condensed cut, the name in the 125% display
   cut. Narrow against wide is the page's own contrast, used loud here once. */
const retail = [
  {
    name: 'Bottles',
    size: '500 mL · 1 L',
    body: 'Sealed cases for shops, cafés, and events. Chilled on request.',
    img: BOTTLES_IMG,
    alt: 'MODI retail bottles, chilled and sealed',
  },
  {
    name: 'Custom label',
    size: 'By the pallet',
    body: 'Your name on our bottle. We print, fill, and deliver the run.',
    img: LABEL_IMG,
    alt: 'A custom-labelled MODI bottle being poured',
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2
          data-reveal
          className="type-display text-[clamp(2.25rem,5.5vw,3.75rem)]"
        >
          What we deliver
        </h2>

        {/* The jar panel sets the height; the retail column rides centred
            against it rather than hanging from the top edge. */}
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* The jar, on its own ground. */}
          <article
            data-reveal
            className="flex flex-col bg-glacier p-6 text-white sm:p-9"
          >
            <img
              src={JAR_IMG}
              alt="The refillable MODI 20 litre jar"
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover"
            />

            {/* The lockup: litres condensed, name expanded, one baseline. */}
            <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="type-data text-[clamp(3.25rem,8.5vw,5.25rem)] leading-[0.85] text-brand">
                20 L
              </span>
              <h3 className="type-display text-[clamp(1.75rem,4vw,2.5rem)]">
                Jar
              </h3>
            </div>

            <p className="type-label mt-4 text-[11px] text-white/65">
              Home &amp; office · refillable
            </p>

            <p className="mt-5 max-w-md text-base leading-relaxed text-pretty text-white/85">
              Sanitized, refilled, and delivered on the day you pick. Most of
              the valley knows us by this jar — it has been up and down the
              route hundreds of times.
            </p>

            <a
              href="#contact"
              className="type-label group mt-8 inline-flex items-center gap-3 self-start bg-white px-7 py-4 text-xs text-glacier transition-colors duration-300 hover:bg-ice focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
            >
              Get jar pricing
              <span
                aria-hidden="true"
                className="type-data text-base transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </article>

          {/* The retail formats, at retail size. */}
          <div className="flex flex-col gap-8 sm:gap-10">
            {retail.map((product, i) => (
              <article
                key={product.name}
                data-reveal
                style={{ animationDelay: `${(i + 1) * 110}ms` }}
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-start gap-x-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-x-7"
              >
                <img
                  src={product.img}
                  alt={product.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full bg-ice object-cover"
                />

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="type-display text-xl sm:text-2xl">
                      {product.name}
                    </h3>
                    <span className="type-data text-[15px] text-brand-deep">
                      {product.size}
                    </span>
                  </div>

                  <p className="mt-2.5 text-[15px] leading-relaxed text-pretty text-ink-mute">
                    {product.body}
                  </p>

                  <a
                    href="#contact"
                    className="type-label group mt-4 inline-flex items-center gap-2 text-[11px] text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    <span className="underline-offset-4 group-hover:underline">
                      Get pricing
                    </span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}

            {/* The corner the layout leaves over, spent on the question a
                first-time buyer actually arrives with. */}
            <div
              data-reveal
              style={{ animationDelay: '330ms' }}
              className="bg-ice p-6 sm:p-7"
            >
              <h3 className="type-display text-xl">Not sure which fits?</h3>
              <p className="mt-2.5 max-w-sm text-[15px] leading-relaxed text-pretty text-ink-mute">
                Tell us roughly how much water you get through in a week and
                we&rsquo;ll size the first order with you.
              </p>
              <a
                href="#contact"
                className="type-label group mt-4 inline-flex items-center gap-2 text-[11px] text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <span className="underline-offset-4 group-hover:underline">
                  Ask us
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
