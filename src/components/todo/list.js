import React, { useState, Fragment } from 'react';

const List = ({ list, index, editItem, toggleEdit}) => {

    const [item,setItem] = useState('');

    return (
        <Fragment>
            <tr >
                <td>
                    
                    <input
                        className={` ${list.edit ? '' : 'd-none'}`}
                        type='text'
                        value={item}
                        onChange={(e) => {
                            setItem(e.target.value)
                        }}
                        placeholder='Todo item' />

                    <p className={`text-white font-weight-bolder ${list.edit ? 'd-none' : ''}`}>{list.name}</p>
                </td>

                <td >
                    <div className='btn-group '>

                        <button
                            type='button'
                            className={`btn btn-sm font-weight-bolder ${list.done ? 'btn-disabled ' : 'btn-init'} text-white mx-1`}
                            disabled={list.done}
                            onClick={
                                (e) => {
                                    toggleEdit(index, {
                                        ...list, done: !list.done
                                    })
                                }}
                        >Done</button>

                        {/* edit false */}
                        <button
                            type='button'
                            className={`btn btn-sm font-weight-bolder text-white mx-1
                                        ${list.done ? 'btn-disabled ' : 'btn-init'}
                                        ${list.edit ? 'd-none' : ''}`}
                            disabled={list.done}
                            onClick={
                                (e) => {
                                    toggleEdit(index, {
                                        ...list, edit: !list.edit
                                    })
                                }
                            }>Edit</button>

                        {/* edit true */}

                        <button
                            type='button'
                            className={`btn btn-sm font-weight-bolder text-white mx-1
                                        ${list.done ? 'btn-disabled ' : 'btn-init'}
                                        ${list.edit ? '' : 'd-none'}`}
                            disabled={list.done}
                            onClick={
                                (e) => {
                                    toggleEdit(index, {
                                        ...list, edit: !list.edit, name: item
                                    })
                                }}>Save</button>

                        
                    </div>
                </td>

            </tr>

        </Fragment>
    )
}

export default List;