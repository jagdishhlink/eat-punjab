"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Star, Users, Clock, Award } from "lucide-react";

const navigation = [{"label":"Home","href":"/"},{"label":"About","href":"/about"},{"label":"Services","href":"/services"},{"label":"Gallery","href":"/gallery"},{"label":"Contact","href":"/contact"}];
const services = [{"icon":"🍽️","title":"Dine-In Experience","description":"Settle into our warm, welcoming space where the aroma of fresh rotis and sizzling tandoor fills the air. Perfect for family gatherings and celebrations."},{"icon":"📦","title":"Takeaway & Delivery","description":"Enjoy our authentic flavors at home with carefully packed meals that retain their warmth and taste. Quick pickup from Ff 102 or delivery to your doorstep."},{"icon":"🎉","title":"Catering Services","description":"Bring the taste of Punjab to your special occasions. We handle everything from intimate family dinners to large celebrations with authentic flair."},{"icon":"🍛","title":"Tiffin Services","description":"Regular home-cooked Punjabi meals delivered fresh to your office or home. Like having a Punjabi kitchen without the cooking."},{"icon":"👶","title":"Family-Friendly Dining","description":"Spacious seating and kid-friendly options make us perfect for multi-generation family meals. High chairs and patient service included."},{"icon":"🌱","title":"Vegetarian Specialties","description":"Extensive pure-veg menu featuring dal makhani, paneer dishes, and seasonal vegetables prepared with ghee and love."}];
const testimonials = [{"name":"Rajesh Patel","role":"Regular Customer","text":"The butter chicken here reminds me of my trips to Amritsar. Authentic taste and the naans are perfectly soft. My family's new favorite spot in Bodakdev.","rating":5},{"name":"Priya Sharma","role":"Food Enthusiast","text":"Finally found a place that makes proper dal makhani! The rich, creamy texture and overnight slow-cooking really shows. Worth the drive from anywhere in Ahmedabad.","rating":5},{"name":"Vikram Singh","role":"Punjabi Food Lover","text":"As someone from Punjab, I'm picky about authentic taste. EAT PUNJAB gets it right - from the tandoor roti to the perfectly spiced chole. Feels like home.","rating":5}];

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-[var(--color-primary)]">EAT PUNJAB</Link>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href} className="text-gray-700 hover:text-[var(--color-primary)]">{item.label}</Link>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href} className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]">{item.label}</Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] mb-6">Our Journey from Punjab to Ff 102</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Where tradition meets taste in the heart of Bodakdev</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}}>
              <img src="/images/img_1780389467972_0.jpg" alt="EAT PUNJAB Restaurant" className="rounded-2xl shadow-lg w-full"/>
            </motion.div>
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.3}}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Born from a Mother's Recipe</h2>
              <p className="text-gray-600 mb-4">What started as a family kitchen in Punjab became a dream to share authentic flavors with Ahmedabad. Every dish carries the soul of traditional cooking.</p>
              <p className="text-gray-600 mb-6">From our clay tandoor to slow-cooked dal makhani, we preserve the cooking methods passed down through generations.</p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">4.5</div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">1352</div>
                  <div className="text-sm text-gray-500">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">5+</div>
                  <div className="text-sm text-gray-500">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-surface)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Special</h2>
            <p className="text-gray-600">Four pillars of authentic Punjabi dining</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {icon: Award, title: "Authentic Recipes", desc: "Traditional family recipes from Punjab"},
              {icon: Users, title: "Family Legacy", desc: "Three generations of cooking expertise"},
              {icon: Clock, title: "Fresh Daily", desc: "Everything prepared fresh every morning"},
              {icon: Star, title: "Quality Promise", desc: "Only finest ingredients and pure ghee"}
            ].map((item, index) => (
              <motion.div key={index} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:index*0.1}} className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Family Says</h2>
            <p className="text-gray-600">Stories from our dining table</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:index*0.1}} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-primary)] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="text-3xl font-bold mb-6">Ready to Taste Punjab?</h2>
            <p className="text-xl mb-8">Visit us at Ff 102, Shilp Square, opposite Himalaya Mall</p>
            <Link href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Find Us & Order Now
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="border-t py-16 bg-[var(--color-surface)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">EAT PUNJAB</h3>
              <p className="text-gray-600 mb-4">Authentic Punjabi flavors in the heart of Bodakdev, Ahmedabad.</p>
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                ))}
                <span className="text-gray-600 ml-2">4.5 (1352 reviews)</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link key={item.label} href={item.href} className="block text-gray-600 hover:text-[var(--color-primary)]">{item.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Visit Us</h4>
              <p className="text-gray-600 mb-2">📍 Ff 102, Shilp Square, Gurukul Rd, opp. Himalaya Mall, Bodakdev, Ahmedabad, Gujarat 380052</p>
              <p className="text-gray-600">📞 099245 03837</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}