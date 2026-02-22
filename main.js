function accountClick()
{
    alert("Account clicked");
}

function cartClick()
{
    alert("Cart clicked");
}

function searchProduct()
{
    let input = document.getElementById("search-input").value;

    if(input === "")
    {
        alert("Please enter a product name");
    }
    else
    {
        alert("Searching for: " + input);
    }
}
