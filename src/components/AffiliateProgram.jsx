import React, { useState } from 'react';

const AffiliateProgram = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    occupation: '',
    reason: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for applying! We will review your application within 24 hours.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      experience: '',
      occupation: '',
      reason: '',
    });
  };

  return (
    <div id="affiliate" className="bg-background-light dark:bg-background-dark py-16 md:py-24">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-r from-primary to-teal-custom text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm shadow-sm">
            ✨ Exclusive Regional Partnership
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            🚀 Join the Oxxy<br />Affiliate Program
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-medium text-white/90">
            For Insurance Agents, Health Professionals & Community Leaders Who Want to Own Their City
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm font-medium mb-10 text-white/80">
            <span className="flex items-center"><span className="material-symbols-outlined mr-1">task_alt</span> Exclusive Territorial Rights</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center"><span className="material-symbols-outlined mr-1">payments</span> Recurring Commissions</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center"><span className="material-symbols-outlined mr-1">support_agent</span> 1-on-1 Support</span>
          </div>
          <a
            href="#apply-form"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl text-lg hover:bg-gray-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-200"
          >
            Apply Now - Limited Slots
            <span className="material-symbols-outlined ml-2">arrow_downward</span>
          </a>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-text-light dark:text-text-dark mb-6">
          🧠 What Is Oxxy?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Oxxy is India's largest healthcare network, bringing affordable and accessible medical services to millions. As an affiliate partner, you help individuals and families save drastically on their medical bills while earning a substantial, recurring income. It's a win-win for everyone in your community.
        </p>

        {/* 3. Benefits & Features (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'lock', title: 'City Lock-in Rights', desc: 'Secure exclusive marketing rights in your designated city. No internal competition.' },
            { icon: 'currency_rupee', title: 'Recurring Revenue', desc: 'Earn monthly commissions for every active subscriber you bring to the platform.' },
            { icon: 'school', title: 'Complete Training', desc: 'Get full access to our comprehensive sales playbook, scripts, and platform training.' },
            { icon: 'group', title: 'Lifetime Support', desc: 'Dedicated partner success managers available via WhatsApp and Zoom calls.' },
            { icon: 'campaign', title: 'Marketing Materials', desc: 'Ready-made brochures, social media creatives, and presentation decks.' },
            { icon: 'verified', title: 'Proven System', desc: 'Join a rapidly growing network already trusted by thousands of families and providers.' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow text-left group">
              <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-light dark:text-text-dark">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Target Audience */}
      <section className="bg-primary/5 dark:bg-primary/10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-light dark:text-text-dark mb-4">
            🇮🇳 Who Is This For?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">You are a perfect fit if...</p>

          <div className="bg-white dark:bg-surface-dark border-t-4 border-primary rounded-2xl shadow-lg p-8 md:p-12 text-left">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              Ideal Candidate Profile
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "You are an Insurance Agent, Clinic Owner, Chemist, or Community Leader.",
                "You want to provide high-value healthcare savings to your network.",
                "You are looking for a reliable, recurring passive income stream.",
                "You have strong community connections in your specific city.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary text-sm">done</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. City-Level Exclusivity */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-text-light dark:text-text-dark mb-4">
          🔐 City-Level Exclusivity
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          We strictly limit the number of franchise partners per geographical area to ensure your absolute success and market dominance. Once slots are filled, they are closed indefinitely.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tier: 'Metro Cities', limit: '3 Partners Only', desc: 'High density urban areas with massive potential audience.', cities: ['Delhi NCR', 'Mumbai', 'Bengaluru', 'Chennai', 'Hyderabad', 'Pune'] },
            { tier: 'Tier 2 Cities', limit: '2 Partners Only', desc: 'Emerging IT and business hubs with rapid growth.', cities: ['Indore', 'Surat', 'Lucknow', 'Kanpur', 'Jaipur', 'Nagpur'] },
            { tier: 'Tier 3 Cities', limit: '1 Partner Only', desc: 'Growing districts requiring localized, grassroots impact.', cities: ['Panipat', 'Ujjain', 'Ajmer', 'Bikaner', 'Meerut', 'Agra'] },
          ].map((tier, idx) => (
            <div key={idx} className={`bg-white dark:bg-surface-dark border ${idx === 0 ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200 dark:border-gray-800'} rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow`}>
              {idx === 0 && (
                <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4 inline-block">Most Popular</span>
              )}
              <h3 className="text-xl font-bold mb-2 dark:text-white">{tier.tier}</h3>
              <div className="text-accent font-semibold mb-4 text-sm bg-accent/10 py-1 px-3 rounded inline-block">
                {tier.limit}
              </div>
              <ul className="text-gray-500 dark:text-gray-400 text-sm space-y-2 mb-6 text-left border-t dark:border-gray-800 pt-4">
                {tier.cities.map((city, cIdx) => (
                  <li key={cIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    {city}
                  </li>
                ))}
                <li className="text-xs italic text-gray-400 mt-2">+ more equivalent cities</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Application Process */}
      <section className="bg-gray-50 dark:bg-black/20 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-light dark:text-text-dark mb-4">
            🎯 How to Apply
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16 text-lg">Simple 4-step process to become an exclusive Oxxy partner</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gray-200 dark:bg-gray-800 -z-10"></div>
            {[
              { num: '01', title: 'Fill Application', desc: 'Complete the form with your details and preferred city.' },
              { num: '02', title: 'Review Process', desc: 'Our team will review your profile for market fit.' },
              { num: '03', title: 'Onboarding Fee', desc: 'Secure your tier exclusivity with the partner licensing fee.' },
              { num: '04', title: 'Start Earning', desc: 'Unlock your dashboard and start saving lives while earning.' },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10">
                <div className="w-20 h-20 mx-auto bg-white dark:bg-surface-dark border text-center border-gray-100 dark:border-gray-800 rounded-full shadow-lg flex items-center justify-center mb-6 text-xl font-display font-bold text-primary ring-8 ring-gray-50 dark:ring-black/20">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2 text-text-light dark:text-text-dark">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Application Form */}
      <section id="apply-form" className="py-24 px-6 max-w-3xl mx-auto">
        <div className="bg-white dark:bg-surface-dark border shadow-2xl rounded-3xl p-8 md:p-12 border-gray-100 dark:border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-teal-custom"></div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-text-light dark:text-text-dark mb-2">
              Affiliate Application Form
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Fill out the details below to apply for city exclusivity. Review within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ramesh@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-shadow"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">WhatsApp Number *</label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    className="w-full px-4 py-3 rounded-none rounded-r-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-shadow"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred City *</label>
                <select
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-shadow"
                >
                  <option value="" disabled>Select your core market...</option>
                  <option value="delhi_ncr">Delhi NCR</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bengaluru">Bengaluru</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                  <option value="other_tier_2">Other Tier-2 City</option>
                  <option value="other_tier_3">Other Tier-3 City</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="e.g. Insurance Agent, Chemist"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sales/Network Exp.</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-shadow"
                >
                  <option value="">Select experience level...</option>
                  <option value="beginner">Beginner (0-2 years)</option>
                  <option value="intermediate">Intermediate (3-5 years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Why are you interested in partnering? *</label>
              <textarea
                name="reason"
                required
                rows={4}
                value={formData.reason}
                onChange={handleChange}
                placeholder="Tell us a little bit about your local network and how you plan to acquire users..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-shadow resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary to-teal-custom hover:from-primary-dark hover:to-teal-custom text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Submit Complete Application
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              <span className="material-symbols-outlined text-[14px] align-middle mr-1">lock</span>
              Your data is secure. We never sell your information.
            </p>
          </form>
        </div>
      </section>

      {/* 8. Final Call to Action */}
      <section className="bg-gradient-to-r from-secondary to-gray-900 py-16 px-6 text-center text-white border-y-4 border-accent">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="material-symbols-outlined text-5xl text-accent">warning</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Claim Your City?
          </h2>
          <p className="text-xl mb-10 text-gray-300">
            Don't let someone else own your local market. Once a city slot is filled by a partnered affiliate, it’s locked indefinitely.
          </p>
          <a
            href="#apply-form"
            className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-xl text-lg hover:bg-red-600 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Apply For Exclusivity Now
          </a>
        </div>
      </section>

    </div>
  );
};

export default AffiliateProgram;
