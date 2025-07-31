import '@testing-library/jest-dom'

// Mock MDX files
jest.mock('*.mdx', () => {
  return function MockedMDXComponent(props) {
    return <div data-testid="mocked-mdx" {...props} />
  }
})

// Mock Next.js image component
jest.mock('next/image', () => {
  return function MockedImage(props) {
    return <img {...props} />
  }
})

// Add custom matchers for content validation
expect.extend({
  toContainEventWithDate(received, eventName, eventDate) {
    const eventPattern = new RegExp(`<strong>${eventName}[^<]*<span[^>]*>\\(${eventDate}\\)</span></strong>`, 'i')
    const pass = eventPattern.test(received)
    
    if (pass) {
      return {
        message: () => `expected content not to contain event "${eventName}" with date "${eventDate}"`,
        pass: true,
      }
    } else {
      return {
        message: () => `expected content to contain event "${eventName}" with date "${eventDate}"`,
        pass: false,
      }
    }
  },
})