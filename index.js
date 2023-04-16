function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${task.title} has ${task.complete ? "":"not "}been completed`); //prints out the provided task's details
    },
    markCompleted: function() {
      task.complete = true; //marks the provided task as completed
    }
  };
  return task;
}


//Driver code BELOW
const task1 = newTask ("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry","😨");
const tasks = [task1, task2];

task1.logState(); //Clean Cat litter has not been completed
task1.markCompleted();
task1.logState(); //Clean Cat Litter has been completed.
// for now, let's just make sure we see our tasks

