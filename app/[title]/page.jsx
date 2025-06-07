export function generateMetadata({ params }) {
  return {
    title: decodeURIComponent(params.title),
  };
}

export default function BlogPage({ params }) {
  const title = decodeURIComponent(params.title);

  return (
    <main className="px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-white">
        {title.split("-").join(" ")}
      </h1>
      <p className="text-gray-300 text-sm mb-8">
        Published on {new Date().toDateString()}
      </p>

      <article className="prose prose-lg text-gray-300 prose-headings:text-white prose-blockquote:text-white max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          tempor lacus, at fermentum turpis congue sit amet. Suspendisse
          dignissim lorem sed justo sollicitudin, a volutpat justo rhoncus.
          Maecenas in sem sed elit convallis tincidunt.
        </p>

        <h2>Subheading Example</h2>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Aenean imperdiet efficitur felis, nec
          fringilla purus vulputate ac. Nullam non risus nec nulla posuere
          placerat.
        </p>

        <ul>
          <li>
            Ut feugiat nisl at orci ullamcorper, vitae cursus quam laoreet.
          </li>
          <li>
            Mauris consequat, purus non dapibus cursus, nisl justo aliquet
            justo.
          </li>
          <li>
            Donec ullamcorper orci ac leo cursus, sed vehicula magna tempor.
          </li>
        </ul>

        <h3>Another Subheading</h3>
        <p>
          Vestibulum id sapien eu elit varius porta. Aliquam erat volutpat. In
          bibendum, erat in feugiat eleifend, nisi justo porttitor erat, id
          vestibulum felis leo vitae magna.
        </p>

        <blockquote>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          luctus urna sed urna ultricies ac tempor dui sagittis.”
        </blockquote>

        <p>
          Morbi consectetur, justo nec pulvinar luctus, erat arcu interdum
          velit, ac tincidunt justo nulla vel magna. Sed fermentum vehicula
          turpis non pulvinar.
        </p>
      </article>
    </main>
  );
}
