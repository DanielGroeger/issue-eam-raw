import Route from '@ember/routing/route';
import Company from 'emer-test-js315/models/company';

export default class TestRoute extends Route {
  model() {
    return {
      company: new Company()
    };
  }
}
