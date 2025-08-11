import React from 'react';
import { ArrowLeft, Home, Building2, CheckCircle, Phone, Mail, MapPin, Users, Award, Zap, Globe, TrendingUp } from 'lucide-react';

const PEBStructuresPage = ({ setCurrentPage }) => {
  // Contact details
  const phoneNumbers = ['+91 98765 43210', '+91 91234 56789'];
  const emails = ['info@hsinfratetech.com', 'projects@hsinfratetech.com'];
  const address = ['Industrial Area, Phase-II', 'Hyderabad, Telangana 500054'];

  // Key features
  const features = [
    { icon: Award, title: 'Quality Assurance', desc: 'Premium ISI-certified steel, strict quality control, and industry-best practices.' },
    { icon: Zap, title: 'Timely Delivery', desc: 'Streamlined processes and advanced fabrication for on-time project completion.' },
    { icon: CheckCircle, title: 'Custom Solutions', desc: 'Tailored for Indian climate, seismic zones, and your unique requirements.' },
    { icon: Globe, title: 'Eco-Friendly', desc: 'Energy-efficient, recyclable materials, and sustainable construction.' },
    { icon: TrendingUp, title: 'Cutting-edge Tech', desc: 'Latest design and manufacturing technology for precision and efficiency.' },
    { icon: Users, title: 'Expert Team', desc: 'Experienced engineers and technicians for every project.' },
  ];

  // Applications
  const applications = [
    { label: 'Warehousing', icon: Building2 },
    { label: 'Commercial Complexes', icon: Home },
    { label: 'Industrial Facilities', icon: TrendingUp },
    { label: 'Showrooms', icon: Users },
    { label: 'High-Rise Buildings', icon: Award },
    { label: 'Sports Facilities', icon: CheckCircle },
  ];

  // Recent projects
  const projects = [
    'Crane Powder Works PEB, Yanamadala',
    'Mohan Weaving Unit, Mallavali',
    'Simha Kia, Guntur Vijayawada',
    'Guntur Textile Park, Gopalamvaripalem',
    'Warehouse, Pulladigunta',
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
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">HS Infratech</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-80 md:h-[420px] flex items-center justify-center bg-gray-100 mb-12">
        <img
          src="/images/PEBStructures.jpg"
          alt="PEB Structures India"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        {/* Removed blue gradient overlay */}
        <div className="relative z-10 text-center text-white px-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">PEB Structures</h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            Modern, cost-effective Pre-Engineered Buildings for Indian industries, warehouses, and commercial spaces.
          </p>
        </div>
      </section>

      {/* About PEB Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">What is a PEB?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Pre-Engineered Buildings (PEBs) are factory-built steel structures, designed and manufactured to precise standards, then assembled on-site. They offer unmatched speed, flexibility, and cost savings for a wide range of applications in India.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✔️ Fast construction, minimal site disruption</li>
              <li>✔️ Customizable for any industry or use</li>
              <li>✔️ Durable, low-maintenance, and eco-friendly</li>
            </ul>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/WarehouseShed.jpeg"
              alt="Indian Warehouse Shed"
              className="w-full h-64 object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 bg-blue-700 text-white px-6 py-3 rounded-tr-lg">
              <span className="font-semibold">Delivered across India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose HS Infratech for PEB?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver smart, creative, and effective building solutions with a focus on quality, safety, and sustainability.
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
        <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Ready to build your next project?</h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Contact HS Infratech for a free consultation and site visit. We deliver PEB solutions tailored for Indian businesses and industries.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors font-semibold shadow">
          Request a Quote
        </button>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Contact Us for PEB Solutions</h3>
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
          <p className="text-lg text-gray-600">Answers to common queries about our PEB Structures and services.</p>
        </div>
        <div className="space-y-6">
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">What types of PEB structures do you fabricate?</summary>
            <p className="mt-2 text-gray-700">We specialize in fabricating a wide range of pre-engineered buildings, including warehouses, industrial sheds, commercial complexes, showrooms, and more. All designs are tailored to your specific requirements.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">Can you customize designs to match our preferences?</summary>
            <p className="mt-2 text-gray-700">Absolutely. We offer fully customized PEB solutions, working closely with you to incorporate your specifications and deliver a structure that fits your needs perfectly.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">What is the cost estimate for a PEB structure?</summary>
            <p className="mt-2 text-gray-700">The cost varies based on size, materials, and design complexity. We provide detailed, transparent quotes after assessing your requirements, ensuring no hidden costs.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">Are your fabricators experienced and certified?</summary>
            <p className="mt-2 text-gray-700">Yes, our team consists of highly experienced and certified engineers and technicians, ensuring top-quality workmanship and adherence to industry standards.</p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group transition-all duration-300 open:scale-[1.03] open:border-blue-600 open:border-2 open:bg-blue-50">
            <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900 transition-colors text-lg">How do I start the process of getting a PEB structure?</summary>
            <p className="mt-2 text-gray-700">Simply contact us via phone or email. Our team will schedule a consultation, discuss your requirements, provide design options, and offer a detailed quote for your project.</p>
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
                  <Building2 className="w-6 h-6 text-white" />
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
                <li>CCTV Systems</li>
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

export default PEBStructuresPage;
