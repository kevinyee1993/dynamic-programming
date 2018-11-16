// more optimal solution
class people {
  constructor(birth, death) {
    this.birth = birth;
    this.death = death;
  }
}

function livingPeople2(list) {
  const births = [];
  const deaths = [];

  
}


// function livingPeople(list) {
//   const years = {};
//   for(let i = 0; i < list.length; i++) {
//     let birth = list[i].birth;
//     let death = list[i].death;
//     addLivingYears(years, birth, death);
//   }
//
//   let checkYears = Object.keys(years);
//   let mostPeople = 0;
//   let bigYear = 0;
//
//   for(let i = 0; i < checkYears.length; i++) {
//     if(years[checkYears[i]] > mostPeople) {
//       mostPeople = years[checkYears[i]];
//       bigYear = checkYears[i];
//     }
//   }
//
//   return bigYear;
//
// }
//
// function addLivingYears(years, birth, death) {
//   for(let i = birth; i <= death; i++) {
//     if(!years[i]) {
//       years[i] = 1;
//     } else {
//       years[i]++;
//     }
//   }
// }
//
// let list = [
//   {birth: 1993, death: 2000},
//   {birth: 1995, death: 1995}
// ];
//
// console.log(livingPeople(list));
