import { Card } from "@/components/ui/card";
import blogSelectionImage from "@/assets/blog-marble-selection.jpg";
import blogQuarryImage from "@/assets/blog-quarry-process.jpg";
import blogMaintenanceImage from "@/assets/blog-maintenance.jpg";
import blogTrendsImage from "@/assets/blog-design-trends.jpg";

const blogPosts = [
  {
    title: "How to Choose the Perfect Marble for Your Home",
    excerpt: "Discover the key factors to consider when selecting marble for different spaces in your luxury home.",
    date: "March 15, 2024",
    image: blogSelectionImage,
    category: "Guide"
  },
  {
    title: "The Art of Marble Extraction in Italian Quarries",
    excerpt: "Explore the centuries-old tradition of marble quarrying in the Apuan Alps of Tuscany.",
    date: "March 10, 2024",
    image: blogQuarryImage,
    category: "Process"
  },
  {
    title: "Maintaining Your Marble: Expert Tips",
    excerpt: "Learn professional techniques to keep your marble surfaces looking pristine for decades.",
    date: "March 5, 2024",
    image: blogMaintenanceImage,
    category: "Maintenance"
  },
  {
    title: "Latest Trends in Marble Interior Design",
    excerpt: "From minimalist aesthetics to bold statements, see how designers are using marble in 2024.",
    date: "February 28, 2024",
    image: blogTrendsImage,
    category: "Trends"
  }
];

const Blog = ({ showAll = false }: { showAll?: boolean }) => {
  const displayPosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 px-4 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Insights & <span className="text-gold">Inspiration</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Expert advice, industry insights, and inspiration from the world of luxury marble
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayPosts.map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-charcoal px-3 py-1 text-xs font-semibold rounded-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-card">
                <h3 className="mb-3 text-xl font-semibold text-card-foreground line-clamp-2 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <p className="text-xs text-gold">{post.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
