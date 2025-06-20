'use client';

import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

type Props = {
  name: string;
};

export default function PDFViewerWrapper({ name }: Props) {
  return (
    <PDFViewer style={{ flex: 1, border: 'none' }}>
      <MyDocument name={name} />
    </PDFViewer>
  );
}
