import React, { useRef, useState } from 'react'
import '../assets/css/crud1.css'

function Crud1() {
    const list = [
        {
            id: 1, 
            name: "AC",
            Gen:"Booked",
            Date_vis : "12,000",
            Doc_id:"D102"
            
        },
        {
            id: 2, 
            name: "Refrigerator",
            Gen:"Available",
            Date_vis : "40,000",
            Doc_id:"D103"
            
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
                            <td>{current.Gen}</td>
                            <td>{current.Date_vis}</td>
                            <td>{current.Doc_id}</td>
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
        const Gen = event.target.elements.Gen.value
        const Date_vis = event.target.elements.Date_vis.value
        const Doc_id = event.target.elements.Doc_id.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, Gen: Gen, Date_vis:Date_vis, Doc_id:Doc_id} : li
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
    function handInputGen(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, Gen :value} : li
        ))

        setList(newlist)
    }
    function handInputDate(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, Date_vis :value} : li
        ))

        setList(newlist)
    }
    function handInputDoc(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, Doc_id :value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>
            <td><input type="text" onChange={handInputname} name='name' value={current.name}/></td>
            <td><input type="text" onChange={handInputGen} name='Gen' value={current.Gen}/></td>
            <td><input type="text" onChange={handInputDate} name='Date_vis' value={current.Date_vis}/></td>
            <td><input type="text" onChange={handInputDoc} name='Doc_id' value={current.Doc_id}/></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

function AddList({setList}) {
    const nameRef = useRef()
    const GenRef = useRef()
    const DateRef = useRef()
    const DocRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const Gen = event.target.elements.Gen.value;
        const Date_vis = event.target.elements.Date_vis.value;
        const Doc_id = event.target.elements.Doc_id.value;
        const newlist = {
            id: 3,
            name,
            Gen,
            Date_vis,
            Doc_id
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        GenRef.current.value = ""
        DateRef.current.value = ""
        DocRef.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Appliance name" ref={nameRef}/>
            <input type="text" name="dept" placeholder="Appliance status" ref={GenRef}/>
            <input type="text" name="pat" placeholder="Rent price" ref={DateRef}/>
            <input type="text" name="pat" placeholder="Enter Appli_id" ref={DocRef}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Crud1;