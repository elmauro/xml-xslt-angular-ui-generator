(function() {

    var incomplete_challenges = [];
    var challenges_submited = [];
    var average = 0;
    var medals = '';

    var index = 0;

    var response1 = {
        "recipientFirstName": "leidy",
        "recipientLastName": "student",
        "position": "National Account Manager Sales",
        "image": "img/James.png"
    };

    var response2 = {
      "success": true,
      "count": 11,
      "results": [
        {
          "id": 271756,
          "challengeId": 29176,
          "courseId": null,
          "challengeName": "Juan test 2",
          "challengeInstructions": [
            {
              "order": 0,
              "text": "<p>Type some instructions here.</p>",
              "presentationId": null,
              "challengeId": 29176
            }
          ],
          "challengeModifiedDate": "2017-01-26T13:43:08.2870000-05:00",
          "challengeEnableMultipleRatingCategories": false,
          "challengeIncludeInLeaderboard": true,
          "challengeDisplayScoresInLeaderboard": true,
          "challengerUserId": 799574,
          "challengerFirstName": "Leidy",
          "challengerLastName": "Gil",
          "recipientUserId": 802598,
          "recipientFirstName": "leidy",
          "recipientLastName": "student",
          "state": 1,
          "numberOfVersions": 1,
          "rating": 3,
          "overallScore": 52,
          "modifiedDate": "2017-01-26T13:43:08.3070000-05:00",
          "completedDate": "2017-01-26T13:45:44.2530000-05:00",
          "streamHost": "12.41.82.13",
          "streamMaximumLength": 3300,
          "submissionsPid": 707117700,
          "autoLoginTokenId": "a65acf8a-58d7-49f6-9cdb-0e4a4db82610",
          "challengeUserId": 799574
        },
        {
          "id": 271441,
          "challengeId": 28995,
          "courseId": null,
          "challengeName": "Escenario 1",
          "challengeInstructions": [
            {
              "order": 0,
              "text": "<p>Type some instructions here.</p>",
              "presentationId": null,
              "challengeId": 28995
            }
          ],
          "challengeModifiedDate": "2017-01-25T07:27:26.7100000-05:00",
          "challengeEnableMultipleRatingCategories": false,
          "challengeIncludeInLeaderboard": true,
          "challengeDisplayScoresInLeaderboard": true,
          "challengerUserId": 800972,
          "challengerFirstName": "Leidy",
          "challengerLastName": "Gil",
          "recipientUserId": 802598,
          "recipientFirstName": "leidy",
          "recipientLastName": "student",
          "state": 1,
          "numberOfVersions": 1,
          "rating": 4,
          "overallScore": 72,
          "modifiedDate": "2017-01-25T07:27:26.9500000-05:00",
          "completedDate": "2017-01-25T07:28:24.1200000-05:00",
          "streamHost": "12.41.82.13",
          "streamMaximumLength": 3300,
          "submissionsPid": 988253392,
          "autoLoginTokenId": "f648cfb9-d4b1-4b4b-8f0f-3699f599a147",
          "challengeUserId": 800972
        },
        {
          "id": 269049,
          "challengeId": 27377,
          "courseId": null,
          "challengeName": "Juanstest",
          "challengeInstructions": [
            {
              "order": 0,
              "text": "<p>hola</p>",
              "presentationId": null,
              "challengeId": 27377
            }
          ],
          "challengeModifiedDate": "2017-01-26T12:01:10.9670000-05:00",
          "challengeEnableMultipleRatingCategories": false,
          "challengeIncludeInLeaderboard": false,
          "challengeDisplayScoresInLeaderboard": false,
          "challengerUserId": 799574,
          "challengerFirstName": "Leidy",
          "challengerLastName": "Gil",
          "recipientUserId": 802598,
          "recipientFirstName": "leidy",
          "recipientLastName": "student",
          "state": 2,
          "numberOfVersions": 1,
          "rating": 2,
          "overallScore": 44,
          "modifiedDate": "2017-01-06T14:48:59.7100000-05:00",
          "completedDate": "2017-01-06T14:54:18.4470000-05:00",
          "streamHost": "12.41.82.13",
          "streamMaximumLength": 3300,
          "submissionsPid": 405813997,
          "autoLoginTokenId": "0526ccd2-7646-4ca9-8995-cc4820fbb6a6",
          "challengeUserId": 799574
        },
        {
          "id": 154188,
          "challengeId": 23976,
          "courseId": null,
          "challengeName": "256Kbps",
          "challengeInstructions": [
            {
              "order": 0,
              "text": "<p>Type some instructions here.</p>",
              "presentationId": null,
              "challengeId": 23976
            }
          ],
          "challengeModifiedDate": "2016-11-23T14:58:27.4770000-05:00",
          "challengeEnableMultipleRatingCategories": false,
          "challengeIncludeInLeaderboard": true,
          "challengeDisplayScoresInLeaderboard": true,
          "challengerUserId": 799574,
          "challengerFirstName": "Leidy",
          "challengerLastName": "Gil",
          "recipientUserId": 802598,
          "recipientFirstName": "leidy",
          "recipientLastName": "student",
          "state": 1,
          "numberOfVersions": 0,
          "rating": 0,
          "overallScore": 0,
          "modifiedDate": "2016-11-23T14:58:27.5300000-05:00",
          "completedDate": null,
          "streamHost": "12.41.82.13",
          "streamMaximumLength": 3300,
          "submissionsPid": 326909999,
          "autoLoginTokenId": "ef1072d5-3db5-4ddd-8341-4d7071fbbc25",
          "challengeUserId": 799574
        },
        {
          "id": 154098,
          "challengeId": 23916,
          "courseId": null,
          "challengeName": "768Kbps",
          "challengeInstructions": [
            {
              "order": 0,
              "text": "<p>Type some instructions here.</p>",
              "presentationId": null,
              "challengeId": 23916
            }
          ],
          "challengeModifiedDate": "2016-11-23T09:22:02.4400000-05:00",
          "challengeEnableMultipleRatingCategories": false,
          "challengeIncludeInLeaderboard": true,
          "challengeDisplayScoresInLeaderboard": true,
          "challengerUserId": 799574,
          "challengerFirstName": "Leidy",
          "challengerLastName": "Gil",
          "recipientUserId": 802598,
          "recipientFirstName": "leidy",
          "recipientLastName": "student",
          "state": 3,
          "numberOfVersions": 1,
          "rating": 0,
          "overallScore": 0,
          "modifiedDate": "2016-11-23T09:22:02.4630000-05:00",
          "completedDate": "2016-11-23T15:33:00.9800000-05:00",
          "streamHost": "12.41.82.13",
          "streamMaximumLength": 3300,
          "submissionsPid": 949555212,
          "autoLoginTokenId": "7b9431c2-889b-4deb-9c20-8f2319524bfa",
          "challengeUserId": 799574
        },
        {
          "id": 154023,
          "challengeId": 23862,
          "courseId": null,
          "challengeName": "Other",
          "challengeInstructions": [
            {
              "order": 0,
              "text": "<p>Type some instructions here.</p>",
              "presentationId": null,
              "challengeId": 23862
            }
          ],
          "challengeModifiedDate": "2016-11-22T17:43:30.3200000-05:00",
          "challengeEnableMultipleRatingCategories": false,
          "challengeIncludeInLeaderboard": true,
          "challengeDisplayScoresInLeaderboard": true,
          "challengerUserId": 799574,
          "challengerFirstName": "Leidy",
          "challengerLastName": "Gil",
          "recipientUserId": 802598,
          "recipientFirstName": "leidy",
          "recipientLastName": "student",
          "state": 3,
          "numberOfVersions": 1,
          "rating": 0,
          "overallScore": 0,
          "modifiedDate": "2016-11-22T17:43:30.4130000-05:00",
          "completedDate": "2016-11-23T09:05:04.2400000-05:00",
          "streamHost": "12.41.82.13",
          "streamMaximumLength": 3300,
          "submissionsPid": 93722617,
          "autoLoginTokenId": "e17b375f-7e90-4a38-898f-e61f98a4060f",
          "challengeUserId": 799574
        },
        {
          "id": 154007,
          "challengeId": 23852,
          "courseId": null,
          "challengeName": "QA New Changes",
          "challengeInstructions": [
            {
              "order": 0,
              "text": "<p>Type some instructions here.</p>",
              "presentationId": null,
              "challengeId": 23852
            }
          ],
          "challengeModifiedDate": "2016-11-22T16:04:30.4200000-05:00",
          "challengeEnableMultipleRatingCategories": false,
          "challengeIncludeInLeaderboard": false,
          "challengeDisplayScoresInLeaderboard": false,
          "challengerUserId": 799574,
          "challengerFirstName": "Leidy",
          "challengerLastName": "Gil",
          "recipientUserId": 802598,
          "recipientFirstName": "leidy",
          "recipientLastName": "student",
          "state": 2,
          "numberOfVersions": 1,
          "rating": 4,
          "overallScore": 80,
          "modifiedDate": "2016-11-22T16:04:11.0670000-05:00",
          "completedDate": "2016-11-22T16:24:08.8670000-05:00",
          "streamHost": "12.41.82.13",
          "streamMaximumLength": 3300,
          "submissionsPid": 199354913,
          "autoLoginTokenId": "670c03c4-dccb-465e-ac4b-6c1f361e9771",
          "challengeUserId": 799574
        },
        {
          "id": 153908,
          "challengeId": 23762,
          "courseId": null,
          "challengeName": "New Challenge",
          "challengeInstructions": [
            {
              "order": 0,
              "text": "<p>Type some instructions here.</p>",
              "presentationId": null,
              "challengeId": 23762
            }
          ],
          "challengeModifiedDate": "2016-11-21T16:27:20.1100000-05:00",
          "challengeEnableMultipleRatingCategories": false,
          "challengeIncludeInLeaderboard": true,
          "challengeDisplayScoresInLeaderboard": true,
          "challengerUserId": 799574,
          "challengerFirstName": "Leidy",
          "challengerLastName": "Gil",
          "recipientUserId": 802598,
          "recipientFirstName": "leidy",
          "recipientLastName": "student",
          "state": 3,
          "numberOfVersions": 1,
          "rating": 0,
          "overallScore": 0,
          "modifiedDate": "2016-11-21T16:27:20.1600000-05:00",
          "completedDate": "2016-11-22T16:28:15.9970000-05:00",
          "streamHost": "12.41.82.13",
          "streamMaximumLength": 3300,
          "submissionsPid": 502677656,
          "autoLoginTokenId": "6259e921-080d-4774-b506-c96f0f4d101e",
          "challengeUserId": 799574
        },
        {
          "id": 153903,
          "challengeId": 23753,
          "courseId": null,
          "challengeName": "Challenge Carlos 2",
          "challengeInstructions": [
            {
              "order": 0,
              "text": "<p>Type some instructions here.</p>",
              "presentationId": null,
              "challengeId": 23753
            }
          ],
          "challengeModifiedDate": "2016-11-21T12:00:08.7600000-05:00",
          "challengeEnableMultipleRatingCategories": false,
          "challengeIncludeInLeaderboard": true,
          "challengeDisplayScoresInLeaderboard": true,
          "challengerUserId": 799574,
          "challengerFirstName": "Leidy",
          "challengerLastName": "Gil",
          "recipientUserId": 802598,
          "recipientFirstName": "leidy",
          "recipientLastName": "student",
          "state": 3,
          "numberOfVersions": 1,
          "rating": 0,
          "overallScore": 0,
          "modifiedDate": "2016-11-21T12:00:08.7970000-05:00",
          "completedDate": "2016-11-22T16:32:48.5500000-05:00",
          "streamHost": "12.41.82.13",
          "streamMaximumLength": 3300,
          "submissionsPid": 284773693,
          "autoLoginTokenId": "11d9318a-5aa1-46e1-86e7-fb88b7a1c6a8",
          "challengeUserId": 799574
        },
        {
          "id": 153654,
          "challengeId": 23580,
          "courseId": null,
          "challengeName": "Challenge QA",
          "challengeInstructions": [
            {
              "order": 0,
              "text": "<p>Learn a lot</p>",
              "presentationId": null,
              "challengeId": 23580
            }
          ],
          "challengeModifiedDate": "2016-11-18T17:16:47.5200000-05:00",
          "challengeEnableMultipleRatingCategories": false,
          "challengeIncludeInLeaderboard": true,
          "challengeDisplayScoresInLeaderboard": true,
          "challengerUserId": 799574,
          "challengerFirstName": "Leidy",
          "challengerLastName": "Gil",
          "recipientUserId": 802598,
          "recipientFirstName": "leidy",
          "recipientLastName": "student",
          "state": 3,
          "numberOfVersions": 1,
          "rating": 0,
          "overallScore": 0,
          "modifiedDate": "2016-11-18T17:16:47.5470000-05:00",
          "completedDate": "2016-11-22T16:35:11.4970000-05:00",
          "streamHost": "12.41.82.13",
          "streamMaximumLength": 3300,
          "submissionsPid": 8225782,
          "autoLoginTokenId": "b9223859-17c1-4978-a9f9-8ef7132f7a32",
          "challengeUserId": 799574
        },
        {
          "id": 153563,
          "challengeId": 23503,
          "courseId": null,
          "challengeName": "Challenge Carlos",
          "challengeInstructions": [
            {
              "order": 0,
              "text": "<p>Type some instructions here.</p>",
              "presentationId": null,
              "challengeId": 23503
            }
          ],
          "challengeModifiedDate": "2016-11-18T07:49:06.7530000-05:00",
          "challengeEnableMultipleRatingCategories": false,
          "challengeIncludeInLeaderboard": true,
          "challengeDisplayScoresInLeaderboard": true,
          "challengerUserId": 799574,
          "challengerFirstName": "Leidy",
          "challengerLastName": "Gil",
          "recipientUserId": 802598,
          "recipientFirstName": "leidy",
          "recipientLastName": "student",
          "state": 3,
          "numberOfVersions": 1,
          "rating": 0,
          "overallScore": 0,
          "modifiedDate": "2016-11-18T07:49:06.8330000-05:00",
          "completedDate": "2016-11-22T17:26:27.4170000-05:00",
          "streamHost": "12.41.82.13",
          "streamMaximumLength": 3300,
          "submissionsPid": 964660934,
          "autoLoginTokenId": "1936c6ac-1968-42a2-98af-14ca9eb182f1",
          "challengeUserId": 799574
        }
      ],
      "resultType": "Invitation",
      "returnedDate": 1487081823,
      "expires": 0,
      "rights": "RW"
    };

    console.log(response2);

    var response3 = { 
        "bronze": 3, "silver": 2, "gold": 1 
    };

    var div2 = 'chart-couching1';
    var div3 = 'chart-couching2';
    var div4 = 'chart-couching3';

    /*jQuery.ajax( {
        url: 'https://appqa.brainshark.com/brainshark/brainshark.services.coaching/user/802598/invitation?hideCourses=true',
        headers: { 'Brainshark-STok': 'b8e009972695427cb70bbcba8af2c41cx00363B9Cx802598' },
        success: function( response ) {
            mapping(response);
        }
    } );*/

    process();
    mapping();
    
    var data1;

    function render(div, data){
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
                    "defaultCenterLabel": incomplete_challenges.length + " Challenges to Complete",
                    "showTooltip": "1",
                    "decimals": "0"
                },
                "data": data
            }
        }).render();
    }

    function process(){
        average = 0;

        response2.results.forEach(function(item, index){
            if(item.state === 1){
                incomplete_challenges.push(item);
            }
            else{
                if(item.state === 2){
                    challenges_submited.push(item);
                    average = average + item.overallScore;
                }
            }
        });

        average = parseFloat(average/challenges_submited.length).toFixed(2) + '%';

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

        createMedals(response3.gold, 'gold');
        createMedals(response3.silver, 'silver');
        createMedals(response3.bronze, 'bronze');

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

    function mapping(){
        document.getElementById("name").innerHTML = response1.recipientFirstName;
        document.getElementById("avg_score").innerHTML = average;
        document.getElementById("medals").innerHTML = medals;
        render(div4, data1);
        document.getElementById("overall_1").innerHTML = '¡pending!';
        document.getElementById("overall_2").innerHTML = '¡pending!';
        render(div2, data1);
        selector();
    }

    function selector(){
        document.getElementById("challengeName").innerHTML = incomplete_challenges[index].challengeName;
        document.getElementById("challengerFirstName").innerHTML = incomplete_challenges[index].challengerFirstName;
        document.getElementById("challengerLastName").innerHTML = incomplete_challenges[index].challengerLastName;
        document.getElementById("due_date").innerHTML = '¡pending!';
    }

    function createMedals(num, type){
        for(var i=0; i<num; i++){
            medals = medals + '<div class="coin ' + type + '"><p>' + (i+1) + '</p></div>';
        }
    }

})();