import React from 'react';
import { Button } from '@material-ui/core';

import Layout from '../components/Layout';

export default function Home() {
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
