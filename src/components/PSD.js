import React from "react";
import {Link} from "react-router-dom";

const books = [
    { question: "Marcel Proust", answer: "In Search of Lost Time", subject: "1" },
    { question: "James Joyce", answer: "Ulysses", subject: "2" },
    { question: "Miguel de Cervantes", answer: "Quixote", subject: "3" },
    { question: "Herman Melville", answer: "Moby Dick", subject: "4" },
    { question: "William Shakespeare", answer: "Hamlet", subject: "5" },
];

const ICT = () => {
    const [searchText, setSearchText] = React.useState("");

    const filteredBooks = books.filter(
        ({ question, answer,subject }) =>
            question.toLowerCase().includes(searchText.toLowerCase()) ||
            answer.toLowerCase().includes(searchText.toLowerCase())
    );

    return (

        <div >
            <p><Link to="/">Home</Link></p>
            <input
                type="text" placeholder="Từ khoá psd"
                value={searchText}
                onChange={({ target }) => setSearchText(target.value)}
            />
            <ul>
                {filteredBooks.map(({ question, answer }) => (
                    <li key={answer}>
                        <strong>{answer}</strong> by {question}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default (ICT);
