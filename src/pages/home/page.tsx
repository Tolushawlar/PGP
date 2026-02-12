import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../image/hero2.jpeg';
import aboutImage from '../../image/about.jpeg';
import apparelImage from '../../image/apparel.jpeg';
import bot from '../../image/bride.jpeg';
import sove from '../../image/sov.jpeg';
import brandImage from '../../image/brand.jpeg';
import adesolaImage from '../../image/adesola.jpeg';
import motunImage from '../../image/motun.jpeg';
import brideImage from '../../image/bride.jpeg';
import elizImage from '../../image/eliz.jpeg';
import pinkImage from '../../image/pink.jpeg';
                
export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [newsletterStatus, setNewsletterStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const response = await fetch('https://readdy.ai/api/form/d64v7uhof4o2fjfo9ak0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.' });
        form.reset();
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to send message. Please check your connection.' });
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const response = await fetch('https://readdy.ai/api/form/d64v7uhof4o2fjfo9akg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        setNewsletterStatus({ type: 'success', message: 'Subscribed successfully!' });
        form.reset();
        setTimeout(() => setNewsletterStatus(null), 5000);
      } else {
        setNewsletterStatus({ type: 'error', message: 'Subscription failed. Please try again.' });
      }
    } catch (error) {
      setNewsletterStatus({ type: 'error', message: 'Failed to subscribe. Please check your connection.' });
    }
  };

  const services = [
    {
      title: 'Relationship Counseling',
      description: 'One-on-one guidance for clarity, emotional healing, and purposeful relationship direction',
      icon: 'ri-heart-3-line',
      color: 'bg-white'
    },
    {
      title: 'Bridal Coaching',
      description: 'Pre-wedding preparation for emotional readiness and a God-honoring marriage foundation',
      icon: 'ri-gift-line',
      color: 'bg-[#F4E4E0]'
    },
    {
      title: 'Ladies Coaching',
      description: 'Personal growth journey focusing on identity, confidence, and intentional dating',
      icon: 'ri-user-heart-line',
      color: 'bg-[#FAF7F5]'
    },
    {
      title: 'Intentional Ladies Platform',
      description: 'Daily Life devotional and Community for ladies who desire gentle guidance for everyday womanhood',
      icon: 'ri-team-line',
      color: 'bg-white'
    },
    {
      title: 'Prepared Bride Hub',
      description: 'Exclusive space for brides-to-be focusing on wedding prep and marriage vision',
      icon: 'ri-sparkling-line',
      color: 'bg-[#F4E4E0]'
    },
    {
      title: 'Gracious Collections',
      description: 'A branding and customization brand dedicated to helping businesses, churches, and individuals express their identity through beautifully customized products.',
      icon: 'ri-palette-line',
      color: 'bg-[#FAF7F5]'
    }
  ];

  const testimonials = [
    {
      name: 'Adesola Ogunmodede',
      role: 'Bride',
      text: 'Pastor grace helped me to answer some unanswered questions I had in my during the preparations of my wedding. She also help me find peace where I thought would be hard. She is a great help and always ready to listen when I call on her',
      avatar: adesolaImage
    },
    {
      name: 'Motunrayo Adeboye',
      role: 'Coaching Client',
      text: 'Pastor Grace helped me navigate my emotions during wedding planning. I felt seen , heard, and spiritually prepared for marriage.',
      avatar: motunImage
    },
    {
      name: 'Elizabeth Akarakiri',
      role: 'Intentional Ladies Member',
      text: 'Radiant and Rooted Daily Journal has been a healing therapy. The topics daily are thought-provoking, and the content is so inspiring. It has helped me connect with myself on a deeper level. It is healing therapy to me personally and teaches about how to carry and treat myself with value and confidence. To see myself how God sees me and not how the world defines my value. So much value in there',
      avatar: elizImage
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F5]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/85 backdrop-blur-md shadow-md h-16' : 'bg-transparent h-20'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#8B6F5C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              The PGP Haven
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-[#8B6F5C] hover:text-[#C17767] transition-colors duration-200 text-sm whitespace-nowrap cursor-pointer">Home</a>
            <a href="#about" className="text-[#8B6F5C] hover:text-[#C17767] transition-colors duration-200 text-sm whitespace-nowrap cursor-pointer">About</a>
            <a href="#services" className="text-[#8B6F5C] hover:text-[#C17767] transition-colors duration-200 text-sm whitespace-nowrap cursor-pointer">Services</a>
            <a href="#platforms" className="text-[#8B6F5C] hover:text-[#C17767] transition-colors duration-200 text-sm whitespace-nowrap cursor-pointer">Platforms</a>
            <a href="#collections" className="text-[#8B6F5C] hover:text-[#C17767] transition-colors duration-200 text-sm whitespace-nowrap cursor-pointer">Collections</a>
            <a href="#contact" className="text-[#8B6F5C] hover:text-[#C17767] transition-colors duration-200 text-sm whitespace-nowrap cursor-pointer">Contact</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="px-6 py-2.5 bg-[#C17767] text-white rounded-full hover:bg-[#A86557] transition-all duration-200 hover:-translate-y-1 text-sm whitespace-nowrap cursor-pointer">
              Book Now
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#8B6F5C] w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#F4E4E0]">
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block text-[#8B6F5C] hover:text-[#C17767] cursor-pointer">Home</a>
              <a href="#about" className="block text-[#8B6F5C] hover:text-[#C17767] cursor-pointer">About</a>
              <a href="#services" className="block text-[#8B6F5C] hover:text-[#C17767] cursor-pointer">Services</a>
              <a href="#platforms" className="block text-[#8B6F5C] hover:text-[#C17767] cursor-pointer">Platforms</a>
              <a href="#collections" className="block text-[#8B6F5C] hover:text-[#C17767] cursor-pointer">Collections</a>
              <a href="#contact" className="block text-[#8B6F5C] hover:text-[#C17767] cursor-pointer">Contact</a>
              <a href="#contact" className="block px-6 py-2.5 bg-[#C17767] text-white rounded-full text-center cursor-pointer">
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#F4E4E0]/40 via-[#FAF7F5] to-[#FAF7F5]"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#8B6F5C] leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif', lineHeight: '1.3' }}>
                Guiding ladies into intentional living, purposeful relationships, and prepared marriages.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                At The PGP Haven we equip ladies with the wisdom, practical tools, and spiritual insight they need to build healthy relationships, plan stress-free weddings, and transition confidently into marriage. We believe marriage is not just an event to plan, but a life to prepare for.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-[#C17767] text-white rounded-full hover:bg-[#A86557] transition-all duration-200 hover:-translate-y-1 text-base whitespace-nowrap cursor-pointer">
                  Book a Session
                </a>
                <a href="#services" className="px-8 py-4 border-2 border-[#8B6F5C] text-[#8B6F5C] rounded-full hover:bg-[#8B6F5C] hover:text-white transition-all duration-200 hover:-translate-y-1 text-base whitespace-nowrap cursor-pointer">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="relative">
                <img 
                  src={heroImage}
                  alt="Peaceful woman in contemplation"
                  className="w-full h-auto rounded-[32px] shadow-2xl object-cover"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full px-6 py-3 shadow-lg">
                  <p className="text-sm font-medium text-[#8B6F5C]">Faith • Purpose • Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 border-2 border-[#C17767] rounded-full mb-4">
              <span className="text-sm text-[#C17767] font-medium">Our Services</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#8B6F5C] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              How We Serve You
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for your journey from singleness to marriage, with faith and purpose at the center
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`${service.color} rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer`}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-[#C17767]/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-3xl text-[#C17767]`}></i>
                </div>
                <h4 className="text-2xl font-bold text-[#8B6F5C] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium mr-2">Learn More</span>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#FAF7F5]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 border-2 border-[#C17767] rounded-full mb-6">
              <span className="text-sm text-[#C17767] font-medium">Our Story</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B6F5C] leading-tight mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Building Intentional Lives Through Purpose & Grace
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <img 
                src={aboutImage}
                alt="Pastor Grace Paul-Adeniran"
                className="w-48 h-48 rounded-full object-cover shadow-lg mx-auto md:mx-0"
              />
              <div className="flex-1">
                <h4 className="text-3xl font-bold text-[#8B6F5C] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Meet Pastor Grace Paul-Adeniran
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A passionate relationship counselor, single ladies coach, and bridal mentor dedicated to helping women navigate their journey from singleness to marriage with intentionality, faith, and emotional wholeness.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The PGP Haven was born from a deep conviction that every woman deserves a safe space to grow, prepare, and step into love and marriage with confidence, clarity, and God's grace guiding every step.
                </p>
              </div>
            </div>

            <div className="bg-[#F4E4E0] rounded-2xl p-8 mb-8">
              <p className="text-xl italic text-[#8B6F5C] text-center leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                "Every woman's journey to love and marriage should be marked by purpose, preparation, and the peace that comes from knowing you're exactly where God wants you to be."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#C17767]/10 rounded-full mx-auto mb-4">
                  <i className="ri-heart-pulse-line text-2xl text-[#C17767]"></i>
                </div>
                <h5 className="text-xl font-bold text-[#8B6F5C] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Emotional Safety
                </h5>
                <p className="text-gray-600 text-sm">
                  A judgment-free space where you can be vulnerable and grow
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#C17767]/10 rounded-full mx-auto mb-4">
                  <i className="ri-compass-3-line text-2xl text-[#C17767]"></i>
                </div>
                <h5 className="text-xl font-bold text-[#8B6F5C] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Intentionality
                </h5>
                <p className="text-gray-600 text-sm">
                  Every step guided by purpose, not pressure or societal expectations
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#C17767]/10 rounded-full mx-auto mb-4">
                  <i className="ri-book-open-line text-2xl text-[#C17767]"></i>
                </div>
                <h5 className="text-xl font-bold text-[#8B6F5C] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Faith-Centered
                </h5>
                <p className="text-gray-600 text-sm">
                  Rooted in biblical principles and God's design for relationships
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 border-2 border-[#C17767] rounded-full mb-4">
              <span className="text-sm text-[#C17767] font-medium">Our Communities</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#8B6F5C] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Join a Community of Growth
            </h3>
          </div>

          <div className="space-y-20">
            {/* Intentional Ladies Platform */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=group%20of%20african%20women%20community%20gathering%20warm%20atmosphere%20faith%20based%20meeting%20natural%20lighting%20joyful%20connection%20simple%20elegant%20setting%20devotional%20study&width=600&height=700&seq=platform1&orientation=portrait"
                  alt="Intentional Ladies Community"
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-[#D4AF37]/20 rounded-full">
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">For Single Ladies</span>
                </div>
                <h4 className="text-4xl font-bold text-[#8B6F5C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Intentional Ladies Platform
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A daily devotional community where single women grow spiritually, emotionally, and relationally through our "Rooted and Radiant Ladies Devotional." This is your space for teachings, discussions, mentorship, and intentional preparation for love and marriage.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#C17767] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Daily devotionals focused on identity, purpose, and relationships</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#C17767] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Live teachings and Q&A sessions with Pastor Grace</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#C17767] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Community of like-minded women pursuing intentional growth</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#C17767] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Resources for dating with purpose and clarity</span>
                  </li>
                </ul>
                <a href="#contact" className="inline-block px-8 py-4 bg-[#C17767] text-white rounded-full hover:bg-[#A86557] transition-all duration-200 hover:-translate-y-1 whitespace-nowrap cursor-pointer">
                  Join Platform
                </a>
              </div>
            </div>

            {/* Prepared Bride Hub */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:order-1">
                <div className="inline-block px-4 py-1 bg-[#D4A5A5]/20 rounded-full">
                  <span className="text-xs uppercase tracking-wider text-[#D4A5A5] font-semibold">For Brides-to-Be</span>
                </div>
                <h4 className="text-4xl font-bold text-[#8B6F5C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Prepared Bride Hub
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  An exclusive community for engaged women preparing for their wedding day and the marriage that follows. Get support for wedding planning, emotional readiness, mindset shifts, and building a strong marriage vision with your partner.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#D4A5A5] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Pre-wedding emotional and spiritual preparation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#D4A5A5] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Marriage vision planning and goal-setting sessions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#D4A5A5] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Guidance through wedding stress and family dynamics</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#D4A5A5] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Community of brides supporting each other</span>
                  </li>
                </ul>
                <a href="#contact" className="inline-block px-8 py-4 bg-[#D4A5A5] text-white rounded-full hover:bg-[#C17767] transition-all duration-200 hover:-translate-y-1 whitespace-nowrap cursor-pointer">
                  Join Hub
                </a>
              </div>
              <div className="md:order-2">
                <img 
                  src={brideImage}
                  alt="Prepared Bride Community"
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gracious Collections Section */}
      <section id="collections" className="py-20 bg-gradient-to-b from-[#F4E4E0] to-[#FAF7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-[#D4AF37]"></div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#8B6F5C] mx-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Gracious Collections
              </h3>
              <div className="h-px w-16 bg-[#D4AF37]"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our creative business arm offering custom branding and personalized merchandise for your special moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80">
            <img 
                src={apparelImage}
                alt="Custom T-shirts"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#C17767]/0 group-hover:bg-[#C17767]/90 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <h5 className="text-xl font-bold mb-2">Custom T-Shirts</h5>
                  <p className="text-sm">Personalized designs for any occasion</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-semibold text-[#8B6F5C]">Customized T-Shirt</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80">
              <img 
                src="https://readdy.ai/api/search-image?query=branded%20caps%20hoodies%20mockup%20elegant%20merchandise%20simple%20background%20professional%20product%20photography%20custom%20branding&width=400&height=500&seq=product2&orientation=portrait"
                alt="Caps & Hoodies"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#C17767]/0 group-hover:bg-[#C17767]/90 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <h5 className="text-xl font-bold mb-2">Caps & Hoodies</h5>
                  <p className="text-sm">Quality merchandise with your brand</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-semibold text-[#8B6F5C]">Merchandise</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80">
             <img 
                src={sove}
                alt="Event Souvenirs"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#C17767]/0 group-hover:bg-[#C17767]/90 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <h5 className="text-xl font-bold mb-2">Event Souvenirs</h5>
                  <p className="text-sm">Memorable gifts for your guests</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-semibold text-[#8B6F5C]">Souvenirs</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80">
             <img 
                src={bot}
                alt="Branding Materials"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#C17767]/0 group-hover:bg-[#C17767]/90 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <h5 className="text-xl font-bold mb-2">Branding Materials</h5>
                  <p className="text-sm">Professional promotional items</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-semibold text-[#8B6F5C]">Branding</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="h-96 md:h-auto">
                <img 
                  src={pinkImage}
                  alt="Gracious Collections Showcase"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h4 className="text-3xl font-bold text-[#8B6F5C] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Your one-stop hub for branding and customization
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Whether you need custom merchandise for your event, branded materials for your business, or personalized gifts for special occasions, Gracious Collections delivers quality and elegance in every piece.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#C17767] text-xl mr-3"></i>
                    <span className="text-gray-700">Clothes Customization (Tshirts, Caps Hoodies)</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#C17767] text-xl mr-3"></i>
                    <span className="text-gray-700">Personalized Branding items</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#C17767] text-xl mr-3"></i>
                    <span className="text-gray-700">Customized Pen and journals</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#C17767] text-xl mr-3"></i>
                    <span className="text-gray-700">Paper Bags and packaging</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#C17767] text-xl mr-3"></i>
                    <span className="text-gray-700">Souvenirs for events and programs</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#C17767] text-xl mr-3"></i>
                    <span className="text-gray-700">Event & Promotional Materials</span>
                  </li>
                </ul>
                <a href="#contact" className="inline-block px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-200 text-center whitespace-nowrap cursor-pointer">
                  Book Our Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F4E4E0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 border-2 border-[#C17767] rounded-full mb-4">
              <span className="text-sm text-[#C17767] font-medium">Testimonials</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#8B6F5C] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Stories of Transformation
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real women, real growth, real preparation for love and marriage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#D4AF37] text-xl"></i>
                  ))}
                </div>
                <div className="mb-6">
                  <span className="text-5xl text-[#C17767] font-serif leading-none">"</span>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    {testimonial.text}
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="font-bold text-[#8B6F5C]">{testimonial.name}</h5>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#F4E4E0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h3 className="text-4xl md:text-5xl font-bold text-[#8B6F5C] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Let's Begin Your Journey
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Ready to take the next step? Reach out and let's start this beautiful journey together.
              </p>

              {formStatus && (
                <div className={`mb-6 p-4 rounded-lg ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}

              <form className="space-y-6" data-readdy-form id="contact-form" onSubmit={handleContactSubmit}>
                <div className="relative">
                  <input 
                    type="text"
                    name="name"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#C17767] outline-none py-3 text-gray-800 transition-colors duration-200 peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#C17767] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input 
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#C17767] outline-none py-3 text-gray-800 transition-colors duration-200 peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#C17767] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input 
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#C17767] outline-none py-3 text-gray-800 transition-colors duration-200 peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#C17767] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <select 
                    name="service"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#C17767] outline-none py-3 text-gray-800 transition-colors duration-200 cursor-pointer"
                  >
                    <option value="">Select a Service</option>
                    <option value="Relationship Counseling">Relationship Counseling</option>
                    <option value="Bridal Coaching">Bridal Coaching</option>
                    <option value="Ladies Coaching">Ladies Coaching</option>
                    <option value="Intentional Ladies Platform">Intentional Ladies Platform</option>
                    <option value="Prepared Bride Hub">Prepared Bride Hub</option>
                    <option value="Gracious Collections">Gracious Collections</option>
                  </select>
                </div>

                <div className="relative">
                  <textarea 
                    name="message"
                    required
                    maxLength={500}
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#C17767] outline-none py-3 text-gray-800 transition-colors duration-200 peer resize-none"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute left-0 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#C17767] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                    Your Message (Max 500 characters)
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-[#C17767] text-white rounded-full hover:bg-[#A86557] transition-all duration-200 hover:-translate-y-1 font-medium text-lg whitespace-nowrap"
                >
                  Send Message
                </button>

                <div className="flex items-center justify-center gap-8 text-sm text-gray-600 mt-6">
                  <div className="flex items-center gap-2">
                    <i className="ri-shield-check-line text-[#C17767]"></i>
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-lock-line text-[#C17767]"></i>
                    <span>Confidential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-time-line text-[#C17767]"></i>
                    <span>Quick Response</span>
                  </div>
                </div>
              </form>
            </div>

            <div className="md:col-span-2 flex items-center justify-center">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=welcoming%20scene%20warm%20invitation%20elegant%20simple%20illustration%20faith%20inspired%20peaceful%20atmosphere%20soft%20colors%20cream%20background%20professional&width=500&height=600&seq=contact1&orientation=portrait"
                  alt="Welcome"
                  className="w-full h-auto rounded-3xl shadow-xl"
                />
                <div className="absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center bg-[#D4AF37] rounded-full animate-bounce">
                  <i className="ri-heart-fill text-white text-xl"></i>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 flex items-center justify-center bg-[#C17767] rounded-full animate-pulse">
                  <i className="ri-sparkling-fill text-white text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F0EB] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <h4 className="text-2xl font-bold text-[#8B6F5C] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                The PGP Haven
              </h4>
              <p className="text-gray-600 italic mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Purpose. Growth. Preparation.
              </p>
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-[#8B6F5C]">Stay Connected</h5>
                <p className="text-sm text-gray-600">
                  Join our newsletter for daily inspiration and updates
                </p>
                {newsletterStatus && (
                  <div className={`p-3 rounded-lg text-sm ${newsletterStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {newsletterStatus.message}
                  </div>
                )}
                <form className="space-y-3" data-readdy-form id="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <input 
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="w-full bg-transparent border-b-2 border-[#C17767] outline-none py-2 text-gray-800 placeholder-gray-400"
                  />
                  <button 
                    type="submit"
                    className="w-full py-2 border-2 border-[#C17767] text-[#C17767] rounded-full hover:bg-[#C17767] hover:text-white transition-all duration-200 text-sm whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider text-[#8B6F5C] font-semibold mb-4">Services</h5>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-600 hover:text-[#C17767] transition-colors duration-200 cursor-pointer">Relationship Counseling</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-[#C17767] transition-colors duration-200 cursor-pointer">Bridal Coaching</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-[#C17767] transition-colors duration-200 cursor-pointer">Ladies Coaching</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider text-[#8B6F5C] font-semibold mb-4">Communities</h5>
              <ul className="space-y-3">
                <li><a href="#platforms" className="text-gray-600 hover:text-[#C17767] transition-colors duration-200 cursor-pointer">Intentional Ladies Platform</a></li>
                <li><a href="#platforms" className="text-gray-600 hover:text-[#C17767] transition-colors duration-200 cursor-pointer">Prepared Bride Hub</a></li>
                <li><a href="#collections" className="text-gray-600 hover:text-[#C17767] transition-colors duration-200 cursor-pointer">Gracious Collections</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider text-[#8B6F5C] font-semibold mb-4">Connect</h5>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-600 hover:text-[#C17767] transition-colors duration-200 cursor-pointer">About Us</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-[#C17767] transition-colors duration-200 cursor-pointer">Contact</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-[#C17767] transition-colors duration-200 cursor-pointer">Book a Session</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                © 2025 The PGP Haven. All rights reserved. | <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-[#C17767] transition-colors duration-200">Powered by Readdy</a>
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/17P438RDyw/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border-2 border-gray-400 rounded-full text-gray-600 hover:border-[#C17767] hover:text-[#C17767] transition-all duration-200 cursor-pointer">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="https://www.instagram.com/gracepauladeniran?igsh=MXFtZDhjcHo3bWpoZg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border-2 border-gray-400 rounded-full text-gray-600 hover:border-[#C17767] hover:text-[#C17767] transition-all duration-200 cursor-pointer">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="https://wa.me/+2347031858886" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border-2 border-gray-400 rounded-full text-gray-600 hover:border-[#C17767] hover:text-[#C17767] transition-all duration-200 cursor-pointer">
                  <i className="ri-whatsapp-line"></i>
                </a>
                <a href="mailto:gracepauladeniran@gmail.com" className="w-10 h-10 flex items-center justify-center border-2 border-gray-400 rounded-full text-gray-600 hover:border-[#C17767] hover:text-[#C17767] transition-all duration-200 cursor-pointer">
                  <i className="ri-mail-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
