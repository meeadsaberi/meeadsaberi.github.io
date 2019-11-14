$(function() {

          var center = [-37.8159009, 144.9629722], zoom = 10;

          var beforeMap2006Pop = L.map('beforeMap2006Pop', {attributionControl: false, inertia: false, minZoom: 10, maxZoom: 13}).setView(center, zoom);
          beforeMap2006Pop.scrollWheelZoom.disable(); 
          L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
                      id: 'cityscience.iagjb8md'
                    }).addTo(beforeMap2006Pop);

          L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
                      opacity: 0.8,
                      id: 'cityscience.iagjdpp2'
                    }).addTo(beforeMap2006Pop);


          var afterMap2011Pop = L.map('afterMap2011Pop', {inertia: false, minZoom: 10, maxZoom: 13}).setView(center, zoom);
          afterMap2011Pop.scrollWheelZoom.disable(); 
          L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
                      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                        '<a href="">City Science</a>, ' +
                        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                      id: 'cityscience.iagj3db5'
                    }).addTo(afterMap2011Pop);


          L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
                      opacity: 0.8,
                      id: 'cityscience.iagjdpp2'
                    }).addTo(afterMap2011Pop);

            $('#map-container-pop').beforeAfter(beforeMap2006Pop, afterMap2011Pop, {showFullLinks: false, introPosition: 0.5, animateIntro: true, introDuration: 1000, permArrows: true, arrowHeight: 0.20, labelLeft: -20, labelRight: -12, arrowTop: 0.25, arrowLeftOffset: -60, arrowRightOffset: -19});
      });