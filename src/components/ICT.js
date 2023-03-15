import React from "react";
import {Link} from "react-router-dom";

const ict = [
    { question: "Mạng ARPANET hình thành vào khoảng năm nào?", answer: "1969" },
    { question: "OSP là viết tắt của cụm từ tiếng Anh nào?", answer: "OSP là viết tắt của cụm từ tiếng Anh nào?" },
    { question: "Khi nói về quá trình phát triển E-learning, có 2 phát biểu như sau:\n" +
            "PB1: Trước năm 1983: phương pháp giáo dục “Lấy giảng viên làm trung tâm” là phương pháp phổ biến nhất trong các trường học.\n" +
            "PB2: Giai đoạn 1984-1993: Khi công nghệ Web được phát minh ra, các nhà cung cấp dịch vụ đào tạo bắt\n" +
            "đầu nghiên cứu cách thức cải tiến phương pháp giáo dục bằng công nghệ này. Hỏi khẳng định nào sau đây là đúng?", answer: " PB1 đúng, PB2 sai." },
    { question: "Việt Nam hòa vào mạng Internet toàn cầu vào khoảng năm nào?", answer: "1997" },
    { question: "Internet được hình thành từ dự án nào sau đây?", answer: "Từ một dự án nghiên cứu của Bộ quốc phòng Mỹ." },
    { question: "Theo định nghĩa của Compare Infobase Inc thì E-Learning là gì? Select one:\n" +
            "a. E-learning nghĩa là việc học tập hay đào tạo được chuẩn bị, truyền tải hoặc quản lý sử dụng nhiều công cụ của công nghệ thông tin, truyền thông khác nhau và được thực hiện ở mức cục bộ hay toàn cục.\n" +
            "b. E-learning là một thuật ngữ dùng để mô tả việc học tập, đào tạo dựa trên công nghệ thông tin và truyền thông.\n" +
            "c. E-learning là viết tắt của từ Electronic Learning." +
            "d. E-learning là sử dụng các công nghệ Web và Internet trong học tập.", answer: "E-learning là một thuật ngữ dùng để mô tả việc học tập, đào tạo dựa trên công nghệ thông tin và truyền thông" },
];

const ICT = () => {
    const [searchText, setSearchText] = React.useState("");

    const filteredIct = ict.filter(
        ({ question, answer,subject }) =>
            question.toLowerCase().includes(searchText.toLowerCase()) ||
            answer.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <p><Link to="/">Home</Link></p>
            <input
                type="text" placeholder="Từ khoá ict"
                value={searchText}
                onChange={({ target }) => setSearchText(target.value)}
            />
            <ul>
                {filteredIct.map(({ question, answer }) => (
                    <li key={answer}>
                        <strong>{answer}</strong>
                        <br/>
                        <p>{question}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default (ICT);
