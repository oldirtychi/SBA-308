// A CourseInfo object, which looks like this:
const courseInfo = {
  id: 101,
  name: "Intro to JavaScript",
}

// An AssignmentGroup object, which looks like this:
const assignmentGroup = {
  id: 300,
  name: "Fundamentals of JavaScript",
  course_id: 308  ,
  group_weight: 100,
  assignments: [
    {
        id: 1,
        name: "Run a loop",
        due_on: "2024-08-01",
        points_possible: 50
    },
    {
        id: 2, 
        name:"",
        due_at: "",
        points_possible: 50
    }
    {
        id: 3,
        name:"",
        due_at: "",
        points_possible: 50
    }
  ]
};

// Each AssignmentInfo object within the assignments array looks like this:
{
  "id": number,
  "name": string,
  // the due date for the assignment
  "due_at": Date string,
  // the maximum points possible for the assignment
  "points_possible": number,
}

// An array of LearnerSubmission objects, which each look like this:
{
    "learner_id": number,
    "assignment_id": number,
    "submission": {
      "submitted_at": Date string,
      "score": number
    }
}


// {
//     // the ID of the learner for which this data has been collected
//     "id": number,
//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
//     "avg": number,
//     // each assignment should have a key with its ID,
//     // and the value associated with it should be the percentage that
//     // the learner scored on the assignment (submission.score / points_possible)
//     <assignment_id>: number,
//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// }


// OBJECTIVE: Create a function named getLearnerData() that accepts these values as 
// parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), 
// and returns the formatted result, which should be an array of objects as described 
// above