/* The descent is a real sequence — spring, plant, door — so the numbers
   here are altitudes and the staggered cards trace the drop. Each stop gets
   a photograph with its altitude stuck on like a label sticker, cut in the
   section's own ice. */
const stops = [
  {
    altitude: '3,600 m',
    place: 'The spring',
    body: 'Snowmelt spends years inside Himalayan rock before it surfaces at a protected spring — far above farms, roads, and anything else.',
    img: 'https://images.unsplash.com/photo-1761048152507-d9cb92734afa?auto=format&fit=crop&w=800&q=80',
    alt: 'Meltwater falling through Himalayan rock',
    offset: '',
  },
  {
    altitude: '1,400 m',
    place: 'The plant',
    body: 'In the valley we filter it, treat it with UV and ozone, and leave the natural minerals exactly where they are. Every batch is lab-tested before it leaves.',
    img: 'https://images.unsplash.com/photo-1783309529184-75986d6e472a?auto=format&fit=crop&w=800&q=80',
    alt: 'Rows of filled jars at the bottling plant',
    offset: 'lg:mt-24',
  },
  {
    altitude: '0 km left',
    place: 'Your door',
    body: 'Jars and bottles ride a fixed weekly route to homes, offices, hotels, and shops. Empties come back with us — sanitized, refilled, reused.',
    img: 'https://images.unsplash.com/photo-1606192158748-22d0e32054a4?auto=format&fit=crop&w=800&q=80',
    alt: 'A delivery motorbike loaded with water jars on a city street',
    offset: 'lg:mt-48',
  },
]

export default function Journey() {
  return (
    <section id="water" className="bg-ice">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 data-reveal className="type-display max-w-4xl text-[clamp(2.25rem,5.5vw,3.75rem)]">
          From the spring
          <br />
          <span className="text-brand-deep">down to your door</span>
        </h2>
        <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-ink-mute">
          We skipped the myths and kept the mountain. Three stops, and the
          water never sits still for long.
        </p>

        <ol className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {stops.map((stop, i) => (
            <li
              key={stop.place}
              data-reveal
              className={stop.offset}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative">
                <img
                  src={stop.img}
                  alt={stop.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
                {/* The altitude, stuck on the photo's corner in section ice —
                    the figure is the sticker. */}
                <p className="type-data absolute bottom-0 left-0 bg-ice pt-2.5 pr-6 text-4xl text-brand-deep sm:text-5xl">
                  {stop.altitude}
                </p>
              </div>
              <h3 className="type-display mt-4 text-xl">{stop.place}</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-mute">
                {stop.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
