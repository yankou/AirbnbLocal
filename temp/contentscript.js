
var htmlTmp = ''+
'<div id="safe-container">' +
    '<div id="safe-modal">' +
        '<div id="safe-title">' +
            '<span id="safe-title-text">' +
                'Is it safe around this place?' +
            '</span>' +
            '<button id="safe-close-btn">&#10006</button>' +
        '</div>' +
        '<div id="safe-main">' +
            '<table id="safe-main-table">' +
                '<tbody>' +
                    '<tr>' +
                        '<td id="safe-ranking-left" class="safe-column safe-left">' +
                            '<div id="safe-ranking">' +
                                '<span id="ranking">Safety:</span>' +
                                '<span id="stars">XXXXX</span>' +
                            '</div>' +
                            '<div id="safe-explain">' +
                                '<span>Oops, this block has 20% more crime happened than nearby blocks in the past two years!</span>' +
                            '</div>' +
                            '<div id="safe-left-divider"></div>' +
                            '<div id="safe-graph">' +
                                '<p>This is for graph</p>' +
                                '<canvas id="safe-graph-canvas"></canvas>' +
                            '</div>' +
                        '</td>' +
                        '<td id="safe-rec-right" class="safe-column safe-right">' +
                            '<div id="safe-input">' +
                                '<span>Want to check out a safer neighborhood?</span>' +
                                '<div class="input-divider"></div>' +
                                '<p>' +
                                    '<label for="amount">Price range:</label>' +
                                    // '<input type="text" id="amount" style="border:0; color:#f6931f; font-weight:bold;"/>' +
                                '</p>' +
                                '<div id="price-slider"></div>' +
                                '<div class="input-divider"></div>' +
                                '<p>' +
                                    '<label for="amount">Distance from current bed:</label>' +
                                    // '<input type="text" id="amount" style="border:0; color:#f6931f; font-weight:bold;"/>' +
                                '</p>' +
                                '<div id="distance-slider"></div>' +
                                '<div class="input-divider"></div>' +
                                '<div id="nbh-checkbox">neighborhood checkbox' +
                                    '<br><input type="checkbox" name="manhattan" value="Manhattan">Manhattan' +
                                    '<input type="checkbox" name="brooklyn" value="Brooklyn">Brooklyn' +
                                    '<input type="checkbox" name="queens" value="Queens">Queens<br>' +
                                    // '<input type="checkbox" name="all" value="all">Show me all' +
                                '</div>' +
                            '</div>' +
                            '<div id="safe-right-divider"></div>' +
                            '<div id="safe-rec">' +
                                '<span>We recommend these beds:</span>' +
                            '</div>' +
                        '</td>' +
                    '</tr>' +
                '</tbody>' +
            '</table>' +
        '</div>   ' +
    '</div>' +
'</div>';

var htmlTmp2 = ''+
'<div id="safe-container">' +
    '<div id="safe-modal">' +
        '<div id="safe-title">' +
            '<button id="safe-close-btn">&#10006</button>' +
            '<p id="safe-title-text">' +
                'This neighborhood scores at:' +
                '<span id="safe-title-score"></span>' +
            '</p>' +         
        '</div>' +
        
        '<div id="safe-main">' +
            '<table id="safe-text-table">' +
                '<tr>' +
                    '<td class="safe-column"><div id="safe-text-desc"></div>' +
                    '</td>' +
                '</tr>' +
                '<tr>' +
                    '<td class="safe-column"><div id="safe-text-sugg"></div>' +
                    '</td>' +
                '</tr>' +
            '</table>' +
            '<table id="safe-main-table">' +
            '</table>' +
        '</div>' +

        '<div id="safe-footer">Questions? Contact admin@airbnblocal.com</div>' +
    '</div>' +
'</div>';

var html = ''+
'<div id="safe-container">' +
    '<div id="safe-modal">' +
        '<div id="safe-title">' +
            '<button id="safe-close-btn">&#10006</button>' +
            '<p id="safe-title-text">This neighborhood scores at: <span id="safe-title-score" title="The score is computed based on crime incidence, distance to subway stations, nearby restaurants, bars, nightlife venues and grocery stores"></span>' +
            '</p>' +
        '</div>' +
        
        '<div id="safe-main">' +
            '<div id="safe-subscores">' +

                '<span id="safe-crime">' +
                    '<img  title="Crime incidence" class="img-valign" src="https://cdn1.iconfinder.com/data/icons/security-4/32/police-lights-512.png" height="30" width="30">' +
                    '<span id="safe-crime-score">4.5</span>' +
                '</span>' +

                '<span id="safe-distance">' +
                    '<img class="img-valign"  title="Distance to subway stations" src="http://blog.suitey.com/wp-content/uploads/2014/09/Greenwich-Village-Commuting-Report2.png" height="30" width="30">' +
                    '<span id="safe-distance-score">4.5</span>' +
                '</span>' +

                '<span id="safe-restaurant" title="Yelp ratings for nearby restaurants">' +
                    '<img class="img-valign" src="http://www.elavon.com/~/media/Images/Pogs/Icons_Vertical_Markets_Restaurant.png?mh=160&mw=160" height="30" width="30">' +
                    '<span id="safe-restaurant-score">4.5</span>' +
                '</span>' +

                '<span id="safe-bars" title="Yelp ratings for nearby bars">' +
                    '<img class="img-valign" src="http://jkupdate.com/upload/org_img/education_1366556924Bar_Icon.png" height="30" width="30">' +
                    '<span id="safe-bars-score">4.5</span>' +
                '</span>' +

                '<span id="safe-nightlife" title="Yelp ratings for nearby nightlife venues">' +
                    '<img class="img-valign" src="http://www.annefrankschool.org.il/wp-content/uploads/2012/02/Theater-Yellow-2-icon.png" height="30" width="30">' +
                    '<span id="safe-nightlife-score">4.5</span>' +
                '</span>' +

                '<span id="safe-grocery" title="Yelp ratings for nearby grocery stores">' +
                    '<img class="img-valign" src="http://www.xerox.fr/bureau/assets/images/corporate/pages/printer-supplies/icons/shopping_cart_orange.png" height="30" width="30">' +
                    '<span id="safe-grocery-score">4.5</span>' +
                '</span>' +
                
            '</div>' +
            '<table id="safe-text-table">' +
                '<tr>' +
                    '<td class="safe-column">' +
                        '<div id="safe-text-desc"></div>' +
                    '</td>' +
                '</tr>' +
                    '<td class="safe-column">' +
                        '<div id="safe-text-sugg"></div>' +
                    '</td>' +
                '</tr>' +
            '</table>' +
        '</div>' +
        '<div id="safe-map"></div>' +
        '<div id="safe-footer">Questions? Contact admin@airbnblocal.com</div>' +
    '</div>' +
'</div>';




$(document).ready(function(){

	$(".price-amount").after('<div class="yanButton">Local</div>')
	// console.log('test')
    var $overlay, $modal
	var mainButton = $(".yanButton").button().click(function(event){
        // debugger;
        $overlay = $(html).appendTo('body')
        $modal = $('#safe-container #safe-modal').draggable();

        var div = $(event.target).closest('.listing')

        var price = $(event.target).parent().siblings('.price-amount').text()
        var lat = div.attr('data-lat')
        var lng = div.attr('data-lng')

        console.log(price)

        var getURL = 'https://www.airbnblocal.com/location?lat='+lat+'&lng='+lng+'&price='+price
        console.log(getURL)

        var input = $.getJSON(getURL, function(data){
            // debugger;
            console.log(data)
            $('#safe-title-score').text(parseFloat(data.score).toFixed(1))
            $('#safe-text-desc').text(data.describe)
            $('#safe-text-sugg').text(data.suggestion)

            var addScoreTooltip = $(document).tooltip({
                position: {
                    my: "left top",
                    at: "right",
                    collision: "None"
                }
            });

            // L.mapbox.accessToken = 'pk.eyJ1Ijoia291a291aGFwcHkiLCJhIjoiX0U0bEdaayJ9.b-f9F7Io0DAjTimEvTDu1g';
            // var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/koukouhappy.kni0apji/{z}/{x}/{y}.png', {
            //     attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
            // });

            var map = L.map('safe-map').setView([lat, lng], 16);
            L.Icon.Default.imagePath = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images';

            L.tileLayer('https://{s}.tiles.mapbox.com/v3/koukouhappy.kni0apji/{z}/{x}/{y}.png', {
                attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>',
                maxZoom: 18
                }).addTo(map);


                // .addLayer(mapboxTiles)
                // .setView([lat, lng], 14);

            // debugger;
            $.each(data.choice, function(i, obj){

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
            })  // close $.each

        }); // close .getJSON()


        var closeModal = $('#safe-close-btn').click(function(){
            $('#safe-container').remove()
            $('#safe-map').remove()
        })

    })  // close mainButton
})



    // var pSlider = $("#price-slider").slider({
    //     range: true,
    //     min: 0,
    //     max: 500,
    //     values: [75, 300],
    //     slide: function (event, ui) {
    //         var value1 = $("#price-slider").slider("values", 0);
    //         var value2 = $("#price-slider").slider("values", 1);
    //         $("#price-slider").find(".ui-slider-handle:first").text(value1);
    //                     $("#price-slider").find(".ui-slider-handle:last").text(value2);
    //     }
    // })

    // var dSlider = $("#distance-slider").slider({
    //     range: true,
    //     min: 0,
    //     max: 5,
    //     step: 0.1,
    //     values: [0, 1],
    //     slide: function (event, ui) {
    //         var value1 = $("#distance-slider").slider("values", 0);
    //         var value2 = $("#distance-slider").slider("values", 1);
    //         $("#distance-slider").find(".ui-slider-handle:first").text(value1);
    //                     $("#distance-slider").find(".ui-slider-handle:last").text(value2);
    //     }
    // })

          // $.each(data.choice, function(i, obj){
          //       $('#safe-main-table').append(
          //           '<tr><td class="safe-column safe-url"><div><a href="'+obj.url+'">'+obj.url+'</a></div></td><td class="safe-column safe-price"><div>$'+obj.price+'</div></td><td class="safe-column safe-nb"><div>'+obj.neighborhood+'</div></td></tr>'
          //           )
          //   })

