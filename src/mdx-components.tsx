import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Checklist } from '@/components/ui/checklist';
import { Steps, Step } from '@/components/ui/steps';
import { Tabs, Tab } from '@/components/ui/tabs';
import { Timeline, TimelineItem } from '@/components/ui/timeline';
import { Quote } from '@/components/ui/quote';
import { Feature } from '@/components/ui/feature';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Checklist,
    Steps,
    Step,
    Tabs,
    Tab,
    Timeline,
    TimelineItem,
    Quote,
    Feature,
    ...components,
  };
}
