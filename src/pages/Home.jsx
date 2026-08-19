import { PROJECTS } from '../data/projects';

// not used
const EXTRA_ITEMS = [
    {
        id: 'bunny',
        title: 'Bunny keychain',
        image: 'public/images/bunny.png',
        url: null, // No article link, displays as an image card
        order: 1,  // Custom placement in the masonry layout
    },
    {
        id: 'rocky',
        title: 'My dog Rocky',
        image: 'public/images/rocky.png',
        url: null,
        order: 4,
    },
];

export default function Home() {
    // 2. Extract featured projects from projects.js
    const featuredProjects = PROJECTS.filter((p) => p.featured);

    // 3. Combine both lists and sort by your preferred order
    const allCollageItems = [...featuredProjects, ...EXTRA_ITEMS].sort(
        (a, b) => (a.order || 99) - (b.order || 99)
    );
    return (
        <section className="space-y-8 animate-fadeIn">

            <div className="columns-1 sm:columns-2 gap-6 space-y-6">
                {featuredProjects.map((project) => (
                    <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-inside-avoid block rounded-md hover:scale-[1.02] transition-all duration-200 group"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-contain rounded-lg"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextSibling.style.display = 'flex';
                            }}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}