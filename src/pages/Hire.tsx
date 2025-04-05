import { FC, useState } from 'react';

interface ForkliftCardProps {
  image: string;
  title: string;
  capacity: string;
  suitability: string;
}

const ForkliftCard: FC<ForkliftCardProps> = ({ image, title, capacity, suitability }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-lg font-semibold text-blue-600 mt-2">{capacity}</p>
      <p className="text-gray-600 mt-2">{suitability}</p>
    </div>
  </div>
);

const Hire: FC = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedSuitability, setSelectedSuitability] = useState('');

  const forklifts = [
    {
      image: '/forflift/Counterbalance 2.5-ton.jpg',
      title: 'Counterbalance 2.5-ton',
      capacity: '2,500 kg',
      suitability: 'Suitable for indoor and outdoor use'
    },
    {
      image: '/forflift/Electric Counterbalance.jpg',
      title: 'Electric Counterbalance',
      capacity: '2.0 to 3.5 ton',
      suitability: 'Suitable for warehouse operations'
    },
    {
      image: '/forflift/Reach Truck 1.4 ton.jpg',
      title: 'Reach Truck 1.4 ton',
      capacity: '1,400 kg',
      suitability: 'Suitable for indoor use'
    },
    {
      image: '/forflift/Electric Pallet Truck 2 ton.jpg',
      title: 'Electric Pallet Truck',
      capacity: '2,000 kg',
      suitability: 'Suitable for warehouse operations'
    },
    {
      image: '/forflift/Manual Pallet.jpg',
      title: 'Manual Pallet',
      capacity: '2,500 kg',
      suitability: 'Suitable for indoor use'
    },
    {
      image: '/forflift/Stacker.jpg',
      title: 'Stacker',
      capacity: '1,000 kg',
      suitability: 'Suitable for warehouse operations'
    },
    {
      image: '/forflift/Electric Stacker.jpg',
      title: 'Electric Stacker',
      capacity: '1,600 kg',
      suitability: 'Suitable for warehouse operations'
    },
    {
      image: '/forflift/Electric Stacker.jpg',
      title: 'Electric Stacker Plus',
      capacity: '1,600 kg',
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