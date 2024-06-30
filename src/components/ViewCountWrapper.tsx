// components/ViewCountWrapper.tsx
"use client";

import dynamic from 'next/dynamic';

const ViewCount = dynamic(() => import('./ViewCount'), { ssr: false });

const ViewCountWrapper = () => <ViewCount />;

export default ViewCountWrapper;