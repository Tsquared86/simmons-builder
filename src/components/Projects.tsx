
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Modern Luxury Home",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      category: "Custom Home",
      description: "A stunning 4,500 sq ft modern home featuring open concept living, smart home technology, and sustainable materials.",
      features: ["4 Bedrooms", "3.5 Bathrooms", "Smart Home", "Solar Panels"]
    },
    {
      title: "Downtown Office Complex",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      category: "Commercial",
      description: "A 15,000 sq ft office building in the heart of downtown, featuring modern amenities and energy-efficient design.",
      features: ["LEED Certified", "Modern Design", "Parking Garage", "Conference Center"]
    },
    {
      title: "Luxury Kitchen Renovation",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
      category: "Renovation",
      description: "Complete kitchen transformation with custom cabinetry, marble countertops, and professional-grade appliances.",
      features: ["Custom Cabinets", "Marble Counters", "Professional Appliances", "Wine Storage"]
    },
    {
      title: "Suburban Family Home",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      category: "Custom Home",
      description: "A beautiful 3,200 sq ft family home with traditional charm and modern conveniences in a quiet neighborhood.",
      features: ["3 Bedrooms", "2.5 Bathrooms", "2-Car Garage", "Large Backyard"]
    },
    {
      title: "Historic Home Restoration",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
      category: "Renovation",
      description: "Careful restoration of a 1920s historic home, preserving original character while adding modern amenities.",
      features: ["Historic Preservation", "Original Details", "Modern Updates", "Energy Efficient"]
    },
    {
      title: "Contemporary Townhouse",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80",
      category: "Custom Home",
      description: "A sleek 2,800 sq ft townhouse featuring contemporary design, rooftop terrace, and urban conveniences.",
      features: ["Rooftop Terrace", "Contemporary Design", "Urban Location", "High-End Finishes"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing our commitment 
            to quality, innovation, and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-amber-600 hover:bg-amber-700">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
