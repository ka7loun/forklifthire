import { FC, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface ForkliftSpec {
  title: string;
  image: string;
  specifications: {
    capacity?: string;
    liftHeight?: string;
    engineType?: string;
    tireType?: string;
    transmission?: string;
    suitability?: string;
    features?: string[];
    dimensions?: {
      length?: string;
      width?: string;
      height?: string;
    };
    serviceWeight?: string;
    enginePower?: string;
    torque?: string;
    fuelTank?: string;
    battery?: string;
    driveMotor?: string;
    liftMotor?: string;
    minAisleWidth?: string;
    mast?: {
      standard?: string;
      optional?: string[];
    };
    sideShift?: string;
  };
}

interface ForkliftModalProps {
  forklift: ForkliftSpec | null;
  onClose: () => void;
}

const ForkliftModal: FC<ForkliftModalProps> = ({ forklift, onClose }) => {
  const navigate = useNavigate();
  
  if (!forklift) return null;

  const handleQuoteRequest = () => {
    const forkliftDetails = `${forklift.title}\nSpecifications:\n` +
      (forklift.specifications.capacity ? `- Capacity: ${forklift.specifications.capacity}\n` : '') +
      (forklift.specifications.liftHeight ? `- Lift Height: ${forklift.specifications.liftHeight}\n` : '') +
      (forklift.specifications.engineType ? `- Engine Type: ${forklift.specifications.engineType}\n` : '') +
      (forklift.specifications.suitability ? `- Suitability: ${forklift.specifications.suitability}\n` : '');
    
    navigate('/contact', { state: { prefilledMessage: forkliftDetails } });
    onClose();
  };

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
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div ref={modalRef} className="relative bg-white rounded-2xl max-w-4xl w-full mx-auto shadow-xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row">
            {/* Image section */}
            <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-50">
              <img
                src={forklift.image}
                alt={forklift.title}
                className="max-h-[400px] w-auto object-contain"
              />
            </div>

            {/* Content section */}
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{forklift.title}</h2>
              <button
                onClick={handleQuoteRequest}
                className="bg-[#004AAD] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mb-6 w-full"
              >
                Request a Quote
              </button>
              
              {/* Specifications */}
              <div className="space-y-6">
                {/* Basic Specifications */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Basic Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {forklift.specifications.capacity && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Capacity</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.capacity}</p>
                      </div>
                    )}
                    {forklift.specifications.liftHeight && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Lift Height</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.liftHeight}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Dimensions */}
                {forklift.specifications.dimensions && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Dimensions</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {forklift.specifications.dimensions.length && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Length</h4>
                          <p className="text-base text-gray-900">{forklift.specifications.dimensions.length}</p>
                        </div>
                      )}
                      {forklift.specifications.dimensions.width && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Width</h4>
                          <p className="text-base text-gray-900">{forklift.specifications.dimensions.width}</p>
                        </div>
                      )}
                      {forklift.specifications.dimensions.height && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Height</h4>
                          <p className="text-base text-gray-900">{forklift.specifications.dimensions.height}</p>
                        </div>
                      )}
                      {forklift.specifications.serviceWeight && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Service Weight</h4>
                          <p className="text-base text-gray-900">{forklift.specifications.serviceWeight}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Power & Performance */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Power & Performance</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {forklift.specifications.engineType && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Engine Type</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.engineType}</p>
                      </div>
                    )}
                    {forklift.specifications.enginePower && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Engine Power</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.enginePower}</p>
                      </div>
                    )}
                    {forklift.specifications.torque && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Torque</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.torque}</p>
                      </div>
                    )}
                    {forklift.specifications.fuelTank && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Fuel Tank</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.fuelTank}</p>
                      </div>
                    )}
                    {forklift.specifications.battery && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Battery</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.battery}</p>
                      </div>
                    )}
                    {forklift.specifications.driveMotor && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Drive Motor</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.driveMotor}</p>
                      </div>
                    )}
                    {forklift.specifications.liftMotor && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Lift Motor</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.liftMotor}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Equipment Details */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Equipment Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {forklift.specifications.tireType && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Tire Type</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.tireType}</p>
                      </div>
                    )}
                    {forklift.specifications.transmission && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Transmission</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.transmission}</p>
                      </div>
                    )}
                    {forklift.specifications.minAisleWidth && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Min Aisle Width</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.minAisleWidth}</p>
                      </div>
                    )}
                    {forklift.specifications.sideShift && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Side Shift</h4>
                        <p className="text-base text-gray-900">{forklift.specifications.sideShift}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mast Options */}
                {forklift.specifications.mast && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Mast Options</h3>
                    <div className="space-y-2">
                      {forklift.specifications.mast.standard && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Standard Mast</h4>
                          <p className="text-base text-gray-900">{forklift.specifications.mast.standard}</p>
                        </div>
                      )}
                      {forklift.specifications.mast.optional && forklift.specifications.mast.optional.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Optional Mast Heights</h4>
                          <ul className="mt-1 space-y-1">
                            {forklift.specifications.mast.optional.map((height, index) => (
                              <li key={index} className="text-base text-gray-900">{height}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Suitability & Features */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Applications & Features</h3>
                  {forklift.specifications.suitability && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Suitability</h4>
                      <p className="text-base text-gray-900">{forklift.specifications.suitability}</p>
                    </div>
                  )}
                  {forklift.specifications.features && forklift.specifications.features.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Key Features</h4>
                      <ul className="mt-2 space-y-1">
                        {forklift.specifications.features.map((feature, index) => (
                          <li key={index} className="text-gray-900 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForkliftModal;