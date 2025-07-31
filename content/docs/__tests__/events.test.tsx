/**
 * Comprehensive test suite for the Openverse Events 2025-26 MDX file
 * Testing Framework: Jest with React Testing Library
 * 
 * This test suite validates:
 * - Content structure and hierarchy
 * - Event data completeness and accuracy
 * - MDX component usage and accessibility
 * - Timeline coverage and chronological order
 * - Educational content quality
 */

import { readFileSync } from 'fs'
import { join } from 'path'

// Mock MDX content for testing
const eventsContent = readFileSync(join(process.cwd(), 'content/docs/events.mdx'), 'utf-8')

describe('Events MDX Content Structure', () => {
  test('contains required frontmatter metadata', () => {
    expect(eventsContent).toMatch(/^---\s*$/)
    expect(eventsContent).toMatch(/title:\s*Openverse Events 2025-26/)
    expect(eventsContent).toMatch(/description:\s*Explore the intent and benefits/)
    expect(eventsContent).toMatch(/^---\s*$/m)
  })

  test('has proper heading hierarchy', () => {
    expect(eventsContent).toMatch(/^# Openverse Events: Learn, Build, and Belong$/m)
    expect(eventsContent).toMatch(/^## Why the delayed start\?$/m)
    expect(eventsContent).toMatch(/^## Why Attend\?$/m)
    expect(eventsContent).toMatch(/^## What You'll Gain$/m)
  })

  test('includes required MDX components', () => {
    expect(eventsContent).toMatch(/<Callout type="info">/)
    expect(eventsContent).toMatch(/<Callout type="success">/)
    expect(eventsContent).toMatch(/<Steps>/)
    expect(eventsContent).toMatch(/<Step>/)
    expect(eventsContent).toMatch(/<Cards>/)
    expect(eventsContent).toMatch(/<Card/)
  })
})

describe('Event Content Validation', () => {
  test('explains delayed start rationale comprehensively', () => {
    expect(eventsContent).toMatch(/mandatory Fresher Quarantine period/)
    expect(eventsContent).toMatch(/anti-ragging measures/)
    expect(eventsContent).toMatch(/first-year students space to settle in/)
    expect(eventsContent).toMatch(/prepping our internal workflows/)
    expect(eventsContent).toMatch(/setting up bots/)
    expect(eventsContent).toMatch(/polishing documentation/)
  })

  test('includes comprehensive event purpose statement', () => {
    const purposeCallout = eventsContent.match(/<Callout type="info">([\s\S]*?)<\/Callout>/)[1]
    expect(purposeCallout).toMatch(/spark curiosity, build real skills/)
    expect(purposeCallout).toMatch(/find your place in open source/)
    expect(purposeCallout).toMatch(/coder, designer, or just curious/)
  })

  test('provides clear call-to-action', () => {
    const ctaCallout = eventsContent.match(/<Callout type="success">([\s\S]*?)<\/Callout>/)[1]
    expect(ctaCallout).toMatch(/Ready to join\? Just show up/)
    expect(ctaCallout).toMatch(/no gatekeeping, no pressure/)
    expect(ctaCallout).toMatch(/Every event is a new chance to learn and belong/)
  })
})

describe('Event Data Completeness', () => {
  const eventPattern = /<strong>([^<]+)<span[^>]*>\(([^)]+)\)<\/span><\/strong>/g
  const events = [...eventsContent.matchAll(eventPattern)]

  test('contains comprehensive event listing', () => {
    expect(events.length).toBeGreaterThan(20) // Should have many events
  })

  test('includes all flagship events', () => {
    const eventNames = events.map(match => match[1].trim())
    
    expect(eventNames).toContain('Riced to Meet You')
    expect(eventNames).toContain('Hello Bot')
    expect(eventNames).toContain('Freshers Induction')
    expect(eventNames).toContain('FOSSil Fuel')
    expect(eventNames).toContain('You cant jus copy paste')
    expect(eventNames).toContain('Its a Penguin and ctrl + O')
    expect(eventNames).toContain('Git good')
    expect(eventNames).toContain('Brick by Brick: Linux CLI 101')
    expect(eventNames).toContain('Patch party')
    expect(eventNames).toContain('Hacktoberfest')
    expect(eventNames).toContain('/dev')
    expect(eventNames).toContain('AT&T')
    expect(eventNames).toContain('Prompt')
    expect(eventNames).toContain('Center the div')
    expect(eventNames).toContain('Penguin Police')
    expect(eventNames).toContain('Mirrorcraft')
  })

  test('includes academic break periods', () => {
    const eventNames = events.map(match => match[1].trim())
    expect(eventNames).toContain('Midsems')
    expect(eventNames).toContain('Endsems')
  })

  test('covers full academic year timeline', () => {
    const eventDates = events.map(match => match[2])
    
    // August events
    expect(eventDates.some(date => date.includes('Aug 16'))).toBe(true)
    expect(eventDates.some(date => date.includes('Aug 24'))).toBe(true)
    
    // September events
    expect(eventDates.some(date => date.includes('Sept 19'))).toBe(true)
    expect(eventDates.some(date => date.includes('Sept 29'))).toBe(true)
    
    // October events
    expect(eventDates.some(date => date.includes('Oct 3'))).toBe(true)
    expect(eventDates.some(date => date.includes('Oct 1–31'))).toBe(true)
    
    // November events
    expect(eventDates.some(date => date.includes('Nov 1'))).toBe(true)
    expect(eventDates.some(date => date.includes('Nov 14–19'))).toBe(true)
    
    // December/January events
    expect(eventDates.some(date => date.includes('Dec 1 – Jan 31'))).toBe(true)
    
    // February/March events
    expect(eventDates.some(date => date.includes('Feb 10–23'))).toBe(true)
    expect(eventDates.some(date => date.includes('Mar 20–22'))).toBe(true)
    
    // April events
    expect(eventDates.some(date => date.includes('Apr 4'))).toBe(true)
    expect(eventDates.some(date => date.includes('Apr 14–30'))).toBe(true)
  })
})

describe('Educational Content Quality', () => {
  test('covers fundamental technical skills', () => {
    expect(eventsContent).toMatch(/Linux installation party/)
    expect(eventsContent).toMatch(/Bash scripting \+ Linux basics/)
    expect(eventsContent).toMatch(/command-line literacy for everyone/)
    expect(eventsContent).toMatch(/Hands-on Git and version control/)
    expect(eventsContent).toMatch(/Opening the gateway to collaborations/)
  })

  test('includes advanced technical topics', () => {
    expect(eventsContent).toMatch(/Developer tooling and productivity workshop/)
    expect(eventsContent).toMatch(/from editors to build pipelines/)
    expect(eventsContent).toMatch(/secure practices in open source/)
    expect(eventsContent).toMatch(/commit hygiene, secrets, permissions/)
  })

  test('covers creative and emerging technologies', () => {
    expect(eventsContent).toMatch(/AI creative showdown/)
    expect(eventsContent).toMatch(/karaoke with Whisper, image gen with prompts/)
    expect(eventsContent).toMatch(/Arduino crash course/)
    expect(eventsContent).toMatch(/hands-on hardware intro through fun projects/)
    expect(eventsContent).toMatch(/tech-poetry/)
  })

  test('emphasizes open source contribution', () => {
    expect(eventsContent).toMatch(/Guided bug hunting\/fixing in open source repos/)
    expect(eventsContent).toMatch(/First-time contributor focused/)
    expect(eventsContent).toMatch(/Track and support participant PRs/)
    expect(eventsContent).toMatch(/documentation changes to open source repositories/)
    expect(eventsContent).toMatch(/open source clone of a popular tool\/app/)
  })

  test('promotes community building', () => {
    expect(eventsContent).toMatch(/community-maintained bots/)
    expect(eventsContent).toMatch(/community-maintained street view website/)
    expect(eventsContent).toMatch(/Cake cutting, FOSS music, and FOSS activities/)
    expect(eventsContent).toMatch(/onboard contributors to bot development/)
  })
})

describe('Why Attend Section Structure', () => {
  test('contains comprehensive benefits in Steps format', () => {
    const stepsSection = eventsContent.match(/<Steps>([\s\S]*?)<\/Steps>/)[1]
    
    expect(stepsSection).toMatch(/<Step>Meet like-minded peers and mentors<\/Step>/)
    expect(stepsSection).toMatch(/<Step>Get hands-on with real tools and code<\/Step>/)
    expect(stepsSection).toMatch(/<Step>Build a portfolio with actual contributions<\/Step>/)
    expect(stepsSection).toMatch(/<Step>Learn by doing, not just watching<\/Step>/)
    expect(stepsSection).toMatch(/<Step>Find your open source niche — code, docs, design, or community<\/Step>/)
  })

  test('steps are properly ordered and logical', () => {
    const stepsSection = eventsContent.match(/<Steps>([\s\S]*?)<\/Steps>/)[1]
    const stepOrder = stepsSection.match(/<Step>([^<]+)<\/Step>/g)
    
    expect(stepOrder).toHaveLength(5)
    expect(stepOrder[0]).toMatch(/Meet like-minded peers/)
    expect(stepOrder[4]).toMatch(/Find your open source niche/)
  })
})

describe('What You\'ll Gain Section Structure', () => {
  test('contains all benefit cards with proper structure', () => {
    const cardsSection = eventsContent.match(/<Cards>([\s\S]*?)<\/Cards>/)[1]
    
    expect(cardsSection).toMatch(/title="Real-World Experience"/)
    expect(cardsSection).toMatch(/description="Work on actual projects, not just theory\."/)
    
    expect(cardsSection).toMatch(/title="Peer Support"/)
    expect(cardsSection).toMatch(/description="Collaborate and learn in a friendly, inclusive space\."/)
    
    expect(cardsSection).toMatch(/title="Mentorship"/)
    expect(cardsSection).toMatch(/description="Guidance from seniors and alumni who've been there\."/)
    
    expect(cardsSection).toMatch(/title="Recognition"/)
    expect(cardsSection).toMatch(/description="Showcase your work and get noticed in the community\."/)
    
    expect(cardsSection).toMatch(/title="Fun & Creativity"/)
    expect(cardsSection).toMatch(/description="From tech-poetry to open-source games, there's always a twist!"/)
  })

  test('card content is comprehensive and compelling', () => {
    const cardsSection = eventsContent.match(/<Cards>([\s\S]*?)<\/Cards>/)[1]
    const cardCount = (cardsSection.match(/<Card/g) || []).length
    
    expect(cardCount).toBe(5) // Should have exactly 5 benefit cards
  })
})

describe('Event Grid Styling and Structure', () => {
  test('uses proper CSS Grid layout', () => {
    expect(eventsContent).toMatch(/display: 'grid'/)
    expect(eventsContent).toMatch(/gridTemplateColumns: 'repeat\(auto-fit, minmax\(320px, 1fr\)\)'/)
    expect(eventsContent).toMatch(/gap: '1\.5rem'/)
    expect(eventsContent).toMatch(/marginBottom: '2\.5rem'/)
  })

  test('applies consistent card styling', () => {
    expect(eventsContent).toMatch(/border: '1px solid #30363d'/)
    expect(eventsContent).toMatch(/borderRadius: '0\.75rem'/)
    expect(eventsContent).toMatch(/padding: '1\.25rem'/)
    expect(eventsContent).toMatch(/background: '#161b22'/)
  })

  test('uses consistent date highlighting', () => {
    const dateSpans = eventsContent.match(/<span style=\{\{color:'#58a6ff'\}\}>/g)
    expect(dateSpans).toBeDefined()
    expect(dateSpans.length).toBeGreaterThan(20) // Should have many date highlights
  })
})

describe('Content Accessibility and SEO', () => {
  test('has proper meta title and description', () => {
    expect(eventsContent).toMatch(/title: Openverse Events 2025-26/)
    expect(eventsContent).toMatch(/description: Explore the intent and benefits of every Openverse event, from Linux ricing to hackathons and creative AI jams\./)
  })

  test('uses semantic HTML structure', () => {
    expect(eventsContent).toMatch(/^# /m) // H1 heading
    expect(eventsContent).toMatch(/^## /m) // H2 headings
    expect(eventsContent).toMatch(/<strong>/) // Emphasis elements
  })

  test('includes descriptive content for assistive technologies', () => {
    expect(eventsContent).toMatch(/whether you're a coder, designer, or just curious/)
    expect(eventsContent).toMatch(/spark curiosity, build real skills/)
    expect(eventsContent).toMatch(/friendly, inclusive space/)
  })
})

describe('Event Descriptions Quality', () => {
  test('provides clear value propositions for each event', () => {
    expect(eventsContent).toMatch(/Showcase custom Linux setups \(ricing\) to spark curiosity/)
    expect(eventsContent).toMatch(/Launch community-maintained bots and onboard contributors/)
    expect(eventsContent).toMatch(/Introduce freshers to Openverse's vibe, structure/)
    expect(eventsContent).toMatch(/Talks on how open source powers real-world infrastructure/)
    expect(eventsContent).toMatch(/Understand open-source licenses through real-world case studies/)
  })

  test('includes engaging and creative event descriptions', () => {
    expect(eventsContent).toMatch(/break the fear of web dev/)
    expect(eventsContent).toMatch(/First-time contributor focused/)
    expect(eventsContent).toMatch(/Reflective and fun roast of summer projects/)
    expect(eventsContent).toMatch(/Multiplayer OSS Skribbl clone/)
    expect(eventsContent).toMatch(/Replace proprietary software with FOSS alternatives/)
  })

  test('covers diverse skill levels and interests', () => {
    expect(eventsContent).toMatch(/command-line literacy for everyone/)
    expect(eventsContent).toMatch(/First-time contributor focused/)
    expect(eventsContent).toMatch(/hands-on hardware intro through fun projects/)
    expect(eventsContent).toMatch(/3-day hackathon event for hacking and innovation/)
  })
})

describe('Edge Cases and Error Handling', () => {
  test('handles special characters in event names correctly', () => {
    expect(eventsContent).toMatch(/You cant jus copy paste/)
    expect(eventsContent).toMatch(/Its a Penguin and ctrl \+ O/)
    expect(eventsContent).toMatch(/AT&T/)
    expect(eventsContent).toMatch(/\/dev/)
  })

  test('maintains readability with long event names', () => {
    expect(eventsContent).toMatch(/Skribbl but opensourced championship/)
    expect(eventsContent).toMatch(/Campus Photowalk & Website Collab/)
    expect(eventsContent).toMatch(/Summer Project Roast \+ Poems!/)
    expect(eventsContent).toMatch(/12 angry hackers/)
  })

  test('handles date range formatting consistently', () => {
    expect(eventsContent).toMatch(/Oct 1–31/)
    expect(eventsContent).toMatch(/Dec 1 – Jan 31/)
    expect(eventsContent).toMatch(/Feb 10–23/)
    expect(eventsContent).toMatch(/Sept 22–27/)
  })
})

describe('Content Completeness and Coherence', () => {
  test('provides comprehensive event calendar coverage', () => {
    const monthsPattern = /Aug|Sept|Oct|Nov|Dec|Jan|Feb|Mar|Apr/g
    const monthMatches = eventsContent.match(monthsPattern)
    
    expect(monthMatches).toBeDefined()
    expect(monthMatches.length).toBeGreaterThan(30) // Should cover full academic year
  })

  test('balances technical and non-technical events', () => {
    // Technical events
    expect(eventsContent).toMatch(/Linux CLI/)
    expect(eventsContent).toMatch(/Git good/)
    expect(eventsContent).toMatch(/Arduino/)
    expect(eventsContent).toMatch(/HTML\/CSS/)
    
    // Non-technical/creative events
    expect(eventsContent).toMatch(/Photowalk/)
    expect(eventsContent).toMatch(/poetry/)
    expect(eventsContent).toMatch(/creative showdown/)
    expect(eventsContent).toMatch(/FOSS Party/)
  })

  test('maintains consistent tone and style', () => {
    expect(eventsContent).toMatch(/spark curiosity/)
    expect(eventsContent).toMatch(/hands-on/)
    expect(eventsContent).toMatch(/real-world/)
    expect(eventsContent).toMatch(/community/)
    expect(eventsContent).toMatch(/open source/)
  })
})