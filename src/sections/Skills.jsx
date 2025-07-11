import React from 'react'
import CircularGallery from '../blocks/Components/CircularGallery/CircularGallery'
import GradientText from '../blocks/TextAnimations/GradientText/GradientText'
import '../stylesheets/Skills.css'
const Skills = () => {
     const items = [
    { image: '/images/c.png', text: 'C Language' },
    { image: '/images/cpp.png', text: 'C++' },
    { image: '/images/cv2.png', text: 'OpenCV' },
    { image: '/images/ejs.png', text: 'EJS' },
    { image: '/images/firebase.png', text: 'Firebase' },
    { image: '/images/flask.webp', text: 'Flask' },
    { image: '/images/git.png', text: 'Git' },
    { image: '/images/github.png', text: 'GitHub' },
    { image: '/images/hf.svg', text: 'HuggingFace' },
    { image: '/images/java.png', text: 'Java' },
    { image: '/images/mysql.jpg', text: 'MySQL' },
    { image: '/images/python.png', text: 'Python' },
    { image: '/images/sklearn.png', text: 'Sklearn' },
    { image: '/images/tf.png', text: 'TensorFlow' },
               { image: '/images/react.png', text: 'React Js' },
     { image: '/images/mongodb.png', text: 'Mongodb' },
  ]
  return (
    <div>
        <div className="heading">
        <GradientText children="Skills"/>
        </div>
        <div className="w-full h-[100vh]">
      <CircularGallery
        items={items}
        bend={20}
        textColor="#ffffff"
        borderRadius={0.05}
        font="bold 24px Inter"

      />
    </div>
    </div>
  )
}

export default Skills
