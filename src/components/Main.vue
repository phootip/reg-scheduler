<template>
  <Layout>
    <Nav slot="head"></Nav>
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from './layout';
import Nav from './nav';

export default {
  name: 'Main',
  components: {
    Layout,
    Nav,
  },
};
</script>
