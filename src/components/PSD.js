import React from "react";
import {Link} from "react-router-dom";

const books = [
    {
        answer: "correct answer is: Lựa chọn giải phápCâu",
        question: "hỏiBước thứ ba trong quy trình giải quyết vấn đề làSelect one:a. Đánh giá giải phápb. Theo dõi thực hiện giải phápc. Lựa chọn giải phápd. Thực hiện giải pháp Phản"
    },
    {
        answer: "correct answer is: Có cách nhìn mới, nhìn vấn đề từ các góc độ khác nhau, đa dạng và phong phúCâu",
        question: "hỏiTư duy vượt ra ngoài rào cản (think outside of the box) khi giải quyết vấn đề có nghĩa làSelect one:a. Suy nghĩ đến hậu quả có thể xảy ra khi giải quyết vấn đềb. Suy nghĩ sáng tạo nhưng cần nằm trong khuôn khổ của những ràng buộc và quy địnhc. Đưa ra các giả định và phân tích để làm rõ ý nghĩa của các giả định đód. Có cách nhìn mới, nhìn vấn đề từ các góc độ khác nhau, đa dạng và phong phú Phản"
    },
    {
        answer: "correct answer is: Việc đánh giá thực hiện giải pháp cần được tiến hành liên tục cả trong và sau khi hoàn thành quá trình triển khai giải phápCâu",
        question: "hỏiViệc đánh giá thực hiện giải pháp cần được tiến hành khi nàoSelect one:a. Việc đánh giá thực hiện giải pháp chỉ cần tiến hành khi đang triển khai giải phápb. Việc đánh giá thực hiện giải pháp cần được tiến hành liên tục cả trong và sau khi hoàn thành quá trình triển khai giải pháp c. Việc đánh giá thực hiện giải pháp cần tiến hành khi có nhiều sự thay đổi dẫn đến sự lựa chọn không còn là tối ưud. Sau khi hoàn thành công việc thì cần đánh giá việc thực hiện giải phápPhản"
    },
    {
        answer: "correct answer is: Xem xét khía cạnh đối diện của vấn đềCâu",
        question: "hỏi“Kỹ thuật Janusian” là phương pháp dùng để làm gì?Select one:a. Xem xét vấn đề từ nhiều góc độ khác nhaub. Phát huy tính sáng tạo trong giải quyết vấn đềc. Xác định nguyên nhân gốc của vấn đềd. Xem xét khía cạnh đối diện của vấn đề Phản"
    },
    {
        answer: "correct answer is: Xem xét vấn đề từ nhiều góc độ khác nhauCâu",
        question: "hỏiTìm phương án trả lời đúng nhất. Để giải quyết vấn đề một cách hiệu quả thì cần xem xét vấn đề đó như thế nào?Select one:a. Xem xét vấn đề từ góc độ đối diệnb. Xem xét vấn đề từ một góc độc. Xem xét vấn đề từ nhiều góc độ khác nhaud. Xem xét vấn đề từ nguyên nhân gốc Phản"
    },
    {
        answer: "correct answer is: Giải quyết vấn đề theo cách sáng tạo là một quá trình không đi theo một trình tự các bước cụ thể mà dưa vào sự cảm nhận, so sánh, mường tượng, xử lý kết hợp các bước để đạt được giải phápCâu",
        question: "hỏiPhương án nào dưới đây giải thích đúng nhất về cách giải quyết vấn đề sáng tạo?Select one:a. Giải quyết vấn đề theo cách sáng tạo là việc phân tích từng bước cho đến khi đạt được giải phápb. Giải quyết vấn đề theo cách sáng tạo là một quá trình không đi theo một trình tự các bước cụ thể mà dưa vào sự cảm nhận, so sánh, mường tượng, xử lý kết hợp các bước để đạt được giải phápc. Giải quyết vấn đề theo cách sáng tạo là một quá trình phân tích logic bao gồm các bước khác nhau nhằm đạt được giải pháp d. Giải quyết vấn đề theo cách sáng tạo là cách giải quyết một vấn đề cụ thể tùy thuộc thiên hướng của từng người và mang tính ngẫu hứng cá nhân để đạt được giải phápPhản"
    },
    {
        answer: "correct answer is: Phân tích các nguyên nhân của vấn đềCâu",
        question: "hỏiKỹ thuật xương cá” là phương pháp dùng để làm gì?Select one:a. Phát huy tính sáng tạo trong giải quyết vấn đềb. Xem xét khía cạnh đối diện của vấn đềc. Xem xét vấn đề từ nhiều góc độ khác nhaud. Phân tích các nguyên nhân của vấn đề Phản"
    },
    {
        answer: "correct answer is: Khi gặp vấn đề đơn giản, dễ thống nhất và các thông tin có khả năng dự báo trước thì nên sử dụng cách giải quyết vấn đề theo hệ thống để tìm giải phápCâu",
        question: "hỏiPhương án nào dưới đây giải thích đúng nhất về việc lựa chọn phương pháp giải quyết vấn đề đơn giản, dễ thống nhất và các thông tin có khả năng dự báo trước?Select one:a. Khi gặp vấn đề đơn giản, dễ thống nhất và các thông tin có khả năng dự báo trước thì nên sử dụng cách giải quyết vấn đề theo cảm nhận sáng tạo để tìm giải phápb. Khi gặp vấn đề đơn giản, dễ thống nhất và các thông tin có khả năng dự báo trước thì nên sử dụng cách giải quyết vấn đề theo hệ thống để tìm giải phápc. Khi gặp vấn đề đơn giản, dễ thống nhất và các thông tin có khả năng dự báo trước thì nên kết hợp sử dụng càng nhiều cách giải quyết vấn đề càng tốt để tìm giải pháp d. Khi gặp vấn đề đơn giản, dễ thống nhất và các thông tin có khả năng dự báo trước thì nên sử dụng cách giải quyết vấn đề theo ngẫu hứng để tìm giải phápPhản"
    },
    {
        answer: "correct answer is: Đánh giá giải phápCâu",
        question: "hỏiBước cuối cùng trong quy trình giải quyết vấn đề là:Select one:a. Lựa chọn giải phápb. Đánh giá giải phápc. Theo dõi thực hiện giải pháp d. Thực hiện giải phápPhản"
    },
    {
        answer: "correct answer is: Giải quyết vấn đề theo hệ thống là một quá trình phân tích logic bao gồm các bước khác nhau nhằm đạt được giải phápCâu",
        question: "hỏiPhương án nào dưới đây giải thích đúng về cách giải quyết vấn đề theo hệ thống:Select one:a. Giải quyết vấn đề theo hệ thống là một quá trình không đi theo một trình tự các bước cụ thể mà dưa vào sự cảm nhận, so sánh, mường tượng… để đạt được giải phápb. Giải quyết vấn đề theo hệ thống là một quá trình phân tích logic bao gồm các bước khác nhau nhằm đạt được giải pháp c. Giải quyết vấn đề theo hệ thống là cách giải quyết một vấn đề cụ thể tùy thuộc thiên hướng của từng ngườid. Giải quyết vấn đề theo hệ thống là một cách giải quyết vấn đề sáng tạo mang tính ngẫu hứng của cá nhânPhản"
    },
    {
        answer: "correct answer is: Khi vấn đề phức tạp, nhiều biến động, khó dự báo thì nên kết hợp sử dụng cách giải quyết vấn đề cảm nhận sáng tạo và phân tích logic hệ thốngCâu",
        question: "hỏiPhương án nào dưới đây giải thích đúng nhất về việc lựa chọn phương pháp giải quyết vấn đề khi gặp vấn đề phức tạp, nhiều biến động, khó dự báo?Select one:a. Khi vấn đề phức tạp, nhiều biến động, khó dự báo thì nên kết hợp sử dụng cách giải quyết vấn đề cảm nhận sáng tạo và phân tích logic hệ thốngb. Khi vấn đề phức tạp, nhiều biến động, khó dự báo thì nên sử dụng cách giải quyết vấn đề theo logic hệ thốngc. Khi vấn đề phức tạp, nhiều biến động, khó dự báo thì nên sử dụng cách giải quyết vấn đề theo ngẫu hứng cá nhând. Khi vấn đề phức tạp, nhiều biến động, khó dự báo thì nên sử dụng cách giải quyết vấn đề theo quy trình, lần lượt trình tự các bước Phản"
    },
    {
        answer: "correct answer is: Thực hiện giải phápCâu",
        question: "hỏiBước thứ tư trong quy trình giải quyết vấn đề làSelect one:a. Xác định vấn đềb. Thực hiện giải phápc. Đưa ra các giải pháp d. Lựa chọn giải phápPhản"
    },
    {
        answer: "correct answer is: Theo dõi thực hiện giải phápCâu",
        question: "hỏiBước thứ năm trong quy trình giải quyết vấn đề là:Select one:a. Đánh giá giải phápb. Lựa chọn giải phápc. Thực hiện giải pháp d. Theo dõi thực hiện giải phápPhản"
    },
    {
        answer: "correct answer is: So sánh và đặt vấn đề vào bối cảnh mớiCâu",
        question: "hỏi“Kỹ thuật ẩn dụ Metaphor” là phương pháp dùng để làm gì?Select one:a. Xem xét vấn đề từ nhiều góc độ khác nhau b. Xem xét khía cạnh đối diện của vấn đềc. So sánh và đặt vấn đề vào bối cảnh mớid. Xác định nguyên nhân gốc của vấn đềPhản"
    },
    {
        answer: "correct answer is: Đưa ra các giải phápCâu",
        question: "hỏiBước thứ hai trong quy trình giải quyết vấn đề làSelect one:a. Đưa ra các giải pháp b. Xác định vấn đềc. Thực hiện giải phápd. Lựa chọn các giải phápPhản"
    },
    {
        answer: "correct answer is: Xác định nguyên nhân gốc của vấn đềCâu",
        question: "hỏiKỹ thuật “đặt 5 lần câu hỏi tại sao” là nhằm mục đích gì?Select one:a. Xác định nguyên nhân gốc của vấn đề b. Phát huy tính sáng tạo trong giải quyết vấn đềc. Xem xét vấn đề từ nhiều góc độ khác nhaud. Xem xét khía cạnh đối diện của vấn đềPhản"
    },
    {
        answer: "correct answer is: Cần tạo dựng thái độ tích cực và lạc quan khi giải quyết vấn đềCâu",
        question: "hỏiĐể giải quyết vấn đề một cách hiệu quả, người giải quyết vấn đề cần có thái độ như thế nào?Select one:a. Cần tạo dựng thái độ tích cực và lạc quan khi giải quyết vấn đề b. Cần có thái độ thận trọng, bị động nếu muốn giải quyết vấn đề một cách hiệu quảc. Cần loại bỏ thái độ lạc quan khi giải quyết vấn đềd. Cần phải biết sợ hãi khi giải quyết vấn đềPhản"
    },
    {
        answer: "correct answer is: Ứng dụng kỹ thuật biểu đồ để nhóm các giải pháp; đánh giá các giải pháp bằng quá trình so sánh; tư duy vượt ra ngoài rào cản và cân nhắc hậu quả khi lựa chọn giải phápCâu",
        question: "hỏiKhi đứng trước nhiều giải pháp cho một vấn đề thì cần làm gì để lựa chọn được giải pháp phù hợp nhất?Select one:a. Cân nhắc hậu quả khi lựa chọn giải pháp và lựa chọn giải pháp theo trực giác vì đó là cách tốt nhất để giải quyết vấn đềb. Chia các thành viên thảo luận từng vấn đề để có hành động cụ thể cho từng lĩnh vực và sau đó trình bày chia sẻ chungc. Ứng dụng kỹ thuật biểu đồ để nhóm các giải pháp; đánh giá các giải pháp bằng quá trình so sánh; tư duy vượt ra ngoài rào cản và cân nhắc hậu quả khi lựa chọn giải pháp d. Tìm người có kinh nghiệm giải quyết vấn đề để nhờ lựa chọn giải phápPhản"
    },
    {
        answer: "correct answer is: Xây dựng kế hoạch hành động cụ thể để triển khai giải pháp một cách hiệu quả trên thực tếCâu",
        question: "hỏiSau khi đã lựa chọn được giải pháp phù hợp nhất để giải quyết vấn đề thì cần phải làm gìSelect one:a. Xây dựng kế hoạch hành động cụ thể để triển khai giải pháp một cách hiệu quả trên thực tế b. Xem xét những hậu quả có thể xảy ra đối với giải pháp trên thực tếc. Lên các phương án để đánh giá tính thực tế của giải phápd. Thảo luận để khẳng định về sự phù hợp nhất của giải phápPhản"
    }
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
