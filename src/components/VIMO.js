import React from "react";
import {Link} from "react-router-dom";

const books = [
    {
        answer: " Cạnh tranh hoàn hảo",
        question: "“Chi phí cận biên bằng giá” là quy tắc tối đa hóa lợi nhuận cho tất cả các hãng trong cấu trúc thị trường nào sau đây?"
    },
    {
        answer:"A không thích tiêu dùng cá và B không thích tiêu dùng lúa",
        question:"A trồng lúa và B nuôi cá. Trong trường hợp nào thì A và B không thể thu được lợi ích từ trao đổi"
    },
    {
        answer:"1/5.",
        question:"Bảo có thể ăn xôi hoặc phở. Giá của xôi là 1000đ, trong khi giá của phở là 5000đ. Giả sử ích lợi cận biên của xôi là MUx, của phở là MUp. ở điểm cân bằng, tỷ số MUx/ MUp bằng:"
    },
    {
        answer:"Kinh tế vi mô",
        question:"Bộ phận của kinh tế học nghiên cứu các quyết định của hãng và hộ gia đình được gọi là:"
    },
    {
        answer:"Một số cá nhân rời bỏ thị trường",
        question:"Cá nhân này thay thế hàng hóa này bằng các hàng hóa hoặc dịch vụ khác"
    },
    {
        answer:"Ngoại ứng tích cực",
        question:"Các đợt tiêm phòng để chống lại các bênh lây lan tạo ra"
    },
    {
        answer:"Các hãng tin rằng mình gặp đường cầu gẫy ở mức giá hiện hành",
        question:"Các hãng tin rằng nếu mình tăng giá các đối thủ sẽ không tăng theo, nhưng nếu mình giảm giá thì các đối thủ sẽ giảm theo"
    },
    {
        answer:"Sản xuất không hiệu quả.Vì chưa sử dụng tốt nhất nguồn lực khan hiếm (lãng phí nguồn lực)",
        question:"Các kết hợp hàng hoá nằm phía trong đường giới hạn khả năng sản xuất là:"
    },
    {
        answer:"Sản xuất không hiệu quả.",
        question:"Các kết hợp hàng hoá nằm phía trong đường giới hạn khả năng sản xuất là:"
    },
    {
        answer:"Những lợi ích mà những người không trả tiền cho sản phẩm được nhận.",
        question:"Các ngoại ứng tích cực là"
    },
    {
        answer:"nó sẽ tăng.",
        question:"Các yếu tố khác không đổi, khi thu nhập tăng lên, thặng dư tiêu dùng của hàng hóa thông thường thay đổi như thế nào?"
    },
    {
        answer:"Trong cạnh tranh độc quyền các hãng không phải lo lắng về phản ứng của các đối thủ",
        question:"Cạnh tranh độc quyền khác độc quyền tập đoàn chỗ"
    },
    {
        answer:"Giá của hàng hoá thay thế cho hàng hoá đó giảm.",
        question:"Cầu của một hàng hoá luôn giảm khi"
    },
    {
        answer:"Chi phí kinh tế lớn hơn chi phí tính toán và lợi nhuận kinh tế nhỏ hơn lợi nhuận tính toán",
        question:"Câu nào sau đây là đúng"
    },
    {
        answer:"Hãng độc quyền có thể bị lỗ",
        question:"Câu nào trong các câu sau là đúng"
    },
    {
        answer:"Ngành độc quyền sản xuất lượng thấp hơn và đặt giá cao hơn ngành cạnh tranh",
        question:"Câu nào trong các câu sau là đúng"
    },
    {
        answer:"Trong độc quyền không có đường cung",
        question:"Câu nào trong các câu sau là đúng:"
    },
    {
        answer:"Đặt trần giá làm giảm phúc lợi của xã hội vì các nhà sản xuất giảm sản lượng, làm cho thặng dưư sản xuất giảm, thặng dưư tiêu dùng có thể tăng nhưng tổng thặng dưư sản xuất và thặng dưư tiêu dùng giảm so với thị trường tự do",
        question:"Câu nào trong các câu sau là đúng:"
    },
    {
        answer:"khoảng thời gian kể từ khi giá thay đổi dài hơn",
        question:"Cầu sẽ co giãn nhiều hơn nếu"
    },
    {
        answer:"Giá giảm làm cho một số người mua nhiều lên",
        question:"Cầu thị trường là đường dốc xuống dưới về phía phải vì"
    },
    {
        answer:"giá tăng làm tổng doanh thu tăng.Vì cầu không co giãn (E <1) thì tăng gia slafm tăng doanh thu",
        question:"Cầu về một hàng hóa là không co giãn nếu"
    },
    {
        answer:"giá tăng làm tổng doanh thu tăng.",
        question:"Cầu về một hàng hóa là không co giãn nếu"
    },
    {
        answer:"sản phẩm trung bình đạt cực đại",
        question:"Chi phí biến đổi trung bình đạt cực tiểu cùng mức sản lượng tại đó"
    },
    {
        answer:"ATC và AVC tại điểm cực tiểu của chúng",
        question:"Chi phí cận biên (MC) cắt"
    },
    {
        answer:"sự tăng lên của tổng chi phí chia cho sự gia tăng của sản lượng",
        question:"Chi phí cận biên được tính là"
    },
    {
        answer:"sự gia tăng tổng chi phí khi sản xuất thêm một đơn vị sản phẩm",
        question:"Chi phí cận biên là"
    },
    {
        answer:"110$",
        question:"Chi phí cố định của một hãng là 100$. Nếu tổng chi phí sản xuất một đơn vị sản phẩm là 200$ và tổng chi phí sản xuất 2 đơn vị sản phẩm là 310$, chi phí cận biên của đơn vị sản phẩm thứ 2 là"
    },
    {
        answer:"Việc sử dụng tốt nhất cả thời gian và 10000 đồng của người đó.",
        question:"Chi phí cơ hội của một người đi cắt tóc mất 10.000 đồng là:"
    },
    {
        answer:"Giá trị của sự lựa chọn tốt nhất bị bỏ qua khi đưa ra sự lựa chọn",
        question:"Chi phí cơ hội là:"
    },
    {
        answer:"Đường cung dịch chuyển xuống dưới.",
        question:"Chi phí đầu vào để sản xuất ra dầu gội Romano dành cho các quý ông giảm xuống sẽ làm cho:"
    },
    {
        answer:"Đánh thuế thu nhập",
        question:"Chính phủ có thể khắc phục mất công bằng trong phân phối thu nhập thông qua"
    },
    {
        answer:"Vấn đề tiêu dùng tự do xuất hiện",
        question:"Chính phủ cung cấp hàng hóa công cộng thuần túy như an ninh quốc gia vì"
    },
    {
        answer:"Buôn lậu xăng dầu qua biên giới",
        question:"Chính phủ đặt giá trần đối với xăng dầu sẽ dẫn đến:"
    },
    {
        answer:"Giảm giá và tăng sản lượng của nhà độc quyền",
        question:"Chính phủ điều tiết độc quyền tự nhiên nhằm mục tiêu"
    },
    {
        answer:"Đánh thuế vào ngoại ứng tiêu cực và trợ cấp cho ngoại ứng tích cực",
        question:"Chính phủ giải quyết vấn đề ngoại ứng bằng cách"
    },
    {
        answer:"Bổ sung",
        question:"Co giãn cầu theo giá chéo mang dấu âm thì 2 hàng hóa đang xét là"
    },
    {
        answer:"Thay thế",
        question:"Co giãn cầu theo giá chéo mang dấu dương thì 2 hàng hóa đang xét là"
    },
    {
        answer:"thay đổi trong lượng cầu chia cho phần trăm thay đổi trong thu nhập",
        question:"Co giãn của cầu theo thu nhập là phần trăm"
    },
    {
        answer:"lợi ích cận biên giảm dần",
        question:"Có một thực tế rằng cốc nước cam thứ ba không mang lại sự thỏa mãn nhiều như cốc nước cam thứ hai, đây và một ví dụ về"
    },
    {
        answer:"Giảm giá",
        question:"Có thể hạn chế dư thừa hàng hóa trên thị trường thông qua:"
    },
    {
        answer:"Lượng cân bằng tăng giá cân bằng có thể tăng, hoặc giảm, hoặc không đổi",
        question:"Cung cấp thị trường về dầu ăn đều tăng thì"
    },
    {
        answer:"Lượng cân bằng tăng giá cân bằng có thể tăng, hoặc giảm, hoặc không đổi",
        question:"Cung cầu thị trường về gạo đều giảm thì"
    },
    {
        answer:"Giá và sản lượng thực phẩm đông lạnh đều giảm",
        question:"Cung thị trường về thực phẩm đông lạnh tăng, cầu thị trường về thực phẩm đông lạnh giảm thì"
    },
    {
        answer:"Sản phẩm của các hãng trong ngành là giống hệt nhau",
        question:"Đặc điểm nào dưới đây không phải của cạnh tranh độc quyền"
    },
    {
        answer:"Lượng bán của một hãng sẽ không có ảnh hưởng đáng kể đến các hãng khác",
        question:"Đặc điểm nào dưới đây không phải của độc quyền tập đoàn"
    },
    {
        answer:"Các hãng tương đối lớn so với quy mô của thị trường",
        question:"Đặc điểm nào dưới đây là của độc quyền tập đoàn"
    },
    {
        answer:"MUA/PA = MUB/PB",
        question:"Đẳng thức nào dưới đây thể hiện sự tối đa hóa lợi ích đối với hai hàng hóa A và B:"
    },
    {
        answer:"Luôn bán sản phẩm của mình ở miền co giãn của đường cầu",
        question:"Để tối đa hóa lợi nhuận độc quyền"
    },
    {
        answer:"P=MC",
        question:"Để tối đa hóa lợi nhuận trong thị trường cạnh tranh hoàn hảo, doanh nghiệp sẽ chọn sản lượng tại đó có:"
    },
    {
        answer:"Sự tăng lên của cầu kết hợp với sự giảm xuống của cung",
        question:"Điều gì chắc chắn gây ra sự gia tăng của giá cân bằng:"
    },
    {
        answer:"Giá cân bằng giảm và lượng cân bằng tăng",
        question:"Điều gì xảy ra với giá và lượng cân bằng khi cung tăng:"
    },
    {
        answer:"Tối đa hóa lợi nhuận tại mức sản lượng có MR",
        question:"Điều nào dưới đây đúng với cả độc quyền bán, cạnh tranh độc quyền và cạnh tranh hoàn hảo"
    },
    {
        answer:"Mỗi hãng đối diện với đường cầu dốc xuống.Vì độc quyền tập đoàn thì đường cầu bị gãy còn cạnh tranh độc quyền đường cầu dốc xuống",
        question:"Điều nào dưới đây đúng với cạnh tranh độc quyền nhưng không đúng với độc quyền tập đoàn"
    },
    {
        answer:"Công nghệ sản xuất thay đổi.Vì công nghệ là nhân tố ngoại sinh ảnh hưởng đến cung và làm dịch chuyển sang phải hoặc trái Công nghệ sản xuất thay đổi",
        question:"Điều nào dưới đây gây ra sự dịch chuyển của đường cung:"
    },
    {
        answer:"Công nghệ sản xuất thay đổi",
        question:"Điều nào dưới đây gây ra sự dịch chuyển của đường cung:"
    },
    {
        answer:"Giá hàng hoá thay đổi",
        question:"Điều nào dưới đây gây ra sự vận động dọc theo đường cung:"
    },
    {
        answer:"Doanh thu cận biên thường nhỏ hơn doanh thu trung bình",
        question:"Điều nào dưới đây không đúng trong trường hợp hãng cạnh tranh hoàn hảo."
    },
    {
        answer:"Chi phí ăn uống",
        question:"Điều nào dưới đây không được coi là bộ phận của chi phí cơ hội của việc đi học đại học:"
    },
    {
        answer:"Giá Cà phê Trung Nguyên giảm xuống",
        question:"Điều nào dưới đây không làm dịch chuyển đường cầu đối với Cà phê Trung Nguyên:"
    },
    {
        answer:"Sản phẩm khác nhau",
        question:"Điều nào dưới đây không phải là đặc điểm của thị trường cạnh tranh hoàn hảo:"
    },
    {
        answer:"Tiền thuê nhà thấp sẽ hạn chế cung nhà ở",
        question:"Điều nào dưới đây là tuyên bố thực chứng:"
    },
    {
        answer:"Công nghệ chế biến cà phê Trung Nguyên thay đổi",
        question:"Điều nào dưới đây làm dịch chuyển đường cung đối với Cà phê Trung Nguyên:"
    },
    {
        answer:"Nếu giá giảm, lượng cầu sẽ tăng trong khi lượng cung sẽ giảm.",
        question:"Điều nào dưới đây mô tả sự điều chỉnh của giá để hạn chế dư thừa?"
    },
    {
        answer:"Sản xuất những hàng hóa, dịch vụ gây ra ngoại ứng.",
        question:"Điều nào sau đây được các nhà kinh tế học gọi là thất bại thị trường"
    },
    {
        answer:"Cung cấp hàng hóa và dịch vụ công cộng",
        question:"Điều nào sau đây được các nhà kinh tế học gọi là thất bại thị trường"
    },
    {
        answer:"Số lượng hàng hoá mà người sản xuât muốn bán và có khả năng bán tại các mức giá khác nhau trong một khoảng thời gian nhất định (các yếu tố khác không đổi)",
        question:"Điều nào sau đây mô tả đường cung"
    },
    {
        answer:"Khi giá tăng lên 1% thì lượng cầu giảm đi 3%",
        question:"Độ co dãn của cầu theo giá = -3 có nghĩa là:"
    },
    {
        answer:"Co giãn của cầu theo giá trong ngắn hạn lớn hơn trong dài hạn",
        question:"Độ co giãn của cầu theo giá đối với bất kỳ đường cầu nào cũng là hằng số"
    },
    {
        answer:"Giá tưương đối của các hàng hóa",
        question:"Độ dốc của đường ngân sách phụ thuộc vào"
    },
    {
        answer:"Thu nhập và giá cả tương đối của các hàng hóa.",
        question:"Độ dốc của đường ngân sách phụ thuộc vào:"
    },
    {
        answer:"Giá bán bằng chi phí trung bình",
        question:"Doanh nghiệp hòa vốn khi:"
    },
    {
        answer:"Sự thay đổi tổng doanh thu khi bán thêm một đơn vị sản phẩm",
        question:"Doanh thu cận biên của một hãng độc quyền bán là"
    },
    {
        answer:"Số thu từ việc bán các hàng hóa và dịch vụ.",
        question:"Doanh thu được xác định là"
    },
    {
        answer:"Chi phí cố định cao và chi phí cận biên thấp",
        question:"Độc quyền tự nhiên thường có"
    },
    {
        answer:"Các mức giá cao hơn tạo động cơ cho các hãng bán nhiều hơn",
        question:"Dọc theo đường cung cá nhân, khi giá tăng thì lượng cung sẽ tăng vì"
    },
    {
        answer:"Số lượng một hàng hoá phải hy sinh để sản xuất thêm một đơn vị hàng hoá kia.",
        question:"Dọc theo đường giới hạn khả năng sản xuất, chi phí cơ hội là:"
    },
    {
        answer:"Độ co giãn của cầu theo giá thay đổi, nhưng độ dốc của đường cầu không đổi",
        question:"Đối với đường cầu tuyến tính, khi trượt dọc xuống dưới theo đường cầu thì:"
    },
    {
        answer:"Tăng",
        question:"Đối với hàng hóa bình thường (hàng hóa cao cấp), khi thu nhập tăng cầu sẽ"
    },
    {
        answer:"Đường cầu dịch chuyển sang phải",
        question:"Đối với hàng hóa bình thường, khi thu nhập tăng:"
    },
    {
        answer:"Luôn giảm khi hãng tăng sản lượng",
        question:"Đối với một hãng độc quyền tự nhiên, đường tổng chi phí trung bình"
    },
    {
        answer:"Sản phẩm doanh thu cận biên của lao động",
        question:"Đơn giá tiền lưương mà hãng sẵn sàng trả phụ thuộc vào"
    },
    {
        answer:"Quy luật lợi ích cận biên giảm dần.",
        question:"Đường bàng quan có dạng cong lồi về phía gốc tọa độ là do:"
    },
    {
        answer:"quy luật ích lợi cận biên giảm dần.",
        question:"Đường cầu có độ dốc âm được xác định trực tiếp từ"
    },
    {
        answer:"Cộng tất cả đường cầu của các cá nhân theo chiều ngang",
        question:"Đường cầu thị trường có thể được xác định bằng cách:"
    },
    {
        answer:"Cộng các đường lợi ích cận biên cá nhân theo chiều dọc",
        question:"Đường cầu thị trường đối với hàng hóa cá nhân được xác định"
    },
    {
        answer:"Đường AFC",
        question:"Đường chi phí nào trong các đường chi phí sau không có hình chữ U"
    },
    {
        answer:"Trong độc quyền không có đường cung",
        question:"Đường cung của độc quyền bán"
    },
    {
        answer:"Là đường chi phí cận biên phần nằm trên AVCmin",
        question:"Đường cung của hãng cạnh tranh hoàn hảo trong ngắn hạn"
    },
    {
        answer:"Đường chi phí cận biên của hãng, ở tất cả những điểm phía trên điểm chi phí biến đổi trung bình tối thiểu",
        question:"Đường cung của một hãng cạnh tranh hoàn hảo là phần dốc lên của"
    },
    {
        answer:"Lượng cung ứng với mỗi mức giá tăng lên",
        question:"Đường cung dịch chuyển sang phải có nghĩa là:"
    },
    {
        answer:"Thoải",
        question:"Đường cung đối với ngành lao động phổ thông sẽ:"
    },
    {
        answer:"Đường chi phí cận biên MC nằm trên điểm cực tiểu của đường chi phí biến đổi trung bình",
        question:"Đường cung ngắn hạn của doanh nghiệp trong thị trường cạnh tranh hoàn toàn là:"
    },
    {
        answer:"Tổng chiều ngang của các đường cung cá nhân các hãng",
        question:"Đường cung ngắn hạn của ngành là"
    },
    {
        answer:"Là tổng chiều ngang các đường cung của tất cả các hãng",
        question:"Đường cung thị trường"
    },
    {
        answer:"Cộng tất cả đường cung của các cá nhân theo chiều ngang",
        question:"Đường cung thị trường có thể được xác định bằng cách:"
    },
    {
        answer:"Giá tăng một số người bán nhiều hơn trước và một số người bắt đầu tư tham gia vào thị trường.",
        question:"Đường cung thị trường dốc lên vì"
    },
    {
        answer:"Chi phí chăn nuôi bò tăng",
        question:"Đường cung về thịt bò dịch chuyển là do:"
    },
    {
        answer:"Những kết hợp hàng hoá có thể sản xuất của nền kinh tế",
        question:"Đường giới hạn khả năng sản xuất biểu thị:"
    },
    {
        answer:"Khi nền kinh tế không tham gia vào thương mại quốc tế",
        question:"Đường giới hạn khả năng sản xuất của một nền kinh tế cũng chính là đường giới hạn khả năng tiêu dùng của nền kinh tế đó"
    },
    {
        answer:"Chi phí sản xuất rau giảm dần đến giá rau giảm",
        question:"Yếu tố nào gây ra sự vận động dọc theo đường cầu về rau của thị trường"
    },
    {
        answer:"Giá giảm, lượng giảm",
        question:"Giá hàng hóa thay thế cho hàng hóa X đang giảm mạnh, những yếu tố khác không đổi, vậy giá và lượng cân bằng cho hàng hóa X sẽ:"
    },
    {
        answer:"ích lợi cận biên của xúc xích và Coca là bằng nhau",
        question:"Giả sử bạn ăn xúc xích và uống Coca và bạn tin rằng thu được tổng ích lợi lớn nhất từ bữa ăn đó với mức chi là $6. Giá của một chiếc xúc xích và một lon Coca đều là $1. Có thể rút ra kết luận nào sau đây?"
    },
    {
        answer:"ích lợi cận biên của xúc xích phải tăng lên so với ích lợi cận biên của Coca",
        question:"Giả sử bạn ăn xúc xích và uống Coca và bạn tin rằng thu được tổng ích lợi lớn nhất từ bữa ăn đó với mức chi là $6. Giá của một chiếc xúc xích và một lon Coca đều là $1. Giả sử giá của một chiếc xúc xích tăng lên thành $2. Bạn sẽ thay đổi số lượng xúc xích và Coca được mua và tin rằng sẽ lại tối đa hóa tổng ích lợi. Có thể rút ra kết luận nào sau đây?"
    },
    {
        answer:"-0,1",
        question:"Giả sử giá của A giảm từ $10, 50 xuống $9, 50 làm cho lượng cầu về B tăng từ 7960 lên 8040 đơn vị. Co giãn chéo giữa A và B là:"
    },
    {
        answer:"0,5",
        question:"Giả sử giá của một hàng hóa tăng từ $5, 5 lên $6, 5 làm cho lượng cầu về hàng hóa đó giảm từ 12.000 xuống 11.500 đơn vị. co giãn khoảng của cầu theo giá là:"
    },
    {
        answer:"cam giảm",
        question:"Giả sử Hà có thể ăn táo, cam và đào. Nếu Hà tăng lượng cam tiêu dùng, ceteris paribus, theo lý thuyết ích lợi thì ích lợi cận biên của"
    },
    {
        answer:"là 0,6",
        question:"Giả sử lượng cầu về bia tươi giảm từ 103.000 lít /tuần xuống 97.000lít/tuần do giá tăng 10%. Co giãn của cầu theo giá:"
    },
    {
        answer:"300",
        question:"Giả sử một hãng tăng tổng số lao động từ 5 lên 6 công nhân, và kết quả là tổng sản phẩm của hãng tăng từ 100 đơn vị lên 400 đơn vị. Sản phẩm cận biên của đơn vị lao động thứ 6 là"
    },
    {
        answer:"MUA/ MUB = PA / PB",
        question:"Giả sử MUA và MUB tương ứng là ích lợi cận biên của hai hàng hóa A và B; PA và PB là giá của hai hàng hóa đó. Công thức nào sau đây minh họa ở điểm cân bằng?"
    },
    {
        answer:"Nước A có lợi thế so sánh so với nước B trong việc sản xuất điện thoại, nước C có lợi thế so sánh so với nước A trong việc sản xuất gạo",
        question:"Giả sử nước A xuất khẩu điện thoại sang nước B và nhập khẩu gạo từ nước C. Tình huống này cho thấy rằng"
    },
    {
        answer:"Các nước khác có lợi thế so sánh so với Việt Nam và Việt Nam nên nhập khẩu cà chua",
        question:"Giả sử ở Việt Nam, mức giá trong nước của cà chua khi không có thương mại quốc tế cao hơn mức giá thế giới. Điều này chứng tỏ rằng trong việc sản xuất cà chua thì"
    },
    {
        answer:"5.Vì MP3=TP3-TP2 = 15-10=5",
        question:"Giả sử tăng thêm 1 đơn vị lao động, từ 2 lên 3 công nhân, sản lượng tăng từ 10 đến 15 cái áo len. Sản phẩm cận biên của người công nhân thứ 3 là:"
    },
    {
        answer:"Q= 410-5,5P",
        question:"Giả sử thị trường có ba cá nhân khác nhau có phương trình cầu như sau: P1 =100-Q1; P2= 80-0,5Q2 và P3 = 60-0,4Q3. Phương trình đường cầu của thị trường là:"
    },
    {
        answer:"Q= -86 + 5,5P",
        question:"Giả sử thị trường có ba cá nhân khác nhau có phương trình cung như sau: P1 =10 + Q1; P2 =18 +0,5Q2 và P3=16 + 0,4Q3. Phương trình đường cung của thị trường là:"
    },
    {
        answer:"sản lượng đầu ra thay đổi như thế nào khi số lượng lao động thay đổi với quy mô nhà máy cố định",
        question:"Hàm sản xuất ngắn hạn của một hãng mô tả"
    },
    {
        answer:"25",
        question:"Hàm số cầu của hàng hóa X có dạng: QD = 100-2P. Để doanh thu của doanh nghiệp đạt cực đại thì mức giá phải bằng:"
    },
    {
        answer:"Giảm giá, giảm lượng",
        question:"Hàm số cầu của hàng hóa X có dạng: QD = 100-2P. Tại mức giá bằng 40 để tăng doanh thu doanh nghiệp nên:"
    },
    {
        answer:"Tăng giá, giảm lượng",
        question:"Hàm số cầu của hàng hóa X có dạng: Qd=100-2P. Tại mức giá bằng 20 để tăng doanh thu doanh nghiệp nên:"
    },
    {
        answer:"Tăng sản lượng.Vì MB=200-2Q, MC=Q+20 Thay Q=50 vào 2 hàm trên thì có MB>MC nên tăng Q",
        question:"Hàm tổng lợi ích (TB) và hàm tổng chi phí (TC) của một hoạt động như sau:"
    },
    {
        answer:"Q=100.Vì tối ưu khi MB=0, MB=(TB)'Q",
        question:"Hàm tổng lợi ích (TB) và hàm tổng chi phí (TC) của một hoạt động như sau: TB = 200Q-Q2 và TC = 200+ 0,5. Quy mô hoạt động tối đa hóa lợi ích là:"
    },
    {
        answer:"Tăng sản lượng",
        question:"Hàm tổng lợi ích (TB) và hàm tổng chi phí (TC) của một hoạt động như sau: TB=200Q-Q2và TC=200 + 20Q + 0,5Q2. Khi Q=50 muốn tăng lợi ích ròng phải đưa ra sự lựa chọn nào:"
    },
    {
        answer:"Q=100",
        question:"Hàm tổng lợi ích (TB) và hàm tổng chi phí (TC) của một hoạt động như sau: TB=200Q-Q2và TC=200 + 20Q + 0,5Q2. Quy mô hoạt động tối đa hóa lợi ích là:"
    },
    {
        answer:"Làm cho đường cung đối với lúa gạo dịch chuyển lên trên sang bên trái",
        question:"Hạn hán có thể sẽ:"
    },
    {
        answer:"Tổng doanh thu vẫn còn bù đắp được tổng chi phí biến đổi",
        question:"Hãng cạnh tranh hòa hảo vẫn tiếp tục sản xuất khi bị lỗ chừng nào mà"
    },
    {
        answer:"P = MC",
        question:"Hãng cạnh tranh hoàn hảo đạt lợi nhuận cực đại khi sản xuất ở mức sản lượng mà tại đó"
    },
    {
        answer:"Giá thấp hơn chi phí biến đổi trung bình tối thiểu",
        question:"Hãng cạnh tranh hoàn hảo sẽ đóng cửa sản xuất khi"
    },
    {
        answer:"Ngọn hải đăng",
        question:"Hàng hóa nào sau đây không có tính loại trừ trong tiêu dùng"
    },
    {
        answer:"Tăng lên 4,5%",
        question:"Hàng hóa X có Ep = -0,5. Giá hàng hóa X tăng lên 10%, vậy doanh thu của hàng hóa X sẽ:"
    },
    {
        answer:"Giá tăng, lượng tăng",
        question:"Hàng hóa X ngày càng phù hợp hơn với thị hiếu, sở thích của người tiêu dùng, những yếu tố khác không đổi, vậy giá và lượng cân bằng cho hàng hóa X sẽ:"
    },
    {
        answer:"Đơn vị sản lượng cuối cùng không tạo ra thêm lợi nhuận",
        question:"Hãng sẽ đạt lợi nhuận tối đa ở mức sản lượng đạt"
    },
    {
        answer:"Chi phí trung bình dài hạn không đổi.",
        question:"Hiệu suất không đổi theo quy mô có nghĩa là khi tất cả các đầu vào tăng lên:"
    },
    {
        answer:"Là chi phí cơ hội của việc xem phim",
        question:"Hoa có thể chọn đi xem phim hoặc đi chơi tennis. Nếu như Hoa quyết định đi xem phim thì giá trị của việc chơi tennis là:"
    },
    {
        answer:"nằm giữa 0 và 1",
        question:"Học phí giảm sẽ làm giảm doanh thu của các trường đại học nếu cầu về giáo dục đại học là"
    },
    {
        answer:"độ dốc của đường tổng ích lợi",
        question:"ích lợi cận biên bằng"
    },
    {
        answer:"Bảo sẽ thích chiếc bánh mỳ thứ hai hơn chiếc bánh mỳ thứ nhất",
        question:"Ích lợi cận biên giảm dần có nghĩa là:"
    },
    {
        answer:"Bảo sẽ thích chiếc bánh mỳ thứ hai hơn chiếc bánh mỳ thứ nhất",
        question:"Ích lợi cận biên giảm dần có nghĩa là:"
    },
    {
        answer:"ích lợi cận biên",
        question:"Ích lợi tăng thêm từ tiêu dùng đơn vị hàng hóa cuối cùng gọi là"
    },
    {
        answer:"Một đặc trưng cơ bản của độc quyền",
        question:"Khả năng tối đa hóa lợi nhuận bằng việc đặt giá là"
    },
    {
        answer:"Đường cầu đối với sản phẩm của hãng là đường dốc xuống",
        question:"Khi có cạnh tranh không hoàn hảo thì"
    },
    {
        answer:"Giá cân bằng chắc chắn giảm",
        question:"Khi cung tăng và cầu giảm thì:"
    },
    {
        answer:"Giá cân bằng chắc chắn giảm.Vì cung tăng thì giá giảm; cầu giảm thì giá giảm nên nếu cả 2 xảy ra chắc chắn giá sẽ giảm",
        question:"Khi cung tăng và cầu giảm thì:"
    },
    {
        answer:"Lượng cân bằng chắc chắn tăng, giá cân bằng không biết chắc",
        question:"Khi cung và cầu của cùng một sản phẩm tăng lên thì:"
    },
    {
        answer:"Doanh thu biên nhỏ hơn chi phí cận biên",
        question:"Khi doanh nghiệp tăng sản lượng mà làm lợi nhuận giảm,điều này có thể là do:"
    },
    {
        answer:"Vì khi sản lượng tăng, giá phải giảm đối với tất cả các đơn vị",
        question:"Khi gặp đường cầu dốc xuống thì doanh thu cận biên nhỏ hơn giá"
    },
    {
        answer:"Co giãn đơn vị",
        question:"Khi giá tăng 1%, tổng cầu tăng 1% thì cầu là"
    },
    {
        answer:"Đường chi phí cận biên dịch chuyển lên trên",
        question:"Khi giá yếu tố đầu vào cố định của một hãng tăng sẽ làm cho"
    },
    {
        answer:"Hàng hóa thứ cấp",
        question:"Khi hệ số co dãn của cầu theo thu nhập âm thì hàng hóa đó là:"
    },
    {
        answer:"Hai nước có thể thu được lợi ích từ việc trao đổi hai hàng hóa trong tất cả các trường hợp",
        question:"Khi nào hai nước A và B có thể thu được lợi ích từ việc trao đổi hai hàng hóa 1 và 2"
    },
    {
        answer:"năng suất cận biên giảm dần",
        question:"Khi người lao động thứ 7 được thuê, sản lượng tăng từ 100 đơn vị một tuần lên 110 đơn vị một tuần. Khi người lao động thứ 8 được thuê, sản lượng tăng từ 110 lên 118 đơn vị. Đây là ví dụ về"
    },
    {
        answer:"Nước A là người chấp nhận giá",
        question:"Khi phân tích lợi ích và chi phí từ thương mại quốc tế, nếu ta nói rằng nước A là nước nhỏ có nghĩa là"
    },
    {
        answer:"hãng đang gặp năng suất cận biên giảm dần",
        question:"Khi sản phẩm cận biên của lao động nhỏ hơn sản phẩm trung bình của lao động"
    },
    {
        answer:"ích lợi cận biên giảm xuống",
        question:"Khi số lượng hàng hóa được tiêu dùng tăng lên"
    },
    {
        answer:"Hàng hóa tư nhân",
        question:"Khi sự tiêu dùng có tính cạnh tranh và có tính loại trừ, thì sản phẩm là một"
    },
    {
        answer:"Hàng hóa công cộng",
        question:"Khi sự tiêu dùng không có tính cạnh tranh và không có tính loại trừ, thì sản phẩm là một"
    },
    {
        answer:"Các đường TC, ATC, AVC và MC đều dịch chuyển lên trên",
        question:"Khi tiền lương lao động trực tiếp tăng lên"
    },
    {
        answer:"FC",
        question:"Khoảng cách theo chiều thẳng đứng giữa TC và VC"
    },
    {
        answer:"Phải quan tâm đến cánh thức các đối thủ sẽ phản ứng lại các quyết định của mình",
        question:"Không giống như các hãng hoạt động trong thị trường cạnh tranh độc quyền, các hãng độc quyền tập đoàn"
    },
    {
        answer:"Chi phí kinh tế của sản xuất",
        question:"Lợi nhuận kinh tế được định nghĩa là sự chênh lệch giữa tổng doanh thu và"
    },
    {
        answer:"Mức đầu vào cần thiết cho một đơn vị đầu ra",
        question:"Lợi thế tuyệt đối được xác định bởi việc so sánh"
    },
    {
        answer:"Vận động về phía trên (bên trái) đường cầu",
        question:"Lượng cầu giảm có nghĩa là:"
    },
    {
        answer:"ít hơn mức sản lượng có hiệu quả",
        question:"Lượng hàng hóa công cộng do thị trường không bị điều tiết sản xuất có xu hướng:"
    },
    {
        answer:"mua nhiều A hơn và ít B hơn",
        question:"Mai có thể mua A hoặc B. Giá của cả A và B là $1. Khi chi tiêu hết thu nhập, Mai thu được ích lợi cận biên từ mua A là 10 và từ B là 8. Mai sẽ có lợi hơn nếu"
    },
    {
        answer:"$0,25",
        question:"Mai tiêu dùng 2 hàng hóa A và B, và đang ở điểm cân bằng. ích lợi cận biên của đơn vị hàng hóa A cuối cùng là 10 và B là 5. Nếu giá của A là $0,5, thì giá của B là:"
    },
    {
        answer:"Giả định rằng các đối thủ sẽ đáp lại sự giảm giá và lờ đi sự tăng giá",
        question:"Mô hình đường cầu gẫy"
    },
    {
        answer:"Vì độc quyền tập đoàn thì đường cầu bị gãy còn cạnh tranh độc quyền đường cầu dốc xuống",
        question:"Mỗi hãng đối diện với đường cầu dốc xuống"
    },
    {
        answer:"250",
        question:"Một doanh nghiệp độc quyền có hàm số cầu Q= 1000-2P và hàm tổng chi phí TC=2Q2+200. Để tối đa hóa doanh thu thì mức giá bán P phải bằng:"
    },
    {
        answer:"Sản phẩm cuối cùng bán ra chỉ tạo thêm được nguồn thu nhập tăng thêm đủ để trang trải các khoản chi phí sản xuất phát sinh thêm",
        question:"Một doanh nghiệp tối đa hóa lợi nhuận tại mức sản lượng nếu:"
    },
    {
        answer:"Thặng dư sản xuất lớn hơn 0",
        question:"Một hãng cạnh tranh hoàn hảo có đường chi phí cận biên MC= 2q + 3 và chi phí cố định là 50 (triệu đồng). Nếu giá của sản phẩm trên thị trường là P = 10 (triệu đồng/đơn vị) thì hãng nên sản xuất vì"
    },
    {
        answer:"Ps = 2Q + 1",
        question:"Một hãng cạnh tranh hoàn hảo có hàm chi phí là Q2 + Q + 169. Tìm đường cung của hãng?"
    },
    {
        answer:"1.Vì đóng cửa khi P",
        question:"Một hãng cạnh tranh hoàn hảo có hàm chi phí là Q2 + Q+ 169 Hãng sẽ đóng cửa sản xuất khi giá bằng"
    },
    {
        answer:"13",
        question:"Một hãng cạnh tranh hoàn hảo có hàm chi phí là Q2 + Q+ 169. Hãng hoà vốn khi giá bằng:"
    },
    {
        answer:"1",
        question:"Một hãng cạnh tranh hoàn hảo có hàm chi phí là Q2 + Q+ 169. Hãng sẽ đóng cửa sản xuất khi giá bằng"
    },
    {
        answer:"Q = 27",
        question:"Một hãng cạnh tranh hoàn hảo có hàm chi phí là Q2 + Q+ 169. Nếu giá thị trường là P=55, hãng sẽ sản xuất tại mức sản lượng nào để tối đa hoá lợi nhuận"
    },
    {
        answer:"Chi phí cận biên bằng giá và giá lớn hơn chi phí biến đổi bình quân tối thiểu",
        question:"Một hãng cạnh tranh hoàn hảo quyết định sản lượng tối ưu khi"
    },
    {
        answer:"Độc quyền bán",
        question:"Một hãng cung hàng hóa cho toàn bộ thị trường thì cấu trúc thị trường là"
    },
    {
        answer:"Trong miền không co giãn của đường cầu",
        question:"Một hãng độc quyền tối đa hóa lợi nhuận sẽ không bao giờ sản xuất ở mức sản lượng"
    },
    {
        answer:"nằm giữa 1 và vô cùng.",
        question:"Một hàng hóa có cầu là co giãn khi giá trị của độ co giãn là"
    },
    {
        answer:"Nhỏ hơn chi phí biến đổi trung bình tối thiểu",
        question:"Một hãng nên đóng cửa sản xuất nếu giá"
    },
    {
        answer:"1",
        question:"Một hãng sản xuất có hàm cầu là: Q=130-10P. Khi giá bán P=9 thì doanh thu là bao nhiêu?"
    },
    {
        answer:"Số lượng ít nhất các thông tin cần thiết để trả lời các câu hỏi đề cập trong mô hình",
        question:"Một mô hình kinh tế tốt bao gồm:"
    },
    {
        answer:"Lượng X tối đa là 100 và lượng Y tối đa là 50.Vì chỉ có thể X=100 với Y=0 hoặc X=0 với Y=50 khi thay vào phương trình đường giới hạn năng lực sản xuất",
        question:"Một nền kinh tế có đường giới hạn năng lực sản xuất được biểu diễn bằng phương trình sau X+2Y=100. Đường giới hạn năng lực sản xuất trên cho biết"
    },
    {
        answer:"Lượng X tối đa là 20 và lượng Y tối đa là 40",
        question:"Một nền kinh tế có đường giới hạn năng lực sản xuất được biểu diễn bằng phương trình sau X+2Y=100.Đường giới hạn năng lực sản xuất trên cho biết:"
    },
    {
        answer:"Đường thẳng tuyến tính",
        question:"Một nền kinh tế có đường giới hạn năng lực sản xuất được biểu diễn bằng phương trình sau X+2Y=100.Đường giới hạn năng lực sản xuất trên là:"
    },
    {
        answer:"Nền kinh tế không có khả năng sản xuất kết hợp hàng hóa trên",
        question:"Một nền kinh tế có đường giới hạn năng lực sản xuất được minh họa bởi phương trình sau: 2X2 +Y2=225 trong đó X là hàng hoá nông nghiệp còn Y là hàng hoá công nghiệp. Nền kinh tế có khả năng sản xuất kết hợp hàng hóa gồm X=10 và Y=10 hay không?"
    },
    {
        answer:"Y=5",
        question:"Một nền kinh tế có đường giới hạn năng lực sản xuất được minh họa bởi phương trình sau: 2X2 +Y2=225 trong đó X là hàng hoá nông nghiệp còn Y là hàng hoá công nghiệp. Nếu X=10 thì lượng Y tối đa có thể sản xuất được là bao nhiêu?"
    },
    {
        answer:"Nền kinh tế không có khả năng sản xuất kết hợp hàng hóa trên vì nó nằm ngoài khả năng của nền kinh tế.",
        question:"Một nền kinh tế có đường giới hạn năng lực sản xuất được minh họa bởi phương trình sau: 2X2 +Y2=225 trong đó X là hàng hoá nông nghiệp còn Y là hàng hoá công nghiệp.Nền kinh tế có khả năng sản xuất kết hợp hàng hóa gồm X=10 và Y=10 hay không?"
    },
    {
        answer:"200",
        question:"Một người cho vay với mức lãi suất i=10%, Sau 5 năm người đó nhận một khoản tiền cả vốn lẫn lãi là 322.102.Số tiền mà người đó cho vay là:"
    },
    {
        answer:"Q= 61; P = 61",
        question:"Một nhà độc quyền có hàm chi phí TC = Q2 + 2Q + 100 và đối diện với hàm cầu P = 122-Q. Để tối đa hoá doanh thu, nhà độc quyền sẽ sản xuất tại mức sản lượng Q và bán với giá P là:"
    },
    {
        answer:"Q= 30; P = 92",
        question:"Một nhà độc quyền có hàm chi phí TC = Q2 + 2Q + 100 và đối diện với hàm cầu P = 122-Q. Để tối đa hoá lợi nhuận, nhà độc quyền sẽ sản xuất tại mức sản lượng Q và bán với giá P là:"
    },
    {
        answer:"IImax = 1700.Vì tìm MR và MC rối đặt MR=MC sẽ tìm ra sản lượng. Lấy sản lượng thay vào hàm cầu tìm ra giá bán. Lấy doanh thu trừ chi phí ra lợi nhuận",
        question:"Một nhà độc quyền có hàm chi phí TC = Q2 + 2Q + 100 và đối diện với hàm cầu P = 122-Q. Lợi nhuận tối đa mà nhà độc quyền có thể thu được là:"
    },
    {
        answer:"PS=1800",
        question:"Một nhà độc quyền có hàm chi phí TC = Q2 + 2Q + 100 và đối diện với hàm cầu P = 122-Q. Thặng dư sản xuất bằng:"
    },
    {
        answer:"IImax = 1700",
        question:"Một nhà độc quyền có hàm chi phí TC = Q2 + 2Q + 100 và đối diện với hàm cầu P = 122-Q.Lợi nhuận tối đa mà nhà độc quyền có thể thu được là:"
    },
    {
        answer:"DWL = 150",
        question:"Một nhà độc quyền có hàm chi phí TC = Q2 + 2Q + 100 và đối diện với hàm cầu P = 122-Q.Phần mất không nhà độc quyền gây ra đối với xã hội là(DWL):"
    },
    {
        answer:"Chi phí cận biên tăng",
        question:"Một nhà độc quyền sẽ tăng mức giá tối đa hóa lợi nhuận khi"
    },
    {
        answer:"500",
        question:"Một nhà độc quyền tự nhiên có hàm cầu P=1000-Q, trong đó P tính bằng $ và Q tính bằng chiếc. Nhà độc quyền có hàm tổng chi phí là TC=21000+300Q. Nếu chính phủ yêu cầu nhà độc quyền đặt giá bằng 500$. Lượng hàng hóa cung cấp là"
    },
    {
        answer:"DWL= 61250",
        question:"Một nhà độc quyền tự nhiên có hàm cầu P=1000-Q, trong đó P tính bằng $ và Q tính bằng chiếc. Nhà độc quyền có hàm tổng chi phí là TC=21000+300Q. Phần mất không gây ra cho xã hội là bao nhiêu?"
    },
    {
        answer:"việc thích hay không thích các loại hàng hóa của một cá nhân",
        question:"Một nhà kinh tế học định nghĩa sở thích là"
    },
    {
        answer:"Cao hơn mức giá trong nước khi không có thương mại",
        question:"Một quốc gia có lợi thế so sánh trong việc sản xuất một sản phẩm nếu mức giá thế giới"
    },
    {
        answer:"Chỉ có một hãng duy nhất",
        question:"Một thị trường độc quyền bán"
    },
    {
        answer:"Số lượng mà tại đó doanh thu cận biên bằng chi phí cận biên",
        question:"Muốn tối đa hóa doanh thu, nhà độc quyền phải bán"
    },
    {
        answer:"sản phẩm cận biên, sản phẩm cận biên",
        question:"Năng suất cận biên giảm dần đề cập tới tình huống mà ________ của công nhân cuối cùng giảm xuống thấp hơn ________ của người công nhân trước đó"
    },
    {
        answer:"phía dưới ATC",
        question:"Nếu ATC đang giảm, khi đó MC phải"
    },
    {
        answer:"Có thể tăng, giảm hoặc không đổi",
        question:"Nếu cả cung và cầu đều tăng, giá thị trường sẽ:"
    },
    {
        answer:"Các tài nguyên sẽ không được đưa đến tay những người sử dụng hiệu quả nhất",
        question:"Nếu các chủ sở hữu không được bán các tài nguyên của mình thì"
    },
    {
        answer:"Tăng giá",
        question:"Nếu cầu không co giãn, hoặc ít co giãn, muốn tăng tổng doanh thu thì phải"
    },
    {
        answer:"tổng doanh thu không đổi.",
        question:"Nếu cầu về một hàng hóa là co giãn đơn vị, giá tăng 5% sẽ dẫn đến"
    },
    {
        answer:"lượng cân bằng giảm và tổng chi tiêu về nước cam cũng giảm.",
        question:"Nếu cầu về nước cam ép là co giãn theo giá, thời tiết băng giá làm mất mùa cam sẽ gây ra"
    },
    {
        answer:"chi phí cận biên đang tăng.",
        question:"Nếu chi phí biến đổi trung bình để sản xuất 10 đơn vị sản phẩm là 18$ và chi phí biến đổi trung bình để sản xuất 11 sản phẩm là 20$, chúng ta biết rằng giữa 10 và 11 sản phẩm"
    },
    {
        answer:"20$",
        question:"Nếu chi phí biến đổi trung bình để sản xuất 10 đơn vị sản phẩm là 18$ và chi phí biến đổi trung bình để sản xuất 11 sản phẩm là 20$, chúng ta biết rằng giữa 10 và 11 sản phẩm chi phí cận biên đang tăng. Nếu sản lượng tăng từ 5 đến 10 làm cho tổng chi phí tăng từ 100$ lên 200$, chi phí cận biên của mỗi sản phẩm trong 5 sản phẩm tăng lên này là"
    },
    {
        answer:"Tăng diện tích trồng lúa.",
        question:"Nếu chính phủ muốn giá lúa giảm chính phủ có thể làm điều nào dưới đây:"
    },
    {
        answer:"X và Y là 2 hàng hóa thay thế",
        question:"Nếu co giãn chéo giữa hai hàng hóa X và Y là dương, thì"
    },
    {
        answer:"lượng cầu giảm 20%",
        question:"Nếu độ co giãn của cầu theo giá bằng -2 có nghĩa là giá tăng 10% dẫn đến:"
    },
    {
        answer:"Lớn hơn 0",
        question:"Nếu doanh nghiệp độc quyền định mức sản lượng tại đó có doanh thu biên bằng chi phí cận biên bằng chi phí trung bình, thì lợi nhuận kinh tế sẽ:"
    },
    {
        answer:"Giá quýt sẽ tăng",
        question:"Nếu giá cam tăng lên bạn sẽ nghĩ gì về giá của quýt trên cùng một thị trường"
    },
    {
        answer:"X và Y là 2 hàng hóa thay thế.",
        question:"Nếu giá của hàng hóa Y tăng làm cho cầu về hàng hóa X tăng thì"
    },
    {
        answer:"0,83",
        question:"Nếu giá giảm 6% dẫn đến lượng cầu tăng 5%, độ co giãn của cầu bằng"
    },
    {
        answer:"Cố gắng giảm sản xuất hoặc đóng cửa",
        question:"Nếu giá giảm trong thị trường cạnh tranh hoàn hảo, khi đó các doanh nghiệp trong ngắn hạn sẽ"
    },
    {
        answer:"Cầu là không co giãn",
        question:"Nếu giá giảm xuống rất nhiều dẫn đến lượng cầu tăng lên không đáng kể thì"
    },
    {
        answer:"X và Y là hàng hoá bổ sung trong tiêu dùng.",
        question:"Nếu giá hàng hoá X tăng lên gây ra sự dịch chuyển của đường cầu đối với hàng hoá Y về phía bên trái thì:"
    },
    {
        answer:"-0,5",
        question:"Nếu giá tăng 10% dẫn đến lượng cầu giảm 5% thì độ co giãn của cầu theo giá là:"
    },
    {
        answer:"lớn hơn 1",
        question:"Nếu giá tăng làm tổng doanh thu giảm thì co giãn của cầu theo giá là"
    },
    {
        answer:"Mai sẵn sàng trả giá như nhau cho 2 loại hàng hóa đó",
        question:"Nếu Mai tối đa hóa ích lợi và 2 hàng hóa mà cô ta tiêu dùng có cùng ích lợi cận biên, thì"
    },
    {
        answer:"Giảm sản lượng và tăng giá bán",
        question:"Nếu một doanh nghiệp cạnh tranh hoàn hảo nhận thấy rằng doanh thu cận biên của doanh nghiệp lớn hơn chi phí cận biên của nó, khi đó doanh nghiệp sẽ tăng thêm lợi nhuận nếu:"
    },
    {
        answer:"Nằm giữa điểm đóng cửa và điểm hòa vốn",
        question:"Nếu một hãng cạnh tranh hoàn hảo trong ngắn hạn có thể bù đắp được chi phí biến đổi và một phần chi phí cố định thì nó đang hoạt động tại phần đường chi phí cận biên mà"
    },
    {
        answer:"Tăng giá và giảm sản lượng",
        question:"Nếu một nhà độc quyền đang sản xuất tại mức sản lượng tại đó chi phí cận biên lớn hơn doanh thu cận biên, nhà độc quyền nên"
    },
    {
        answer:"Nước đó sẽ xuất khẩu hàng hóa đó.",
        question:"Nếu một quốc gia cho phép thương mại, và với một hàng hóa mức giá trong nước khi không có thương mại thấp hơn mức giá thế giới"
    },
    {
        answer:"Nó có thể sản xuất hàng hóa đó với chi phí cơ hội thấp hơn nước bạn hàng của mình",
        question:"Nếu một quốc gia có lợi thế so sánh trong việc sản xuất một hàng hóa"
    },
    {
        answer:"Xuất khẩu thép, vì nước đó có lợi thế so sánh trong sản xuất thép",
        question:"Nếu mức giá thép trên thị trường thế giới cao hơn mức giá trong nước khi không có thương mại thì nước này nên"
    },
    {
        answer:"Chi phí cơ hội của việc sản xuất lượng thực của nước A là nghịch đảo của chi phí cơ hội của việc sản xuất quần áo..",
        question:"Nếu nước A có thể sản xuất lương thực, quần áo hoặc một kết hợp của hai loại hàng hóa này thì"
    },
    {
        answer:"Xuất khẩu đường",
        question:"Nếu nước D có lợi thế so sánh so với các nước khác trong việc sản xuất đường, nhưng các nước khác có lợi thế tuyệt đối so với nước D trong việc sản xuất đường. Nếu thương mại quốc tế với đường được cho phép thì nước D sẽ"
    },
    {
        answer:"Nhập khẩu đường",
        question:"Nếu nước E có lợi thế tuyệt đối so với các nước khác trong việc sản xuất đường, nhưng các nước khác có lợi thế so sánh so với nước E trong việc sản xuất đường. Nếu thương mại quốc tế với đường được cho phép thì nước E sẽ"
    },
    {
        answer:"tỷ lệ thu nhập cho chi tiêu vào hàng hóa đó là nhiều hơn",
        question:"Nếu phần trăm tăng lên trong giá là như nhau có thể dẫn đến phần trăm giảm trong lượng cầu là nhiều hơn nếu"
    },
    {
        answer:"20$",
        question:"Nếu sản lượng tăng từ 5 đến 10 làm cho tổng chi phí tăng từ 100$ lên 200$, chi phí cận biên của mỗi sản phẩm trong 5 sản phẩm tăng lên này là"
    },
    {
        answer:"Hiệu suất giảm theo quy mô.",
        question:"Nếu tất cả các yếu tố đầu vào tăng 10% và sản lượng đầu ra tăng nhỏ hơn 10%. Đây là trường hợp:"
    },
    {
        answer:"Độc quyền tập đoàn",
        question:"Nếu thị trường bị khống chế bởi một số hãng thì cấu trúc thị trường là"
    },
    {
        answer:"Tổng độ thỏa dụng sẽ tăng chậm dần",
        question:"Nếu thỏa dụng biên có xu hướng dương và giảm dần khi gia tăng lượng tiêu dùng thì:"
    },
    {
        answer:"tổng ích lợi là lớn nhất",
        question:"Nếu tiêu dùng hết thu nhập và ích lợi cận biên trên một $ của tất cả các hàng hóa chi mua là bằng nhau thì"
    },
    {
        answer:"X sẽ giảm và Y sẽ tăng",
        question:"Nếu X và Y là hai hàng hóa bổ sung trong tiêu dùng và chi phí nguồn lực để sản xuất ra hàng hóa X giảm xuống, thì giá của:"
    },
    {
        answer:"Đường bàng quan tiếp xúc với đường ngân sách",
        question:"Người tiêu dùng lựa chọn tập hợp hàng hóa tiêu dùng tối ưu khi:"
    },
    {
        answer:"3",
        question:"Người tiêu dùng tiêu dùng 4 sản phẩm thì có tổng thỏa dụng bằng 20, tiêu dùng năm sản phẩm thì tổng thỏa dụng bằng 23. Vậy thỏa dụng biên của sản phẩm thứ 5 bằng:"
    },
    {
        answer:"Hàng hóa nào có ích lợi cận biên trên một đồng chi tiêu lớn hơn",
        question:"Người tiêu dùng tối đa hóa mức thỏa mãn sẽ chọn:"
    },
    {
        answer:"ích lợi cận biên trên một đồng chi tiêu của đơn vị hàng hóa cuối cùng bằng nhau",
        question:"Người tiêu dùng tối đa hóa mức thỏa mãn sẽ đạt điểm tiêu dùng tối ưu khi"
    },
    {
        answer:"Một quốc gia có thể thu lợi từ việc tập trung nguồn lực vào hàng hóa mà họ sản xuất hiệu quả nhất",
        question:"Nguyên lý về lợi thế so sánh cho thấy"
    },
    {
        answer:"Nhà độc quyền phải giảm giá để bán thêm sản phẩm trong bất kỳ giai đoạn nào",
        question:"Nhà độc quyền đối diện với đường cầu dốc xuống, doanh thu cận biên không bao giờ lớn hơn giá vì"
    },
    {
        answer:"Giảm giá và tăng sản lượng",
        question:"Nhà độc quyền nhận thấy rằng tại mức sản lượng hiện tại thì doanh thu cận biên của họ là 5$ và chi phí cận biên là 4,1$. Điều kiện nào sau đây sẽ làm tối đa hóa lợi nhuận của nhà độc quyền"
    },
    {
        answer:"Giá của bản thân hàng hoá.",
        question:"Nhân tố nào sau gây ra sự vận động dọc theo đường cầu:"
    },
    {
        answer:"Dọc theo một đường cầu thị trường, khi giá tăng thì lượng cầu sẽ giảm",
        question:"Những người sở hữu sẽ không hành động một cách hợp lý"
    },
    {
        answer:"Nếu nước A cho phép thương mại quốc tế, họ sẽ nhập khẩu cá",
        question:"Nước A không cho phép thương mại quốc tế. Ở nước này, người ta có thể mua 1 cân cá với giá là 2 cân thịt bò. Ở các nước khác, người ta có thể mua 1 cân cá với giá là 1,5 cân thịt bò. Điều này chỉ ra rằng"
    },
    {
        answer:"Nếu nước B cho phép thương mại quốc tế, họ sẽ xuất khẩu cá.Vì giá tương đối giữa cá và thịt bò ở nước A thấp hơn nước khác nên xuất khẩu cá có lợi hơn",
        question:"Nước A không cho phép thương mại quốc tế. Ở nước này, người ta có thể mua 1 cân cá với giá là 2 cân thịt bò. Ở các nước khác, người ta có thể mua cá vơi sgia slaf 3 cân thịt bò"
    },
    {
        answer:"tổng ích lợi của tất cả các hàng hóa là bằng nhau",
        question:"Ở điểm cân bằng, câu nào sau đây là không đúng?"
    },
    {
        answer:"sản phẩm trung bình đang tăng",
        question:"Phần chi phí biến đổi trung bình đang giảm dần chính là phần tại đó"
    },
    {
        answer:"Đầu vào lao động và tư bản",
        question:"Quy luật hiệu suất giảm dần đúng với"
    },
    {
        answer:"Khi một hãng sử dụng ngày càng nhiều một đầu vào biến đổi, với lượng các đầu vào cố định cho trước, sản phẩm cận biên của đầu vào biến đổi cuối cùng sẽ giảm xuống",
        question:"Quy luật năng suất cận biên giảm dần nói rằng"
    },
    {
        answer:"Tổng sản phẩm chia cho lượng lao động.",
        question:"Sản phẩm bình quân của lao động là"
    },
    {
        answer:"tăng một đơn vị lao động, với lượng vốn không đổi",
        question:"Sản phẩm cận biên của lao động là sự thay đổi trong tổng sản phẩm gây ra bởi"
    },
    {
        answer:"Sản phẩm doanh thu cận biên của đơn vị cuối cùng bằng giá phải trả cho đơn vị lao động đó",
        question:"Số lượng lao động tối ưu mà hãng thuê là lượng lao động mà tại đó:"
    },
    {
        answer:"Đặt giá cao hơn; Bán ít sản phẩm hơn",
        question:"So với cạnh tranh, độc quyền bán"
    },
    {
        answer:"Có thể xảy ra nếu việc tiêu dùng hàng hóa dịch vụ không có tính loại trừ",
        question:"Sự tiêu dùng tự do (không phải trả tiền):"
    },
    {
        answer:"Khả năng đặt giá",
        question:"Sức mạnh thị trường đề cập tới"
    },
    {
        answer:"đường tổng chi phí trung bình dịch chuyển lên trên",
        question:"Tăng giá một đầu vào cố định sẽ làm cho"
    },
    {
        answer:"Sự dịch chuyển đường giới hạn khả năng sản xuất ra bên ngoài",
        question:"Tăng trưởng kinh tế có thể được minh hoạ bởi:"
    },
    {
        answer:"Nhận định nào trong những nhận định về co giãn của cầu theo giá sau đây là đúng?",
        question:"Tạo động cơ"
    },
    {
        answer:"tối đa hóa ích lợi và làm cân bằng ích lợi cân biên trên một $ của tất cả các hàng hóa chi mua",
        question:"Theo lý thuyết về ích lợi, người tiêu dùng"
    },
    {
        answer:"5/sản phẩm.",
        question:"Thị trường sản phẩm A có hàm cung và cầu như sau: Ps = 10 + Qs và Pd = 100-Qd. Nếu nhà nước đánh thuế t = 10/ sản phẩm, xác định phần thuế mà người tiêu dùng phải chịu/ sản phẩm?"
    },
    {
        answer:"Thiếu hụt 30.",
        question:"Thị trường sản phẩm A có hàm cung và cầu như sau:Ps = 10 + Qs và Pd = 100-Qd. Nếu chính phủ ấn định giá là 40 thì điều gì xảy ra:"
    },
    {
        answer:"Pe = 60 và Qe = 40",
        question:"Thị trường sản phẩm A có hàm cung và cầu như sau:Ps = 10 + Qs và Pd = 100-Qd. Nếu nhà nước đánh thuế t = 10/ sản phẩm, xác định điểm cân bằng mới"
    },
    {
        answer:"Thiếu hụt 30",
        question:"Thị trường sản phẩm A có hàm cung và cầu như sau:Ps = 10 + Qs và Pd = 100-Qd Nếu chính phủ ấn định giá là 40 thì điều gì xảy ra:"
    },
    {
        answer:"Dư thừa 50",
        question:"Thị trường sản phẩm A có hàm cung và cầu như sau:Ps = 10 + Qs và Pd = 100-QdNếu chính phủ ấn định giá là 80 thì điều gì xảy ra"
    },
    {
        answer:"TR=2475",
        question:"Thị trường sản phẩm A có hàm cung và cầu như sau:Ps = 10 + Qs và Pd = 100-QdTổng doanh thu tại mức giá cân bằng là bao nhiêu?"
    },
    {
        answer:"NSB = 1800.",
        question:"Thị trường sản phẩm A được coi là cạnh tranh và được mô tả bằng hàm cung và cầu như sau: Ps = 10 + Qs và Pd = 100-Qd. Khi áp đặt giá P=40, lợi ích ròng xã hội bằng:"
    },
    {
        answer:"CS = 1012,5; PS = 1012,5",
        question:"Thị trường sản phẩm A được coi là cạnh tranh và được mô tả bằng hàm cung và cầu như sau: Ps = 10 + Qs và Pd = 100 – Qd. Tính thặng dư tiêu dùng và thặng dư sản xuất tại điểm cân bằng:"
    },
    {
        answer:"Pe = 55 và Qe = 45",
        question:"Thị trường sản phẩm A được coi là cạnh tranh và được mô tả bằng hàm cung và cầu như sau: Ps = 10 + Qs và Pd = 100 – Qd.Tính giá và sản lượng lượng cân bằng"
    },
    {
        answer:"Giá thấp hơn giá cân bằng",
        question:"Thiếu hụt trên thị trường tồn tại khi:"
    },
    {
        answer:"không co giãn theo thu nhập",
        question:"Thu nhập của Minh tăng từ $950/ tuần lên $1050/tuần. Kết quả là anh ta quyết định tăng số bộ phim anh ta sẽ xem lên 5%. Vậy cầu về phim của Minh là:"
    },
    {
        answer:"Thị trường xác định giá yếu tố sản xuất",
        question:"Thu nhập không công bằng trong nền kinh tế vì"
    },
    {
        answer:"Hàng hóa tư nhân",
        question:"Thu nhập không công bằng trong nền kinh tế vìKhi sự tiêu dùng có tính cạnh tranh và có tính loại trừ, thì sản phẩm là một"
    },
    {
        answer:"0,5",
        question:"Thu nhập tăng 10% làm cho lượng cầu tăng 5%. Co giãn của cầu theo thu nhập là:"
    },
    {
        answer:"Khan hiếm",
        question:"Thực tiễn nhu cầu của con người không được thoả mãn đầy đủ với nguồn lực hiện có được gọi là vấn đề:"
    },
    {
        answer:"Đường cung của nhà sản xuất dịch chuyển lên trên",
        question:"Thuế đánh vào đơn vị hàng hoá của nhà sản xuất sẽ làm cho:"
    },
    {
        answer:"Sản lượng giảm, giá tăng, lợi nhuận giảm",
        question:"Thuế trên đơn vị sản phẩm đánh vào nhà sản xuất độc quyền sẽ làm cho"
    },
    {
        answer:"Khi sản lượng tăng thì chi phí trung bình giảm",
        question:"Tính kinh tế của quy mô là"
    },
    {
        answer:"tổng ích lợi cận biên của tất cả các đơn vị hàng hóa được tiêu dùng.",
        question:"Tổng ích lợi bằng"
    },
    {
        answer:"Càng cao",
        question:"Trên cùng một đường cầu tuyến tính dốc xuống theo qui luật cầu, tương ứng với mức giá càng cao thì độ co giãn của cầu theo giá sẽ:"
    },
    {
        answer:"MC=ATC",
        question:"Trong các đẳng thức dưới đây đẳng thức nào đúng ứng với mức sản lượng tại đó ATC đạt giá trị cực tiểu"
    },
    {
        answer:"Độc quyền không mang lại lợi ích gì cho xã hội",
        question:"Trong các nhận định sau, nhận định nào sai:"
    },
    {
        answer:"Bằng giá",
        question:"Trong cạnh tranh hoàn hảo, doanh thu bình quân của một hãng là"
    },
    {
        answer:"Việc gi nhập thị trường là tưương đối dễ nên khi các hãng ở trong ngành thu được lợi nhuận kinh tế dưương thì sẽ có hãng mới gia nhập ngành",
        question:"Trong dài hạn hãng cạnh tranh độc quyền thu được lợi nhuận bằng không vì:"
    },
    {
        answer:"Tất cả các đầu vào đều biến đổi.",
        question:"Trong dài hạn thì:"
    },
    {
        answer:"Lợi nhuận kinh tế bằng 0",
        question:"Trong dài hạn, tất cả các hãng trong ngành cạnh tranh độc quyền thu được"
    },
    {
        answer:"MR>ATC",
        question:"Trong điều kiện nào dưới đây, một hãng cạnh tranh hoàn hảo sẽ kiếm được lợi nhuận kinh tế"
    },
    {
        answer:"Các hãng không cạnh tranh với nhau bằng giá",
        question:"Trong độc quyền tập đoàn, giá cứng nhắc vì:"
    },
    {
        answer:"trong đó ít nhất một đầu vào cố định và ít nhất một đầu vào biến đổi",
        question:"Trong kinh tế học, ngắn hạn đề cập đến giai đoạn"
    },
    {
        answer:"Tương tác giữa cung và cầu",
        question:"Trong nền kinh tế thị trường, giá cân bằng được xác định bởi"
    },
    {
        answer:"Tốc độ thay đổi về doanh thu bằng tốc độ thay đổi về chi phí",
        question:"Trong ngắn hạn , các doanh nghiệp muốn tối đa hóa lợi nhuận hoặc tối thiểu hóa thiệt thòi (lỗ vốn) phải thỏa mãn điều kiện:"
    },
    {
        answer:"khoảng cách giữa tổng chi phí trung bình và chi phí biến đổi trung bình thu hẹp dần là chi phí cận biên",
        question:"Trong những tuyên bố đề cập đến chi phí ngắn hạn dưới đây, tuyên bố nào là sai?"
    },
    {
        answer:"đường tổng chi phí có dạng chữ U.",
        question:"Trong những tuyên bố đề cập đến chi phí ngắn hạn dưới đây, tuyên bố nào là sai?"
    },
    {
        answer:"Nhờ đó chúng ta có thể giả sử rằng mức giá thế giới sẽ không bị ảnh hưởng bởi sự tham gia của quốc gia này vào thương mại quốc tế",
        question:"Trong phân tích về lợi ích và chi phí từ thương mại quốc tế, việc giả sử một nền kinh tế là nhỏ thường được thực hiện bởi"
    },
    {
        answer:"Đường sản phẩm trung bình đạt giá trị cao nhất khi sản phẩm cận biên bằng sản phẩm trung bình",
        question:"Tuyên bố nào dưới đây là đúng?"
    },
    {
        answer:"Tổng chi phí bằng chi phí cố định cộng chi phí trung bình",
        question:"Tuyên bố nào dưới đây là sai"
    },
    {
        answer:"25 triệu đồng.",
        question:"Tỷ lệ lãi suất là 10%/năm. Bạn đầu tư 150 triệu đồng tiền riêng của mình vào một công việc kinh doanh và kiếm được lợi nhuận tính toán là 40 triệu đồng sau một năm. Giả định các yếu tố khác không đổi thì lợi nhuận kinh tế bạn thu được là:"
    },
    {
        answer:"Trong tất cả các nền kinh tế.",
        question:"Vấn đề khan hiếm tồn tại:"
    },
    {
        answer:"Các nguyên nhân làm giá cam giảm",
        question:"Vấn đề nào dưới đây không thuộc kinh tế vĩ mô:"
    },
    {
        answer:"Thất bại thị trường",
        question:"Việc sản xuất quá nhiều hàng hóa có ngoại ứng tiêu cực là ví dụ về"
    },
    {
        answer:"Giá hàng hoá càng cao thì lượng cầu càng giảm",
        question:"Với giả định các yếu tố khác không thay đổi, luật cầu cho biết:"
    },
    {
        answer:"Người tiêu dùng trong nước thích dùng vải nội địa hơn trước đây",
        question:"Yếu tố nào gây ra sự vận động dọc theo đường cung về vải của thị trường nội địa (yếu tố khác không đổi)"
    },
    {
        answer:"Giá hàng hóa đó tăng",
        question:"Yếu tố nào không làm cho đường cung cá nhân dịch chuyển (các yếu tố khác không đổi)"
    },
    {
        answer:"Giá của bản thân hàng hóa tăng",
        question:"Yếu tố nào sau đây không làm cho đường cầu cá nhân dịch chuyển (yếu tố khác giữ nguyên hoặc không đổi)"
    }
];

class VIMO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            secretKey: "",
            check: false,
            listBook: [],
            filteredBooks: []
        };
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        this.setState({listBook: books});
        console.log(books);
    }

    convertStr(string) {
        return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        // if (name === 'secretKey') {
        //     if (value === "aum30dhktqd") {
        //         this.setState({check: true});
        //         console.log(value)
        //     }
        // }
        // if (name === 'searchText') {
        let filteredBooks = this.state.listBook.filter(
            ({question, answer, key}) =>
                this.convertStr(question).toLowerCase().includes(this.convertStr(value.toLowerCase()))
                ||
                this.convertStr(answer).toLowerCase().includes(this.convertStr(value.toLowerCase()))
        );
        this.setState({filteredBooks: filteredBooks});
        // }
    }

    render() {

        return (

            <div>
                <p><Link to="/">Home</Link></p>
                {/*<input*/}
                {/*    type="text" placeholder="Key bí mật"*/}
                {/*    value={this.state.secretKey}*/}
                {/*    name="secretKey"*/}
                {/*    onChange={this.handleChange}*/}
                {/*/>*/}
                <input
                    type="text" placeholder="Từ khoá psd"
                    value={this.state.searchText}
                    name="searchText"
                    onChange={this.handleChange}/>

                {/*{*/}
                {/*// this.state.check === true ?*/}
                <ul>
                    {this.state.filteredBooks.map(({question, answer,index}) => (
                        <li key={index}>
                            <strong>{ question}</strong>
                            <br/>
                            <p>{answer}</p>
                            {/*<img src="./image/nhan-tb.png"/>*/}
                        </li>
                    ))}
                </ul>
                {/*// : null*/}
                {/*// }*/}
            </div>
        )
    }
};
export default (VIMO);
