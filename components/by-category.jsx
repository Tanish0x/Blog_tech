import { Clock } from "lucide-react";
import SidebarPosts from "./sidebar-post";
import Link from "next/link";

const featuredArticles = [
  {
    id: 5,
    title: "What is a MOAT in Business?",
    image: "https://picsum.photos/id/31/800/400",
    date: "March 3, 2025",
  },
  {
    id: 6,
    title: "Diabetes",
    image: "https://picsum.photos/id/32/800/400",
    date: "April 30, 2025",
  },
  {
    id: 7,
    title:
      "Digital Arrest Scams and Family Emergency Scams in India: How They Work, Red Flags, and What to Do",
    image: "https://picsum.photos/id/33/800/400",
    date: "June 3, 2025",
  },
  {
    id: 8,
    title:
      "The Psychology of Money: Understanding How Emotions Shape Financial Decisions",
    image: "https://picsum.photos/id/34/800/400",
    date: "December 4, 2024",
  },
];
const featuredArticles1 = [
  {
    id: 9,
    title: "Long Term Fat Loss – 12 Easy Steps",
    image: "https://picsum.photos/id/35/800/400",
    date: "April 21, 2025",
  },
  {
    id: 10,
    title: "OTP Scam Explained: Common Tactics and How to Stay Safe",
    image: "https://picsum.photos/id/36/800/400",
    date: "June 2, 2025",
  },
  {
    id: 11,
    title:
      "In an era of algorithmic trading and artificial intelligence, what is the future role of human decision-making in finance?",
    image: "https://picsum.photos/id/37/800/400",
    date: "October 11, 2024",
  },
];
const featuredArticles2 = [
  {
    id: 12,
    title:
      "Unmasking the ‘Invisible Rulers’: How Social Media Shapes Our Reality",
    image: "https://picsum.photos/id/38/800/400",
    date: "September 13, 2024",
  },
  {
    id: 13,
    title:
      "WhatsApp Job Scams in 2025: How to Spot Fake Offers, Protect Yourself, and Find Legit Online Work",
    image: "https://picsum.photos/id/39/800/400",
    date: "May 30, 2025",
  },
];

export default function ByCategory() {
  return (
    <div className="grid md:grid-cols-3 items-start gap-4 py-4 px-4 bg-tertiary">
      <div className="grid">
        <div className="border-b-2 border-primary">
          <div className="bg-primary py-1 uppercase px-2 text-sm font-bold w-fit">
            Featred Posts
          </div>
        </div>
        {featuredArticles.map((article) => (
          <div key={article.id} className="cursor-pointer">
            <div className="pt-[15px]">
              <div className="flex gap-4">
                {/* Article Image */}
                <div className="flex-shrink-0">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={80}
                    height={80}
                    className="h-[80px] w-[80px] object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-sm leading-tight mb-2 line-clamp-3">
                    {article.title}
                  </h3>

                  <div className="flex items-center text-gray-400 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid">
        <div className="border-b-2 border-primary">
          <div className="bg-primary py-1 uppercase px-2 text-sm font-bold w-fit">
            Health & Fitness
          </div>
        </div>
        {featuredArticles1.map((article) => (
          <div key={article.id} className="cursor-pointer">
            <div className="pt-[15px]">
              <div className="flex gap-4">
                {/* Article Image */}
                <div className="flex-shrink-0">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={80}
                    height={80}
                    className="h-[80px] w-[80px] object-cover"
                  />
                </div>

                {/* Article Content */}
                <Link
                  href={`/${article.title.split(" ").join("-")}`}
                  className="flex-1 min-w-0"
                >
                  <h3 className="font-bold text-white text-sm leading-tight mb-2 line-clamp-3">
                    {article.title}
                  </h3>

                  <div className="flex items-center text-gray-400 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{article.date}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid">
        <div className="border-b-2 border-primary">
          <div className="bg-primary py-1 uppercase px-2 text-sm font-bold w-fit">
            Technology & Gadgets
          </div>
        </div>
        {featuredArticles2.map((article) => (
          <div key={article.id} className="cursor-pointer">
            <div className="pt-[15px]">
              <div className="flex gap-4">
                {/* Article Image */}
                <div className="flex-shrink-0">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={80}
                    height={80}
                    className="h-[80px] w-[80px] object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-sm leading-tight mb-2 line-clamp-3">
                    {article.title}
                  </h3>

                  <div className="flex items-center text-gray-400 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
