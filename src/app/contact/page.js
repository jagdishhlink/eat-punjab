"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone, MapPin, Clock, Mail, Star } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

const contactInfo = {
  address: "Ff 102, Shilp Square, Gurukul Rd, opp. Himalaya Mall, Bodakdev, Ahmedabad, Gujarat 380052",
  phone: "099245 03837",
  hours: "11:00 AM - 11:00 PM (Daily)",
  rating: "4.5 (1352 reviews)"
};

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
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
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href} className="block py-2 text-gray-700 hover:text-[var(--color-primary)]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Find Us at Bodakdev</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Visit our warm kitchen where every dish tells a story. Located conveniently opposite Himalaya Mall.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-[var(--color-primary)] mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="text-[var(--color-primary)] mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="text-[var(--color-primary)] mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                      <p className="text-gray-600">{contactInfo.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Star className="text-[var(--color-primary)] mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Rating</h3>
                      <p className="text-gray-600">{contactInfo.rating}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" placeholder="Your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent" placeholder="Tell us about your visit, feedback, or special requirements..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[var(--color-primary)] text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold">
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Kitchen</h2>
              <p className="text-xl text-gray-600">Experience the warmth of Punjab at Shilp Square</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gray-300 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-600">Interactive Map Coming Soon</p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">EAT PUNJAB</h3>
              <p className="text-gray-600 mb-4">Authentic Punjabi flavors in the heart of Bodakdev. Every dish crafted with love and tradition.</p>
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-400 fill-current" size={20} />
                <span className="text-gray-600">{contactInfo.rating}</span>
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
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <div className="space-y-2 text-gray-600">
                <p>{contactInfo.phone}</p>
                <p>Ff 102, Shilp Square, Bodakdev</p>
                <p>Ahmedabad, Gujarat 380052</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}