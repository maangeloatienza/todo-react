import React,{useState} from 'react';
import Navigation from './../navigation/Navigation';
import Todo from './../todo/index';
import TodoContext from './../../context/TodoContext';

const Body = () => {
    const [todoListItems, setTodoListItems] = useState([
        {
            id: 1,
            name: 'Clean',
            done: false,
            edit: false
        },
        {
            id: 2,
            name: 'Wash',
            done: false,
            edit: false
        }
    ])

    const toggleEdit = (index,arg) => {
        console.log(index)
        const newTodos = [...todoListItems];
        newTodos[index] = arg;
        setTodoListItems(newTodos);
    }


    const addItem = (arg) => {

        setTodoListItems([
            ...todoListItems, 
            {
                id : todoListItems.length+1,
                name: arg,
                done: false,
                edit: false
            }
        
        ]);

    }

    const editItem = (arg) => {

        console.log(arg)

    }


    return (
        <div className='col-sm-10 col-md-6 col-lg-6 bg-body  mx-auto'>

            <TodoContext.Provider value={{
                todoListItems,
                addItem,
                editItem,
                toggleEdit
            }}>
                <Navigation />
                <Todo/>
            </TodoContext.Provider>

         </div >
    )
}

export default Body;