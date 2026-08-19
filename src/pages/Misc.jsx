import { MISC_ITEMS } from '../data/misc';

export default function Misc() {
  return (
    <section className="space-y-8 animate-fadeIn">
      {/* 1 column on mobile, 2 columns on small screens, 3 columns on medium/large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {MISC_ITEMS.map((item) => (
          <div
            key={item.id}
            className="p-4 flex flex-col items-center justify-center transition-shadow"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full max-h-60 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden h-52 w-full bg-neutral-100 rounded items-center justify-center text-sm text-neutral-400 text-center px-2">
              [{item.title}]
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}