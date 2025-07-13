let recognition;
let isRecording = false;

function initSpeechRecognition() {
    if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support speech recognition. Try Chrome or Edge.');
        return;
    }
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = function(event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript + ' ';
        }
        document.getElementById('transcription').innerText = transcript.trim();
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error', event.error);
        toggleVoice();
    };

    recognition.onend = function() {
        isRecording = false;
        document.getElementById('voice-btn').classList.remove('recording');
        document.getElementById('voice-btn').innerText = '🎤 Start Recording';
    };
}

function toggleVoice() {
    if (!recognition) initSpeechRecognition();

    if (isRecording) {
        recognition.stop();
        document.getElementById('voice-btn').innerText = '🎤 Start Recording';
    } else {
        recognition.start();
        isRecording = true;
        document.getElementById('voice-btn').classList.add('recording');
        document.getElementById('voice-btn').innerText = '🔴 Stop Recording';
    }
}

initSpeechRecognition();