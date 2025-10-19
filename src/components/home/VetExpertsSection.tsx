'use client';

import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/outline';

// Mock data for vet experts
const vetExperts = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    title: 'Veterinary Surgeon',
    specialization: 'Small Animal Surgery',
    experience: '12 years',
    rating: 4.9,
    patients: '2,500+',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
    bio: 'Specialized in orthopedic and soft tissue surgery with a passion for helping pets recover from complex procedures.',
    education: 'DVM, University of California',
    certifications: ['ACVS Board Certified', 'Fear Free Certified']
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    title: 'Veterinary Nutritionist',
    specialization: 'Pet Nutrition & Wellness',
    experience: '8 years',
    rating: 4.8,
    patients: '1,800+',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
    bio: 'Expert in pet nutrition and dietary management, helping pets achieve optimal health through proper nutrition.',
    education: 'DVM, Cornell University',
    certifications: ['ACVN Board Certified', 'Pet Nutrition Specialist']
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    title: 'Behavioral Veterinarian',
    specialization: 'Animal Behavior & Training',
    experience: '10 years',
    rating: 4.9,
    patients: '3,200+',
    avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
    bio: 'Dedicated to improving pet behavior and strengthening the human-animal bond through evidence-based training methods.',
    education: 'DVM, Texas A&M University',
    certifications: ['DACVB Board Certified', 'Certified Animal Behaviorist']
  }
];

export function VetExpertsSection() {

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600 rounded-full opacity-10 blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm border border-gray-300/50 dark:border-gray-700/50 mb-4 sm:mb-6">
            <StarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
            <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
              Expert Team
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Pet Wellness Exam
            <span className="text-gray-600 dark:text-gray-300">
              {" "}Experts
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Our team of certified veterinarians specializes in comprehensive pet wellness exams and brings decades of experience to help your pets live their healthiest lives.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {vetExperts.map((expert) => (
            <div
              key={expert.id}
              className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              {/* Profile Image */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
                <Image
                  src={expert.avatar}
                  alt={expert.name}
                  fill
                  className="object-cover rounded-full border-4 border-gray-300 dark:border-gray-600"
                  sizes="128px"
                />
                <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
                  <StarIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-300" />
                </div>
              </div>

              {/* Expert Info */}
              <div className="flex items-center justify-center space-x-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{expert.name}</h3>
                <div className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold mb-1 text-sm sm:text-base">{expert.title}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{expert.specialization}</p>

              {/* Bio */}
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                {expert.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-center">
                  <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{expert.experience}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{expert.patients}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Patients</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-3 w-3 sm:h-4 sm:w-4 ${
                      i < Math.floor(expert.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-400 dark:text-gray-600'
                    }`}
                  />
                ))}
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 ml-1 sm:ml-2">{expert.rating}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
