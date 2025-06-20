'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import MyDocument from '@/components/MyDocument';
import { Printer } from 'lucide-react';
// carregamento dinâmico do PDFDownloadLink
const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Carregando PDF...</p>,
  }
);

// carregamento dinâmico do PDFViewerWrapper (cliente)
const PDFViewerWrapper = dynamic(() => import('@/components/PDFViewerWrapper'), {
  ssr: false,
});


export default function Page() {
  const [name, setName] = useState<string>('Usuário');
 
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PDFDownloadLink
          document={<MyDocument name={name} />}
          fileName="meu-pdf.pdf"
          
        >
          {({ loading }) => (loading ? 'Gerando PDF...' : <Printer/>)}
        </PDFDownloadLink>

      <PDFViewerWrapper name={name} />
    </div>
  );
}
