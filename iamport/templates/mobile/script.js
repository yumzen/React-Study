//결제와 관련된 JavaScript 코드가 포함된 파일입니다. 결제 요청, 결과 처리, AJAX 요청 등을 이 파일에서 다룰 수 있습니다.

document.addEventListener("DOMContentLoaded", function () {
    const paymentButton = document.getElementById("iamportPayment");

    paymentButton.addEventListener("click", function () {
        payment();
    });
});

function payment() {
    IMP.init('아임포트_API_KEY');
    IMP.request_pay({
        pg: "kakaopay.TC0ONETIME",
        pay_method: "card",
        merchant_uid: "iamport_test_id",
        name: "도서",
        amount: 13700,
        buyer_email: "testiamport@naver.com",
        buyer_name: "홍길동",
        buyer_tel: "01012341234"
    }, function(rsp){
        if (rsp.success){
            alert("완료 -> imp_uid: " + rsp.imp_uid + " / merchant_uid(orderKey): " + rsp.merchant_uid);

            // 결제 성공 시 서버로 결제 정보 전송
            if (rsp.success) {
                axios({
                    url: "{서버의 결제 정보를 받는 endpoint}",
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    data: {
                        imp_uid: rsp.imp_uid,
                        merchant_uid: rsp.merchant_uid
                    }
                }).then((data) => {
                    // 서버 결제 API 성공시 로직
                    console.log("서버로 결제 정보 전송 완료:", data);
                }).catch((error) => {
                    console.error("서버로 결제 정보 전송 실패:", error);
                });
            }
        } else {
            alert("실패: 코드(" + rsp.error_code + ") / 메세지(" + rsp.error_msg + ")");
        }
    });
}