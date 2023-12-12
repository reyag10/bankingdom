
document.getElementById("depositebutton").addEventListener('click', function () {

    // Deposite SECTION 
    const depositeInput = document.getElementById("depositeinput");
    const depositeInputValue = depositeInput.value;
    // console.log(depositeInputValue);

    // Set Condition 
    if (depositeInputValue === '') {
        alert("Deposite failed must not be empty")
    }
    else {
        const depositeAmount = document.getElementById("depositeamount");

        const depositeAmountText = depositeAmount.innerText;

        const depositAmountCalculation = depositeAmount.innerText = parseFloat(depositeInputValue) + parseFloat(depositeAmountText);
        depositeAmount.innerText = depositAmountCalculation;




        // Clear input field 
        depositeInput.value = "";


        // Total Balance Section 
        const totalBalance = document.getElementById("total_balance");
        const totalBalanceText = totalBalance.innerText;
        totalBalance.innerText = parseFloat(depositeInputValue) + parseFloat(totalBalanceText);
    }



});

// withdraw Section 
document.getElementById("Withdrawbutton").addEventListener('click', function () {
    const withdrawInput = document.getElementById("withdrawinput");
    const withdrawInputValue = withdrawInput.value;

    if (withdrawInputValue === '') {
        alert("Withdraw failed must not be empty")
    }

    else {
        const withdrAwamount = document.getElementById("withdrawamount");
        const withdrAwamountText = withdrAwamount.innerText;
        const withdrawAmountCalculation = parseFloat(withdrawInputValue) + parseFloat(withdrAwamountText);

        withdrAwamount.innerText = withdrawAmountCalculation;



        // Clear input field 
        withdrawInput.value = "";


        // Total Balance Section 
        const totalBalance = document.getElementById("total_balance");
        const totalBalanceText = totalBalance.innerText;

        totalBalance.innerText = parseFloat(totalBalanceText) - parseFloat(withdrawInputValue);


    }


});
