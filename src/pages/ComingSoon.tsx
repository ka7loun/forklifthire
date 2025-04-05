import { FC } from 'react';
import { ArrowLeft, Clock, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComingSoonProps {
  pageName: string;
}

const ComingSoon: FC<ComingSoonProps> = ({ pageName }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-8">
            <Construction className="w-16 h-16 text-blue-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {pageName} Page Coming Soon
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <Clock className="w-5 h-5 text-blue-600 mr-2" />
            <p className="text-xl text-gray-600">
              We're working hard to bring you this content
            </p>
          </div>
          
          <p className="text-lg text-gray-600 max-w-2xl mb-12">
            Thank you for your interest in our {pageName.toLowerCase()} offerings. This page is currently under development and will be available soon. Please check back later for updates or contact us directly for immediate assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/"
              className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <Link 
              to="/contact"
              className="bg-[#004AAD] text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
