import React from 'react';
import { ArrowLeft, Home, Volume2, CheckCircle, Phone, Mail, MapPin, Zap, Award, TrendingUp, Users } from 'lucide-react';

const PublicAddressPage = ({ setCurrentPage }) => {
  const phoneNumbers = ['+91 98765 43210', '+91 91234 56789'];
  const emails = ['info@hsinfratech.com', 'projects@hsinfratetech.com'];
  const address = ['Industrial Area, Phase-II', 'Hyderabad, Telangana 500054'];

  const features = [
    { icon: Volume2, title: 'Crystal Clear Audio', desc: 'High-quality speakers and amplifiers for every venue.' },
    { icon: Zap, title: 'Wide Coverage', desc: 'Zone-wise control and full venue coverage for announcements.' },
    { icon: CheckCircle, title: 'Emergency Ready', desc: 'Instant alerts and integration with safety systems.' },
    { icon: Award, title: 'Professional Installation', desc: 'Expert setup for auditoriums, schools, offices, and more.' },
    { icon: TrendingUp, title: 'Smart Integration', desc: 'Connects with AV, fire alarm, and building management systems.' },
    { icon: Users, title: 'Training & Support', desc: 'On-site training and ongoing technical support.' },
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
            <Volume2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">HS Infratech</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-80 md:h-[420px] flex items-center justify-center bg-gray-100 mb-12">
        <img
          src="/images/PAS.webp"
          alt="Public Address System India"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="relative z-10 text-center text-white px-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Public Address System</h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            Professional PA solutions for Indian auditoriums, schools, offices, and large venues.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose HS Infratech for PA Systems?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clear, reliable, and integrated public address systems for every communication need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-blue-50 group cursor-pointer"
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
        <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Ready to upgrade your venue?</h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Contact HS Infratech for a free assessment and custom public address system solution.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors font-semibold shadow">
          Request a Quote
        </button>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Contact Us for PA System Solutions</h3>
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
          <p className="text-lg text-gray-600">Answers to common queries about our Public Address System services.</p>
        </div>
        <div className="space-y-6">
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">What types of public address systems do you provide?</summary>
            <p className="mt-2 text-gray-700">We offer a range of PA systems for auditoriums, schools, offices, factories, and large venues, including wired and wireless solutions.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">Can you customize the PA system for my venue?</summary>
            <p className="mt-2 text-gray-700">Yes, we design and install PA systems tailored to your venue's size, acoustics, and communication needs.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">Do you provide installation and training?</summary>
            <p className="mt-2 text-gray-700">Absolutely. Our team handles installation, setup, and provides training to ensure smooth operation of your PA system.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">How do you ensure sound quality and coverage?</summary>
            <p className="mt-2 text-gray-700">We use advanced acoustic analysis and high-quality equipment to ensure clear audio and full coverage throughout your venue.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">How do I get started with a public address system?</summary>
            <p className="mt-2 text-gray-700">Contact us via phone or email to discuss your requirements. We'll assess your venue and provide a custom proposal and quote.</p>
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
                  <Volume2 className="w-6 h-6 text-white" />
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
                <li>Shed Fabricators</li>
                <li>PEB Structures</li>
                <li>IT Networking</li>
                <li>Public Address System</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                {phoneNumbers.map((num, idx) => (
                  <li key={idx}>{num}</li>
                ))}
                <li>{emails[0]}</li>
                <li>Hyderabad, Telangana</li>
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

export default PublicAddressPage;
