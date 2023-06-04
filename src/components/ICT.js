import React from "react";
import {Link} from "react-router-dom";

const books = [
    {
        answer: `Đáp án đúng là: E-learning là một thuật ngữ dùng để mô tả việc học tập, đào tạo dựa trên công nghệ thông tin và truyền thông.
		Vì:
		Có nhiều quan điểm, định nghĩa khác nhau về e-learning, dưới đây sẽ trích ra một số định nghĩa e-learning đặc trưng nhất:
		E-learning là sử dụng các công nghệ Web và Internet trong học tập (William Horton).
		E-learning là một thuật ngữ dùng để mô tả việc học tập, đào tạo dựa trên công nghệ thông tin và truyền thông (Compare Infobase Inc).
		E-learning nghĩa là việc học tập hay đào tạo được chuẩn bị, truyền tải hoặc quản lý sử dụng nhiều công cụ của công nghệ thông tin, truyền thông khác nhau và được thực hiện ở mức cục bộ hay toàn cục (MASIE Center).
		Tham khảo: Bài 1, mục 1.2.3. Một số định nghĩa tiêu biểu về e-learning (BG, tr.9).
		`,
        question: `Theo định nghĩa của Compare Infobase Inc thì E-Learning là gì?`
    },
    {	answer: `Đáp án đúng là: Từ một dự án nghiên cứu của Bộ quốc phòng Mỹ.
		Vì: Năm 1969, hình thành mạng ARPANET. Đây là mạng máy tính do Bộ Quốc phòng Mỹ thiết lập, khi đó, cơ quan quản lý dự án nghiên cứu cấp cao của Bộ Quốc phòng Mỹ (ARPA - Advanced Research Project Agency) đã đề nghị liên kết 4 điểm bao gồm: Viện Nghiên cứu Standford, Trường Đại học tổng hợp California tại LosAngeles, UC - Santa Barbara và Trường Đại học tổng hợp Utah. Bốn điểm trên được nối thành mạng vào năm 1969 đã đánh dấu sự ra đời của Internet ngày nay. Mạng này được biết đến dưới cái tên ARPANET là một mạng thử nghiệm phục vụ các nghiên cứu quốc phòng.
		Tham khảo: Bài 1, mục 1.1.2. Lịch sử phát triển Internet (BG, tr.3).
		The correct answer is: Từ một dự án nghiên cứu của Bộ quốc phòng Mỹ.`,
        question: `Internet được hình thành từ dự án nào sau đây?`
    },
    {
        answer: `Đáp án đúng là: E-learning là sử dụng các công nghệ Web và Internet trong học tập.
		Vì:
		Có nhiều quan điểm, định nghĩa khác nhau về e-learning, dưới đây sẽ trích ra một số định nghĩa e-learning đặc trưng nhất:
		E-learning là sử dụng các công nghệ Web và Internet trong học tập (William Horton).
		E-learning là một thuật ngữ dùng để mô tả việc học tập, đào tạo dựa trên công nghệ thông tin và truyền thông (Compare Infobase Inc).
		E-learning nghĩa là việc học tập hay đào tạo được chuẩn bị, truyền tải hoặc quản lý sử dụng nhiều công cụ của công nghệ thông tin, truyền thông khác nhau và được thực hiện ở mức cục bộ hay toàn cục (MASIE Center).
		Tham khảo: Bài 1, mục 1.2.3. Một số định nghĩa tiêu biểu về e-learning (BG, tr.9).`,
        question: `Theo định nghĩa của William Horton thì E-Learning là gì?`
    },
    {
        answer: `Đáp án đúng là: Online Service Provider.
		Vì: OSP (Online Service Provider) Nhà cung cấp dịch vụ ứng dụng Internet. OSP cung cấp các dịch vụ trên cơ sở ứng dụng Internet như: mua bán qua mạng, giao dịch ngân hàng, tư vấn, đào tạo, …
		Tham khảo: Bài 1, mục 1.1.3. Phát triển Internet tại Việt Nam (BG, tr.4)`,
        question: `OSP là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer: `Đáp án đúng là: 1997
        Vì: Ngày 19/11/1997, Việt Nam hòa vào mạng Internet toàn cầu, mở đầu cho giai đoạn phát triển mạnh mẽ của Internet tại Việt Nam. Tham khảo: Bài 1, mục 1.1.3. Phát triển Internet tại Việt Nam (BG, tr.4).`,
        question: `Việt Nam hòa vào mạng Internet toàn cầu vào khoảng năm nào?`
    },
    {
        answer: `Đáp án đúng là: Internet Exchange Provider.
        Vì: IAP (Internet Access Provider) - Nhà cung cấp dịch vụ đường truyền để kết nối với Internet (còn gọi là IXP - Internet Exchange Provider).
        `,
        question: `IXP là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer: `Vì: Internet (là từ viết tắt của Inter-network) là một mạng máy tính rất lớn kết nối các mạng máy tính khác nhau trên khắp toàn cầu. Một mạng máy tính (network) là một nhóm máy tính được kết nối nhau. Các mạng máy tính này lại liên kết với nhau bằng nhiều loại phương tiện và tốc độ truyền tin khác nhau. Vì thế, có thể coi Internet như là mạng của các mạng máy tính. Các mạng này liên kết với nhau dựa trên một bộ giao thức (là ngôn ngữ giao tiếp chung giữa các máy tính) TCP/IP (Transmision Control Protocol – Internet Protocol): Giao thức điều khiển truyền dẫn - giao thức Internet. Bộ giao thức này cho phép mọi máy tính liên kết, giao tiếp với nhau theo một ngôn ngữ máy tính thống nhất giống như một ngôn ngữ quốc tế (ví dụ như Tiếng Anh) mà mọi người sử dụng để giao tiếp. Tham khảo: Bài 1, mục 1.1.1. Khái niệm về Internet (BG, tr.3).
        The correct answer is: Internet là từ viết tắt của International Terminal Network.
        `,
        question: `Khẳng định nào sau đây là sai?`
    },
    {
        answer: `Đáp án đúng là: 1969
        Vì: Năm 1969, hình thành mạng ARPANET. Đây là mạng máy tính do Bộ Quốc phòng Mỹ thiết lập, khi đó, cơ quan quản lý dự án nghiên cứu cấp cao của Bộ Quốc phòng Mỹ (ARPA - Advanced Research Project Agency) đã đề nghị liên kết 4 điểm bao gồm: Viện Nghiên cứu Standford, Trường Đại học tổng hợp California tại LosAngeles, UC - Santa Barbara và Trường Đại học tổng hợp Utah. Bốn điểm trên được nối thành mạng vào năm 1969 đã đánh dấu sự ra đời của Internet ngày nay. Mạng này được biết đến dưới cái tên ARPANET là một mạng thử nghiệm phục vụ các nghiên cứu quốc phòng.
        Tham khảo: Bài 1, mục 1.1.2. Lịch sử phát triển Internet (BG, tr.3).
        `,
        question: `Mạng ARPANET hình thành vào khoảng năm nào?`
    },
    {
        answer: `Đáp án đúng là: Electronic
        Vì: E-learning là viết tắt của từ Electronic Learning.
        Tham khảo: Bài 1, mục 1.2.1. Khái niệm về e-learning (BG, tr.8).
        `,
        question: `Chữ E trong cụm từ E-learning là viết tắt của từ tiêng Anh nào dưới đây?`
    },
    {
        answer: `Đáp án đúng là: PB1 đúng, PB2 sai.
        Vì:
        IAP là kết nối người dùng trực tiếp với Internet. IAP có thể thực hiện cả chức năng của ISP nhưng ngược lại thì không. Một IAP thường phục vụ cho nhiều ISP khác nhau.
        ICP cung cấp các thông tin về: kinh tế, giáo dục, thể thao, chính trị, quân sự (thường xuyên cập nhật thông tin mới theo định kỳ) đưa lên mạng.
        OSP cung cấp các dịch vụ trên cơ sở ứng dụng Internet như: mua bán qua mạng, giao dịch ngân hàng, tư vấn, đào tạo…
        Tham khảo: Bài 1, mục 1.1.3. Phát triển Internet tại Việt Nam (BG, tr.4).
        `,
        question: `Khi nói về chức năng của các nhà cung cấp dịch vụ Internet ở Việt Nam, có 2 phát biểu như sau:
        PB1: IAP có thể thực hiện cả chức năng của ISP nhưng ngược lại thì không.
        PB2: ICP cung cấp các dịch vụ trên cơ sở ứng dụng Internet như: mua bán qua mạng, giao dịch ngân hàng, tư vấn, đào tạo…
        Hỏi khẳng định nào sau đây là đúng?
        `
    },
    {
        answer: `Đáp án đúng là: Computer Based Training.
        Vì: Giai đoạn 1984 - 1993:
        Sự ra đời của hệ điều hành Windows 3.1, máy tính Macintosh, phần mềm trình diễn Powerpoint, cùng các công cụ đa phương tiện khác đã mở ra một kỷ nguyên mới: kỷ nguyên đa phương tiện. Những công cụ này cho phép tạo ra các bài giảng có tích hợp hình ảnh và âm thanh dựa trên công nghệ CBT (Computer Based Training). Bài học được phân phối đến người học qua đĩa CD-ROM hoặc đĩa mềm.
        Tham khảo: Bài 1, mục 1.2.2. Quá trình phát triển e-learning (BG, tr.8).
        `,
        question: `Trong quá trình phát triển E-learning, ở giai đoạn 1984-1993, có thể tạo ra các bài giảng có tích hợp hình ảnh và âm thanh dựa trên công nghệ CBT.
        CBT là viết tắt của cụm từ tiếng Anh nào?
        `
    },
    {
        answer: `Đáp án đúng là: Internet Content Provider.
        Vì: ICP (Internet Content Provider) Nhà cung cấp dịch vụ nội dung thông tin Internet. ICP cung cấp các thông tin về: kinh tế, giáo dục, thể thao, chính trị, quân sự (thường xuyên cập nhật thông tin mới theo định kỳ) đưa lên mạng.
        Tham khảo: Bài 1, mục 1.1.3. Phát triển Internet tại Việt Nam (BG, tr.4).
        `,
        question: `ICP là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer: `Đáp án đúng là: “Việc sử dụng công nghệ để tạo ra, đưa các dữ liệu có giá trị, thông tin, học tập và kiến thức với mục đích nâng cao hoạt động của tổ chức và phát triển khả năng cá nhân”.
        Vì:
        Có nhiều quan điểm, định nghĩa khác nhau về e-learning, dưới đây sẽ trích ra một số định nghĩa e-learning đặc trưng nhất:
        E-learning là sử dụng các công nghệ Web và Internet trong học tập (William Horton).
        Việc học tập được truyền tải hoặc hỗ trợ qua công nghệ điện tử. Việc truyền tải qua nhiều kĩ thuật khác nhau như Internet, TV, video tape, các hệ thống giảng dạy thông minh, và việc đào tạo dựa trên máy tính (CBT) (Sun Microsystems, Inc).
        “Việc sử dụng công nghệ để tạo ra, đưa các dữ liệu có giá trị, thông tin, học tập và kiến thức với mục đích nâng cao hoạt động của tổ chức và phát triển khả năng cá nhân”. (Định nghĩa của Lance Dublin, hướng tới e-learning trong doanh nghiệp).
        Tham khảo: Bài 1, mục 1.2.3. Một số định nghĩa tiêu biểu về e-learning (BG, tr.9).
        `,
        question: `Đâu là định nghĩa của Lance Dublin, hướng tới e-learning trong doanh nghiệp?`
    },
    {
        answer: `Đáp án đúng là: PB1 đúng, PB2 sai.
        Vì:
        Trước năm 1983: Thời kỳ này, máy tính chưa được sử dụng rộng rãi, phương pháp giáo dục “Lấy giảng viên làm trung tâm” là phương pháp phổ biến nhất trong các trường học. Sinh viên chỉ có thể trao đổi tập trung quanh giảng viên và các bạn học.
        Giai đoạn 1994-1999: Khi công nghệ Web được phát minh ra, các nhà cung cấp dịch vụ đào tạo bắt đầu nghiên cứu cách thức cải tiến phương pháp giáo dục bằng công nghệ này.
        Tham khảo: Bài 1, mục 1.2.2. Quá trình phát triển e-learning (BG, tr.8).
        `,
        question: `Khi nói về quá trình phát triển E-learning, có 2 phát biểu như sau:
        PB1: Trước năm 1983: phương pháp giáo dục “Lấy giảng viên làm trung tâm” là phương pháp phổ biến nhất trong các trường học.
        PB2: Giai đoạn 1984-1993: Khi công nghệ Web được phát minh ra, các nhà cung cấp dịch vụ đào tạo bắt đầu nghiên cứu cách thức cải tiến phương pháp giáo dục bằng công nghệ này.
        Hỏi khẳng định nào sau đây là đúng?
        `

    },
    {
        answer: `Đáp án đúng là: E-learning là một thuật ngữ dùng để mô tả việc học tập không dựa trên công nghệ thông tin và truyền thông.
Vì:
Có nhiều quan điểm, định nghĩa khác nhau về e-learning, dưới đây sẽ trích ra một số định nghĩa e-learning đặc trưng nhất:
E-learning là sử dụng các công nghệ Web và Internet trong học tập (William Horton).
E-learning là một thuật ngữ dùng để mô tả việc học tập, đào tạo dựa trên công nghệ thông tin và truyền thông (Compare Infobase Inc).
E-learning nghĩa là việc học tập hay đào tạo được chuẩn bị, truyền tải hoặc quản lý sử dụng nhiều công cụ của công nghệ thông tin, truyền thông khác nhau và được thực hiện ở mức cục bộ hay toàn cục (MASIE Center).
Tham khảo: Bài 1, mục 1.2.1. Khái niệm về e-learning (BG, tr.8) và mục 1.2.3. Một số định nghĩa tiêu biểu về e-learning (BG, tr.9).
`,
        question: `Chọn phát biểu SAI?`
    },
    {
        answer:`Đáp án đúng là: Transmision Control Protocol/ Internet Protocol.
Vì: Các mạng này liên kết với nhau dựa trên một bộ giao thức (là ngôn ngữ giao tiếp chung giữa các máy tính) TCP/IP (Transmision Control Protocol – Internet Protocol): Giao thức điều khiển truyền dẫn - giao thức Internet. Bộ giao thức này cho phép mọi máy tính liên kết, giao tiếp với nhau theo một ngôn ngữ máy tính thống nhất giống như một ngôn ngữ quốc tế (ví dụ như Tiếng Anh) mà mọi người sử dụng để giao tiếp.
Tham khảo: Bài 1, mục 1.1.1. Khái niệm về Internet (BG, tr.3).
`,
        question:`TCP/IP là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: 1974
Vì: Thuật ngữ Internet xuất hiện lần đầu vào khoảng 1974 trong khi mạng vẫn được gọi là ARPANET, mạng này còn ở qui mô rất nhỏ.
Tham khảo: Bài 1, mục 1.1.2. Lịch sử phát triển Internet (BG, tr.3).
`,
        question:`Thuật ngữ Internet xuất hiện lần đầu vào khoảng năm nào?`
    },
    {
        answer:`Đáp án đúng là: PB1 sai, PB2 đúng.
Vì:
ISP - Nhà cung cấp dịch vụ Internet cấp quyền truy cập Internet qua mạng viễn thông và các dịch vụ như: Email, Web, FTP, Telnet, Chat.
ICP cung cấp các thông tin về: kinh tế, giáo dục, thể thao, chính trị, quân sự (thường xuyên cập nhật thông tin mới theo định kỳ) đưa lên mạng.
Tham khảo: Bài 1, mục 1.1.3. Phát triển Internet tại Việt Nam (BG, tr.4).
`,
        question:`Khi nói về chức năng của các nhà cung cấp dịch vụ Internet ở Việt Nam, có 2 phát biểu như sau:
PB1: OSP cấp quyền truy cập Internet qua mạng viễn thông và các dịch vụ như: Email, Web, FTP, Telnet, Chat.
PB2: ICP cung cấp các thông tin về: kinh tế, giáo dục, thể thao, chính trị, quân sự (thường xuyên cập nhật thông tin mới theo định kỳ) đưa lên mạng.
Hỏi khẳng định nào sau đây là đúng?
`
    },
    {
        answer:`Đáp án đúng là: E-learning là một thuật ngữ dùng để mô tả việc học tập không dựa trên công nghệ thông tin và truyền thông.
Vì:
Có nhiều quan điểm, định nghĩa khác nhau về e-learning, dưới đây sẽ trích ra một số định nghĩa e-learning đặc trưng nhất:
E-learning là sử dụng các công nghệ Web và Internet trong học tập (William Horton).
E-learning là một thuật ngữ dùng để mô tả việc học tập, đào tạo dựa trên công nghệ thông tin và truyền thông (Compare Infobase Inc).
E-learning nghĩa là việc học tập hay đào tạo được chuẩn bị, truyền tải hoặc quản lý sử dụng nhiều công cụ của công nghệ thông tin, truyền thông khác nhau và được thực hiện ở mức cục bộ hay toàn cục (MASIE Center).
Tham khảo: Bài 1, mục 1.2.1. Khái niệm về e-learning (BG, tr.8) và mục 1.2.3. Một số định nghĩa tiêu biểu về e-learning (BG, tr.9).
`,
        question:`Chọn phát biểu SAI?`
    },
    {
        answer:`Đáp án đúng là: PB1 đúng, PB2 sai.
Vì:
Trước năm 1983: Thời kỳ này, máy tính chưa được sử dụng rộng rãi, phương pháp giáo dục “Lấy giảng viên làm trung tâm” là phương pháp phổ biến nhất trong các trường học. Sinh viên chỉ có thể trao đổi tập trung quanh giảng viên và các bạn học.
Giai đoạn 1994-1999: Khi công nghệ Web được phát minh ra, các nhà cung cấp dịch vụ đào tạo bắt đầu nghiên cứu cách thức cải tiến phương pháp giáo dục bằng công nghệ này.
Tham khảo: Bài 1, mục 1.2.2. Quá trình phát triển e-learning (BG, tr.8).
`,
        question:`Khi nói về quá trình phát triển E-learning, có 2 phát biểu như sau:
PB1: Trước năm 1983: phương pháp giáo dục “Lấy giảng viên làm trung tâm” là phương pháp phổ biến nhất trong các trường học.
PB2: Giai đoạn 1984-1993: Khi công nghệ Web được phát minh ra, các nhà cung cấp dịch vụ đào tạo bắt đầu nghiên cứu cách thức cải tiến phương pháp giáo dục bằng công nghệ này.
Hỏi khẳng định nào sau đây là đúng?
`
    },
    {
        answer:`Đáp án đúng là: Từ một dự án nghiên cứu của Bộ quốc phòng Mỹ.
Vì: Năm 1969, hình thành mạng ARPANET. Đây là mạng máy tính do Bộ Quốc phòng Mỹ thiết lập, khi đó, cơ quan quản lý dự án nghiên cứu cấp cao của Bộ Quốc phòng Mỹ (ARPA - Advanced Research Project Agency) đã đề nghị liên kết 4 điểm bao gồm: Viện Nghiên cứu Standford, Trường Đại học tổng hợp California tại LosAngeles, UC - Santa Barbara và Trường Đại học tổng hợp Utah. Bốn điểm trên được nối thành mạng vào năm 1969 đã đánh dấu sự ra đời của Internet ngày nay. Mạng này được biết đến dưới cái tên ARPANET là một mạng thử nghiệm phục vụ các nghiên cứu quốc phòng.
Tham khảo: Bài 1, mục 1.1.2. Lịch sử phát triển Internet (BG, tr.3).
`,
        question:`Internet được hình thành từ dự án nào sau đây?`
    },
    {
        answer:` Vì: Internet (là từ viết tắt của Inter-network) là một mạng máy tính rất lớn kết nối các mạng máy tính khác nhau trên khắp toàn cầu. Một mạng máy tính (network) là một nhóm máy tính được kết nối nhau. Các mạng máy tính này lại liên kết với nhau bằng nhiều loại phương tiện và tốc độ truyền tin khác nhau. Vì thế, có thể coi Internet như là mạng của các mạng máy tính. Các mạng này liên kết với nhau dựa trên một bộ giao thức (là ngôn ngữ giao tiếp chung giữa các máy tính) TCP/IP (Transmision Control Protocol – Internet Protocol): Giao thức điều khiển truyền dẫn - giao thức Internet. Bộ giao thức này cho phép mọi máy tính liên kết, giao tiếp với nhau theo một ngôn ngữ máy tính thống nhất giống như một ngôn ngữ quốc tế (ví dụ như Tiếng Anh) mà mọi người sử dụng để giao tiếp. Tham khảo: Bài 1, mục 1.1.1. Khái niệm về Internet (BG, tr.3).
The correct answer is: Internet là từ viết tắt của International Terminal Network.
`,
        question:`Khẳng định nào sau đây là sai?`
    },
    {
        answer:`Đáp án đúng là: Electronic
Vì: E-learning là viết tắt của từ Electronic Learning.
Tham khảo: Bài 1, mục 1.2.1. Khái niệm về e-learning (BG, tr.8).
`,
        question:`Chữ E trong cụm từ E-learning là viết tắt của từ tiêng Anh nào dưới đây?`
    },
    {
        answer:`Đáp án đúng là: Online Service Provider.
Vì: OSP (Online Service Provider) Nhà cung cấp dịch vụ ứng dụng Internet. OSP cung cấp các dịch vụ trên cơ sở ứng dụng Internet như: mua bán qua mạng, giao dịch ngân hàng, tư vấn, đào tạo, …
Tham khảo: Bài 1, mục 1.1.3. Phát triển Internet tại Việt Nam (BG, tr.4).
`,
        question:`OSP là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: Computer Based Training.
Vì: Giai đoạn 1984 - 1993:
Sự ra đời của hệ điều hành Windows 3.1, máy tính Macintosh, phần mềm trình diễn Powerpoint, cùng các công cụ đa phương tiện khác đã mở ra một kỷ nguyên mới: kỷ nguyên đa phương tiện. Những công cụ này cho phép tạo ra các bài giảng có tích hợp hình ảnh và âm thanh dựa trên công nghệ CBT (Computer Based Training). Bài học được phân phối đến người học qua đĩa CD-ROM hoặc đĩa mềm.
Tham khảo: Bài 1, mục 1.2.2. Quá trình phát triển e-learning (BG, tr.8).
`,
        question:`Trong quá trình phát triển E-learning, ở giai đoạn 1984-1993, có thể tạo ra các bài giảng có tích hợp hình ảnh và âm thanh dựa trên công nghệ CBT.
CBT là viết tắt của cụm từ tiếng Anh nào?
`
    },
    {
        answer:`Đáp án đúng là: E-learning là sử dụng các công nghệ Web và Internet trong học tập.
Vì:
Có nhiều quan điểm, định nghĩa khác nhau về e-learning, dưới đây sẽ trích ra một số định nghĩa e-learning đặc trưng nhất:
E-learning là sử dụng các công nghệ Web và Internet trong học tập (William Horton).
E-learning là một thuật ngữ dùng để mô tả việc học tập, đào tạo dựa trên công nghệ thông tin và truyền thông (Compare Infobase Inc).
E-learning nghĩa là việc học tập hay đào tạo được chuẩn bị, truyền tải hoặc quản lý sử dụng nhiều công cụ của công nghệ thông tin, truyền thông khác nhau và được thực hiện ở mức cục bộ hay toàn cục (MASIE Center).
Tham khảo: Bài 1, mục 1.2.3. Một số định nghĩa tiêu biểu về e-learning (BG, tr.9).
`,
        question:`Theo định nghĩa của William Horton thì E-Learning là gì?`
    },
    {
        answer:`Đáp án đúng là: PB1 đúng, PB2 sai.
Vì:
IAP là kết nối người dùng trực tiếp với Internet. IAP có thể thực hiện cả chức năng của ISP nhưng ngược lại thì không. Một IAP thường phục vụ cho nhiều ISP khác nhau.
ICP cung cấp các thông tin về: kinh tế, giáo dục, thể thao, chính trị, quân sự (thường xuyên cập nhật thông tin mới theo định kỳ) đưa lên mạng.
OSP cung cấp các dịch vụ trên cơ sở ứng dụng Internet như: mua bán qua mạng, giao dịch ngân hàng, tư vấn, đào tạo…
Tham khảo: Bài 1, mục 1.1.3. Phát triển Internet tại Việt Nam (BG, tr.4).
`,
        question:`Khi nói về chức năng của các nhà cung cấp dịch vụ Internet ở Việt Nam, có 2 phát biểu như sau:
PB1: IAP có thể thực hiện cả chức năng của ISP nhưng ngược lại thì không.
PB2: ICP cung cấp các dịch vụ trên cơ sở ứng dụng Internet như: mua bán qua mạng, giao dịch ngân hàng, tư vấn, đào tạo…
Hỏi khẳng định nào sau đây là đúng?
`
    },
    {
        answer:`Đáp án đúng là: Internet Content Provider.
Vì: ICP (Internet Content Provider) Nhà cung cấp dịch vụ nội dung thông tin Internet. ICP cung cấp các thông tin về: kinh tế, giáo dục, thể thao, chính trị, quân sự (thường xuyên cập nhật thông tin mới theo định kỳ) đưa lên mạng.
Tham khảo: Bài 1, mục 1.1.3. Phát triển Internet tại Việt Nam (BG, tr.4).
`,
        question:`ICP là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: Internet Exchange Provider.
Vì: IAP (Internet Access Provider) - Nhà cung cấp dịch vụ đường truyền để kết nối với Internet (còn gọi là IXP - Internet Exchange Provider).
Tham khảo: Bài 1, mục 1.1.3. Phát triển Internet tại Việt Nam (BG, tr.4).
`,
        question:`IXP là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: 1997
Vì: Ngày 19/11/1997, Việt Nam hòa vào mạng Internet toàn cầu, mở đầu cho giai đoạn phát triển mạnh mẽ của Internet tại Việt Nam. Tham khảo: Bài 1, mục 1.1.3. Phát triển Internet tại Việt Nam (BG, tr.4).
`,
        question:`Việt Nam hòa vào mạng Internet toàn cầu vào khoảng năm nào?`
    },
    {
        answer:`Đáp án đúng là: 255
Vì: Tên miền được đặt bằng các chữ số, chữ cái (a-z, A-Z, 0-9) và ký tự “-”. Một tên miền đầy đủ có chiều dài không vượt quá 255 ký tự.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Chiều dài tối đa của một tên miền đầy đủ là bao nhiêu ký tự?`
    },
    {
        answer:`Đáp án đúng là: ARP
Vì: ARP là giao thức chuyển địa chỉ IP thành địa chỉ vật lý (MAC) của các thiết bị mạng.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Đâu là giao thức chuyển địa chỉ IP thành địa chỉ vật lý của các thiết bị mạng?`
    },
    {
        answer:`Đáp án đúng là: Address Resolution Protocol.
Vì: ARP (Address Resolution Protocol) là giao thức chuyển địa chỉ IP thành địa chỉ vật lý (MAC) của các thiết bị mạng.Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`ARP là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: kết nối không dây và dịch vụ truy cập Internet tốc độ cao thông qua hoạt động của các thiết bị thu phát không dây
Vì: Khái niệm về Hotspot: Hotspot là một địa điểm mà tại đó có cung cấp các dịch vụ kết nối không dây và dịch vụ truy cập Internet tốc độ cao, thông qua hoạt động của các thiết bị thu phát không dây (Wireless Access Point).
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Hotspot là một địa điểm mà tại đó có cung cấp các dịch vụ:`
    },
    {
        answer:`Đáp án đúng là: Message Transfer Agent.
Vì: Hệ thống thư điện tử được chia làm hai phần: MUA (Mail User Agent) và MTA (Message Transfer Agent). MUA thực chất là một hệ thống làm nhiệm vụ tương tác trực tiếp với người dùng cuối, giúp họ nhận bản tin, soạn thảo bản tin, lưu các bản tin và gửi bản tin. Nhiệm vụ của MTA là định tuyến bản tin và xử lý các bản tin đến từ hệ thống của người dùng sao cho các bản tin đó đến được đúng hệ thống đích.
Tham khảo: Bài 2, mục 2.3. Một số dịch vụ Internet thông dụng (BG, tr.39).
`,
        question:`Hệ thống thư điện tử được chia làm hai phần: MUA và MTA. MTA là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: Kết nối kiểu này luôn thường trực 24/24.
Vì: Người dùng kết nối với Internet thông qua mạng điện thoại. Người dùng cần có một đường điện thoại và một thiết bị kết nối là Modem. Máy tính của người dùng kết nối với Modem và Modem được kết nối tới đường điện thoại.
Đây là phương thức kết nối chậm nhất trong số các công nghệ truy cập Internet.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Khẳng định nào sau đây là sai khi nói về phương thức kết nối quay số qua mạng điện thoại (Dial-up)?`
    },
    {
        answer:`Đáp án đúng là: Địa chỉ IP.
Vì:Các máy tính trên Internet giao tiếp với nhau sử dụng bộ giao thức TCP/IP. Để các máy tính có thể liên lạc với nhau, mỗi máy tính cần có một địa chỉ liên lạc và địa chỉ này phải là duy nhất. Bộ giao thức TCP/IP sử dụng địa chỉ IP để đánh địa chỉ cho các máy tính trong mạng.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Để các máy tính trên Internet có thể liên lạc với nhau, mỗi máy tính cần có một địa chỉ liên lạc và địa chỉ này được gọi là gì?`
    },
    {
        answer:`Đáp án đúng là: HyperText Markup Languages.
Vì: Các trang web được mã hoá bằng ngôn ngữ đánh dấu siêu văn bản HTML (HyperText Markup Languages). Ngôn ngữ HTML cho phép nhúng các liên kết siêu văn bản (còn được gọi là các siêu liên kết – hyperlink) vào trong tài liệu, các liên kết siêu văn bản là nền móng của World Wide Web.
Tham khảo: Bài 2, mục 2.3. Một số dịch vụ Internet thông dụng (BG, tr.39).
`,
        question:`HTML là tên viết tắt của cụm từ nào?`
    },
    {
        answer:`Đáp án đúng là: SMTP. Vì: SMTP (Simple Mail Transfer Protocol): Giao thức truyền thư điện tử.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Trong các giao thức sau giao thức nào là giao thức truyền thư điện tử?`
    },
    {
        answer:`Đáp án đúng là: jnto.org.fr
Vì: Tên miền vn là của quốc gia Việt Nam, còn tên miền fr là của quốc gia Pháp.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Tên miền nào sau đây KHÔNG thuộc về quốc gia Việt Nam?`
    },
    {
        answer:`Đáp án đúng là: Từ 0 đến 255.
Vì: Địa chỉ IPv4 có chiều dài 32 bit, gồm 4 octet, mỗi octet là 8 bit, có giá trị nằm trong khoảng [0..255]).
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Mỗi octet trong địa chỉ IPv4 có giá trị trong khoảng nào?`
    },
    {
        answer:`Đáp án đúng là: FTP
Vì: FTP (File Transfer Protocol): Giao thức truyền tệp. Sử dụng TCP để truyền các tệp tin giữa các hệ thống có hỗ trợ FTP.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Trong các giao thức sau giao thức nào là giao thức truyền file (tệp)?`
    },
    {
        answer:`Đáp án đúng là: 2^96
Vì: Địa chỉ IPv4 có chiều dài là 32 bit, không gian địa chỉ của IPv4 là 232 địa chỉ, và Địa chỉ IPv6 có chiều dài là 128 bit, không gian địa chỉ của IPv6 là 2128 địa chỉ.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Không gian địa chỉ IPv6 gấp bao nhiêu lần không gian địa chỉ IPv4?`
    },
    {
        answer:`Đáp án đúng là: HTTP
Vì: Dịch vụ web sử dụng giao thức HTTP (Hyper Text Transfer Protocol): Giao thức truyền siêu văn bản. Để truy nhập đến một trang web nào đó, người dùng gõ địa chỉ trang web vào thanh địa chỉ của trình duyệt web.
Tham khảo: Bài 2, mục 2.3. Một số dịch vụ Internet thông dụng (BG, tr.39).
`,
        question:`Dịch vụ web sử dụng giao thức nào?`
    },
    {
        answer:`Đáp án đúng là: Không được định tuyến trên Internet Backbone.
Vì: Địa chỉ IP công cộng (IP Public):
•Là duy nhất, có tính toàn cầu và được tiêu chuẩn hóa. → không thể có 2 máy nào kết nối vào mạng công cộng lại có cùng địa chỉ IP.
•Được lấy từ nhà cung cấp dịch vụ hay đăng ký với 1 chi phí nào đó.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Khẳng định nào sau đây là sai khi nói về địa chỉ IP công cộng?`
    },
    {
        answer:`Đáp án đúng là: 32
Vì: Địa chỉ IPv4 có chiều dài 32 bit, gồm 4 octet, mỗi octet là 8 bit, có giá trị nằm trong khoảng [0..255]). Địa chỉ IPv4 được biểu diễn dưới dạng 4 cụm số thập phân phân cách bởi dấu chấm, ví dụ 203.119.9.0.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Địa chỉ IP v4 sử dụng bao nhiêu bit để đánh địa chỉ?`
    },
    {
        answer:`Đáp án đúng là: Local Area Network.
Vì: Mạng cục bộ LAN (Local Area Network).
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Mạng cục bộ LAN là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: File Transfer Protocol.
Vì: FTP (File Transfer Protocol): Giao thức truyền tệp. Sử dụng TCP để truyền các tệp tin giữa các hệ thống có hỗ trợ FTP.Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`FTP là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: Dấu hai chấm “:”
Vì: Địa chỉ IPv6 có chiều dài 128 bit, biểu diễn dưới dạng các cụm số hexa phân cách bởi dấu:
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Các cụm số hexa trong địa chỉ Ipv6 được tách biệt với nhau bằng dấu nào?`
    },
    {
        answer:`Đáp án đúng là: Địa chỉ quảng bá.
Vì: Địachỉ dành riêng là các địa chỉ host nào đó được dành riêng và không thể gán cho các thiết bị trên mạng.
Địa chỉ quảng bá là một loại địachỉ dành riêng.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Địa chỉ IP nào không thể gán cho các thiết bị trên mạng?`
    },
    {
        answer:`Đáp án đúng là: Không gian địa chỉ IPv4 lớn hơn và dễ dàng quản lý không gian địa chỉ IPv6.
Vì: IPv6 được thiết kế với những tham vọng và mục tiêu như: Không gian địa chỉ lớn hơn và dễ dàng quản lý không gian địa chỉ, Cấu trúc định tuyến tốt hơn, Hỗ trợ bảo mật tốt hơn…
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Khẳng định nào sau đây là SAI?`
    },
    {
        answer:`Đáp án đúng là: HTML
Vì: IPX/SPX, TCP/IP, NetBEUI là các giao thức kết nối mạng.
Còn HTML (HyperText Markup Languages) là ngôn ngữ đánh dấu siêu văn bản. Ngôn ngữ HTML cho phép nhúng các liên kết siêu văn bản (còn được gọi là các siêu liên kết – hyperlink) vào trong tài liệu, các liên kết siêu văn bản là nền móng của World Wide Web.Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32) và mục 2.3. Một số dịch vụ Internet thông dụng (BG, tr.39).
`,
        question:`Đâu không phải là 1 bộ giao thức kết nối mạng ?`
    },
    {
        answer:`Đáp án đúng là: Định tuyến bản tin và xử lý các bản tin đến từ hệ thống của người dùng sao cho các bản tin đó đến được đúng hệ thống đích.
Vì: Hệ thống thư điện tử được chia làm hai phần: MUA (Mail User Agent) và MTA (Message Transfer Agent). MUA thực chất là một hệ thống làm nhiệm vụ tương tác trực tiếp với người dùng cuối, giúp họ nhận bản tin, soạn thảo bản tin, lưu các bản tin và gửi bản tin. Nhiệm vụ của MTA là định tuyến bản tin và xử lý các bản tin đến từ hệ thống của người dùng sao cho các bản tin đó đến được đúng hệ thống đích.
Tham khảo: Bài 2, mục 2.3. Một số dịch vụ Internet thông dụng (BG, tr.39).
`,
        question:`Hệ thống thư điện tử được chia làm hai phần: MUA và MTA. Chức năng của MTA là gì?`
    },
    {
        answer:`Đáp án đúng là: neu.edu.vn
Vì: Tên miền được đặt bằng các chữ số và chữ cái (a-z A-Z 0-9) và ký tự “-”.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Trong các tên dưới đây đâu là 1 tên miền hợp lệ?`
    },
    {
        answer:`Đáp án đúng là: 2
Vì: Với tên miền là: neu.edu.vn thì thành phần “neu” thường được gọi là tên miền cấp 3 (Third Level Domain Name), thành phần “edu” gọi là tên miền mức 2 (Second Level Domain Name) thành phần cuối cùng ‘vn‘ là tên miền mức cao nhất (ccTLD – Country Code Top Level Domain Name).
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Có một tên miền như sau: neu.edu.vn thì thành phần “edu” thường được gọi là tên miền cấp mấy?`
    },
    {
        answer:`Đáp án đúng là: Network File System.
Vì: NFS (Network File System): Là 1 bộ giao thức hệ thống file phân tán (được phát triển bởi Sun Microsystems) cho phép truy xuất file đến các thiết bị ở xa như 1 đĩa cứng trên mạng.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`NFS là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: ADSL
Vì: ADSL là công nghệ DSL bất đối xứng.
Còn IDSL, SDSL, HDSL là công nghệ DSL đối xứng.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Trong các công nghệ dưới đây thì đâu không phải là công nghệ “DSL đối xứng“?`
    },
    {
        answer:`Đáp án đúng là: Ký tự @
Vì: Tên miền được đặt bằng các chữ số và chữ cái (a-z A-Z 0-9) và ký tự “-“.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Khi đặt tên miền không được dùng ký tự nào dưới đây?`
    },
    {
        answer:`Đáp án đúng là: *.htm
Vì: Tất cả các Web Server đều hiểu và chạy được các file *.htm và *.html, tuy nhiên mỗi Web Server lại phục vụ một số kiểu file chuyên biệt tuỳ theo cấu hình và đặc tính của chúng, chẳng hạn như IIS của Microsoft dành cho *.asp, *.aspx… ; Apache dành cho *.php… ; Sun Java System Web Server của SUN dành cho *.jsp…
Tham khảo: Bài 2, mục 2.3. Một số dịch vụ Internet thông dụng (BG, tr.39).
`,
        question:`Tất cả các Web Server đều hiểu và chạy được file nào?`
    },
    {
        answer:`Đáp án đúng là: TCP/IP
Vì: Dial-up, Leased-Line, Wi-Fi là các phương thức truy cập Internet còn TCP/IP là bộ giao thức được dùng trong mạng Internet.Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Đâu không phải là một phương thức kết nối Internet?`
    },
    {
        answer:`Đáp án đúng là: A.B.C.D
Vì: Cấu trúc địa chỉ IPv4 là: A.B.C.D
Địa chỉ IPv4 có chiều dài 32 bit, gồm 4 octet, mỗi octet là 8 bit, có giá trị nằm trong khoảng [0..255]). Địa chỉ IPv4 được biểu diễn dưới dạng 4 cụm số thập phân phân cách bởi dấu chấm, ví dụ 203.119.9.0.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Địa chỉ IPv4 có cấu trúc như thế nào?`
    },
    {
        answer:`Đáp án đúng là: Có tốc độ download và upload bằng nhau và đều ở mức cao.
Vì: “DSL đối xứng” (SDSL, HDSL, IDSL) có tốc độ download và upload bằng nhau và đều ở mức cao.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Khẳng đinh nào sau đây là đúng khi nói về DSL đối xứng?`
    },
    {
        answer:`Đáp án đúng là: Tên miền khó nhớ hơn địa chỉ IP.
Vì: Với cấu trúc địa chỉ IP, người sử dụng sẽ khó nhớ được địa chỉ IP dẫn đến việc sử dụng dịch vụ từ một máy tính nào đó là rất khó khǎn. Để thuận tiện cho người sử dụng, một tên tượng trưng sẽ được sử dụng thay thế cho địa chỉ IP. Tên tượng trưng này được gọi là tên miền. Như vậy tên miền dễ nhớ hơn địa chỉ IP.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Trong các khẳng định sau khẳng định nào là SAI?`
    },
    {
        answer:`Đáp án đúng là: NFS
Vì: NFS (Network File System): Là 1 bộ giao thức hệ thống file phân tán (được phát triển bởi Sun Microsystems) cho phép truy xuất file đến các thiết bị ở xa như 1 đĩa cứng trên mạng.(BG, tr.14)
`,
        question:`Đâu là 1 bộ giao thức hệ thống file phân tán (được phát triển bởi Sun Microsystems) cho phép truy xuất file đến các thiết bị ở xa như 1 đĩa cứng trên mạng?`
    },
    {
        answer:`Đáp án đúng là: Là một phần mềm hệ thống được cài đặt trên máy tính của người sử dụng.
Vì: Trình duyệt Web là một phần mềm ứng dụng được cài đặt trên máy tính của người sử dụng (máy trạm). Phần mềm này cho phép người dùng duyệt các tài liệu siêu văn bản trên Web.
Tham khảo: Bài 2, mục 2.3. Một số dịch vụ Internet thông dụng (BG, tr.39).
`,
        question:`Khẳng định nào sau đây là SAI khi nói về trình duyệt web?`
    },
    {
        answer:`Đáp án đúng là: Địa chỉ IP hoặc tên miền.
Vì: Để truy nhập đến một máy chủ, người dùng có thể dùng địa chỉ IP hoặc tên miền. Tuy nhiên trên thực tế, người dùng không cần biết đến địa chỉ IP mà chỉ cần nhớ tên miền này là truy cập được.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Để truy nhập đến một máy chủ, người dùng có thể dùng?`
    },
    {
        answer:`Đáp án đúng là: Uploading lên Website.
Vì: Việc sao chép một trang lên một Web Server được gọi là tải (hoặc nạp - uploading) lên Website.
Tham khảo: Bài 2, mục 2.3. Một số dịch vụ Internet thông dụng (BG, tr.39).
`,
        question:`Việc sao chép một trang lên một Web Server được gọi là:`
    },
    {
        answer:`Đáp án đúng là: 4
Vì: Địa chỉ IPv6 có chiều dài 128 bit, biểu diễn dưới dạng các cụm số hệ mười sáu phâncách bởi dấu hai chấm (:). Mỗi phần dài 16 bit. Mỗi ký số hệ mười sáu biểu diễn bởi 4 bit → Có 16/4 bằng 4 ký số hệ 16.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Trong mỗi cụm số hệ 16 (mỗi phần) của địa chỉ IPv6 có bao nhiêu ký số hệ 16?`
    },
    {
        answer:`Đáp án đúng là: 256.168.254.50
Vì: Địa chỉ IPv4 có chiều dài 32 bit, gồm 4 octet, mỗi octet là 8 bit, có giá trị nằm trong khoảng [0..255]). Địa chỉ IPv4 được biểu diễn dưới dạng 4 cụm số thập phân phân cách bởi dấu chấm, ví dụ 203.119.9.0.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Đâu là một địa chỉ IPv4 không hợp lệ?`
    },
    {
        answer:`Đáp án đúng là: KĐ1 đúng, KĐ2 đúng.
Vì: Truy cập Internet băng rộng, thường được gọi tắt là “Internet băng rộng” hoặc “băng rộng” – là loại hình kết nối Internet tốc độ cao và luôn trong trạng thái kết nối 24/24.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Có 2 khẳng định sau:
KĐ1: là loại hình kết nối Internet tốc độ cao
KĐ2: luôn trong trạng thái kết nối 24/24.
Nhận xét nào sau đây là đúng khi nói về phương thức kết nối Internet băng rộng?
`
    },
    {
        answer:`Đáp án đúng là: Dấu chấm (.)
Vì: Để quản lý các máy đặt tại những vị trí vật lý khác nhau trên hệ thống mạng nhưng thuộc cùng một tổ chức, cùng lĩnh vực hoạt động… người ta nhóm các máy này vào một tên miền (Domain). Trong miền này nếu có những tổ chức nhỏ hơn, lĩnh vực hoạt động hẹp hơn… thì được chia thành các miền con (Sub Domain). Tên miền dùng dấu chấm (.) làm dấu phân cách. Cấu trúc miền và các miền con giống như một cây phân cấp.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Trong tên miền, dấu nào được sử dụng làm dấu phân cách?`
    },
    {
        answer:`Đáp án đúng là: Quay số qua mạng điện thoại (Dial-up).
Vì: Đây là phương thức truy cập Internet thông qua đường dây điện thoại bằng cách quay số tới số của nhà cung cấp dịch vụ Internet (chẳng hạn như quay tới số điện thoại 1260 của nhà cung cấp VNN). Trên lý thuyết, tốc độ kết nối của dial-up dao động từ 20-56Kbps, trong thực tế khó có thể đạt được tốc độ 56Kbps. Đây là phương thức kết nối chậm nhất trong số các công nghệ truy cập Internet.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Phương thức kết nối nào là chậm nhất trong số các công nghệ truy cập Internet?`
    },
    {
        answer:`Đáp án đúng là: Metropolitan Area Network.
Vì: Mạng đô thị MAN (Metropolitan Area Network).
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Mạng đô thị MAN là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: 63
Vì: Mỗi tên miền được có tối đa 63 ký tự bao gồm cả dấu “.”. Tên miền được đặt bằng các chữ số và chữ cái (a-z A-Z 0-9) và ký tự “-“.
Một tên miền đầy đủ có chiều dài không vượt quá 255 ký tự.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Một tên miền đầy đủ có chiều dài không vượt quá 255 ký tự. Vậy chiều dài tối đa của tên miền ở mỗi cấp là bao nhiêu ký tự (bao gồm cả dấu “.”)?`
    },
    {
        answer:`Đáp án đúng là: Simple Mail Transfer Protocol.
Vì: SMTP (Simple Mail Transfer Protocol): Giao thức truyền thư điện tử.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`SMTP là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: TCP/IP
Vì: IPX/SPX, TCP/IP, NetBEUI là các giao thức kết nối mạng.
Còn HTML (HyperText Markup Languages) là ngôn ngữ đánh dấu siêu văn bản. Ngôn ngữ HTML cho phép nhúng các liên kết siêu văn bản (còn được gọi là các siêu liên kết – hyperlink) vào trong tài liệu, các liên kết siêu văn bản là nền móng của World Wide Web.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32) và mục 2.3. Một số dịch vụ Internet thông dụng (BG, tr.39).
`,
        question:`Đâu là 1 bộ giao thức kết nối mạng?`
    },
    {
        answer:`Đáp án đúng là: 128
Vì: Địa chỉ IPv6 có chiều dài 128 bit, biểu diễn dưới dạng các cụm số hexa phân cách bởi dấu::, ví dụ 2001:0DC8::1005:2F43:0BCD:FFFF.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Địa chỉ IP v6 sử dụng bao nhiêu bit để đánh địa chỉ?`
    },
    {
        answer:`Đáp án đúng là: 4
Vì: Địa chỉ IPv4 có chiều dài 32 bit, gồm 4 octet, mỗi octet là 8 bit, có giá trị nằm trong khoảng [0..255]).
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Trong cách biểu diễn địa chỉ IPv4 được chia thành bao nhiêu octet?`
    },
    {
        answer:`Đáp án đúng là: Trivial FTP.Vì: TFTP (Trivial FTP): Một dạng khác của FTP nhưng dịch vụ không kết nối, dùng giao thức UDP.Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).`,
        question:`TFTP là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: Telnet. Vì: Telnet (Terminal Emulation): Cung cấp khả năng truy nhập từ xa vào các máy tính khác.Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).`,
        question:`Trong các giao thức sau giao thức nào là giao thức cung cấp khả năng truy nhập từ xa vào các máy tính khác?`
    },
    {
        answer:`Đáp án đúng là: KĐ1 sai, KĐ2 đúng.
Vì: ADSL (Asymmetrical DSL - Đường thuê bao số bất đối xứng).
Để có thể kết nối Internet bằng công nghệ ADSL, người dùng sẽ cần phải lắp đặt một modem ADSL chuyên dụng.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Có 2 khẳng định sau:
KĐ1: Đây là công nghệ DSL đối xứng
KĐ2: Để có thể kết nối Internet, người dùng sẽ cần phải lắp đặt một modem ADSL chuyên dụng.
Nhận xét nào sau đây là đúng khi nói về công nghệ ADSL?
`
    },
    {
        answer:`Đáp án đúng là: VDSL
Vì: “DSL bất đối xứng” (ADSL, RADSL, VDSL) có tốc độ tải xuống (download) nhanh nhưng tốc độ tải lên (upload) chậm hơn (nhưng vẫn ở mức có thể chấp nhận được).
Còn IDSL, SDSL, HDSL là công nghệ DSL đối xứng.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Trong các công nghệ dưới đây thì đâu là công nghệ “DSL bất đối xứng“?`
    },
    {
        answer:`Đáp án đúng là: Tên miền.
Vì: Để thuận tiện cho người sử dụng, một tên tượng trưng sẽ được sử dụng thay thế cho địa chỉ IP. Tên tượng trưng này được gọi là tên miền (Domain Name).
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Domain Name là gì?`
    },
    {
        answer:`Đáp án đúng là: 2001:0DC8::1005:2F43::ABC6
Vì: Dấu:: chỉ xuất hiện duy nhất một lần trong địa chỉ.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Đâu là 1 địa chỉ IPv6 không hợp lệ?`
    },
    {
        answer:`Đáp án đúng là: Subject
Vì: Subject: Mô tả ngắn gọn nội dung của email.
Cc: Các địa chỉ người nhận email ngoài người nhận chính ở trường “To:”.
Bcc: Các địa chỉ người nhận email bí mật, khi người gửi không muốn các người nhận ở trường “To:” và “Cc:” biết.
Thân email (Body): chứa nội dung của email.
Tham khảo: Bài 2, mục 2.3. Một số dịch vụ Internet thông dụng (BG, tr.39).
`,
        question:`Mục nào trong cấu trúc của một email mô tả ngắn gọn nội dung của email?`
    },
    {
        answer:`Đáp án đúng là: Reverse Address Resolution Protocol.
Vì: RARP (Reverse Address Resolution) là giao thức chuyển địa chỉ vật lý MAC thành địa chỉ mạng IP.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`RARP là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: Mail User Agent.
Vì: Hệ thống thư điện tử được chia làm hai phần: MUA (Mail User Agent) và MTA (Message Transfer Agent). MUA thực chất là một hệ thống làm nhiệm vụ tương tác trực tiếp với người dùng cuối, giúp họ nhận bản tin, soạn thảo bản tin, lưu các bản tin và gửi bản tin. Nhiệm vụ của MTA là định tuyến bản tin và xử lý các bản tin đến từ hệ thống của người dùng sao cho các bản tin đó đến được đúng hệ thống đích.
Tham khảo: Bài 2, mục 2.3. Một số dịch vụ Internet thông dụng (BG, tr.39).
`,
        question:`Hệ thống thư điện tử được chia làm hai phần: MUA và MTA. MUA là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: 2001:0DC8::1005:2F43:0BCD:ABC6
Vì: Địa chỉ IPv6 có chiều dài 128 bit, biểu diễn dưới dạng các cụm số hexa phân cách bởi dấu:, ví dụ 2001:0DC8::1005:2F43:0BCD:FFFF
Rút gọn địa chỉ IPv6 (2 cách): Bỏ các số 0 đứng đầu, Thay thế nhiều nhóm số 0 thành một dấu::
Ví dụ rút gọn địa chỉ IPv6: ADBF:0000:0000:0000:0000:000A:00AB:0AC
Rút gọn theo cách 1: ADBF:0:0:0:0:A:AB:ACD
Rút gọn theo cách 2: ADBF::A:AB:ACD
Chú ý: Dấu:: chỉ xuất hiện duy nhất một lần trong địa chỉ.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Đâu là 1 địa chỉ IPv6 hợp lệ?`
    },
    {
        answer:`Đáp án đúng là: 2
Vì: Có 2 phiên bản địa chỉ IP là IPv6 và IPv4.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Có mấy phiên bản địa chỉ IP?`
    },
    {
        answer:`Đáp án đúng là: Wireless Fidelity.
Vì: Wi-Fi là tên viết tắt của cụm từ “Wireless Fidelity” - một tập hợp các chuẩn tương thích với mạng không dây nội bộ (WLAN) dựa trên đặc tả IEEE 802.11 (802.11a, 802.11b, 802.11g…). Wi-Fi cho phép các máy tính hoặc PDA (Personal Digital Assistant, thiết bị cá nhân kỹ thuật số) hỗ trợ kết nối không dây có thể truy cập vào mạng Internet trong phạm vi phủ sóng của điểm truy cập không dây (hay còn gọi là “hotspot”).
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Wi-Fi là tên viết tắt của cụm từ nào?`
    },
    {
        answer:`Đáp án đúng là: Để kết nối, người dùng cần có một đường điện thoại và một modem.
Vì: Người dùng kết nối với Internet thông qua mạng điện thoại. Người dùng cần có một đường điện thoại và một thiết bị kết nối là Modem. Máy tính của người dùng kết nối với Modem và Modem được kết nối tới đường điện thoại.
Đây là phương thức kết nối chậm nhất trong số các công nghệ truy cập Internet.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Khẳng định nào sau đây là đúng khi nói về phương thức kết nối quay số qua mạng điện thoại (Dial-up)?`
    },
    {
        answer:`Đáp án đúng là: IDSL
Vì: “DSL bất đối xứng” (ADSL, RADSL, VDSL) có tốc độ tải xuống (download) nhanh nhưng tốc độ tải lên (upload) chậm hơn (nhưng vẫn ở mức có thể chấp nhận được).
IDSL là công nghệ DSL đối xứng.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Trong các công nghệ dưới đây thì đâu không phải là công nghệ “DSL bất đối xứng“?`
    },
    {
        answer:`Đáp án đúng là: neu.edu&vn
Vì: Tên miền được đặt bằng các chữ số và chữ cái (a-z A-Z 0-9) và ký tự “-”.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Trong các tên dưới đây đâu là 1 tên miền không hợp lệ?`
    },
    {
        answer:`Đáp án đúng là: Domain Name System.
Vì: Hệ thống DNS (Domain Name System) ra đời nhằm giúp chuyển đổi từ địa chỉ IP khó nhớ mà máy sử dụng sang một tên dễ nhớ cho người sử dụng, đồng thời giúp hệ thống Internet ngày càng phát triển.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Hệ thống quản lý tên miền DNS là viết tắt của cụm từ tiêng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: 1
Vì: Dấu::chỉ xuất hiện duy nhất 1 lần trong địa chỉ IPv6.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Dấu:: xuất hiện tối đa là bao nhiêu lần trong địa chỉ IPv6?`
    },
    {
        answer:`Đáp án đúng là: RARP
Vì: RARP là giao thức chuyển địa chỉ vật lý MAC thành địa chỉ mạng IP.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Đâu là giao thức chuyển địa chỉ vật lý thành địa chỉ IP?`
    },
    {
        answer:`Đáp án đúng là: KĐ1 sai, KĐ2 sai.
Vì: “DSL bất đối xứng” (ADSL, RADSL, VDSL) có tốc độ tải xuống (download) nhanh nhưng tốc độ tải lên (upload) chậm hơn (nhưng vẫn ở mức có thể chấp nhận được).
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Cho 2 khẳng định sau:
KĐ1: DSL bất đối xứng có tốc độ tải xuống (download) chậm.
KĐ2: DSL bất đối xứng có tốc độ tải lên (upload) nhanh.
`
    },
    {
        answer:`Đáp án đúng là: Wide Area Network.
Vì: Mạng diện rộng WAN (Wide Area Network).
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Mạng diện rộng WAN là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: Leased-Line
Vì: Dial-up, Leased-Line, Wi-Fi là các phương thức truy cập Internet.
Còn TCP/IP, NetBEUI, IPX/SPX là bộ giao thức kết nối mạng.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Đâu là một phương thức kết nối Internet?`
    },
    {
        answer:`Đáp án đúng là: 192.168.10.6
Vì: Địa chỉ IPv4 có chiều dài 32 bit, gồm 4 octet, mỗi octet là 8 bit, có giá trị nằm trong khoảng [0..255]). Địa chỉ IPv4 được biểu diễn dưới dạng 4 cụm số thập phân phân cách bởi dấu chấm, ví dụ 203.119.9.0.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Đâu là một địa chỉ IPv4 hợp lệ?`
    },
    {
        answer:`Đáp án đúng là: Thông_tin_người_dùng@thông_tin_tên_miền
Vì: Địa chỉ tên miền có khuôn dạng như sau:
Thông_tin_người_dùng@thông_tin_tên_miền
Phần “thông_tin_tên_miền” gồm một xâu các nhãn cách nhau bởi một dấu chấm (.).
Ví dụ: trana@neu-edutop.edu.vn
Tham khảo: Bài 2, mục 2.3. Một số dịch vụ Internet thông dụng (BG, tr.39).
`,
        question:`Đâu là khuôn dạng của địa chỉ miền (Domain-Base Address)?`
    },
    {
        answer:`Đáp án đúng là: 8
Vì: Địa chỉ IPv6 có chiều dài 128 bit, biểu diễn dưới dạng các cụm số hệ mười sáu phâncách bởi dấu hai chấm (:). Mỗi phần dài 16 bit → Có 128/16 bằng 8 cụm số hệ 16.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Địa chỉ IPv6 biểu diễn dưới dạng bao nhiêu cụm số hệ mười sáu phân cách bởi dấu hai chấm (:)?`
    },
    {
        answer:`Đáp án đúng là: KĐ1 đúng, KĐ2 sai.
Vì: HDSL (High Bit Rate DSL): Có tốc độ kết nối cao hơn ADSL nhưng không cho phép chia sẻ chung với đường điện thoại.
Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Có 2 khẳng định sau:
KĐ1: Có tốc độ kết nối cao hơn ADSL
KĐ2: Cho phép chia sẻ chung với đường điện thoại
Nhận xét nào sau đây là đúng khi nói về công nghệ HDSL?
`
    },
    {
        answer:`Đáp án đúng là: TCP/IP
Vì: Dial-up, Leased-Line, Wi-Fi là các phương thức truy cập Internet còn TCP/IP là bộ giao thức được dùng trong mạng Internet.Tham khảo: Bài 2, mục 2.1. Kiến trúc mạng Internet (BG, tr.14).
`,
        question:`Đâu không phải là một phương thức kết nối Internet?`
    },
    {
        answer:`Đáp án đúng là: 4
Vì: Địa chỉ IPv6 có chiều dài 128 bit, biểu diễn dưới dạng các cụm số hệ mười sáu phâncách bởi dấu hai chấm (:). Mỗi phần dài 16 bit. Mỗi ký số hệ mười sáu biểu diễn bởi 4 bit → Có 16/4 bằng 4 ký số hệ 16.
Tham khảo: Bài 2, mục 2.2. Địa chỉ IP và tên miền (BG, tr.32).
`,
        question:`Trong mỗi cụm số hệ 16 (mỗi phần) của địa chỉ IPv6 có bao nhiêu ký số hệ 16?`
    },
    {
        answer:`Đáp án đúng là: Attach Files
Vì: Sau khi soạn xong nội dung thư, bạn cũng có thể đính kèm nhiều tệp tin với thư. Bạn thực hiện các bước sau:
(1) Nhấp nút Attach Files.
(2) Chọn tệp tin đính kèm rồi nhấp Open.
Sau khi nhấp Open, Yahoo sẽ bắt đầu đính kèm file.
Tham khảo: Bài 3, mục 4.2. Dịch vụ thư điện tử (BG, tr.113).
`,
        question:`Khi sử dụng Mail để đính kèm tệp tin bạn bấm vào nút nào sau đây?`
    },
    {
        answer:`Khi sử dụng Mail để đính kèm tệp tin bạn bấm vào nút nào sau đây?`,
        question:`Dịch vụ Telnet là gì?`
    },
    {
        answer:`Đáp án đúng là: Click chuột phải vào liên kết, sau đó chọn Open in New Window.
Vì: Sau khi hiển thị trang web, bạn có thể bấm chuột vào các liên kết trên trang web để xem tiếp các nội dung bên trong. Khi bạn bấm chuột vào một liên kết và nếu liên kết này kết nối tới một trang web khác thì trang web khác này sẽ được hiển thị trong cửa sổ và nội dung trang web trước bị thay thế. Nếu không muốn nội dung của các trang web sau hiện lên cửa sổ đang xem, bạn có thể sử dụng tính năng mở trang web trên một cửa sổ mới. Để thực hiện điều này, nhấp chuột phải vào siêu liên kết tới trang web muốn mở. Một thực đơn hiện ra. Chọn Open in New Window.
Tham khảo: Bài 3, mục 4.1. Dịch vụ World Wide Web (BG, tr.67).
`,
        question:`Sau khi hiển thị trang web, bạn có thể bấm chuột vào các liên kết trên trang web để xem tiếp các nội dung bên trong. Nếu muốn nội dung của các trang Web sau hiển thị trong một cửa sổ mới bạn làm như thế nào?`
    },
    {
        answer:`Đáp án đúng là: Subject
Vì: Bạn điền chủ đề của bức thư vào trong ô Subject.
Tham khảo: Bài 3, mục 4.2. Dịch vụ thư điện tử (BG, tr.113).
`,
        question:`Khi sử dụng dịch vụ thư điện tử, ô nào dưới đây chứa thông tin về chủ đề của bức thư?`
    },
    {
        answer:`Gmail cung cấp dịch vụ cho mọi người dùng chứ ko chỉ giới hạn cho một nhóm đối tượng nào.
The correct answer is: Sau khi đăng nhập Email của Google, sinh viên có thể đọc thư, trả lời thư; chuyển tiếp thư; và xóa thư do người khác gửi tới.
`,
        question:`Chọn khẳng định đúng nhất?`
    },
    {
        answer:`Đáp án đúng là: IDM
Vì: IDM là viết tắt của Internet Download Manager, là một trong những phần mềm tải tệp tin tốt nhất hiện nay.
Tham khảo: Bài 3, mục 4.1.3. Một số công cụ tải tập tin từ website (BG, tr.93).
`,
        question:`Chương trình nào dưới đây cho phép bạn tải tệp tin từ Intenet xuống máy tính của bạn?`
    },
    {
        answer:`Đáp án đúng là: Outlook
Vì: Outlook Express là chương trình nằm trong bộ Office của Microsoft có chức năng gửi và nhận thư điện tử.
Tham khảo: Bài 3, mục 4.2. Dịch vụ thư điện tử (BG, tr.113).
`,
        question:`Trong số các chương trình gửi và nhận thư điện tử dưới đây, chương trình nào được phát triển bởi Microsoft?`
    },
    {
        answer:`Phương án đúng là: “kinh tế” +“quốc dân”; đây là quy định của google`,
        question:`Khi sử dụng công cụ tìm kiếm Google, nếu muốn kết quả trả về là các trang Web vừa chứa cụm từ: kinh tế, vừa chứa cụm từ quốc dân thì trong ô tìm kiếm bạn nhập vào từ khóa nào sau đây?`
    },
    {
        answer:`Phương án đúng là: Là dịch vụ thiết lập sự liên hệ giữa MTĐT của ta với một máy chủ ở xa để người dùng có thể sử dụng khả năng xử lý của máy chủ đó.`,
        question:`Dịch vụ Telnet trên mạng Internet là gì?`
    },
    {
        answer:`Đáp án đúng là: POP/IMAP
Vì: POP/IMAP là giao thức cho phép Outlook có thể gửi/nhận, chuyển tiếp thư điện tử. 03 giao thức còn lại không phải giao thức gửi nhận thư.
Tham khảo: Bài 3, mục 4.2. Dịch vụ thư điện tử (BG, tr.113).
`,
        question:`Giao thức nào dưới đây được sử dụng để truyền tải thư điện tử của MicroSoft Outlook?`
    },
    {
        answer:`Đáp án đúng là: Bcc
Vì: Cc: viết tắt của cụm từ carbon copy (bản sao). Bất cứ người nào được nhập vào mục Cc: của email sẽ nhận một bản sao email đó khi bạn gửi đi. Mọi người nhận email khác có thể nhìn thấy người nhận mà bạn đã chọn làm người nhận Cc: đã nhận một bản sao email đó.
Bcc: viết tắt của cụm từ blind carbon copy (bản sao ẩn). Mục này tương tự như chức năng Cc:, ngoại trừ những người nhận Bcc: không được mọi người nhận email khác nhìn thấy (kể cả những người nhận Bcc: khác).
Tham khảo: Bài 3, mục 4.2. Dịch vụ thư điện tử (BG, tr.113).
`,
        question:`Anh An muốn đồng gửi bức thư điện tử tới anh Hải và chị Huệ, tuy nhiên anh An không muốn chị Huệ biết mình đã gửi bức thư này cho anh Hải. Khi đó anh An phải nhập địa chỉ email của anh Hải vào ô nào?`
    },
    {
        answer:`Đáp án đúng là: Chỉnh sửa nội dung trang Web.
Vì: Trong quá trình duyệt Web bạn không thể chỉnh sửa nội dung trang web. Việc chỉnh sửa này chỉ được thực hiện bởi người quản trị trang Web.
Tham khảo: Bài 3, mục 4.1. Dịch vụ World Wide Web (BG, tr.67).
`,
        question:`Trong quá trình duyệt Web, bạn không thể thực hiện thao tác nào dưới đây?`
    },
    {
        answer:`Đáp án đúng là: IDM
Vì: Các phần mềm chat phổ biến hiện nay là: Yahoo Messenger, Windows Live Messenger và Skype.
IDM: Internet Download Manager là phần mềm dùng để tải tệp tin.
Tham khảo: Bài 3, mục 4.3. Dịch vụ Chat (BG, tr.166).
`,
        question:`Trong số các phần mềm sau, phần mềm nào không hỗ trợ chức năng chat?`
    },
    {
        answer:`Đáp án đúng là: “kinh tế” site:com
Vì: Sử dụng từ khóa site để tìm kiếm các trang web theo tên miền, mặt khác các trang web thương mại có tên miền là .com, nên từ khóa cần tìm là: “kinh tế” site:com
Tham khảo: Bài 3, mục 4.1.2. Tìm kiếm thông tin (BG, tr.82).
`,
        question:`Khi sử dụng Google, nếu bạn chỉ muốn tìm kiếm các trang web thương mại mà có chứa cụm từ kinh tế thì trong ô tìm kiếm bạn gõ vào từ khóa nào sau đây?`
    },
    {
        answer:`Đáp án đúng là: Dịch vụ Chat.
Vì: Để có thể trò chuyện trực tuyến với bạn bè trên Internet chúng ta sử dụng dịch vụ Chat. Để sử dụng dịch vụ này máy tính của bạn cần cài đặt phần mềm chat, ví dụ như: Yahoo Messenger.
Tham khảo: Bài 3, mục 4.3. Dịch vụ Chat (BG, tr.166).
`,
        question:`Để có thể trò chuyện trực tuyến với bạn bè trên Internet bạn sử dụng dịch vụ nào sau đây?`
    },
    {
        answer:`Đáp án đúng là: Inbox
Vì: Thư mục Inbox chứa các thư được gửi đến cho bạn.
Thư mục Sent chứa các thư mà bạn đã gửi đi.
Thư mục Drafts chứa các thư nháp của bạn.
Tham khảo: Bài 3, mục 4.2. Dịch vụ thư điện tử (BG, tr.113).
`,
        question:`Khi sử dụng ứng dụng Mail, thư mục nào dưới đây chứa các thư được gửi đến cho bạn?`
    },
    {
        answer:`Đáp án đúng là: IDM
Vì: Những nhà cung cấp Webmail phổ biến nhất hiện nay là Yahoo Mail, Gmail. Outlook Express là chương trình nằm trong bộ Office có chức năng gửi và nhận thư điện tử.
Tham khảo: Bài 3, mục 4.2. Dịch vụ thư điện tử (BG, tr.113).
`,
        question:`Chương trình nào dưới đây KHÔNG cho phép bạn gửi và nhận thư điện tử?`
    },
    {
        answer:`Đáp án đúng là: Sent
Vì: Thư mục Inbox chứa các thư được gửi đến cho bạn.
Thư mục Sent chứa các thư mà bạn đã gửi đi.
Thư mục Drafts chứa các thư nháp của bạn.
Tham khảo: Bài 3, mục 4.2. Dịch vụ thư điện tử (BG, tr.113).
`,
        question:`Khi sử dụng phần mềm Mail, thư mục nào dưới đây chứa các thư bạn đã gửi đi?`
    },
    {
        answer:`Đáp án đúng là: Instant Message.
Vì: Hiện nay trên Internet có rất hai hình thức Chat phổ biến là: Web Chat và Instant Message (IM). IM sử dụng khá phổ biến, được các nhà cung cấp lớn như Yahoo, Skype… cung cấp.
Tham khảo: Bài 3, mục 4.3. Dịch vụ Chat (BG, tr.166).
`,
        question:`IM là viết tắt của từ tiếng Anh nào dưới đây?`
    },
    {
        answer:`Đáp án đúng là: Vấn đề bảo mật thư hoàn toàn phụ thuộc vào nhà cung cấp.
Vì: Một số nhược điểm của Webmail:
Không có hỗ trợ từ nhà cung cấp;
Kích thước hộp thư bị hạn chế;
Tính riêng tư và bảo mật phụ thuộc vào nhà cung cấp;
Tốc độ nhận và gửi thư chậm.
Tham khảo: Bài 3, mục 4.2. Dịch vụ thư điện tử (BG, tr.113).
`,
        question:`Khi sử dụng các dịch vụ Webmail, khẳng định nào sau đây là đúng?`
    },
    {
        answer:`Đáp án đúng là: Biểu tượng Internet Explorer.
Vì: Thực hiện một trong hai cách sau để khởi động trình duyệt web:
Nhấp đúp chuột vào biểu tượng Internet Explorer trên màn hình nền.
Nhấp START, chọn Programs, chọn Internet Explorer.
Sau khi khởi động, cửa số chương trình Internet Explorer sẽ hiển thị.
Tham khảo: Bài 3, mục 4.1. Dịch vụ World Wide Web (BG, tr.67).
`,
        question:`Để khởi động trình duyệt web, bạn nhắp (click) chuột vào biểu tượng nào sau đây?`
    },
    {
        answer:`Đáp án đúng là: To
Vì: Để gửi thư cho một người nào đó bạn cần nhập địa chỉ email của người đó vào trong ô To.
Tham khảo: Bài 3, mục 4.2. Dịch vụ thư điện tử (BG, tr.113).
`,
        question:`Anh Minh muốn gửi một bức thư điện tử tới chị Nga. Anh Minh sẽ điền địa chỉ email của chị Nga vào trong ô nào dưới đây?`
    },
    {
        answer:`Phương án đúng là: Máy tìm kiếm không phân biệt chữ hoa và chữ thường trong câu điều kiện.Đây là quy định để tạo sự thuận tiện cho người dùng.`,
        question:`Chọn khẳng định đúng?`
    },
    {
        answer:`Đáp án đúng là: Để lấy dữ liệu từ trên mạng Internet xuống máy tính của bạn.
Vì: Dịch vụ tải tệp tin cho phép bạn tải các tệp tin trên Internet xuống máy tính của bạn. Dịch vụ này thường được sử dụng khi bạn muốn tải một chương trình ứng dụng miễn phí hoặc một file tài liệu trên mạng…
Tham khảo: Bài 3, mục 4.1.3. Một số công cụ tải tập tin từ website (BG, tr.93).
`,
        question:`Dịch vụ tải tệp tin được dùng để làm gì?`
    },
    {
        answer:`Phương án đúng là Chương trình duyệt Web (Web Browser). Vì đấy là chức năng chỉnh của trình duyệt web.`,
        question:`Để đọc các trang siêu văn bản người ta thường sử dụng ?`
    },
    {
        answer:`Đáp án đúng là: Chỉ có các trang có từ Kinh, các trang có từ tế, các trang có từ quốc và các trang có từ dân sẽ được hiển thị.
Vì: Trong ô tìm kiếm nếu bạn gõ vào: Kinh tế quốc dân thì máy sẽ tìm các trang có từ Kinh, các trang có từ tế, các trang có từ quốc và các trang có từ dân. Sở dĩ như vậy vì ở đây máy tìm kiếm sẽ tách cụm từ trên thành 4 từ đơn và sẽ tìm theo từng từ đơn này.
Tham khảo: Bài 3, mục 4.1.2. Tìm kiếm thông tin (BG, tr.82).
`,
        question:`Trong ô tìm kiếm nếu bạn gõ vào: Kinh tế quốc dân thì kết quả trả về sẽ là gì?`
    },
    {
        answer:`Đáp án đúng là: Dịch vụ World Wide Web.
Vì: Web là một trong những dịch vụ Internet được sử dụng phổ biến nhất hiện nay. Nó cho phép bạn xem các trang tài liệu siêu văn bản (trang web) trên Internet. Để xem trang web, máy tính của bạn cần có một chương trình được gọi tên là trình duyệt web (Web Browser).
Tham khảo: Bài 3, mục 4.1. Dịch vụ World Wide Web (BG, tr.67).
`,
        question:`Để xem các trang tài liệu siêu văn bản (trang web) trên Internet, bạn sử dụng dịch vụ nào sau đây?`
    },
    {
        answer:`Phương án đúng là: Địa chỉ WebSite dưới dạng URL (địa chỉ nguồn thống nhất). Tương tự như địa chỉ thư điện tử hay địa chỉ nhà nếu bạn muốn gửi thư.`,
        question:`Để một máy tính nối mạng truy cập được đến một WebSite cụ thể cần biết thông tin gì?`
    },
    {
        answer:`Đáp án đúng là: Safari
Vì: Safari là một trình duyệt web, không phải là website hỗ trợ tìm kiếm trực tuyến. Trong khi đó, Google, Yahoo, Lycos là các website hỗ trợ công cụ tìm kiếm thông tin trực tuyến trên internet.
Tham khảo: Bài 3, mục 4.1.2. Tìm kiếm thông tin (BG, tr.82).
`,
        question:`Trang web nào không hỗ trợ tìm kiếm trực tuyến?`
    },
    {
        answer:`Đáp án đúng là: Dịch vụ diễn đàn.
Vì: Diễn đàn (Forum) là dịch vụ cho phép người dùng chia sẻ thông tin về những vấn đề cùng quan tâm thông qua việc tạo chủ đề, đăng bài, phản hồi…
Tham khảo: Bài 3, mục Tóm lược cuối bài (BG, tr.180).
`,
        question:`Để chia sẻ thông tin về những vấn đề cùng quan tâm thông qua việc tạo chủ đề, đăng bài, phản hồi… bạn sử dụng dịch vụ nào sau đây?`
    },
    {
        answer:`Đáp án đúng là: SnagIt
Vì: Trong các phần mềm trên thì: IDM (Internet Download Manager); Free YouTube Downloader và Flashget là các phần mềm dùng để tải tệp tin trên Internet. Còn SnagIt là phần mềm dùng để chụp ảnh màn hình.
Tham khảo: Bài 3, mục 4.1.3. Một số công cụ tải tập tin từ website (BG, tr.93).
`,
        question:`Trong số các phần mềm sau, đâu không phải là phần mềm hỗ trợ tải tệp tin?`
    },
    {
        answer:`Đáp án đúng là: “kinh tế” filetype:doc
Vì: Bạn sử dụng từ khóa filetype để chỉ cho Google biết dịnh dạng dữ liệu mà bạn muốn tìm.
Tham khảo: Bài 3, mục 4.1.2. Tìm kiếm thông tin (BG, tr.82).
`,
        question:`Khi sử dụng Google, nếu bạn muốn tìm kiếm các văn bản có đuôi .doc mà có chứa cặp từ kinh tế thì trong ô tìm kiếm bạn gõ vào từ khóa nào sau đây?`
    },
    {
        answer:`Đáp án đúng là: Có thể tìm kiếm bằng từ khóa tiếng Việt trong Google.
Vì: Sử dụng dấu cộng (+) để tìm kiếm kết hợp; dấu trừ (-) để tìm kiếm loại trừ và dấu nháy kép (“”) để tìm kiếm chính xác. Bạn có thể sử dụng các phần mềm Unikey, Vietkey để tìm kiếm theo từ khóa tiếng Việt.
Tham khảo: Bài 3, mục 4.1.2. Tìm kiếm thông tin (BG, tr.82).
`,
        question:`Khẳng định nào dưới đây là đúng?`
    },
    {
        answer:`Đáp án đúng là: Dấu cộng (+)
Vì: Bạn có thể sử dụng dấu “+” để tìm kiếm sao cho nội dung trang kết quả vừa có từ khóa này, vừa có từ khóa kia. Chẳng hạn bạn gõ: “kinh tế” +“quốc dân” để tìm những trang web vừa có cụm từ “kinh tế”, vừa có cụm từ “quốc dân”.
Tham khảo: Bài 3, mục 4.1.2.2. Tìm kiếm thông tin với Google (BG, tr. 86).
`,
        question:`Khi tìm kiếm bằng Google để tìm kiếm kết hợp bạn sử dụng dấu nào?`
    },
    {
        answer:`Đáp án đúng là: Danh bạ.
Vì: Để ghi nhớ địa chỉ email của người nào đó, bạn nên lưu địa chỉ của người đó vào trong sổ địa chỉ dưới dạng tên thông thường. Khi đó khi muốn gửi thư cho người đó, bạn chỉ cần nhập tên người đó, chương trình YahooMail sẽ tự động điền địa chỉ email tương ứng.
Tham khảo: Bài 3, mục 4.2. Dịch vụ thư điện tử (BG, tr.113).
`,
        question:`Việc ghi nhớ địa chỉ email của người khác là khá khó khăn. Chức năng nào dưới đây của dịch vụ Mail hỗ trợ bạn trong việc ghi nhớ địa chỉ email?`
    },
    {
        answer:`Đáp án đúng là: Dấu nháy kép (“”) Vì: Để máy tìm kiếm biết bạn muốn tìm chính xác cụm từ, thì bạn cần đặt cụm từ đó vào trong dấu “”. Ví dụ để tìm kiếm chính xác cụm từ đào tạo máy tính thì trong ô tìm kiếm bạn gõ vào: “đào tạo máy tính” rồi ấn nút rồi nhấn nút “Search” hoặc nút “Tìm” tùy theo website bạn sử dụng. Tham khảo: Bài 3, mục 4.1.2.2. Tìm kiếm thông tin với Google (BG, tr. 86).`,
        question:`Khi tìm kiếm bằng Google để tìm kiếm chính xác bạn sử dụng dấu nào?`
    },
    {
        answer:`Đáp án đúng là: Internet Explorer.
Vì: Trình duyệt Internet Explorer là một phần mềm được cài đặt sẵn trên hệ điều hành Windows. Mục đích của phần mềm này giúp bạn duyệt web dễ dàng và hiệu quả.
Tham khảo: Bài 3, mục 4.1. Dịch vụ World Wide Web (BG, tr.67).
`,
        question:`Đâu là tên của trình duyệt Web?`
    },
    {
        answer:`Đáp án đúng là: Tìm kiếm từ trái nghĩa.
Vì: Sử dụng dấu cộng (+) để tìm kiếm kết hợp; dấu trừ (-) để tìm kiếm loại trừ và dấu nháy kép (“”) để tìm kiếm chính xác, dấu (~) để tìm từ đồng nghĩa.
Tham khảo: Bài 3, mục 4.1.2. Tìm kiếm thông tin (BG, tr.82).
`,
        question:`Google KHÔNG hỗ trợ cách tìm kiếm nào dưới đây?`
    },
    {
        answer:`Phương án đúng là: “kinh tế quốc dân”, đây là quy định của goole`,
        question:`Khi sử dụng công cụ tìm kiếm Google, nếu muốn kết quả trả về là các trang Web chỉ chứa cụm từ: kinh tế quốc dân, thì trong ô tìm kiếm bạn nhập vào từ khóa nào sau đây?`
    },
    {
        answer:`Đáp án đúng là: Tổng dung lượng tệp tin đính kèm theo thư mỗi lần gửi bị giới hạn.
Vì: Dùng Webmail có một số ưu điểm, đó là:
Miễn phí: Gần như tất cả các dịch vụ Webmail đều miễn phí.
Có khả năng truy cập ở bất cứ nơi nào: Khi người sử dụng có thể truy nhập Internet và có trình duyệt Web là có khả năng sử dụng hộp thư Webmail.
Sử dụng đơn giản: Không cần phải cài đặt các thông số khi sử dụng. Chương trình email được trình bày sẵn do nhà cung cấp Webmail thiết kế, thống nhất trên mọi máy tính và mọi hệ điều hành.
Tham khảo: Bài 3, mục 4.2. Dịch vụ thư điện tử (BG, tr.113).
`,
        question:`Đâu là nhược điểm của các dịch vụ thư điện tử trên web (webmail)?`
    },
    {
        answer:`Đáp án đúng là: PB1 đúng, PB2 sai.
Vì: Các chuẩn và đặc tả là thành phần kết nối tất cả các thành phần của hệ thống e-learning. LMS, LCMS, công cụ soạn bài giảng, và kho chứa bài giảng sẽ hiểu nhau và tương tác được với nhau thông qua các chuẩn/đặc tả.
Các chuẩn cho phép ghép các khóa học tạo bởi các công cụ khác nhau bởi các nhà sản xuất khác nhau thành các gói nội dung (packages) được gọi là các chuẩn đóng gói (packaging standards).
Tham khảo: Bài 4, mục 3.2.2. Các chuẩn và đặc tả cho hệ thống e-learning (BG, tr.53).
`,
        question:`Khi nói về các chuẩn và đặc tả cho hệ thống e-learning, có 2 phát biểu như sau:
PB1: Các chuẩn và đặc tả là thành phần kết nối tất cả các thành phần của hệ thống e-learning.
PB2: Các chuẩn cho phép ghép các khóa học tạo bởi các công cụ khác nhau bởi các nhà sản xuất khác nhau thành các gói nội dung được gọi là các chuẩn metadata.
Hỏi khẳng định nào sau đây là đúng?
`
    },
    {
        answer:`Đáp án đúng là: LCMS không cho phép người dùng tạo ra và sử dụng lại những đơn vị nội dung nhỏ trong kho dữ liệu trung tâm.
Vì:LMS là một hệ thống dịch vụ quản lý việc phân phối và tìm kiếm nội dung học tập cho người học, tức là LMS quản lý các quá trình học tập.
LMS cần trao đổi thông tin về hồ sơ người sử dụng và thông tin đăng nhập của người sử dụng với các hệ thống khác. LMS lấy thông tin về vị trí của khoá học từ LCMS và về các hoạt động của sinh viên từ LCMS.
…
LCMS cho phép người dùng tạo ra và sử dụng lại những đơn vị nội dung nhỏ trong kho dữ liệu trung tâm.
Tham khảo: Bài 4, mục 3.1.1. Hệ thống quản trị nội dung học tập (LCMS) (BG, tr.48) và mục 3.1.2. Hệ thống quản trị học tập (LMS) (BG, tr.48).
`,
        question:`Chọn phát biểu SAI?`
    },
    {
        answer:`Bạn có thể tự kiểm tra ngay bằng cách xem lại một thống báo của hệ thống được gửi đến hộp thư của bạn
The correct answer is: Google Mail
`,
        question:`Hộp thư điện tử của chương trình NEU-ELEARNING được xây dựng dựa trên hộp thư điện tử nào dưới đây?`
    },
    {
        answer:`Đáp án đúng là: Thay đổi mật khẩu đăng nhập của bạn cùng lớp.
Vì: Sau khi đăng nhập vào lớp học sinh viên có thể thay đổi mật khẩu của chính mình nhưng không thể thay đổi mật khẩu của bạn cùng lớp.
Tham khảo: Bài 5, mục 5.4. Hướng dẫn sử dụng các công cụ hỗ trợ học tập (BG, tr.195).
`,
        question:`Sau khi đăng nhập vào lớp học, thao tác nào sau đây KHÔNG thể thực hiện được?`
    },
    {
        answer:`Đáp án đúng là: Lớp học có 1-29% nội dung được truyền tải qua Internet.
Vì: Năm 2012, Hội đồng nghiên cứu E-Learning Hoa Kỳ (Sloan Consortium) đã đưa ra bảng phân loại các lớp học như sau:
Nhóm A: 0% nội dung được truyền tải qua Internet.
Nhóm B: 1  29% nội dung được truyền tải qua Internet.
Nhóm C: 30  79% nội dung được truyền tải qua Internet.
Nhóm D: 80+% nội dung được truyền tải qua Internet.
Theo đánh giá chung của Sloan Consortium thì các lớp học có áp dụng công nghệ Internet ở nhóm B được coi là các lớp học sử dụng công nghệ Internet.
Tham khảo: Bài 4, mục 3.2.4. Các đặc điểm của hệ thống e-learning (BG, tr.60).
`,
        question:`Theo Sloan Consortium lớp học nào dưới đây được coi là lớp học sử dụng công nghệ Internet?`
    },
    {
        answer:`Đáp án đúng là: Để bạn biết được giảng viên nào sẽ giảng dạy.
Vì: Mục tiêu học tập được phổ biến nhằm mục đích:
Tập trung vào những phần của nội dung bài học.
Mô tả chính xác những gì bạn phải đạt được sau khi hoàn thành lớp học.
Mô tả chi tiết kết quả mà người dạy muốn bạn phải hướng tới sau từng bài học.
Tham khảo: Bài 5, mục 5.2. Các bước trong quá trình học e-learning (BG, tr.184).
`,
        question:`Đâu không là mục đích khi phổ biến mục tiêu học tập trong e-learning?`
    },
    {
        answer:`Đáp án đúng là: Nhóm A và nhóm B.
Vì: Vào năm 2012, Hội đồng nghiên cứu E-Learning Hoa Kỳ (Sloan Consortium) đã đưa ra một phân loại các lớp học như sau:
Nhóm A: 0% nội dung được truyền tải qua Internet.
Nhóm B: 1  29% nội dung được truyền tải qua Internet.
Nhóm C: 30  79% nội dung được truyền tải qua Internet.
Nhóm D: 80+% nội dung được truyền tải qua Internet.
Theo đánh giá chung của Sloan Consortium thì các lớp học có áp dụng công nghệ Internet ở các nhóm C và D được coi là những lớp học E-Learning.
Tham khảo: Bài 4, mục 3.2.4. Các đặc điểm của hệ thống e-learning (BG, tr.60).
`,
        question:`Theo Sloan Consortium thì lớp học áp dụng Internet ở mức nào KHÔNG phải là lớp học E-learning?`
    },
    {
        answer:`Đáp án đúng là: PB1 sai, PB2 đúng.
Vì: Trên cơ sở các đặc tính của dịch vụ Web, người ta thấy rằng các dịch vụ Web có khả năng tốt để thực hiện tính năng liên kết, tương hợp của các hệ thống e-learning bởi các lý do sau:
Mô hình kiến trúc Web là nền tảng và độc lập về ngôn ngữ với e-learning. Nó cho phép tăng cường sự tương hợp và mở rộng trên cơ sở hạ tầng mạng và các ứng dụng khác nhau sẵn có trên thị trường e-learning.
Mô hình kiến trúc Web cho phép phát triển và sử dụng Intranet cũng như các dịch vụ Internet công cộng. Điều đó cho phép việc lựa chọn các công nghệ mạng là hoàn toàn trong suốt đối với các đơn vị phát triển nội dung và các nhà cung cấp dịch vụ.
Tham khảo: Bài 4, mục 3.1.2. Hệ thống quản trị học tập (LMS) (BG, tr.48).
`,
        question:`Khi nói về kiến trúc Web để phát triển hệ thống E-learning, có 2 phát biểu như sau:
PB1: Mô hình kiến trúc Web không cho phép tăng cường sự tương hợp và mở rộng trên cơ sở hạ tầng mạng và các ứng dụng khác nhau sẵn có trên thị trường e-learning.
PB2: Mô hình kiến trúc Web cho phép phát triển và sử dụng Intranet cũng như các dịch vụ Internet công cộng. Điều đó cho phép việc lựa chọn các công nghệ mạng là hoàn toàn trong suốt đối với các đơn vị phát triển nội dung và các nhà cung cấp dịch vụ.
Hỏi khẳng định nào sau đây là đúng?
`
    },
    {
        answer:`Đáp án đúng là: Không cho phép thiết lập nhiều giao diện riêng biệt cho các nhóm người dùng khác nhau.
Vì: Yêu cầu về chức năng của một hệ thống LMS điển hình có thể được liệt kê tóm tắt như sau:
Yêu cầu giao diện người dùng
Hỗ trợ giao diện người dùng trên cơ sở trình duyệt Web, có khả năng tùy chỉnh và thân thiện người dùng.
Cho phép thiết lập nhiều giao diện riêng biệt cho các nhóm người dùng khác nhau.
Hỗ trợ chức năng trợ giúp và hướng dẫn trực tuyến.
Tham khảo: Bài 4, mục 3.1.2. Hệ thống quản trị học tập (LMS), phần (4) Yêu cầu giao diện người dùng (BG, tr.49).
`,
        question:`Đâu không phải là một trong các yêu cầu giao diện người dùng của một hệ thống LMS điển hình?`
    },
    {
        answer:`Đáp án đúng là: Bạn không có được câu trả lời ngay tức khắc.
Vì: Với dịch vụ diễn đàn bạn có thể trao đổi và thảo luận mọi lúc mọi nơi. Các vấn đề của bạn sẽ nhận được các ý kiến đóng góp của nhiều người, bạn có thể chọn lựa ý kiến mà bạn thấy là đúng nhất. Tuy nhiên thông thường khi sử dụng diễn đàn, bạn không thể có được câu trả lời ngay lập tức.
Tham khảo: Bài 5, mục 5.4. Hướng dẫn sử dụng các công cụ hỗ trợ học tập (BG, tr.195).
`,
        question:`Trong quá trình trao đổi và giải đáp thắc mắc, yếu tố nào sau đây KHÔNG phải là ưu điểm khi sử dụng diễn đàn?`
    },
    {
        answer:`Đáp án đúng là: Các chuẩn phân tích hệ thống.
Vì:
Các chuẩn cho phép ghép các khóa học tạo bởi các công cụ khác nhau bởi các nhà sản xuất khác nhau thành các gói nội dung (packages) được gọi là các chuẩn đóng gói (packaging standards).
Nhóm chuẩn thứ hai cho phép các hệ thống quản lý đào tạo hiển thị từng bài học đơn lẻ. Hơn nữa, có thể theo dõi được kết quả kiểm tra của sinh viên, quá trình học tập của sinh viên. Những chuẩn như thế được gọi là chuẩn trao đổi thông tin.
Nhóm chuẩn thứ ba quy định cách mà các nhà sản xuất nội dung có thể mô tả các khóa học và các module của mình để các hệ thống quản lý có thể tìm kiếm và phân loại được khi cần thiết. Chúng được gọi là các chuẩn metadata.
Nhóm chuẩn thứ tư nói đến chất lượng của các module và các khóa học. Chúng được gọi là chuẩn chất lượng.
Tham khảo: Bài 4, mục 3.2.2. Các chuẩn và đặc tả cho hệ thống e-learning (BG, tr.53).
`,
        question:`Đâu không phải là các chuẩn và đặc tả cho hệ thống e-learning?`
    },
    {
        answer:`Đáp án đúng là: Tất cả nội dung trên Internet; không có gặp mặt trực tiếp.
Vì: Năm 2012, Hội đồng nghiên cứu E-Learning Hoa Kỳ (Sloan Consortium) đã đưa ra một phân loại các lớp học như sau:
Lớp học truyền thống: Không có nội dung được truyền tải bằng công nghệ Internet. Tất cả là trực tiếp.
Sử dụng công nghệ Internet: Sử dụng công nghệ Internet để đăng tải các học liệu như đề cương; bài tập; bài giảng. Sinh viên và thầy gặp gỡ trực tiếp (mặt giáp mặt).
Lớp học kết hợp (Blended/Hybrid): Kết hợp giữa công nghệ Internet và truyền thống. Sinh viên và thầy có những gặp gỡ, trao đổi trên Internet và có cả những buổi gặp trực tiếp.
Lớp học trực tuyến (Online): Tất cả nội dung trên Internet; không có gặp mặt trực tiếp.
Tham khảo: Bài 4, mục 3.2.4. Các đặc điểm của hệ thống e-learning (BG, tr.60).
`,
        question:`Theo Sloan Consortium lớp học nào dưới đây là lớp học trực tuyến?`
    },
    {
        answer:`Đáp án đúng là: Tiến trình học được theo dõi chặt chẽ và cung cấp công cụ tự đánh giá.
Vì: Các đặc điểm của hệ thống E-learning:
Học mọi lúc, mọi nơi;
Học liệu hấp dẫn;
Linh hoạt về khối lượng kiến thức cần tiếp thu;
Nội dung thay đổi phù hợp cho từng cá nhân;
Cập nhật mới nhanh;
Học có sự hợp tác, phối hợp;
Tiến trình học được theo dõi chặt chẽ và cung cấp công cụ tự đánh giá;
Các dịch vụ đào tạo được triển khai đồng bộ.
Tham khảo: Bài 4, mục 3.2.4. Các đặc điểm của hệ thống e-learning (BG, tr.60).
`,
        question:`Đâu là đặc điểm của E-Learning?`
    },
    {
        answer:`Phương án đúng là: Thay đổi tên đăng nhập.Vì tên đăng nhập là để định danh duy nhất sinh viên, phân biệt sinh viên với những học viên khác.`,
        question:`Khi sử dụng Website của chương trình Neu Elearning, sinh viên KHÔNG thể làm gì?`
    },
    {
        answer:`Đáp án đúng là: Learning Management System.
Vì: Mô hình chức năng cung cấp một cái nhìn trực quan về các thành phần tạo nên môi trường e-learning và những đối tượng thông tin giữa chúng. Viện nghiên cứu công nghệ giáo dục từ xa đưa ra mô hình tham chiếu đối tượng nội dung chia sẻ (SCORM) và đã định nghĩa một cách khái quát về một môi trường ứng dụng E-Learning: là một kiểu ”hệ thống quản lý học tập (LMS-Learning Management System)”, trong đó LMS là một hệ thống dịch vụ quản lý quá trình phân phối và theo dõi nội dung học tập của người học.
Tham khảo: Bài 4, mục 3.1. Mô hình chức năng hệ thống (BG, tr.47).
`,
        question:`LMS là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Phương án đúng là Hệ thống phần mềm quản lý truy cập mạng Internet. Vì đây không phải là chức năng mang tính đặc thù, nó có ở nhiều hề thống khác.`,
        question:`Đâu KHÔNG phải là hệ thống hỗ trợ học tập trong môi trường elearning?`
    },
    {
        answer:`Đáp án đúng là: Nhóm C và nhóm D.
Vì: Vào năm 2012, Hội đồng nghiên cứu E-Learning Hoa Kỳ (Sloan Consortium) đã đưa ra một phân loại các lớp học như sau:
Nhóm A: 0% nội dung được truyền tải qua Internet.
Nhóm B: 1  29% nội dung được truyền tải qua Internet.
Nhóm C: 30  79% nội dung được truyền tải qua Internet.
Nhóm D: 80+% nội dung được truyền tải qua Internet.
Theo đánh giá chung của Sloan Consortium thì các lớp học có áp dụng công nghệ Internet ở các nhóm C và D được coi là những lớp học E-Learning.
Tham khảo: Bài 4, mục 3.2.4. Các đặc điểm của hệ thống e-learning (BG, tr.60).
`,
        question:`Theo đánh giá chung của Sloan Consortium thì các lớp học có áp dụng công nghệ Internet ở nhóm nào thì được coi là những lớp học E-learning?`
    },
    {
        answer:`Đáp án đúng là: Đội ngũ kỹ sư công nghệ thông tin.
Vì: Một cách tổng thể một hệ thống e-learning bao gồm 3 phần chính:
Hạ tầng truyền thông và mạng: Bao gồm các thiết bị đầu cuối người dùng (sinh viên), thiết bị tại các cơ sở cung cấp dịch vụ, mạng truyền thông…
Hạ tầng phần mềm: Các phần mềm LMS, LCMS (ví dụ đơn giản như MacroMedia, Authorware, Toolbook… ).
Nội dung đào tạo (hạ tầng thông tin): Đây là phần quan trọng của e-learning bao gồm nội dung các khoá học, các phần mềm dạy học… Tham khảo: Bài 4, mục 3.2.1. Mô hình hệ thống e-learning (BG, tr.51).
`,
        question:`Trong mô hình hệ thống E-Learning không bao gồm thành phần nào?`
    },
    {
        answer:`Đáp án đúng là: Lợi ích của việc học trên mạng vẫn chưa được khẳng định.
Vì: Theo quan điểm của cơ sở đào tạo:
Ưu điểm:
Giảm chi phí tổ chức và quản lý đào tạo;
Giảng viên và sinh viên không phải đi lại nhiều;
Tổng hợp được kiến thức;
Nhược điểm: Lợi ích của việc học trên mạng vẫn chưa được khẳng định.
Tham khảo: Bài 4, mục 3.2.4. Các đặc điểm của hệ thống e-learning (BG, tr.60).
`,
        question:`Theo quan điểm của cơ sở đào tạo, đâu KHÔNG phải là ưu điểm khi chuyển đổi các khoá học truyền thống sang khoá học e-learning?`
    },
    {
        answer:`Đáp án đúng là: Không có khả năng hạn chế truy nhập tới dữ liệu, nội dung theo người dùng.
Vì: Yêu cầu về chức năng của một hệ thống LMS điển hình có thể được liệt kê tóm tắt như sau:
Yêu cầu điều khiển truy nhập và bảo mật
Hỗ trợ các giao thức truy nhập và chứng thực, hạn chế truy nhập bằng ID người dùng và mật khẩu truy nhập.
Ngăn chặn các đăng ký trái phép.
Có khả năng hạn chế truy nhập tới dữ liệu/nội dung theo người dùng.
Hỗ trợ kiến trúc bảo mật đa lớp (ít nhất là 2 lớp) cho ứng dụng Web.
Tham khảo: Bài 4, mục 3.1.2. Hệ thống quản trị học tập (LMS), phần (3) Yêu cầu điều khiển truy nhập và bảo mật (BG, tr.49).
`,
        question:`Đâu không phải là một trong các yêu cầu điều khiển truy nhập và bảo mật của một hệ thống LMS điển hình?`
    },
    {
        answer:`Đáp án đúng là: Cập nhật hồ sơ cá nhân.
Vì: Sau khi đăng nhập để thay đổi hình ảnh của mình bạn làm như sau:
Click chuột vào tên của mình;
Chọn mục Cập nhật hồ sơ cá nhân;
Trong mục Picture Of, bạn Browse tới file hình ảnh của mình.
Tham khảo: Bài 5, mục 5.1. Đăng nhập hệ thống (BG, tr.183).
`,
        question:`Sau khi đăng nhập vào lớp học, sinh viên NEU-ELEARNING có thể thay đổi hình ảnh của mình. Chức năng thay đổi hình ảnh nằm trong mục nào dưới đây?`
    },
    {
        answer:`Đáp án đúng là: Học không có sự hợp tác, phối hợp.
Vì: Các đặc điểm của hệ thống E-learning:
Học mọi lúc, mọi nơi;
Học liệu hấp dẫn;
Linh hoạt về khối lượng kiến thức cần tiếp thu;
Nội dung thay đổi phù hợp cho từng cá nhân;
Cập nhật mới nhanh;
Học có sự hợp tác, phối hợp;
Tiến trình học được theo dõi chặt chẽ và cung cấp công cụ tự đánh giá;
Các dịch vụ đào tạo được triển khai đồng bộ.
Tham khảo: Bài 4, mục 3.2.4. Các đặc điểm của hệ thống e-learning (BG, tr.60).
`,
        question:`Trong số các đặc điểm sau, đâu không phải là đặc điểm của hệ thống E-Learning?`
    },
    {
        answer:`Đáp án đúng là: Tiếp thu bài giảng; Tương tác; Luyện tập; Kiểm tra và thi kết thúc môn học.
Vì: ở bước 3- Học tập gồm:
Tiếp thu bài giảng;
Tương tác (Phụ đạo, trao đổi với bạn);
Luyện tập;
Kiểm tra và thi kết thúc môn học.
Tham khảo: Bài 4, mục 3.2.3. Hoạt động của hệ thống e-learning, Hình 3.5. Quy trình học tập e-learning của sinh viên (BG, tr.60).
`,
        question:`Trong quy trình học tập E-learning của sinh viên, ở bước Học tập gồm có bốn hoạt động chính, đó là những hoạt động nào?`
    },
    {
        answer:`Đáp án đúng là: PB1 đúng, PB2 đúng.
Vì: Một LCMS là một môi trường đa người dùng, ở đó các cơ sở phát triển nội dung có thể tạo ra, lưu trữ, sử dụng lại, quản lý và phân phối nội dung học tập trong môi trường số từ một kho dữ liệu trung tâm.
LCMS cho phép người dùng tạo ra và sử dụng lại những đơn vị nội dung nhỏ trong kho dữ liệu trung tâm. Việc sử dụng các cấu trúc siêu dữ liệu học được chuẩn hoá, cộng với các khuôn dạng truy xuất đơn vị kiến thức được chuẩn hoá cũng cho phép các đơn vị kiến thức được tạo ra và chia sẻ bởi các phần mềm công cụ đa năng và các kho dữ liệu học tập.
Tham khảo: Bài 4, mục 3.1.1. Hệ thống quản trị nội dung học tập (LCMS) (BG, tr.48).
`,
        question:`Khi nói về mô hình chức năng hệ thống, có 2 phát biểu như sau:
PB1: Một LCMS là một môi trường đa người dùng.
PB2: LCMS cho phép người dùng tạo ra và sử dụng lại những đơn vị nội dung nhỏ trong kho dữ liệu trung tâm.
Hỏi khẳng định nào sau đây là đúng?
`
    },
    {
        answer:`Đáp án đúng là: Viện nghiên cứu công nghệ giáo dục từ xa (ADL).
Vì: Mô hình chức năng cung cấp một cái nhìn trực quan về các thành phần tạo nên môi trường e-learning và những đối tượng thông tin giữa chúng. Viện nghiên cứu công nghệ giáo dục từ xa (ADL) đưa ra mô hình tham chiếu đối tượng nội dung chia sẻ (SCORM - Sharable Content Object Reference Model) và đã định nghĩa một cách khái quát về một môi trường ứng dụng E-Learning: là một kiểu ”hệ thống quản lý học tập (LMS)”, trong đó LMS là một hệ thống dịch vụ quản lý quá trình phân phối và theo dõi nội dung học tập của người học.
Tham khảo: Bài 4, mục 3.1. Mô hình chức năng hệ thống (BG, tr.47).
`,
        question:`Mô hình SCORM do tổ chức nào đưa ra?`
    },
    {
        answer:`Đáp án đúng là: Learning Content Managerment System.
Vì: Hệ thống quản lý nội dung LCMS Learning Content Managerment System.
Tham khảo: Bài 4, mục 3.2.3. Hoạt động của hệ thống e-learning (BG, tr.58).
`,
        question:`LCMS là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: Lướt web.
Vì: Sinh viên nắm vững phương pháp học tập trong lớp học e-learning là điều kiện cần để hoàn thành lớp học, có 4 hoạt động chính của sinh viên e-learning:
Tiếp thu Bài giảng;
Thảo luận;
Thực hành;
Thi cử.
Tham khảo: Bài 5, mục 5.2. Các bước trong quá trình học e-learning (BG, tr.184).
`,
        question:`Trong quá trình học e-learning, đâu không phải là 1 trong 4 hoạt động chính của sinh viên e-learning?`
    },
    {
        answer:`Đáp án đúng là: Không có nội dung được truyền tải bằng công nghệ Internet.
Vì: Năm 2012, Hội đồng nghiên cứu E-Learning Hoa Kỳ (Sloan Consortium) đã đưa ra một phân loại các lớp học như sau:
Lớp học truyền thống: Không có nội dung được truyền tải bằng công nghệ Internet. Tất cả là trực tiếp.
Sử dụng công nghệ Internet: Sử dụng công nghệ Internet để đăng tải các học liệu như đề cương; bài tập; bài giảng. Sinh viên và thầy gặp gỡ trực tiếp (mặt giáp mặt).
Lớp học kết hợp (Blended/Hybrid): Kết hợp giữa công nghệ Internet và truyền thống. Sinh viên và thầy có những gặp gỡ, trao đổi trên Internet và có cả những buổi gặp trực tiếp.
Lớp học trực tuyến (Online): Tất cả nội dung trên Internet; không có gặp mặt trực tiếp.
Tham khảo: Bài 4, mục 3.2.4. Các đặc điểm của hệ thống e-learning (BG, tr.60).
`,
        question:`Theo Sloan Consortium lớp học nào dưới đây là lớp học truyền thống?`
    },
    {
        answer:`Đáp án đúng là: Gặp gỡ giáo viên.
Vì: Quy trình sinh viên học tập trên hệ thống e-learning gồm 3 bước như sau:
Đăng ký học tập;
Tìm hiểu thông tin lớp học;
Học tập.
Tham khảo: Bài 4, mục 3.2.3. Hoạt động của hệ thống e-learning (BG, tr.58).
`,
        question:`Quy trình sinh viên học tập trên hệ thống e-learning KHÔNG bao gồm bước nào?`
    },
    {
        answer:`Phương án đúng là Bài tập trắc nghiệm trực tuyến. Vì đây là phương án cho phép chấm điểm tự động và được phép làm lại nhiều lần`,
        question:`Để đánh giá kiến thức của sinh viên, các lớp học E-Learning chủ yếu dựa vào loại bài tập nào dưới đây?`
    },
    {
        answer:`Đáp án đúng là: Các dịch vụ đào tạo không được triển khai đồng bộ.
Vì: Các đặc điểm của hệ thống E-learning:
Học mọi lúc, mọi nơi;
Học liệu hấp dẫn;
Linh hoạt về khối lượng kiến thức cần tiếp thu;
Nội dung thay đổi phù hợp cho từng cá nhân;
Cập nhật mới nhanh;
Học có sự hợp tác, phối hợp;
Tiến trình học được theo dõi chặt chẽ và cung cấp công cụ tự đánh giá;
Các dịch vụ đào tạo được triển khai đồng bộ.
Tham khảo: Bài 4, mục 3.2.4. Các đặc điểm của hệ thống e-learning (BG, tr.60).
`,
        question:`Trong số các đặc điểm sau, đâu không phải là đặc điểm của hệ thống E-Learning?`
    },
    {
        answer:`Đáp án đúng là: Sharable Content Object Reference Model.
Vì: Mô hình chức năng cung cấp một cái nhìn trực quan về các thành phần tạo nên môi trường e-learning và những đối tượng thông tin giữa chúng. Viện nghiên cứu công nghệ giáo dục từ xa đưa ra mô hình tham chiếu đối tượng nội dung chia sẻ (SCORM - Sharable Content Object Reference Model) và đã định nghĩa một cách khái quát về một môi trường ứng dụng E-Learning: là một kiểu ”hệ thống quản lý học tập (LMS)”, trong đó LMS là một hệ thống dịch vụ quản lý quá trình phân phối và theo dõi nội dung học tập của người học.
Tham khảo: Bài 4, mục 3.1. Mô hình chức năng hệ thống (BG, tr.47).
`,
        question:`SCORM là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Đáp án đúng là: PB1 đúng, PB2 đúng.
Vì: LMS là một hệ thống dịch vụ quản lý việc phân phối và tìm kiếm nội dung học tập cho người học, tức là LMS quản lý các quá trình học tập. LMS cần trao đổi thông tin về hồ sơ người sử dụng và thông tin đăng nhập của người sử dụng với các hệ thống khác. LMS lấy thông tin về vị trí của khoá học từ LCMS và về các hoạt động của sinh viên từ LCMS.
Tham khảo: Bài 4, mục 3.1.2. Hệ thống quản trị học tập (LMS) (BG, tr.48).
`,
        question:`Khi nói về mô hình chức năng hệ thống, có 2 phát biểu như sau:
PB1: LMS là một hệ thống dịch vụ quản lý việc phân phối và tìm kiếm nội dung học tập cho người học.
PB2: LMS lấy thông tin về vị trí của khoá học từ LCMS và về các hoạt động của sinh viên từ LCMS.
Hỏi khẳng định nào sau đây là đúng?
`
    },
    {
        answer:`Đáp án đúng là: Sinh viên có thể làm các bài luyện tập trắc nghiệm không tính điểm bất cứ lúc nào.
Vì: Đối với các bài luyện tập không tính điểm bạn có thể làm vào bất cứ lúc nào, thời gian và số lần làm bài là tùy thích. Đối với các bài tập về nhà thời điểm, thời gian và số lần làm bài được quy định rất rõ ràng.
Tham khảo: Bài 5, mục 5.4. Hướng dẫn sử dụng các công cụ hỗ trợ học tập (BG, tr.195).
`,
        question:`Đối với các lớp học E-Learning, khẳng định nào dưới đây là đúng?`
    },
    {
        answer:`Đáp án đúng là: Sử dụng lại, quản lý và phân phối nội dung học tập trong môi trường số từ một kho dữ liệu trung tâm.
Vì: Một LCMS là một môi trường đa người dùng, ở đó các cơ sở phát triển nội dung có thể tạo ra, lưu trữ, sử dụng lại, quản lý và phân phối nội dung học tập trong môi trường số từ một kho dữ liệu trung tâm.
Yêu cầu về chức năng của một hệ thống LMS điển hình có thể được liệt kê tóm tắt như sau:
(2) Yêu cầu kỹ thuật
Tương thích với các trình duyệt chuẩn.
Được thiết kế theo module để có thể dễ dàng nâng cấp trong tương lai.
Có khả năng tích hợp ứng dụng thư điện tử và có khả năng trao đổi thư điện tử với mọi hệ thống thư điện tử chuẩn.
Tham khảo: Bài 4, mục 3.1.1. Hệ thống quản trị nội dung học tập (LCMS) (BG, tr.48) và mục 3.1.2. Hệ thống quản trị học tập (LMS) (BG, tr.48).
`,
        question:`Đâu không phải là một trong các yêu cầu kỹ thuật của một hệ thống LMS điển hình?`
    },
    {
        answer:`Đáp án đúng là: PB1 đúng, PB2 sai.
Vì: Các chuẩn và đặc tả là thành phần kết nối tất cả các thành phần của hệ thống e-learning. LMS, LCMS, công cụ soạn bài giảng, và kho chứa bài giảng sẽ hiểu nhau và tương tác được với nhau thông qua các chuẩn/đặc tả.
Nhóm chuẩn thứ ba quy định cách mà các nhà sản xuất nội dung có thể mô tả các khóa học và các module của mình để các hệ thống quản lý có thể tìm kiếm và phân loại được khi cần thiết. Chúng được gọi là các chuẩn metadata.
Tham khảo: Bài 4, mục 3.2.2. Các chuẩn và đặc tả cho hệ thống e-learning (BG, tr.53).
`,
        question:`Khi nói về các chuẩn và đặc tả cho hệ thống e-learning, có 2 phát biểu như sau:
PB1: LMS, LCMS, công cụ soạn bài giảng, và kho chứa bài giảng sẽ hiểu nhau và tương tác được với nhau thông qua các chuẩn/đặc tả.
PB2: Các chuẩn quy định cách mà các nhà sản xuất nội dung có thể mô tả các khóa học và các module của mình để các hệ thống quản lý có thể tìm kiếm và phân loại được khi cần thiết được gọi là các chuẩn đóng gói.
Hỏi khẳng định nào sau đây là đúng?
`
    },
    {
        answer:`Đáp án đúng là: Không linh hoạt về khối lượng kiến thức cần tiếp thu.
Vì: Các đặc điểm của hệ thống E-learning:
Học mọi lúc, mọi nơi;
Học liệu hấp dẫn;
Linh hoạt về khối lượng kiến thức cần tiếp thu;
Nội dung thay đổi phù hợp cho từng cá nhân;
Cập nhật mới nhanh;
Học có sự hợp tác, phối hợp;
Tiến trình học được theo dõi chặt chẽ và cung cấp công cụ tự đánh giá;
Các dịch vụ đào tạo được triển khai đồng bộ.
Tham khảo: Bài 4, mục 3.2.4. Các đặc điểm của hệ thống e-learning (BG, tr.60).
`,
        question:`Trong số các đặc điểm sau, đâu không phải là đặc điểm của hệ thống E-Learning?`
    },
    {
        answer:`Tải file từ máy`,
        question:`Khi sử dụng diễn đàn của chương trình NEU ELEARNING, nếu muốn đưa các hình ảnh
vào bài thảo luận của mình bạn chọn chức năng nào sau đây?
`
    },
    {
        answer:`Học liệu hấp dẫn`,
        question:`Trong lớp học E-Learning học viên có thể lựa chọn kiểu bài giảng mà mình muốn tùy
theo tốc độ đường truyền Internet. Trong số các đặc điểm sau, đặc điểm nào hỗ trợ trực tiếp cho tiêu chuẩn trên?
`
    },
    {
        answer:`Cập nhật hồ sơ cá nhân`,
        question:`Câu 3 :	Sau khi đăng nhập vào lớp học, học viên NEU ELEARNING có thể thay đổi hình ảnh của mình. Chức năng thay đổi hình ảnh nằm trong mục nào dưới đây?`
    },
    {
        answer:`1974`,
        question:`Câu 4 :	Thuật ngữ Internet xuất hiện lần đầu vào khoảng năm nào?`
    },
    {
        answer:`A.	Trong câu điều kiện được nhập, số kí tự trống giữa các từ làm thay đổi kết quả tìm kiếm`,
        question:`Câu 5 :	Khi tìm kiếm thông tin trên Internet, khẳng định nào KHÔNG đúng?			`
    },
    {
        answer:`B.	Kết nối kiểu này luôn thường trực								`,
        question:`Khi kết nối Internet bằng phương thức kết nối quay số qua mạng điện thoại, thì khẳng
định nào sau đây là sai?
`
    },
    {
        answer:`A.	IDM	`,
        question:`Trong số các phần mềm sau, phần mềm nào không hỗ trợ chức năng chat?`
    },
    {
        answer:`Dịch vụ WAIS`,
        question:`Trong số các dịch vụ sau, dịch vụ nào được dùng để tìm kiếm dữ liệu?`
    },
    {
        answer:`Khả năng truy cập Internet`,
        question:`Để có thể sử dụng dịch vụ thư điện tử, yếu tố nào dưới đây là bắt buộc và không có khả
năng thay thế được?
`
    },
    {
        answer:`SnagIt`,
        question:`Trong số các phần mềm sau, đâu không phải là phần mềm hỗ trợ tải tệp tin?`
    },
    {
        answer:`Làm bài thi tính điểm bất kỳ lúc nào`,
        question:`Học viên lớp học E-Learning của Neu Elearning không thể làm gì?`
    },
    {
        answer:`Attach Files`,
        question:`Câu 12 :	Khi sử dụng Yahoo Mail để đính kèm tệp tin bạn bấm vào nút nào sau đây?		`
    },
    {
        answer:`2`,
        question:`Đối với lớp học E-Learning của chương trình Neu Elearning, có mấy kiểu bài tập trắc
nghiệm trực tuyến?
`
    },
    {
        answer:`Học viên có thể làm các bài luyện tập trắc nghiệm không tính điểm bất cứ lúc nào`,
        question:`Đối với các lớp học E-Learning của NEU ELEARNING, khẳng định nào dưới đây là
đúng?
`
    },
    {
        answer:`Không có những mô tả trực quan`,
        question:`Câu 15 :	Đâu là thách thức đối với hình thức trao đổi không đồng bộ?			`
    },
    {
        answer:`Home`,
        question:`Giả sử máy tính của bạn đang đặt địa chỉ trang nhà là: www.google.com. Từ một trang web khác, cách nhanh nhất để bạn đi đến trang tìm kiếm của Google là bấm vào nút nào
đưới đây?
`
    },
    {
        answer:`Truyền tải nội dung bài giảng tới học viên`,
        question:`Trong các mục đích sau, đâu là mục đích chính của học liệu đa phương tiện?`
    },
    {
        answer:`Lớp học có 30 - 79% nội dung được truyền tải qua Internet`,
        question:`Theo Sloan Consortium lớp học nào dưới đây được coi là lớp học e-learning?`
    },
    {
        answer:`Địa chỉ IP`,
        question:`Để các máy tính trên Internet có thể liên lạc với nhau, mỗi máy tính cần có một địa chỉ
liên lạc và địa chỉ này được gọi là gì?
`
    },
    {
        answer:`Các bài trắc nghiệm về nhà tính điểm không quy định số lần làm bài`,
        question:`Câu 20 :	Đối với lớp học E-Learning của NEU ELEARNING, khẳng định nào dưới đây là SAI?`
    },
    {
        answer:`Dấu hai chấm “:”`,
        question:`Câu 21 :	Mỗi nhóm trong địa chỉ IPv6 được tách biệt với nhau bằng dấu nào?		`
    },
    {
        answer:`Sharable Content Object Reference Model`,
        question:`SCORM là viết tắt của cụm từ tiếng Anh nào?`
    },
    {
        answer:`Electronic`,
        question:`Chữ E trong cụm từ E-Learning là viết tắt của từ tiêng Anh nào dưới đây?`
    },
    {
        answer:`Không thể tìm kiếm theo ngày xác định`,
        question:`Khi sử dụng Google, trong mục tìm kiếm nâng cao, bạn không thể tìm kiếm theo tiêu chí
nào dưới đây?
`
    },
    {
        answer:`Google Mail`,
        question:`Hộp thư điện tử của chương trình NEU ELEARNING được xây dựng dựa trên hộp thư
điện tử nào dưới đây?
`
    },
    {
        answer:`Mail User Agent`,
        question:`Hệ thống thư điện tử được chia làm hai phần là: MTA (Message Transfer Agent) và
MUA. Theo bạn MUA là viết tắt của cụm từ tiếng Anh nào?
`
    },
    {
        answer:`D.	Mục tiêu của môn học`,
        question:`Câu 27 :	Thông tin nào dưới đây không có trong kế hoạch học tập?			`
    },
    {
        answer:`Email`,
        question:`Công cụ nào dưới đây không phải là công cụ chính phục vụ hinh thức trao đổi đồng bộ?`
    },
    {
        answer:`Câu (1) đúng, câu (2) sai`,
        question:`Mục tiêu học tập được phổ biến nhằm mục đích:
(1)	Chỉ ra sự thay đổi về nhận thức, kỹ năng và hành vi mà bạn cần đạt được sau khi hoàn thành quá trình học tập.
(2)	Chỉ ra nội dung kiến thức cần tiếp thu theo từng tuần (hoặc tháng). Khẳng định nào dưới đây là đúng?
`
    },
    {
        answer:`C.	Học tập không có sự hợp tác, phối hợp`,
        question:`Đâu KHÔNG phải là đặc điểm của E-Learning?`
    },
    {
        answer:`Adobe Reader`,
        question:`Để có thể xem học liệu dạng PDF máy tính của học viên cần cài đặt phần mềm nào dưới đây?`
    },
    {
        answer:`KĐ1 sai, KĐ2 đúng`,
        question:`Cho 2 khẳng định sau:
KĐ1: Khi tìm kiếm bằng Google, trang tìm kiếm này sẽ tự động tìm tất cả các trang web và hiển thị những thông tin mà bạn đang cần tìm.
KĐ2: Khi tìm kiếm bằng Google, trong câu điều kiện được nhập, số kí tự trống giữa các từ không làm thay đổi kết quả tìm kiếm.
Nhận xét nào dưới đây là chính xác?
`
    },
    {
        answer:`C.	Cung cấp công cụ giúp học viên tự đánh giá kiến thức của chính mình`,
        question:`Bài tập trắc nghiệm trực tuyến được sử dụng với mục đích chính là gì?`
    },
    {
        answer:`E-Mail`,
        question:`Trong số các dịch vụ sau, đâu không là dịch vụ tổng hợp trên nền Internet?`
    },
    {
        answer:`Kế hoạch học tập`,
        question:`Để học tập tốt trong môi trường E-Learning thông tin nào nhất thiết phải nắm vững?`
    },
    {
        answer:`Học tập`,
        question:`Quy trình học E-Learning bao gồm 03 bước, đó là: Đăng ký lớp học, tìm hiểu thông tin lớp học, học tập. Theo bạn công việc tiếp thu bài giảng thuộc bước nào trong quy trình trên?`
    },
    {
        answer:`HTTP`,
        question:`Dịch vụ web sử dụng giao thức nào dưới đây?`
    },
    {
        answer:`D.	Tiếp thu bài giảng, thảo luận, thực hành, thi cử`,
        question:`Bốn công việc chính của học viên trong lớp học e-learning là gì?`
    },
    {
        answer:`128`,
        question:`Một tên miền đầy đủ có chiều dài không vượt quá bao nhiêu ký tự?`
    },
    {
        answer:`C.	Giáo án có nhiều phương án theo kiểu phân nhánh linh hoạt, có thể được điều chỉnh.`,
        question:`Tiêu chuẩn của “nguyên lý đào tạo lấy người học làm trung tâm” về mặt nội dung là gì?`
    },
    {
        answer:`Bạn không có được câu trả lời ngay tức khắc`,
        question:`Trong quá trình trao đổi và giải đáp thắc mắc, yếu tố nào sau đây KHÔNG phải là ưu
điểm khi sử dụng diễn đàn?
`
    },
    {
        answer:`Mật khẩu có thể chứa ký tự @`,
        question:`Khi tạo tài khoản mới trong Yahoo Mail khẳng định nào dưới đây là đúng?`
    },
    {
        answer:`3`,
        question:`Với tên miền là: elearning.neu.edu.vn thì thành phần “neu” thường được gọi là tên miền
cấp mấy?
`
    },
    {
        answer:`Phần mềm Moodle`,
        question:`Câu 44 :	Các lớp học E-Learning của NEU ELEARNING được xây dựng dựa trên phần mềm nào?`
    },
    {
        answer:`Moodle là phần mềm mã nguồn mở được phát triển từ năm 1998`,
        question:`Chọn khẳng định SAI?`
    },
    {
        answer:`Chỉnh sửa nội dung bài viết đang có`,
        question:`Khi tham gia các diến đàn trên Internet, thông thường bạn không thể thực hiện được thao
tác nào dưới đây?
`
    },
    {
        answer:`Các file *.htm`,
        question:`Tất cả các Web Server đều hiểu và chạy được các file nào dưới đây?`
    },
    {
        answer:`296`,
        question:`Số lượng địa chỉ IPv6 cung cấp gấp bao nhiêu lần số lượng địa chỉ mà IPv4 cung cấp?`
    },
    {
        answer:`Nhận xét 1 và nhân xét 2 đều đúng`,
        question:`Khi sử dụng Webmail có một số nhận xét như sau:
Nhận xét 1: Gần như tất cả các dịch vụ Webmail đều miễn phí.
Nhận xét 2: Khi người sử dụng có thể truy nhập Internet và có trình duyệt Web là có khả năng sử dụng hộp thư Webmail.
Hỏi khẳng định nào dưới đây là đúng?
`

    },
    {
        answer:`Sổ địa chỉ`,
        question:`Việc ghi nhớ địa chỉ email của người khác là khá khó khăn. Chức năng nào dưới đây của
Yahoo Mail hỗ trợ bạn trong việc ghi nhớ địa chỉ email?
`
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
