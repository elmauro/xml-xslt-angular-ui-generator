(function() {

    var incomplete_challenges = [];
    var challenges_submited = [];
    var to_review = 0;
    var reviewed = 0;
    var average = 0;
    //var medals = '';
    var token = '';
    var IsHeadCoach = false;
    var index = 0;
    var user = '';
    var password = '';
    var UserId = 0;

    var response1 = {
      "recipientFirstName": "leidy",
      "recipientLastName": "student",
      "position": "National Account Manager Sales",
      "image": "img/James.png"
    };

    var response2 = { 'count': 0 };

    /*var response3 = { 
        "bronze": 3, "silver": 2, "gold": 1 
    };*/

    var response4 = { 'count': 0 };

    var div2 = 'chart-couching1';
    var div4 = 'chart-couching3';
    var data1;
    var data2;

    initialize();

    function render(div, data, entry, title){
      var revenueChart = new FusionCharts({
        type: 'doughnut2d',
        renderAt: div,
        width: '390',
        height: '260',
        dataFormat: 'json',
        dataSource: {
          "chart": {                    
            "paletteColors": "#8bc34a,#37929c",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "use3DLighting": "0",
            "showShadow": "0",
            "enableSmartLabels": "0",
            "startingAngle": "160",
            "showPercentInTooltip": "0",
            "showLabels": "0",
            "legendShadow": "0",
            "legendBorderAlpha": "0",
            "defaultCenterLabel": entry + " " + title,
            "showTooltip": "1",
            "decimals": "0"
          },
          "data": data
        }
      }).render();
    }

    function initialize(){
      document.getElementById('reviewer').style.display = "none";
      document.getElementById('status').style.display = "none";
      document.getElementById('participant').style.display = "none";

      document.getElementById('bntLogin').onclick = function()
      {
        incomplete_challenges = [];
        challenges_submited = [];
        to_review = 0;
        reviewed = 0;
        average = 0;

        user = document.getElementById('txtUserName').value;
        password = document.getElementById('txtPassword').value;

        jQuery.ajax( {
            type: "POST",
            url: ' https://appqa.brainshark.com/brainshark/webservices_mobile/session.ashx',
            data: { 
              'username': user,
              'password': password,
              'login_dir': 'leidy'
            },
            success: function( response ) {
              token = response.SessionToken;
              UserId = response.UId;

              jQuery.ajax( {
                url: 'https://appqa.brainshark.com/brainshark/webservices_mobile/getheaderinfo.ashx?menutype=coaching&url=https%3A%2F%2Fappqa.brainshark.com%2Fbrainshark%2Fbrainshark.net%2Fcoaching%2Fhome.aspx&v=1487690740840',
                headers: { 'Brainshark-STok': token },
                success: function( response ) {
                  IsHeadCoach = response.Info.IsHeadCoach;

                    jQuery.ajax( {
                        url: 'https://appqa.brainshark.com/brainshark/brainshark.services.coaching/user/' + UserId +'/challenge',
                        headers: { 'Brainshark-STok': token },
                        success: function( response ) {
                            response4 = response;
                            
                            if (response4.count > 0){
                              jQuery.ajax( {
                                  url: 'https://appqa.brainshark.com/brainshark/brainshark.services.coaching/user/' + UserId +'/invitation?hideCourses=true',
                                  headers: { 'Brainshark-STok': token },
                                  success: function( response ) {
                                      response2 = response;

                                      hideDivs('block', 'none', 'block');
                                      process();
                                      mapping();
                                  }
                              } );
                            }
                            else{
                              jQuery.ajax( {
                                  url: 'https://appqa.brainshark.com/brainshark/brainshark.services.coaching/user/' + UserId +'/invitation?hideCourses=true',
                                  headers: { 'Brainshark-STok': token },
                                  success: function( response ) {
                                      response2 = response;

                                      hideDivs('none', 'block', 'block');
                                      process();
                                      mapping();
                                  }
                              } );
                            }
                        }
                    } ); 
                }
              } );
            }
        } );
      };
    }

    function hideDivs(show1, show2, show3){
      document.getElementById('reviewer').style.display = show1;
      document.getElementById('participant').style.display = show2;
      document.getElementById('status').style.display = show3;
      document.getElementById('login').style.display = 'none';
    }

    function process(){
      average = 0;
      if(response2.count > 0){
        response2.results.forEach(function(item, index){
          response1.recipientFirstName = item.recipientFirstName;

          if(item.state === 1){
            incomplete_challenges.push(item);
          }
          else{
            if(item.state === 2 || item.state === 3){
                challenges_submited.push(item);
                average = average + item.overallScore;
            }
          }
        });

        average = average === 0?0:(parseFloat(average/challenges_submited.length).toFixed(2));
        average = average + '%'

        document.getElementById('dialog2').onclick = function()
        {
          index++;
          index = (index)%incomplete_challenges.length;
          selector();
        };

        document.getElementById('dialog3').onclick = function()
        {
          if(index===0){
            index = incomplete_challenges.length;
          }

          index--;
          index = (index)%incomplete_challenges.length;
          selector();
        };

        //createMedals(response3.gold, 'gold');
        //createMedals(response3.silver, 'silver');
        //createMedals(response3.bronze, 'bronze');

        data1 = [
          {
            "label": "Challenges Submited",
            "value": challenges_submited.length
          }, 
          {
            "label": "Incomplete Challenges",
            "value": incomplete_challenges.length
          }
        ];
      }

      if(response4.count > 0){
        response4.results.forEach(function(item, index){
          to_review = to_review + (item.numberToReview ==1?1:0);
          reviewed = reviewed + (item.numberToReview ==0?1:0);
        });

        data2 = [
          {
            "label": "Challenges To Review",
            "value": to_review
          }, 
          {
            "label": "Challenges Reviewed",
            "value": reviewed
          }
        ];  
      }
    }

    function mapping(){
      document.getElementById("name").innerHTML = response1.recipientFirstName;
      document.getElementById("name_reviewer").innerHTML = response1.recipientFirstName;

      document.getElementById("avg_score").innerHTML = average;
      document.getElementById("medals").innerHTML = medals;
      render(div2, data2, to_review, ' Challenges to Review');
      document.getElementById("overall_1").innerHTML = '¡pending!';
      document.getElementById("overall_2").innerHTML = '¡pending!';
      render(div4, data1, incomplete_challenges.length, ' Challenges to Complete');
      
      selector();
    }

    function selector(){
      if(incomplete_challenges.length > 0){
        document.getElementById("challengeName").innerHTML = incomplete_challenges[index].challengeName;
        document.getElementById("challengerFirstName").innerHTML = incomplete_challenges[index].challengerFirstName;
        document.getElementById("challengerLastName").innerHTML = incomplete_challenges[index].challengerLastName;
        document.getElementById("due_date").innerHTML = '¡pending!';
      }
      else{
        document.getElementById('challenges').style.display = 'none';
      }
    }

    function createMedals(num, type){
      for(var i=0; i<num; i++){
        medals = medals + '<div class="coin ' + type + '"><p>' + (i+1) + '</p></div>';
      }
    }

})();