"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Star, Phone, MapPin } from "lucide-react";

const navigation = [{"label":"Home","href":"/"},{"label":"About","href":"/about"},{"label":"Services","href":"/services"},{"label":"Gallery","href":"/gallery"},{"label":"Contact","href":"/contact"}];

const services = [{"icon":"🍽️","title":"Dine-In Experience","description":"Settle into our warm, welcoming space where the aroma of fresh rotis and sizzling tandoor fills the air. Perfect for family gatherings and celebrations."},{"icon":"📦","title":"Takeaway & Delivery","description":"Enjoy our authentic flavors at home with carefully packed meals that retain their warmth and taste. Quick pickup from Ff 102 or delivery to your doorstep."},{"icon":"🎉","title":"Catering Services","description":"Bring the taste of Punjab to your special occasions. We handle everything from intimate family dinners to large celebrations with authentic flair."},{"icon":"🍛","title":"Tiffin Services","description":"Regular home-cooked Punjabi meals delivered fresh to your office or home. Like having a Punjabi kitchen without the cooking."},{"icon":"👶","title":"Family-Friendly Dining","description":"Spacious seating and kid-friendly options make us perfect for multi-generation family meals. High chairs and patient service included."},{"icon":"🌱","title":"Vegetarian Specialties","description":"Extensive pure-veg menu featuring dal makhani, paneer dishes, and seasonal vegetables prepared with ghee and love."}];

const testimonials = [{"name":"Rajesh Patel","role":"Regular Customer","text":"The butter chicken here reminds me of my trips to Amritsar. Authentic taste and the naans are perfectly soft. My family's new favorite spot in Bodakdev.","rating":5},{"name":"Priya Sharma","role":"Food Enthusiast","text":"Finally found a place that makes proper dal makhani! The rich, creamy texture and overnight slow-cooking really shows. Worth the drive from anywhere in Ahmedabad.","rating":5},{"name":"Vikram Singh","role":"Punjabi Food Lover","text":"As someone from Punjab, I'm picky about authentic taste. EAT PUNJAB gets it right - from the tandoor roti to the perfectly spiced chole. Feels like home.","rating":5}];

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-xl text-[var(--color-primary)]">EAT PUNJAB</Link>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href} className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">{item.label}</Link>
              ))}
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href} className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]" onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/images/img_1780389467972_0.jpg" alt="Authentic Punjabi Food" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Authentic Punjabi<br />Flavors at Ff 102</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Where traditional tandoor meets modern comfort in the heart of Bodakdev</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">Reserve Table</Link>
            <Link href="/services" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">View Services</Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-lg">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span>4.5 (1352 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>099245 03837</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">From sizzling tandoor to home delivery, we bring Punjab to your plate</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: index * 0.1}} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">What Our Guests Say</h2>
            <p className="text-xl text-gray-600">Taste the love in every review</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: index * 0.1}} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-[var(--color-primary)]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="text-4xl font-bold mb-4">Ready for Authentic Punjabi Experience?</h2>
            <p className="text-xl mb-8">Visit us at Ff 102, Shilp Square or call for delivery</p>
            <Link href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">Book Your Table</Link>
          </motion.div>
        </div>
      </section>

      <footer className="border-t py-16 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl text-[var(--color-primary)] mb-4">EAT PUNJAB</h3>
              <p className="text-gray-600 mb-4">Authentic Punjabi flavors in the heart of Bodakdev. Where tradition meets taste.</p>
              <div className="flex items-center gap-2 text-gray-600">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>4.5 stars • 1352 reviews</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[var(--color-primary)]">Quick Links</h4>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link key={item.label} href={item.href} className="block text-gray-600 hover:text-[var(--color-primary)] transition-colors">{item.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[var(--color-primary)]">Contact Info</h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start gap-2">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>099245 03837</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Ff 102, Shilp Square, Gurukul Rd, opp. Himalaya Mall, Bodakdev, Ahmedabad, Gujarat 380052</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}