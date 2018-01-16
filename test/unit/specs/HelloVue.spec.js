import HelloWorld from '@/components/HelloWorld';
import { mount } from 'vue-test-utils';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.vm.$el.querySelector('.hello h1').textContent).toEqual(
      'Welcome to Your Vue.js App',
    );
  });
});
