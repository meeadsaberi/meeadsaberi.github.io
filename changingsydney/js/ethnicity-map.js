$(function() {

          var center = [-37.8159009, 144.9629722], zoom = 10;

          var beforeMap2006Ethnicity = L.mapbox.map('beforeMap2006Ethnicity', 'cityscience.j0g767m0', {
                            minZoom: 9,
                            maxZoom: 13
                          })
                          .setView([-37.8159009, 144.9629722], 10);

          beforeMap2006Ethnicity.scrollWheelZoom.disable();
          
          var mel_2006_asian_layer=L.mapbox.tileLayer('cityscience.zjud6lxr', {
                                    minZoom: 9, 
                                    maxZoom: 13,
                                    opacity: 0.9
                                  }).addTo(beforeMap2006Ethnicity);

          var mel_2006_aus_layer=L.mapbox.tileLayer('cityscience.dp8k6gvi', {
                                minZoom: 9, 
                                maxZoom: 13,
                                opacity: 0.7
                              }).addTo(beforeMap2006Ethnicity);

          var mel_2006_east_europe_layer=L.mapbox.tileLayer('cityscience.efktvs4i', {
                                minZoom: 9, 
                                maxZoom: 13,
                                opacity: 0.9
                              }).addTo(beforeMap2006Ethnicity);

          var mel_2006_indige_layer=L.mapbox.tileLayer('cityscience.7o5vobt9', {
                                minZoom: 9, 
                                maxZoom: 13,
                                opacity: 0.8
                              }).addTo(beforeMap2006Ethnicity);

          var mel_2006_mid_east_layer=L.mapbox.tileLayer('cityscience.6cs4te29', {
                                minZoom: 9, 
                                maxZoom: 13,
                                opacity: 0.9
                              }).addTo(beforeMap2006Ethnicity);

          var mel_2006_other_layer=L.mapbox.tileLayer('cityscience.fnk4kj4i', {
                                minZoom: 9, 
                                maxZoom: 13,
                                opacity: 0.9
                              }).addTo(beforeMap2006Ethnicity);

          var mel_2006_west_europe_layer=L.mapbox.tileLayer('cityscience.if5bqpvi', {
                                minZoom: 9, 
                                maxZoom: 13,
                                opacity: 0.7
                              }).addTo(beforeMap2006Ethnicity);

          var mel_2006_street_layer=L.mapbox.tileLayer('cityscience.iagjdpp2', {
                                      minZoom: 9,
                                      maxZoom: 13
                                    }).addTo(beforeMap2006Ethnicity);

          var afterMap2011Ethnicity = L.mapbox.map('afterMap2011Ethnicity', 'cityscience.j1dlbbe9', {
                            minZoom: 9,
                            maxZoom: 13
                          })
                          .setView([-37.8159009, 144.9629722], 10);

          var mel_2011_base_layer=L.mapbox.tileLayer('cityscience.j0g767m0', {
                                      minZoom: 9,
                                      maxZoom: 13,
                                      attribution: 'Map data contributors ' +
                                      '<a href="http://monash.edu/research/city-science/">Monash City Science</a>'
                                    }).addTo(afterMap2011Ethnicity);
          
          afterMap2011Ethnicity.scrollWheelZoom.disable();

          afterMap2011Ethnicity.on('ready', function() {
            $("#afterMap2011Ethnicity").find("div:last-child").find("div:last-child").find("div:first-child").find("div:first-child").find("div:first-child").find("div:first-child")
                .html("<strong style='font-size: 150%;'>Melbourne Ethnicity Map <br/>(2006-2011)</strong>");
          });

          var mel_2011_asian_layer=L.mapbox.tileLayer('cityscience.j169mb41', {
                                    minZoom: 9, 
                                    maxZoom: 13
                                  }).addTo(afterMap2011Ethnicity);

          var mel_2011_aus_layer=L.mapbox.tileLayer('cityscience.j169lap1', {
                                minZoom: 9, 
                                maxZoom: 13
                              }).addTo(afterMap2011Ethnicity);

          var mel_2011_east_europe_layer=L.mapbox.tileLayer('cityscience.j169k1ng', {
                                minZoom: 9, 
                                maxZoom: 13
                              }).addTo(afterMap2011Ethnicity);

          var mel_2011_indige_layer=L.mapbox.tileLayer('cityscience.j1dlbbe9', {
                                minZoom: 9, 
                                maxZoom: 13
                              }).addTo(afterMap2011Ethnicity);

          var mel_2011_mid_east_layer=L.mapbox.tileLayer('cityscience.j169gn9n', {
                                minZoom: 9, 
                                maxZoom: 13
                              }).addTo(afterMap2011Ethnicity);

          var mel_2011_other_layer=L.mapbox.tileLayer('cityscience.j169fg70', {
                                minZoom: 9, 
                                maxZoom: 13
                              }).addTo(afterMap2011Ethnicity);

          var mel_2011_west_europe_layer=L.mapbox.tileLayer('cityscience.j169aefc', {
                                minZoom: 9, 
                                maxZoom: 13
                              }).addTo(afterMap2011Ethnicity);

          var mel_2011_street_layer=L.mapbox.tileLayer('cityscience.iagjdpp2', {
                                      minZoom: 9,
                                      maxZoom: 13
                                    }).addTo(afterMap2011Ethnicity);

          $("#beforeMap2006Ethnicity").find("div:last-child").find("div:last-child").hide();
          var legendDom = $(".map-legends.wax-legends.leaflet-control")[0];
          legendDom.style.bottom = "20px";

          setTimeout(addEventToInputRadio, 2000);

            $('#map-container-ethnicity').beforeAfter(beforeMap2006Ethnicity, afterMap2011Ethnicity, {showFullLinks: false, introPosition: 0.5, animateIntro: true, introDuration: 1000, permArrows: true, arrowHeight: 0.20, labelLeft: -20, labelRight: -12, arrowTop: 0.25, arrowLeftOffset: -60, arrowRightOffset: -19});

              cateAll();


                function addEventToInputRadio() {
                  var inputList=document.getElementsByName("melEthnicity");
                  inputList[0].onclick=cateAll;
                  inputList[1].onclick=cate1;
                  inputList[2].onclick=cate2;
                  inputList[3].onclick=cate3;
                  inputList[4].onclick=cate4;
                  inputList[5].onclick=cate5;
                  inputList[6].onclick=cate6;
                  inputList[7].onclick=cate7;
                }

                  function cateAll(){
                    beforeMap2006Ethnicity.removeLayer(mel_2006_asian_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_aus_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_east_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_indige_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_mid_east_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_other_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_west_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_street_layer);

                    beforeMap2006Ethnicity.addLayer(mel_2006_asian_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_aus_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_east_europe_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_indige_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_mid_east_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_other_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_west_europe_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_street_layer);

                    afterMap2011Ethnicity.removeLayer(mel_2011_asian_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_aus_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_east_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_indige_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_mid_east_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_other_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_west_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_street_layer);

                    afterMap2011Ethnicity.addLayer(mel_2011_asian_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_aus_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_east_europe_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_indige_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_mid_east_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_other_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_west_europe_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_street_layer);
                  }

                  function cate1(){
                    beforeMap2006Ethnicity.removeLayer(mel_2006_asian_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_aus_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_east_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_indige_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_mid_east_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_other_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_west_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_street_layer);

                    beforeMap2006Ethnicity.addLayer(mel_2006_aus_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_street_layer);

                    afterMap2011Ethnicity.removeLayer(mel_2011_asian_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_aus_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_east_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_indige_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_mid_east_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_other_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_west_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_street_layer);

                    afterMap2011Ethnicity.addLayer(mel_2011_aus_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_street_layer);
                  }

                  function cate2(){
                    beforeMap2006Ethnicity.removeLayer(mel_2006_asian_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_aus_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_east_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_indige_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_mid_east_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_other_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_west_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_street_layer);

                    beforeMap2006Ethnicity.addLayer(mel_2006_west_europe_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_street_layer);

                    afterMap2011Ethnicity.removeLayer(mel_2011_asian_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_aus_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_east_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_indige_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_mid_east_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_other_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_west_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_street_layer);

                    afterMap2011Ethnicity.addLayer(mel_2011_west_europe_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_street_layer);
                  }

                  function cate3(){
                    beforeMap2006Ethnicity.removeLayer(mel_2006_asian_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_aus_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_east_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_indige_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_mid_east_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_other_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_west_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_street_layer);

                    beforeMap2006Ethnicity.addLayer(mel_2006_east_europe_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_street_layer);

                    afterMap2011Ethnicity.removeLayer(mel_2011_asian_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_aus_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_east_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_indige_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_mid_east_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_other_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_west_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_street_layer);

                    afterMap2011Ethnicity.addLayer(mel_2011_east_europe_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_street_layer);
                  }

                  function cate4(){
                    beforeMap2006Ethnicity.removeLayer(mel_2006_asian_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_aus_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_east_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_indige_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_mid_east_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_other_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_west_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_street_layer);

                    beforeMap2006Ethnicity.addLayer(mel_2006_asian_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_street_layer);

                    afterMap2011Ethnicity.removeLayer(mel_2011_asian_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_aus_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_east_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_indige_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_mid_east_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_other_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_west_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_street_layer);

                    afterMap2011Ethnicity.addLayer(mel_2011_asian_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_street_layer);
                  }

                  function cate5(){
                    beforeMap2006Ethnicity.removeLayer(mel_2006_asian_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_aus_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_east_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_indige_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_mid_east_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_other_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_west_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_street_layer);

                    beforeMap2006Ethnicity.addLayer(mel_2006_mid_east_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_street_layer);

                    afterMap2011Ethnicity.removeLayer(mel_2011_asian_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_aus_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_east_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_indige_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_mid_east_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_other_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_west_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_street_layer);

                    afterMap2011Ethnicity.addLayer(mel_2011_mid_east_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_street_layer);
                  }

                  function cate6(){
                    beforeMap2006Ethnicity.removeLayer(mel_2006_asian_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_aus_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_east_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_indige_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_mid_east_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_other_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_west_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_street_layer);

                    beforeMap2006Ethnicity.addLayer(mel_2006_indige_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_street_layer);

                    afterMap2011Ethnicity.removeLayer(mel_2011_asian_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_aus_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_east_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_indige_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_mid_east_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_other_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_west_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_street_layer);

                    afterMap2011Ethnicity.addLayer(mel_2011_indige_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_street_layer);
                  }

                  function cate7(){
                    beforeMap2006Ethnicity.removeLayer(mel_2006_asian_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_aus_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_east_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_indige_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_mid_east_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_other_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_west_europe_layer);
                    beforeMap2006Ethnicity.removeLayer(mel_2006_street_layer);

                    beforeMap2006Ethnicity.addLayer(mel_2006_other_layer);
                    beforeMap2006Ethnicity.addLayer(mel_2006_street_layer);

                    afterMap2011Ethnicity.removeLayer(mel_2011_asian_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_aus_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_east_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_indige_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_mid_east_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_other_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_west_europe_layer);
                    afterMap2011Ethnicity.removeLayer(mel_2011_street_layer);

                    afterMap2011Ethnicity.addLayer(mel_2011_other_layer);
                    afterMap2011Ethnicity.addLayer(mel_2011_street_layer);
                  }


      });