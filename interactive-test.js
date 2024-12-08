const questions = [
    {
        question: "Apa itu bullying?",
        options: ["Tindakan fisik atau verbal untuk menyakiti orang lain", "Memberikan kritik yang membangun", "Membantu seseorang di saat sulit"],
        answer: 0
    },
    {
        question: "Manakah contoh dari cyberbullying?",
        options: ["Mengirim pesan kasar melalui media sosial", "Berbicara langsung dengan sopan", "Mengabaikan seseorang secara langsung"],
        answer: 0
    },
    {
        question: "Apa yang dapat dilakukan untuk mencegah bullying di sekolah?",
        options: ["Melaporkan ke guru atau orang dewasa terpercaya", "Ikut serta dalam bullying untuk membalas", "Membiarkan saja terjadi"],
        answer: 0
    },
    {
        question: "Apa efek jangka panjang dari bullying pada korban?",
        options: ["Rasa percaya diri yang meningkat", "Masalah kesehatan mental seperti depresi", "Menjadi lebih populer"],
        answer: 1
    },
    {
        question: "Apa yang sebaiknya dilakukan jika Anda menjadi saksi bullying?",
        options: ["Diam saja agar tidak terlibat", "Melapor kepada orang yang berwenang", "Mengambil video untuk dibagikan"],
        answer: 1
    },
    {
        question: "Apa jenis bullying yang paling sering terjadi di dunia maya?",
        options: ["Cyberbullying", "Verbal bullying", "Physical bullying"],
        answer: 0
    },
    {
        question: "Siapa yang biasanya menjadi korban bullying?",
        options: ["Semua orang bisa menjadi korban", "Hanya anak yang tidak memiliki teman", "Hanya orang yang kurang pintar"],
        answer: 0
    },
    {
        question: "Apa contoh dari bullying verbal?",
        options: ["Menghina seseorang dengan kata-kata kasar", "Mendorong seseorang", "Mengambil barang milik orang lain"],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan bullying fisik?",
        options: ["Menggunakan tindakan fisik untuk menyakiti orang lain", "Mengabaikan seseorang", "Menyebarkan gosip buruk"],
        answer: 0
    },
    {
        question: "Apa dampak dari bullying pada pelaku?",
        options: ["Belajar menjadi lebih berempati", "Berpotensi bermasalah dengan hukum", "Menjadi lebih baik dalam hubungan sosial"],
        answer: 1
    },
    {
        question: "Bagaimana cara melaporkan bullying di sekolah?",
        options: ["Menyampaikan kepada guru, orang tua, atau pihak berwenang", "Diam dan tidak melakukan apa-apa", "Membicarakan dengan teman saja"],
        answer: 0
    },
    {
        question: "Apa itu social bullying?",
        options: ["Mengucilkan seseorang dari kelompok sosial", "Menyakiti secara fisik", "Menghina secara langsung"],
        answer: 0
    },
    {
        question: "Apa yang harus dilakukan jika kamu menjadi korban bullying?",
        options: ["Melaporkan ke orang dewasa terpercaya", "Membalas dengan cara yang sama", "Menyembunyikannya dari semua orang"],
        answer: 0
    },
    {
        question: "Apa tujuan dari program anti-bullying?",
        options: ["Mengurangi kasus bullying", "Meningkatkan kejadian bullying", "Membiarkan bullying terjadi"],
        answer: 0
    },
    {
        question: "Apa contoh bullying emosional?",
        options: ["Menghina perasaan seseorang", "Mendorong seseorang", "Memuji dengan tulus"],
        answer: 0
    },
    {
        question: "Apa yang tidak termasuk dalam bullying?",
        options: ["Membantu seseorang belajar", "Menghina orang lain secara verbal", "Menyakiti orang lain secara fisik"],
        answer: 0
    },
    {
        question: "Siapa yang berperan penting dalam menghentikan bullying di sekolah?",
        options: ["Guru, siswa, dan orang tua", "Hanya kepala sekolah", "Hanya siswa yang terlibat"],
        answer: 0
    },
    {
        question: "Apa yang harus dilakukan jika melihat teman sedang dibully?",
        options: ["Memberi dukungan kepada teman tersebut", "Bergabung dengan pelaku bullying", "Meninggalkannya"],
        answer: 0
    },
    {
        question: "Apa perbedaan antara bercanda dan bullying?",
        options: ["Bercanda tidak menyakiti, bullying menyakiti", "Bullying selalu dilakukan untuk hiburan", "Bercanda tidak pernah menyenangkan"],
        answer: 0
    },
    {
        question: "Bagaimana cara menciptakan lingkungan sekolah bebas bullying?",
        options: ["Meningkatkan kesadaran dan kerja sama", "Menyembunyikan kasus bullying", "Membiarkan bullying terus terjadi"],
        answer: 0
    }
];// Variabel global
let currentQuestion = 0;
let score = 0;

// Elemen DOM
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");
const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const scoreText = document.getElementById("score");
const messageText = document.getElementById("message");

// Fungsi Confetti
function launchConfetti() {
    console.log("Launching confetti...");
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

// Mulai tes
startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    quizContainer.style.display = "block";
    currentQuestion = 0;
    score = 0;
    showQuestion();
});

// Tampilkan pertanyaan
function showQuestion() {
    const current = questions[currentQuestion];
    questionText.textContent = current.question;
    optionsContainer.innerHTML = "";
    current.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option-btn";
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

// Periksa jawaban
function checkAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedIndex === correctAnswer) {
        score += 1;
    }
    currentQuestion += 1;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Tampilkan hasil
function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const finalScore = (score / questions.length) * 100;
    console.log("Final Score:", finalScore);
    scoreText.textContent = `Nilai Anda: ${finalScore}`;

    if (finalScore > 70) {
        messageText.textContent = "Selamat! Anda memahami bullying dengan baik.";
        launchConfetti();
    } else {
        messageText.textContent = "Belajar lagi tentang bullying untuk meningkatkan pemahaman Anda!";
    }
}

// Tombol "Beranda"
homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

// Tombol "Coba Lagi"
restartBtn.addEventListener("click", () => {
    resultContainer.style.display = "none";
    startBtn.style.display = "block";
});
