import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Check, HelpCircle, Forklift, Warehouse, Wrench } from 'lucide-react';

interface EquipmentCategoryProps {
  title: string;
  features: string[];
  icon?: React.ReactNode;
}

const EquipmentCategory: React.FC<EquipmentCategoryProps> = ({ title, features, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Fleet: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[#004AAD] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Fleet</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
              Dependable, Fully Certified, and Ready for Every Job
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-gray-700 leading-relaxed">
            At Forklift Hire Solutions Ltd, we proudly operate a comprehensive fleet of forklift trucks, 
            pallet equipment, and transport vehicles — all maintained to the highest standards. Whether 
            you're relocating a warehouse, operating a busy logistics hub, or planning an event, we have 
            the right machines and people to keep your business moving.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We offer short and long-term hire, sales, and transport support throughout the UK — with 
            professional advice and flexible booking options.
          </p>
        </div>

        {/* Equipment Categories */}
        <h2 className="text-3xl font-bold mb-8">Types of Equipment Available</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <EquipmentCategory
            icon={<Forklift size={32} />}
            title="Counterbalance Forklift Trucks"
            features={[
              "Diesel, LPG, and electric models",
              "1.5 to 10-tonne lifting capacity",
              "Ideal for both indoor and outdoor use",
              "Reliable models from trusted brands such as JAC Forklifts"
            ]}
          />
          <EquipmentCategory
            icon={<Forklift size={32} />}
            title="Electric Counterbalance Forklifts"
            features={[
              "Low-noise, environmentally friendly operation",
              "Best suited to warehouses, food environments, and enclosed facilities",
              "Compact for narrow aisle movement"
            ]}
          />
          <EquipmentCategory
            icon={<Warehouse size={32} />}
            title="Reach Trucks"
            features={[
              "High lift capability for tall racking systems",
              "Built for narrow aisle work",
              "Excellent for modern warehouse logistics"
            ]}
          />
          <EquipmentCategory
            icon={<Warehouse size={32} />}
            title="Stackers"
            features={[
              "Manual, semi-electric, and electric",
              "Designed for tight spaces and lower-level stacking",
              "Efficient and safe for lighter loads"
            ]}
          />
          <EquipmentCategory
            icon={<Forklift size={32} />}
            title="Pallet Trucks"
            features={[
              "Available in manual and powered formats",
              "Versatile for transporting goods over short distances",
              "High-lift, low-profile, and standard types available"
            ]}
          />
        </div>

        {/* Transport Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Transport Lorries & Warehouse Relocations</h2>
          <p className="text-gray-700 mb-6">
            We operate a dedicated transport fleet to support our clients with:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 mb-8">
            <li className="flex items-start">
              <Check className="text-green-500 mr-2 mt-1" size={20} />
              <span>Goods-in/goods-out transport</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 mr-2 mt-1" size={20} />
              <span>Warehouse removals and relocations</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 mr-2 mt-1" size={20} />
              <span>Delivery and collection of pallets, machinery, or equipment</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 mr-2 mt-1" size={20} />
              <span>Support for exhibitions, events, and temporary site setups</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Our lorries are:</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <Truck className="text-blue-600 mr-2 mt-1" size={20} />
              <span>Equipped with sliding or curtain-sided trailers</span>
            </li>
            <li className="flex items-start">
              <Truck className="text-blue-600 mr-2 mt-1" size={20} />
              <span>Operated by experienced, certified drivers</span>
            </li>
            <li className="flex items-start">
              <Truck className="text-blue-600 mr-2 mt-1" size={20} />
              <span>Tracked and scheduled to meet tight timelines</span>
            </li>
            <li className="flex items-start">
              <Truck className="text-blue-600 mr-2 mt-1" size={20} />
              <span>Available with or without loading/unloading assistance</span>
            </li>
          </ul>
          <p className="text-gray-700">
            Whether you're moving a single forklift or coordinating a full-site relocation, 
            we can supply the transport and manpower to get the job done smoothly.
          </p>
        </div>

        {/* Support Section */}
        <div className="bg-gray-900 text-white rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Every Hire Comes Fully Supported</h2>
          <p className="mb-6">All machines are:</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Wrench className="text-blue-400 mr-3" size={24} />
              <span>Fully serviced and LOLER-certified</span>
            </li>
            <li className="flex items-start">
              <Wrench className="text-blue-400 mr-3" size={24} />
              <span>Cleaned and pre-inspected before dispatch</span>
            </li>
            <li className="flex items-start">
              <Wrench className="text-blue-400 mr-3" size={24} />
              <span>Backed by responsive technical support</span>
            </li>
            <li className="flex items-start">
              <Wrench className="text-blue-400 mr-3" size={24} />
              <span>Available with operator hire or standalone rental</span>
            </li>
            <li className="flex items-start">
              <Wrench className="text-blue-400 mr-3" size={24} />
              <span>Delivered nationwide using our in-house or partnered logistics</span>
            </li>
          </ul>
        </div>

        {/* Consultation Section */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <HelpCircle className="text-blue-600 mr-3" size={32} />
            Unsure What You Need?
          </h2>
          <p className="text-gray-700 mb-6">
            Let us visit your site (free of charge) to recommend the right:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Equipment type",
              "Lifting height and load limits",
              "Manoeuvrability features",
              "Floor/environmental suitability"
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <Check className="text-green-500 mb-2" size={20} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Request Site Visit
            </Link>
          </div>
        </div>

        {/* Categories Navigation */}
        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Counterbalance Forklift Trucks",
            "Electric Forklifts",
            "Reach Trucks",
            "Stackers",
            "Pallet Trucks",
            "Transport Services"
          ].map((category, index) => (
            <Link
              key={index}
              to="/contact"
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all duration-300 flex items-center justify-between group"
            >
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                {category}
              </span>
              <Check className="text-green-500" size={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fleet;
