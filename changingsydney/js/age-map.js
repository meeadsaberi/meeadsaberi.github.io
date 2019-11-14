$(function() {

          var center = [-37.8159009, 144.9629722], zoom = 10;

          var beforeMap2006Age = L.mapbox.map('beforeMap2006Age', 'cityscience.j0g767m0', {
                            minZoom: 9,
                            maxZoom: 13
                          })
                          .setView([-37.8159009, 144.9629722], 10);

          beforeMap2006Age.scrollWheelZoom.disable(); 

          var mel_2006_over_65_layer=L.mapbox.tileLayer('cityscience.mja37n3o', {
                                minZoom: 9,
                                maxZoom: 13,
                                opacity: 0.7
                              }).addTo(beforeMap2006Age);

          var mel_2006_0_19_layer=L.mapbox.tileLayer('cityscience.mja3438j', {
                                minZoom: 9,
                                maxZoom: 13,
                                opacity: 1
                              }).addTo(beforeMap2006Age);

          var mel_2006_35_64_layer=L.mapbox.tileLayer('cityscience.mja36k44', {
                                minZoom: 9,
                                maxZoom: 13,
                                opacity: 1
                              }).addTo(beforeMap2006Age);

          var mel_2006_20_34_layer=L.mapbox.tileLayer('cityscience.mja35lj7', {
                                minZoom: 9,
                                maxZoom: 13,
                                opacity: 0.6
                              }).addTo(beforeMap2006Age);

          var mel_2006_street_layer=L.mapbox.tileLayer('cityscience.iagjdpp2', {
                                      minZoom: 9,
                                      maxZoom: 13,
                                      attribution: 'Map data contributors ' +
                                    '<a href="http://monash.edu/research/city-science/">Monash City Science</a>'
                                    }).addTo(beforeMap2006Age);

          var afterMap2011Age = L.mapbox.map('afterMap2011Age', 'cityscience.j3cc4lil', {
                            minZoom: 9,
                            maxZoom: 13
                          })
                          .setView([-37.8159009, 144.9629722], 10);

          afterMap2011Age.scrollWheelZoom.disable(); 

          afterMap2011Age.on('ready', function() {
            $("#afterMap2011Age").find("div:last-child").find("div:last-child").find("div:first-child").find("div:first-child").find("div:first-child").find("div:first-child")
                .html("<strong style='font-size: 150%;'>Melbourne Age Map <br>(2006-2011)</strong>");
          });

          var mel_2011_base_layer=L.mapbox.tileLayer('cityscience.j0g767m0', {
                                      minZoom: 9,
                                      maxZoom: 13,
                                      attribution: 'Map data contributors ' +
                                      '<a href="http://monash.edu/research/city-science/">Monash City Science</a>'
                                    }).addTo(afterMap2011Age);

          var mel_2011_over_65_layer=L.mapbox.tileLayer('cityscience.j384k9d1', {
                                minZoom: 9,
                                maxZoom: 13,
                                opacity: 0.7
                              }).addTo(afterMap2011Age);

          var mel_2011_0_19_layer=L.mapbox.tileLayer('cityscience.j3cc4lil', {
                                minZoom: 9,
                                maxZoom: 13,
                                opacity: 1
                              }).addTo(afterMap2011Age);

          var mel_2011_35_64_layer=L.mapbox.tileLayer('cityscience.j384fajj', {
                                minZoom: 9,
                                maxZoom: 13,
                                opacity: 1
                              }).addTo(afterMap2011Age);

          var mel_2011_20_34_layer=L.mapbox.tileLayer('cityscience.j384d93o', {
                                minZoom: 9,
                                maxZoom: 13,
                                opacity: 0.6
                              }).addTo(afterMap2011Age);

          var mel_2011_street_layer=L.mapbox.tileLayer('cityscience.iagjdpp2', {
                                      minZoom: 9,
                                      maxZoom: 13
                                    }).addTo(afterMap2011Age);

          $("#beforeMap2006Age").find("div:last-child").find("div:last-child").hide();
          var legendDom = $(".map-legends.wax-legends.leaflet-control")[0];
          legendDom.style.bottom = "20px";

          setTimeout(addEventToInputRadio, 2000);

            $('#map-container-age').beforeAfter(beforeMap2006Age, afterMap2011Age, {showFullLinks: false, introPosition: 0.5, animateIntro: true, introDuration: 1000, permArrows: true, arrowHeight: 0.20, labelLeft: -20, labelRight: -12, arrowTop: 0.25, arrowLeftOffset: -60, arrowRightOffset: -19});

              cateAll();

                function addEventToInputRadio() {
                    
                    var inputList=document.getElementsByName("melAge");
                    inputList[0].onclick=cateAll;
                    inputList[1].onclick=cate1;
                    inputList[2].onclick=cate2;
                    inputList[3].onclick=cate3;
                    inputList[4].onclick=cate4;
                }

                    function cateAll(){
                      beforeMap2006Age.removeLayer(mel_2006_0_19_layer);
                      beforeMap2006Age.removeLayer(mel_2006_20_34_layer);
                      beforeMap2006Age.removeLayer(mel_2006_35_64_layer);
                      beforeMap2006Age.removeLayer(mel_2006_over_65_layer);
                      beforeMap2006Age.removeLayer(mel_2006_street_layer);

                      beforeMap2006Age.addLayer(mel_2006_over_65_layer);
                      beforeMap2006Age.addLayer(mel_2006_0_19_layer);
                      beforeMap2006Age.addLayer(mel_2006_35_64_layer);
                      beforeMap2006Age.addLayer(mel_2006_20_34_layer);
                      beforeMap2006Age.addLayer(mel_2006_street_layer);

                      afterMap2011Age.removeLayer(mel_2011_0_19_layer);
                      afterMap2011Age.removeLayer(mel_2011_20_34_layer);
                      afterMap2011Age.removeLayer(mel_2011_35_64_layer);
                      afterMap2011Age.removeLayer(mel_2011_over_65_layer);
                      afterMap2011Age.removeLayer(mel_2011_street_layer);

                      afterMap2011Age.addLayer(mel_2011_over_65_layer);
                      afterMap2011Age.addLayer(mel_2011_0_19_layer);
                      afterMap2011Age.addLayer(mel_2011_35_64_layer);
                      afterMap2011Age.addLayer(mel_2011_20_34_layer);
                      afterMap2011Age.addLayer(mel_2011_street_layer);
                    }

                    function cate1(){
                      beforeMap2006Age.removeLayer(mel_2006_0_19_layer);
                      beforeMap2006Age.removeLayer(mel_2006_20_34_layer);
                      beforeMap2006Age.removeLayer(mel_2006_35_64_layer);
                      beforeMap2006Age.removeLayer(mel_2006_over_65_layer);
                      beforeMap2006Age.removeLayer(mel_2006_street_layer);

                      beforeMap2006Age.addLayer(mel_2006_0_19_layer);
                      beforeMap2006Age.addLayer(mel_2006_street_layer);

                      afterMap2011Age.removeLayer(mel_2011_0_19_layer);
                      afterMap2011Age.removeLayer(mel_2011_20_34_layer);
                      afterMap2011Age.removeLayer(mel_2011_35_64_layer);
                      afterMap2011Age.removeLayer(mel_2011_over_65_layer);
                      afterMap2011Age.removeLayer(mel_2011_street_layer);

                      afterMap2011Age.addLayer(mel_2011_0_19_layer);
                      afterMap2011Age.addLayer(mel_2011_street_layer);
                    }

                    function cate2(){
                      beforeMap2006Age.removeLayer(mel_2006_0_19_layer);
                      beforeMap2006Age.removeLayer(mel_2006_20_34_layer);
                      beforeMap2006Age.removeLayer(mel_2006_35_64_layer);
                      beforeMap2006Age.removeLayer(mel_2006_over_65_layer);
                      beforeMap2006Age.removeLayer(mel_2006_street_layer);

                      beforeMap2006Age.addLayer(mel_2006_20_34_layer);
                      beforeMap2006Age.addLayer(mel_2006_street_layer);

                      afterMap2011Age.removeLayer(mel_2011_0_19_layer);
                      afterMap2011Age.removeLayer(mel_2011_20_34_layer);
                      afterMap2011Age.removeLayer(mel_2011_35_64_layer);
                      afterMap2011Age.removeLayer(mel_2011_over_65_layer);
                      afterMap2011Age.removeLayer(mel_2011_street_layer);

                      afterMap2011Age.addLayer(mel_2011_20_34_layer);
                      afterMap2011Age.addLayer(mel_2011_street_layer);
                    }

                    function cate3(){
                      beforeMap2006Age.removeLayer(mel_2006_0_19_layer);
                      beforeMap2006Age.removeLayer(mel_2006_20_34_layer);
                      beforeMap2006Age.removeLayer(mel_2006_35_64_layer);
                      beforeMap2006Age.removeLayer(mel_2006_over_65_layer);
                      beforeMap2006Age.removeLayer(mel_2006_street_layer);

                      beforeMap2006Age.addLayer(mel_2006_35_64_layer);
                      beforeMap2006Age.addLayer(mel_2006_street_layer);

                      afterMap2011Age.removeLayer(mel_2011_0_19_layer);
                      afterMap2011Age.removeLayer(mel_2011_20_34_layer);
                      afterMap2011Age.removeLayer(mel_2011_35_64_layer);
                      afterMap2011Age.removeLayer(mel_2011_over_65_layer);
                      afterMap2011Age.removeLayer(mel_2011_street_layer);

                      afterMap2011Age.addLayer(mel_2011_35_64_layer);
                      afterMap2011Age.addLayer(mel_2011_street_layer);
                    }

                    function cate4(){
                      beforeMap2006Age.removeLayer(mel_2006_0_19_layer);
                      beforeMap2006Age.removeLayer(mel_2006_20_34_layer);
                      beforeMap2006Age.removeLayer(mel_2006_35_64_layer);
                      beforeMap2006Age.removeLayer(mel_2006_over_65_layer);
                      beforeMap2006Age.removeLayer(mel_2006_street_layer);

                      beforeMap2006Age.addLayer(mel_2006_over_65_layer);
                      beforeMap2006Age.addLayer(mel_2006_street_layer);

                      afterMap2011Age.removeLayer(mel_2011_0_19_layer);
                      afterMap2011Age.removeLayer(mel_2011_20_34_layer);
                      afterMap2011Age.removeLayer(mel_2011_35_64_layer);
                      afterMap2011Age.removeLayer(mel_2011_over_65_layer);
                      afterMap2011Age.removeLayer(mel_2011_street_layer);

                      afterMap2011Age.addLayer(mel_2011_over_65_layer);
                      afterMap2011Age.addLayer(mel_2011_street_layer);
                    }

      });