const links = [
  {
    title: "Lorem ipusm dummy text of dummy industry",
    url: "https://example.com/link1",
  },
  {
    title: "Lorem ipusm dummy text of dummy industry",
    url: "https://example.com/link2",
  },
  {
    title: "Lorem ipusm dummy text of dummy industry",
    url: "https://example.com/link3",
  },
];
export default function TrendingNotif() {
  return (
    <div className="p-4 bg-secondary">
      <div className="flex items-center">
        <div className="bg-primary text-white py-2.5 px-5">
          <span className="text-base font-bold uppercase">Trending</span>
        </div>
        <div className="bg-tertiary py-3 px-3 flex overflow-x-scroll gap-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-sm font-bold text-white text-nowrap"
            >
              <span className="mr-2 p-1 px-2 rounded bg-secondary">
                {index + 1}
              </span>
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
