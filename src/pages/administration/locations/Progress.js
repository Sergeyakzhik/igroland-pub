import React from 'react';

const Progress = ({ progress }) => {
    return (
        <div className={`locations-progress ${progress.step2 ? 'with-offset' : ''}`}>
            {/* <p className="centered">This short instruction will help you to find the correct location (mark PIN) on the map and fill the Address fields properly:</p> */}
            <div className="steps">
                <hr/>
                <hr/>
                <div className="step">
                    <div className={`status-mark ${!progress.step1 ? 'in-progress' : ''} ${progress.step1 ? 'done' : ''}`}>
                        <i className="material-icons">check</i>
                    </div>
                    <h3 className="centered">Шаг 1</h3>
                    <p className="centered">
                        Введите адрес и нажмите на иконку поиска
                    </p>
                </div>
                <div className="step">
                    <div className={`status-mark ${progress.step1 ? 'in-progress' : ''} ${progress.step2 ? 'done' : ''}`}>
                        <i className="material-icons">check</i>
                    </div>
                    <h3 className="centered">Шаг 2</h3>
                    <p className="centered">
                        Нажмите на нужный маркер на карте
                    </p>
                </div>
                <div className="step">
                    <div className={`status-mark ${progress.step2 ? 'in-progress' : ''} ${progress.step3 ? 'done' : ''}`}>
                        <i className="material-icons">check</i>
                    </div>
                    <h3 className="centered">Шаг 3</h3>
                    <p className="centered">
                        Заполните все поля формы и нажмите кнопку "Создать"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Progress;