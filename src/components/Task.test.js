// require {Task} from './Task.tsx';
const Task = require('./Task.tsx');
describe('',()=>{
  //Arrage
  test('test', ()=>{
    render(Task);

    // Act

    // Assert
    const task1= screen.getByText('hhelo');
    expect(task1).toBeInTheDocument(); 
  })

})