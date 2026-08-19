import { useState } from 'react';
import { PROJECTS } from '../data/projects';

export default function Graphics() {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const filteredItems = selectedFilter === 'all'
        ? PROJECTS
        : PROJECTS.filter((item) => item.publication === selectedFilter);

    return (
        <section className="space-y-10">
            {/* Publication Sub-navigation Filter */}
            <div className="flex flex-wrap gap-4 text-base text-neutral-600">
                <button
                    onClick={() => setSelectedFilter('all')}
                    className={`cursor-pointer hover:text-black transition-colors ${selectedFilter === 'all' ? 'font-semibold text-black underline underline-offset-4' : ''
                        }`}
                >
                    all
                </button>
                <button
                    onClick={() => setSelectedFilter('wapo')}
                    className={`cursor-pointer hover:text-black transition-colors ${selectedFilter === 'wapo' ? 'font-semibold text-black underline underline-offset-4' : ''
                        }`}
                >
                    the washington post
                </button>
                <button
                    onClick={() => setSelectedFilter('spectator')}
                    className={`cursor-pointer hover:text-black transition-colors ${selectedFilter === 'spectator' ? 'font-semibold text-black underline underline-offset-4' : ''
                        }`}
                >
                    columbia daily spectator
                </button>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredItems.map((graphic) => (
                    <a
                        key={graphic.id}
                        href={graphic.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col group cursor-pointer"
                    >
                        {/* Image Container with No Padding and overflow-hidden */}
                        <div className="w-full h-64 bg-neutral-100 border border-neutral-200 rounded-lg overflow-hidden flex items-center justify-center">
                            <img
                                src={graphic.image}
                                alt={graphic.title}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden h-full w-full items-center justify-center text-sm text-neutral-400 text-center px-4">
                                [{graphic.title}]
                            </div>
                        </div>

                        {/* Headline */}
                        <h3 className="text-sm text-neutral-900 mt-3 leading-snug group-hover:underline group-hover:text-neutral-600 transition-colors">
                            {graphic.title} ↗
                        </h3>
                    </a>
                ))}

                {filteredItems.length === 0 && (
                    <div className="col-span-full text-center py-16 text-neutral-400 text-sm">
                        No graphics found for this selection.
                    </div>
                )}
            </div>
        </section>
    );
}