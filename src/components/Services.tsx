
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Hammer, PaintBucket, Wrench, Building, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Custom Home Building",
      description: "From foundation to finish, we build your dream home with meticulous attention to detail and quality craftsmanship.",
      features: ["Custom floor plans", "Premium materials", "Energy efficient design"]
    },
    {
      icon: Hammer,
      title: "Home Renovations",
      description: "Transform your existing space with our comprehensive renovation services, breathing new life into your home.",
      features: ["Kitchen remodeling", "Bathroom upgrades", "Room additions"]
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Professional commercial building services for offices, retail spaces, and industrial facilities.",
      features: ["Office buildings", "Retail spaces", "Warehouses"]
    },
    {
      icon: PaintBucket,
      title: "Interior Design & Finishing",
      description: "Complete interior finishing services to make your space both beautiful and functional.",
      features: ["Interior design", "Flooring installation", "Paint & finishes"]
    },
    {
      icon: Wrench,
      title: "Home Maintenance",
      description: "Keep your home in perfect condition with our ongoing maintenance and repair services.",
      features: ["Regular inspections", "Preventive maintenance", "Emergency repairs"]
    },
    {
      icon: Zap,
      title: "Smart Home Integration",
      description: "Modernize your home with cutting-edge smart home technology and automation systems.",
      features: ["Home automation", "Security systems", "Energy management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive building services 
            to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
