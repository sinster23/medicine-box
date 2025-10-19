"use client";
import React, { useState } from 'react';

interface Medicine {
  id: number;
  box: number;
  name: string;
  category: string;
  prescribedTime: string;
  createdAt: string;
  image: string;
}

export default function MedicineBox() {
  const medicines: Medicine[] = [
    {
      id: 1,
      box: 1,
      name: "Amoxicillin",
      category: "Antibiotic",
      prescribedTime: "8:00 AM, 8:00 PM",
      createdAt: "2025-10-15",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      box: 1,
      name: "Vitamin D3",
      category: "Supplement",
      prescribedTime: "9:00 AM",
      createdAt: "2025-10-10",
      image: "https://images.unsplash.com/photo-1550572017-4fade9069e3f?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      box: 2,
      name: "Lisinopril",
      category: "Blood Pressure",
      prescribedTime: "7:00 AM",
      createdAt: "2025-09-28",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      box: 2,
      name: "Metformin",
      category: "Diabetes",
      prescribedTime: "8:00 AM, 8:00 PM",
      createdAt: "2025-10-01",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      box: 3,
      name: "Ibuprofen",
      category: "Pain Relief",
      prescribedTime: "As needed",
      createdAt: "2025-10-12",
      image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      box: 3,
      name: "Cetirizine",
      category: "Antihistamine",
      prescribedTime: "10:00 PM",
      createdAt: "2025-10-08",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      box: 4,
      name: "Omeprazole",
      category: "Acid Reducer",
      prescribedTime: "Before breakfast",
      createdAt: "2025-10-05",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop"
    }
  ];

  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const getBoxMedicines = (boxNumber: number): Medicine[] => {
    return medicines.filter(med => med.box === boxNumber);
  };

  return (
    <div className="min-h-screen bg-[#e8e0d5] p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h2 className="text-5xl sm:text-6xl font-light text-[#2d2d2d] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Hello User
          </h2>
          <p className="text-2xl font-light text-[#6b6b6b]" style={{ fontFamily: 'Georgia, serif' }}>
            Welcome to Medicine Box Storage
          </p>
        </header>

        {/* Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[1, 2, 3, 4].map((boxNum) => {
            const boxMeds = getBoxMedicines(boxNum);
            return (
              <div
                key={boxNum}
                onClick={() => setSelectedBox(selectedBox === boxNum ? null : boxNum)}
                className="bg-[#f5f1eb] rounded-3xl p-8 cursor-pointer transition-all hover:shadow-xl border border-[#d4c9ba]"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-4xl font-light text-[#2d2d2d]" style={{ fontFamily: 'Georgia, serif' }}>
                    Box {boxNum}
                  </h3>
                  <span className="text-sm text-[#8b9d8a] bg-[#8b9d8a20] px-4 py-2 rounded-full">
                    {boxMeds.length} {boxMeds.length === 1 ? 'item' : 'items'}
                  </span>
                </div>
                
                {boxMeds.length > 0 ? (
                  <div className="flex gap-3 mb-4">
                    {boxMeds.slice(0, 3).map((med) => (
                      <div key={med.id} className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#d4c9ba]">
                        <img src={med.image} alt={med.name} className="w-full h-full object-cover" />
                      </div>
                    ))}
                    {boxMeds.length > 3 && (
                      <div className="w-16 h-16 rounded-xl bg-[#8b9d8a20] flex items-center justify-center text-[#8b9d8a] font-light">
                        +{boxMeds.length - 3}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-[#999] font-light italic">Empty box</p>
                )}

                <div className="text-sm text-[#6b6b6b] font-light">
                  {boxMeds.length > 0 && (
                    <div className="space-y-1">
                      {boxMeds.map((med) => (
                        <div key={med.id} className="truncate">{med.name}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed View */}
        {selectedBox && (
          <div className="bg-[#f5f1eb] rounded-3xl p-8 border border-[#d4c9ba]">
            <h3 className="text-3xl font-light text-[#2d2d2d] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Box {selectedBox} Details
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {getBoxMedicines(selectedBox).map((med) => (
                <div key={med.id} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e0d5]">
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-[#f5f1eb]">
                    <img src={med.image} alt={med.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <h4 className="text-xl font-light text-[#2d2d2d] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {med.name}
                  </h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-[#e8e0d5]">
                      <span className="text-[#999] font-light">Category</span>
                      <span className="text-[#2d2d2d]">{med.category}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-[#e8e0d5]">
                      <span className="text-[#999] font-light">Prescribed Time</span>
                      <span className="text-[#2d2d2d] text-right">{med.prescribedTime}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#999] font-light">Added On</span>
                      <span className="text-[#2d2d2d]">{med.createdAt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="mt-12 flex justify-center gap-8">
          {['Home', 'Schedule', 'History', 'Settings'].map((item, idx) => (
            <button
              key={idx}
              className="text-[#6b6b6b] hover:text-[#2d2d2d] font-light transition-colors text-sm"
            >
              0{idx + 1} {item}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}