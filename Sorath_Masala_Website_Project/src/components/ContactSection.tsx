import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, MessageCircle, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Dealership & Trade Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-ready submission handler
    console.log('Sorath Masala Enquiry Submitted:', formData);
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello Sorath Masala Gruh Udhyog,%0A%0AMy Name: ${encodeURIComponent(formData.name || 'Visitor')}%0APhone: ${encodeURIComponent(formData.phone || 'N/A')}%0ASubject: ${encodeURIComponent(formData.subject)}%0AMessage: ${encodeURIComponent(formData.message || 'I am interested in trade inquiry.')}`;
    window.open(`https://wa.me/91${BRAND_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative bg-[#F7F0E4] py-28 px-4 sm:px-6 lg:px-8 border-t border-[#A51D25]/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#6F1017] block mb-2">
            TRADE &bull; DISTRIBUTION &bull; CONSUMER
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-[#24140D] tracking-tight">
            LET'S <span className="text-[#A51D25]">CONNECT</span>
          </h2>
          <p className="text-base text-[#765E50] mt-3">
            Reach out for trade distribution, bulk retail inquiries, or questions about
            our genuine spice products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Direct Contact Info */}
          <div className="lg:col-span-5 bg-[#FFF9F0] border border-[#6F1017]/20 rounded-3xl p-8 sm:p-10 shadow-lg space-y-8">
            <div>
              <div className="inline-block p-1 bg-white rounded-lg border border-[#A51D25]/20 mb-4">
                <img
                  src={BRAND_INFO.logo}
                  alt={BRAND_INFO.name}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-[#6F1017]">
                {BRAND_INFO.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#765E50] mt-1 font-semibold">
                Order &amp; Trade Inquiries Hotline
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-6 pt-4 border-t border-[#765E50]/15">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#6F1017]/10 flex items-center justify-center text-[#6F1017] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#765E50] block">
                    Phone &amp; Order Line
                  </span>
                  <a
                    href={`tel:${BRAND_INFO.phone}`}
                    className="text-lg font-bold text-[#24140D] hover:text-[#A51D25] transition-colors"
                  >
                    +91 {BRAND_INFO.phone}
                  </a>
                  <p className="text-[11px] text-[#765E50]/80">Available Mon - Sat for trade calls</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#6F1017]/10 flex items-center justify-center text-[#6F1017] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#765E50] block">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="text-base font-bold text-[#24140D] hover:text-[#A51D25] transition-colors break-all"
                  >
                    {BRAND_INFO.email}
                  </a>
                  <p className="text-[11px] text-[#765E50]/80">Direct commercial inquiries</p>
                </div>
              </div>

              {/* WhatsApp Quick Action */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#426B35]/10 flex items-center justify-center text-[#426B35] shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#765E50] block">
                    WhatsApp Chat
                  </span>
                  <a
                    href={`https://wa.me/91${BRAND_INFO.phone}?text=Hello%20Sorath%20Masala,%20I%20have%20an%20inquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#426B35] hover:underline"
                  >
                    +91 {BRAND_INFO.phone}
                  </a>
                  <p className="text-[11px] text-[#765E50]/80">Instant WhatsApp representative</p>
                </div>
              </div>

              {/* Region */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8A928]/20 flex items-center justify-center text-[#6F1017] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#765E50] block">
                    Headquarters / Region
                  </span>
                  <p className="text-sm font-semibold text-[#24140D]">
                    Gujarat, India
                  </p>
                  <p className="text-[11px] text-[#765E50]/80">Traditional Saurashtra Spice Heritage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Business Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#6F1017]/15 rounded-3xl p-8 sm:p-12 shadow-lg">
            <h3 className="font-display text-2xl font-bold uppercase text-[#24140D] mb-2">
              Business Enquiry Form
            </h3>
            <p className="text-xs text-[#765E50] mb-8">
              Send us your requirements and our sales and distribution team will revert promptly.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#426B35]/10 border border-[#426B35]/30 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-[#426B35] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold uppercase text-[#426B35]">
                  Enquiry Received
                </h4>
                <p className="text-sm text-[#24140D]">
                  Thank you for reaching out to Sorath Masala Gruh Udhyog. We have logged your request.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="px-5 py-2.5 rounded-full bg-[#426B35] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#325227] transition-colors"
                  >
                    Open on WhatsApp Now
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-full border border-[#765E50]/30 text-[#765E50] text-xs font-semibold uppercase tracking-wider hover:bg-[#765E50]/10"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-[#765E50] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full px-4 py-3 rounded-xl border border-[#765E50]/30 focus:border-[#A51D25] focus:outline-none text-sm text-[#24140D] bg-[#FFF9F0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-[#765E50] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-[#765E50]/30 focus:border-[#A51D25] focus:outline-none text-sm text-[#24140D] bg-[#FFF9F0]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-[#765E50] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@domain.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#765E50]/30 focus:border-[#A51D25] focus:outline-none text-sm text-[#24140D] bg-[#FFF9F0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-[#765E50] mb-2">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#765E50]/30 focus:border-[#A51D25] focus:outline-none text-sm text-[#24140D] bg-[#FFF9F0]"
                    >
                      <option value="Dealership & Trade Inquiry">Dealership &amp; Trade Inquiry</option>
                      <option value="Bulk Order Inquiry">Bulk Order Inquiry</option>
                      <option value="Retail Distribution">Retail Distribution</option>
                      <option value="Product Feedback">Product Feedback</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#765E50] mb-2">
                    Message / Requirement *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your city, shop, or masala product inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-[#765E50]/30 focus:border-[#A51D25] focus:outline-none text-sm text-[#24140D] bg-[#FFF9F0] resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#A51D25] hover:bg-[#6F1017] text-[#FFF9F0] text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>SEND ENQUIRY</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#426B35] text-[#426B35] hover:bg-[#426B35]/10 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
