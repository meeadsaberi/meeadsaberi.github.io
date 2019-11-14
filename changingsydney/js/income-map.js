$(function() {

          L.mapbox.accessToken = 'pk.eyJ1IjoiY2l0eXNjaWVuY2UiLCJhIjoialBPOTRkNCJ9.kS1rIozWXdXJIVNI_g6xTQ';
          var beforeMap2006Income = L.mapbox.map('beforeMap2006Income', 'cityscience.j0g767m0', {
                            minZoom: 9,
                            maxZoom: 13
                          })
                          .setView([-37.8159009, 144.9629722], 10);

          beforeMap2006Income.scrollWheelZoom.disable(); 

          var mel_2006_income_group4_layer=L.mapbox.tileLayer('cityscience.4do39pb9', {
                                minZoom: 9,
                                maxZoom: 13
                              }).addTo(beforeMap2006Income);

          
          var mel_2006_income_group3_layer=L.mapbox.tileLayer('cityscience.h6jyk3xr', {
                                minZoom: 9,
                                maxZoom: 13
                              }).addTo(beforeMap2006Income);         

        

          var mel_2006_income_group2_layer=L.mapbox.tileLayer('cityscience.qsb2csor', {
                                minZoom: 9,
                                maxZoom: 13,
                                opacity: 0.5
                              }).addTo(beforeMap2006Income);
          
          
          var mel_2006_income_group1_layer=L.mapbox.tileLayer('cityscience.q57jsjor', {
                                minZoom: 9,
                                maxZoom: 13,
                                opacity: 0.6
                              }).addTo(beforeMap2006Income);

         
          var mel_2006_street_layer=L.mapbox.tileLayer('cityscience.iagjdpp2', {
                                      minZoom: 9,
                                      maxZoom: 13
                                    }).addTo(beforeMap2006Income);


          var afterMap2011Income = L.mapbox.map('afterMap2011Income', 'cityscience.pr7iizfr', {
                            minZoom: 9,
                            maxZoom: 13
                          })
                          .setView([-37.8159009, 144.9629722], 10);

          afterMap2011Income.scrollWheelZoom.disable();
                          
          afterMap2011Income.on('ready', function() {
            $("#afterMap2011Income").find("div:last-child").find("div:last-child").find("div:first-child").find("div:first-child").find("div:first-child").find("div:first-child")
                .html("<strong style='font-size: 150%;'>Melbourne Income Map <br>(2006-2011)</strong>");
          });

          var mel_2011_base_layer=L.mapbox.tileLayer('cityscience.j0g767m0', {
                                      minZoom: 9,
                                      maxZoom: 13
                                    }).addTo(afterMap2011Income);

         
          var mel_2011_income_group4_layer=L.mapbox.tileLayer('cityscience.3dviy66r', {
                                minZoom: 9,
                                maxZoom: 13
                              }).addTo(afterMap2011Income);


          var mel_2011_income_group3_layer=L.mapbox.tileLayer('cityscience.xbfq1tt9', {
                                minZoom: 9,
                                maxZoom: 13
                              }).addTo(afterMap2011Income);


          var mel_2011_income_group2_layer=L.mapbox.tileLayer('cityscience.2f2k2o6r', {
                                minZoom: 9,
                                maxZoom: 13,
                                opacity: 0.5
                              }).addTo(afterMap2011Income);


          var mel_2011_income_group1_layer=L.mapbox.tileLayer('cityscience.pr7iizfr', {
                                minZoom: 9,
                                maxZoom: 13,
                                opacity: 0.6
                              }).addTo(afterMap2011Income);


          var mel_2011_street_layer=L.mapbox.tileLayer('cityscience.iagjdpp2', {
                                      minZoom: 9,
                                      maxZoom: 13
                                    }).addTo(afterMap2011Income);

        $("#beforeMap2006Income").find("div:last-child").find("div:last-child").hide();
          var legendDom = $(".map-legends.wax-legends.leaflet-control")[0];
          legendDom.style.bottom = "20px";

          setTimeout(addEventToInputRadio, 2000);

            $('#map-container-income').beforeAfter(beforeMap2006Income, afterMap2011Income, {showFullLinks: false, introPosition: 0.5, animateIntro: true, introDuration: 1000, permArrows: true, arrowHeight: 0.20, labelLeft: -20, labelRight: -12, arrowTop: 0.25, arrowLeftOffset: -60, arrowRightOffset: -19});

          cateAll();

        function addEventToInputRadio() {
                    var inputList=document.getElementsByName("melIncome");
                    inputList[0].onclick=cateAll;
                    inputList[1].onclick=cate1;
                    inputList[2].onclick=cate2;
                    inputList[3].onclick=cate3;
                    inputList[4].onclick=cate4;
                }

                    function cateAll(){
                      beforeMap2006Income.removeLayer(mel_2006_income_group1_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group2_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group3_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group4_layer);
                      beforeMap2006Income.removeLayer(mel_2006_street_layer);

                      beforeMap2006Income.addLayer(mel_2006_income_group1_layer);
                      beforeMap2006Income.addLayer(mel_2006_income_group2_layer);
                      beforeMap2006Income.addLayer(mel_2006_income_group3_layer);
                      beforeMap2006Income.addLayer(mel_2006_income_group4_layer);
                      beforeMap2006Income.addLayer(mel_2006_street_layer);

                      afterMap2011Income.removeLayer(mel_2011_income_group1_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group2_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group3_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group4_layer);
                      afterMap2011Income.removeLayer(mel_2011_street_layer);

                      afterMap2011Income.addLayer(mel_2011_income_group1_layer);
                      afterMap2011Income.addLayer(mel_2011_income_group2_layer);
                      afterMap2011Income.addLayer(mel_2011_income_group3_layer);
                      afterMap2011Income.addLayer(mel_2011_income_group4_layer);
                      afterMap2011Income.addLayer(mel_2011_street_layer);
                    }

                    function cate1(){
                      beforeMap2006Income.removeLayer(mel_2006_income_group1_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group2_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group3_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group4_layer);
                      beforeMap2006Income.removeLayer(mel_2006_street_layer);

                      beforeMap2006Income.addLayer(mel_2006_income_group1_layer);
                      beforeMap2006Income.addLayer(mel_2006_street_layer);

                      afterMap2011Income.removeLayer(mel_2011_income_group1_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group2_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group3_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group4_layer);
                      afterMap2011Income.removeLayer(mel_2011_street_layer);

                      afterMap2011Income.addLayer(mel_2011_income_group1_layer);
                      afterMap2011Income.addLayer(mel_2011_street_layer);
                    }

                    function cate2(){
                      beforeMap2006Income.removeLayer(mel_2006_income_group1_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group2_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group3_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group4_layer);
                      beforeMap2006Income.removeLayer(mel_2006_street_layer);

                      beforeMap2006Income.addLayer(mel_2006_income_group2_layer);
                      beforeMap2006Income.addLayer(mel_2006_street_layer);

                      afterMap2011Income.removeLayer(mel_2011_income_group1_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group2_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group3_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group4_layer);
                      afterMap2011Income.removeLayer(mel_2011_street_layer);

                      afterMap2011Income.addLayer(mel_2011_income_group2_layer);
                      afterMap2011Income.addLayer(mel_2011_street_layer);
                    }

                    function cate3(){
                      beforeMap2006Income.removeLayer(mel_2006_income_group1_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group2_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group3_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group4_layer);
                      beforeMap2006Income.removeLayer(mel_2006_street_layer);

                      beforeMap2006Income.addLayer(mel_2006_income_group3_layer);
                      beforeMap2006Income.addLayer(mel_2006_street_layer);

                      afterMap2011Income.removeLayer(mel_2011_income_group1_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group2_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group3_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group4_layer);
                      afterMap2011Income.removeLayer(mel_2011_street_layer);

                      afterMap2011Income.addLayer(mel_2011_income_group3_layer);
                      afterMap2011Income.addLayer(mel_2011_street_layer);
                    }

                    function cate4(){
                      beforeMap2006Income.removeLayer(mel_2006_income_group1_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group2_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group3_layer);
                      beforeMap2006Income.removeLayer(mel_2006_income_group4_layer);
                      beforeMap2006Income.removeLayer(mel_2006_street_layer);

                      beforeMap2006Income.addLayer(mel_2006_income_group4_layer);
                      beforeMap2006Income.addLayer(mel_2006_street_layer);

                      afterMap2011Income.removeLayer(mel_2011_income_group1_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group2_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group3_layer);
                      afterMap2011Income.removeLayer(mel_2011_income_group4_layer);
                      afterMap2011Income.removeLayer(mel_2011_street_layer);

                      afterMap2011Income.addLayer(mel_2011_income_group4_layer);
                      afterMap2011Income.addLayer(mel_2011_street_layer);
                    }

      });