$(document).ready(function(){
    $("@iamportPayment").click(function(){
        payment(); //버튼 클릭하면 호출
    });
})

function payment(data){
    IMP.init('가맹점 식별코드');
    IMP.request_pay({ //결제창 호출
        pg:"kakaopay.TC0ONETIME",
        pay_method:"card",
        merchant_uid:"iamport_test_id",
        name:"도서",
        amout:13700,
        buyer_email:"testiamport@naver.com",
        buyer_name:"홍길동",
        buyer_tel:"01012341234"
    }, function(rsp){
        if (rsp.success){
            alert("완료 -> imp_uid: "+rsp.imp_uid+" / merchant_uid(orderKey) : "+rsp.merchant_uid);
        } else {
            alert("실패: 코드("+rsp.error_code+") /메세지("+rsp.error_msg+")");
        }
    });
} 