$ (function(){
    var IMP = window.IMP;
    IMP.init('가맹점 식별코드');
    $('.order-form').on('submit', function (e){
        var amount = parseFloat($('.order-form input[name="amount"]').val().replace(',',''));
    })
})