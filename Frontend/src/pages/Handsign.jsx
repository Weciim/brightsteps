import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const Handsign = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [currentSign, setCurrentSign] = useState('');
    const [currentWord, setCurrentWord] = useState('');
    const [phrase, setPhrase] = useState([]);
    const [savedPhrases, setSavedPhrases] = useState([]);
    const [lastSign, setLastSign] = useState('');
    const [noSignTimeout, setNoSignTimeout] = useState(null);

    useEffect(() => {
        const socket = new WebSocket("ws://127.0.0.1:8000/ws");

        socket.onmessage = (event) => {
            console.log("WebSocket message received:", event.data);
            try {
                const data = JSON.parse(event.data);
                if (data.prediction) {
                    const sign = data.prediction;
                    console.log("Predicted", sign);

                    setCurrentSign(sign);

                    if (sign !== lastSign && sign !== 'No hands detected') {
                        setCurrentWord(prevWord => prevWord + sign);
                        setLastSign(sign);

                        clearTimeout(noSignTimeout);
                        setNoSignTimeout(setTimeout(finalizeWord, 4000));
                    }
                }
            } catch (error) {
                console.error('Error parsing WebSocket message:', error);
            }
        };

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    webcamRef.current.srcObject = stream;
                    webcamRef.current.play();
                    setInterval(captureImage, 1000);
                })
                .catch(err => {
                    console.error("Error accessing camera: ", err);
                });
        } else {
            alert("getUserMedia not supported in this browser.");
        }

        function captureImage() {
            const context = canvasRef.current.getContext('2d');
            context.drawImage(webcamRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
            const imageData = canvasRef.current.toDataURL('image/png');
            const base64Image = imageData.split(',')[1];
            socket.send(JSON.stringify({ frame: base64Image }));
        }

        function finalizeWord() {
            if (currentWord) {
                setPhrase(prevPhrase => {
                    const newPhrase = [...prevPhrase, currentWord];
                    if (newPhrase.length > 4) {
                        setSavedPhrases(prevSavedPhrases => [...prevSavedPhrases, newPhrase]);
                        return [];
                    }
                    return newPhrase;
                });
                setCurrentWord('');
                setLastSign('');
            }
        }

        return () => {
            socket.close();
        };
    }, [currentWord, lastSign, noSignTimeout]);

    const updateSavedPhrases = () => {
        return savedPhrases.map((phrase, index) => (
            <div key={index} className="saved-phrase">{phrase.join(' ')}</div>
        ));
    };

    const clearPhrases = () => {
        setSavedPhrases([]);
    };

    return (
        <main>
            <section id="video-container">
                <video ref={webcamRef} id="webcam" autoPlay playsInline></video>
                <canvas ref={canvasRef} id="outputCanvas" style={{ display: 'none' }}></canvas>
            </section>
            <section id="detections">
                <div className="detection-item" id="predicted-sign">
                    <span className="label">Current Sign:</span>
                    <span className="value">{currentSign}</span>
                </div>
                <div className="detection-item" id="current-word">
                    <span className="label">Current Word:</span>
                    <span className="value">{currentWord}</span>
                </div>
                <div className="detection-item" id="phrase">
                    <span className="label">Phrase:</span>
                    <span className="value">{phrase.join(' ')}</span>
                </div>
            </section>
            <section id="saved-phrases-section">
                <h2>Saved Phrases</h2>
                <div id="saved-phrases">{updateSavedPhrases()}</div>
                <button id="clearPhrases" onClick={clearPhrases}>Clear Phrases</button>
            </section>
        </main>
    );
};

export default Handsign;
