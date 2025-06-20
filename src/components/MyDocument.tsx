import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

type MyDocumentProps = {
  name: string;
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default function MyDocument({ name }: MyDocumentProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Olá, {name}!</Text>
        <Text>Este é um PDF gerado com React PDF.</Text>
      </Page>
    </Document>
  );
}
