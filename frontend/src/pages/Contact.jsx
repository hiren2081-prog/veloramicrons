import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const whatsappNumber = '919119711811';

  const handleWhatsAppClick = () => {
    const message = 'Hello, I would like to inquire about your Calcium Carbonate products';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock form submission
    console.log('Form submitted:', formData);

    toast({
      title: "Inquiry Sent Successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Let's discuss how we can support your manufacturing needs
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Velora Microns LLP
              </h2>
              
              <div className="space-y-6 mb-8">
                <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1">Location</h3>
                        <p className="text-slate-600">S No  340 , KHOKHRA HANUMAN ROAD,
Bela -Rangpar ,MORBI-363642
GUJRAT (IN)</p>
                        <p className="text-sm text-slate-500 mt-1">

                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1">Phone</h3>
                        <a href="tel:+919119711811" className="text-blue-600 hover:underline text-lg font-medium">
                          +91 9119711811
                        </a>
                        <p className="text-sm text-slate-500 mt-1">
                          Available during business hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-slate-600 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-100 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1">Email</h3>
                        <a href="mailto:info@veloramicrons.com" className="text-blue-600 hover:underline">veloramicrons@gmail.com

                        </a>
                        <p className="text-sm text-slate-500 mt-1">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1">Business Hours</h3>
                        <p className="text-slate-600">Monday - Saturday</p>
                        <p className="text-slate-600">9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* WhatsApp CTA */}
              <Card className="bg-green-600 text-white border-0">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageCircle className="w-7 h-7" />
                    Quick Response on WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-green-100">
                    Get instant responses to your queries. Chat with us directly!
                  </p>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-white text-green-600 hover:bg-green-50 w-full">

                    <MessageCircle className="mr-2 w-5 h-5" />
                    Start WhatsApp Chat
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader className="bg-slate-50">
                  <CardTitle className="text-2xl text-slate-800">Send Us An Inquiry</CardTitle>
                  <p className="text-slate-600 mt-2">Fill out the form below and we'll get back to you soon</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full" />

                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full" />

                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full" />

                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXXXXXXX"
                        className="w-full" />

                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Message / Requirements *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements, quantity needed, specifications, etc."
                        className="w-full min-h-32" />

                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">

                      <Send className="mr-2 w-5 h-5" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-16 px-4 bg-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Place a Bulk Order?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Contact us for competitive pricing, technical specifications, and product samples
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg h-auto">

              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Now
            </Button>
            <a href="tel:+919119711811">
              <Button className="bg-white text-slate-700 hover:bg-slate-100 px-8 py-6 text-lg h-auto">
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>);

};

export default Contact;