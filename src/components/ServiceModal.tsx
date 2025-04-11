import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';

export interface ServiceInfo {
  title: string;
  description: string;
  whatsIncluded?: string[];
  howItWorks?: string[];
  serviceAreas?: string[];
  flexibleOptions?: string[];
  availableEquipment?: string[];
  whyChooseUs?: string[];
  eventServices?: string[];
  whatWeDo?: string[];
  contacts: {
    email: string;
    title?: string;
  }[];
}

interface ServiceModalProps {
  service: ServiceInfo;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div ref={modalRef} className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <X size={24} />
          </button>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
            <p className="text-lg text-gray-700 mb-8">{service.description}</p>

            {service.whatsIncluded && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What's Included:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {service.whatsIncluded.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.howItWorks && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How It Works:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {service.howItWorks.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.serviceAreas && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Areas:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {service.serviceAreas.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.flexibleOptions && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Labour Options:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {service.flexibleOptions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.availableEquipment && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Equipment:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {service.availableEquipment.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.whyChooseUs && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Us:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {service.whyChooseUs.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.eventServices && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Event Services:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {service.eventServices.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.whatWeDo && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Do:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {service.whatWeDo.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact:</h3>
              {service.contacts.map((contact, index) => (
                <p key={index} className="text-gray-700">
                  {contact.title && <span className="font-semibold">{contact.title} – </span>}
                  <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800">
                    {contact.email}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;