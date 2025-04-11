import { FC, useState } from 'react';
import { forkliftData } from '../data/forkliftData';
import ForkliftModal, { ForkliftSpec } from '../components/ForkliftModal';

interface ForkliftCardProps {
  forklift: ForkliftSpec;
  onClick: () => void;
}

const ForkliftCard: FC<ForkliftCardProps> = ({ forklift, onClick }) => (
  <div 
    className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
    onClick={onClick}
  >
    <div className="p-4 flex justify-center items-center h-64">
      <img src={forklift.image} alt={forklift.title} className="max-h-full max-w-full object-contain" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 text-center">{forklift.title}</h3>
      <p className="text-gray-600 mt-2 text-center">{forklift.specifications.suitability}</p>
    </div>
  </div>
);

const Hire: FC = () => {
  const [selectedForklift, setSelectedForklift] = useState<ForkliftSpec | null>(null);

  // Group forklifts by type
  const dieselForklifts = forkliftData.filter(f => f.specifications.engineType === 'Diesel');
  const electricForklifts = forkliftData.filter(f => f.specifications.engineType === 'Electric');
  const reachTrucks = forkliftData.filter(f => f.title.toLowerCase().includes('reach truck'));
  const palletTrucks = forkliftData.filter(f => f.title.toLowerCase().includes('pallet truck'));
  const stackers = forkliftData.filter(f => f.title.toLowerCase().includes('stacker'));

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">Forklift Hire</h1>
        <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Our comprehensive range of forklifts available for short and long-term hire.
        </p>

        {/* Diesel Counterbalance Forklifts */}
        {dieselForklifts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Diesel Counterbalance Forklifts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dieselForklifts.map((forklift, index) => (
                <ForkliftCard
                  key={index}
                  forklift={forklift}
                  onClick={() => setSelectedForklift(forklift)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Electric Counterbalance Forklifts */}
        {electricForklifts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Electric Counterbalance Forklifts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {electricForklifts.map((forklift, index) => (
                <ForkliftCard
                  key={index}
                  forklift={forklift}
                  onClick={() => setSelectedForklift(forklift)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Reach Trucks */}
        {reachTrucks.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reach Trucks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reachTrucks.map((forklift, index) => (
                <ForkliftCard
                  key={index}
                  forklift={forklift}
                  onClick={() => setSelectedForklift(forklift)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Electric Pallet Trucks */}
        {palletTrucks.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Electric Pallet Trucks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {palletTrucks.map((forklift, index) => (
                <ForkliftCard
                  key={index}
                  forklift={forklift}
                  onClick={() => setSelectedForklift(forklift)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Electric Stackers */}
        {stackers.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Electric Stackers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stackers.map((forklift, index) => (
                <ForkliftCard
                  key={index}
                  forklift={forklift}
                  onClick={() => setSelectedForklift(forklift)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Modal */}
        {selectedForklift && (
          <ForkliftModal
            forklift={selectedForklift}
            onClose={() => setSelectedForklift(null)}
          />
        )}

        <div className="mt-16 text-center">
          <button className="bg-[#004AAD] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hire;