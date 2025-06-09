import Link from "next/link";

const links = [
  {
    title: "Human evolution in a nutshell",
    url: "https://example.com/link1",
  },
  {
    title: "The extensive use of ai in the 21st century",
    url: "https://example.com/link2",
  },
  {
    title: "Most played games of 21st century",
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
            <Link
              href={`/${link.title.split(" ").join("-")}`}
              key={index}
              className="text-sm font-bold text-white text-nowrap"
            >
              <span className="mr-2 p-1 px-2 rounded bg-secondary">
                {index + 1}
              </span>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
