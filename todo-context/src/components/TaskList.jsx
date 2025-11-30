import React, { useState } from 'react'
import { Edit2, Trash2 } from 'lucide-react'
import AddTask from './AddTask'
import useTask from '../context/Taskcontext'


function TaskList() {

    const [editingID, seteditingID] = useState(null)
    const [newText, setNewText] = useState()

    let { tasks, deleteTask, completeTask,editTask } = useTask()
    // let {deleteTask} = useTask()

    // const handleDelete =(e)=>{
    //     deleteTask(e.target.id)
    // }

    let handleEdit = (id, text) => {
        seteditingID(id)
        setNewText(text)
    }


    return (
        <div className="container">
            <h2 className="heading">📝 Task Manager</h2>


            {tasks.map((obj, index) => {
                return <div key={index} className="task">
                    <input type="checkbox" className="completed" onChange={() => completeTask(obj.id)} />


                    {editingID === obj.id ? (
                        <input
                            className="edit-input"   // <- alag class for styling
                            value={newText}
                            onChange={e => setNewText(e.target.value)}
                        />
                    ) : (
                        <p className={obj.complete ? 'checked' : null}>{obj.task}</p>
                    )}





                    <div className="actions">
                        {
                            editingID === obj.id ? <button className="editting" onClick={()=>{
                                editTask(obj.id,newText)
                                seteditingID(null)
                                  } }>✓
                            </button> :
                                <button className="edit" onClick={() => handleEdit(obj.id, obj.task)}>
                                    <Edit2 size={16} />
                                </button>
                        }
                        <button onClick={() => deleteTask(obj.id)} className="delete" id={obj.id}>
                            <Trash2 size={16} />
                        </button>
                    </div>
                </div>

            })}
        </div>
    )
}

export default TaskList
