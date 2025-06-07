import PostCard from "./post-card";

const featuredArticles = [
  {
    id: 14,
    title: "Iron Mike: The Knockout King and Enduring Legacy of Mike Tyson",
    image: "https://picsum.photos/id/49/200/300",
    date: "April 12, 2024",
  },
  {
    id: 15,
    title: "Martha Stewart: The Empress of Domesticity",
    image: "https://picsum.photos/id/45/200/300",
    date: "April 11, 2024",
  },
  {
    id: 16,
    title: "“Oppenheimer” Screening in Japan Stirs Unease Amid Nuclear Legacy",
    image: "https://picsum.photos/id/46/200/300",
    date: "March 29, 2024",
  },
  {
    id: 17,
    title: "Dive into the Blocky Brilliance: Exploring the World of Minecraft",
    image: "https://picsum.photos/id/47/200/300",
    date: "February 24, 2024",
  },
  {
    id: 18,
    title: "Oinktastic Fun: Exploring the World of Peppa Pig With Us",
    image: "https://picsum.photos/id/48/200/300",
    date: "February 24, 2024",
  },
];

export default function Posts() {
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
