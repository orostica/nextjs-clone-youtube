import React from 'react';
import { Button } from '@material-ui/core';

// Configuracao do caminho absoluto do next
import Layout from 'src/components/Layout';

export default function Home() {
  // Teste de commit gitkraken
  return (
    <Layout title="YouTube">
      Clone youtube com Next.js + Material UI
      <Button color="secondary" variant="outlined">
        Youtube
      </Button>
      ;
    </Layout>
  );
}
