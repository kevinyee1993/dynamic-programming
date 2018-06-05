// solution 1
// time complexity: O(n^2)
// space complexity: O(n)
// need to fix bottleneck of nested loop

function climbingLeaderboard2(scores, alice) {
    let rankTrack = {};
    let currRank = 1;
    let order = [];

    scores.forEach(score => {
        if(!rankTrack[score]) {
            rankTrack[score] = currRank;
            currRank++;
        }
    });

    // console.log(alice);

    for(let i = 0; i < alice.length; i++) {
        let found = false;
        for(let j = 0; j < scores.length; j++) {
                // console.log(alice[i]);
                // console.log(scores[j]);
            if(alice[i] >= scores[j]) {
                console.log(rankTrack[scores[j]]);
                order.push(rankTrack[scores[j]]);
                found = true;
                break;
            }
        }

        if(!found) {
            console.log(currRank);
            order.push(currRank);
            currRank++;
        }
    }

    return order;
}

function climbingLeaderboard(scores, alice) {
    let combinedScores = [];

    scores.forEach(score => {
        combinedScores.push(parseInt(score));
    });

    alice.forEach(score => {
        combinedScores.push(parseInt(score));
    });


    // O(n log(n)) here because of sorting
    // combinedScores = combinedScores.sort().reverse();
    combinedScores = combinedScores.sort((a, b) => a - b).reverse();



    let rankTrack = {};
    let currRank = 1;

    combinedScores.forEach(score => {
       if(!rankTrack[score]) {
           rankTrack[score] = currRank;
           currRank++;
       }
    });

    console.log(rankTrack);

    alice.forEach(score => {
        console.log(rankTrack[score]);
    });


}
