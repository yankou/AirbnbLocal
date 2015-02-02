

window.onload = function(){

    var input = {
        "choice": {
            "530576": {
                "BayeAve": 9.8219512195,
                    "coord": [-73.97738622,
                40.78111108],
                    "disToSub": 0.3173407171,
                    "hostID": 530576,
                    "neighborhood": "Upper West Side",
                    "price": 85.0,
                    "roomType": "Private room",
                    "url": "http://www.airbnb.com/rooms/530576"
            },
                "3677309": {
                "BayeAve": 9.7296296296,
                    "coord": [-73.97992781,
                40.78230627],
                    "disToSub": 0.3237950153,
                    "hostID": 3677309,
                    "neighborhood": "Upper West Side",
                    "price": 99.0,
                    "roomType": "Private room",
                    "url": "http://www.airbnb.com/rooms/3677309"
            }
        },
            "score": 9.34,
            "describe": "Nice choice! This apartment ranks in the top 25% of all Airbnb listings in NYC.",
            "suggestion": "Here are some similar apartments with less cost:"
    }


    $('#safe-title-score').text(input.score)
    $('#safe-text-desc').text(input.describe)
    $('#safe-text-sugg').text(input.suggestion)
    $('#safe-score-crime').text('low')




    var addScoreTooltip = $(document).tooltip({
        position: {
            my: "left top",
            at: "right",
            collision: "None"
        }
    });

        L.mapbox.accessToken = 'pk.eyJ1Ijoia291a291aGFwcHkiLCJhIjoiX0U0bEdaayJ9.b-f9F7Io0DAjTimEvTDu1g';
        // Replace 'examples.map-i87786ca' with your map id.
        var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/koukouhappy.kni0apji/{z}/{x}/{y}.png', {
            attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
        });
        map.remove();
        var map = L.map('map')
            .addLayer(mapboxTiles)
            .setView([40.765, -73.991], 14);

    $.each(input.choice, function(i, obj){

        var popupContent = '' +
        '<div class="safe-popup-main">' +
            '<div class="safe-popup-neigh">Neighborhood score:' +
                '<span class="safe-popup-score">&nbsp;4.5</span>' +
            '</div>' +
            '<div class="safe-popup-price">Price:' +
                '<span class="safe-popup-score">&nbsp;$90</span>' +
            '</div>' +
            '<div class="safe-popup-roomType">Type:' +
                '<span class="safe-popup-score">&nbsp;Entire room</span>' +
            '</div>' +
            '<div class="safe-popup-line1">' +
                '<span class="safe-popup-crime">' +
                    '<img class="img-valign-popup img-popup-front" src="https://cdn1.iconfinder.com/data/icons/security-4/32/police-lights-512.png" height="20" width="20">' +
                    '<span>4.5</span>' +
                '</span>' +

                '<span class="safe-popup-distance">' +
                    '<img class="img-valign-popup" src="http://blog.suitey.com/wp-content/uploads/2014/09/Greenwich-Village-Commuting-Report2.png" height="20" width="20">' +
                    '<span>4.5</span>' +
                '</span>' +

                '<span class="safe-popup-restaurant">' +
                    '<img class="img-valign-popup" src="http://www.elavon.com/~/media/Images/Pogs/Icons_Vertical_Markets_Restaurant.png?mh=160&mw=160" height="20" width="20">' +
                    '<span id="safe-restaurant-score">4.5</span>' +
                '</span>' +
            '</div>' +
            '<div class="safe-popup-line2">' +
                '<span class="safe-popup-bars">' +
                    '<img class="img-valign-popup img-popup-front" src="http://jkupdate.com/upload/org_img/education_1366556924Bar_Icon.png" height="20" width="20">' +
                    '<span>4.5</span>' +
                '</span>' +

                '<span class="safe-popup-nightlife">' +
                    '<img class="img-valign-popup" src="http://www.annefrankschool.org.il/wp-content/uploads/2012/02/Theater-Yellow-2-icon.png" height="20" width="20">' +
                    '<span>4.5</span>' +
                '</span>' +

                '<span class="safe-popup-grocery">' +
                    '<img class="img-valign-popup" src="http://www.xerox.fr/bureau/assets/images/corporate/pages/printer-supplies/icons/shopping_cart_orange.png" height="20" width="20">' +
                    '<span id="safe-restaurant-score">4.5</span>' +
                '</span>' +
            '</div>' +
            '<div class="safe-popup-host">' +
                '<img class="safe-popup-hostImg" src="https://a2.muscache.com/ic/pictures/59101534/0792362f_original.jpg?interpolation=lanczos-none&size=xx_large&output-format=jpg&output-quality=70" height="80", width="135">' +
            '</div>' +
        '</div>'



        var marker = L.marker([obj.coord[1], obj.coord[0]], {
            win_url: obj.url
        }).addTo(map);

        marker.on('click', function(e){
                window.open(this.options.win_url)
            });
        
        marker.bindPopup(popupContent);
            marker.on('mouseover', function (e) {
                this.openPopup();
            });
            marker.on('mouseout', function (e) {
                this.closePopup();
            });

    })

}


