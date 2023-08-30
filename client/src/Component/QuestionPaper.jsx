
import React,{ useState} from 'react';

import "../CSS/QuestionPaper.css"

const QuestionPaper = ({updateQuestion}) => {

  const [selectedOptions,setselectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  

  const handleSubmit = () => {
      let newScore = 0;
      updateQuestion.forEach((q)=>{
        if (selectedOptions[q._id] && selectedOptions[q._id] === q.answer) {
          newScore += 1;
        }
      })
      setScore(newScore);
      setSubmitted(true);
  }

  
  const handleOptionClick = (questionId, selectedOption) => {

    setselectedOptions(prevSelectedoption => ({
      ...prevSelectedoption,
      [questionId] : selectedOption
    }))
  }

  return (
    <>
    
      { updateQuestion?.length > 0 ? updateQuestion.map((q,index) => {
         const selectedAnswer = selectedOptions[q._id];
        return (
          <div key={q._id} className='questionpaper'>
            <p>{index+1} .{q.question}</p>
            
            <ol>
              <li onClick={() => handleOptionClick(q._id, q.optione1)}
                className={selectedAnswer === q.optione1 ? 'selected' : ''}
              >{q.optione1}</li>

              <li onClick={() => handleOptionClick(q._id, q.optione2)}  
                className={selectedAnswer === q.optione2 ? 'selected' : ''}
              >{q.optione2}</li>

              <li onClick={() => handleOptionClick(q._id, q.optione3)}
                className={selectedAnswer === q.optione3 ? 'selected' : ''}
              >{q.optione3}</li>

              <li onClick={() => handleOptionClick(q._id, q.optione4)}
                className={selectedAnswer === q.optione4 ? 'selected' : ''}
              >{q.optione4}</li>

            </ol>
          </div>
        );
      }) : ''}
 
  <button style={{marginLeft:'40px'}} type='submit' onClick={handleSubmit} >
        Submit Answers
      </button>

      {submitted && <p style={{marginLeft:'40px'}} > your score is :  {score}</p>}
    </>
  )
}

export default QuestionPaper;
