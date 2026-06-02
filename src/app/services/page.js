"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Star, Phone, MapPin } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

const services = [
  { icon: "🍽️", title: "Dine-In Experience", description: "Settle into our warm, welcoming space where the aroma of fresh rotis and sizzling tandoor fills the air. Perfect for family gatherings and celebrations." },
  { icon: "📦", title: "Takeaway & Delivery", description: "Enjoy our authentic flavors at home with carefully packed meals that retain their warmth and taste. Quick pickup from Ff 102 or delivery to your doorstep." },
  { icon: "🎉", title: "Catering Services", description: "Bring the taste of Punjab to your special occasions. We handle everything from intimate family dinners to large celebrations with authentic flair." },
  { icon: "🍛", title: "Tiffin Services", description: "Regular home-cooked Punjabi meals delivered fresh to your office or home. Like having a Punjabi kitchen without the cooking." },
  { icon: "👶", title: "Family-Friendly Dining", description: "Spacious seating and kid-friendly options make us perfect for multi-generation family meals. High chairs and patient service included." },
  { icon: "🌱", title: "Vegetarian Specialties", description: "Extensive pure-veg menu featuring dal makhani, paneer dishes, and seasonal vegetables prepared with ghee and love." }
];

const testimonials = [
  { name: "Rajesh Patel", role: "Regular Customer", text: "The butter chicken here reminds me of my trips to Amritsar. Authentic taste and the naans are perfectly soft. My family's new favorite spot in Bodakdev.", rating: 5 },
  { name: "Priya Sharma", role: "Food Enthusiast", text: "Finally found a place that makes proper dal makhani! The rich, creamy texture and overnight slow-cooking really shows. Worth the drive from anywhere in Ahmedabad.", rating: 5 },
  { name: "Vikram Singh", role: "Punjabi Food Lover", text: "As someone from Punjab, I'm picky about authentic taste. EAT PUNJAB gets it right - from the tandoor roti to the perfectly spiced chole. Feels like home.", rating: 5 }
];

const faq = [
  { question: "Do you serve authentic Punjabi-style tandoor items?", answer: "Yes! We have a traditional clay tandoor where we bake fresh naans, rotis, and tandoori items daily. You can even watch our chefs at work." },
  { question: "Is parking available near Ff 102 location?", answer: "Absolutely. Shilp Square has ample parking space, and being opposite Himalaya Mall, you'll find convenient parking options for dining with us." },
  { question: "Can you accommodate large family gatherings?", answer: "We love hosting families! Our spacious dining area can accommodate groups, and we offer special family platters. For larger parties, our catering service works perfectly." },
  { question: "Do you offer pure vegetarian options?", answer: "Yes, we have an extensive vegetarian menu with traditional dishes like dal makhani, paneer specialties, and seasonal vegetable curries - all prepared in separate cooking areas." },
  { question: "How spicy is your food, and can you adjust the heat level?", answer: "Our chefs can adjust spice levels to your preference. We mark spice levels on our menu and always ask about your heat tolerance when you order." }
];

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-[var(--color-primary)]">
              EAT PUNJAB
            </Link>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href} className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href} className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How We Serve <span className="text-[var(--color-primary)]">Punjab</span> on a Plate
            </motion.h1>
            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="text-xl text-gray-600 max-w-3xl mx-auto">
              From sizzling tandoor to doorstep delivery. Every service crafted with the warmth of Punjabi hospitality.
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600">Every bite tells a story of authentic Punjab</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div key={index} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:index*0.1}} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Family Says</h2>
              <p className="text-lg text-gray-600">Real stories from our dining table</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:index*0.1}} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
              <p className="text-lg text-gray-600">Everything you need to know about dining with us</p>
            </motion.div>
            <div className="space-y-8">
              {faq.map((item, index) => (
                <motion.div key={index} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:index*0.1}} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--color-primary)] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Taste Punjab?</h2>
              <p className="text-xl mb-8">Let us serve you an authentic experience that feels like home</p>
              <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Book Your Table
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">EAT PUNJAB</h3>
              <p className="text-gray-600 mb-4">Authentic Punjabi flavors in the heart of Ahmedabad. Where every meal feels like home.</p>
              <div className="flex items-center text-yellow-500 mb-2">
                <Star className="w-5 h-5 fill-current mr-1" />
                <span className="font-semibold">4.5</span>
                <span className="text-gray-600 ml-2">(1352 reviews)</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link key={item.label} href={item.href} className="block text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Visit Us</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[var(--color-primary)] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">099245 03837</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Ff 102, shilp square, Gurukul Rd, opp. himalaya mall, Bodakdev, Ahmedabad, Gujarat 380052</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}