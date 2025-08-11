import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Building2, Network, Camera, Shield, Fingerprint, Volume2, ChevronRight, Phone, Mail, MapPin, ArrowRight, Star, Award, Users, CheckCircle, Globe, Zap, Target, TrendingUp } from 'lucide-react';

const HSInfratechHomepage = ({ setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const servicesRef = useRef(null);
    const contactRef = useRef(null);
    const footerRef = useRef(null); // Add footer ref

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto slide for hero carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Restore scroll position on mount
    useEffect(() => {
        const savedScroll = sessionStorage.getItem('hsinfra_home_scroll');
        if (savedScroll) {
            window.scrollTo(0, parseInt(savedScroll, 10));
        }
        const saveScroll = () => {
            sessionStorage.setItem('hsinfra_home_scroll', window.scrollY);
        };
        window.addEventListener('beforeunload', saveScroll);
        return () => {
            saveScroll();
            window.removeEventListener('beforeunload', saveScroll);
        };
    }, []);

    const services = [
        {
            icon: Building2,
            title: "Shed Fabricators",
            description: "Custom industrial sheds and warehouse solutions with superior structural engineering and quality materials for all industrial needs.",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=250&fit=crop&crop=entropy&auto=format",
            features: ["Custom Design", "Quality Materials", "Fast Installation", "Maintenance Support"]
        },
        {
            icon: Building2,
            title: "PEB Structures",
            description: "Pre-engineered building solutions for industrial, commercial, and residential applications with cost-effective designs.",
            image: "/images/PEBStructures.jpg",
            features: ["Pre-engineered Design", "Cost Effective", "Quick Assembly", "Durable Materials"]
        },
        {
            icon: Network,
            title: "IT Networking",
            description: "Complete network infrastructure setup, maintenance, and optimization for businesses of all sizes with 24/7 support.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=entropy&auto=format",
            features: ["Network Setup", "24/7 Support", "Scalable Solutions", "Security Implementation"]
        },
        {
            icon: Camera,
            title: "CCTV System",
            description: "Advanced surveillance solutions with HD cameras, remote monitoring, and cloud storage capabilities for enhanced security.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop&crop=entropy&auto=format",
            features: ["HD Quality", "Remote Monitoring", "Cloud Storage", "Mobile Access"]
        },
        {
            icon: Shield,
            title: "Fire Alarm System",
            description: "Comprehensive fire detection and alarm systems for maximum safety and regulatory compliance across all sectors.",
            image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=250&fit=crop&crop=entropy&auto=format",
            features: ["Early Detection", "Compliance Ready", "Reliable Systems", "Regular Maintenance"]
        },
        {
            icon: Fingerprint,
            title: "Biometric & Access Control",
            description: "Secure access control systems with biometric authentication and advanced security features for enhanced protection.",
            image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=400&h=250&fit=crop&crop=entropy&auto=format",
            features: ["Biometric Authentication", "Access Logs", "Multi-point Control", "User Management"]
        },
        {
            icon: Volume2,
            title: "Public Address System",
            description: "Professional audio solutions for clear communication in large venues and facilities with advanced control systems.",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&crop=entropy&auto=format",
            features: ["Crystal Clear Audio", "Wide Coverage", "Easy Control", "Integration Ready"]
        }
    ];

    const stats = [
        { number: "500+", label: "Projects Completed", icon: Target },
        { number: "15+", label: "Years Experience", icon: Award },
        { number: "100+", label: "Happy Clients", icon: Users },
        { number: "24/7", label: "Support Available", icon: Zap }
    ];

    const heroSlides = [
        {
            title: "Building Tomorrow's Infrastructure",
            subtitle: "Comprehensive infrastructure solutions from industrial fabrication to cutting-edge security systems",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop&crop=entropy&auto=format"
        },
        {
            title: "Advanced Security Solutions",
            subtitle: "State-of-the-art CCTV, fire alarm, and access control systems for complete security coverage",
            image: "/images/AdvancedSecuritySolutions.jpg"
        },
        {
            title: "Industrial Excellence",
            subtitle: "Custom shed fabrication and PEB structures designed for durability and efficiency",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=600&fit=crop&crop=entropy&auto=format"
        }
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
                            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
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

            {/* Hero Section with Carousel */}
            <section id="home" className="relative pt-20 h-screen overflow-hidden">
                <div className="absolute inset-0">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                        </div>
                    ))}
                </div>

                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {heroSlides[currentSlide].title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
                            {heroSlides[currentSlide].subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                onClick={() => {
                                    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Explore Services <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition-colors"
                                onClick={() => {
                                    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                                }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="stats-hover-effect">
                                    <div className="stats-icon">
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="stats-number">{stat.number}</div>
                                    <div className="stats-label">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">About HS Infratech</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                With over 15 years of industry experience, HS Infratech has established itself as a trusted partner in infrastructure development. We specialize in delivering comprehensive solutions that combine traditional engineering excellence with modern technology.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    <span className="text-gray-700">ISO 9001:2015 Certified Quality Management</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    <span className="text-gray-700">Expert Team of Engineers and Technicians</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    <span className="text-gray-700">24/7 Customer Support and Maintenance</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    <span className="text-gray-700">Pan-India Service Network</span>
                                </div>
                            </div>
                            <button
                                className="learn-more-button mt-8"
                                onClick={() => {
                                    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <span className="circle">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Learn More</span>
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=entropy&auto=format"
                                alt="About HS Infratech"
                                className="rounded-lg shadow-lg w-full"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                                <div className="text-2xl font-bold">15+</div>
                                <div className="text-sm">Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section ref={servicesRef} id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive infrastructure solutions designed to meet the diverse needs of modern businesses across various industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            const pageRoutes = {
                                'CCTV System': 'cctv-service',
                                'PEB Structures': 'peb-structures',
                                'IT Networking': 'it-networking',
                                'Fire Alarm System': 'fire-alarm-system',
                                'Biometric & Access Control': 'biometric-access-control',
                                'Public Address System': 'public-address-system',
                                'Shed Fabricators': 'shed-fabricators',
                            };
                            const route = pageRoutes[service.title];
                            return (
                                <div
                                    key={index}
                                    className="service-hover-effect bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                                    onClick={() => {
                                        if (route) setCurrentPage(route);
                                    }}
                                >
                                    <div className="relative h-48">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="service-hover-overlay">
                                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                            <p className="text-base">{service.description}</p>
                                        </div>
                                        <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-lg z-10">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="space-y-2 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose HS Infratech?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our commitment to excellence and customer satisfaction sets us apart in the infrastructure industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Award, title: "Quality Assurance", desc: "ISO certified processes ensuring highest standards" },
                            { icon: Users, title: "Expert Team", desc: "Skilled professionals with extensive experience" },
                            { icon: Globe, title: "Pan-India Presence", desc: "Service network across major cities" },
                            { icon: TrendingUp, title: "Innovation Focus", desc: "Latest technology and industry best practices" }
                        ].map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section ref={contactRef} id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Ready to start your next project? Contact us for a consultation and custom quote.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-lg p-8 text-center shadow-lg">
                            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-600">+91 xxxxx xxxxx</p>
                            <p className="text-gray-600">+91 xx xxxx xxxx</p>
                        </div>
                        <div className="bg-white rounded-lg p-8 text-center shadow-lg">
                            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-gray-600">info@hsinfratetech.com</p>
                            <p className="text-gray-600">projects@hsinfratetech.com</p>
                        </div>
                        <div className="bg-white rounded-lg p-8 text-center shadow-lg">
                            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600">Industrial Area, Phase-II</p>
                            <p className="text-gray-600">Hyderabad, Telangana 500054</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <button 
                            onClick={() => setCurrentPage('consultation-form')}
                            className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors"
                        >
                            Request Free Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer ref={footerRef} className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
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
                                Leading provider of comprehensive infrastructure solutions including industrial fabrication, security systems, and IT networking services.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Services</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('shed-fabricators')}>Shed Fabricators</li>
                                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('peb-structures')}>PEB Structures</li>
                                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('it-networking')}>IT Networking</li>
                                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('cctv-service')}>CCTV Systems</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li className="hover:text-white cursor-pointer" onClick={() => window.open('tel:+919876543210')}>+91 98765 43210</li>
                                <li className="hover:text-white cursor-pointer" onClick={() => window.open('mailto:info@hsinfratetech.com')}>info@hsinfratetech.com</li>
                                <li className="hover:text-white cursor-pointer" onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}>Hyderabad, Telangana</li>
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

export default HSInfratechHomepage;