import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AllQuestion =  () => {
  const allQuestion =  useSelector((state) => state.question.allQuestion);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      later you can see the questions
      {allQuestion.length > 0 ? (
        <>
          <ul>
            {allQuestion.map((questions) => (
              <li key={questions._id}>
                {questions.question}
                <ul>
                  <li>{questions.optione1}</li>
                  <li>{questions.optione2}</li>
                  <li>{questions.optione3}</li>
                  <li>{questions.optione4}</li>
                </ul>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No questions available</p>
      )}
    </div>
  );
};

export default AllQuestion;
