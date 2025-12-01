import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-space-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <h1 className="text-3xl font-display font-bold text-white mb-8 text-center">Contact Us</h1>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-slate-800 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-quantum-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-slate-400 mb-1">For research inquiries and collaboration:</p>
                <a href="mailto:haodp.sut@gmail.com" className="text-quantum-400 hover:underline">haodp.sut@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-slate-800 p-3 rounded-lg">
                <Globe className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Online</h3>
                <div className="flex flex-col space-y-1">
                    <a href="https://phuchaodo.coregenaihub.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        Personal Website
                    </a>
                    <a href="https://github.com/QASCOM-Lab" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        GitHub Repositories
                    </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-slate-800 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Lab Location</h3>
                <p className="text-slate-400">
                  QASCOM Lab<br />
                  (Affiliation details to be updated)<br />
                </p>
              </div>
            </div>
          </div>

          {/* <hr className="my-10 border-slate-800" />

          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Your Email</label>
                    <input type="email" id="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-quantum-500" placeholder="researcher@university.edu" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-quantum-500" placeholder="I am interested in..."></textarea>
                </div>
                <button type="submit" className="w-full bg-quantum-600 hover:bg-quantum-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Send Inquiry
                </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;