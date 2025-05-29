
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Clock,
      number: "20+",
      label: "Years Experience",
      description: "Two decades of building excellence"
    },
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied homeowners and businesses"
    },
    {
      icon: Award,
      number: "100+",
      label: "Projects Completed",
      description: "Successful builds and renovations"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Licensed & Insured",
      description: "Fully bonded and protected"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Sterling Builders
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2003, Sterling Builders has been the trusted choice for homeowners 
              and businesses seeking exceptional construction services. Our commitment to 
              quality craftsmanship, innovative design, and customer satisfaction has made 
              us a leader in the construction industry.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that every project is a reflection of our values: integrity, 
              excellence, and attention to detail. From the initial consultation to the 
              final walkthrough, we work closely with our clients to ensure their vision 
              becomes reality.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality First</h4>
                  <p className="text-gray-600">We use only the finest materials and employ skilled craftsmen.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">On-Time Delivery</h4>
                  <p className="text-gray-600">We respect your time and deliver projects when promised.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Transparent Communication</h4>
                  <p className="text-gray-600">Regular updates and clear communication throughout the process.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-3xl font-bold text-amber-600">
                      {stat.number}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-1">{stat.label}</h4>
                    <CardDescription className="text-sm">
                      {stat.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
