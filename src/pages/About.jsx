export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start pt-4">
      {/* Bio Column */}
      <div className="space-y-5 text-neutral-800 text-base leading-relaxed">
        <p>hey!</p>

        <p>
          i recently graduated from columbia university where i studied applied math + cs
        </p>

        <p>
          i love all things design &amp; data
        </p>

        <p>
          when i&apos;m not working with data, you&apos;ll find me crocheting stuffed animals,
          binge watching television shows, or ranking restaurants on beli
        </p>

        <div className="pt-4 space-y-1 text-base">
          <p>
            <span className="font-semibold">contact me at: </span>
            <a href="mailto:yejenny2004@gmail.com" className="underline hover:text-neutral-500">
              yejenny2004@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">or on linkedin: </span>
            <a
              href="https://linkedin.com/in/jennyzxye"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-neutral-500"
            >
              jennyzxye
            </a>
          </p>
        </div>
      </div>

      {/* Portrait Column */}
      <div className="flex justify-center md:justify-end">
        <div className="max-w-xs w-full overflow-hidden rounded-lg shadow-sm bg-neutral-100">
          <img
            src="public/images/me.jpg"
            alt="Jenny Ye"
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden h-96 w-full bg-neutral-100 items-center justify-center text-base text-neutral-400">
            [Portrait Photo]
          </div>
        </div>
      </div>
    </section>
  );
}