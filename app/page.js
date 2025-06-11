import ByCategory from "@/components/by-category";
import FeaturedPosts from "@/components/featured-posts";
import News from "@/components/news";
import PostCard from "@/components/post-card";
import Posts from "@/components/posts";
import Posts2 from "@/components/posts2";
import SidebarPosts from "@/components/sidebar-post";
import Slider from "@/components/slider";
import SubscribeBanner from "@/components/subscribe-banner";
import TrendingNotif from "@/components/trending-notif";

const sliderArc = [
  {
    id: 1,
    title: "Transform Your Bathroom with Simple and Affordable Upgrades",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    date: "December 4, 2023",
    category: "Home Improvement",
  },
  {
    id: 2,
    title:
      "Unlocking Culinary Bliss: Revamping Your Kitchen for Effortless Delight",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    date: "December 4, 2023",
    category: "Kitchen Design",
  },
  {
    id: 3,
    title:
      "Mastering the Art of Tiny Living: Elevate Your Small Apartment Game",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    date: "December 4, 2023",
    category: "Interior Design",
  },
  {
    id: 4,
    title:
      "Crafting a Warm Welcome: Elevate Your Living Space into a Hub of Hospitality",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    date: "December 2, 2023",
    category: "Home Decor",
  },
];

const featuredArticles = [
  {
    id: 1,
    title:
      "The Impact of Artificial Intelligence on Human Creativity and Intellectual Labor",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    date: "October 4, 2024",
    category: "Artificial Intelligence",
    isNew: true,
  },
  {
    id: 2,
    title: "How Responsible AI Can Mitigate Bias, Inefficiency, and More",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    date: "April 8, 2024",
    category: "Artificial Intelligence",
  },
];

export default function Home() {
  return (
    <div>
      <TrendingNotif />
      <div className="p-4 pt-0 bg-secondary">
        <div className="grid md:flex gap-4 w-fit">
          <Slider
            className={"max-w-[500px] w-full"}
            slides={sliderArc.map((i, n) => (
              <PostCard
                key={n}
                title={i.title}
                image={i.image}
                category={i.category.split(" ")}
              />
            ))}
          />
          <div className="grid gap-4">
            {featuredArticles.map((article, index) => (
              <PostCard
                key={index}
                title={article.title}
                image={article.image}
                category={article.category.split(" ")}
                imageClassName="!h-[200px] !w-[400px]"
                className="h-[200px] w-[300px]"
                textClassName="!text-sm  mb-1"
              />
            ))}
          </div>
          <SidebarPosts />
        </div>
      </div>
      <FeaturedPosts />
      <ByCategory />
      <Posts />
      <SubscribeBanner />
      <Posts2 />
      <News />
    </div>
  );
}
