$(document).ready(function(){
  var qty1 = $(".qty1")[0];
  console.log(qty1);
  var totalAmt1 = $(".totalAmt1")[0];
  var total1 = $(".total1");
  totalAmt1 = $(totalAmt1).text();
  var totalCost = 0;


  $("#btn1").click(function(){
    totalAmt1 = parseFloat(totalAmt1);
    console.log('totalAmt1: ', totalAmt1);

    qty1 = $(qty1).val();
    console.log('qty1: ', qty1);

    totalCost1 = qty1 * totalAmt1;
    // console.log('totalCost: ', totalCost2);
    total1.html('($ ' + totalCost1 + ' TOTAL)').addClass('total');

  });
  var qty2 = $(".qty2")[0];
  var totalAmt2 = $(".totalAmt2")[0];
  var total2 = $(".total2");
  totalAmt2 = $(totalAmt2).text();
  var totalCost2 = 0;

  console.log('totalAmt2: ', totalAmt2);

  $("#btn2").click(function(){
    totalAmt2 = parseFloat(totalAmt2);
    console.log('totalAmt2: ', totalAmt2);

    qty2 = $(qty2).val();

    totalCost2 = qty2 * totalAmt2;
    console.log('totalCost: ', totalCost2);
    total2.html('($ ' + totalCost2 + ' TOTAL)').addClass('total');

  });
  var qty3 = $(".qty3")[0];
  var totalAmt3 = $(".totalAmt3")[0];
  var total3 = $(".total3");
  totalAmt3 = $(totalAmt3).text();
  var totalCost3 = 0;

  $("#btn3").click(function(){
    totalAmt3 = parseFloat(totalAmt3);
    console.log('totalAmt3: ', totalAmt3);

    qty3 = $(qty3).val();
    console.log('qty3: ', qty3);

    totalCost3 = qty3 * totalAmt3;
    console.log('totalCost3: ', totalCost3);
    total3.html('($ ' + totalCost3 + ' TOTAL)').addClass('total');

  });
});
