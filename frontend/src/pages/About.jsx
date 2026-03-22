import React from 'react';
import { Target, Award, Handshake, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-800 mb-6 text-center">
            About Velora Microns LLP
          </h1>
          <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto">
            Your Trusted Partner for Premium Calcium Carbonate Solutions
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <span className="font-bold text-slate-800">Velora Microns LLP</span> is a trusted manufacturer of high-quality calcium carbonate (CaCO₃) powder, based in <span className="font-semibold text-blue-600">Morbi, Gujarat</span>—India's leading ceramic manufacturing hub.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We specialize in <span className="font-semibold">micronized and coated calcium carbonate</span>, designed to meet the demanding requirements of modern industries like ceramics, plastics, and industrial fillers.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-xl font-semibold text-slate-800 mb-3">Our Focus is Simple:</p>
              <p className="text-lg text-slate-700">
                Deliver <span className="font-bold text-blue-600">Consistent Quality</span> + <span className="font-bold text-blue-600">Competitive Pricing</span> + <span className="font-bold text-blue-600">Reliable Supply</span>
              </p>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              With a strong understanding of industrial requirements, we ensure every batch meets strict quality parameters for whiteness, particle size, and performance. Our commitment to excellence has made us a preferred supplier for leading manufacturers across Gujarat and India.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            What Drives Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Award className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-slate-800 text-xl">Quality Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Uncompromising quality standards in every batch we produce
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Handshake className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-slate-800 text-xl">Customer Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Building long-term relationships through reliability and service
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <TrendingUp className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-slate-800 text-xl">Continuous Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Adopting advanced technologies for better products
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Target className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-slate-800 text-xl">On-Time Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Ensuring your production never stops due to supply delays
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            Why Clients Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">On-Time Delivery</h3>
                <p className="text-slate-600">
                  We understand the importance of timely supply in manufacturing. Our logistics network ensures your orders reach you as per schedule.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Consistent Quality</h3>
                <p className="text-slate-600">
                  Every batch undergoes rigorous quality checks. You can rely on us for consistent specifications across all deliveries.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Competitive Pricing</h3>
                <p className="text-slate-600">
                  Our efficient production processes allow us to offer premium quality at competitive prices, improving your bottom line.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Long-Term Partnership</h3>
                <p className="text-slate-600">
                  We believe in growing together. Our dedicated support team works closely with you to meet your evolving needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Partner With Us for Quality You Can Trust
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Experience the Velora Microns difference in your manufacturing process
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
