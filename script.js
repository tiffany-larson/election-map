var winner = "";

var electionInformation = function(name){


var politician = {};

      politician.name = name;
      politician.electionResults = null;
      politician.votes = 0;
      politician.color = null;


  politician.electionTotal = function (){

  this.grandTotal = 0;

  for(i = 0 ; i < this.electionResults.length; i++){
  this.grandTotal = this.grandTotal + this.electionResults[i];

}

};

   return politician;
  };


var sally = electionInformation("sally");
var carry = electionInformation("carry");

sally.electionResults = [5, 1, 7, 2, 33, 6, 4, 2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2]
carry.electionResults = [3,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

sally.color = [132, 17, 11];
carry.color = [245, 141, 136];

var updateVotingResults = function(){
sally.electionResults[9] = 1;
carry.electionResults[9] = 28;

sally.electionResults[4] = 17;
carry.electionResults[4] = 38;

sally.electionResults[43] = 11;
carry.electionResults[43] = 27;

  };


var getWinner = function(){

  updateVotingResults();
  sally.electionTotal();
  carry.electionTotal();
if(sally.grandTotal > carry.grandTotal){
  winner = sally.name;
}else if (sally.grandTotal < carry.grandTotal){
  winner = carry.name
}else{
  winner = "TIE"
}
console.log(sally.grandTotal);
console.log(carry.grandTotal);
console.log(winner);

};

var setStateResults = function(state){

  theStates[state].winner = null;

  if(sally.electionResults[state] > carry.electionResults[state]){
  theStates[state].winner = sally;
}else if (sally.electionResults[state] < carry.electionResults[state]){
  theStates[state].winner = carry;

}
  var theStateWinner = theStates[state].winner

  if(theStateWinner !== null){
    theStates[state].rgbColor = theStateWinner.color;
    console.log(theStateWinner.name)
  }else{
    theStates[state].rgbColor = [11,32,57]
  }


  var stateInfoTable = function(){var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];


  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = theStates[state].nameAbbrev;
  candidate1Name.innerText = sally.name;
  candidate2Name.innerText = carry.name;
  candidate1Results.innerText = sally.electionResults[state];
  candidate2Results.innerText = carry.electionResults[state];
if(theStateWinner !== null){
  winnersName.innerText = theStateWinner.name;
}else {
  winnersName.innerText = "Tie";
}

}

  stateInfoTable();
};


getWinner();

var completeTable = function(){
var table = document.getElementById('countryResults');
table.children[0].children[0].children[0].innerText = sally.name;
  table.children[0].children[0].children[1].innerText = sally.grandTotal;
  table.children[0].children[0].children[2].innerText = carry.name;
  table.children[0].children[0].children[3].innerText = carry.grandTotal;
  table.children[0].children[0].children[5].innerText = winner;
}




completeTable();
