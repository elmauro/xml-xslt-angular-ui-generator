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
    var url = '';
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

    function initialize(){
      document.getElementById('reviewer').style.display = "none";
      document.getElementById('status').style.display = "none";
      document.getElementById('participant').style.display = "none";

      document.getElementById('bntLogin').onclick = function()
      {
          setSecurityContext();
      };
    }

    function setSecurityContext(){
        incomplete_challenges = [];
        challenges_submited = [];
        to_review = 0;
        reviewed = 0;
        average = 0;

        user = document.getElementById('txtUserName').value;
        password = document.getElementById('txtPassword').value;
        directory = 'leidy';
        url = 'https://appqa.brainshark.com/';

        var xhr1 = new XMLHttpRequest();

        xhr1.open('POST', url + 'brainshark/webservices_mobile/session.ashx');
        xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr1.onload = function() {
            
            if (xhr1.status === 200) {
                token = JSON.parse(xhr1.response).SessionToken;
                UserId = JSON.parse(xhr1.response).UId;

                generateReports();                
            }
        };

        xhr1.send(encodeURI(
          'username=' + user + '&' +
          'password=' + password + '&' +
          'login_dir=' + directory
        ));  
    }

    function generateReports(){

        var xhr3 = new XMLHttpRequest();
        xhr3.open('GET', url + 'brainshark/brainshark.services.coaching/user/' + UserId +'/challenge');
        xhr3.setRequestHeader("Brainshark-STok", token);
        xhr3.onload = function() {
            
            if (xhr3.status === 200) {
                challenges = JSON.parse(xhr3.response);
            
                var xhr4 = new XMLHttpRequest();
                xhr4.open('GET', url + 'brainshark/brainshark.services.coaching/user/' + UserId +'/invitation?hideCourses=true');
                xhr4.setRequestHeader("Brainshark-STok", token);
                xhr4.onload = function() {
                    if (xhr4.status === 200) {
                        invitations = JSON.parse(xhr4.response);;

                        if (challenges.count > 0){
                          hideDivs('block', 'none', 'block');
                        }else{
                          hideDivs('none', 'block', 'block');
                        }

                        process();
                        mapping();
                    }
                };

                xhr4.send();
            }
        };

        xhr3.send();
    }

    function hideDivs(show1, show2, show3){
      document.getElementById('reviewer').style.display = show1;
      document.getElementById('participant').style.display = show2;
      document.getElementById('status').style.display = show3;
      document.getElementById('login').style.display = 'none';
    }

    function process(){
      average = 0;
      
      invitations.results.forEach(function(item){
        userInfo.recipientFirstName = item.recipientFirstName;

        if(item.state === 1){
          incomplete_challenges.push(item);
        }
        else{
          challenges_submited.push(item);
          average = average + item.overallScore;
        }
      });

      if(invitations.count > 0){
        average = average === 0?0:(parseFloat(average/challenges_submited.length).toFixed(2));
        average = average + '%';
      }

      addEvents();

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
      
      challenges.results.forEach(function(item){
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

    function addEvents(){
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
    }

    function mapping(){
      document.getElementById("name").innerHTML = userInfo.recipientFirstName;
      document.getElementById("name_reviewer").innerHTML = userInfo.recipientFirstName;

      document.getElementById("avg_score").innerHTML = average;

      render(reviewer, data_reviewer, to_review, ' Challenges to Review', "#8bc34a,#37929c");
      render(participant, data_participant, incomplete_challenges.length, ' Challenges to Complete', "#8bc34a,#37929c");
      
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