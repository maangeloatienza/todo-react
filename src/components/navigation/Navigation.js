import React, {useState} from 'react';
import TodoContext from './../../context/TodoContext';

import {Link} from 'react-router-dom';

const Navigation = () => {

    const [todoItem,setTodoItem] = useState('');

    return (
        <TodoContext.Consumer>
            {
                context => (
                    <nav className="navbar navbar-default sticky-top flex-md-nowrap p-0">
                        <Link to={'/'} className="navbar-brand col-sm-3 col-md-2 mr-0 text-white font-weight-bolder" >Todo App</Link>
                        <ul className="navbar-nav py-2">
                            <li className="nav-item text-nowrap">

                                <div className="input-group mb-3">

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Add todo item"
                                        value={todoItem}
                                        onChange={(e)=>{
                                            setTodoItem(e.target.value);
                                        }}
                                        />
                                    <div className="input-group-prepend">
                                        <button
                                            className="btn btn-sm btn-warning text-white font-weight-bolder"
                                            onClick={()=>{
                                                context.addItem(todoItem);
                                                setTodoItem('');
                                            }}>ADD</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </TodoContext.Consumer>
    )

}

export default Navigation;