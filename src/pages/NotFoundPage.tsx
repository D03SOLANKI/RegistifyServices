import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Building, Landmark } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-[#F7F9FC] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-card text-center space-y-6">
        <div className="w-16 h-16 bg-blue-50 text-[#142B49] rounded-2xl flex items-center justify-center mx-auto font-black text-2xl shadow-inner">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-[#142B49]">
            Page Not Found
          </h1>
          <p className="text-xs text-slate-500">
            The page you are looking for may have been moved or does not exist. Explore our primary services below:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <Link
            to="/loans"
            className="p-3 bg-slate-50 hover:bg-royal-50 rounded-xl border border-slate-200 text-[#142B49] font-bold flex flex-col items-center gap-1.5 transition-colors"
          >
            <Landmark className="w-5 h-5 text-royal-600" />
            <span>Loan Solutions</span>
          </Link>

          <Link
            to="/business"
            className="p-3 bg-slate-50 hover:bg-teal-50 rounded-xl border border-slate-200 text-[#142B49] font-bold flex flex-col items-center gap-1.5 transition-colors"
          >
            <Building className="w-5 h-5 text-teal-600" />
            <span>Business Services</span>
          </Link>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="w-full py-3 bg-[#142B49] hover:bg-[#0d1d33] text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
