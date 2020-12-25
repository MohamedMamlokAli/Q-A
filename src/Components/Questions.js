import React, { useState } from "react";
import { data } from "./data";
const QA = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const quests = data;
  return (
    <>
      <div className="container">
        <h3 className="half">Questions And Answers About Login</h3>
        <div>
          {quests.map((quest) => {
            const { id, question, answer } = quest;
            return (
              <article key={id} className="questionAndAnswer">
                <div className="mainquest">
                  <p className="question">{question}</p>
                  <button
                    className="round"
                    onClick={() => {
                      setIsAllowed(!isAllowed);
                    }}
                  >
                    {isAllowed ? "-" : "+"}
                  </button>
                </div>

                {isAllowed && <p>{answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QA;
