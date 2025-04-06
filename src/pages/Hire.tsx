import { FC, useState } from 'react';

interface ForkliftCardProps {
  image: string;
  title: string;
  suitability: string;
}

const ForkliftCard: FC<ForkliftCardProps> = ({ image, title, suitability }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <div className="p-4 flex justify-center items-center h-64">
      <img src={image} alt={title} className="max-h-full max-w-full object-contain" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 text-center">{title}</h3>
      <p className="text-gray-600 mt-2 text-center">{suitability}</p>
    </div>
  </div>
);

const Hire: FC = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedSuitability, setSelectedSuitability] = useState('');

  const forklifts = [
    {
      image: './forflift/Counterbalance 2.5-ton.jpg',
      title: 'Counterbalance Forklift',
      suitability: 'Suitable for indoor and outdoor use'
    },
    {
      image: './forflift/Electric Counterbalance.jpg',
      title: 'Electric Counterbalance',
      suitability: 'Suitable for warehouse operations'
    },
    {
      image: './forflift/Reach Truck 1.4 ton.jpg',
      title: 'Reach Truck',
      suitability: 'Suitable for indoor use'
    },
    {
      image: './forflift/Electric Pallet Truck 2 ton.jpg',
      title: 'Electric Pallet Truck',
      suitability: 'Suitable for warehouse operations'
    },
    {
      image: './forflift/Manual Pallet.jpg',
      title: 'Manual Pallet',
      suitability: 'Suitable for indoor use'
    },
    {
      image: './forflift/Stacker.jpg',
      title: 'Stacker',
      suitability: 'Suitable for warehouse operations'
    },
    {
      image: './forflift/Electric Stacker.jpg',
      title: 'Electric Stacker',
      suitability: 'Suitable for warehouse operations'
    },
    {
      image: './forflift/Electric Stacker.jpg',
      title: 'Electric Stacker Plus',
      suitability: 'Suitable for warehouse operations'
    }
  ];

  const forkliftTypes = ['All Types', 'Counterbalance', 'Electric', 'Reach Truck', 'Pallet Truck', 'Stacker'];
  const suitabilityOptions = ['All Locations', 'Indoor Use', 'Outdoor Use', 'Warehouse Operations'];

  const filteredForklifts = forklifts.filter(forklift => {
    const matchesType = selectedType === '' || selectedType === 'All Types' || 
      forklift.title.toLowerCase().includes(selectedType.toLowerCase());
    const matchesSuitability = selectedSuitability === '' || selectedSuitability === 'All Locations' || 
      forklift.suitability.toLowerCase().includes(selectedSuitability.toLowerCase().replace(' use', ''));
    return matchesType && matchesSuitability;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">Forklift Hire</h1>
        <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Our comprehensive range of forklifts available for short and long-term hire.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {forkliftTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <select
            value={selectedSuitability}
            onChange={(e) => setSelectedSuitability(e.target.value)}
            className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {suitabilityOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredForklifts.map((forklift, index) => (
            <ForkliftCard key={index} {...forklift} />
          ))}
        </div>

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