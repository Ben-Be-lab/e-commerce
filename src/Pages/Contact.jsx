import { PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h1 className="text-6xl font-black uppercase tracking-tighter italic mb-8">Get in <br/><span className="text-emerald-600">Touch</span></h1>
          <p className="text-gray-500 mb-12 max-w-sm">Have questions about sizing or delivery? We usually respond within 30 minutes during business hours.</p>
          
          <div className="space-y-8">
            <a href="https://wa.me/yournumber" className="flex items-center gap-6 group">
              <div className="bg-black text-white p-4 rounded-2xl group-hover:bg-emerald-500 transition-colors">
                <ChatBubbleLeftRightIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400">WhatsApp Us</p>
                <p className="font-bold text-lg">+250 781370890</p>
              </div>
            </a>
            
            <div className="flex items-center gap-6">
              <div className="bg-gray-100 p-4 rounded-2xl">
                <EnvelopeIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400">Email</p>
                <p className="font-bold text-lg">support@bensvault.rw</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem]">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full bg-white border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-emerald-500" />
              <input type="email" placeholder="Email" className="w-full bg-white border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-emerald-500" />
            </div>
            <textarea placeholder="Your Message" rows="5" className="w-full bg-white border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-emerald-500"></textarea>
            <button className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;