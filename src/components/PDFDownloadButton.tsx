'use client';

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '@/components/MyDocument';

type Props = {
  name: string;
};

const PDFDownloadButton: React.FC<Props> = ({ name }) => {
  return (
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
  );
};

export default PDFDownloadButton;
