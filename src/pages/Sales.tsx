import { FC } from 'react';

interface ForkliftCardProps {
  image: string;
  title: string;
}

const ForkliftCard: FC<ForkliftCardProps> = ({ image, title }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <div className="p-4 flex justify-center items-center h-64">
      <img src={image} alt={title} className="max-h-full max-w-full object-contain" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 text-center">{title}</h3>
    </div>
  </div>
);

const Sales: FC = () => {
  const forkliftsForSale = [
    {
      image: './forflift/Counterbalance 2.5-ton.jpg',
      title: 'Counterbalance Forklift'
    },
    {
      image: './forflift/Electric Counterbalance.jpg',
      title: 'Electric Counterbalance'
    },
    {
      image: './forflift/Reach Truck 1.4 ton.jpg',
      title: 'Reach Truck'
    },
    {
      image: './forflift/Electric Pallet Truck 2 ton.jpg',
      title: 'Electric Pallet Truck'
    },
    {
      image: './forflift/Manual Pallet.jpg',
      title: 'Manual Pallet'
    },
    {
      image: './forflift/Stacker.jpg',
      title: 'Stacker'
    },
    {
      image: './forflift/Electric Stacker.jpg',
      title: 'Electric Stacker'
    },
    {
      image: './forflift/Electric Stacker.jpg',
      title: 'Electric Stacker Plus'
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