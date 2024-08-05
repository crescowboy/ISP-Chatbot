// src/components/FAQ.tsx
import React from 'react';
import styles from './FAQ.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FAQ = ({ onSelectQuestion }) => {
  const faqs = [
    {
      question: '¿Cómo puedo verificar la velocidad de mi internet?',
      answer: 'Puedes verificar la velocidad de tu internet visitando nuestra página de pruebas de velocidad.'
    },
    {
      question: '¿Qué debo hacer si mi internet está lento?',
      answer: 'Si experimentas lentitud, reinicia tu router y verifica si el problema persiste. Si el problema continúa, contáctanos a través del chatbot.'
    },
    // Agrega más preguntas y respuestas aquí
  ];

  return (
    <details className={styles.faqContainer}>
      <summary className={styles.faqTitle}>
        Preguntas Frecuentes
        <FontAwesomeIcon icon={faChevronDown} className={styles.faqIcon} />
      </summary>
      {faqs.map((faq, index) => (
        <button
          key={index}
          className={styles.faqButton}
          onClick={() => onSelectQuestion(faq.question, faq.answer)}
        >
          {faq.question}
        </button>
      ))}
    </details>
  );
};

export default FAQ;
