
import FormBuilder from '@/components/formbuilder';
import Head from 'next/head';


export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Form Builder</title>
        <meta name="description" content="A drag-and-drop form builder using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold mb-8">Form Builder</h1>
        <FormBuilder />
      </main>
    </div>
  );
}