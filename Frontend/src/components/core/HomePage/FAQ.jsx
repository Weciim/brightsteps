import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is BrightSteps?",
      answer:
        "BrightSteps is an inclusive educational platform designed to support children with special needs through personalized learning, AI-powered assistance, and accessible resources.",
    },
    {
      question: "How does BrightSteps help children with special needs?",
      answer:
        "Our platform provides tailored lessons, interactive learning tools, sign language support, and AI-based educational assistance to create an inclusive learning experience.",
    },
    {
      question: "Is the platform free to use?",
      answer:
        "BrightSteps offers both free and premium educational resources. We strive to keep the core features accessible to all while offering additional support through premium plans.",
    },
    {
      question: "Can parents and educators track progress?",
      answer:
        "Yes! Our platform includes tools for tracking learning progress, setting goals, and receiving insights on children's educational development.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply sign up on our website and explore our interactive learning materials and support features tailored to your child's needs.",
    },
    {
      question: "Is there support available?",
      answer:
        "Absolutely! Our support team is always available to help. You can contact us at support@brightsteps.com for assistance.",
    },
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-richblack-400 pb-4">
              <div
                className="flex text-center justify-between cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                {expandedIndex === index ? (
                  <FaMinus className="text-yellow-300" />
                ) : (
                  <FaPlus className="text-yellow-300" />
                )}
              </div>
              <div className="mt-3">
                {expandedIndex === index && (
                  <p className="text-base">{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-base">
            Still have questions? Feel free to contact us at {" "}
            <a href="mailto:support@brightsteps.com" className="text-yellow-300">
              support@brightsteps.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
