var site_url="http://movie.bookmyseats.co.in/index.php";

function expireOrder()
{
    jQuery.ajax({
        type: "POST",
        url: site_url+"/order/checkorder",
        data: "myorder=checkmyorder",
        success: function(response){

                //$("#countdown").html("Expired!");

            return;
        },
        beforeSend: function() {
            //$("#countdown").html("<img src='/images/ajax-loader.gif' width=23 height=23 >");    
        }
    });
}

function cancelOrder()
{
        jQuery.ajax({
        type: "POST",
        url: site_url+"/order/cancelorder",
        data: "myorder=checkmyorder",
        success: function(response){

               // $("#countdown").html("Expired!");

            return;
        },
        beforeSend: function() {
            //$("#countdown").html("<img src='/images/ajax-loader.gif' width=23 height=23 >");    
        }
    });
}

function expirecart()
{
    jQuery.ajax({
        type: "POST",
        url: site_url+"/cart/expirecart",
        data: "cart=expireCart",
        success: function(response){
         $("#countdown").html("Expired!");
        return;
        },
        beforeSend: function() {
            $("#countdown").html("<img src='/images/ajax-loader.gif' width=23 height=23 >");    
        }
    });
}