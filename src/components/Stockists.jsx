/* Placeholder names until the client sends real stockist logos. */
const stockists = [
  'Hotel Annapurna',
  'Peak Mart',
  'Café Himal',
  'Everest Foods',
  'Blue Yak Resort',
  "Sherpa's Kitchen",
]

export default function Stockists() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline gap-x-10 gap-y-3 px-5 py-8 sm:px-8">
        <p className="type-label text-[10px] text-ink-mute">Poured across the valley at</p>
        <ul className="flex flex-wrap items-baseline gap-x-10 gap-y-3">
          {stockists.map((name) => (
            <li key={name} className="type-data text-lg text-ink-mute">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
