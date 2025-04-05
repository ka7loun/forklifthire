import { FC } from 'react';

interface ForkliftCardProps {
  image: string;
  title: string;
  capacity: string;
  price: string;
}

const ForkliftCard: FC<ForkliftCardProps> = ({ image, title, capacity, price }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-lg font-semibold text-blue-600 mt-2">{capacity}</p>
      <p className="text-gray-600 mt-2">{price}</p>
    </div>
  </div>
);

const Sales: FC = () => {
  const forkliftsForSale = [
    {
      image: '/forflift/Counterbalance 2.5-ton.jpg',
      title: 'Counterbalance 2.5-ton',
      capacity: '2,500 kg',
      price: '$15,000'
    },
    {
      image: '/forflift/Electric Counterbalance.jpg',
      title: 'Electric Counterbalance',
      capacity: '2.0 to 3.5 ton',
      price: '$18,000'
    },
    {
      image: '/forflift/Reach Truck 1.4 ton.jpg',
      title: 'Reach Truck 1.4 ton',
      capacity: '1,400 kg',
      price: '$12,000'
    },
    {
      image: '/forflift/Electric Pallet Truck 2 ton.jpg',
      title: 'Electric Pallet Truck',
      capacity: '2,000 kg',
      price: '$5,000'
    },
    {
      image: '/forflift/Manual Pallet.jpg',
      title: 'Manual Pallet',
      capacity: '2,500 kg',
      price: '$3,000'
    },
    {
      image: '/forflift/Stacker.jpg',
      title: 'Stacker',
      capacity: '1,000 kg',
      price: '$7,000'
    },
    {
      image: '/forflift/Electric Stacker.jpg',
      title: 'Electric Stacker',
      capacity: '1,600 kg',
      price: '$9,000'
    },
    {
      image: '/forflift/Electric Stacker.jpg',
      title: 'Electric Stacker Plus',
      capacity: '1,600 kg',
      price: '$10,000'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">Forklift Equipment for Sale</h1>
        <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Explore our range of forklifts available for purchase.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {forkliftsForSale.map((forklift, index) => (
            <ForkliftCard key={index} {...forklift} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;