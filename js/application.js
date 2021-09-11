const sum = (acc, val) => { return acc + val; }

const updateValues = () => {
    let subTotalArr = [];
    $('tbody tr').each(function (i, ele) {
        console.log($(ele).children().first().text());
        let unitPrice = parseFloat($(ele).find('.unitPrice').text());
        console.log('unitPrice: ' + unitPrice);
        let itemQty = parseFloat($(ele).find('.quantity input').val());
        console.log('itemQty: ' + itemQty);
        let subTotal = unitPrice * itemQty;
        console.log('subTotal: ' + subTotal);
        $(ele).find('.subTotal').text(subTotal);
        subTotalArr.push(subTotal);
    });
    let granTotal = subTotalArr.reduce(sum);
    $('#total').text(granTotal);
}

$(document).ready(function () {
    updateValues();
    $('.quantity input').on('input', function () {
        updateValues();
    });
  });



