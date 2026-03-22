import React from 'react';
import { CheckCircle2, Sparkles, Package, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Products = () => {
  const whatsappNumber = '919119711811';
  
  const handleWhatsAppInquiry = (productName) => {
    const message = `Hello, I am interested in ${productName}. Please provide detailed specifications and pricing.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Premium calcium carbonate solutions tailored for diverse industrial applications
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Product 1: Calcium Carbonate Powder */}
          <Card className="mb-12 overflow-hidden border-2 hover:shadow-2xl transition-shadow">
            <CardHeader className="bg-blue-600 text-white pb-8">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-3xl mb-3 flex items-center gap-3">
                    <Package className="w-8 h-8" />
                    Calcium Carbonate Powder
                  </CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    High-purity micronized powder for superior industrial performance
                  </CardDescription>
                </div>
                <Badge className="bg-white text-blue-600 text-sm px-4 py-2">Premium Quality</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Sparkles className="text-blue-600 w-5 h-5" />
                    Technical Specifications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-600 font-medium">Purity</span>
                      <span className="text-slate-800 font-bold">95-98%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-600 font-medium">Mesh Range</span>
                      <span className="text-slate-800 font-bold">200 – 1200</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-600 font-medium">Whiteness</span>
                      <span className="text-slate-800 font-bold">High</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-600 font-medium">Impurities</span>
                      <span className="text-slate-800 font-bold">Low</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">High brightness & uniform particle size distribution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Available in multiple mesh grades as per requirement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Low impurity content for consistent quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Excellent dispersion properties in various mediums</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Applications</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-semibold text-blue-600">Ceramic Tiles</p>
                    <p className="text-sm text-slate-600 mt-1">Body & glaze formulation</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-semibold text-blue-600">Wall Putty</p>
                    <p className="text-sm text-slate-600 mt-1">Smooth finish & coverage</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-semibold text-blue-600">Paint & Coatings</p>
                    <p className="text-sm text-slate-600 mt-1">Opacity & brightness</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-semibold text-blue-600">Industrial Fillers</p>
                    <p className="text-sm text-slate-600 mt-1">Cost-effective bulk filling</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <Button 
                  onClick={() => handleWhatsAppInquiry('Calcium Carbonate Powder')}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Inquire on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Product 2: Coated Calcium Carbonate */}
          <Card className="overflow-hidden border-2 hover:shadow-2xl transition-shadow">
            <CardHeader className="bg-slate-700 text-white pb-8">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-3xl mb-3 flex items-center gap-3">
                    <Package className="w-8 h-8" />
                    Coated Calcium Carbonate
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-lg">
                    Surface-treated for enhanced performance in polymers and plastics
                  </CardDescription>
                </div>
                <Badge className="bg-white text-slate-700 text-sm px-4 py-2">Advanced Grade</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Sparkles className="text-slate-700 w-5 h-5" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-slate-700 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Surface-treated for better bonding with polymers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-slate-700 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Enhanced dispersion in plastic matrices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-slate-700 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Improves mechanical strength of final product</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-slate-700 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Reduces production costs significantly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-slate-700 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Better surface finish and appearance</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Ideal For</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-700">
                      <h4 className="font-bold text-slate-800 mb-1">Plastic Industry</h4>
                      <p className="text-slate-600 text-sm">
                        Enhances rigidity, impact resistance, and processing efficiency
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-700">
                      <h4 className="font-bold text-slate-800 mb-1">Polymer Industry</h4>
                      <p className="text-slate-600 text-sm">
                        Improves compatibility and reduces material costs
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-700">
                      <h4 className="font-bold text-slate-800 mb-1">Filler Applications</h4>
                      <p className="text-slate-600 text-sm">
                        Cost-effective alternative with improved properties
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Applications</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-700">Plastic Granules</p>
                    <p className="text-sm text-slate-600 mt-1">PP, PE, PVC compounds</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-700">Masterbatch</p>
                    <p className="text-sm text-slate-600 mt-1">Color & filler masterbatch</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-700">PVC Products</p>
                    <p className="text-sm text-slate-600 mt-1">Pipes, profiles & sheets</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <Button 
                  onClick={() => handleWhatsAppInquiry('Coated Calcium Carbonate')}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Inquire on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Custom Specifications?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            We can tailor our products to meet your specific requirements
          </p>
          <Button 
            onClick={() => handleWhatsAppInquiry('Custom Product Specifications')}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg h-auto"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Discuss Your Requirements
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
