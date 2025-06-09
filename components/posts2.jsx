import PostCard from "./post-card";

const featuredArticles = [
  {
    id: 14,
    title: "The Hidden Power of Street Photography",
    image: "https://picsum.photos/id/88/800/800",
    date: "April 12, 2024",
  },
  {
    id: 15,
    title: "How Ancient Architecture ",
    image: "https://picsum.photos/id/33/400/400",
    date: "April 11, 2024",
  },
  {
    id: 16,
    title: "AI vs. Creativity: Can Machines Replace Artists?",
    image: "https://picsum.photos/id/102/400/400",
    date: "March 29, 2024",
  },
  {
    id: 17,
    title: "The Rise of Micro Adventures",
    image: "https://picsum.photos/id/76/400/400",
    date: "February 24, 2024",
  },
  {
    id: 18,
    title: "Coffee Culture Around the World: A Global Brew",
    image: "https://picsum.photos/id/59/400/400",
    date: "February 24, 2024",
  },
];

export default function Posts2() {
  return (
    <div className="bg-tertiary p-4">
      <div className="grid md:grid-cols-3 gap-4">
        {featuredArticles.map((article) => (
          <PostCard
            key={article.id}
            title={article.title}
            image={article.image}
            className={article.id == 14 && "md:col-span-2"}
            textClassName="!text-2xl !-mt-4 text-xl"
            floating={false}
            imageClassName={"!h-[250px]"}
          />
        ))}
      </div>
    </div>
  );
}
