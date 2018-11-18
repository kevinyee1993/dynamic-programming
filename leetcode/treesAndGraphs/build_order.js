// O(n) space and time
function buildOrder(projects, dependencies) {
  const dependencyCounter = {};
  const dependencyHash = {};
  const validBuildOrder = [];
  const pendingOrder = [];

  for(let i = 0; i < projects.length; i++) {
    dependencyCounter[projects[i]] = 0;
    dependencyHash[projects[i]] = [];
  }


  for(let i = 0; i < dependencies.length; i++) {
    let independent = dependencies[i][0];
    let dependent = dependencies[i][1];

    dependencyCounter[dependent]++;
    dependencyHash[independent].push(dependent);
  }

  for(let i = 0; i < projects.length; i++) {
    let currProject = projects[i];
    if(dependencyCounter[currProject] === 0) {
      pendingOrder.push(currProject);
    }
  }

  while(pendingOrder.length > 0) {
    let currProject = pendingOrder.shift();
    let currDependents = dependencyHash[currProject];

    currDependents.forEach(dependent => {
      dependencyCounter[dependent]--;
      if(dependencyCounter[dependent] === 0) {
        pendingOrder.push(dependent);
      }
    });

    validBuildOrder.push(currProject);
  }

  if(validBuildOrder.length === projects.length) {
    return validBuildOrder;
  } else {
    return null;
  }
}

let projects = ['a', 'b', 'c', 'd', 'e', 'f'];
let dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

console.log(buildOrder(projects, dependencies));
