import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, MessageCircle, Factory, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const whatsappNumber = '919119711811';
  const whatsappMessage = 'Hello, I am interested in your Calcium Carbonate products';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Premium Calcium Carbonate (CaCO₃) Manufacturer in Morbi
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Delivering high-purity, micronized & coated calcium carbonate for ceramic, plastic & industrial applications
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
                <CheckCircle2 className="text-blue-600 w-5 h-5" />
                <span className="text-slate-700 font-medium">Consistent Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
                <CheckCircle2 className="text-blue-600 w-5 h-5" />
                <span className="text-slate-700 font-medium">High Whiteness & Purity</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
                <CheckCircle2 className="text-blue-600 w-5 h-5" />
                <span className="text-slate-700 font-medium">Reliable Bulk Supply</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg h-auto"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Get Best Price on WhatsApp
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg h-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            Why Choose Velora Microns?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-t-4 border-t-blue-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Factory className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">Advanced Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  State-of-the-art micronizing & coating process for superior quality
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">Quality Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Strict quality control measures ensuring consistent output
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">Customized Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Tailored mesh sizes and specifications as per your requirements
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-800">Reliable Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Strong supply chain across Gujarat & India with timely delivery
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
            Our Core Products
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            High-quality calcium carbonate solutions for diverse industrial applications
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-2xl">Calcium Carbonate Powder</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">High brightness & uniform particle size</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Available in multiple mesh grades (200-1200)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Purity: 95-98% with low impurities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Excellent dispersion properties</span>
                  </li>
                </ul>
                <Link to="/products">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="bg-slate-700 text-white">
                <CardTitle className="text-2xl">Coated Calcium Carbonate</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Enhanced dispersion for plastic & polymer use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Improves strength & surface finish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Better bonding in polymer matrices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Cost-effective filler solution</span>
                  </li>
                </ul>
                <Link to="/products">
                  <Button variant="outline" className="w-full border-slate-700 text-slate-700 hover:bg-slate-50">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Used In:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium">Ceramic Tiles</span>
              <span className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium">Plastic Products</span>
              <span className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium">Masterbatch</span>
              <span className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium">Industrial Fillers</span>
              <span className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium">Paint & Coatings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Looking for a Reliable CaCO₃ Supplier?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for competitive bulk pricing & product samples
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg h-auto"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us Now
            </Button>
            <Link to="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg h-auto">
                <Phone className="mr-2 w-5 h-5" />
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
