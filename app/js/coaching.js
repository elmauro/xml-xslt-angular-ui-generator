(function() {

    var incomplete_challenges = [];
    var challenges_submited = [];
    var to_review = 0;
    var reviewed = 0;
    var average = 0;
    var token = '';
    var index = 0;
    var user = '';
    var password = '';
    var directory = '';
    var UserId = 0;

    var userInfo = {
      "recipientFirstName": "leidy",
      "recipientLastName": "student",
      "position": "National Account Manager Sales",
      "image": "img/James.png"
    };

    var invitations = { 'count': 0 };
    var challenges = { 'count': 0 };

    var reviewer = 'chart-couching1';
    var participant = 'chart-couching3';
    var data_reviewer;
    var data_participant;

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

        incomplete_challenges = [];
        challenges_submited = [];
        to_review = 0;
        reviewed = 0;
        average = 0;

        user = 'mauricio';
        password = 'personal';
        directory = 'mauricio';

        var xhr1 = new XMLHttpRequest();

        xhr1.open('POST', 'https://yuxidev12.hq.brainshark.com/brainshark/webservices_mobile/session.ashx');
        xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr1.onload = function() {
            
            if (xhr1.status === 200) {
                token = JSON.parse(xhr1.response).SessionToken;
                UserId = JSON.parse(xhr1.response).UId;

                var xhr2 = new XMLHttpRequest();
                xhr2.open('GET', 'https://yuxidev12.hq.brainshark.com/brainshark/webservices_mobile/getheaderinfo.ashx?menutype=coaching&url=https%3A%2F%2Fappqa.brainshark.com%2Fbrainshark%2Fbrainshark.net%2Fcoaching%2Fhome.aspx&v=1487690740840');
                xhr2.setRequestHeader("Brainshark-STok", token);
                xhr2.onload = function() {
                    
                    if (xhr2.status === 200) {
                        
                        var xhr3 = new XMLHttpRequest();
                        xhr3.open('GET', 'https://yuxidev12.hq.brainshark.com/brainshark/brainshark.services.coaching/user/' + UserId +'/challenge');
                        xhr3.setRequestHeader("Brainshark-STok", token);
                        xhr3.onload = function() {
                            
                            if (xhr3.status === 200) {
                              challenges = JSON.parse(xhr3.response);
                            
                              if (challenges.count > 0){
                                  var xhr4 = new XMLHttpRequest();
                                  xhr4.open('GET', 'https://yuxidev12.hq.brainshark.com/brainshark/brainshark.services.coaching/user/' + UserId +'/invitation?hideCourses=true');
                                  xhr4.setRequestHeader("Brainshark-STok", token);
                                  xhr4.onload = function() {
                                      if (xhr4.status === 200) {
                                          invitations = JSON.parse(xhr4.response);;

                                          hideDivs('block', 'block', 'block');
                                          process();
                                          mapping();
                                      }
                                      else {
                                          alert('Request failed.  Returned status of ' + xhr.status);
                                      }
                                  };

                                  xhr4.send();
                              }
                              else{
                                var xhr5 = new XMLHttpRequest();
                                xhr5.open('GET', 'https://yuxidev12.hq.brainshark.com/brainshark/brainshark.services.coaching/user/' + UserId +'/invitation?hideCourses=true');
                                xhr5.setRequestHeader("Brainshark-STok", token);
                                xhr5.onload = function() {
                                    if (xhr5.status === 200) {
                                        invitations = JSON.parse(xhr5.response);;

                                        hideDivs('none', 'block', 'block');
                                        process();
                                        mapping();
                                    }
                                    else {
                                        alert('Request failed.  Returned status of ' + xhr.status);
                                    }
                                };

                                xhr5.send();
                              }
                            }
                            else {
                                alert('Request failed.  Returned status of ' + xhr3.status);
                            }
                        };

                        xhr3.send();
                    }
                    else {
                        alert('Request failed.  Returned status of ' + xhr2.status);
                    }
                };

                xhr2.send();
            }
            else if (xhr.status !== 200) {
                alert('Request failed.  Returned status of ' + xhr.status);
            }
        };

        xhr1.send(encodeURI(
          'username=' + user + '&' +
          'password=' + password + '&' +
          'login_dir=' + directory
        ));
    }

    function hideDivs(show1, show2, show3){
      document.getElementById('reviewer').style.display = show1;
      document.getElementById('participant').style.display = show2;
      document.getElementById('status').style.display = show3;
    }

    function process(){
      average = 0;
      if(invitations.count > 0){
        invitations.results.forEach(function(item, index){
          userInfo.recipientFirstName = item.recipientFirstName;

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
        average = average + '%';

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

        data_participant = [
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

      if(challenges.count > 0){
        challenges.results.forEach(function(item, index){
          to_review = to_review + (item.numberToReview === 1 ? 1 : 0);
          reviewed = reviewed + (item.numberToReview === 0 ? 1 : 0);
        });

        data_reviewer = [
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
      document.getElementById("name").innerHTML = userInfo.recipientFirstName;
      document.getElementById("name_reviewer").innerHTML = userInfo.recipientFirstName;

      document.getElementById("avg_score").innerHTML = average;

      render(reviewer, data_reviewer, to_review, ' Challenges to Review');
      render(participant, data_participant, incomplete_challenges.length, ' Challenges to Complete');
      
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

})();