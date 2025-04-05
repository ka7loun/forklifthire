import { FC, useState, useEffect } from 'react';
import { Phone, Mail, Building2 } from 'lucide-react';
import emailjs from 'emailjs-com';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}

const ContactInfo: FC<ContactInfoProps> = ({ icon, title, text }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <span className="text-gray-700">{text}</span>
  </div>
);

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  // EmailJS configuration
  const RECIPIENT_EMAIL = 'info@forklifthiresolutions.org';
  const SERVICE_ID = 'service_xdkm0kf'; // User's actual service ID
  const TEMPLATE_ID = 'template_8l4kkd4'; // User's actual template ID
  const PUBLIC_KEY = '3YvxzKDTMOgF6B4i9'; // User's actual public key

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Get current time for the email
    const now = new Date();
    const formattedTime = now.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Prepare template parameters to match your template variables
    const templateParams = {
      name: formData.fullName,
      time: formattedTime,
      message: `
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}`,
      reply_to: formData.email,
      to_email: RECIPIENT_EMAIL
    };

    // Send email using EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus({
          success: true,
          message: 'Thank you for your enquiry. We will respond within 24 hours.'
        });
        // Reset form
        setFormData({
          fullName: '',
          company: '',
          phone: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSubmitStatus({
          success: false,
          message: 'There was an error sending your message. Please try again or contact us directly.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[#004AAD] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Get You Lifted – Contact Us Today</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
              Whether you need a quote, want to open an account, or have a question — we're here 24/7 to help you move forward.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ContactInfo
            icon={<Phone className="w-8 h-8" />}
            title="Phone Support"
            text={<>
              <p>Phone (24/7): 01582 967 987</p>
              <p>Mobile / WhatsApp: +44 (0) 7534 629 583</p>
            </>}
          />
          <ContactInfo
            icon={<Mail className="w-8 h-8" />}
            title="Email Us"
            text={<>
              <p>General: info@forklifthiresolutions.org</p>
              <p>Enquiries: enquiries@forklifthiresolutions.org</p>
              <p>Sales: sales@forklifthiresolutions.org</p>
              <p>Hire: hire@forklifthiresolutions.org</p>
              <p>Admin: admin@forklifthiresolutions.org</p>
              <p>Accounts: accounts@forklifthiresolutions.org</p>
              <p>Services: services@forklifthiresolutions.org</p>
              <p>Director: karim@forklifthiresolutions.org</p>
            </>}
          />
          <ContactInfo
            icon={<Building2 className="w-8 h-8" />}
            title="Office Address"
            text={<>
              <p>Forklift Hire Solutions Ltd</p>
              <p>122 Tenby Drive</p>
              <p>Luton, Bedfordshire</p>
              <p>LU4 9BN</p>
              <p>United Kingdom</p>
            </>}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message / Enquiry *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-[#004AAD] hover:bg-blue-700'} text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform ${!isSubmitting && 'hover:scale-105'}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
              </button>
              
              {submitStatus && (
                <div className={`mt-4 p-4 rounded-xl ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Map Section */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8088025855594!2d-0.4185844842089699!3d51.8789894796959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48764144641475f5%3A0x8e0b1e0c4a4f7b0e!2sLuton%2C%20UK!5e0!3m2!1sen!2s!4v1629789012345!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#004AAD] p-8 rounded-2xl shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-4">Still unsure what you need?</h2>
              <p className="text-lg mb-6">Speak to our friendly team today. We'll help you find the right machine, person, or plan — fast.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Contact;