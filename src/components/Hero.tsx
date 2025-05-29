
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.movetohuntsville.com/uploadimage/167840116857043.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building Your 
            <span className="text-amber-400"> Dream Home</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            With over 20 years of experience, Simmons Builders transforms your vision into reality. 
            From custom homes to major renovations, we deliver exceptional craftsmanship and 
            unparalleled service.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center space-x-2 text-white">
              <CheckCircle className="text-amber-400" size={20} />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <CheckCircle className="text-amber-400" size={20} />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <CheckCircle className="text-amber-400" size={20} />
              <span>100+ Completed Projects</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
              onClick={scrollToContact}
            >
              Get Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              onClick={scrollToProjects}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
