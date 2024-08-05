'use client';

import React, { useState } from 'react';
import { useChat } from 'ai/react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import FAQ from './components/faq';

const Page = () => {
  const { messages, input, handleInputChange, handleSubmit, append, isLoading } = useChat({
    initialMessages: [
      {
        id: 'default-1',
        role: 'assistant',
        content: 'Hola, soy tu asistente virtual de ISP. ¿En qué puedo ayudarte hoy?'
      },
      {
        id: 'default-2',
        role: 'user',
        content: 'Hola, si necesito de tu ayuda, no me sirve el internet!'
      },
      {
        id: 'default-1',
        role: 'assistant',
        content: 'Hola, soy tu asistente virtual de ISP. ¿En qué puedo ayudarte hoy?'
      },
      {
        id: 'default-2',
        role: 'user',
        content: 'Hola, si necesito de tu ayuda, no me sirve el internet!'
      },
      {
        id: 'default-1',
        role: 'assistant',
        content: 'Hola, soy tu asistente virtual de ISP. ¿En qué puedo ayudarte hoy?'
      },
      {
        id: 'default-2',
        role: 'user',
        content: 'Hola, si necesito de tu ayuda, no me sirve el internet!'
      },
      {
        id: 'context-1',
        role: 'system',
        content: 'Eres un asistente virtual para un proveedor de servicios de internet. Ayuda a los usuarios con preguntas sobre sus planes de internet, problemas de conexión, facturación y otros servicios relacionados.'
      }
    ]
  });

  const handleSelectQuestion = (question:string, answer:string) =>{
    append({role: 'user', content: question});
    append({role: 'assistant', content: answer});
  }

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.customH2}><h2>ISP Chatbot</h2></div>
      
      <form className={styles.customForm} onSubmit={handleSubmit}>
      
        <div className={styles.customMessageContainer}>
          
          {messages
            .filter(m => m.role !== 'system')
            .map((m, index) => (
              <>
              <div 
                key={m.id}
                className={`${styles.customItemsMessageContainer} ${m.role === 'assistant' ? styles.assistantMessage : styles.userMessage}`}
              >
                  <div
                    className={`${styles.customMessage} ${m.role === 'assistant' ? styles.customAssistant : styles.customUser}`}
                    key={m.id}
                  >
                    <span className={`${styles.customMessageRole} ${m.role === 'assistant' ? 'text-left' : 'text-right'}`}>
                    {m.role === 'assistant' ? 'Asistente: ' : 'Usuario: '}
                    </span>
                    {m.content}
                  </div>
              </div>
              </>
            ))}
        </div>
        <FAQ onSelectQuestion={handleSelectQuestion}/>
        <div className={styles.customInputsContainers}>
          <div className={styles.customTextareaContainer}>
            <textarea
              rows={4}
              value={input}
              placeholder='Escribe tu mensaje aquí...'
              className={styles.customTextarea}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className={styles.customButtonContainer}>
            <button
              className={styles.customButton}
              disabled={isLoading || !input}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Page;
