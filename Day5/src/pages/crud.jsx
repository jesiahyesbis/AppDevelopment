import React, { useRef, useState } from 'react'
import '../assets/css/crud.css'

function CRUD() {
    const list = [
        {
            id: 1, 
            name: "Mike",
            dept:"TV",
            pat: "5"
            
        },
        {
            id: 2, 
            name: "Jemi",
            dept:"AC",
            pat: "7"
           
        },
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
        <div className='crud'>
            <div>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
            <table>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.dept}</td>
                            <td>{current.pat}</td>
                            <td>
                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const dept = event.target.elements.dept.value
        const pat = event.target.elements.pat.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, dept: dept, pat:pat} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, name :value} : li
        ))

        setList(newlist)
    }
    function handInputdept(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, dept :value} : li
        ))

        setList(newlist)
    }
    function handInputpat(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, pat :value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>
            <td><input type="text" onChange={handInputname} name='name' value={current.name}/></td>
            <td><input type="text" onChange={handInputdept} name='dept' value={current.dept}/></td>
            <td><input type="text" onChange={handInputpat} name='pat' value={current.pat}/></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

function AddList({setList}) {
    const nameRef = useRef()
    const deptRef = useRef()
    const patRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const dept = event.target.elements.dept.value;
        const pat = event.target.elements.pat.value;
        const newlist = {
            id: 3,
            name,
            dept,
            pat
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        deptRef.current.value = ""
        patRef.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter User Name" ref={nameRef}/>
            <input type="text" name="dept" placeholder="Product Name" ref={deptRef}/>
            <input type="text" name="pat" placeholder="No of Days" ref={patRef}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default CRUD;