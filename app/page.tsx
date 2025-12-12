'use client';

import dynamic from 'next/dynamic';

const AdSlotDemo = dynamic(() => import('./components/AdSlotDemo'), {
  ssr: false,
});

export default function Home() {
  return <AdSlotDemo />;
}
