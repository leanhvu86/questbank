import React from "react";
import {Link} from "react-router-dom";

const books = [
    {
        answer: "The correct answer is: Rụt rè, ngại giao tiếp với người khác",
        question: "Một người tự ty về bản thân thường có biểu hiện như thế nào?"
    },
    {
        answer:"The correct answer is: Phần công khai/ Open",
        question:"Theo mô hình cửa sổ Johari, để phát triển bản thân thì con người cần chú trọng mở rộng phần nào?"
    },
    {
        answer:"The correct answer is: Thiếu thông tin, bỏ lỡ cơ hội hợp tác, phát triển",
        question:"Theo mô hình cửa sổ Johari, nếu một người sống quá khép kín, ngại giao tiếp thì người đó có thể gặp những điểm bất lợi gì?"
    },
    {
        answer:"The correct answer is: Kiềm chế sự bốc đồng, giữ bình tĩnh khi sự việc bất ngờ xảy ra",
        question:"Tìm phương án đúng nhất. Một người được coi là biết kiểm soát cảm xúc của bản thân khi người đó:"
    },
    {
        answer:"The correct answer is: Vì đó là tiền đề quan trọng để con người xây dựng nhân hiệu, tạo dựng hình ảnh và uy tín cá nhân hướng đến sự thành công trong công việc và cuôc sống",
        question:"Tìm câu trả lời đúng nhất. Vì sao con người cần hiểu biết năng lực của bản thân mình?"
    },
    {
        answer:"The correct answer is: Tích cực chủ động tìm kiếm cơ hội để phát triển bản thân",
        question:"Theo mô hình cửa sổ Johari, một người muốn khám phá những năng lực của chính bản thân mình thì người đó cần làm gì?"
    },
    {
        answer:"The correct answer is: Thiết lập mục tiêu hành động",
        question:"SMART là công thức được khuyến khích áp dụng để làm gì?"
    },
    {
        answer:"The correct answer is: Nói ra những quan điểm của mình và sẵn sàng bảo vệ niềm tin về những gì là đúng",
        question:"Một người tự tin về bản thân thì sẽ phản ứng như thế nào khi được yêu cầu trình bày quan điểm của mình?"
    },
    {
        answer:"The correct answer is: Trầm trọng hóa vấn đề",
        question:"Để điều khiển và ngăn chặn cảm xúc tiêu cực thì con người cần tránh điều gì?"
    },
    {
        answer:"The correct answer is: Hiểu về năng lực bản thân, biết tự kiểm soát cảm xúc, cân bằng các mối quan hệ, nhạy cảm đoán biết được cảm xúc và suy nghĩ của người khác",
        question:"Người có độ thông minh cảm xúc cao là người:"
    },
    {
        answer:"The correct answer is: Quản lý bản thân là việc một cá nhân hiểu biết về chính bản thân mình, kiểm soát được cảm xúc, hành vi của mình và biết cách phát triển những năng lực mà mình có nhằm đạt được những mục tiêu mà bản thân họ đề ra",
        question:"Luận điểm nào sau đây diễn đạt đúng về khái niệm quản lý bản thân:"
    },
    {
        answer:"The correct answer is: Sự chia sẻ thông tin cần phụ thuộc vào độ thông minh cảm xúc của từng người",
        question:"Mô hình cửa sổ Johari đã chỉ ra lợi ích của việc mở rộng các mối quan hệ giao tiếp, chủ động chia sẻ quan điểm và trao đổi thông tin với người khác. Tuy nhiên, vấn đề chia sẻ thông tin cần được thực hiện như thế nào?"
    },
    {
        answer:"The correct answer is: Nhận biết năng lực bản thân, đặt ra mục tiêu phù hợp, lập kế hoạch để thực hiện mục tiêu",
        question:"Tìm phương án đúng nhất. Muốn phát triển được bản thân thì con người cần phải làm gì?"
    },
    {
        answer:"The correct answer is: Xác định mục tiêu, lên kế hoạch hành động, thực hiện nghiêm túc theo kế hoạch",
        question:"Con người cần làm gì để biến mục tiêu thành hiện thực?"
    },
    {
        answer:"The correct answer is: Tự bộc lộ và đón nhận thông tin phản hồi",
        question:"Theo mô hình cửa sổ Johari, cách thức mà con người tương tác với người khác để hiểu về bản thân mình là gì?"
    },
    {
        answer:"The correct answer is: Vì nếu phản ứng một cách không kiểm soát với những điều xảy ra trái ý mình thì sẽ dễ dẫn đến những hậu quả khó lường",
        question:"Tìm câu trả lời đúng nhất. Vì sao con người cần phải kiểm soát cảm xúc của bản thân?"
    },
    {
        answer:"The correct answer is: Tư thế ngay ngắn, ung dung, mắt nhìn thẳng",
        question:"Một người tự tin về khả năng và giá trị về bản thân thì sẽ có những biểu hiện như thế nào?"
    },
    {
        answer:"The correct answer is: Giữ bình tĩnh trước mọi bất ngờ xảy ra",
        question:"Tìm phương án đúng nhất. Một người được coi là thực sự có khả năng kiểm soát cảm xúc của bản thân khi người đó:"
    },
    {
        answer:"The correct answer is: Vì đó là điều kiện cần thiết để con người làm chủ bản thân, chủ động thực hiện những mục tiêu mà mình đã đề ra.",
        question:"Tìm câu trả lời đúng nhất. Vì sao con người cần phải tự tin vào bản thân mình?"
    },
    {
        answer:"The correct answer is: Vì con người chỉ có thể tự tin khi biết được điểm mạnh của bản thân để phát triển nó và biết điểm yếu của bản thân để khắc phục nó",
        question:"Tìm câu trả lời đúng nhất. Vì sao con người cần nhận thức được điểm mạnh và điểm yếu của bản thân mình?"
    },
    {
        answer:"The correct answer is: Người nhận không giải mã đúng thông điệp",
        question:"Xác định một nhân tố gây cản trở quá trình giao tiếp trong các nhân tố sau:"
    },
    {
        answer:"The correct answer is: “Như bạn biết thì câu chuyện diễn ra thế nào?”",
        question:"Xác định một câu hỏi dạng mở trong số các câu sau:"
    },
    {
        answer:"The correct answer is: Vì ai cũng có lòng tự tôn, việc giữ lễ nghĩa khoảng cách là để thể hiện sự tôn trọng đối tác",
        question:"Tìm phương án đúng nhất. Vì sao để giữ gìn mối quan hệ tốt đẹp lâu dài thì cần phải giữ lễ nghĩa và khoảng cách nhất định, không được suồng sã với các đối tác của mình?"
    },
    {
        answer:"The correct answer is: Không trung thực trong công việc",
        question:"Trong quá trình giao tiếp, một người sẽ không được người khác tin tưởng khi họ:"
    },
    {
        answer:"The correct answer is: Diễn tả bằng ánh mắt",
        question:"Những yếu tố nào sau đây không thuộc hình thức giao tiếp bằng ngôn từ?"
    },
    {
        answer:"The correct answer is: Lời khen tâng bốc, giả dối",
        question:"Lời khen loại nào sau đây sẽ gây phản cảm cho đối tác?"
    },
    {
        answer:"The correct answer is: Giao tiếp là cách thức con người tạo lập các mối liên hệ với những người khác trong xã hội",
        question:"Xác định một luận điểm thể hiện cách hiểu đúng nhất về khái niệm giao tiếp trong các phương án dưới đây:"
    },
    {
        answer:"The correct answer is: Tự do bộc lộ cảm xúc của mình",
        question:"Con người không nên làm gì nếu muốn thành công trong giao tiếp với người khác?"
    },
    {
        answer:"The correct answer is: Dành những lời khen tặng chân thành cho đối tác đúng lúc, đúng chỗ",
        question:"Tìm phương án đúng nhất. Lời khen có tác dụng rất tích cực trong quan hệ giao tiếp. Tuy nhiên nên bày tỏ lời khen như thế nào để tăng hiệu quả bền vững của các mối quan hệ ?"
    },
    {
        answer:"The correct answer is: Nói câu dài, hàm chứa nhiều thông tin",
        question:"Để thông điệp được truyền đi một cách rõ ràng, chính xác tạo hiệu quả tốt trong giao tiếp, người gửi thông điệp không nên làm gì?"
    },
    {
        answer:"The correct answer is: Người gửi không thể mã hóa đúng thông điệp",
        question:"Trong các nhân tố sau, nhân tố nào khiến cho quá trình giao tiếp không được triển khai thuận lợi?"
    },
    {
        answer:"The correct answer is: Nên xác định cự li và phương pháp giao tiếp với từng đối tượng cụ thể để có cách ứng xử phù hợp",
        question:"Để giao tiếp thành công thì con người cần xác định cự li và phương pháp giao tiếp với người khác như thế nào?"
    },
    {
        answer:"The correct answer is: Những người có phong cách ăn mặc giống nhau nhưng tính cách vẫn có thể khác nhau",
        question:"Xác định một luận điểm đúng nhất trong số các luận điểm dưới đây bàn về tính cách và trang phục của con người."
    },
    {
        answer:"The correct answer is: Tạo sự bất tín nhiệm của các đối tác",
        question:"Trong quá trình giao tiếp với những người khác, nếu một người chỉ chú tâm đến lợi ích của bản thân mình thì người đó sẽ:"
    },
    {
        answer:"The correct answer is: Vùng riêng tư",
        question:"Không gian giao tiếp giữa hai người được duy trì trong khoảng từ 0.5- 1m được xếp vào vùng nào?"
    },
    {
        answer:"The correct answer is: Dù là thân cận đến mấy thì các đối tác cũng nên giữ lễ nghĩa, khoảng cách nhất định, không được suồng sã với nhau",
        question:"Tìm câu trả lời đúng nhất. Những người là đối tác thân thiết của nhau cần cư xử thế nào để duy trì mối quan hệ lâu dài với nhau?"
    },
    {
        answer:"The correct answer is: Câu hỏi dạng mở",
        question:"Trong quá trình giao tiếp, khi cần đối tác cung cấp thông tin, bạn nên đặt câu hỏi dạng nào để khiến cho đối tác dễ chịu và cởi mở nói chuyện với bạn?"
    },
    {
        answer:"The correct answer is: Tạo sự linh hoạt, sáng tạo, hấp dẫn trong giao tiếp",
        question:"Tìm phương án đúng nhất. Con người cần tìm kiếm thông tin, tăng cường đề tài nói chuyện để:"
    },
    {
        answer:"The correct answer is: Sử dụng ngôn từ đơn giản phù hợp với người nghe và bối cảnh giao tiếp",
        question:"Trong giao tiếp xã giao, nên sử dụng ngôn từ như thế nào để mọi người xung quanh đều hiểu đúng thông điệp của mình?"
    },
    {
        answer:"The correct answer is: Biểu lộ sự ghen ghét đố kị",
        question:"Trong quá trình giao tiếp, khi cảm nhận được điều hay, điều tốt của đối tác bạn không nên làm gì?"
    },
    {
        answer:"The correct answer is: Chủ động hỏi ý kiến cấp trên",
        question:"Khi chưa thực sự hiểu rõ yêu cầu của công việc; thực trạng công việc; phương pháp làm việc; v.v. nhân viên cấp dưới nên giải quyết như thế nào?"
    },
    {
        answer:"The correct answer is: Điềm đạm, bình tĩnh sẵn sàng tiếp nhận thông tin nhiều chiều",
        question:"Người quản lý nên làm gì để có thể nghe được những ý kiến phản hồi từ các nhân viên của mình?"
    },
    {
        answer:"The correct answer is: Co mình khép kín, không chia sẻ ý kiến của mình",
        question:"Những người là đồng nghiệp của nhau sẽ không thể xây dựng môi trường làm việc thân thiện, hiệu quả nếu:"
    },
    {
        answer:"The correct answer is: Nhiệt tình thực hiện",
        question:"Khi nhân viên cấp dưới được cấp trên giao một nhiệm vụ nằm ngoài phạm vi những công việc thường làm (không trong danh mục các công việc được mô tả khi phân công trách nhiệm) thì cấp dưới nên phản ứng như thế nào?"
    },
    {
        answer:"The correct answer is: Về bản chất, con người chỉ có thể phát huy được tốt nhất năng lực sáng tạo của mình khi được ở trong một môi trường thoải mái, thích hợp",
        question:"Tìm câu trả lời đúng nhất. Môi trường làm việc thân thiện, mối quan hệ lành mạnh trong doanh nghiệp có ảnh hưởng tích cực đến khả năng sáng tạo, năng lực làm việc... của người lao động vì:"
    },
    {
        answer:"The correct answer is: Người lãnh đạo là người có thể đưa ra những qui định về giao tiếp ứng xử và yêu cầu mọi thành viên trong doanh nghiệp phải tuân thủ những quy định đó",
        question:"Tìm phương án đúng nhất. Người lãnh đạo doanh nghiệp giữ vai trò quan trọng trong việc xây dựng môi trường giao tiếp ứng xử tốt đẹp trong doanh nghiệp của mình vì:"
    },
    {
        answer:"The correct answer is: Phong cách của ban lãnh đạo doanh nghiệp",
        question:"Mối quan hệ ứng xử trong nội bộ doanh nghiệp phụ thuộc nhiều nhất vào yếu tố nào?"
    },
    {
        answer:"The correct answer is: Tránh nói xấu cấp trên sau lưng",
        question:"Nhân viên cấp dưới làm việc trong một tổ chức nên làm gì?"
    },
    {
        answer:"The correct answer is: Chủ động đề xuất với cấp trên về phương án thực hiện và nói rõ giới hạn khả năng của mình",
        question:"Khi công việc được giao có những thay đổi đáng kể về phạm vi và cấp độ, xuất hiện nguy cơ quá tải khiến không thể đảm đương được công việc thì cấp dưới cần làm gì?"
    },
    {
        answer:"The correct answer is: Văn hóa của một doanh nghiệp",
        question:"Tìm câu trả lời đúng nhất. Nhìn vào các mối quan hệ ứng xử trong nội bộ doanh nghiệp có thể đánh giá:"
    },
    {
        answer:"The correct answer is: Giao tiếp ứng xử tốt giúp mỗi cá nhân xây dựng hình ảnh tốt đẹp của mình trong con mắt của người khác",
        question:"Tìm câu trả lời đúng nhất. Chú trọng đến vấn đề giao tiếp ứng xử trong môi trường làm việc là một cách để mỗi thành viên trong doanh nghiệp xây dựng “nhân hiệu” của mình vì:"
    },
    {
        answer:"The correct answer is: Phát huy tối đa tính cách và sở thích cá nhân",
        question:"Các đồng nghiệp của nhau muốn xây dựng môi trường làm việc thân thiện, hiệu quả thì không nên làm gì?"
    },
    {
        answer:"The correct answer is: Cân nhắc, chọn lọc ý tưởng đề xuất phù hợp",
        question:"Khi có ý tưởng muốn đề xuất với cấp trên để hoàn thiện công việc, hoàn thiện tổ chức, v.v. bạn nên làm gì?"
    },
    {
        answer:"The correct answer is: Luôn khiêm tốn, cư xử nhã nhặn, tế nhị với các đồng nghiệp",
        question:"Khi một người có thành tích trong công việc, được cấp trên ưu ái, thường xuyên khen ngợi thì người đó cần làm gì để đạt được cả sự tôn trọng và yêu mến của đồng nghiệp?"
    },
    {
        answer:"The correct answer is: Quan niệm về mối quan hệ cấp trên – cấp dưới là giống nhau ở mọi doanh nghiệp",
        question:"Quan niệm nào sau đây là không đúng về mối quan hệ cấp trên cấp dưới trong doanh nghiệp"
    },
    {
        answer:"The correct answer is: Tránh đặt lợi ích cá nhân lấn át lợi ích của đồng nghiệp",
        question:"Để xây dựng mối quan hệ tốt đẹp với đồng nghiệp thì cần làm gì?"
    },
    {
        answer:"The correct answer is: Tuân thủ, cấp quản lý bao giờ cũng có lý do để ra quyết định",
        question:"Trong trường hợp cụ thể, khi cấp trên đưa ra những quyết định không như mong đợi của bạn nhưng lại có vẻ phù hợp với các đồng nghiệp khác, bạn nên làm gì?"
    },
    {
        answer:"The correct answer is: Đối tác và khách hàng cũng kỳ vọng những mối quan hệ tốt đẹp như vậy từ doanh nghiệp",
        question:"Tìm câu trả lời đúng nhất. Một doanh nghiệp có môi trường giao tiếp ứng xử nội bộ tốt đẹp sẽ thu hút được sự quan tâm của đối tác và khách hàng vì:"
    },
    {
        answer:"The correct answer is: Tò mò tìm hiểu các mối quan hệ cá nhân",
        question:"Khi mới được tuyển dụng vào làm việc, nhân viên cấp dưới không nên:"
    },
    {
        answer:"The correct answer is: Cấp trên cũng là con người, ai cũng có điểm mạnh điểm yếu",
        question:"Cách hiểu nào dưới đây của cấp dưới về cấp trên là đúng?"
    },
    {
        answer:"The correct answer is: Phân tích các nguyên nhân của vấn đề",
        question:"Kỹ thuật xương cá” là phương pháp dùng để làm gì?"
    },
    {
        answer:"The correct answer is: Thực hiện giải pháp",
        question:"Bước thứ tư trong quy trình giải quyết vấn đề là"
    },
    {
        answer:"The correct answer is: Khi gặp vấn đề đơn giản, dễ thống nhất và các thông tin có khả năng dự báo trước thì nên sử dụng cách giải quyết vấn đề theo hệ thống để tìm giải pháp",
        question:"Phương án nào dưới đây giải thích đúng nhất về việc lựa chọn phương pháp giải quyết vấn đề đơn giản, dễ thống nhất và các thông tin có khả năng dự báo trước?"
    },
    {
        answer:"The correct answer is: Đánh giá giải pháp",
        question:"Bước cuối cùng trong quy trình giải quyết vấn đề là:"
    },
    {
        answer:"The correct answer is: Theo dõi thực hiện giải pháp",
        question:"Bước thứ năm trong quy trình giải quyết vấn đề là:"
    },
    {
        answer:"The correct answer is: Xác định vấn đề",
        question:"Khi đối mặt với một vấn đề cần giải quyết, việc đầu tiên bạn phải làm là:"
    },
    {
        answer:"The correct answer is: Cần tạo dựng thái độ tích cực và lạc quan khi giải quyết vấn đề",
        question:"Để giải quyết vấn đề một cách hiệu quả, người giải quyết vấn đề cần có thái độ như thế nào?"
    },
    {
        answer:"The correct answer is: Lựa chọn giải pháp",
        question:"Bước thứ ba trong quy trình giải quyết vấn đề là"
    },
    {
        answer:"The correct answer is: Giải quyết vấn đề theo hệ thống là một quá trình phân tích logic bao gồm các bước khác nhau nhằm đạt được giải pháp",
        question:"Phương án nào dưới đây giải thích đúng về cách giải quyết vấn đề theo hệ thống:"
    },
    {
        answer:"The correct answer is: Việc đánh giá thực hiện giải pháp cần được tiến hành liên tục cả trong và sau khi hoàn thành quá trình triển khai giải pháp",
        question:"Việc đánh giá thực hiện giải pháp cần được tiến hành khi nào"
    },
    {
        answer:"The correct answer is: Ứng dụng kỹ thuật biểu đồ để nhóm các giải pháp; đánh giá các giải pháp bằng quá trình so sánh; tư duy vượt ra ngoài rào cản và cân nhắc hậu quả khi lựa chọn giải pháp",
        question:"Khi đứng trước nhiều giải pháp cho một vấn đề thì cần làm gì để lựa chọn được giải pháp phù hợp nhất?"
    },
    {
        answer:"The correct answer is: Giải quyết vấn đề theo cách sáng tạo là một quá trình không đi theo một trình tự các bước cụ thể mà dưa vào sự cảm nhận, so sánh, mường tượng, xử lý kết hợp các bước để đạt được giải pháp",
        question:"Phương án nào dưới đây giải thích đúng nhất về cách giải quyết vấn đề sáng tạo?"
    },
    {
        answer:"The correct answer is: Xem xét vấn đề từ nhiều góc độ khác nhau",
        question:"Tìm phương án trả lời đúng nhất. Để giải quyết vấn đề một cách hiệu quả thì cần xem xét vấn đề đó như thế nào?"
    },
    {
        answer:"The correct answer is: Xác định nguyên nhân gốc của vấn đề",
        question:"Kỹ thuật “đặt 5 lần câu hỏi tại sao” là nhằm mục đích gì?"
    },
    {
        answer:"The correct answer is: Xây dựng kế hoạch hành động cụ thể để triển khai giải pháp một cách hiệu quả trên thực tế",
        question:"Sau khi đã lựa chọn được giải pháp phù hợp nhất để giải quyết vấn đề thì cần phải làm gì"
    },
    {
        answer:"The correct answer is: Khi vấn đề phức tạp, nhiều biến động, khó dự báo thì nên kết hợp sử dụng cách giải quyết vấn đề cảm nhận sáng tạo và phân tích logic hệ thống",
        question:"Phương án nào dưới đây giải thích đúng nhất về việc lựa chọn phương pháp giải quyết vấn đề khi gặp vấn đề phức tạp, nhiều biến động, khó dự báo?"
    },
    {
        answer:"The correct answer is: So sánh và đặt vấn đề vào bối cảnh mới",
        question:"“Kỹ thuật ẩn dụ Metaphor” là phương pháp dùng để làm gì?"
    },
    {
        answer:"The correct answer is: Đưa ra các giải pháp",
        question:"Bước thứ hai trong quy trình giải quyết vấn đề là"
    },
    {
        answer:"The correct answer is: Xem xét khía cạnh đối diện của vấn đề",
        question:"“Kỹ thuật Janusian” là phương pháp dùng để làm gì?"
    },
    {
        answer:"The correct answer is: Có cách nhìn mới, nhìn vấn đề từ các góc độ khác nhau, đa dạng và phong phú",
        question:"Tư duy vượt ra ngoài rào cản (think outside of the box) khi giải quyết vấn đề có nghĩa là"
    }
];

const PSD = () => {
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
export default (PSD);
