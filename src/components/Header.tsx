
import { Menu, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TS</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Simmons Builders</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>(256) 123-4567</span>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-amber-600 hover:bg-amber-700">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sterling Builders</SheetTitle>
                <SheetDescription>
                  Professional home building services
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left text-gray-700 hover:text-amber-600 transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-gray-700 hover:text-amber-600 transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-left text-gray-700 hover:text-amber-600 transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-amber-600 transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-amber-600 transition-colors"
                >
                  Contact
                </button>
                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Phone size={16} />
                    <span>(256) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail size={16} />
                    <span>info@simmonsbuilders.com</span>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
