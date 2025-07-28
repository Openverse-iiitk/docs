import Link from 'next/link';
import Image from 'next/image';
import { GridBackground } from '@/components/ui/grid-background';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { source } from '@/lib/source';

export default function HomePage() {
  // Get all docs for the cards
  const docs = source.getPages().map(page => ({
    title: page.data.title,
    description: page.data.description || 'No description available',
    href: page.url,
  }));

  // Transform docs for InfiniteMovingCards (quotes format)
  const docQuotes = docs.map((doc, index) => ({
    quote: doc.description,
    name: doc.title,
    title: "Documentation",
    id: `${doc.href}-${index}`, // Add unique identifier
  }));

  return (
    <main className="flex flex-col">
      {/* Hero Section with Grid Background */}
      <section className="min-h-screen">
        <GridBackground className="min-h-screen">
          <div className="flex flex-col items-center justify-center px-4 py-20">
            {/* Logo */}
            <div className="mb-8">
              <Image 
                src="https://i.postimg.cc/NMR8pwr2/ov.png" 
                alt="Openverse Logo" 
                width={120} 
                height={120}
                className="rounded-lg shadow-lg"
              />
            </div>
            
            {/* Main Heading */}
            <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-6xl font-bold text-transparent sm:text-8xl md:text-9xl">
              openverse
            </h1>
            
            {/* Subtitle */}
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl text-center">
              The opensource club of IIIT Kottayam - Documentation and resources
            </p>
            
            {/* CTA Button */}
            <Link
              href="/docs"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Documentation
            </Link>
            
            {/* Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <svg 
                className="w-6 h-6 text-muted-foreground" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        </GridBackground>
      </section>

      {/* Documentation Cards Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Documentation</h2>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive guides and resources
            </p>
          </div>
          
          {/* Infinite Moving Cards */}
          <InfiniteMovingCards
            items={docQuotes}
            direction="right"
            speed="slow"
            className="mb-8"
          />
          
          {/* Static Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {docs.map((doc, index) => (
              <Link 
                key={`${doc.href}-${index}`}
                href={doc.href}
                className="group block p-6 border border-border rounded-lg hover:border-primary/50 transition-colors bg-card hover:bg-accent/50"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {doc.title}
                </h3>
                <p className="text-muted-foreground">
                  {doc.description}
                </p>
                <div className="mt-4 flex items-center text-sm text-primary">
                  Read more 
                  <svg 
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Openverse</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Openverse is the opensource club of IIIT Kottayam. This documentation 
            provides comprehensive guides, resources, and project information for our 
            club members and the broader open source community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/Openverse-iiitk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
