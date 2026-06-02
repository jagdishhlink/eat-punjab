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

const images = [
  "/images/img_1780389467972_0.jpg",
  "/images/gmap_1780389468415_1.jpg",
  "/images/gmap_1780389468500_3.jpg",
  "/images/gmap_1780389468537_4.jpg",
  "/images/gmap_1780389468567_5.jpg"
];

const categories = [
  { name: "Tandoor Delights", count: 12 },
  { name: "Curry Classics", count: 18 },
  { name: "Fresh Breads", count: 8 },
  { name: "Sweet Endings", count: 6 },
  { name: "Dining Experience", count: 10 }
];

export default function Gallery() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-[var(--color-primary)]">
              EAT PUNJAB
            </Link>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href} className="text-gray-700 hover:text-[var(--color-primary)] font-medium">
                  {item.label}
                </Link>
              ))}
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
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
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Visual Feast</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Where every dish tells a story of Punjab's rich culinary heritage. Feast your eyes before you feast your palate.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Browse by Category</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <motion.div key={category.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                    <span className="font-medium text-gray-900">{category.name}</span>
                    <span className="text-[var(--color-primary)] ml-2">({category.count})</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {images.map((image, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-xl bg-gray-200 aspect-square">
                  <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience the Flavors</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to taste what you've seen? Visit us at Shilp Square for an authentic Punjabi dining experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--color-primary)]/90 transition-colors">
                  Visit Us Today
                </Link>
                <Link href="tel:09924503837" className="border border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                  Call to Order
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">EAT PUNJAB</h3>
              <p className="text-gray-600 mb-4">Authentic Punjabi flavors in the heart of Bodakdev. Where tradition meets taste.</p>
              <div className="flex items-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                <span className="ml-2 text-gray-600">4.5 (1352 reviews)</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-gray-600 hover:text-[var(--color-primary)]">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[var(--color-primary)] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">099245 03837</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[var(--color-primary)] mt-0.5 mr-2 flex-shrink-0" />
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