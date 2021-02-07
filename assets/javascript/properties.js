const currentProperties = ['M2021469364', 'M2231268030']

$(function (){
    console.log('current props', currentProperties)
    for(let property of currentProperties){
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": `https://realtor.p.rapidapi.com/properties/v2/detail?property_id=${property}`,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "fee0d8e175mshf6d41a447301381p13cdf4jsn4cec5ba22389",
                "x-rapidapi-host": "realtor.p.rapidapi.com"
            }
        }).then(function(response){
            const houseDetails= response.properties[0]
            console.log(houseDetails)

            printProperty(houseDetails)
            
            
        })
    }
    
})

function printProperty(houseDetails){
    $('#current-properties').append(`
        <div class="col s12 m6">
        <a href='${houseDetails.rdc_web_url}' target="_blank">
            <div class="card prop-card">
                <div class="card-image">
                    <img src="${houseDetails.photos[0].href}">
                <span class="card-title long-text" id="address">${houseDetails.address.line} <br/> ${houseDetails.address.city}, ${houseDetails.address.state_code} ${houseDetails.address.postal_code}</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light red modal-trigger" href="#modal1"><i class="material-icons">fullscreen</i></a>
                </div>
                <div class="card-content">
                <h3 class='price'>$${houseDetails.price}
                    <p class="long-text house-details">${houseDetails.description}</p>
                </div>
            </div>
        </a>
        </div>
    `)
    
}