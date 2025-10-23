import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Choosing the Perfect Italian Marble for Your Home",
    excerpt: "Discover how to select the ideal marble type for different spaces in your home. From Carrara to Calacatta, learn which marble suits your aesthetic.",
    date: "March 15, 2025",
    image: "/placeholder.svg",
    category: "Design Guide",
  },
  {
    title: "The Journey of Italian Marble: From Quarry to Your Space",
    excerpt: "Explore the fascinating process of marble extraction, selection, and transportation from the historic quarries of Italy to your project.",
    date: "March 10, 2025",
    image: "/placeholder.svg",
    category: "Process",
  },
  {
    title: "Maintaining Your Italian Marble: Expert Care Tips",
    excerpt: "Learn professional techniques to preserve the beauty and longevity of your Italian marble surfaces with our comprehensive maintenance guide.",
    date: "March 5, 2025",
    image: "/placeholder.svg",
    category: "Maintenance",
  },
  {
    title: "2025 Marble Trends in Luxury Architecture",
    excerpt: "Stay ahead of the curve with the latest marble trends shaping luxury residential and commercial projects worldwide.",
    date: "February 28, 2025",
    image: "/placeholder.svg",
    category: "Trends",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Insights & Inspiration
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Expert guidance on Italian marble selection, care, and design trends
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-xs text-gold font-sans mb-3">
                  <span className="uppercase tracking-wide">{post.category}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground font-sans mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
