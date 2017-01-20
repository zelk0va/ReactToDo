var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI',()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });
  it('should exist',()=>{
      expect(TodoAPI).toExist();
  });

  describe('setTodos', ()=>{
    it('should set valid todos array', ()=>{
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array',()=>{
      var badTodos={a:'b'};

      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    })
  });

  describe('getTodos', ()=>{
    it('should return empty array for bad localStorage data', ()=>{
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });
  });
  describe('filterTodos',()=>{
    var todos = [{
      id:1,
      text: 'Sometext here',
      completed: true
    }, {
      id:2,
      text: 'Sometext here',
      completed: false
    },{
      id:3,
      text: 'Sometext here',
      completed: true
    }];

    it('should return all items if showcompleted is true', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return non-completed when showcompleted is false', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
  });
});
