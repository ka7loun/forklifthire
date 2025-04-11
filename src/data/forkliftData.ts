import { ForkliftSpec } from '../components/ForkliftModal';

// Diesel Counterbalance Forklifts
const dieselCounterbalanceForklifts: ForkliftSpec[] = [
  {
    image: './forflift/Counterbalance 2.5-ton.jpg',
    title: 'CPCD20 - 2.0 Ton Diesel Forklift',
    specifications: {
      capacity: '2,000 kg',
      dimensions: {
        length: '2,485 mm',
        width: '1,160 mm',
        height: '2,070 mm'
      },
      serviceWeight: '3,510 kg',
      engineType: 'Diesel',
      enginePower: '36 kW @ 2,650 rpm',
      torque: '148 Nm @ 2,000 rpm',
      fuelTank: '50 L',
      transmission: 'Power-Shift/Manual',
      tireType: 'Pneumatic (Standard)',
      mast: {
        standard: '2-stage (3m)',
        optional: ['2/3-stage full free (3m–6m)']
      },
      sideShift: 'Integrated / Optional CASCADE',
      suitability: 'Suitable for indoor and outdoor use',
      features: [
        'Multiple engine options (ISUZU, YANMAR, VM, JAC)',
        'Optional solid tires available',
        'Speeds: 1F / 2R',
        'Robust construction',
        'Advanced safety features'
      ]
    }
  },
  {
    image: './forflift/Counterbalance 2.5-ton.jpg',
    title: 'CPCD25 - 2.5 Ton Diesel Forklift',
    specifications: {
      capacity: '2,500 kg',
      dimensions: {
        length: '2,560 mm',
        width: '1,160 mm',
        height: '2,070 mm'
      },
      serviceWeight: '3,730 kg',
      engineType: 'Diesel',
      enginePower: '45 kW @ 2,500 rpm',
      torque: '148 Nm @ 2,000 rpm',
      fuelTank: '50 L',
      transmission: 'Power-Shift/Manual',
      tireType: 'Pneumatic (Standard)',
      mast: {
        standard: '2-stage (3m)',
        optional: ['2/3-stage full free (3m–6m)']
      },
      sideShift: 'Integrated / Optional CASCADE',
      suitability: 'Suitable for indoor and outdoor use',
      features: [
        'Multiple engine options',
        'Optional solid tires',
        'Enhanced load capacity',
        'Robust construction',
        'Advanced safety features'
      ]
    }
  },
  {
    image: './forflift/Counterbalance 2.5-ton.jpg',
    title: 'CPCD30 - 3.0 Ton Diesel Forklift',
    specifications: {
      capacity: '3,000 kg',
      dimensions: {
        length: '2,680 mm',
        width: '1,150 mm',
        height: '2,065 mm'
      },
      serviceWeight: '4,410 kg',
      engineType: 'Diesel',
      enginePower: '37 kW',
      torque: '148 Nm',
      fuelTank: '50 L',
      transmission: 'Power-Shift/Manual',
      tireType: 'Pneumatic',
      suitability: 'Suitable for indoor and outdoor use',
      features: [
        'Powerful diesel engine',
        'Robust construction',
        'Advanced safety features',
        'Excellent maneuverability',
        'Ergonomic operator compartment'
      ]
    }
  },
  {
    image: './forflift/Counterbalance 2.5-ton.jpg',
    title: 'CPCD35 - 3.5 Ton Diesel Forklift',
    specifications: {
      capacity: '3,500 kg',
      dimensions: {
        length: '2,745 mm',
        width: '1,150 mm',
        height: '2,065 mm'
      },
      serviceWeight: '4,630 kg',
      engineType: 'Diesel',
      enginePower: '37 kW',
      torque: '148 Nm',
      fuelTank: '50 L',
      transmission: 'Power-Shift/Manual',
      tireType: 'Pneumatic',
      suitability: 'Suitable for indoor and outdoor use',
      features: [
        'Enhanced load capacity',
        'Robust construction',
        'Advanced safety features',
        'Excellent maneuverability',
        'Ergonomic operator compartment'
      ]
    }
  },
  {
    image: './forflift/Counterbalance 2.5-ton.jpg',
    title: 'CPCD40 - 4.0 Ton Diesel Forklift',
    specifications: {
      capacity: '4,000 kg',
      dimensions: {
        length: '3,120 mm',
        width: '1,480 mm',
        height: '2,200 mm'
      },
      serviceWeight: '6,500 kg',
      engineType: 'Diesel',
      enginePower: '55 kW',
      torque: '235 Nm',
      fuelTank: '70 L',
      transmission: 'Power-Shift/Manual',
      tireType: 'Pneumatic',
      suitability: 'Suitable for heavy-duty applications',
      features: [
        'High power output',
        'Large fuel capacity',
        'Heavy-duty construction',
        'Advanced safety features',
        'Spacious operator cabin'
      ]
    }
  }
];

// Electric Counterbalance Forklifts
const electricCounterbalanceForklifts: ForkliftSpec[] = [
  {
    image: './forflift/Electric Counterbalance.jpg',
    title: 'CPD18J - 1.8 Ton Electric Forklift',
    specifications: {
      capacity: '1,800 kg',
      liftHeight: '4.8 m',
      engineType: 'Electric',
      battery: '48V / 500Ah',
      tireType: 'Cushion',
      transmission: 'Electric',
      mast: {
        standard: 'Triplex',
        optional: ['Container compatible']
      },
      sideShift: '±100 mm',
      suitability: 'Suitable for warehouse operations',
      features: [
        'Zero emissions',
        'Low noise operation',
        'Container compatible mast',
        'Precise side shift control',
        'Energy efficient'
      ]
    }
  },
  {
    image: './forflift/Electric Counterbalance.jpg',
    title: 'CPD20J - 2.0 Ton Electric Forklift',
    specifications: {
      capacity: '2,000 kg',
      engineType: 'Electric',
      battery: '48V / 500Ah',
      tireType: 'Cushion',
      transmission: 'Electric',
      mast: {
        standard: 'Triplex'
      },
      sideShift: 'Integrated',
      suitability: 'Suitable for warehouse operations',
      features: [
        'Zero emissions',
        'Low noise operation',
        'Triplex mast standard',
        'Enhanced visibility',
        'Energy efficient'
      ]
    }
  }
];

// Reach Trucks
const reachTrucks: ForkliftSpec[] = [
  {
    image: './forflift/Reach Truck 1.4 ton.jpg',
    title: 'CQD14 - 1.4 Ton Reach Truck',
    specifications: {
      capacity: '1,400 kg',
      liftHeight: '10.5 m',
      engineType: 'Electric',
      battery: '48V / 400Ah',
      driveMotor: '5.2 kW',
      liftMotor: '11 kW',
      minAisleWidth: '2,700 mm',
      tireType: 'Polyurethane',
      suitability: 'Ideal for narrow aisle warehouse operations',
      features: [
        'High lift height capability',
        'Narrow aisle operation',
        'Advanced control system',
        'Energy efficient',
        'Ergonomic design'
      ]
    }
  }
];

// Electric Pallet Trucks
const electricPalletTrucks: ForkliftSpec[] = [
  {
    image: './forflift/Electric Pallet Truck 2 ton.jpg',
    title: 'CBD20 - 2.0 Ton Electric Pallet Truck',
    specifications: {
      capacity: '2,000 kg',
      liftHeight: '0.2 m',
      engineType: 'Electric',
      battery: '24V / 210Ah',
      driveMotor: '1.2 kW',
      liftMotor: '0.8 kW',
      tireType: 'Polyurethane',
      suitability: 'Perfect for loading/unloading and short distance transport',
      features: [
        'Compact design',
        'Easy maneuverability',
        'Low maintenance',
        'Long battery life',
        'Ergonomic tiller head'
      ]
    }
  }
];

// Electric Stackers
const electricStackers: ForkliftSpec[] = [
  {
    image: './forflift/Electric Stacker.jpg',
    title: 'CDD12 - 1.2 Ton Electric Stacker',
    specifications: {
      capacity: '1,200 kg',
      liftHeight: '3.3 m',
      engineType: 'Electric',
      battery: '24V / 210Ah',
      driveMotor: '1.2 kW',
      liftMotor: '2.2 kW',
      tireType: 'Polyurethane',
      suitability: 'Ideal for light warehouse operations',
      features: [
        'Compact design',
        'Easy operation',
        'Maintenance-free battery',
        'Stable performance',
        'Cost-effective'
      ]
    }
  }
];

// Combine all forklift categories
export const forkliftData: ForkliftSpec[] = [
  ...dieselCounterbalanceForklifts,
  ...electricCounterbalanceForklifts,
  ...reachTrucks,
  ...electricPalletTrucks,
  ...electricStackers
];