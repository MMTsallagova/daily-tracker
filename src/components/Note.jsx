import React from "react";

import "./components-style.css"

const Note: React.FC = ({title, body}) => {
    return (
        <div>
            <div className="component-title-container">
                <div className="component-border"/>
                <span>
                    {title}
                </span>
            </div>

            <div>
                {body}
            </div>
        </div>
    )
}

export default Note

/*
На референсе есть компоненты с одинаковым оформлением: Ячейка с хедером
Компоненты содержат разный контент
Нужно в этом файле подготовить компонент Note который будет принимать title и body и отрисовывать их
вот пример компонента, который может принимать версткуЖ

задача - познакомится с передачей данных в компонент
так же почитай о display: flex, grid и тд : https://chat.openai.com/share/ec9497c5-3fe1-4e8f-9043-7d668fc354ff

const Modal: React.FC = ({title, body}) => {
  return (
    <div>
      <h2>{title}</h2>
        <div>
          {body}
        </div>
    </div>
  );
};

export default Modal;

 */