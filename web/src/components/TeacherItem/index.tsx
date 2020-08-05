import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/19700118?s=460&u=31480360784f36fa6a301205453af2a1930606e2&v=4" alt="Diego Rodrigues" />

                        <div>
                            <strong>Diego Rodrigues</strong>
                            <span>Logica de programação</span>
                        </div>
                    </header>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     <br /><br />
     Incidunt est dolore, minima vero at aliquid ex nostrum odio consectetur magni quaerat voluptatibus vitae aspernatur labore necessitatibus delectus, error alias eos?</p>
                    <footer>
                        <p>
                            Preço/hora <strong>R$ 50,00</strong>
                        </p>

                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp" />
Entrar em contato
         </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;