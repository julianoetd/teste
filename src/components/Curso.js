import React, {useState} from 'react';
import EditCourse from '../modals/EditCourse'
import "./curso.css";


const Curso = ({courseObj, index, deleteCourse, updateListArray}) => {
    const [modal, setModal] = useState(false);

  

    const toggle = () => {
        setModal(!modal);
    }

    const updateCourse = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteCourse(index)
    }

    return (
        <>  <div  >
            <div className="bgRed">
                <div className="logoCurso">
                </div>
                <div className='content'>
                <div className='enableDisable'>DESABILITADO</div>
                    <div className='courseName'>{courseObj.courseName}
                    </div>                             

                    <div className='courseDescription'>{courseObj.description}
                    </div> 
                    
                        <div className='rightBox'>
                            <button className='btnEdit'  onClick = {() => setModal(true)}></button>
                            <button className='btnDelete' onClick = {handleDelete}></button>
                        </div> 
                </div>
                        
                  
                <div>
                    <EditCourse modal = {modal} toggle = {toggle} updateCourse = {updateCourse} courseObj = {courseObj}/>
                </div>
                    
            </div>       
            </div>
        </>
    );
};

export default Curso;

