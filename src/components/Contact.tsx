import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll be in touch soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    });
  };

  const handleWhatsApp = (number: string) => {
    const message = encodeURIComponent("Hello! I'm interested in learning more about Marfields marble.");
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Let's Build Something <span className="text-gold">Timeless</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Reach out to discuss your next project or request samples
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Project Type
                    </label>
                    <Input
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      placeholder="Residential / Commercial"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Inquiry
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <MessageCircle className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Quick response</p>
                </div>
              </div>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleWhatsApp('393899516628')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  +39 389 951 6628 (IT)
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleWhatsApp('919009033077')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  +91 9009033077 (IN)
                </Button>
              </div>
            </Card>

            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">Send us a message</p>
                </div>
              </div>
              <a 
                href="mailto:marfields.it@gmail.com"
                className="text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                marfields.it@gmail.com
              </a>
            </Card>

            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Direct Call</h3>
                  <p className="text-sm text-muted-foreground">Business hours</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+39 389 951 6628</p>
                <p>+91 9009033077</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
