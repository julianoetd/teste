import React, {useEffect, useState} from 'react';
import CreateCourse from '../modals/CreateCourse'
import Curso from './Curso';
import "./listaCursos.css";

const CourseList = () => {
    let ms = Math.floor(Date.now() * Math.random()).toString(36)

    const [modal, setModal] = useState(false);
    const [courseList, setCourseList] = useState([
        {index:ms, courseName: 'Svelte', description:'Um curso para introdução ao Svelte' },
        /* {index:ms, courseName: 'React JS',  description:'Um curso para introdução ao React JS' },
        {index:ms, courseName: 'Angular JS',  description:'Um curso para introdução ao Angular JS'} */
    ])
    
    useEffect(() => {
        let arr = localStorage.getItem("courseList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setCourseList(obj)
        }
    }, [])


    const deleteCourse = (index) => {
        let tempList = courseList
        tempList.splice(index, 1)
        localStorage.setItem("courseList", JSON.stringify(tempList))
        setCourseList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = courseList
        tempList[index] = obj
        localStorage.setItem("courseList", JSON.stringify(tempList))
        setCourseList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveCourse = (courseObj) => {
        let tempList = courseList
        tempList.push(courseObj)
        localStorage.setItem("courseList", JSON.stringify(tempList))
        setCourseList(courseList)
        setModal(false)
    }


    return (
        <>
            <div className="">
                <div className='container'>
                    <div className='title'>SEUS TREINAMENTOS</div>
                    <button className='btnAddTreinamento' onClick = {() => setModal(true)}>NOVO TREINAMENTO</button>
                
                </div>
                <ul>


                    <div className = "course-container">
                        {courseList && courseList.map((obj , index) => <Curso courseObj = {obj} index = {index} deleteCourse = {deleteCourse} updateListArray = {updateListArray}/> )}
                    </div>
                    <CreateCourse toggle = {toggle} modal = {modal} save = {saveCourse}/>
                   
                </ul>
                

            </div>

           
        </>
    );
};

export default CourseList;

