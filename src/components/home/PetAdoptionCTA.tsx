'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { HeartIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

const adoptionFeatures = [
  {
    icon: HeartIcon,
    title: 'Find Your Perfect Match',
    description: 'Browse thousands of pets waiting for their forever homes'
  },
  {
    icon: HomeIcon,
    title: 'Adoption Made Easy',
    description: 'Simple process with support every step of the way'
  },
  {
    icon: UsersIcon,
    title: 'Join Our Community',
    description: 'Connect with other pet parents and adoption advocates'
  }
];

export function PetAdoptionCTA() {

  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 via-primary-50 to-secondary-50 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Ready to Welcome a New Family Member?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
              Every pet deserves a loving home. Discover amazing animals waiting for their forever families and make a difference in their lives.
            </p>

            <div className="space-y-6 mb-8">
              {adoptionFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/gallery">
                <Button size="lg" className="w-full sm:w-auto">
                  <HeartIcon className="h-5 w-5 mr-2" />
                  Browse Adoptable Pets
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large featured image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=400&fit=crop"
                  alt="Happy dog with family"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Meet Buddy</p>
                  <p className="text-sm opacity-90">Golden Retriever • 2 years old</p>
                </div>
              </motion.div>

              {/* Smaller images */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative h-32 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=200&fit=crop"
                  alt="Cute cat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs">
                  <p className="font-semibold">Luna</p>
                  <p className="opacity-90">Persian Cat</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative h-32 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=200&fit=crop"
                  alt="Happy puppy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs">
                  <p className="font-semibold">Max</p>
                  <p className="opacity-90">Beagle Mix</p>
                </div>
              </motion.div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">500+</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Pets Adopted</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary-600">98%</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Success Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
