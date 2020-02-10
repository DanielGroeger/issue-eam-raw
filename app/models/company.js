import { filterBy, findBy } from 'ember-awesome-macros/array';
import { raw } from 'ember-awesome-macros';
import Person from 'emer-test-js315/models/person';

export default class Company {

  attributeToFilterBy = 'age';
  attributeToFindBy = 'firstname';

  employees = [
    new Person("Mike", "Smith", 21),
    new Person("Marie", "Claire", 50),
    new Person("Albert", "Einstein", 47),
    new Person("Edgar", "Miller", 33),
    new Person("Simon", "Baker", 50)
  ];


  @filterBy('employees', 'attributeToFilterBy', 50)
  filteredEmployees;

  @filterBy('employees', raw('age'), 50)
  filteredEmployeesRaw;

  @findBy('employees', 'attributeToFindBy', raw('Marie'))
  foundEmployee;

  @findBy('employees', raw('firstname'), raw('Marie'))
  foundEmployeeRaw;
}
