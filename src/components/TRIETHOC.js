import React from "react";
import {Link} from "react-router-dom";

const books = [
    {
        answer: " Phương án đúng là: Cả Vật chất và ý thức. Vì: Cả Vật chất và ý thức đều tồn tại thực",
        question: "Yếu tố nào là hiện thực"
    },
    {
        answer:"Phương án đúng là: Duy tâm. Vì: Khi lý giải nguồn gốc ra đời của ý thức các nhà duy tâm đã cho rằng, ý thức là nguyên thể đầu tiên, tồn tại vĩnh viễn, là nguyên nhân sinh ra thế giới vật chất",
        question:"Quan niệm: “Ý thức là nguyên thể đầu tiên, tồn tại vĩnh viễn, là nguyên nhân sinh ra thế giới vật chất” là của trường phái nào ?"
    },
    {
        answer:"Phương án đúng là: Khả năng. Vì: Chỉ có nguồn gốc tự nhiên chưa thể hình thành ý thức, mà đó chỉ là tiền đề tạo ra khả năng hình thành ý thức",
        question:"Theo quan điểm của chủ nghĩa duy vật biện chứng, nguồn gốc tự nhiên của ý thức có vai trò gì trong việc hình thành ý thức?"
    },
    {
        answer:"Phương án đúng là: Thừa nhận hay không thừa nhận về tính Vật chất của thế giới. Vì: Sự khác nhau về nguyên tắc giữa chủ nghĩa duy vật và chủ nghĩa duy tâm không phải ở việc Thừa nhận hay không thừa nhận về tính thống nhất của thế giới; Thừa nhận hay không thừa nhận về tính vô tận của thế giới; Thừa nhận hay không thừa nhận về tính vĩnh cửu của thế giới; mà ở chỗ: thừa nhận hay không thừa nhận về tính Vật chất của thế giới",
        question:"Sự khác nhau về nguyên tắc giữa chủ nghĩa duy vật và duy tâm là gì ?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Vật chất sinh ra ý thức. Nhưng khi ý thức đã ra đời sẽ có “đời sống” riêng; có quy luật vận động riêng, không lệ thuộc hoàn toàn vào vật chất. Mặt khác ý thức tác động trở lại vật chất",
        question:"Tính độc lập tương đối của ý thức được thể hiện như thế nào?"
    },
    {
        answer:"Phương án đúng là: Nước. Vì: Ông cho ràng, toàn thế giwos có khởi nguyên là Nước. Nước là bản chất chung của mọi vật. Mọi thứ được sinh ra từ Nước. Vạn vật là trạng thái khác nhau của Nước",
        question:"Thales cho bản nguyên của thế giới là"
    },
    {
        answer:"Phương án đúng là: Sai. Vì: Có 1 số trường phái đặc biệt, quy vật chất về những cái trừu tựợng. Như tính “Không” trong Phật giáo; “Đạo” trong Lão giáo",
        question:"Các học phái triết học thời cổ đại đã không quy vật chất về những cái trừu tượng. Nhận định trên là"
    },
    {
        answer:"Phương án đúng là: Đúng. Vì: Sự vật, hiện tượng được cấu tạo từ nhiều yếu tố tạo thành hệ thống. Trong đó, chúng tác động, ảnh hưởng lẫn nhau. Từ đó gây ra các biến đổi nói chung, tức là vận động. Nên vận động của vật chất là tự thân vận động và mang tính phổ biến",
        question:"Quan điểm: “Vận động của vật chất là tự thân vận động và mang tính phổ biến” là"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Nhận thức là quá trình phản ánh hiện thực khách quan một cách tích cực, chủ động, sang tạo bởi con người trên cơ sở thực tiễn mang tính lịch sử cụ thể",
        question:"Nhận thức là quá trình …?"
    },
    {
        answer:"Phương án đúng là: Ba chiều không gian, một chiều thời gian. Vì: Không gian và thời gian là một thể thống nhất. Nên vật chất có ba chiều không gian(dài, rộng, cao), một chiều thời gian (từ quá khứ tới hiện tại)",
        question:"Do có sự thống nhất giữa không gian và thời gian, nên vật chất có mấy chiều không gian và mấy chiều thời gian ?"
    },
    {
        answer:"Phương án đúng là: Nguồn gốc xã hội. Vì: Lao động và ngôn ngữ có ý nghĩa là động lực xã hội trực tiếp thúc đẩy sự ra đời của ý thức.",
        question:"Bằng nhận định: “Trước hết là lao động, sau lao động và đồng thời với lao động là ngôn ngữ; đó là 2 sức kích thích chủ yếu đã ảnh hưởng đến bộ óc con vượn, làm cho bộ óc đó dần dần chuyển thành bộ óc con người”, Ph. Ăng ghen đã nói về nguồn gốc nào của ý thức"
    },
    {
        answer:"Phương án đúng là: trong mối liên hệ đưa đến cái chung. Vì: Cái chung tồn tại trong cái riêng như là bộ phận của cái riêng.",
        question:"Cái riêng tồn tại như thế nào?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Đứng im là trạng thái ổn định về chất của sự vật; Đứng im diễn ra trong các mối liên hệ và điều kiện cụ thể",
        question:"Sự đứng im có tính tương đối vì"
    },
    {
        answer:"Phương án đúng là: Cả A + B + C . Vì: Tia X, điện tử nhỏ hơn nguyên tử. Nguyên tử thay đổi trong hiện tượng phóng xạ",
        question:"Các thành tựu khoa học tự nhiên cuối TK19 - đầu TK 20, minh chứng cho tính chất nào của nguyên tử"
    },
    {
        answer:"Phương án đúng là: nội dung quyết định hình thức và hình thức tác động trở lại nội dung. Vì: Nội dung được hiểu là tổng hợp tất cả những mặt, những yếu tố, những quá trình tạo nên sự vật, hiện tượng; còn hình thức được hiểu là phương thức tồn tại và phát triển của sự vật, hiện tượng đó, là hệ thống các mối liên hệ tương đối bền vững giữa các yếu tố của nó",
        question:"Trong mối quan hệ giữa nội dung và hình thức thì:"
    },
    {
        answer:"Phương án đúng là: Khả năng và hiện thực tồn tại trong mối quan hệ tác động, chuyển hoá lẫn nhau. Vì: Khả năng xuất hiện và tồn tại (dưới dạng là khả năng) trong hiện thực. Và khả năng sẽ biến thành hiện thực khi có điều kiện.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: Nội dung và hình thức luôn gắn bó chặt chẽ với nhau. Vì: Mối quan hệ giữa nội dung và hình thức là mối quan hệ biện chứng.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: khái niệm, phán đoán và suy lý. Vì: - Nhận thức là quá trình đi từ biết ít đến biết nhiều, từ biết chưa đầy đủ đến ngày càng đầy đủ hơn.",
        question:"Các hình thức cơ bản của nhận thức lý tính là:"
    },
    {
        answer:"Phương án đúng là: Vật chất tồn tại bằng cách vận động, thông qua vận động để bộc lộ sự tồn tại cụ thể, đa dạng của mình. Không thể có vận động phi vật chất cũng như không thể có vật chất không vận động. Sự vận động của vật chất là tự thân vận động. Vì: - Mệnh đề vận động là “thuộc tính cố hữu của vật chất” nhằm khẳng định sự vận động của vật chất có nguyên nhân ngay trong chính vật chất.",
        question:"Hai mệnh đề :Vận động là “thuộc tính cố hữu của vật chất” và “Vận động là phương thức tồn tại của vật chất” được hiểu là:"
    },
    {
        answer:"Phương án đúng là: hoạt động sản xuất vật chất có vai trò quan trọng nhất. Vì: - Hoạt động sản xuất vật chất là hoạt động đầu tiên nhất và tồn tại lâu dài cùng với con người và xã hội loài người.",
        question:"Trong mối quan hệ giữa các hình thức cơ bản của thực tiễn, thì:"
    },
    {
        answer:"Phương án đúng là: Nguyên tử. Vì: Ông cho rằng, toàn thế giới có khởi nguyên là Nguyên tử. Đó là hạt vật chất nhỏ bé nhât không thể phân chia. Là thành phần chính cấu tạo nên sự vật",
        question:"Đêmocrit cho bản nguyên của thế giới là"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Quy luật phổ biến của phép biện chứng duy vật là Là quy luật bao trùm cả 3 lính vực: tự nhiên, xã hội, tư duy. Đó là một trong các nội dung trọng yếu của phép biện chứng duy vật và khi con người nhận thức được sẽ có ý nghĩa thực tiễn to lớn",
        question:"Thế nào là quy luật phổ biến của phép biện chứng duy vật ?",
    },
    {
        answer:"Phương án đúng là: Triệt để lợi dụng. Vì: Những sai lầm, hạn chế của chủ nghĩa duy tâm và duy vật siêu hình về ý thức đã được giai cấp bóc lột, thống trị triệt để lợi dụng làm cơ sở lý luận, công cụ để nô dịch quần chúng lao động",
        question:"Những quan niệm của chủ nghĩa duy tâm và duy vật siêu hình về ý thức đã được giai cấp bóc lột, thống trị ….."
    },
    {
        answer:"Phương án đúng là: Không khí. Vì: Ông cho ràng, toàn thế giới có khởi nguyên là Không khí. Đó là bản chất chung của mọi vật. Mọi thứ được sinh ra từ Không khí. Vạn vật là trạng thái quá độ của Không khí",
        question:"Anaximenes cho bản nguyên của thế giới là"
    },
    {
        answer:"Phương án đúng là: Đúng. Vì: Từ TQSĐ đến TDTT và từ TDTT quay trở về thực tiến là một vòng khâu của quá trình nhận thức. Từ đó làm cho nhận thức là vô tận",
        question:"Nhận định: “Có sự thống nhất biện chứng giữa TQSĐ, TDTT và thực tiễn” là …"
    },
    {
        answer:"Phương án đúng là: Tồn tại của thế giới. Vì: Không thừa nhận sự tồn tại của thế giới thì không thể nhận thức về thế giới",
        question:"Tiền đề cho sự thống nhất của thế giới là gì ?"
    },
    {
        answer:"Phương án đúng là: Đúng. Vì: Thế giới với rất nhiều hiện tượng: chuyển hóa giữa chất và trường; sóng và hạt; hạt và phản hạt,....",
        question:"Thế giới còn nhiều điều “kỳ là” mà con người đã, đang và sẽ tiếp tục nghiên cusu. Điều đó là"
    },
    {
        answer:"Phương án đúng là: A + B. Vì: theo khái niệm về tính tương đối và tính tuyệt đối của chân lý",
        question:"Thế nào là tính tuyệt đối và tương đối của chân lý"
    },
    {
        answer:"Phương án đúng là: tồn tại độc lập, không phụ thuộc vào ý thức con người. Vì: Sự tồn tại khách quan là sự tồn tại độc lập, không phụ thuộc vào ý thức con người.",
        question:"Vật chất tồn tại khách quan có nghĩa là vật chất:"
    },
    {
        answer:"Phương án đúng là: phương thức, cách thức chung của sự phát triển. Vì: Thông qua việc nghiên cứu nội dung quy luật này chúng ta có thể hiểu được cái gì là nguyên nhân, là động lực thúc đẩy sự vật, hiện tượng trong thế giới đã vận động và phát triển.",
        question:"Quy luật “chuyển hóa từ những thay đổi về lượng thành những thay đổi về chất và ngược lại” phản ánh và quy định điều gì ?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Vì từ mối quan hệ giữa vật chất và ý thức, cần quán triệt nguyên tắc tôn trọng tính khách quan kết hợp phát huy tính năng động chủ quan",
        question:"Từ mối quan hệ giữa vật chất và ý thức cần quán triệt nguyên tắc phương pháp luận nào?"
    },
    {
        answer:"Phương án đúng là: Không có vật chất không vân động. Vì: Vận động là “thuộc tính cố hữu của vật chất” và là “phương thức tồn tại của vật chất”.",
        question:"Từ mối quan hệ giữa vật chất và ý thức cần quán triệt nguyên tắc phương pháp luận nào?"
    },
    {
        answer:"Phương án đúng là: NT1. Vì: NT1 Khẳng định tính khách quan của đối tượng nhận thức",
        question:"Thừa nhận thế giới vật chất tồn tại khách quan bên ngoài và độc lập với ý thức con người là nội dung của nguyên tắc nào?"
    },
    {
        answer:"Phương án đúng là: Cả A + B + C. Vì: Ở đây cho rằng, toàn thế giới có khởi nguyên là ngũ hành. Đó là bản chất chung của mọi vật. Mọi thứ được sinh ra từ Ngũ hành.",
        question:"Người Trung hoa cổ đại cho bản nguyên của thế giới là"
    },
    {
        answer:"Phương án đúng là: Một dự báo khoa học tài tình. Vì: Theo dự báo đó, các nhà khoa học đã nghiên cứu tìm ra nguyên tử - như 1 thành phần cơ bản cấu tạo nên sự vật",
        question:"Điền vào chỗ trống trong câu: Thuyết nguyên tử vừa là một bước tiến lớn trong quá trình xây dựng định nghĩa về vật chất, vừa có ý nghĩa là ......về cấu trúc của vật chất"
    },
    {
        answer:"Phương án đúng là: qua lại giữa các thuộc tính trong một sự vật hoặc giữa các sự vật với nhau, gây ra một sự biến đổi nhất định. Vì: Theo định nghĩa: nguyên nhân là phạm trù triết học chỉ qua lại giữa các mặt, các bộ phận, các thuộc tính trong một sự vật hoặc giữa các sự vật với nhau, gây ra một sự biến đổi nhất định",
        question:"Nguyên nhân là phạm trù triết học chỉ sự tác động"
    },
    {
        answer:"Phương án là Đúng. Vì: Các nhà duy tâm phủ nhận đặc trưng “tự thân tồn tại” của sự vật , hiện tượng. Do đó, về mặt nhận thức CNDT cho rằng, con người hoặc là không thể, hoặc là chỉ nhận thức được cái bóng, cái bề ngoài của sự vật, hiện tượng..",
        question:"Về mặt nhận thức CNDT cho rằng, con người hoặc là không thể, hoặc là chỉ nhận thức được cái bóng, cái bề ngoài của sự vật, hiện tượng.."
    },
    {
        answer:"Phương án đúng là: Tia X năm 1895. Vì: Tia X có nhiều ứng dụng trong y học và các lĩnh vực khác. Nhưng phát hiện ra nó như sự tình cờ, bởi Rơnghen vào ngày 8/11/1895.",
        question:"Rơn ghen đã phát hiện ra hiện tượng nào vào năm bao nhiêu?"
    },
    {
        answer:"Phương án đúng là: Khởi nguyên của thế giới. Vì: Từ một hay một vài dạng cụ thể đó mà hình thành nên cả thế giới vật chất",
        question:"Các nhà duy vật thời cổ đại đã quy vật chất về một hay vài dạng cụ thể và xem chúng là ..."
    },
    {
        answer:"Phương án đúng là: Đúng. Vì: Vật chất luôn biểu hiện đặc tính hiện thực khách quan của nó dưới dạng các thực thể với đặc tính bản thể luận vốn có, nên khi tác động tới giác quan thì gây ra cảm giác",
        question:"Quan điểm: “VC là cái mà khi tác động vào giác quan con người thì đem lại cho con người cảm giác”"
    },
    {
        answer:"Phương án đúng là: Ph. Ăng ghen. Vì: Ph. Ăng ghen đã khái quát về đặc tính chung nất của sự vật, hiện tượng trên thế giới",
        question:"“Các sự vật, hiện tượng của thế giới, dù rất phong phú, muôn vẻ nhưng chúng vẫn có một thuộc tính chung, thống nhất đó là tính vật chất”. Ai đưa ra luận điểm trên"
    },
    {
        answer:"Phương án đúng là: Cái tất nhiên bao giờ cũng vạch đường đi cho mình xuyên qua vô số cái ngẫu nhiên. Vì: Cái tất nhiên và cái ngẫu nhiên thống nhất biện chứng với nhau; trong đó cái tất nhiên biểu hiện sự tồn tại của mình thông qua vô số cái ngẫu nhiên.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: Ba hình thức: phép biện chứng Trung quốc, phép biện chứng Ấn độ và phép biện chứng Hy lạp. Vì: Căn cứ vào lịch sử phép biện chứng và đặc điểm của các hệ thống lý luận về biện chứng để chia phép biện chứng ra thành ba hình thức cơ bản nêu trên.",
        question:"Các hình thức lịch sử cơ bản của phép biện chứng là:"
    },
    {
        answer:"Phương án đúng là: Liên hệ phổ biến là khái niệm nói lên rằng, mọi sự vật, hiện t¬ượng trong thế giới dù đa dạng phong phú như¬ng đều nằm trong mối liên hệ với các sự vật hiện tượng khác, đều chịu sự tác động, quy định của các sự vật hiện tượng khác và có thể chuyển hóa thành các sự vật hiện tượng khác. Vì: Thế giới là một chỉnh thể thống nhất và mỗi sự vật, hiện tượng chỉ là những bộ phận cấu thành thế giới đó. Do vây, dù đa dạng phong phú nhưng các sự vật, hiện tượng đều nằm trong mối liên hệ với các sự vật hiện tượng khác, đều chịu sự tác động, quy định của các sự vật hiện tượng khác và có thể chuyển hóa thành các sự vật hiện tượng khác",
        question:"Nhận định nào sau đây là chính xác?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Dựa vào các thành tựu khoa học đương thời, Ph.Ăng ghen đã chia vận động thành 5 hình thức cơ bản. Việc phân chia ấy dựa trên các nguyên tắc: các hình thức vận động phải tương ứng với trình độ nhất định của tổ chức vật chất; các hình thức vận động có mối liên hệ phát sinh (A+B)",
        question:"Ph. Ăng ghen đã phân chia vận động thành 5 hình thức cơ bản. Sự phân chia đó dựa trên những nguyên tắc nào"
    },
    {
        answer:"Phương án đúng là: Đặc biệt: định nghĩa VC thông qua khái niệm đối lập với nó trên phương diện nhận thức luận cơ bản. Vì: PP A và B không thể sử dụng để định nghĩa vật chất. Không có khái niệm rộng hơn khái niệm vật chất. Đồng thời, VC có vô tận các thuộc tính",
        question:"Để định nghĩa về vật chất, V. I. Lê nin đã sử dụng phương pháp nào?"
    },
    {
        answer:"Phương án đúng là: Đồng nhất vật chất với vật thể cụ thể.",
        question:"Điểm chung trong quan niệm của các nhà triết học duy vật thời kỳ cổ đại về vật chất là:"
    },
    {
        answer:"Phương án đúng là: Không có bản chất thuần túy tách rời hiện tượng, cũng như không có hiện tượng lại không biểu hiện của một bản chất nào đó. Vì: - Bản chất và hiện tượng thống nhất biện chứng với nhau. - Bản chất được hiểu là tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định ở bên trong sự vật, còn hiện tượng là sự biểu hiện ra bên ngoài của cái bản chất.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán. Vì: Với phương pháp đặt đối lập VC với một thuộc tính cơ bản của nó (ý thức), trong tác phẩm Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán, V. I. Lê nin đã đưa ra định nghĩa trên",
        question:"V. I. Lê nin đã đưa ra định nghĩa về vật chất trong tác phẩm nào?"
    },
    {
        answer:"Phương án đúng là: Nhận thức là một quá trình phản ánh tích cực, tự giác và sáng tạo thế giới khách quan vào bộ óc con người trên cơ sở thực tiễn, nhằm sáng tạo ra những tri thức về thế giới khách quan. Vì: - Nhận thức là quá trình phản ánh thế giới khách quan bởi con người.Chủ thể của hoạt động này: con người có ý thức.Đối tượng: thế giới vật chất.Cơ sở: hoạt động thực tiễn.Sản phẩm: Tri thức - hình ảnh tinh thần về thế giới vật chất.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: cảm giác, tri giác và biểu tượng. Vì: - Nhận thức là quá trình đi từ biết ít đến biết nhiều, từ biết chưa đầy đủ đến ngày càng đầy đủ hơn.",
        question:"Các hình thức cơ bản của nhận thức cảm tính là:"
    },
    {
        answer:"Phương án đúng là: Phủ định biện chứng là sự tự phủ định, sự phủ định tạo tiền đề cho cái mới ra đời, cho sự phát triển tiếp theo của sự vật. Vì: - Nguyên nhân sự phủ định nằm ngay trong chính bản thân các sự vật, hiện tượng.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: mỗi tri thức đắn chỉ trong những không gian, thời gian xác định. Vì: Chân lý (tri thức) phản ánh các sư vật, hiện tượng khách quan, có nội dung phù hợp với các sư vật, hiện tượng khách quan đó. Mà các sư vật, hiện tượng khách quan luôn tồn tại trong những khoảng thời gian, không gian xác định với những đặc trưng, tính chất xác định. Do vậy, chân lý luôn là cụ thể, mỗi tri thức về sự vật, hiện tượng chỉ đắn trong những không gian, thời gian xác định.",
        question:"Thế nào là tính cụ thể của chân lý?"
    },
    {
        answer:"Phương án đúng là: Trường phái duy vật. Vì: Chủ nghĩa duy vật hiểu tồn tại của thế giới như một chỉnh thế mà bản chất của nó là vật chất",
        question:"Trường phái nào cho rằng, bản chất của thế giới là Vật chất"
    },
    {
        answer:"Phương án đúng là: tính vật chất của nó. Vì: Mọi dạng tồn tại vật chất đều có điểm chung: sự tồn tại khách quan không phụ thuộc vào ý thức (hay còn gọi là tính vật chất).",
        question:"Theo chủ nghĩa duy vật biện chứng, thì thế giới thống nhất ở điểm nào ?:"
    },
    {
        answer:"Phương án đúng là: Tồn tại khách quan. Vì: Đây là thuộc tính chung nhất của mọi dạng vật chất. Thuộc tính này chỉ có ở vật chất mà không có ở ý thức. Và do vậy có thể căn cứ vào thuộc tính đó để phân biệt vật chất với ý thức.",
        question:"Thuộc tính cơ bản nhất của vật chất, nhờ đó phân biệt vật chất với ý thức. Đó là thuộc tính nào ?"
    },
    {
        answer:"Phương án đúng là: A + B. Vì: Quy luật là khách quan, con người không tạo ra và cúng không xóa bỏ được quy luật 1 cách chủ quan. Nên con người có vai trò nhận thức và vận dụng quy luật",
        question:"Vai trò của con người đối với quy luật ?"
    },
    {
        answer:"Phương án đúng là: Cái riêng tồn tại khách quan. Vì: Phạm trù cái riêng dùng để chỉ một sự vật, một hiện tượng, một quá trình nhất định. Sự vật, hiện tượng, quá trình nhất định đó tồn tại khách quan, do vậy, cái riêng cũng tồn tại khách quan.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: Là tính có thực của thế giới xung quanh con người. Vì: Khẳng định sự tồn tại của thế giới là gạt bỏ những nghi ngờ về tính không thực, sự hư vô, tức là gạt bỏ sự “không tồn tại” của thế giới.",
        question:"Tồn tại thế giới là gì ?"
    },
    {
        answer:"Phương án đúng là: Thần học",
        question:"Thế giới quan duy tâm rất gần với thế giới quan tôn giáo và tất yếu dẫn tới...."
    },
    {
        answer:"Phương án đúng là: Apeiron. Vì: Ông cho rằng, toàn thế giới có khởi nguyên là Apeiron. Đó là bản chất chung của mọi vật. Mọi thứ được sinh ra từ Apeiron. Vạn vật là trạng thái quá độ của Apeiron",
        question:"Anaximender cho bản nguyên của thế giới là"
    },
    {
        answer:"Phương án đúng là: Vừa đung vừa sai. Vì: nếu ý thức mà không bao hàm tri thức thì đó là một sự trừu tượng trống rỗng, không có ý gì cho con người. Nên Tri thức là phương thức tồn tại của ý thức",
        question:"Luận điểm: “Phương thức mà theo đó ý thức tồn tại và theo đó một cái gì tồn tại đối với ý thức là tri thức …, cho nên một cái gì đó nảy sinh ra đối với ý thức , chừng nào ý thức biết cái đó”"
    },
    {
        answer:"Phương án đúng là: toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử - xã hội của con người nhằm cải biến tự nhiên và xã hội. Vì: Theo định nghĩa phạm trù thực tiễn dùng để chỉ toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử - xã hội của con người nhằm cải biến tự nhiên và xã hội.",
        question:"Thực tiễn là:"
    },
    {
        answer:"Phương án đúng là: Tôn giáo",
        question:"Thế giới quan duy tâm rất gần với thế giới quan ..."
    },
    {
        answer:"Phương án đúng là: Duy tâm. Vì: Trong thực tiễn, người duy tâm phủ nhận tính khách quan, cường điệu vai trò nhân tố chủ quan, duy ý chí, hành động bất chấp điều kiện, quy luật khách quan",
        question:"Phủ nhận tính khách quan, cường điệu vai trò nhân tố chủ quan, duy ý chí, hành động bất chấp điều kiện, quy luật khách quan. Biểu hiện trên của trường phái nào?"
    },
    {
        answer:"Phương án đúng là: Những thay đổi về lượng đạt đến một mức độ (giới hạn) nhất định sẽ làm thay đổi chất của sự vật (hiện tượng). Vì: - Chất và lượng thống nhất biện chứng với nhau.",
        question:"Trong số các nhận định sau đây, nhận dịnh nào nhất?"
    },
    {
        answer:"Phương án đúng là: Đúng. Vì: Các hiện tượng vật chất luôn luôn tồn tại khách quan. Còn các hiện tượng tinh thần có nguồn gốc từ hiện tượng vật chất với nội dung phản ánh các đối tượng đó.",
        question:"Quan điểm: “VC là cái mà ý thức chẳng qua chỉ là sự phản ánh của nó”"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Trong đời sống xã hội, vai trò quyết định của vật chất đối với ý thức được biểu hiện thành vai trò của kinh tế đối với chính trị; vai trò của đời sống vật chất đối với đời sống tinh thần; vai trò của tồn tại xã hội đối với ý thức xã hội.",
        question:"Trong đời sống xã hội, vai trò quyết định của vật chất đối với ý thức được biểu hiện như thế nào ?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Từ nguyên lý về sự phát triển, cần quán triệt nguyên tắc phát triển",
        question:"Từ nguyên lý về sự phát triển, cần quán triệt nguyên tắc nào?"
    },
    {
        answer:"Phương án đúng là: Phương pháp nghiên cứu thực nghiệm trong khoa học tự nhiên. Vì: Từ Phương pháp nghiên cứu thực nghiệm trong khoa học tự nhiên mà ảnh hưởng, quy định tới phương pháp tư duy siêu hình",
        question:"Phương pháp tư duy siêu hình đã có xuất phát từ nguồn gốc nào?"
    },
    {
        answer:"Phương án đúng là: Cái riêng tồn tại khách quan. Vì: Phạm trù cái riêng dùng để chỉ một sự vật, một hiện tượng, một quá trình nhất định. Sự vật, hiện tượng, quá trình nhất định đó tồn tại khách quan, do vậy, cái riêng cũng tồn tại khách quan.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: Phương pháp luận chung nhất trong nhận thức và thực tiễn. Vì: Từ nội dung của PBCDV mà rút ra các biện pháp, nguyên tắc chung nhất chỉ đạo hoạt động nhận thức và thực tiễn",
        question:"PBCDV có vai trò như thế nào ?"
    },
    {
        answer:"Phương án đúng là: trong cái riêng và thông qua cái riêng mà biểu hiện sự tồn tại của nó. Vì: Theo định nghĩa về cái chung thì cái chung là những mặt, những thuộc tính, những yếu tố, những quan hệ… lặp lại phổ biến ở nhiều cái riêng.",
        question:"Cái chung chỉ tồn tại như thế nào?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Tình cảm là hình thái đặc biệt của sự phản ánh tồn tại; Tình cảm phản ánh quan hệ giữa người và người, giữa con người và thế giới khách quan; Tình cảm tham gia và trở thành một trong những động lực quan trọng của hoạt động con người. (A+B+C)",
        question:"Trong ý thức của con người, tình cảm là"
    },
    {
        answer:"Phương án đúng là: tính khách quan và tính kế thừa. Vì: - Phủ định biện chứng là tự thân phủ định",
        question:"Phủ định biện chứng có hai đặc điểm cơ bản là:"
    },
    {
        answer:"Phương án đúng là: Cả A + B + C. Vì: Các nhà duy vật thời cổ đại đã quy vật chất về một hay vài dạng cụ thể. Các dạng đó phải hội đủ cả 3 tính chất A, B, C",
        question:"Các nhà duy vật thời cổ đại đã quy vật chất về những"
    },
    {
        answer:"Phương án đúng là: tính thống nhất vật chất của thế giới. Vì: Thế giới là một chỉnh thể thống nhất và mỗi sự vật, hiện tượng chỉ là những bộ phận cấu thành thế giới đó. Chính tính thống nhất vật chất này đã “buộc” các sự vật, hiện tượng trong thế giới có liên hệ với nhau.",
        question:"Cơ sở của mối liên hệ qua lại giữa các sự vật hiện tượng là:"
    },
    {
        answer:"Phương án đúng là: 3. Vì: Nhận thức cần triệt để tuân theo 3 nguyên tắc",
        question:"Có mấy nguyên tắc của lý luận nhận thức DVBC?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Quy luật là mối liên hệ khác quan, bản chất, tất yếu, phổ biến và ổn định lắp đi lắp lại của sự vật, hiện tượng",
        question:"Quy luật là mối liên hệ như thế nào ?"
    },
    {
        answer:"Phương án đúng là: Trường phái duy tâm. Vì: Các nhà duy tâm cho rằng, chỉ có thế giới tinh thần mới tồn tại nên bản chất của tồn tại cúng là tinh thần",
        question:"Trường phái nào cho rằng, bản chất của thế giới là tinh thần"
    },
    {
        answer:"Phương án đúng là: Hai nguyên lý: nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển. Vì: - Phép biện chứng duy vật được định nghĩa “là khoa học về sự liên hệ phổ biến”. “là môn khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, của xã hội loài người và của tư duy”.",
        question:"Các nguyên lý cơ bản của phép biện chứng duy vật là:"
    },
    {
        answer:"Phương án đúng là: Nguyên tắc khách quan. Vì: Nguyên tắc khách quan yêu cầu: trong nhận thức và thực tiễn phải xuất phát từ hiện thực khách quan, tôn trọng khách quan, nhận thức và vận dụng đắn quy luật khách quan",
        question:"Xuất phát từ hiện thực khách quan, tôn trọng khách quan, nhận thức và vận dụng đắn quy luật khách quan. Đó là nội dung của nguyên tắc nào trong nhận thức và thực tiễn?"
    },
    {
        answer:"Phương án đúng là: là cơ sở, động lực của nhận thức, là mục đích của nhận thức và là tiêu chuẩn của chân lý. Vì: Hoạt động nhận thức được hình thành trên cơ sở hoạt động thực tiễn, phát triển do những nhu cầu của hoạt động thực tiễn, để phục vụ cho thực tiễn và thông qua thực tiễn để xá minh tính đúng (chân lý)/sai của tri thức - kết quả của quá trình nhận thức.",
        question:"Vai trò quyết định của thực tiễn đối với nhận thức thể hiện ở chỗ nó:"
    },
    {
        answer:"Phương án đúng là: bộ phận của cái riêng, nó sâu sắc, bản chất hơn cái riêng. Vì: Theo định nghĩa về cái chung thì cái chung là những mặt, những thuộc tính, những yếu tố, những quan hệ… lặp lại phổ biến ở nhiều cái riêng nên nó sâu sắc, bản chất hơn cái riêng.",
        question:"Cái chung là …"
    },
    {
        answer:"Phương án đúng là: Từ trực quan sinh động đến tư duy trừu tượng, từ tư duy trừu tượng đến thực tiễn - đó là con đường biện chứng của sự nhận thức chân lý, của sự nhận thức hiện thực khách quan. Vì: - Đó là sự khẳng định của V.I.Lênin.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: tự nhiên, xã hội loài người và tư duy. Vì: - Triết học nghiên cứu thế giới dưới góc độ chung nhất, khái quát nhất",
        question:"Phép biện chứng duy vật là môn khoa học về những quy luật phổ biến của sự vận động và phát triển của"
    },
    {
        answer:"Phương án đúng là: nguồn gốc, động lực cơ bản của mọi quá trình vận động và phát triển. Vì: Thông qua việc nghiên cứu nội dung quy luật này chúng ta có thể hiểu được sự vật, hiện tượng trong thế giới đã vận động và phát triển bằng cách nào.",
        question:"Quy luật “thống nhất và đấu tranh của các mặt đối lập” phản ánh và quy định điều gì ?"
    },
    {
        answer:"Phương án đúng là: Giữa hình thức và nội dung có sự gắn bó chặt chẽ, thống nhất với nhau. Vì: Nội dung của một sự vật, một hiện tượng, một quá trình nhất định được biểu hiện ra bên ngoài bằng hình thức; và hình thức là sự biểu hiện nội dung.",
        question:"Nhận dịnh nào sau đây đúng nhất nhất?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: chân lý chỉ được công nhận khi cụ thể xá định được các phương diện: đối tượng, không gian, thời gian và nội dung phản ánh",
        question:"Tính cụ thể của chân lý được thể hiện trên những phương diện nào?"
    },
    {
        answer:"Phương án đúng là: khoa học về sự liên hệ phổ biến, là khoa học về những quy luật phổ biến của sự vận động và phát triển của tự nhiên, xã hội loài người và t¬ư duy và là học thuyết về sự phát triển dưới hình thức hoàn bị nhất, sâu sắc nhất và không phiến diện. Vì: - Phép biện chứng duy vật là hệ thống lý luận nghiên cứu, khái quát biện chứng của thế giới thành hệ thống các nguyên lý, quy luật khoa học;",
        question:"Phép biện chứng duy vật là:"
    },
    {
        answer:"Phương án đúng là: Khách quan. Vì: Ý thức là cái vật chất ở bên ngoài “di chuyển” vào trong đầu óc con người và được cải biến đi ở trong đó.",
        question:"Nội dung mà ý thức phản ánh là …"
    },
    {
        answer:"Phương án đúng là: Khủng hoảng thế giới quan. Vì: Lẫn giữa vật chất và cái phi vật chất; có cái phi vật chất đang tồn tại và vận động",
        question:"“Vật chất là cái phi vật chất đang vận động”. Ý kiến của Piếc sơn phản ánh điều gì ?"
    },
    {
        answer:"Phương án đúng là: sự tổng hợp của tất cả những mặt, những yếu tố, những quá trình tạo nên sự vật, hiện tượng. Vì: - Phép biện chứng duy vật được định nghĩa “là khoa học về sự liên hệ phổ biến”. “là môn khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, của xã hội loài người và của tư duy”.",
        question:"Phạm trù nội dung dùng để chỉ:"
    },
    {
        answer:"Phương án đúng là: Cả A + B. Vì: Các quan niệm đó là sản phẩm của phương pháp tư duy siêu hình",
        question:"Các nhà duy vật thế kỷ XVII - XVIII đã có quan niệm duy vật siêu hình về vật chất với các biểu hiện nào?"
    },
    {
        answer:"Phương án đúng là: Sự thống nhất giữa TGQ duy vật và phép biện chứng. Vì: Nội dung của PBCDV thể hiện lập trường DV khi nghiên cứu tính biện chứng của thế giới.",
        question:"Đặc điểm cơ bản của phép biện chứng duy vật là"
    },
    {
        answer:"Phương án đúng là: Đúng. Vì: Quan điểm nhất quán của các nhà duy vật thừa nhận sự tồn tại khách quan của thế giới vật chất",
        question:"Các nhà triết học duy vật đã lấy bản thân giới tự nhiên để giải thích tự nhiên. Nhận định trên là ..."
    },
    {
        answer:"Phương án đúng là: Đúng",
        question:"Các nhà triết học duy tâm khách quan đã phủ nhận đặc trưng “tự thân tồn tại” của sự vật hiện tượng của thế giới. Nhận định trên là"
    },
    {
        answer:"Phương án đúng là: có thể sinh ra nhiều kết quả. Vì: Nguyên nhân sinh ra kết quả là quá trình phức tạp, nó phụ thuộc vào nhiều điều kiện và hoàn cảnh khác nhau. Vì thế một nguyên nhân có thể sinh ra nhiều kết quả.",
        question:"Một nguyên nhân …"
    },
    {
        answer:"Phương án đúng là: Vấn đề cơ bản của triết học. Vì: Định nghĩa đó đã khẳng định VC có trước và sinh ra ý thức (mặt thứ nhất của vấn đề cơ bản). Khẳng định về bản chất của ý thức",
        question:"Định nghĩa của V. I. Lê nin về vật chất đã giải quyết được nội dung nào của triết học?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Để thực hiện nguyên tắc tôn trọng tính khách quan kết hợp phát huy tính năng động chủ quan, mỗi cá nhân cần nhận thức và giải quyết đắn mối quan hệ lợi ích; xây dựng động cơ hoạt động trong sang, không vụ lợi; xây dựng thái độ khách quan, khoa học trong nhận thức và hành động",
        question:"Để thực hiện nguyên tắc tôn trọng tính khách quan kết hợp phát huy tính năng động chủ quan, mỗi cá nhân cần nhận thức và hành động như thế nào ?"
    },
    {
        answer:"Phương án đúng là: Trạng thái tồn tại có tính quy luật phổ biến nhất của thế giới. Vì: Dựa vào các thành tựu khoa học đương thời, cùng kế thừa các thành quả của PBC trong lịch sử, PBCDV đã nghiên cứu trạng thái tồn tại có tính quy luật phổ biến nhất của thế giới",
        question:"Đối tượng của PBCDV là"
    },
    {
        answer:"Phương án đúng là: Hình thức cơ bản của tư duy trừu tượng. Vì: Khái niệm là hình thức cơ bản của tư duy trừu tượng, phản ánh khái quát, gián tiếp các thuộc tính chung, bản chất của lớp đối tượng và được biểu thị bằng 1 từ hay một cụm từ Tham khảo: Chương 2. III. Lý luận nhận thức; 4. Các giai đoạn cơ bản của quá trình nhận thức (GT tr 120, 123)",
        question:"Khái niệm là …"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Sự phát triển có tính khách quan; tính phổ biến; tính kế thừa; tính đa dạng phong phú",
        question:"Sự phát triển có những tính chất nào?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Phát triển là quá trình vận động từ thấp đến cao; từ kém hoàn thiện đến hoàn thiện hơn; từ chất cũ đến chất mới ở trình độ cao hơn",
        question:"Phát triển là quá trình vận động như thế nào ?"
    },
    {
        answer:"Phương án đúng là: các mặt đối lập nương tựa vào nhau, làm điều kiện, tiền đề tồn tại cho nhau, không có mặt này thì không có mặt kia và ngược lại. Vì: Khái niệm thống nhất của các mặt đối lập được dùng để chỉ nương tựa vào nhau, làm điều kiện, tiền đề tồn tại cho nhau, không có mặt này thì không có mặt kia và ngược lại của các mặt đối lập.",
        question:"Sự thống nhất của các mặt đối lập là:"
    },
    {
        answer:"Phương án đúng là: Chất là tính quy định vốn có của sự vật (hiện tượng), Chất là sự thống nhất hữu cơ của các thuộc tính cấu thành sự vật (hiện tượng), phân biệt sự vật (hiện tượng) này với sự vật khác (hiện tượng). Mỗi sự vật (hiện tượng) không chỉ có một, mà nhiều chất, tùy thuộc quan hệ của nó với những cái khác. Vì: Căn cứ vào định nghĩa khái niệm chất",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: V.I. Lê nin. Vì: Không gian, thời gian là những hình thức tồn tại của vật chất vận động, được con người khái quát khi nhận thức thế giới. Điều đó theo nhận định đã nêu trên của V.I. Lê nin",
        question:"Ai nêu lên luận điểm: “Trong thế giới không có gì ngoài vật chất đang vận động và vật chất đang vận động không thể vận động ở đâu ngoài không gian và thời gian” ?"
    },
    {
        answer:"Phương án đúng là: khoa học về sự liên hệ phổ biến, là khoa học về những quy luật phổ biến của sự vận động và phát triển của tự nhiên, xã hội loài người và t¬ư duy và là học thuyết về sự phát triển dưới hình thức hoàn bị nhất, sâu sắc nhất và không phiến diện. Vì: - Phép biện chứng duy vật là hệ thống lý luận nghiên cứu, khái quát biện chứng của thế giới thành hệ thống các nguyên lý, quy luật khoa học;",
        question:"Phép biện chứng duy vật là:"
    },
    {
        answer:"Phương án đúng là: Hoạt động sản xuất vật chất, hoạt động chính trị - xã hội và hoạt động thực nghiệm khoa học. Vì: Những loại hình hoạt động vật chất (hoạt động thực tiễn) trong xã hội rất phong phú và đa dạng. Tùy thuộc vào tinh chất, vai trò, vị trí của các loại hình đó mà chúng được chia thành 3 loại hình cơ bản: Hoạt động sản xuất vật chất, hoạt động chính trị - xã hội và hoạt động thực nghiệm khoa học.",
        question:"Các hình thức cơ bản của thực tiễn là"
    },
    {
        answer:"Phương án đúng là: Cảm giác là hình ảnh chủ quan của thế giới khách quan: nguồn gốc, nội dung của nó là khách quan, còn hình thức biểu hiện của nó là chủ quan. Vì: Cảm giác là một hình thức của nhận thức cảm tính – một hình thức của quá trình phản ánh thế giới vật chất bởi con người. Nội dung của sự phản ánh này do đối tượng phản ánh quy định, còn hình thức biểu hiện bị chi phối bởi chủ thể phản ánh.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: Lửa. Vì: Ông cho ràng, toàn thế giới có khởi nguyên là Lửa. Lửa là bản chất chung của mọi vật. Mọi thứ được sinh ra từ Lứa. Vạn vật là trạng thái quá độ của Lứa",
        question:"Heraclitus cho bản nguyên của thế giới là"
    },
    {
        answer:"Phương án đúng là: Phép biện chứng duy vật. Vì: - Được xác lập trên tảng thế giới quan duy vật khoa học.",
        question:"Phép biện chứng thực sự mang tính khoa học là:"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Quan điểm vận động yêu cầu: Nghiên cứu sự vật, hiện tượng trong quá trình vận động; Khi tiến hành cải tạo sự vật hiện tượng phải thông quan những hình thức vận động đặc trưng vốn có của chúng; Cần tôn trọng cả trạng thái vận động và đứng im của sự vật hiện tượng (A+B+C)",
        question:"Quan điểm vận động yêu cầu cần quán triệt các nội dung nào?Trong sự nghiệp xây dựng CNXH ở nước ta, chúng ta cần phải tiến hành:"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Mối liên hệ phổ biến có tính khác quan, phổ biến, tính đa dạng, phong phú",
        question:"Mối liên hệ phổ biến có những tính chất nào?"
    },
    {
        answer:"Phương án đúng là: Nhận thức là quá trình phản ánh tích cực, tự giác và sáng tạo thế giới khách quan vào bộ óc con người trên cơ sở thực tiễn nhằm sáng tạo ra những tri thức về thế giới khách quan. Nhận thức là quá trình phản ánh tích cực, tự giác và sáng tạo thế giới khách quan vào bộ óc con người trên cơ sở thực tiễn nhằm sáng tạo ra những tri thức về thế giới khách quan.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: .Đúng Vì: Các nhà duy tâm chủ quan cho rằng: đặc trưng cơ bản nhất của mọi sự vật hiện tượng là sự tồn tại lệ thuộc vào chủ quan",
        question:"Các nhà triết học duy tâm chủ quan đã phủ nhận đặc trưng “tự thân tồn tại” của sự vật hiện tượng của thế giới. Nhận điịnh trên là"
    },
    {
        answer:"Phương án đúng là: từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn. Vì: Nhận thức là quá trình biện chứng (do biện chứng khách quan quy định) đi từ hiện tượng đến bản chất, từ hình ảnh bên ngoài đến bản chất bên trong với mục đích phục vụ cho hoạt động thực tiễn.",
        question:"Con đường biện chứng của nhận thức chân lý, nhận thức hiện thực khách quan là:"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Tiêu chuẩn cao nhất của chân lý là thực tiễn, ngoài ra cần thêm tiêu chuẩn lô gics và tiêu chuẩn lợi ích",
        question:"Tiêu chuẩn của chân lý là gì ?"
    },
    {
        answer:"Phương án đúng là: Giữa các sự vật, hiện tượng có mối liên hệ và cơ sở của mối liên hệ này chính là tính thống nhất vật chất của thế giới. Vì: - Chỉ có một thế giới duy nhất và thống nhât: Thếgiớí vật chất.",
        question:"Xác định câu thể hiện thế giới quan duy vật biện chứng:"
    },
    {
        answer:"Phương án đúng là: Vật chất là tính thứ nhất; ý thức là tính thứ hai. Vì: Vật chất là nguyên bản, còn ý thức là bản sao là hình ảnh của vật chất. Nên Vật chất là tính thứ nhất; ý thức là tính thứ hai",
        question:"Giữa vật chất và ý thức, cái nào là tính thứ nhất, cái nào là tính thứ hai?"
    },
    {
        answer:"Phương án đúng là: Tomxon , 1896. Vì: Năm 1896, Tôm xơn – nhà vật lý, người Anh đã phát hiện ra điện tử và chất đồng vị. Ông được nhận giải thưởng Nobel về vật lý năm 1906.",
        question:"Điện tử do ai phát hiện vào năm nào ?"
    },
    {
        answer:"Phương án đúng là: Đúng. Vì: Sự tồn tại của vật chất là sự tồn tại bằng cách vận động. các dạng tồn tại cụ thể của vật chất không thể không có thuộc tính vận động",
        question:"Quan điểm: “Vận động là phương thức tồn tại của vật chất” là"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Ý chí là sự cố gắng, nỗ lực của con người, là khả năng huy động tiềm năng trong con người vào hoạt động để con người vượt qua trở ngại mà đạt mục tiêu đề ra",
        question:"Trong ý thức của con người, ý chí là"
    },
    {
        answer:"Phương án đúng là: Ý thức có đặc tính tích cực, sáng tạo. Vì: Ý thức với sự phản ánh không phải là sự sao chép giản đơn, thụ động mà đã có sự cải biến có định hướng, có mục đích rõ ràng",
        question:"Tiêu chí để phân biệt trình độ phản ánh ý thức người với trính độ phản ánh tâm lý động vật là gì?"
    },
    {
        answer:"Phương án đúng là: V.I. Lê nin. Vì: các thành tựu khoa học tự nhiên cho thấy, vật thể có cấu trúc phức tạp, theo vô cùng tận các hình thức",
        question:"Ai đã đưa ra nhận định; “điện tử cũng vô cùng tận như nguyên tử, tự nhiên là vô tận”"
    },
    {
        answer:"Phương án đúng là: khuynh hướng cơ bản của mọi quá trình vận động và phát triển. Vì: Thông qua việc nghiên cứu nội dung quy luật này chúng ta có thể hiểu được sự vật, hiện tượng trong thế giới đã vận động và phát triển bằng cách nào.",
        question:"Quy luật phủ định của phủ định chỉ ra:"
    },
    {
        answer:"Phương án đúng là: Nhận thức xuất phát từ thực tiễn và phục vụ cho thực tiễn. Vì: Thực tiễn là cơ sỏ, nguồn gốc, động lực, mục tiêu, tiêu chuẩn của nhận thức",
        question:"Nguyên tắc thực tiễn trong nhận thức có nội dung nào?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Vật chất quyết định nguồn gốc của ý thức; quyết định nội dung, bản chất của ý thức; quyết định sự vận động, phát triển của ý thức",
        question:"Vai trò quyết định của vật chất đối với ý thức được thể hiện trên những khía cạnh nào ?"
    },
    {
        answer:"Phương án đúng là: 3. Vì:PBC DV có 3 quy luật phổ biến:",
        question:"Có bao nhiêu quy luật phổ biến của phép biện chứng duy vật ?"
    },
    {
        answer:"Phương án đúng là: Tất nhiên và ngẫu nhiên tồn tại trong sự thống nhất hữu cơ với nhau. Vì: - Cả cái tất nhiên và cái ngẫu nhiên đều tồn tại khách quan.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: Cả phạm vi và tính chất. Vì: Khoa học đã chứng minh rằng, không ở đâu có tận cùng về không gian ; không ở đâu có ngưng đọng, không nối tiếp của các quá trình.",
        question:"Không gian và thời gian của vật chất là vô tận. Tính vô tận ấy được xét trên phương diện nào ?"
    },
    {
        answer:"Phương án đúng là: Quan điểm vận động. Vì: Quan điểm vận động yêu cầu trước hết là nghiên cứu sự vật, hiện tượng trong quá trình vận động",
        question:"Quan niệm của phép biện chứng duy vật về vận động của vật chất, đòi hỏi phải quan triệt quan điểm nào trong nhận thức và thực tiễn?"
    },
    {
        answer:"Phương án đúng là: Chất là tính quy định vốn có của sự vật (hiện tượng), Chất là sự thống nhất hữu cơ của các thuộc tính cấu thành sự vật (hiện tượng), phân biệt sự vật (hiện tượng) này với sự vật khác (hiện tượng). Mỗi sự vật (hiện tượng) không chỉ có một, mà nhiều chất, tùy thuộc quan hệ của nó với những cái khác. Vì: Căn cứ vào khái niệm về chất.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: Thực tiễn luôn luôn vận động, biến đổi, phát triển, do đó nhận thức cũng phải vận động, biến đổi, phát triển theo cho phù hợp thực tiễn. Vì: - Thực tiễn là hoạt động mang tính lịch sử của con người.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: A+B. Vì: Ở đây cho rằng, toàn thế giới có khởi nguyên là Tứ đại. Đó là bản chất chung của mọi vật. Mọi thứ được sinh ra từ Tứ đại. Vạn vật là trạng thái quá độ của Tứ đại",
        question:"Người Ấn độ cổ đại cho bản nguyên của thế giới là"
    },
    {
        answer:"Phương án đúng là: Ý thức là sự phản ánh năng động, sáng tạo thế giới khách quan của bộ óc con người. Vì: Theo quan điểm của chủ nghĩa duy vật biện chứng ý thức là hình thức phản ánh đặc biệt chỉ có ở con người. Tính đặc biệt đó thể hiện ở tính ánh năng động, sáng tạo.",
        question:"Câu nào sau đây thể hiện nhất quan điểm của chủ nghĩa duy vật biện chứng?"
    },
    {
        answer:"Phương án đúng là: Phép biện chứng duy tâm. Vì: Hê ghen đã xuất phát từ ý niệm tuyệt đối mà giải thích thế giới",
        question:"Phép biện chứng của triết học Hê ghen là:"
    },
    {
        answer:"Phương án đúng là: Phủ định biện chứng là sự tự phủ định, sự phủ định tạo tiền đề cho cái mới ra đời, cho sự phát triển tiếp theo của sự vật. Vì: - Nguyên nhân sự phủ định nằm ngay trong chính bản thân các sự vật, hiện tượng.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: Quan niệm biện chứng của Mác. Vì: - Quan niệm siêu hình bác bỏ sự tồn tại của những mối liên hệ giữa các sự vật, hiện tượng.",
        question:"Quan niệm nào khẳng định giữa các sự vật, hiện tượng của thế giới khách quan luôn luôn tồn tại trong tính quy định và tương tác, làm biến đổi lẫn nhau?"
    },
    {
        answer:"Phương án đúng là: Chân lý là tri thức có nội dung phù hợp với thực tế khách quan; sự phù hợp đó được kiểm tra và chứng minh bởi thực tiễn. Vì: Trong phạm vi lý luận nhận thức của chủ nghĩa Mác-Lênin, khái niệm chân lý được dùng để chỉ những tri thức có nội dung phù hợp với thực tế khách quan; sự phù hợp đó được kiểm tra và chứng minh bởi thực tiễn.",
        question:"Trong các nhận định sau, nhân dịnh nào nhất?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Niềm tin là Là sự hòa quyện giữa tri thức và tình cảm và trải nghiệm cuộc sống của con người; từ đó tạo nên sự kiên định thôi thúc con người hoạt động vươn lên trong mọi hoàn cảnh",
        question:"Trong ý thức của con người, niềm tin là"
    },
    {
        answer:"Phương án đúng là: Sai. Vì: Hoạt động của “Người máy thông minh” chỉ là một quá trình vật lý, do con người lập trình.",
        question:"Luận điểm: “Người máy thông minh sẽ có hoạt động ý thức thay thế cho ý thức con người” là"
    },
    {
        answer:"Phương án đúng là: khác. Vì: Từ nguyên lý về mối liên hệ phổ biến, cần quán triệt nguyên tắc Toàn diện",
        question:'Từ nguyên lý về mối liên hệ phổ biến, cần quán triệt nguyên tắc nào?'
    },
    {
        answer:"Phương án đúng là: Chỉ có một thế giới duy nhất là thế giới vật chất. Tất cả mọi sự vật, hiện tượng của thế giới chỉ là những hình thức biểu hiện đa dạng của vật chất với những mối liên hệ vật chất và tuân theo quy luật khách quan. Thế giới vật chất tồn tại vĩnh viễn, vô hạn và vô tận. Vì: - Sự khẳng định đó đồng nghĩa với sự khẳng định chỉ có một thế giới duy nhất là thế giới vật chất.",
        question:"Bản chất của thế giới là vật chất,. Thế giới thống nhất ở tính vật chất. Điều đó thể hiện ở chỗ:"
    },
    {
        answer:"Phương án đúng là: Vật chất là hiện thực khách quan, ý thức là hiện thực chủ quan. Vì: Cả 2 đều là hiện thực, đều tồn tại thực. nhưng ý thức phản ánh TGKQ nên ý thức là hiện thực chủ quan còn Vật chất là hiện thực khách quan",
        question:"Sự phân biệt về bản chất giữa vật chất và ý thức là ở đâu?"
    },
    {
        answer:"Phương án đúng là: A+B. Vì: Sự thống nhất, hội tụ cả A và B sẽ tạo ra khả năng hình thành ý thức.",
        question:"Theo quan điểm của chủ nghĩa duy vật biện chứng, nguồn gốc tự nhiên của ý thức bao gồm những thành tố nào?"
    },
    {
        answer:"Phương án đúng là: Ph. Ăng ghen. Vì: trong tác phẩm Biện chứng của tự nhiên, Ph. Ăng ghen nghiên cứu về các tính chất biện chứng của giới tự nhiên và đưa ra định nghĩa trên.",
        question:"Định nghĩa sau đây, tác giả là ai? “Vận động hiểu theo nghĩa chung nhất – tức được hiểu là một phương thức tồn tại của vật chất, là một thuộc tính cố hữu của vật chất, - thì bao gồm tất cả mọi sự thay đổi và mọi quá trình diễn ra trong vũ trụ, kể từ sự thay đổi vị trí giản đơn cho đến tư duy”"
    },
    {
        answer:"Phương án đúng là: Tồn tại khách quan. Vì: Đây là thuộc tính chung nhất của mọi dạng vật chất. Thuộc tính này chỉ có ở vật chất mà không có ở ý thức. Và do vậy có thể căn cứ vào thuộc tính đó để phân biệt vật chất với ý thức.",
        question:"Thuộc tính cơ bản nhất của vật chất, nhờ đó phân biệt vật chất với ý thức. Đó là thuộc tính nào ?"
    },
    {
        answer:"Phương án đúng là: Cái tất nhiên bao giờ cũng vạch đường đi cho mình xuyên qua vô số cái ngẫu nhiên. Vì: Cái tất nhiên và cái ngẫu nhiên thống nhất biện chứng với nhau; trong đó cái tất nhiên biểu hiện sự tồn tại của mình thông qua vô số cái ngẫu nhiên.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: Khủng hoảng thế giới quan. Vì: Lẫn giữa vật chất và cái phi vật chất; có cái phi vật chất đang tồn tại và vận động",
        question:"“Vật chất là cái phi vật chất đang vận động”. Ý kiến của Piếc sơn phản ánh điều gì ?"
    },
    {
        answer:"Phương án đúng là: Đúng . Vì: Các hiện tượng vật chất luôn luôn tồn tại khách quan. Còn các hiện tượng tinh thần có nguồn gốc từ hiện tượng vật chất với nội dung phản ánh các đối tượng đó.",
        question:"Quan điểm: “VC là cái mà ý thức chẳng qua chỉ là sự phản ánh của nó”"
    },
    {
        answer:"Phương án đúng là: Đặc biệt: định nghĩa VC thông qua khái niệm đối lập với nó trên phương diện nhận thức luận cơ bản. Vì: PP A và B không thể sử dụng để định nghĩa vật chất. Không có khái niệm rộng hơn khái niệm vật chất. Đồng thời, VC có vô tận các thuộc tính",
        question:"Để định nghĩa về vật chất, V. I. Lê nin đã sử dụng phương pháp nào?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Sự phát triển có tính khách quan; tính phổ biến; tính kế thừa; tính đa dạng phong phú",
        question:"Sự phát triển có những tính chất nào?"
    },
    {
        answer:"Phương án đúng là: Không khí. Vì: Ông cho ràng, toàn thế giới có khởi nguyên là Không khí. Đó là bản chất chung của mọi vật. Mọi thứ được sinh ra từ Không khí. Vạn vật là trạng thái quá độ của Không khí",
        question:"Anaximenes cho bản nguyên của thế giới là"
    },
    {
        answer:"Phương án đúng là: Lửa. Vì: Ông cho ràng, toàn thế giới có khởi nguyên là Lửa. Lửa là bản chất chung của mọi vật. Mọi thứ được sinh ra từ Lứa. Vạn vật là trạng thái quá độ của Lứa",
        question:"Heraclitus cho bản nguyên của thế giới là"
    },
    {
        answer:"Phương án đúng là: Cái riêng tồn tại khách quan. Vì: Phạm trù cái riêng dùng để chỉ một sự vật, một hiện tượng, một quá trình nhất định. Sự vật, hiện tượng, quá trình nhất định đó tồn tại khách quan, do vậy, cái riêng cũng tồn tại khách quan.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: Phủ định biện chứng là sự tự phủ định, sự phủ định tạo tiền đề cho cái mới ra đời, cho sự phát triển tiếp theo của sự vật. Vì: - Nguyên nhân sự phủ định nằm ngay trong chính bản thân các sự vật, hiện tượng.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phương án đúng là: Khác. Vì: Để thực hiện nguyên tắc tôn trọng tính khách quan kết hợp phát huy tính năng động chủ quan, mỗi cá nhân cần nhận thức và giải quyết đắn mối quan hệ lợi ích; xây dựng động cơ hoạt động trong sang, không vụ lợi; xây dựng thái độ khách quan, khoa học trong nhận thức và hành động",
        question:"Để thực hiện nguyên tắc tôn trọng tính khách quan kết hợp phát huy tính năng động chủ quan, mỗi cá nhân cần nhận thức và hành động như thế nào ?"
    },
    {
        answer:"Phương án đúng là: nội dung quyết định hình thức và hình thức tác động trở lại nội dung. Vì: Nội dung được hiểu là tổng hợp tất cả những mặt, những yếu tố, những quá trình tạo nên sự vật, hiện tượng; còn hình thức được hiểu là phương thức tồn tại và phát triển của sự vật, hiện tượng đó, là hệ thống các mối liên hệ tương đối bền vững giữa các yếu tố của nó",
        question:"Trong mối quan hệ giữa nội dung và hình thức thì:"
    },
    {
        answer:"Phương án đúng là: V.I. Lê nin. Vì: các thành tựu khoa học tự nhiên cho thấy, vật thể có cấu trúc phức tạp, theo vô cùng tận các hình thức",
        question:"Ai đã đưa ra nhận định; “điện tử cũng vô cùng tận như nguyên tử, tự nhiên là vô tận”"
    },
    {
        answer:"Phương án đúng là: sự xem xét phiến diện, tuyệt đối hóa, thần thánh hóa một mặt, một đặc tính nào đó của quá trình nhận thức. Vì: Khi nhận thức được vai trò của ý thức thì chủ nghĩa duy tâm lại đề cao, thậm chí tuyệt đối hóa vai trò đó của ý thức mà không thấy được vai trò của vật chất.",
        question:"Nguồn gốc nhận thức của chủ nghĩa duy tâm là:"
    },
    {
        answer:"Phương án đúng là: 2. Vì: Căn cứ vào nội dung vấn đề cơ bản của triết học.",
        question:"Chọn câu trả lời đúng Đúng Vấn đề cơ bản của triết học có bao nhiêu mặt?"
    },
    {
        answer:"Phương án đúng là: nhất nguyên duy vật. Vì: Nhà triết học cho rằng bản chất thế giới hoặc là vật chất, hoặc là ý thức được gọi là nhà triết học nhất nguyên; nhà triết học nhất nguyen nào coi bản chất thế giới là vật chất thì được gọi là nhất nguyên duy vật.",
        question:"Những nhà triết học cho rằng bản chất của thế giới là vật chất thì thuộc về phái:"
    },
    {
        answer:"Phương án đúng là: bản chất thế giới là vật chất. Vì: Triết học lý giải bản chất của thế giới. Và chủ nghĩa duy vật là trường phái triết học cho rằng bản chất thế giới là vật chất.",
        question:"Chủ nghĩa duy vật là học thuyết triết học cho rằng:"
    },
    {
        answer:"Phương án đúng là: Chủ nghĩa duy vật biện chứng. Vì: Chủ nghĩa duy vật biện chứng cho rằng ý thức là sự phản ánh thế giới khách quan bởi con người.",
        question:"Hệ thống triết học nào coi ý thức là hình ảnh chủ quan của thế giới khách quan?"
    },
    {
        answer:"Phương án đúng là: Chủ nghĩa duy tâm khách quan. Vì: Chủ nghĩa duy tâm khách quan cho rằng tự nhiên và xã hội chỉ là sự tha hóa của ý niệm tuyệt đối.",
        question:"Vận động của tự nhiên và lịch sử chỉ là sự tha hoá từ sự tự vận động của ý niệm tuyệt đối. Quan niệm trên thuộc lập trường triết học nào?"
    },
    {
        answer:"Phương án đúng là: có thể nhận thức được thế giới. Vì: Cho rằng con người có thể nhận thức được thế giới.",
        question:"Hãy chọn phương án nhất để hoàn thành câu: Thuyết không thể biết cho rằng con người"
    },
    {
        answer:"Phương án đúng là: Cả 3 phương án đã nêu. Vì: C.Mác và Ph.Ăngghen lần đầu tiên tạo ra một chủ nghĩa duy vật triết học hoàn bị là chủ nghĩa duy vật biện chứng, phép biện chứng duy vật và CNDV lịch sử. Điều đó đã giúp triết học Mác không chỉ có chức năng giải thích thế giới đắn về thế giới mà còn trở thành công cụ nhận thức khoa học để cải tạo thế giới bằng cách mạng",
        question:"Thực chất và ý nghĩa cuộc cách mạng trong triết học do C.Mác và Ph.Ăngghen thực hiện là gì?"
    },
    {
        answer:"Phương án đúng là: Tuyên ngôn của Đảng cộng sản (1848). Vì: Trong tác phẩm này chủ nghĩa Mác đã được trình bày như một chỉnh thể các quan điểm nền tảng với ba bộ phận lý luận cấu thành.",
        question:"Trong các tác phẩm kinh điển sau đây, tác phẩm nào được đánh giá là văn kiện đầu tiên có tính cương lĩnh của chủ nghĩa Mác, thể hiện sự chín muồi về mặt thế giới quan mới của C.Mác và Ph.Ăngghen:"
    },
    {
        answer:"Phương án đúng là: những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy. Vì: Triết học là hệ thống tri thức lý luận chung nhất của con người về thế giới và do vậy nó những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy.",
        question:"Triết học Mác – Lênin nghiên cứu:"
    },
    {
        answer:"Phương án đúng là: Phép biện chứng. Vì: Ra đời trong điều kiện trình độ nhận thức và thực tiễn của con người còn hết sức hạn chế các nhà triết học xuát phát từ quan sát thế giới mà phát hiện ra tính chất biện chứng của thế giới.",
        question:"Chọn cụm từ điền vào chỗ trống: “Điểm xuất phát của ... là: sự khẳng định những sự vật và hiện tượng của tự nhiên đều bao hàm những mâu thuẫn vốn có của chúng”."
    },
    {
        answer:"Phương án đúng là: Chủ nghĩa duy vật chất phác, chủ nghĩa duy vật siêu hình và chủ nghĩa duy vật biện chứng. Vì: Căn cứ vào lịch sử hình thành và phát triển của chủ nghĩa duy vật.",
        question:"Ba hình thức cơ bản của chủ nghĩa duy vật trong lịch sử triết học là:"
    },
    {
        answer:"Phương án đúng là: chủ nghĩa duy tâm chủ quan và chủ nghĩa duy tâm khách quan. Vì: Căn cứ vào lịch sử hình thành và phát triển của chủ nghĩa duy tâm.",
        question:"Hai hình thức cơ bản của chủ nghĩa duy tâm là:"
    },
    {
        answer:"Phương án đúng là: Tại thực tiễn của xã hội những năm cuối thể kỷ XIX đầu thế kỷ XX đòi hỏi phải bảo vệ và phát triển chủ nghĩa Mác nói chung, triết học Mác nói riêng và Lênin không chỉ nắm bắt mà còn có khả năng đáp ứng được những yêu cầu đó của thực tiễn. Vì:.",
        question:"Tại sao có giai đoạn Lên nin trong sự phát triển triết học Mác?"
    },
    {
        answer:"Phương án đúng là: tự nhiên, xã hội loài người và tư duy. Vì: - Triết học nghiên cứu thế giới dưới góc độ chung nhất, khái quát nhất",
        question:"Phép biện chứng duy vật là môn khoa học về những quy luật phổ biến của sự vận động và phát triển của"
    },
    {
        answer:"Phương án đúng là: khoa học về mối liên hệ phổ biến và về sự phát triển dưới hình thức hoàn bị nhất, sâu sắc nhất và không phiến diện. Vì: Phép biện chứng duy vật là hệ thống lý luận nghiên cứu, khái quát biện chứng của thế giới thành hệ thống các nguyên lý, quy luật khoa học. Phép biện chứng này hình thành và phát triển trên cơ sở thế giới quan duy vật biện chứng, trên cơ sở kế thừa những giá trị trong các hình thức phép biện chứng trước đó.",
        question:"Chọn phương án chính xác Phép biện chứng duy vật là:"
    },
    {
        answer:"Phương án đúng là: Chức năng thế giới quan và phương pháp luận chung nhất. Vì: Triết học là hệ thống tri thức lý luận chung nhất của con người về thế giới, về bản thân con người và vị trí của con người trong thế giới đó.",
        question:"Triết học có chức năng cơ bản nào?"
    },
    {
        answer:"Phương án đúng là: Phép biện chứng duy tâm. Vì: Hêghen đứng trên lập trường của chủ nghĩa duy tâm để xây dựng hệ thống lý luận biện chứng cua mình.",
        question:"Phép biện chứng nào cho rằng thế giới hiện thực chỉ là sự phản ánh biện chứng của ý niệm"
    },
    {
        answer:"Phương án đúng là: Do hạn chế của nhận thức của con người về thế giới và sự phân chia giai cấp và sự tách rời đối lập giữa lao động trí óc và lao động chân tay trong xã hội có giai cấp đối kháng. Vì: Chủ nghĩa duy tâm, xét về bản chất là sự đề cao, tuyệt đối hóa vai trò của ý thức. Va sự đề cao này do sự xem xét một cách phiến diện quá trình nhận thức và sự đề cao lao động trí óc so với lao động chân taytrong xã hội có giai cấp đối kháng.",
        question:"Nguồn gốc của chủ nghĩa duy tâm? Hãy Chọn câu trả lời đúng ."
    },
    {
        answer:"Phương án đúng là: cơ sở thế giới quan và phương pháp luận phản khoa học và cách mạng để phân tích xu hướng phát triển của xã hội. Vì: Triết học Mác - Lênin là hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy, là thế giới quan và phương pháp luận KHOA HỌC, CÁCH MẠNG giúp giai cấp công nhân, nhân dân lao động và các lực lượng xã hội tiến bộ nhận thức đắn và cải tạo hiệu quả thế giới.",
        question:"Chọn câu trả lời đúng sai: Vai trò của triết học Mác-Lênin trong đời sống xã hội và trong sự nghiệp đổi mới ở Việt Nam là:"
    },
    {
        answer:"Phương án đúng là: không thể nhận thức được thế giới. Vì: Cho rằng con người không thể nhận thức được thế giới.",
        question:"Hãy chọn phương án nhất để hoàn thành câu: Thuyết không thể biết cho rằng con người:"
    },
    {
        answer:"Phương án đúng là: Chủ nghĩa duy vật chất phác, chủ nghĩa duy vật siêu hình và chủ nghĩa duy vật biện chứng. Vì: Căn cứ vào lịch sử hình thành và phát triển của chủ nghĩa duy vật.",
        question:"Ba hình thức cơ bản của chủ nghĩa duy vật trong lịch sử triết học là:"
    },
    {
        answer:"Phương án đúng là: những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy. Vì: Triết học là hệ thống tri thức lý luận chung nhất của con người về thế giới và do vậy nó những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy.",
        question:"Triết học Mác – Lênin nghiên cứu:"
    },
    {
        answer:"Phương án đúng là: nhất nguyên duy vật. Vì: Nhà triết học cho rằng bản chất thế giới hoặc là vật chất, hoặc là ý thức được gọi là nhà triết học nhất nguyên; nhà triết học nhất nguyen nào coi bản chất thế giới là vật chất thì được gọi là nhất nguyên duy vật.",
        question:"Những nhà triết học cho rằng bản chất của thế giới là vật chất thì thuộc về phái:"
    },
    {
        answer:"Phương án đúng là: Phép biện chứng duy vật. Vì: - Được xác lập trên tảng thế giới quan duy vật khoa học.",
        question:"Phép biện chứng thực sự mang tính khoa học là:"
    },
    {
        answer:"Phương án đúng là: khoa học về mối liên hệ phổ biến và về sự phát triển dưới hình thức hoàn bị nhất, sâu sắc nhất và không phiến diện. Vì: Phép biện chứng duy vật là hệ thống lý luận nghiên cứu, khái quát biện chứng của thế giới thành hệ thống các nguyên lý, quy luật khoa học. Phép biện chứng này hình thành và phát triển trên cơ sở thế giới quan duy vật biện chứng, trên cơ sở kế thừa những giá trị trong các hình thức phép biện chứng trước đó.",
        question:"Chọn phương án chính xác Phép biện chứng duy vật là:"
    },
    {
        answer:"Phương án đúng là: có thể nhận thức được thế giới. Vì: Cho rằng con người có thể nhận thức được thế giới.",
        question:"Hãy chọn phương án nhất để hoàn thành câu: Thuyết không thể biết cho rằng con người"
    },
    {
        answer:"Phương án đúng là: Phép biện chứng. Vì: Ra đời trong điều kiện trình độ nhận thức và thực tiễn của con người còn hết sức hạn chế các nhà triết học xuát phát từ quan sát thế giới mà phát hiện ra tính chất biện chứng của thế giới.",
        question:"Chọn cụm từ điền vào chỗ trống: “Điểm xuất phát của ... là: sự khẳng định những sự vật và hiện tượng của tự nhiên đều bao hàm những mâu thuẫn vốn có của chúng”."
    },
    {
        answer:"Phương án đúng là: Chủ nghĩa duy vật biện chứng. Vì: Chủ nghĩa duy vật biện chứng cho rằng ý thức là sự phản ánh thế giới khách quan bởi con người.",
        question:"Hệ thống triết học nào coi ý thức là hình ảnh chủ quan của thế giới khách quan?"
    },
    {
        answer:"Phương án đúng là: bản chất thế giới là vật chất. Vì: Triết học lý giải bản chất của thế giới. Và chủ nghĩa duy vật là trường phái triết học cho rằng bản chất thế giới là vật chất.",
        question:"Chủ nghĩa duy vật là học thuyết triết học cho rằng:"
    },
    {
        answer:"Phương án đúng là: Chủ nghĩa duy tâm chủ quan. Vì: Chủ nghĩa duy tâm chủ quancho rằng phức hợp các cảm giác của con người là nguồn gốc của vạn vật trong thế giới",
        question:"Hệ thống triết học nào quan niệm sự vật là phức hợp của các cảm giác?"
    },
    {
        answer:"Phương án đúng là: Triết học Mác - Lênin là hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy - thế giới quan và phương pháp luận khoa học, cách mạng của giai cấp công nhân, nhân dân lao động và các lực lượng xã hội tiến bộ trong nhận thức và cải tạo thế giới. Vì: - Triết học Mác - Lênin là triết học duy vật biện chứng cả về tự nhiên và xã hội",
        question:"Chọn định nghĩa chính xác về triết học Mác - Lênin"
    },
    {
        answer:"Phương án đúng là: 3. Vì: Căn cứ vào các hình thức cơ bản của chủ nghĩa duy vật.",
        question:"Tìm con số về số hình thức cơ bản của chủ nghĩa duy vật trong lịch sử triết học."
    },
    {
        answer:"Phương án đúng là: nhất nguyên duy vật. Vì: Nhà triết học cho rằng bản chất thế giới hoặc là vật chất, hoặc là ý thức được gọi là nhà triết học nhất nguyên; nhà triết học nhất nguyên nào coi bản chất thế giới là ý thức thì được gọi là nhất nguyên duy tâm.",
        question:"Những nhà triết học cho rằng bản chất của thế giới là ý thức thì thuộc về phái:"
    },
    {
        answer:"Phương án đúng là: Phép biện chứng duy tâm. Vì: Hêghen đứng trên lập trường của chủ nghĩa duy tâm để xây dựng hệ thống lý luận biện chứng của mình.",
        question:"Phép biện chứng của triết học Hê ghen là:"
    },
    {
        answer:"Phương án đúng là: cho rằng ý thức có trước vật chất và quyết định vật chất. Vì: Chủ nghĩa duy tâm, xét về bản chất là sự đề cao, tuyệt đối hóa vai trò của ý thức trong mối quan hệ với vật chất.",
        question:"Chủ nghĩa duy tâm là khuynh hướng triết học:"
    },
    {
        answer:"Phương án đúng là: Đồng nhất vật chất với vật thể cụ thể. Vì: - Họ tư duy bằng phương pháp siêu hình. - Họ chưa phân biệt được triết học với các khoa học cụ thể. Tham khảo: Xem Chương I, phần I, mục 2.2 Chủ nghĩa duy vật và chủ nghĩa duy tâm (GT. tr.19).",
        question:"Điểm chung trong quan niệm của các nhà triết học duy vật thời kỳ cổ đại về vật chất là:"
    },
    {
        answer:"Phương án đúng là: Không ngừng phát triển trên cơ sở tổng kết những thành tựu mới của sự phát triển các khoa học và thực tiễn xã hội. Vì: Chủ nghĩa Mác-Lênin là học thuyết khoa học được hình thành trên nguyên tắc thống nhất giữa lý luận và thực tiễn.",
        question:"Chọn câu trả lời đúng :Triết học Mác-Lênin là học thuyết khoa học:"
    },
    {
        answer:"Phương án đúng là: Đúng. Vì: Triết học ra đời trong xã hội có giai cấp",
        question:"Nhận định sau đây: “Trong xã hội có giai cấp thì mọi tư tưởng triết học đều có tính giai cấp” là"
    },
    {
        answer:"Phương án đúng là: Khi các bộ môn khoa học chuyên ngành tách khỏi triết học. Vì: Khi đó các bộ môn khoa học đã xác định được đối tượng nghiên cứu của chúng và trở thành những ngành nghiên cứu độc lập",
        question:"Chọn câu trả lời đúng : Trong điều kiện nào thì triết học chỉ còn đề cập đến những quy luật chung nhất của tự nhiên, xã hội và tư duy."
    },
    {
        answer:"Phương án đúng là: Nhất nguyên. Vì: Việc giải quyết vấn đề cơ bản của triết học đã chia các nhà triết học thành 2 trường phái LỚN – hai trường phái nhất nguyên: duy vật và duy tâm.",
        question:"Trường phái triết học nào thường chiếm địa vị thống trị trong lịch sử triết học?"
    },
    {
        answer:"Phương án đúng là: Tại thực tiễn của xã hội những năm cuối thể kỷ XIX đầu thế kỷ XX đòi hỏi phải bảo vệ và phát triển chủ nghĩa Mác nói chung, triết học Mác nói riêng và Lênin không chỉ nắm bắt mà còn có khả năng đáp ứng được những yêu cầu đó của thực tiễn. Vì:.",
        question:"Tại sao có giai đoạn Lên nin trong sự phát triển triết học Mác?"
    },
    {
        answer:"Phương án đúng là: Ba hình thức: phép biện chứng chất phác thời cổ đại, phép biện chứng duy tâm cổ điển Đức và phép biện chứng duy vật của chủ nghĩa Mác - Lênin. Vì: Căn cứ vào lịch sử phép biện chứng và đặc điểm của các hệ thống lý luận về biện chứng để chia phép biện chứng ra thành ba hình thức cơ bản nêu trên.",
        question:"Các hình thức lịch sử cơ bản của phép biện chứng là:"
    },
    {
        answer:"Phương án đúng là: 2. Vì: Căn cứ vào nội dung vấn đề cơ bản của triết học.",
        question:"Chọn câu trả lời đúng . Vấn đề cơ bản của triết học có bao nhiêu mặt?"
    },
    {
        answer:"Phương án đúng là: tinh thần có trước tự nhiên. Vì: Chủ nghĩa duy tâm là học thuyết triết học cho rằng ý thức (tinh thần) là cái có trước vật chất (tự nhiên).",
        question:"Chủ nghĩa duy tâm là học thuyết triết học cho rằng:"
    },
    {
        answer:"Phương án đúng là: ”vấn đề cơ bản lớn của mọi triết học, đặc biệt là của triết học hiện đại là vấn đề về mối quan hệ giữa tư duy và tồn tại”. Vì: Căn cứ vào vấn đề cơ bản của triết học.",
        question:"Khẳng định nào là của Ph.Ăngghen về vấn đề cơ bản của triết học?"
    },
    {
        answer:"Phương án đúng là: siêu hình, máy móc và không triệt để. Vì: Các nhà triết học duy vật trước Mác chịu ảnh hưởng sâu sắc phương pháp tư duy của các nhà khoa học tự nhiên. Và khi áp dụng phương pháp đó vào nghiên cứu triết học đã khiến triết học của họ có hạn chế nêu trên.",
        question:"Chủ nghĩa duy vật trước Mác đóng vai trò quyết định trong cuộc đấu tranh chống chủ nghĩa duy tâm và tôn giáo, nhưng còn hạn chế ở tính:"
    },
    {
        answer:"Phương án đúng là: 3. Vì: Căn cứ vào các hình thức cơ bản của chủ nghĩa duy vật.",
        question:"Tìm con số về số hình thức cơ bản của chủ nghĩa duy vật trong lịch sử triết học."
    },
    {
        answer:"Phương án đúng là: Phép biện chứng duy tâm. Vì: Hêghen đứng trên lập trường của chủ nghĩa duy tâm để xây dựng hệ thống lý luận biện chứng của mình.",
        question:"Phép biện chứng của triết học Hê ghen là:"
    },
    {
        answer:"Phương án đúng là: cơ sở thế giới quan và phương pháp luận phản khoa học và cách mạng để phân tích xu hướng phát triển của xã hội. Vì: Triết học Mác - Lênin là hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy, là thế giới quan và phương pháp luận KHOA HỌC, CÁCH MẠNG giúp giai cấp công nhân, nhân dân lao động và các lực lượng xã hội tiến bộ nhận thức đắn và cải tạo hiệu quả thế giới.",
        question:"Chọn câu trả lời đúng sai: Vai trò của triết học Mác-Lênin trong đời sống xã hội và trong sự nghiệp đổi mới ở Việt Nam là:"
    },
    {
        answer:"Phương án đúng là: nhất nguyên duy vật. Vì: Nhà triết học cho rằng bản chất thế giới hoặc là vật chất, hoặc là ý thức được gọi là nhà triết học nhất nguyên; nhà triết học nhất nguyên nào coi bản chất thế giới là ý thức thì được gọi là nhất nguyên duy tâm.",
        question:"Những nhà triết học cho rằng bản chất của thế giới là ý thức thì thuộc về phái:"
    },
    {
        answer:"Phương án đúng là: Triết học không phải là toàn bộ thế giới quan mà chỉ là hạt nhân lý luận chung nhất của thế giới quan. Vì: Căn cứ vào quan niệm về thế giới quan, về triết học và vai trò của triết học.",
        question:"Chọn câu trả lời đúng .Hai khái niệm Triết học và thế giới quan:"
    },
    {
        answer:"Phương án đúng là: cho rằng ý thức có trước vật chất và quyết định vật chất. Vì: Chủ nghĩa duy tâm, xét về bản chất là sự đề cao, tuyệt đối hóa vai trò của ý thức trong mối quan hệ với vật chất.",
        question:"Chủ nghĩa duy tâm là khuynh hướng triết học:"
    },
    {
        answer:"Phương án đúng là: Chủ nghĩa duy vật vô thần của Phoiơbắc và phép biện chứng của Hêghen. Vì: Triết học Mác kế thừa những giá trị tinh thần của nhân loại, nhưng trực tiếp là từ triết học cổ điển Đức.",
        question:"Chọn câu trả lời đúng .Tiền đề lý luận trực tiếp của triết học Mác là:"
    },
    {
        answer:"Phương án đúng là: Do hạn chế của nhận thức của con người về thế giới và sự phân chia giai cấp và sự tách rời đối lập giữa lao động trí óc và lao động chân tay trong xã hội có giai cấp đối kháng. Vì: Chủ nghĩa duy tâm, xét về bản chất là sự đề cao, tuyệt đối hóa vai trò của ý thức. Va sự đề cao này do sự xem xét một cách phiến diện quá trình nhận thức và sự đề cao lao động trí óc so với lao động chân taytrong xã hội có giai cấp đối kháng.",
        question:"Nguồn gốc của chủ nghĩa duy tâm? Hãy Chọn câu trả lời đúng ."
    },
    {
        answer:"Phương án đúng là: Nhị nguyên. Vì: triết học nhị nguyên cho rằng vật chất và ý thức là 2 thực thể cùng song song tồn tại và độc lập với nhau và là nguồn gốc của vạn vật trong thế giới",
        question:"Chọn câu trả lời đúng :Quan niệm triết học: “coi vật chất và ý thức là 2 thực thể cùng song song tồn tại và độc lập với nhau” là trên lập trường nào?"
    },
    {
        answer:"Phương án đúng là: Phép biện chứng duy tâm. Vì: Hêghen đứng trên lập trường của chủ nghĩa duy tâm để xây dựng hệ thống lý luận biện chứng cua mình.",
        question:"Phép biện chứng nào cho rằng thế giới hiện thực chỉ là sự phản ánh biện chứng của ý niệm"
    },
    {
        answer:"Phương án đúng là: siêu hình, máy móc và không triệt để. Vì: Các nhà triết học duy vật trước Mác chịu ảnh hưởng sâu sắc phương pháp tư duy của các nhà khoa học tự nhiên. Và khi áp dụng phương pháp đó vào nghiên cứu triết học đã khiến triết học của họ có hạn chế nêu trên.",
        question:"Chủ nghĩa duy vật trước Mác đóng vai trò quyết định trong cuộc đấu tranh chống chủ nghĩa duy tâm và tôn giáo, nhưng còn hạn chế ở tính:"
    },
    {
        answer:"Phương án đúng là: Chủ nghĩa duy tâm khách quan. Vì: Chủ nghĩa duy tâm khách quan cho rằng tự nhiên và xã hội chỉ là sự tha hóa của ý niệm tuyệt đối.",
        question:"Vận động của tự nhiên và lịch sử chỉ là sự tha hoá từ sự tự vận động của ý niệm tuyệt đối. Quan niệm trên thuộc lập trường triết học nào?"
    },
    {
        answer:"Phương án đúng là: 2. Vì: Căn cứ vào các hình thức cơ bản của chủ nghĩa duy vật.",
        question:"Tìm con số về số hình thức cơ bản của chủ nghĩa duy tâm trong lịch sử triết học."
    },
    {
        answer:"Phương án đúng là: Chủ nghĩa duy vật tầm thường. Vì: Chủ nghĩa duy vật tầm thường tuyệt đối hóa yếu tố vật chất, cho rằng ý thức tinh thần chỉ là một dạng vật chất",
        question:"Nhận định sau, thuộc lập trường triết học nào? “ Nhân tố kinh tế là nhân tố quyết định duy nhất trong lịch sử”"
    },
    {
        answer:"Phương án đúng là: chủ nghĩa duy tâm chủ quan và chủ nghĩa duy tâm khách quan. Vì: Căn cứ vào lịch sử hình thành và phát triển của chủ nghĩa duy tâm.",
        question:"Hai hình thức cơ bản của chủ nghĩa duy tâm là:"
    },
    {
        answer:"Phương án đúng là: tự nhiên, xã hội loài người và tư duy. Vì: - Triết học nghiên cứu thế giới dưới góc độ chung nhất, khái quát nhất",
        question:"Phép biện chứng duy vật là môn khoa học về những quy luật phổ biến của sự vận động và phát triển của"
    },
    {
        answer:"Phương án đúng là: Nghiên cứu mối quan hệ giữa vật chất và ý thức trên lập trường duy vật biện chứng, nghiên cứu những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy.",
        question:"Chọn câu trả lời đúng :Triết học Mác-Lênin là học thuyết khoa học"
    },
    {
        answer:"Phương án đúng là: Phép biện chứng cổ đại. Vì: Phép biện chứng cổ đại ra đời trong điều kiện trình độ nhận thức và thực tiễn của con người còn hết sức hạn chế nên bị đẩy lùi bới phép siêu hình. Tuy nhiên, phép siêu hình chỉ nhìn thấy trạng thái tĩnh mà quên mất sự vận động của các sự vật hiện tượng trong thế giới",
        question:"Chọn cụm từ điền vào chỗ trống: “Phép siêu hình đẩy lùi được ... Nhưng chính nó lại bị phép biện chứng hiện đại phủ định”"
    },
    {
        answer:"Phương án đúng là: “Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán”. Vì: Đây là tác phẩm ra đời vào thời kỳ khủng hoảng về thế giới quan của các nhà khoa học, là thời kỳ tấn công mạnh mẽ của chủ nghĩa duy tâm vào chủ nghĩa duy vật, vào chủ nghĩa Mác. Để giải quyết những nhiệm vụ lịch sử đó Lênin đã viết “Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán”.",
        question:"Trong các tác phẩm kinh điển sau đây, tác phẩm nào được thể hiện tập trung việc Lê nin đã kế thừa và phát triển quan niệm của chủ nghĩa Mác về vật chất, về mối quan hệ giữa vật chất và ý thức, tồn tại xã hội và ý thức xã hội?"
    },
    {
        answer:"Phương án đúng là: mối quan hệ giữa vật chất và ý thức. Vì: Căn cứ vào vấn đề cơ bản của triết học.",
        question:"Chọn câu trả lời đúng .Vấn đề cơ bản lớn của triết học là vấn đề về:"
    },
    {
        answer:"Phương án đúng là: Không ngừng phát triển trên cơ sở tổng kết những thành tựu mới của sự phát triển các khoa học và thực tiễn xã hội. Vì: Chủ nghĩa Mác-Lênin là học thuyết khoa học được hình thành trên nguyên tắc thống nhất giữa lý luận và thực tiễn.",
        question:"Chọn câu trả lời đúng :Triết học Mác-Lênin là học thuyết khoa học:"
    },
    {
        answer:"Phương án đúng là: sự xem xét phiến diện, tuyệt đối hóa, thần thánh hóa một mặt, một đặc tính nào đó của quá trình nhận thức. Vì: Khi nhận thức được vai trò của ý thức thì chủ nghĩa duy tâm lại đề cao, thậm chí tuyệt đối hóa vai trò đó của ý thức mà không thấy được vai trò của vật chất.",
        question:"Nguồn gốc nhận thức của chủ nghĩa duy tâm là:"
    },
    {
        answer:"Phương án đúng là: Đồng nhất vật chất với vật thể cụ thể. Vì: - Họ tư duy bằng phương pháp siêu hình. - Họ chưa phân biệt được triết học với các khoa học cụ thể. Tham khảo: Xem Chương I, phần I, mục 2.2 Chủ nghĩa duy vật và chủ nghĩa duy tâm (GT. tr.19).",
        question:"Điểm chung trong quan niệm của các nhà triết học duy vật thời kỳ cổ đại về vật chất là:"
    },
    {
        answer:"Phương án đúng là: Chức năng thế giới quan và phương pháp luận chung nhất. Vì: Triết học là hệ thống tri thức lý luận chung nhất của con người về thế giới, về bản thân con người và vị trí của con người trong thế giới đó.",
        question:"Triết học có chức năng cơ bản nào?"
    },
    {
        answer:"Phương án đúng là: Tuyên ngôn của Đảng cộng sản (1848). Vì: Trong tác phẩm này chủ nghĩa Mác đã được trình bày như một chỉnh thể các quan điểm nền tảng với ba bộ phận lý luận cấu thành.",
        question:"Trong các tác phẩm kinh điển sau đây, tác phẩm nào được đánh giá là văn kiện đầu tiên có tính cương lĩnh của chủ nghĩa Mác, thể hiện sự chín muồi về mặt thế giới quan mới của C.Mác và Ph.Ăngghen:"
    },
    {
        answer:"Phương án đúng là: Biện chứng tự phát. Vì: Ra đời trong điều kiện trình độ nhận thức và thực tiễn của con người còn hết sức hạn chế các nhà triết học xuát phát từ quan sát thế giới mà phát hiện ra tính chất biện chứng của thế giới.",
        question:"Phép biện chứng cổ đại là:"
    },
    {
        answer:"Phương án đúng là: Khi các bộ môn khoa học chuyên ngành tách khỏi triết học. Vì: Khi đó các bộ môn khoa học đã xác định được đối tượng nghiên cứu của chúng và trở thành những ngành nghiên cứu độc lập",
        question:"Chọn câu trả lời đúng :Trong điều kiện nào thì triết học chỉ còn đề cập đến những quy luật chung nhất của tự nhiên, xã hội và tư duy."
    },
    {
        answer:"Phương án đúng là: chủ nghĩa duy vật chất phác, chủ nghĩa duy vật siêu hình và chủ nghĩa duy vật biện chứng. Vì: Kể từ khi xuất hiện đến nay sự phát triển của chủ nghĩa duy vật đã trải qua các thời kỳ, các giai đoạn khác nhau. Căn cứ vào quá trình đó và nội dung cụ thể mà của chủ nghĩa duy vật được chia thành ba hình thức cơ bản đã nêu.",
        question:"Ba hình thức lịch sử cơ bản của chủ nghĩa duy vật là:"
    },
    {
        answer:"Phương án đúng là: trong xã hội chiếm hữu nô lệ (vào khoảng từ thế kỷ VIII đến thế kỷ VI trước công nguyên). Vì: Căn cứ vào nguồn gốc của triết học.",
        question:"Chọn câu trả lời đúng .Triết học ra đời"
    },
    {
        answer:"Phương án đúng là: chủ nghĩa duy vật vô thần và phép biện chứng. Vì: Học thuyết của Hê ghen có hạt nhân hợp lý là phép biện chứng, còn giá trị trong học thuyết của Phoi ơ bắc là chủ nghĩa duy vật vô thần.",
        question:"Chọn câu trả lời đúng .Mác và Ăngghen đã kế thừa ở Hêghen và Phoi ơ bắc:"
    },
    {
        answer:"Phương án đúng là: Đúng. Vì: Triết học ra đời trong xã hội có giai cấp",
        question:"Nhận định sau đây: “Trong xã hội có giai cấp thì mọi tư tưởng triết học đều có tính giai cấp” là"
    },
    {
        answer:"Phương án đúng là: Cả 3 phương án đã nêu. Vì: C.Mác và Ph.Ăngghen lần đầu tiên tạo ra một chủ nghĩa duy vật triết học hoàn bị là chủ nghĩa duy vật biện chứng, phép biện chứng duy vật và CNDV lịch sử. Điều đó đã giúp triết học Mác không chỉ có chức năng giải thích thế giới đắn về thế giới mà còn trở thành công cụ nhận thức khoa học để cải tạo thế giới bằng cách mạng",
        question:"Thực chất và ý nghĩa cuộc cách mạng trong triết học do C.Mác và Ph.Ăngghen thực hiện là gì?"
    },
    {
        answer:"Phương án đúng là: Mác và Ăngghen sáng lập, Lênin phát triển thêm. Vì: Căn cứ vào sự ra đời và phát triển của triết học Mác - Lênin.",
        question:"Chọn câu trả lời đúng .Triết học Mác – Lênin là học thuyết do:"
    },
    {
        answer:"nhất nguyên duy vật.",
        question:"Những nhà triết học cho rằng bản chất của thế giới là vật chất thì thuộc về phái:"
    },
    {
        answer:"siêu hình, máy móc và không triệt để.",
        question:"Chủ nghĩa duy vật trước Mác đóng vai trò quyết định trong cuộc đấu tranh chống chủ nghĩa duy tâm và tôn giáo, nhưng còn hạn chế ở tính"
    },
    {
        answer:"Phép biện chứng cổ đại",
        question:"Chọn cụm từ đúng điền vào chỗ trống: “Phép siêu hình đẩy lùi được ... Nhưng chính nó lại bị phép biện chứng hiện đại phủ định”"
    },
    {
        answer:"Triết học không phải là toàn bộ thế giới quan mà chỉ là hạt nhân lý luận chung nhất của thế giới quan.",
        question:"Chọn câu trả lời đúng.Hai khái niệm Triết học và thế giới quan:"
    },
    {
        answer:"có thể nhận thức được thế giới.",
        question:"Hãy chọn phương án đúng nhất để hoàn thành câu: Thuyết không thể biết cho rằng con người"
    },
    {
        answer:"Chủ nghĩa duy vật chất phác, chủ nghĩa duy vật siêu hình và chủ nghĩa duy vật biện chứng.",
        question:"Ba hình thức cơ bản của chủ nghĩa duy vật trong lịch sử triết học là:"
    },
    {
        answer:"chủ nghĩa duy tâm chủ quan và chủ nghĩa duy tâm khách quan.",
        question:"Hai hình thức cơ bản của chủ nghĩa duy tâm là:"
    },
    {
        answer:"Phép biện chứng duy vật.",
        question:"Phép biện chứng thực sự mang tính khoa học là:"
    },
    {
        answer:"Do hạn chế của nhận thức của con người về thế giới và sự phân chia giai cấp và sự tách rời đối lập giữa lao động trí óc và lao động chân tay trong xã hội có giai cấp đối kháng.",
        question:"Nguồn gốc của chủ nghĩa duy tâm? Hãy chọn câu trả lời đúng."
    },
    {
        answer:"không thể nhận thức được thế giới.",
        question:"Hãy chọn phương án đúng nhất để hoàn thành câu: Thuyết không thể biết cho rằng con người:"
    },
    {
        answer:"tinh thần có trước tự nhiên.",
        question:"Chủ nghĩa duy tâm là học thuyết triết học cho rằng:"
    },
    {
        answer:"cơ sở thế giới quan và phương pháp luận phản khoa học và cách mạng để phân tích xu hướng phát triển của xã hội.",
        question:"Chọn câu trả lời sai:Vai trò của triết học Mác-Lênin trong đời sống xã hội và trong sự nghiệp đổi mới ở Việt Nam là:"
    },
    {
        answer:"Tuyên ngôn của Đảng cộng sản (1848).",
        question:"Trong các tác phẩm kinh điển sau đây, tác phẩm nào được đánh giá là văn kiện đầu tiên có tính cương lĩnh của chủ nghĩa Mác, thể hiện sự chín muồi về mặt thế giới quan mới của C.Mác và Ph.Ăngghen:"
    },
    {
        answer:"sự xem xét phiến diện, tuyệt đối hóa, thần thánh hóa một mặt, một đặc tính nào đó của quá trình nhận thức",
        question:"Nguồn gốc nhận thức của chủ nghĩa duy tâm là:"
    },
    {
        answer:"Chủ nghĩa duy vật tầm thường",
        question:"Nhận định sau, thuộc lập trường triết học nào? “ Nhân tố kinh tế là nhân tố quyết định duy nhất trong lịch sử”"
    },
    {
        answer:"3",
        question:"Tìm con số đúng về số hình thức cơ bản của chủ nghĩa duy vật trong lịch sử triết học."
    },
    {
        answer:"Khi các bộ môn khoa học chuyên ngành tách khỏi triết học.",
        question:"Chọn câu trả lời đúng:Trong điều kiện nào thì triết học chỉ còn đề cập đến những quy luật chung nhất của tự nhiên, xã hội và tư duy."
    },
    {
        answer:"Nhị nguyên",
        question:"Chọn câu trả lời đúng:Quan niệm triết học: “coi vật chất và ý thức là 2 thực thể cùng song song tồn tại và độc lập với nhau” là trên lập trường nào?"
    },
    {
        answer:"Mác và Ăngghen sáng lập, Lênin phát triển thêm.",
        question:"Chọn câu trả lời đúng.Triết học Mác – Lênin là học thuyết do:"
    },
    {
        answer:"nhất nguyên duy vật.",
        question:"Những nhà triết học cho rằng bản chất của thế giới là ý thức thì thuộc về phái:"
    },
    {
        answer:"”vấn đề cơ bản lớn của mọi triết học, đặc biệt là của triết học hiện đại là vấn đề về mối quan hệ giữa tư duy và tồn tại”.",
        question:"Khẳng định nào là của Ph.Ăngghen về vấn đề cơ bản của triết học?"
    },
    {
        answer:"siêu hình, máy móc và không triệt để.",
        question:"Ai Chủ nghĩa duy vật trước Mác đóng vai trò quyết định trong cuộc đấu tranh chống chủ nghĩa duy tâm và tôn giáo, nhưng còn hạn chế ở tính:"
    },
    {
        answer:"Ba hình thức: phép biện chứng chất phác thời cổ đại, phép biện chứng duy tâm cổ điển Đức và phép biện chứng duy vật của chủ nghĩa Mác - Lênin.",
        question:"Các hình thức lịch sử cơ bản của phép biện chứng là:"
    },
    {
        answer:"trong xã hội chiếm hữu nô lệ (vào khoảng từ thế kỷ VIII đến thế kỷ VI trước công nguyên).",
        question:"Chọn câu trả lời đúng.Triết học ra đời"
    },
    {
        answer:"Đúng",
        question:"Nhận định sau đây: “Trong xã hội có giai cấp thì mọi tư tưởng triết học đều có tính giai cấp” là"
    },
    {
        answer:"Đồng nhất vật chất với vật thể cụ thể.",
        question:"Điểm chung trong quan niệm của các nhà triết học duy vật thời kỳ cổ đại về vật chất là:"
    },
    {
        answer:"2",
        question:"Tìm con số đúng về số hình thức cơ bản của chủ nghĩa duy tâm trong lịch sử triết học."
    },
    {
        answer:"Cả 3 phương án đã nêu",
        question:"Thực chất và ý nghĩa cuộc cách mạng trong triết học do C.Mác và Ph.Ăngghen thực hiện là gì?"
    },
    {
        answer:"Chủ nghĩa duy tâm chủ quan.",
        question:"Hệ thống triết học nào quan niệm sự vật là phức hợp của các cảm giác?"
    },
    {
        answer:"cho rằng ý thức có trước vật chất và quyết định vật chất.",
        question:"Chủ nghĩa duy tâm là khuynh hướng triết học:"
    },
    {
        answer:"Triết học Mác - Lênin là hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy - thế giới quan và phương pháp luận khoa học, cách mạng của giai cấp công nhân, nhân dân lao động và các lực lượng xã hội tiến bộ trong nhận thức và cải tạo thế giới.",
        question:"Chọn định nghĩa chính xác về triết học Mác - Lênin"
    },
    {
        answer:"Nhất nguyên",
        question:"Trường phái triết học nào thường chiếm địa vị thống trị trong lịch sử triết học?"
    },
    {
        answer:"“Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán”",
        question:"Trong các tác phẩm kinh điển sau đây, tác phẩm nào được thể hiện tập trung việc Lê nin đã kế thừa và phát triển quan niệm của chủ nghĩa Mác về vật chất, về mối quan hệ giữa vật chất và ý thức, tồn tại xã hội và ý thức xã hội?"
    },
    {
        answer:"Chủ nghĩa duy vật biện chứng.",
        question:"Hệ thống triết học nào coi ý thức là hình ảnh chủ quan của thế giới khách quan?"
    },
    {
        answer:"Chủ nghĩa duy tâm khách quan",
        question:"Vận động của tự nhiên và lịch sử chỉ là sự tha hoá từ sự tự vận động của ý niệm tuyệt đối. Quan niệm trên thuộc lập trường triết học nào?"
    },
    {
        answer:"Chủ nghĩa duy vật vô thần của Phoiơbắc và phép biện chứng của Hêghen.",
        question:"Chọn câu trả lời đúng.Tiền đề lý luận trực tiếp của triết học Mác là:"
    },
    {
        answer:"những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy.",
        question:"Triết học Mác – Lênin nghiên cứu:"
    },
    {
        answer:"bản chất thế giới là vật chất.",
        question:"Chủ nghĩa duy vật là học thuyết triết học cho rằng:"
    },
    {
        answer:"mối quan hệ giữa vật chất và ý thức.",
        question:"Chọn câu trả lời đúng.Vấn đề cơ bản lớn của triết học là vấn đề về:"
    },
    {
        answer:"Chức năng thế giới quan và phương pháp luận chung nhất.",
        question:"Triết học có chức năng cơ bản nào?"
    },
    {
        answer:"Tia X năm 1895",
        question:"Rơn ghen đã phát hiện ra hiện tượng nào vào năm bao nhiêu?"
    },
    {
        answer:"Chất là tính quy định vốn có của sự vật (hiện tượng), Chất là sự thống nhất hữu cơ của các thuộc tính cấu thành sự vật (hiện tượng), phân biệt sự vật (hiện tượng) này với sự vật khác (hiện tượng). Mỗi sự vật (hiện tượng) không chỉ có một, mà nhiều chất, tùy thuộc quan hệ của nó với những cái khác.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phủ định biện chứng là sự tự phủ định, sự phủ định tạo tiền đề cho cái mới ra đời, cho sự phát triển tiếp theo của sự vật.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"khoa học về sự liên hệ phổ biến, là khoa học về những quy luật phổ biến của sự vận động và phát triển của tự nhiên, xã hội loài người và t¬ư duy và là học thuyết về sự phát triển dưới hình thức hoàn bị nhất, sâu sắc nhất và không phiến diện.",
        question:"Phép biện chứng duy vật là:"
    },
    {
        answer:"nội dung quyết định hình thức và hình thức tác động trở lại nội dung.",
        question:"Trong mối quan hệ giữa nội dung và hình thức thì:"
    },
    {
        answer:"Khác",
        question:"Ph. Ăng ghen đã phân chia vận động thành 5 hình thức cơ bản. Sự phân chia đó dựa trên những nguyên tắc nào"
    },
    {
        answer:"Khác",
        question:"Tính độc lập tương đối của ý thức được thể hiện như thế nào?"
    },
    {
        answer:"Ý thức là sự phản ánh năng động, sáng tạo thế giới khách quan của bộ óc con người.",
        question:"Câu nào sau đây thể hiện đúng nhất quan điểm của chủ nghĩa duy vật biện chứng?"
    },
    {
        answer:"Apeiron",
        question:"Anaximender cho bản nguyên của thế giới là"
    },
    {
        answer:"Thực tiễn luôn luôn vận động, biến đổi, phát triển, do đó nhận thức cũng phải vận động, biến đổi, phát triển theo cho phù hợp thực tiễn.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Trạng thái tồn tại có tính quy luật phổ biến nhất của thế giới",
        question:"Đối tượng của PBCDV là"
    },
    {
        answer:"Tomxon , 1896",
        question:"Điện tử do ai phát hiện vào năm nào ?"
    },
    {
        answer:"hoạt động sản xuất vật chất có vai trò quan trọng nhất.",
        question:"Trong mối quan hệ giữa các hình thức cơ bản của thực tiễn, thì:"
    },
    {
        answer:"Phủ định biện chứng là sự tự phủ định, sự phủ định tạo tiền đề cho cái mới ra đời, cho sự phát triển tiếp theo của sự vật.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"bộ phận của cái riêng, nó sâu sắc, bản chất hơn cái riêng.",
        question:"Cái chung là …"
    },
    {
        answer:"Nhận thức xuất phát từ thực tiễn và phục vụ cho thực tiễn",
        question:"Nguyên tắc thực tiễn trong nhận thức có nội dung nào?"
    },
    {
        answer:"Cả A + B + C",
        question:"Người Trung hoa cổ đại cho bản nguyên của thế giới là"
    },
    {
        answer:"Quan điểm vận động",
        question:"Quan niệm của phép biện chứng duy vật về vận động của vật chất, đòi hỏi phải quan triệt quan điểm nào trong nhận thức và thực tiễn?"
    },
    {
        answer:"mỗi tri thức đúng đắn chỉ trong những không gian, thời gian xác định.",
        question:"Thế nào là tính cụ thể của chân lý?"
    },
    {
        answer:"Không khí",
        question:"Anaximenes cho bản nguyên của thế giới là"
    },
    {
        answer:"A+B",
        question:"Theo quan điểm của chủ nghĩa duy vật biện chứng, nguồn gốc tự nhiên của ý thức bao gồm những thành tố nào?"
    },
    {
        answer:"Quan niệm biện chứng của Mác.",
        question:"Quan niệm nào khẳng định giữa các sự vật, hiện tượng của thế giới khách quan luôn luôn tồn tại trong tính quy định và tương tác, làm biến đổi lẫn nhau?"
    },
    {
        answer:"khác",
        question:"Từ nguyên lý về mối liên hệ phổ biến, cần quán triệt nguyên tắc nào?"
    },
    {
        answer:"tính vật chất của nó.",
        question:"Theo chủ nghĩa duy vật biện chứng, thì thế giới thống nhất ở điểm nào ?:"
    },
    {
        answer:"Tôn giáo",
        question:"Thế giới quan duy tâm rất gần với thế giới quan ..."

    },
    {
        answer:"Đúng",
        question:"Các nhà triết học duy tâm chủ quan đã phủ nhận đặc trưng “tự thân tồn tại” của sự vật hiện tượng của thế giới.Nhận định trên là …"
    },
    {
        answer:"Tồn tại khách quan.",
        question:"Thuộc tính cơ bản nhất của vật chất, nhờ đó phân biệt vật chất với ý thức. Đó là thuộc tính nào ?"
    },
    {
        answer:"Liên hệ phổ biến là khái niệm nói lên rằng, mọi sự vật, hiện t¬ượng trong thế giới dù đa dạng phong phú như¬ng đều nằm trong mối liên hệ với các sự vật hiện tượng khác, đều chịu sự tác động, quy định của các sự vật hiện tượng khác và có thể chuyển hóa thành các sự vật hiện tượng khác.",
        question:"Nhận định nào sau đây là chính xác?"
    },
    {
        answer:"Cái tất nhiên bao giờ cũng vạch đường đi cho mình xuyên qua vô số cái ngẫu nhiên.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Không có bản chất thuần túy tách rời hiện tượng, cũng như không có hiện tượng lại không biểu hiện của một bản chất nào đó",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Khả năng và hiện thực tồn tại trong mối quan hệ tác động, chuyển hoá lẫn nhau.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Chân lý là tri thức có nội dung phù hợp với thực tế khách quan; sự phù hợp đó được kiểm tra và chứng minh bởi thực tiễn.",
        question:"Trong các nhận định sau, nhân dịnh nào đúng nhất?"
    },
    {
        answer:"3",
        question:"Có mấy nguyên tắc của lý luận nhận thức DVBC?"
    },
    {
        answer:"tự nhiên, xã hội loài người và tư duy.",
        question:"Phép biện chứng duy vật là môn khoa học về những quy luật phổ biến của sự vận động và phát triển của"
    },
    {
        answer:"Cái riêng tồn tại khách quan.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Nguyên tắc khách quan",
        question:"Xuất phát từ hiện thực khách quan, tôn trọng khách quan, nhận thức và vận dụng đúng đắn quy luật khách quan. Đó là nội dung của nguyên tắc nào trong nhận thức và thực tiễn?"
    },
    {
        answer:"Khác",
        question:"Khái niệm là …"

    },
    {
        answer:"Duy tâm",
        question:"Phủ nhận tính khách quan, cường điệu vai trò nhân tố chủ quan, duy ý chí, hành động bất chấp điều kiện, quy luật khách quan. Biểu hiện trên của trường phái nào?"
    },
    {
        answer:"các mặt đối lập nương tựa vào nhau, làm điều kiện, tiền đề tồn tại cho nhau, không có mặt này thì không có mặt kia và ngược lại.",
        question:"Sự thống nhất của các mặt đối lập là:"
    },
    {
        answer:"Cảm giác là hình ảnh chủ quan của thế giới khách quan: nguồn gốc, nội dung của nó là khách quan, còn hình thức biểu hiện của nó là chủ quan.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Căn cứ vào tính chất giai cấp của nhà nước",
        question:"Căn cứ vào yếu tố nào để phân biệt các kiểu nhà nước"
    },
    {
        answer:"Ba chiều không gian, một chiều thời gian",
        question:"Do có sự thống nhất giữa không gian và thời gian, nên vật chất có mấy chiều không gian và mấy chiều thời gian ?"
    },
    {
        answer:"Trường phái duy vật",
        question:"Trường phái nào cho rằng, bản chất của thế giới là Vật chất"
    },
    {
        answer:"Đồng nhất vật chất với vật thể cụ thể.",
        question:"Điểm chung trong quan niệm của các nhà triết học duy vật thời kỳ cổ đại về vật chất là:"
    },
    {
        answer:"Nghiên cứu mối quan hệ giữa vật chất và ý thức trên lập trường duy vật biện chứng, nghiên cứu những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy.",
        question:"Đối tượng nghiên cứu của triết học Mác – Lênin:"
    },
    {
        answer:"Khi các bộ môn khoa học chuyên ngành tách khỏi triết học.",
        question:"Chọn câu trả lời đúng:Trong điều kiện nào thì triết học chỉ còn đề cập đến những quy luật chung nhất của tự nhiên, xã hội và tư duy."
    },
    {
        answer:"Quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất",
        question:"Theo quan điểm duy vật lịch sử, suy đến cùng quy luật xã hội nào giữ vai trò quyết định đối với sự vận động, phát triển của xã hội?"
    },
    {
        answer:"Phép biện chứng cổ đại",
        question:"Chọn cụm từ đúng điền vào chỗ trống: “Phép siêu hình đẩy lùi được ... Nhưng chính nó lại bị phép biện chứng hiện đại phủ định”"
    },
    {
        answer:"phương thức, cách thức chung của sự phát triển.",
        question:"Quy luật “chuyển hóa từ những thay đổi về lượng thành những thay đổi về chất và ngược lại” phản ánh và quy định điều gì ?"
    },
    {
        answer:"Vật chất là hiện thực khách quan, ý thức là hiện thực chủ quan",
        question:"Sự phân biệt về bản chất giữa vật chất và ý thức là ở đâu?"
    },
    {
        answer:"cảm giác, tri giác và biểu tượng.",
        question:"Các hình thức cơ bản của nhận thức cảm tính là:"
    },
    {
        answer:"Nguyên tử",
        question:"Đêmocrit cho bản nguyên của thế giới là"
    },
    {
        answer:"cơ sở thế giới quan và phương pháp luận phản khoa học và cách mạng để phân tích xu hướng phát triển của xã hội.",
        question:"Chọn câu trả lời sai: Vai trò của triết học Mác-Lênin trong đời sống xã hội và trong sự nghiệp đổi mới ở Việt Nam là:"
    },
    {
        answer:"Khác",
        question:"Từ mối quan hệ giữa vật chất và ý thức cần quán triệt nguyên tắc phương pháp luận nào?"
    },
    {
        answer:"2",
        question:"Tìm con số đúng về số hình thức cơ bản của chủ nghĩa duy tâm trong lịch sử triết học."
    },
    {
        answer:"Ý thức chính trị, ý thức pháp quyền, ý thức đạo đức, ý thức tôn giáo, ý thức thẩm mỹ, ý thức khoa học, ý thức triết học",
        question:"Các hình thái chủ yếu của ý thức xã hội bao gồm"
    },
    {
        answer:"nội dung quyết định hình thức và hình thức tác động trở lại nội dung.",
        question:"Trong mối quan hệ giữa nội dung và hình thức thì:"
    },
    {
        answer:"Quan điểm vận động",
        question:"Quan niệm của phép biện chứng duy vật về vận động của vật chất, đòi hỏi phải quan triệt quan điểm nào trong nhận thức và thực tiễn?"
    },
    {
        answer:"Vật chất là tính thứ nhất; ý thức là tính thứ hai",
        question:"Giữa vật chất và ý thức, cái nào là tính thứ nhất, cái nào là tính thứ hai?"
    },
    {
        answer:"Khả năng và hiện thực tồn tại trong mối quan hệ tác động, chuyển hoá lẫn nhau.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Do hạn chế của nhận thức của con người về thế giới và sự phân chia giai cấp và sự tách rời đối lập giữa lao động trí óc và lao động chân tay trong xã hội có giai cấp đối kháng.",
        question:"Nguồn gốc của chủ nghĩa duy tâm? Hãy chọn câu trả lời đúng."
    },
    {
        answer:"tính vật chất của nó.",
        question:"Theo chủ nghĩa duy vật biện chứng, thì thế giới thống nhất ở điểm nào ?:"
    },
    {
        answer:"A+B",
        question:"Theo quan điểm của chủ nghĩa duy vật biện chứng, nguồn gốc tự nhiên của ý thức bao gồm những thành tố nào?"
    },
    {
        answer:"Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán",
        question:"V. I. Lê nin đã đưa ra định nghĩa về vật chất trong tác phẩm nào?"
    },
    {
        answer:"Khác",
        question:"Ph. Ăng ghen đã phân chia vận động thành 5 hình thức cơ bản. Sự phân chia đó dựa trên những nguyên tắc nào"
    },
    {
        answer:"khác nhau về quyền sở hữu đối với tư liệu sản xuất chủ yếu của xã hội",
        question:"Theo quan điểm của triết học Mác – Lênin, đặc trưng nào trong các đặc trưng sau của giai cấp giữ vai trò chi phối các đặc trưng khác của giai cấp:"
    },
    {
        answer:"Không có vật chất không vân động",
        question:"Phương án nào sau đây là đúng nhất?"
    },
    {
        answer:"Cảm giác là hình ảnh chủ quan của thế giới khách quan: nguồn gốc, nội dung của nó là khách quan, còn hình thức biểu hiện của nó là chủ quan.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Tổng thể các giai cấp và mối liên hệ giữa các giai cấp, tồn tại trong một giai đoạn lịch sử nhất định.",
        question:"Chọn đáp án đúng nhất: Kết cấu xã hội – giai cấp là:"
    },
    {
        answer:"Do sự phát triển của lực lượng sản xuất",
        question:"Nguyên nhân sâu xa của sự xuất hiện giai cấp là:"
    },
    {
        answer:"Hình thái ý thức chính trị",
        question:"Hiện nay, trong các hình thái ý thức xã hội, hình thái ý thức nào đóng vai trò chi phối mạnh mẽ các hình thái ý thức khác?"
    },
    {
        answer:"Quan hệ về sở hữu về tư liệu sản xuất.",
        question:"Trong cấu trúc của quan hệ sản xuất, yếu tố nào có vai trò quyết định đến toàn bộ quan hệ sản xuất?"
    },
    {
        answer:"Quần chúng nhân dân.",
        question:"Theo quan điểm của chủ nghĩa duy vật lịch sử, lực lượng nào trong xã hội là chủ thể sáng tạo chân chính và là động lực phát triển của lịch sử?"
    },
    {
        answer:"Thuế và quốc trái",
        question:"Điền vào chỗ trống để có đáp án đúng Theo Lênin, nhà nước “muốn duy trì quyền lực xã hội đặc biệt, đặt lên trên xã hội, thì phải có ……”"
    },
    {
        answer:"Đáp án A và B đều đúng",
        question:"Phương pháp hòa bình trong đấu tranh cách mạng giành chính quyền chỉ có thể xảy ra khi có điều kiện là:"
    },
    {
        answer:"Ý thức chính trị, ý thức pháp quyền, ý thức đạo đức, ý thức tôn giáo, ý thức thẩm mỹ, ý thức khoa học, ý thức triết học",
        question:"Các hình thái chủ yếu của ý thức xã hội bao gồm:"
    },
    {
        answer:"Xã hội chiếm hữu nô lệ",
        question:"Giai cấp đối kháng đầu tiên trong lịch sử xuất hiện trong xã hội nào?"
    },
    {
        answer:"Đổi mới kinh tế là trọng tâm",
        question:"Chọn đáp án SAI: Xuất phát từ quy luật về sự phù hợp của quan hệ sản xuất với trình độ của lực lượng sản xuất, Đảng ta đã vận dụng để đưa ra đường lối phát triển đất nước là:"
    },
    {
        answer:"Con người là sự tha hóa của ý niệm tuyệt đối",
        question:"Hãy chỉ ra luận điểm thể hiện lập trường triết học duy tâm:"
    },
    {
        answer:"Con người vừa là mục tiêu, là nguồn gốc, là động lực của sự phát triển",
        question:"Xuất phát từ quan niệm của chủ nghĩa Mác – Lênin coi con người là chủ thể lịch sử xã hội, Đảng Cộng sản Việt Nam đã đưa ra quan niệm tổng quát trong chiến lược phát triển con người Việt Nam hiện nay là:"
    },
    {
        answer:"Cộng sản nguyên thủy => Chiếm hữu nô lệ => Phong kiến => Tư bản chủ nghĩa => Cộng sản chủ nghĩa",
        question:"Theo quan điểm duy vật lịch sử, lịch sử xã hội loài người là một tiến trình nối tiếp nhau từ thấp đến cao của các hình thái kinh tế - xã hội theo trình tự là:"
    },
    {
        answer:"là các quan hệ vật chất - khách quan của xã hội.",
        question:"Mác coi các quan hệ sản xuất là “cơ sở hạ tầng” của xã hội, vì các quan hệ sản xuất:"
    },
    {
        answer:"Hoạt động xã hội và hoạt động thực tiễn của con người.",
        question:"Những năng lực tự nhiên vốn có của con người chỉ được bộc lộ căn bản trong:"
    },
    {
        answer:"Quần chúng nhân dân gồm những con người mang bản tính xã hội.",
        question:"Nhận định: “Quần chúng nhân dân là lực lượng sáng tạo chân chính ra lịch sử” đã không dựa vào căn cứ nào"
    },
    {
        answer:"Hình thái ý thức triết học",
        question:"Hình thức đặc biệt và cao nhất của tri thức cũng như của ý thức xã hội là:"
    },
    {
        answer:"C. Mác",
        question:"Luận điểm sau đây của tác gia nào: “Tôi coi sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên”"
    },
    {
        answer:"Đấu tranh giai cấp là động lực quan trọng và trực tiếp của lịch sử phát triển xã hội",
        question:"Luận điểm nào sau đây phù hợp với quan niệm của chủ nghĩa duy vật lịch sử về vai trò của đấu tranh giai cấp trong sự phát triển của xã hội có giai cấp?"
    },
    {
        answer:"là toản bộ những quan hệ sản xuất của một xã hội trong sự vận động hiện thực của chúng hợp thành cơ cấu kinh tế của xã hội.",
        question:"Chọn phương án đúng nhất: Cơ sở hạ tầng của xã hội:"
    },
    {
        answer:"Căn cứ vào tồn tại xã hội đồng thời phải tính đến tính độc lập tương đối của ý thức xã hội.",
        question:"Quan điểm duy vật lịch sử trong việc giải thích các hiện tượng thuộc đời sống ý thức xã hội là"
    },
    {
        answer:"Tổng thể các giai cấp và mối liên hệ giữa các giai cấp, tồn tại trong một giai đoạn lịch sử nhất định.",
        question:"Chọn đáp án đúng nhất: Kết cấu xã hội – giai cấp là:"
    },
    {
        answer:"Thị tộc => bộ lạc => bộ tộc => dân tộc",
        question:"Sắp xếp các hình thức cộng đồng người theo lịch sử phát triển của nhân loại:"
    },
    {
        answer:"Phương án đúng là: Yếu tố văn hoá, truyền thống. Vì: Văn hóa (tinh thần) thuộc về phạm trù ý thức xã hội",
        question:"Yếu tố nào sau đây không thuộc tồn tại xã hội"
    },
    {
        answer:"Phương án đúng là: Cách mạng xã hội là phương thức thay thế hình thái kinh tế xã hội này sang hình thái kinh tế xã hội khác cao hơn, tiến bộ hơn. Vì: Căn cứ vào khái niệm cách mạng xã hội",
        question:"Theo quan điểm của chủ nghĩa duy vật lịch sử về bản chất và vai trò của cách mạng xã hội"
    },
    {
        answer:"Phương án đúng là: Sự thay đổi chính quyền nhà nước từ tay giai cấp thống trị phản động sang tay giai cấp cách mạng. Vì: Căn cứ vào khái niệm cách mạng xã hội",
        question:"Đặc trưng chủ yếu của cách mạng xã hội là gì?"
    },
    {
        answer:"Phương án đúng là: Tồn tại xã hội quyết định ý thức xã hội, nhưng ý thức xã hội có thể tác động trở lại tồn tại xã hội. Vì: Tồn tại xã hội thuộc lĩnh vực vật chất, còn ý thức xã hội thuộc lĩnh vực ý thức. Và theo quan điểm duy vật biện chứng vật chất quyết định ý thức, còn ý thức tác động trở lại vật chất.",
        question:"Theo quan điểm của chủ nghĩa duy vật lịch sử thì:"
    },
    {
        answer:"Phương án đúng là: Quan hệ giữa nội dung và hình thức. Vì: Trong một phương thức sản xuất lực lượng sản xuất đóng vai trò là nội dung vật chất, còn quan hệ sản xuất là hình thức xã hội của nó. Và trong mối quan hệ giữa nội dung và hình thức thì hình thức tác động trở lại nội dung",
        question:"Mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất trong mỗi phương thức sản xuất thuộc về:"
    },
    {
        answer:"Phương án đúng là: Người lao động và tư liệu sản xuất",
        question:"Cấu trúc của lực lượng sản xuất bao gồm:"
    },
    {
        answer:"Phương án đúng là: địa vị kinh tế của họ. Vì: Căn cứ vào định nghĩa giai cấp của V.I.Lênin.",
        question:"Theo Lênin thì người ta được coi là các giai cấp khác nhau trước hết và chủ yếu là do:"
    },
    {
        answer:"Phương án đúng là: C.Mác trong tác phẩm Luận cương về Phoiơbắc. Vì: Theo trích dẫn của sách giáo trình từ C.Mác và Ăngghen (1995), Toàn tập, t3. Nxb. CTQG, tr.11.",
        question:"Luận điểm sau của ai và được viết trong tác phẩm nào? “Bản chất con người không phải là cái trừu tượng cố hữu của những cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là tổng hoà những quan hệ xã hội”"
    },
    {
        answer:"Phương án đúng là: Cả 3 đáp án A, B, C",
        question:"Cấu trúc của tồn tại xã hội gồm:"
    },
    {
        answer:"Phương án đúng là: Cải cách xã hội thúc đẩy quá trình tiến hóa xã hội, từ đó tạo tiền đề cho CMXH. Vì: Cải cách xã hội là kết quả đấu tranh cùa các lực lượng xã hội tiến bộ. Nhiều khi cải cách xã hội là bộ phận hợp thành của cách mạng xã hội. Khi các cuộc cải cách xã hội được thực hiện thành công ờ những mức độ khác nhau, chúng đều tạo ra sự phát triển xã hội theo hướng tiến bộ",
        question:"Vai trò của cải cách xã hội đối với cách mạng xã hội (CMXH):"
    },
    {
        answer:"Phương án đúng là: thói quen, truyền thống, tập quán. Vì: Thói quen, truyền thống, tập quán được hình thành từ trong quá, chúng có tính bảo thủ, có tính “ì”",
        question:"Những yếu tố của ý thức xã hội thường có xu hướng lạc hậu hơn so với tồn tại xã hội là:"
    },
    {
        answer:"Phương án đúng là: Cả hai phương diện. Vì: Căn cứ vào bản chất con người.",
        question:"Giữa hai phương diện tự nhiên và xã hội của con người, phương diện nào là đặc trưng bản chất của con người?"
    },
    {
        answer:"nội dung quyết định hình thức và hình thức tác động trở lại nội dung.",
        question:"Vấn đề cơ bản lớn của triết học là vấn đề về:Trong mối quan hệ giữa nội dung và hình thức thì:"
    },
    {
        answer:"Tại thực tiễn của xã hội những năm cuối thể kỷ XIX đầu thế kỷ XX đòi hỏi phải bảo vệ và phát triển chủ nghĩa Mác nói chung, triết học Mác nói riêng và Lênin không chỉ nắm bắt mà còn có khả năng đáp ứng được những yêu cầu đó của thực tiễn",
        question:"Tại sao có giai đoạn Lên nin trong sự phát triển triết học Mác?"
    },
    {
        answer:"Thực tiễn luôn luôn vận động, biến đổi, phát triển, do đó nhận thức cũng phải vận động, biến đổi, phát triển theo cho phù hợp thực tiễn.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Khả năng và hiện thực tồn tại trong mối quan hệ tác động, chuyển hoá lẫn nhau.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"khoa học về sự liên hệ phổ biến, là khoa học về những quy luật phổ biến của sự vận động và phát triển của tự nhiên, xã hội loài người và tư duy và là học thuyết về sự phát triển dưới hình thức hoàn bị nhất, sâu sắc nhất và không phiến diện.",
        question:"Phép biện chứng duy vật là:"
    },
    {
        answer:"Vừa đung vừa sai",
        question:"Luận điểm: “Phương thức mà theo đó ý thức tồn tại và theo đó một cái gì tồn tại đối với ý thức là tri thức …, cho nên một cái gì đó nảy sinh ra đối với ý thức , chừng nào ý thức biết cái đó”"
    },
    {
        answer:"trong mối liên hệ đưa đến cái chung.",
        question:"Cái riêng tồn tại như thế nào?"
    },
    {
        answer:"Phép biện chứng cổ đại",
        question:"Chọn cụm từ đúng điền vào chỗ trống: “Phép siêu hình đẩy lùi được ... Nhưng chính nó lại bị phép biện chứng hiện đại phủ định”"
    },
    {
        answer:"Ba hình thức: phép biện chứng Trung quốc, phép biện chứng Ấn độ và phép biện chứng Hy lạp.",
        question:"Các hình thức lịch sử cơ bản của phép biện chứng là:"
    },
    {
        answer:"Cả đáp án A và C đều đúng",
        question:"Chọn đáp ánh đúng: Quy luật về sự phù hợp của quan hệ sản xuất (QHSX) với trình độ phát triển của lực lượng sản xuất (LLSX):"
    },
    {
        answer:"Khởi nguyên của thế giới",
        question:"Các nhà duy vật thời cổ đại đã quy vật chất về một hay vài dạng cụ thể và xem chúng là ..."
    },
    {
        answer:"Động vật biết chế tạo và sử dụng công cụ lao động.",
        question:"Chọn phương án trả lời đúng nhất: Theo quan điểm duy vật lịch sử, con người là:"
    },
    {
        answer:"Phương diện sinh hoạt vật chất và các điều kiện sinh hoạt vật chất của xã hội.",
        question:"Khái niệm tồn tại xã hội dùng để chỉ:"
    },
    {
        answer:"Quan hệ giữa nội dung và hình thức.",
        question:"Mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất trong mỗi phương thức sản xuất thuộc về:"
    },
    {
        answer:"Khác",
        question:"Quy luật là mối liên hệ như thế nào ?"
    },
    {
        answer:"tinh thần có trước tự nhiên.",
        question:"Chủ nghĩa duy tâm là học thuyết triết học cho rằng:"
    },
    {
        answer:"Đấu tranh giai cấp là động lực quan trọng và trực tiếp của lịch sử phát triển xã hội",
        question:"Luận điểm nào sau đây phù hợp với quan niệm của chủ nghĩa duy vật lịch sử về vai trò của đấu tranh giai cấp trong sự phát triển của xã hội có giai cấp?"
    },
    {
        answer:"Cả A + B + C",
        question:"Người Trung hoa cổ đại cho bản nguyên của thế giới là"
    },
    {
        answer:"qua lại giữa các thuộc tính trong một sự vật hoặc giữa các sự vật với nhau, gây ra một sự biến đổi nhất định.",
        question:"Nguyên nhân là phạm trù triết học chỉ sự tác động"
    },
    {
        answer:"Người lao động và tư liệu sản xuất",
        question:"Cấu trúc của lực lượng sản xuất bao gồm:"
    },
    {
        answer:"C. Mác",
        question:"Luận điểm sau đây của tác gia nào: “Tôi coi sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên”"
    },
    {
        answer:"Duy tâm",
        question:"Quan niệm: “Ý thức là nguyên thể đầu tiên, tồn tại vĩnh viễn, là nguyên nhân sinh ra thế giới vật chất” là của trường phái nào ?"
    },
    {
        answer:"mối quan hệ giữa vật chất và ý thức.",
        question:"Vấn đề cơ bản lớn của triết học là vấn đề về:"
    },
    {
        answer:"Mâu thuẫn giữa nhu cầu phát triển của lực lượng sản xuất với sự kìm hãm của quan hệ sản xuất không phù hợp.",
        question:"Theo quan điểm macxit thì mọi xung đột trong lịch sử xét đến cùng đều bắt nguồn từ:"
    },
    {
        answer:"Chân lý là tri thức có nội dung phù hợp với thực tế khách quan; sự phù hợp đó được kiểm tra và chứng minh bởi thực tiễn.",
        question:"Trong các nhận định sau, nhân dịnh nào đúng nhất?"
    },
    {
        answer:"Cái tất nhiên bao giờ cũng vạch đường đi cho mình xuyên qua vô số cái ngẫu nhiên.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Khác",
        question:"Trong ý thức của con người, tình cảm là"
    },
    {
        answer:"Đúng,",
        question:"Thế giới còn nhiều điều “kỳ là” mà con người đã, đang và sẽ tiếp tục nghiên cusu. Điều đó là"
    },
    {
        answer:"Không ngừng phát triển trên cơ sở tổng kết những thành tựu mới của sự phát triển các khoa học và thực tiễn xã hội.",
        question:"Chọn câu trả lời đúng: Triết học Mác-Lênin là học thuyết khoa học:"
    },
    {
        answer:"Yếu tố văn hoá, truyền thống.",
        question:"Yếu tố nào sau đây không thuộc tồn tại xã hội:"
    },
    {
        answer:"Cái riêng tồn tại khách quan.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Mác và Ăngghen sáng lập, Lênin phát triển thêm.",
        question:"Chọn câu trả lời đúng. Triết học Mác – Lênin là học thuyết do:"
    },
    {
        answer:"Không có vật chất không vân động",
        question:"Phương án nào sau đây là đúng nhất?"
    },
    {
        answer:"tồn tại độc lập, không phụ thuộc vào ý thức con người.",
        question:"Vật chất tồn tại khách quan có nghĩa là vật chất:"
    },
    {
        answer:"Cộng sản nguyên thủy => Chiếm hữu nô lệ => Phong kiến => Tư bản chủ nghĩa => Cộng sản chủ nghĩa",
        question:"Theo quan điểm duy vật lịch sử, lịch sử xã hội loài người là một tiến trình nối tiếp nhau từ thấp đến cao của các hình thái kinh tế - xã hội theo trình tự là:"
    },
    {
        answer:"chủ nghĩa duy tâm chủ quan và chủ nghĩa duy tâm khách quan.",
        question:"Hai hình thức cơ bản của chủ nghĩa duy tâm là:"
    },
    {
        answer:"Lửa",
        question:"Heraclitus cho bản nguyên của thế giới là"
    },
    {
        answer:"Khác",
        question:"Trong ý thức của con người, ý chí là"
    },
    {
        answer:"Khác",
        question:"Từ nguyên lý về sự phát triển, cần quán triệt nguyên tắc nào?"
    },
    {
        answer:"Sai",
        question:"Luận điểm: “Người máy thông minh sẽ có hoạt động ý thức thay thế cho ý thức con người” là"
    },
    {
        answer:"Nhị nguyên",
        question:"Chọn câu trả lời đúng: Quan niệm triết học: “coi vật chất và ý thức là 2 thực thể cùng song song tồn tại và độc lập với nhau” là trên lập trường nào?"
    },
    {
        answer:"Cả A + B",
        question:"Các nhà duy vật thế kỷ XVII – XVIII đã có quan niệm duy vật siêu hình về vật chất với các biểu hiện nào?"
    },
    {
        answer:"Khác",
        question:"Tính độc lập tương đối của ý thức được thể hiện như thế nào?"
    },
    {
        answer:"Giữa hình thức và nội dung có sự gắn bó chặt chẽ, thống nhất với nhau.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Cả A + B + C",
        question:"Các nhà duy vật thời cổ đại đã quy vật chất về những"
    },
    {
        answer:"chủ nghĩa duy vật vô thần và phép biện chứng.",
        question:"Mác và Ăngghen đã kế thừa ở Hêghen và Phoi ơ bắc:"
    },
    {
        answer:"Triết học Mác - Lênin là hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy - thế giới quan và phương pháp luận khoa học, cách mạng của giai cấp công nhân, nhân dân lao động và các lực lượng xã hội tiến bộ trong nhận thức và cải tạo thế giới.",
        question:"Chọn định nghĩa chính xác về triết học Mác - Lênin"
    },
    {
        answer:"Khác",
        question:"Thế nào là quy luật phổ biến của phép biện chứng duy vật ?"
    },
    {
        answer:"trong cái riêng và thông qua cái riêng mà biểu hiện sự tồn tại của nó.",
        question:"Cái chung chỉ tồn tại như thế nào?"
    },
    {
        answer:"Xã hội chiếm hữu nô lệ",
        question:"Giai cấp đối kháng đầu tiên trong lịch sử xuất hiện trong xã hội nào?"
    },
    {
        answer:"Cái riêng tồn tại khách quan.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"khoa học về mối liên hệ phổ biến và về sự phát triển dưới hình thức hoàn bị nhất, sâu sắc nhất và không phiến diện.",
        question:"Chọn phương án chính xác Phép biện chứng duy vật là:"
    },
    {
        answer:"là toàn bộ quan điểm, tư tưởng xã hội với những thiết chế xã hội tương ứng cùng những quan hệ nội tại của thượng tầng hình thành trên một cơ sở hạ tầng nhất định.",
        question:"Chọn phương án trả lời đúng nhất: Kiến trúc thượng tầng của xã hội:"
    },
    {
        answer:"Không khí",
        question:"Anaximenes cho bản nguyên của thế giới là"
    },
    {
        answer:"Khác",
        question:"Phát triển là quá trình vận động như thế nào ?"
    },
    {
        answer:"Đúng",
        question:"Quan điểm: “VC là cái mà khi tác động vào giác quan con người thì đem lại cho con người cảm giác”"
    },
    {
        answer:"Đúng",
        question:"Quan điểm: “Vận động là phương thức tồn tại của vật chất” là"
    },
    {
        answer:"Về phương diện sinh học, con người phải phục tùng các quy luật của giới tự nhiên, các quy luật sinh học như di truyền, tiến hóa sinh học và các quá trình sinh học của giới tự nhiên.",
        question:"Các nhà kinh điển của chủ nghĩa duy vật lịch sử nhấn mạnh “Giới tự nhiên… là thân thể vô cơ của con người” có nghĩa là:"
    },
    {
        answer:"Apeiron",
        question:"Anaximender cho bản nguyên của thế giới là"
    },
    {
        answer:"Phép biện chứng duy vật.",
        question:"Phép biện chứng thực sự mang tính khoa học là:"
    },
    {
        answer:"Sáng kiến vĩ đại.",
        question:"Định nghĩa về giai cấp của V.I Lênin được nêu ra trong tác phẩm nào?"
    },
    {
        answer:"Phương thức sản xuất là cách thức con người tiến hành quá trình sản xuất vật chất ở những giai đoạn lịch sử nhất định của xã hội loài người.",
        question:"Chọn đáp án ĐÚNG NHẤT. Phương thức sản xuất là gì"
    },
    {
        answer:"Căn cứ vào tồn tại xã hội đồng thời phải tính đến tính độc lập tương đối của ý thức xã hội.",
        question:"Quan điểm duy vật lịch sử trong việc giải thích các hiện tượng thuộc đời sống ý thức xã hội là"
    },
    {
        answer:"Cuộc cách mạng xã hội chỉ làm thay đổi về đời sống chính trị.",
        question:"Nhận định nào sau đây không đúng với quan niệm của chủ nghĩa duy vật lịch sử?"
    },
    {
        answer:"Khác",
        question:"Tính cụ thể của chân lý được thể hiện trên những phương diện nào?"
    },
    {
        answer:"Kết hợp đồng thời phát triển lực lượng sản xuất với tiến hành xây dựng, cải tạo quan hệ sản xuất phù hợp.",
        question:"Trong sự nghiệp xây dựng CNXH ở nước ta, chúng ta cần phải tiến hành:"
    },
    {
        answer:"Chất là tính quy định vốn có của sự vật (hiện tượng), Chất là sự thống nhất hữu cơ của các thuộc tính cấu thành sự vật (hiện tượng), phân biệt sự vật (hiện tượng) này với sự vật khác (hiện tượng). Mỗi sự vật (hiện tượng) không chỉ có một, mà nhiều chất, tùy thuộc quan hệ của nó với những cái khác.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Chủ nghĩa duy tâm khách quan",
        question:"Vận động của tự nhiên và lịch sử chỉ là sự tha hoá từ sự tự vận động của ý niệm tuyệt đối. Quan niệm trên thuộc lập trường triết học nào?"
    },
    {
        answer:"Duy tâm",
        question:"Phủ nhận tính khách quan, cường điệu vai trò nhân tố chủ quan, duy ý chí, hành động bất chấp điều kiện, quy luật khách quan. Biểu hiện trên của trường phái nào?"
    },
    {
        answer:"tính thống nhất vật chất của thế giới.",
        question:"Cơ sở của mối liên hệ qua lại giữa các sự vật hiện tượng là:"
    },
    {
        answer:"Ý thức là sự phản ánh năng động, sáng tạo thế giới khách quan của bộ óc con người.",
        question:"Câu nào sau đây thể hiện đúng nhất quan điểm của chủ nghĩa duy vật biện chứng?"
    },
    {
        answer:"Thần học",
        question:"Thế giới quan duy tâm rất gần với thế giới quan tôn giáo và tất yếu dẫn tới...."
    },
    {
        answer:"Giai cấp tư sản và vô sản",
        question:"Giai cấp cơ bản trong xã hội tư bản chủ nghĩa là"
    },
    {
        answer:"tính vật chất của nó.",
        question:"Theo chủ nghĩa duy vật biện chứng, thì thế giới thống nhất ở điểm nào ?"
    },
    {
        answer:"Tiến bộ nhất, đại biểu cho phương thức sản xuất mới.",
        question:"Theo quan điểm duy vật lịch sử, vai trò lãnh đạo một cuộc cách mạng thuộc về giai cấp:"
    },
    {
        answer:"QHSX hoàn toàn phụ thuộc vào LLSX.",
        question:"Trong sự thống nhất biện chứng giữa lực lượng sản xuất (LLSX) và quan hệ sản xuất (QHSX) thì:"

    },
    {
        answer:"Đúng",
        question:"Quan điểm: “VC là cái mà ý thức chẳng qua chỉ là sự phản ánh của nó”"
    },
    {
        answer:"Vật chất là tính thứ nhất; ý thức là tính thứ hai",
        question:"Giữa vật chất và ý thức, cái nào là tính thứ nhất, cái nào là tính thứ hai?"
    },
    {
        answer:"siêu hình, máy móc và không triệt để.",
        question:"Ai Chủ nghĩa duy vật trước Mác đóng vai trò quyết định trong cuộc đấu tranh chống chủ nghĩa duy tâm và tôn giáo, nhưng còn hạn chế ở tính:"
    },
    {
        answer:"Ph. Ăng ghen",
        question:"Định nghĩa sau đây, tác giả là ai? “Vận động hiểu theo nghĩa chung nhất – tức được hiểu là một phương thức tồn tại của vật chất, là một thuộc tính cố hữu của vật chất, - thì bao gồm tất cả mọi sự thay đổi và mọi quá trình diễn ra trong vũ trụ, kể từ sự thay đổi vị trí giản đơn cho đến tư duy”"
    },
    {
        answer:"Quan niệm biện chứng của Mác.",
        question:"Quan niệm nào khẳng định giữa các sự vật, hiện tượng của thế giới khách quan luôn luôn tồn tại trong tính quy định và tương tác, làm biến đổi lẫn nhau?"
    },
    {
        answer:"Chủ nghĩa duy vật vô thần của Phoiơbắc và phép biện chứng của Hêghen.",
        question:"Tiền đề lý luận trực tiếp của triết học Mác là:"
    },
    {
        answer:"nguồn gốc, động lực cơ bản của mọi quá trình vận động và phát triển.",
        question:"Quy luật “thống nhất và đấu tranh của các mặt đối lập” phản ánh và quy định điều gì ?"
    },
    {
        answer:"Vật chất là hiện thực khách quan, ý thức là hiện thực chủ quan",
        question:"Sự phân biệt về bản chất giữa vật chất và ý thức là ở đâu?"
    },
    {
        answer:"là toản bộ những quan hệ sản xuất của một xã hội trong sự vận động hiện thực của chúng hợp thành cơ cấu kinh tế của xã hội.",
        question:"Chọn phương án đúng nhất:Cơ sở hạ tầng của xã hội:"
    },
    {
        answer:"Nhận thức là một quá trình phản ánh tích cực, tự giác và sáng tạo thế giới khách quan vào bộ óc con người trên cơ sở thực tiễn, nhằm sáng tạo ra những tri thức về thế giới khách quan.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Phép biện chứng duy tâm.",
        question:"Phép biện chứng nào cho rằng thế giới hiện thực chỉ là sự phản ánh biện chứng của ý niệm"
    },
    {
        answer:"Đúng",
        question:"Quan điểm: “Vận động của vật chất là tự thân vận động và mang tính phổ biến” là"
    },
    {
        answer:"Tia X năm 1895",
        question:"Rơn ghen đã phát hiện ra hiện tượng nào vào năm bao nhiêu?"
    },
    {
        answer:"Triết học không phải là toàn bộ thế giới quan mà chỉ là hạt nhân lý luận chung nhất của thế giới quan.",
        question:"Chọn câu trả lời đúng. Hai khái niệm Triết học và thế giới quan:"
    },
    {
        answer:"Là tính có thực của thế giới xung quanh con người",
        question:"Tồn tại thế giới là gì ?"
    },
    {
        answer:"Căn cứ vào tính chất giai cấp của nhà nước",
        question:"Căn cứ vào yếu tố nào để phân biệt các kiểu nhà nước"
    },
    {
        answer:"sự tổng hợp của tất cả những mặt, những yếu tố, những quá trình tạo nên sự vật, hiện tượng.",
        question:"Phạm trù nội dung dùng để chỉ:"
    },
    {
        answer:"Quan hệ về sở hữu về tư liệu sản xuất.",
        question:"Trong cấu trúc của quan hệ sản xuất, yếu tố nào có vai trò quyết định đến toàn bộ quan hệ sản xuất?"
    },
    {
        answer:"Tồn tại khách quan.",
        question:"Thuộc tính cơ bản nhất của vật chất, nhờ đó phân biệt vật chất với ý thức. Đó là thuộc tính nào ?"
    },
    {
        answer:"CMXH mở đường cho quá trình tiến hóa xã hội lên giai đoạn cao hơn.",
        question:"Vai trò của cách mạng xã hội (CMXH) đối với sự tiến hóa xã hội:"
    },
    {
        answer:"sự xem xét phiến diện, tuyệt đối hóa, thần thánh hóa một mặt, một đặc tính nào đó của quá trình nhận thức.",
        question:"Nguồn gốc nhận thức của chủ nghĩa duy tâm là:"
    },
    {
        answer:"cho rằng ý thức có trước vật chất và quyết định vật chất.",
        question:"Chủ nghĩa duy tâm là khuynh hướng triết học:"
    },
    {
        answer:"Cả Vật chất và ý thức",
        question:"Yếu tố nào là hiện thực"
    },
    {
        answer:"Đồng nhất vật chất với vật thể cụ thể.",
        question:"Điểm chung trong quan niệm của các nhà triết học duy vật thời kỳ cổ đại về vật chất là:"
    },
    {
        answer:"Chức năng thế giới quan và phương pháp luận chung nhất.",
        question:"Triết học có chức năng cơ bản nào?"
    },
    {
        answer:"Sai",
        question:"Các học phái triết học thời cổ đại đã không quy vật chất về những cái trừu tượng. Nhận định trên là"
    },
    {
        answer:"Tất nhiên và ngẫu nhiên tồn tại trong sự thống nhất hữu cơ với nhau.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"khác",
        question:"Từ nguyên lý về mối liên hệ phổ biến, cần quán triệt nguyên tắc nào?"
    },
    {
        answer:"Chủ nghĩa duy vật tầm thường",
        question:"Nhận định sau, thuộc lập trường triết học nào? “ Nhân tố kinh tế là nhân tố quyết định duy nhất trong lịch sử”"
    },
    {
        answer:"Phép biện chứng duy vật.",
        question:"Phép biện chứng thực sự mang tính khoa học là:"
    },
    {
        answer:"siêu hình, máy móc và không triệt để.",
        question:"Chủ nghĩa duy vật trước Mác đóng vai trò quyết định trong cuộc đấu tranh chống chủ nghĩa duy tâm và tôn giáo, nhưng còn hạn chế ở tính:"
    },
    {
        answer:"3",
        question:"Có bao nhiêu quy luật phổ biến của phép biện chứng duy vật ?"
    },
    {
        answer:"A+B",
        question:"Người Ấn độ cổ đại cho bản nguyên của thế giới là"
    },
    {
        answer:"Sản xuất vật chất",
        question:"Theo chủ nghĩa duy vật lịch sử, hoạt động nào là cơ sở của sự tồn tại và phát triển của xã hội loài người?"
    },
    {
        answer:"Do hạn chế của nhận thức của con người về thế giới và sự phân chia giai cấp và sự tách rời đối lập giữa lao động trí óc và lao động chân tay trong xã hội có giai cấp đối kháng.",
        question:"Nguồn gốc của chủ nghĩa duy tâm? Hãy chọn câu trả lời đúng."
    },
    {
        answer:"các mặt đối lập nương tựa vào nhau, làm điều kiện, tiền đề tồn tại cho nhau, không có mặt này thì không có mặt kia và ngược lại.",
        question:"Sự thống nhất của các mặt đối lập là:"
    },
    {
        answer:"phương diện sinh hoạt tinh thần của xã hội.",
        question:"Khái niệm ý thức xã hội dùng để chỉ:"
    },
    {
        answer:"địa vị kinh tế của họ.",
        question:"Theo Lênin thì người ta được coi là các giai cấp khác nhau trước hết và chủ yếu là do:"
    },
    {
        answer:"“Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán”",
        question:"Trong các tác phẩm kinh điển sau đây, tác phẩm nào được thể hiện tập trung việc Lê nin đã kế thừa và phát triển quan niệm của chủ nghĩa Mác về vật chất, về mối quan hệ giữa vật chất và ý thức, tồn tại xã hội và ý thức xã hội?"
    },
    {
        answer:"cảm giác, tri giác và biểu tượng.",
        question:"Các hình thức cơ bản của nhận thức cảm tính là:"
    },
    {
        answer:"Ý thức xã hội thường lạc hậu hơn tồn tại xã hội",
        question:"Luận điểm của Ăngghen về: “Chúng ta đau khổ không những vì những người đang sống mà còn vì những người đã chết nữa. Người chết nắm lấy người sống” [Các Mác và Ăngghen (1995), Toàn tập, t.18. Nxb. CTQG, Hà Nội, tr.650] thể hiện:"
    },
    {
        answer:"Con người là sự tha hóa của ý niệm tuyệt đối",
        question:"Hãy chỉ ra luận điểm thể hiện lập trường triết học duy tâm:"
    },
    {
        answer:"Nhất nguyên",
        question:"Trường phái triết học nào thường chiếm địa vị thống trị trong lịch sử triết học?"
    },
    {
        answer:"Khác",
        question:"Nhận thức là quá trình …?"
    },
    {
        answer:"tự nhiên, xã hội loài người và tư duy.",
        question:"Phép biện chứng duy vật là môn khoa học về những quy luật phổ biến của sự vận động và phát triển của"
    },
    {
        answer:"khác nhau về quyền sở hữu đối với tư liệu sản xuất chủ yếu của xã hội.",
        question:"Theo quan điểm của triết học Mác – Lênin, đặc trưng nào trong các đặc trưng sau của giai cấp giữ vai trò chi phối các đặc trưng khác của giai cấp:"
    },
    {
        answer:"Tập hợp đông đảo những con người hoạt động trong một không gian và thời gian xác định, bao gồm nhiều thành phần, tầng lớp xã hội và giai cấp đang hoạt động trong một xác hội xác định",
        question:"Chọn đáp án đúng nhất: Quần chúng nhân dân là:"
    },
    {
        answer:"Chất là tính quy định vốn có của sự vật (hiện tượng), Chất là sự thống nhất hữu cơ của các thuộc tính cấu thành sự vật (hiện tượng), phân biệt sự vật (hiện tượng) này với sự vật khác (hiện tượng). Mỗi sự vật (hiện tượng) không chỉ có một, mà nhiều chất, tùy thuộc quan hệ của nó với những cái khác.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Cảm giác là hình ảnh chủ quan của thế giới khách quan: nguồn gốc, nội dung của nó là khách quan, còn hình thức biểu hiện của nó là chủ quan.",
        question:"Nhận dịnh nào sau đây đúng nhất?"
    },
    {
        answer:"Thị tộc => bộ lạc => bộ tộc => dân tộc",
        question:"Sắp xếp các hình thức cộng đồng người theo lịch sử phát triển của nhân loại:"
    },
    {
        answer:"Quá trình sản xuất và tái sản xuất các quan hệ kinh tế",
        question:"Xét đến cùng, sự hình thành, vận động và phát triển của các quan điểm tư tưởng cùng với những thể chế chính trị - xã hội tương ứng phụ thuộc vào:"
    },
    {
        answer:"là các quan hệ vật chất - khách quan của xã hội.",
        question:"Mác coi các quan hệ sản xuất là “cơ sở hạ tầng” của xã hội, vì các quan hệ sản xuất:"
    },
    {
        answer:"Khả năng",
        question:"Theo quan điểm của chủ nghĩa duy vật biện chứng, nguồn gốc tự nhiên của ý thức có vai trò gì trong việc hình thành ý thức?"
    },
    {
        answer:"Vấn đề cơ bản của triết học",
        question:"Định nghĩa của V. I. Lê nin về vật chất đã giải quyết được nội dung nào của triết học?"
    },
    {
        answer:"Biện chứng tự phát.",
        question:"Phép biện chứng cổ đại là:"
    },
    {
        answer:"Đúng",
        question:"Nhận định: “Có sự thống nhất biện chứng giữa TQSĐ, TDTT và thực tiễn” là …"
    },
    {
        answer:"Đáp án A và B đều đúng",
        question:"Phương pháp hòa bình trong đấu tranh cách mạng giành chính quyền chỉ có thể xảy ra khi có điều kiện là:"
    },
    {
        answer:"Nghiên cứu mối quan hệ giữa vật chất và ý thức trên lập trường duy vật biện chứng, nghiên cứu những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy.",
        question:"Đối tượng nghiên cứu của triết học Mác – Lênin:"
    },
    {
        answer:"Đúng",
        question:"Các nhà triết học duy tâm chủ quan đã phủ nhận đặc trưng “tự thân tồn tại” của sự vật hiện tượng của thế giới."
    },
    {
        answer:"2",
        question:"Vấn đề cơ bản của triết học có bao nhiêu mặt?"
    },
    {
        answer:"toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử - xã hội của con người nhằm cải biến tự nhiên và xã hội.",
        question:"Thực tiễn là:"
    },
    {
        answer:"Tổng thể các giai cấp và mối liên hệ giữa các giai cấp, tồn tại trong một giai đoạn lịch sử nhất định.",
        question:"Chọn đáp án đúng nhất: Kết cấu xã hội – giai cấp là:"
    },
    {
        answer:"NT1",
        question:"Thừa nhận thế giới vật chất tồn tại khách quan bên ngoài và độc lập với ý thức con người là nội dung của nguyên tắc nào?"
    },
    {
        answer:"có thể nhận thức được thế giới.",
        question:"Hãy chọn phương án đúng nhất để hoàn thành câu: Thuyết không thể biết cho rằng con người"
    },
    {
        answer:"Khác",
        question:"Quan điểm vận động yêu cầu cần quán triệt các nội dung nào?Trong sự nghiệp xây dựng CNXH ở nước ta, chúng ta cần phải tiến hành:"
    },
    {
        answer:"Thuế và quốc trái",
        question:"Điền vào chỗ trống để có đáp án đúng Theo Lênin, nhà nước “muốn duy trì quyền lực xã hội đặc biệt, đặt lên trên xã hội, thì phải có ……”"
    },
    {
        answer:"Cả 3 phương án đã nêu",
        question:"Thực chất và ý nghĩa cuộc cách mạng trong triết học do C.Mác và Ph.Ăngghen thực hiện là gì?"
    },
    {
        answer:"Phát triển lực lượng sản xuất hiện có, tạo dựng cơ sở vật chất kỹ thuật xây dựng xã hội mới",
        question:"Chọn phương án đúng nhất: Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là nhằm mục tiêu:"
    },
    {
        answer:"A+B",
        question:"Theo quan điểm của chủ nghĩa duy vật biện chứng, nguồn gốc tự nhiên của ý thức bao gồm những thành tố nào?"
    },
    {
        answer:"Nhà nước về bản chất là công cụ chuyên chính của một giai cấp",
        question:"Luận điểm nào sau đây phù hợp với quan niệm của chủ nghĩa duy vật lịch sử:"
    },
    {
        answer:"Hình thái ý thức triết học",
        question:"Trong sự thống nhất biện chứng giữa lực lượng sản xuất (LLSX) và quan hệ sản xuất (QHSX) thì:"
    },
    {
        answer:"là cơ sở, động lực của nhận thức, là mục đích của nhận thức và là tiêu chuẩn của chân lý.",
        question:"Vai trò quyết định của thực tiễn đối với nhận thức thể hiện ở chỗ nó:"
    },
    {
        answer:"Cải cách xã hội thúc đẩy quá trình tiến hóa xã hội, từ đó tạo tiền đề cho CMXH.",
        question:"Vai trò của cải cách xã hội đối với cách mạng xã hội (CMXH):"
    },
    {
        answer:"Xét đến cùng, ý thức xã hội phải phù hợp với tồn tại xã hội",
        question:"Theo chủ nghĩa duy vật lịch sử, thì sự tồn tại xã hội quyết định ý thức xã hội. Điều đó có nghĩa là:"
    },
    {
        answer:"Nhà nước bảo vệ trật tự hiện hành và đàn áp sự phản khác của các giai cấp trong xã hội",
        question:"Chọn đáp án sai: Đặc trưng cơ bản của nhà nước được thể hiện ở:"
    }






];

class TH extends React.Component {
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
export default (TH);
