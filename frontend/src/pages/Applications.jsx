import React from 'react';
import { Building2, PackageOpen, Layers, Brush, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Applications = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Industry Applications
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powering diverse industries with premium calcium carbonate solutions
          </p>
        </div>
      </section>

      {/* Applications Detail */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Ceramic Industry */}
          <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="text-3xl flex items-center gap-3">
                <Building2 className="w-8 h-8" />
                Ceramic Industry
              </CardTitle>
              <p className="text-blue-100 text-lg mt-2">Specialized for Morbi's ceramic manufacturing sector</p>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Benefits in Ceramic Production</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">Improves Tile Strength</span>
                        <p className="text-slate-600 text-sm mt-1">Enhances structural integrity and reduces breakage during production</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">Enhances Surface Finish</span>
                        <p className="text-slate-600 text-sm mt-1">Provides smooth, uniform surface texture for premium tiles</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">Maintains Whiteness Consistency</span>
                        <p className="text-slate-600 text-sm mt-1">Ensures uniform color across batches for quality control</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">Reduces Production Costs</span>
                        <p className="text-slate-600 text-sm mt-1">Cost-effective filler material without compromising quality</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-slate-800 mb-4">Used In:</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="font-medium text-blue-600">Tile Body Formulation</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="font-medium text-blue-600">Glaze Preparation</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="font-medium text-blue-600">Porcelain Tiles</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="font-medium text-blue-600">Vitrified Tiles</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plastic Industry */}
          <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-slate-700 text-white">
              <CardTitle className="text-3xl flex items-center gap-3">
                <PackageOpen className="w-8 h-8" />
                Plastic Industry
              </CardTitle>
              <p className="text-slate-300 text-lg mt-2">Enhancing plastic products with coated calcium carbonate</p>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Advantages in Plastic Manufacturing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-slate-700 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">Reduces Raw Material Cost</span>
                        <p className="text-slate-600 text-sm mt-1">Significant cost savings by replacing expensive polymers</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-slate-700 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">Improves Rigidity & Processing</span>
                        <p className="text-slate-600 text-sm mt-1">Better dimensional stability and easier processing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-slate-700 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">Better Dispersion in Polymers</span>
                        <p className="text-slate-600 text-sm mt-1">Uniform distribution ensures consistent product quality</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-slate-700 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">Enhances Impact Resistance</span>
                        <p className="text-slate-600 text-sm mt-1">Improved toughness and durability of plastic products</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-slate-800 mb-4">Product Applications:</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="font-medium text-slate-700">PP & PE Compounds</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="font-medium text-slate-700">PVC Pipes & Profiles</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="font-medium text-slate-700">Plastic Granules</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="font-medium text-slate-700">Injection Molding</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Filler Industry */}
          <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-slate-600 text-white">
              <CardTitle className="text-3xl flex items-center gap-3">
                <Layers className="w-8 h-8" />
                Industrial Filler Applications
              </CardTitle>
              <p className="text-slate-200 text-lg mt-2">Cost-effective bulk filling solutions</p>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Why Choose Our Fillers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-slate-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">Cost-Effective Bulk Filling</span>
                        <p className="text-slate-600 text-sm mt-1">Economical solution for large-scale manufacturing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-slate-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">Uniform Particle Size</span>
                        <p className="text-slate-600 text-sm mt-1">Ensures smooth processing and consistent results</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-slate-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">High Purity Standards</span>
                        <p className="text-slate-600 text-sm mt-1">Minimal impurities for better product performance</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-slate-800 mb-4">Industries Served:</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="font-medium text-slate-600">Rubber Industry</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="font-medium text-slate-600">Paper Industry</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="font-medium text-slate-600">Adhesives & Sealants</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Paint & Coating */}
          <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-blue-500 text-white">
              <CardTitle className="text-3xl flex items-center gap-3">
                <Brush className="w-8 h-8" />
                Paint & Coating Industry
              </CardTitle>
              <p className="text-blue-100 text-lg mt-2">Enhancing coverage, brightness, and durability</p>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-slate-800 mb-3">Wall Putty</h4>
                  <p className="text-slate-600 text-sm">
                    Provides smooth finish, excellent coverage, and strong adhesion to walls
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-slate-800 mb-3">Emulsion Paints</h4>
                  <p className="text-slate-600 text-sm">
                    Enhances opacity, brightness, and extends paint volume economically
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-slate-800 mb-3">Primer Coatings</h4>
                  <p className="text-slate-600 text-sm">
                    Improves bonding, coverage, and provides uniform base for top coats
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Industries We Serve Summary */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
            Industries We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 text-lg">Ceramic Tiles</h3>
              <p className="text-slate-600 text-sm mt-2">Body & glaze applications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <PackageOpen className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 text-lg">Plastic Manufacturers</h3>
              <p className="text-slate-600 text-sm mt-2">PP, PE, PVC products</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <Layers className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 text-lg">Masterbatch Units</h3>
              <p className="text-slate-600 text-sm mt-2">Filler & color masterbatch</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <Brush className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 text-lg">Paint & Coating</h3>
              <p className="text-slate-600 text-sm mt-2">Putty, emulsion, primers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Find the Right Solution for Your Industry
          </h2>
          <p className="text-lg text-blue-100">
            Our technical team can help you select the perfect grade for your application
          </p>
        </div>
      </section>
    </div>
  );
};

export default Applications;
