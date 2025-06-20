'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import MyDocument from '@/components/MyDocument';

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
      <div style={{ padding: 10, background: '#eee' }}>
        <input
          type="text"
          value={name}
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 8, fontSize: 16 }}
        />

        <PDFDownloadLink
          document={<MyDocument name={name} />}
          fileName="meu-pdf.pdf"
          style={{
            marginLeft: 20,
            textDecoration: 'none',
            padding: '8px 16px',
            backgroundColor: '#10a37f',
            color: 'white',
            borderRadius: 5,
          }}
        >
          {({ loading }) => (loading ? 'Gerando PDF...' : 'Baixar PDF')}
        </PDFDownloadLink>
      </div>

      <PDFViewerWrapper name={name} />
    </div>
  );
}
