<template>
  <Layout>
    <Nav slot="head"></Nav>
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from './Layout';
import Nav from './Nav';

export default {
  name: 'Main',
  components: {
    Layout,
    Nav,
  },
};
</script>
