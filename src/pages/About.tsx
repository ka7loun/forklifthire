import React, { useState } from 'react';
import { Phone, Mail, MapPin, Award, Shield, Truck, Users, Wrench, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceModal from '../components/ServiceModal';
import { servicesData } from '../data/servicesData';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD] mb-6">{children}</h2>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, onClick }) => (
  <div 
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer" 
    onClick={onClick}
  >
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-700 flex-grow">{description}</p>
  </div>
);

interface CertificationBadgeProps {
  name: string;
}

const CertificationBadge: React.FC<CertificationBadgeProps> = ({ name }) => (
  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold inline-block m-1">
    {name}
  </div>
);

const About: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[#004AAD] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us – Forklift Hire Solutions Ltd</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
              Trusted Forklift Hire, Operator Supply & Site Solutions Across the UK
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Forklift Hire Solutions Ltd is a fully independent UK company providing expert forklift hire, 
            certified operator supply, equipment sales, and logistics support for businesses, contractors, 
            and event organisers nationwide.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
            We are committed to delivering safe, reliable, and legally compliant services with a strong 
            focus on customer satisfaction, accountability, and fair pricing. Every project — from a 
            single shift to a full site relocation — is handled with care, clarity, and professionalism.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <SectionTitle>What We Do</SectionTitle>
          <p className="text-lg text-gray-700 mb-8">We specialise in:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={index === 0 ? <Users size={32} /> :
                      index === 1 || index === 2 ? <Truck size={32} /> :
                      index === 3 || index === 6 ? <Wrench size={32} /> :
                      index === 4 ? <Truck size={32} /> :
                      <Calendar size={32} />}
                title={service.title.split(' – ')[0]}
                description={service.description.split('.')[0]}
                onClick={() => setSelectedService(index)}
              />
            ))}
          </div>

          {selectedService !== null && (
            <ServiceModal
              service={servicesData[selectedService]}
              onClose={() => setSelectedService(null)}
            />
          )}
          
          <p className="text-lg text-gray-700 mt-8">
            Whether you need short-term forklift support or long-term logistics assistance, we offer 
            transparent solutions that suit your timeline, budget, and site safety requirements.
          </p>
        </div>

        {/* Exhibition & Event Logistics */}
        <div className="bg-gray-100 p-8 rounded-2xl mb-16">
          <SectionTitle>Exhibition & Event Logistics Specialists</SectionTitle>
          <p className="text-lg text-gray-700 mb-6">We proudly support exhibitions, live events, arena setups, and build crews with:</p>
          
          <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
            <li>Forklift hire for indoor/outdoor use</li>
            <li>Fully certified forklift operators (RTITB, CPCS, NPORS, ITSSAR)</li>
            <li>Flexible day or night shifts</li>
            <li>Safe handling of staging, stands, materials, and freight</li>
            <li>Operators for client-owned or supplied forklifts</li>
          </ul>
          
          <p className="text-lg text-gray-700 mb-6">
            With a large database of experienced operators available across the UK, we can cover urgent 
            callouts, multi-day events, and last-minute bookings with ease.
          </p>
          
          <Link 
            to="/contact" 
            className="inline-block bg-[#004AAD] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Need help at your next event? Contact Us
          </Link>
        </div>

        {/* Industry Partnerships */}
        <div className="mb-16">
          <SectionTitle>Our Industry Partnerships</SectionTitle>
          <p className="text-lg text-gray-700 mb-6">We work in association with:</p>
          
          <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
            <li><strong>Contract Plant Hire Ltd</strong> – heavy machinery, large-scale lifting and national support</li>
            <li><strong>JAC Forklifts</strong> – advanced and economical electric, diesel, and LPG forklifts</li>
            <li>Reputable UK suppliers for spare parts, attachments, and pallet handling tools</li>
          </ul>
          
          <p className="text-lg text-gray-700">
            Our relationships ensure fast access to quality machinery, technical support, and equipment availability.
          </p>
        </div>

        {/* Certifications */}
        <div className="bg-gray-100 p-8 rounded-2xl mb-16">
          <SectionTitle>Certified, Insured & Legal</SectionTitle>
          <p className="text-lg text-gray-700 mb-6">
            Every service we provide is compliant with the following UK laws and safety frameworks:
          </p>
          
          <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
            <li>Health and Safety at Work etc. Act 1974</li>
            <li>Lifting Operations and Lifting Equipment Regulations (LOLER) 1998</li>
            <li>Provision and Use of Work Equipment Regulations (PUWER) 1998</li>
            <li>Data Protection Act 2018 & UK GDPR</li>
            <li>Misrepresentation Act 1967</li>
            <li>The Business Protection from Misleading Marketing Regulations 2008</li>
          </ul>
          
          <p className="text-lg text-gray-700">
            We never exaggerate our services, and everything we offer is supported by written agreements, 
            insurance, operator certification, and clear terms of business.
          </p>
        </div>

        {/* Operator Accreditation */}
        <div className="mb-16">
          <SectionTitle>Operator Accreditation</SectionTitle>
          <p className="text-lg text-gray-700 mb-6">
            All Forklift Hire Solutions Ltd operators are certified under one or more of the following:
          </p>
          
          <div className="flex flex-wrap mb-6">
            <CertificationBadge name="RTITB" />
            <CertificationBadge name="NPORS" />
            <CertificationBadge name="CITB" />
            <CertificationBadge name="ITSSAR" />
            <CertificationBadge name="LANTRA" />
          </div>
          
          <p className="text-lg text-gray-700">
            Signed timesheets are required per shift to ensure accuracy and client satisfaction. 
            All equipment is LOLER-inspected and maintained to manufacturer and legal standards.
          </p>
        </div>

        {/* Why Clients Trust Us */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <SectionTitle>Why Clients Trust Us</SectionTitle>
          
          <ul className="list-none mb-6 text-lg text-gray-700 space-y-4">
            <li className="flex items-start">
              <Shield className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <span>Fast, flexible forklift hire solutions nationwide</span>
            </li>
            <li className="flex items-start">
              <Shield className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <span>Fully insured operator-only or full-service packages</span>
            </li>
            <li className="flex items-start">
              <Shield className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <span>Transparent rates with no hidden fees</span>
            </li>
            <li className="flex items-start">
              <Shield className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <span>Clear documentation and safety-first approach</span>
            </li>
            <li className="flex items-start">
              <Shield className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <span>Proven track record with construction sites, events, warehouses & retail</span>
            </li>
            <li className="flex items-start">
              <Shield className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <span>Emergency callout service available 7 days a week</span>
            </li>
          </ul>
        </div>

        {/* Service Area */}
        <div className="mb-16">
          <SectionTitle>Serving the UK from Luton, Bedfordshire</SectionTitle>
          <p className="text-lg text-gray-700 mb-6">
            From our base in Luton (LU4), we support clients across:
          </p>
          
          <p className="text-lg text-gray-700 mb-6">
            London, Hertfordshire, Buckinghamshire, Essex, Cambridgeshire, and nationwide on request
          </p>
          
          <Link 
            to="/contact" 
            className="inline-block bg-[#004AAD] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Explore our full service area
          </Link>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 p-8 rounded-2xl">
          <SectionTitle>Contact Us Today</SectionTitle>
          <p className="text-lg text-gray-700 mb-6">
            We're here to help — whether you need a quick quote, a certified operator, or tailored logistics support.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <MapPin className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold">Forklift Hire Solutions Ltd</p>
                <p>122 Tenby Drive, Luton, LU4 9BN</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <p><span className="font-semibold">General Enquiries:</span> <a href="mailto:info@forklifthiresolutions.org" className="hover:text-blue-600 transition-colors">info@forklifthiresolutions.org</a></p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <p><span className="font-semibold">Phone (24/7):</span> <a href="tel:01582967987" className="hover:text-blue-600 transition-colors">01582 967 987</a></p>
                <p><span className="font-semibold">Mobile / WhatsApp:</span> <a href="tel:+447534629583" className="hover:text-blue-600 transition-colors">+44 (0) 7534 629 583</a></p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Award className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <p><span className="font-semibold">Website:</span> www.forklifthiresolutions.co.uk</p>
              </div>
            </div>
          </div>
          
          <Link 
            to="/contact" 
            className="inline-block bg-[#004AAD] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
