import React from 'react';
import TodoContext from './../../context/TodoContext';
import List from './list';

const Todo = () => {



    return (
        <TodoContext.Consumer>
           {
               context => (
                    <div className='container'>
                       <table className='table table-condensed'>
                           <thead>
                               <tr>
                                   <th className='col-6'>
                                       <h5>Todo</h5>
                                   </th>
                                   <th className='col-6'>
                                       <h5>Actions</h5>
                                   </th>
                               </tr>
                           </thead>
                           <tbody >
                                {
                                   context.todoListItems ? context.todoListItems.map((item, index) => {
                                       return <List
                                                list={item}
                                                key={item.id}
                                                index={index}
                                                editItem={context.editItem}
                                                toggleEdit={context.toggleEdit}></List>
                                    })
                                    :
                                    <tr className='list-unstyled'>
                                        <p className='text-center'>No item on todo list!</p>
                                    </tr>
                                }
                           </tbody>
                       </table>
                   </div>
               )
           }
        </TodoContext.Consumer>
    )
}

export default Todo;