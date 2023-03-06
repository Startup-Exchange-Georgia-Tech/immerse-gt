import "./FAQ.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [currSection, setCurrSection] = useState("");
  const [questionIndex, setQuestion] = useState("");
  const FAQs = [
    {
      name: "GENERAL",
      questions: [
        { question: "Test question 1", answer: "Test answer 1" },
        { question: "Test question 1", answer: "Test answer 1" },
      ],
    },
    {
      name: "GENERAL",
      questions: [
        { question: "Test question 1", answer: "Test answer 1" },
        {
          question: "Test question 1",
          answer:
            "Test answer 1 fajsidfjasdiofja osi asfoiasjdfoi ahsdf liahsfia dhsfouahsd fouahds foadhf uiha   djfhasidof hasidf haoiu",
        },
      ],
    },
    {
      name: "GENERAL",
      questions: [
        { question: "Test question 1", answer: "Test answer 1" },
        { question: "Test question 1", answer: "Test answer 1" },
      ],
    },
    {
      name: "GENERAL",
      questions: [
        { question: "Test question 1", answer: "Test answer 1" },
        { question: "Test question 1", answer: "Test answer 1" },
      ],
    },
  ];

  return (
    <div className="faq">
      <div className="faq-content">
        <h1 className="faq-heading">FAQs</h1>
        <div className="faq-body">
          Have questions? We're here to help.
          <br />
          <br />
          Feel free to reach out at hello@immersegt.io for additional questions.
        </div>
        <div className="faq-section-container">
          {FAQs.map((sec) => {
            return (
              <div className="faq-section">
                <div className="faq-section-heading">{sec.name}</div>
                <div>
                  <div className="faq-questions">
                    {sec.questions.map((question) => {
                      return (
                        <div
                          className="faq-question"
                          onClick={() => {
                            if (
                              currSection === sec.name &&
                              questionIndex === question.question
                            ) {
                              setCurrSection("");
                              setQuestion("");
                            } else {
                              setCurrSection(sec.name);
                              setQuestion(question.question);
                            }
                          }}
                        >
                          <div className="faq-question-container">
                            <img src="/starBullet.png"></img>
                            {question.question}
                          </div>
                          {currSection === sec.name &&
                          questionIndex === question.question ? (
                            <div className="faq-answer">{question.answer}</div>
                          ) : (
                            <></>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
