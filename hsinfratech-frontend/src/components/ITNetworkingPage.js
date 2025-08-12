import React from 'react';
import { ArrowLeft, Home, Network, CheckCircle, Phone, Mail, MapPin, Zap, Shield, TrendingUp, Users } from 'lucide-react';

const ITNetworkingPage = ({ setCurrentPage }) => {
  const phoneNumbers = ['+91 98765 43210', '+91 91234 56789'];
  const emails = ['info@hsinfratetech.com', 'projects@hsinfratetech.com'];
  const address = ['Industrial Area, Phase-II', 'Hyderabad, Telangana 500054'];

  const features = [
    { icon: Network, title: 'Complete Network Setup', desc: 'LAN/WAN, Wi-Fi, and structured cabling for offices, factories, and campuses.' },
    { icon: Zap, title: '24/7 Monitoring', desc: 'Proactive network monitoring and support for maximum uptime.' },
    { icon: Shield, title: 'Advanced Security', desc: 'Firewall, VPN, and cybersecurity solutions for data protection.' },
    { icon: TrendingUp, title: 'Scalable Solutions', desc: 'Networks designed to grow with your business needs.' },
    { icon: Users, title: 'Expert Team', desc: 'Certified engineers for design, deployment, and troubleshooting.' },
    { icon: CheckCircle, title: 'Maintenance & Support', desc: 'Ongoing maintenance, upgrades, and rapid issue resolution.' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className="w-full px-4 py-4 flex items-center justify-between bg-white shadow-md sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
            onClick={() => setCurrentPage && setCurrentPage('home')}
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
          <button
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
            onClick={() => setCurrentPage && setCurrentPage('home')}
          >
            <Home className="w-5 h-5" /> Home
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Network className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">HS Infratech</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-80 md:h-[420px] flex items-center justify-center bg-gray-100 mb-12">
        <img
          src="/images/it-networking-india.jpg"
          alt="IT Networking India"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
        />
        {/* Removed blue overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">IT Networking</h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto drop-shadow">
            End-to-end network solutions for Indian businesses, institutions, and industries.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose HS Infratech for IT Networking?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reliable, secure, and scalable networking for the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center transition-transform transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-blue-50 group cursor-pointer"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-blue-600">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-blue-900 transition-colors duration-300">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Ready to upgrade your network?</h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Contact HS Infratech for a free assessment and custom IT networking solution.
        </p>
        <button onClick={() => setCurrentPage && setCurrentPage('consultation-form')} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors font-semibold shadow">
          Request Free Consultation
        </button>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Contact Us for IT Networking</h3>
            <p className="text-lg text-gray-600">Ready to discuss your project or need a custom quote? Reach out to us!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center transition-colors duration-300 hover:bg-blue-600 group">
                <Phone className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">Call Us</h4>
              {phoneNumbers.map((num, idx) => (
                <p className="text-gray-600" key={idx}>{num}</p>
              ))}
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center transition-colors duration-300 hover:bg-blue-600 group">
                <Mail className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">Email Us</h4>
              {emails.map((mail, idx) => (
                <p className="text-gray-600" key={idx}>{mail}</p>
              ))}
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center transition-colors duration-300 hover:bg-blue-600 group">
                <MapPin className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">Visit Us</h4>
              {address.map((line, idx) => (
                <p className="text-gray-600" key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Answers to common queries about our IT Networking services.</p>
        </div>
        <div className="space-y-6">
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">What types of IT networking solutions do you provide?</summary>
            <p className="mt-2 text-gray-700">We offer end-to-end IT networking solutions including LAN/WAN setup, Wi-Fi, structured cabling, network security, and ongoing maintenance for businesses of all sizes.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">Can you customize network designs for my business?</summary>
            <p className="mt-2 text-gray-700">Absolutely. We tailor every network solution to your unique requirements, ensuring optimal performance, security, and scalability.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">How do you ensure network security?</summary>
            <p className="mt-2 text-gray-700">We implement advanced security measures including firewalls, VPNs, and regular monitoring to protect your data and network infrastructure.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">What is your support and maintenance process?</summary>
            <p className="mt-2 text-gray-700">Our team provides 24/7 support, proactive monitoring, and regular maintenance to ensure your network runs smoothly and efficiently.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">How do I get started with your IT networking services?</summary>
            <p className="mt-2 text-gray-700">Contact us via phone or email to schedule a consultation. We'll assess your needs, design a custom solution, and provide a detailed quote.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 md:px-8 bg-gray-900 text-white mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">HS Infratech</span>
                  <div className="text-xs text-blue-400">Infrastructure Solutions</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Leading provider of comprehensive infrastructure solutions including industrial fabrication, security systems, and IT networking services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); setCurrentPage('shed-fabricators'); }} className="hover:text-white transition-colors">Shed Fabricators</button></li>
                <li><button onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); setCurrentPage('peb-structures'); }} className="hover:text-white transition-colors">PEB Structures</button></li>
                <li><button onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); setCurrentPage('it-networking'); }} className="hover:text-white transition-colors">IT Networking</button></li>
                <li><button onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); setCurrentPage('cctv-service'); }} className="hover:text-white transition-colors">CCTV Systems</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                {phoneNumbers.map((num, idx) => (
                  <li key={idx}><a href={`tel:${num.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{num}</a></li>
                ))}
                <li><a href={`mailto:${emails[0]}`} className="hover:text-white transition-colors">{emails[0]}</a></li>
                <li><a href="https://goo.gl/maps/1234567890abcdef" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Industrial Area, Phase-II, Hyderabad, Telangana 500054</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 HS Infratech. All rights reserved. Building the future, one project at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ITNetworkingPage;
