import React, { useState, useEffect } from 'react';
import { ArrowLeft, Building2, CheckCircle, Wrench, Clock, Award, Shield, Phone, Mail, MapPin, ChevronRight, Star, Users, Target, Settings, Zap, Globe, Factory, Warehouse, Home, Truck, Trees, ArrowRight, Calendar, DollarSign, Hammer, Ruler } from 'lucide-react';

const ShedFabricationPage = ({ setCurrentPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('industrial');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const shedTypes = {
        industrial: {
            title: "Industrial Sheds",
            description: "Robust structures designed for heavy-duty industrial applications with superior load-bearing capacity.",
            features: ["Heavy Load Capacity", "Fire Resistant Materials", "Climate Control Ready", "Modular Design"],
            image: "/images/IndustrialShed.jpeg",
            applications: ["Manufacturing Units", "Heavy Machinery Storage", "Production Facilities", "Industrial Workshops"]
        },
        warehouse: {
            title: "Warehouse Sheds",
            description: "Spacious and efficient storage solutions designed for optimal inventory management and logistics operations.",
            features: ["High Clear Height", "Wide Span Design", "Loading Bay Ready", "Ventilation Systems"],
            image: "/images/WarehouseShed.jpeg",
            applications: ["Distribution Centers", "Cold Storage", "Inventory Management", "E-commerce Fulfillment"]
        },
        agricultural: {
            title: "Agricultural Sheds",
            description: "Specialized structures for farming operations, livestock housing, and agricultural equipment storage.",
            features: ["Weather Resistant", "Ventilation Systems", "Easy Access Design", "Cost Effective"],
            image: "/images/AgriculturalSheds.webp",
            applications: ["Livestock Housing", "Equipment Storage", "Feed Storage", "Processing Units"]
        },
        commercial: {
            title: "Commercial Sheds",
            description: "Professional-grade structures for businesses requiring flexible and attractive commercial spaces.",
            features: ["Professional Appearance", "Customizable Layout", "Energy Efficient", "Brand Integration"],
            image: "/images/CommercialSheds.webp",
            applications: ["Retail Outlets", "Service Centers", "Showrooms", "Office Spaces"]
        }
    };

    /*
    const constructionSteps = [
        {
            step: "01",
            title: "Consultation & Design",
            description: "Initial consultation to understand requirements, site assessment, and custom design development.",
            icon: Ruler,
            duration: "1-2 weeks"
        },
        {
            step: "02", 
            title: "Engineering & Approval",
            description: "Structural engineering calculations, drawings preparation, and regulatory approvals.",
            icon: Settings,
            duration: "2-3 weeks"
        },
        {
            step: "03",
            title: "Material Procurement",
            description: "Sourcing high-quality materials and components from certified suppliers.",
            icon: Truck,
            duration: "1-2 weeks"
        },
        {
            step: "04",
            title: "Site Preparation",
            description: "Ground preparation, foundation work, and utility connections setup.",
            icon: Hammer,
            duration: "1 week"
        },
        {
            step: "05",
            title: "Fabrication & Erection",
            description: "Off-site fabrication and on-site assembly with quality control at every stage.",
            icon: Factory,
            duration: "2-4 weeks"
        },
        {
            step: "06",
            title: "Testing & Handover",
            description: "Final inspection, testing of all systems, and project handover with documentation.",
            icon: CheckCircle,
            duration: "1 week"
        }
    ];

    */


    const specifications = [
        { feature: "Span Range", value: "15m to 60m", icon: Ruler },
        { feature: "Height Range", value: "4m to 20m", icon: Building2 },
        { feature: "Load Capacity", value: "Up to 200 kg/m²", icon: Warehouse },
        { feature: "Wind Speed", value: "Up to 180 kmph", icon: Shield },
        { feature: "Construction Time", value: "4-12 weeks", icon: Clock },
        { feature: "Material Grade", value: "IS 2062 Steel", icon: Award }
    ];

    const benefits = [
        {
            icon: DollarSign,
            title: "Cost-Effective Solution",
            description: "Lower construction costs compared to conventional buildings with faster ROI."
        },
        {
            icon: Clock,
            title: "Quick Construction",
            description: "Pre-engineered design enables faster construction and early project completion."
        },
        {
            icon: Shield,
            title: "Durable & Strong",
            description: "Built to withstand extreme weather conditions and heavy loads with minimal maintenance."
        },
        {
            icon: Settings,
            title: "Customizable Design",
            description: "Flexible layouts and designs tailored to specific operational requirements."
        },
        {
            icon: Globe,
            title: "Eco-Friendly",
            description: "Sustainable construction with recyclable materials and energy-efficient design."
        },
        {
            icon: Zap,
            title: "Low Maintenance",
            description: "Minimal upkeep requirements with long-lasting materials and finishes."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => {
                                        if (setCurrentPage) {
                                            setCurrentPage('home');
                                        } else if (window.history && window.history.length > 1) {
                                            window.history.back();
                                        }
                                        window.scrollTo({ top: 0, behavior: 'auto' });
                                    }}
                                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    <span className="hidden sm:inline">Back</span>
                                </button>
                                <button
                                    onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); setCurrentPage && setCurrentPage('home'); }}
                                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    <Home className="w-5 h-5" />
                                    <span className="hidden sm:inline">Home</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xl font-bold text-gray-900">HS Infratech</span>
                                <div className="text-xs text-blue-600 font-medium">Shed Fabrication</div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-20 h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=800&fit=crop&crop=entropy&auto=format"
                        alt="Shed Fabrication Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                    Professional Shed Fabrication Services
                                </h1>
                                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                    Expert fabrication of industrial, warehouse, and commercial sheds with superior engineering and quality materials. Built to last, delivered on time.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button onClick={() => setCurrentPage && (sessionStorage.setItem('prevPage', 'shed-fabricators'), setCurrentPage('consultation-form'))} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                        Request Quote <ArrowRight className="w-5 h-5" />
                                    </button>
                                    <button onClick={() => {
                                        const el = document.getElementById('our-shed-solutions');
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    }} className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition-colors">
                                        View Shed Solutions
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Why Choose Our Shed Fabrication?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <CheckCircle className="w-6 h-6 text-green-400" />
                                        <span>15+ Years of Industry Experience</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <CheckCircle className="w-6 h-6 text-green-400" />
                                        <span>IS 2062 Grade Steel Construction</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <CheckCircle className="w-6 h-6 text-green-400" />
                                        <span>Customized Design Solutions</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <CheckCircle className="w-6 h-6 text-green-400" />
                                        <span>On-Time Project Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specifications Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
                        <p className="text-lg text-gray-600">Our sheds are engineered to meet the highest industry standards</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {specifications.map((spec, index) => {
                            const IconComponent = spec.icon;
                            return (
                                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                                    <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                                    <div className="text-lg font-bold text-gray-900 mb-2">{spec.value}</div>
                                    <div className="text-sm text-gray-600">{spec.feature}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Shed Types Section */}
            <section id="our-shed-solutions" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Shed Solutions</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive range of shed fabrication services designed for diverse industrial and commercial applications.
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {Object.entries(shedTypes).map(([key, shed]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                                    activeTab === key 
                                        ? 'bg-blue-600 text-white' 
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {shed.title}
                            </button>
                        ))}
                    </div>

                    {/* Active Shed Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                {shedTypes[activeTab].title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {shedTypes[activeTab].description}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {shedTypes[activeTab].features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 mb-8">
                                <h4 className="font-bold text-gray-900 mb-4">Typical Applications:</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {shedTypes[activeTab].applications.map((app, index) => (
                                        <div key={index} className="text-gray-600">• {app}</div>
                                    ))}
                                </div>
                            </div>

                            <button onClick={() => setCurrentPage && (sessionStorage.setItem('prevPage', 'shed-fabricators'), setCurrentPage('consultation-form'))} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Get Custom Quote
                            </button>
                        </div>
                        
                        <div className="relative">
                            <img
                                src={shedTypes[activeTab].image}
                                alt={shedTypes[activeTab].title}
                                className="rounded-lg shadow-lg w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 
            {/* Construction Process
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Construction Process</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Systematic approach ensuring quality delivery from concept to completion.
                        </p>
                    </div>

                
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {constructionSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <div key={index} className="bg-white rounded-lg p-8 shadow-lg relative">
                                    <div className="absolute -top-4 left-8 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                                        {step.step}
                                    </div>
                                    <IconComponent className="w-12 h-12 text-blue-600 mb-6 mt-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                                    <div className="text-sm text-blue-600 font-medium">
                                        <Calendar className="w-4 h-4 inline mr-2" />
                                        Duration: {step.duration}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                     
                </div>
            </section>
            */}

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Shed Fabrication</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Delivering superior value through engineering excellence and customer-focused approach.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div key={index} className="text-center group">
                                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                                        <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Start Your Shed Project?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Get a free consultation and detailed quote for your custom shed fabrication requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => setCurrentPage && (sessionStorage.setItem('prevPage', 'shed-fabricators'), setCurrentPage('consultation-form'))} className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors font-bold">
                            Schedule Consultation
                        </button>
                        <button onClick={() => setCurrentPage && (sessionStorage.setItem('prevPage', 'shed-fabricators'), setCurrentPage('consultation-form'))} className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-colors font-bold">
                            Call: +91 98765 43210
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        <p className="text-lg text-gray-600">
                            Connect with our shed fabrication experts for personalized solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-8 text-center shadow-lg">
                            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-600">+91 98765 43210</p>
                            <p className="text-gray-600">+91 87654 32109</p>
                        </div>
                        <div className="bg-white rounded-lg p-8 text-center shadow-lg">
                            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-gray-600">sheds@hsinfratetech.com</p>
                            <p className="text-gray-600">projects@hsinfratetech.com</p>
                        </div>
                        <div className="bg-white rounded-lg p-8 text-center shadow-lg">
                            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600">Industrial Area, Phase-II</p>
                            <p className="text-gray-600">Hyderabad, Telangana 500054</p>
                        </div>
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
                                    <div className="text-xs text-blue-400">Shed Fabrication Specialists</div>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Professional shed fabrication services with 15+ years of experience in delivering quality industrial, warehouse, and commercial structures.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
                                <li>About Us</li>
                                <li>Our Projects</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>+91 98765 43210</li>
                                <li>sheds@hsinfratetech.com</li>
                                <li>Hyderabad, Telangana</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center">
                        <p className="text-gray-400">
                            © 2025 HS Infratech. All rights reserved. Building strong foundations for your business.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ShedFabricationPage;