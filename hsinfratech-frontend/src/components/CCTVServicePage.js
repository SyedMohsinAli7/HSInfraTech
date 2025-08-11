import React, { useState, useEffect } from 'react';
import { Menu, X, Building2, Camera, Shield, Eye, Monitor, Smartphone, Cloud, Settings, CheckCircle, Phone, Mail, MapPin, ArrowRight, Star, Award, Users, Zap, Play, Clock, Home, ArrowLeft } from 'lucide-react';

const CCTVServicePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cctvFeatures = [
    {
      icon: Eye,
      title: "HD Video Quality",
      description: "Crystal clear 4K resolution cameras for detailed surveillance with night vision capabilities"
    },
    {
      icon: Monitor,
      title: "Remote Monitoring",
      description: "Access your cameras from anywhere using smartphones, tablets, or computers"
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Secure cloud backup with multiple storage options and easy retrieval"
    },
    {
      icon: Smartphone,
      title: "Mobile App Control",
      description: "User-friendly mobile applications for iOS and Android devices"
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Motion detection, facial recognition, and intelligent alert systems"
    },
    {
      icon: Settings,
      title: "Easy Installation",
      description: "Professional installation with minimal disruption to your daily operations"
    }
  ];
  

  const cctvSolutions = [
    {
      title: "Residential CCTV",
      description: "Modern home security cameras delivering 24/7 clarity and smart remote access",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop&crop=entropy&auto=format",
      features: ["HD Cameras", "Night Vision", "Mobile App", "Cloud Storage"]
    },
    {
      title: "Commercial CCTV",
      description: "Advanced surveillance solutions for offices, retail stores, and commercial spaces",
      image: "/images/commercial-cctv.jpg",
      features: ["Multi-camera Setup", "Professional Monitoring", "Access Control", "Reporting"]
    },
    {
      title: "Industrial CCTV",
      description: "Heavy-duty surveillance systems for warehouses, factories, and industrial facilities",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&h=300&fit=crop&crop=entropy&auto=format",
      features: ["Weather Resistant", "Long Range", "Analytics", "Integration"]
    }
  ];

  const packages = [
    {
      name: "Basic Package",
      price: "₹25,000",
      description: "Perfect for small homes and apartments",
      features: [
        "4 HD Cameras (2MP)",
        "1TB Storage DVR",
        "Mobile App Access",
        "Night Vision",
        "1 Year Warranty",
        "Free Installation"
      ],
      popular: false
    },
    {
      name: "Professional Package",
      price: "₹55,000",
      description: "Ideal for medium businesses and large homes",
      features: [
        "8 HD Cameras (4MP)",
        "2TB Storage NVR",
        "Cloud Storage (6 months)",
        "Advanced Night Vision",
        "Motion Detection Alerts",
        "Remote Monitoring",
        "2 Year Warranty",
        "Free Installation & Training"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "₹1,25,000",
      description: "Complete solution for large enterprises",
      features: [
        "16 HD Cameras (4K)",
        "4TB Storage NVR",
        "Unlimited Cloud Storage",
        "AI-Powered Analytics",
        "Facial Recognition",
        "24/7 Professional Monitoring",
        "Mobile & Web Dashboard",
        "3 Year Warranty",
        "Free Installation & Maintenance"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Manufacturing Unit",
      text: "HS Infratech installed our complete CCTV system. The quality is excellent and their support is outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format"
    },
    {
      name: "Priya Sharma",
      business: "Retail Store Owner",
      text: "Their commercial CCTV solution has greatly improved our store security. Highly recommended!",
      rating: 5,
      image: "/images/priya.webp"
    },
    {
      name: "Amit Patel",
      business: "Residential Client",
      text: "Professional installation and great after-sales support. Feel much safer now. The quality is excellent and their support is outstanding.",
      rating: 5,
      image: "/images/amit.jpg"
    }
  ];

  const stats = [
    { number: "1000+", label: "CCTV Systems Installed", icon: Camera },
    { number: "24/7", label: "Monitoring Support", icon: Clock },
    { number: "5", label: "Years Warranty", icon: Shield },
    { number: "99%", label: "Customer Satisfaction", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">HS Infratech</span>
                <div className="text-xs text-blue-600 font-medium">Infrastructure Solutions</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get Quote
              </button>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 py-2">Home</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 py-2">About</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 py-2">Services</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 py-2">Contact</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb */}
      <section className="pt-24 pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <span>/</span>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <span>/</span>
            <span className="text-blue-600">CCTV Systems</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced CCTV Security Systems
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Protect your property with our state-of-the-art CCTV surveillance solutions. HD cameras, remote monitoring, and 24/7 support for complete peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&crop=entropy&auto=format"
                alt="CCTV Security System"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Camera className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-lg font-bold">24/7 Monitoring</div>
                    <div className="text-sm text-gray-600">Professional Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our CCTV Systems?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our advanced CCTV solutions offer comprehensive security features designed to protect your property 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cctvFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our CCTV Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored security solutions for different environments and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cctvSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Professional
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="learn-more-button w-full">
                    <span className="circle">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Learn More</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">CCTV Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect CCTV package that fits your security needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${pkg.popular ? 'border-2 border-blue-600' : 'border border-gray-200 hover:border-blue-300'
                  }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 hover:bg-blue-700 transition-colors duration-300">
                    <span className="text-xs font-semibold">Most Popular</span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-auto w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-md ${pkg.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                      }`}
                  >
                    Choose Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Real feedback from satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Secure Your Property?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact us today for a free consultation and customized CCTV solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">+91 80 1234 5678</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">cctv@hsinfratetech.com</p>
              <p className="text-gray-600">security@hsinfratetech.com</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Industrial Area, Phase-II</p>
              <p className="text-gray-600">Hyderabad, Telangana 500054</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors">
              Get Free CCTV Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">HS Infratech</span>
                  <div className="text-xs text-blue-400">Infrastructure Solutions</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Leading provider of comprehensive CCTV security solutions with 24/7 monitoring and professional support.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">CCTV Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Residential CCTV</li>
                <li>Commercial CCTV</li>
                <li>Industrial CCTV</li>
                <li>Remote Monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+91 98765 43210</li>
                <li>cctv@hsinfratetech.com</li>
                <li>Hyderabad, Telangana</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 HS Infratech. All rights reserved. Securing your world with advanced CCTV solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CCTVServicePage;