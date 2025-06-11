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
          In today's rapidly evolving world, the intersection of technology, society, and culture is more pronounced than ever. This article explores the multifaceted impact of modern advancements on our daily lives, from education and finance to health and entertainment.
        </p>
        <h2>Introduction</h2>
        <p>
          The digital revolution has transformed the way we communicate, learn, and work. With the advent of artificial intelligence, blockchain, and the Internet of Things, new opportunities and challenges have emerged across all sectors.
        </p>
        <h2>Section 1: The Rise of Online Education</h2>
        <p>
          Online education platforms have democratized access to knowledge. Students from remote areas can now attend lectures from world-renowned professors. However, this shift also brings challenges such as digital literacy gaps and the need for self-motivation.
        </p>
        <ul>
          <li>Massive Open Online Courses (MOOCs) are now mainstream.</li>
          <li>Virtual classrooms foster global collaboration.</li>
          <li>Adaptive learning technologies personalize the experience.</li>
        </ul>
        <h2>Section 2: Financial Technology (FinTech)</h2>
        <p>
          FinTech has revolutionized banking, investing, and personal finance. Mobile wallets, robo-advisors, and cryptocurrencies are just a few innovations making finance more accessible and efficient.
        </p>
        <h3>Benefits of FinTech</h3>
        <ul>
          <li>Lower transaction costs</li>
          <li>Greater financial inclusion</li>
          <li>Real-time analytics and fraud detection</li>
        </ul>
        <h2>Section 3: Health and Wellness in the Digital Age</h2>
        <p>
          Wearable devices, telemedicine, and health apps empower individuals to take charge of their well-being. Yet, concerns about data privacy and the digital divide persist.
        </p>
        <blockquote>
          “The greatest wealth is health.” — Virgil
        </blockquote>
        <h2>Section 4: The Future of Entertainment</h2>
        <p>
          Streaming services, virtual reality, and interactive media are reshaping how we consume content. The entertainment industry is more global and diverse, but also faces issues like copyright infringement and content moderation.
        </p>
        <h2>Conclusion</h2>
        <p>
          As technology continues to advance, its influence on society will only grow. Embracing innovation while addressing its challenges is key to building a more inclusive and prosperous future for all.
        </p>
        <p>
          <strong>Further Reading:</strong> Explore more articles on education, finance, health, and technology in our blog categories.
        </p>
      </article>
    </main>
  );
}
