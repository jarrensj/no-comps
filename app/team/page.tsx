import React from 'react';
import { Instagram } from '@geist-ui/icons'
import Link from 'next/link';

interface TeamMember {
  id: number;
  name: string;
  instagram?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jarren",
    instagram: "https://www.instagram.com/jarrensj",
  },
  {
    id: 2,
    name: "Kyle Macabasco",
    instagram: "https://www.instagram.com/yaboyykyle",
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Our Team
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto border-b pb-8">
          If they are not on this list, don&apos;t trust them (they might be impersonators or scammers).
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{member.name}</h2>
              {member.instagram && (
                <Link
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-blue-500 hover:text-blue-700 transition-colors duration-200 group"
                >
                  <Instagram size={24} className="group-hover:scale-110 transition-transform duration-200" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
