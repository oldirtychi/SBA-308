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
        name: "Declare a Variable",
        due_on: "2023-01-25",
        points_possible: 50
    },
    {
        id: 2, 
        name:"Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
    },
    {
        id: 3,
        name:"Code the World",
        due_at: "3156-11-15",
        points_possible: 500
    }
  ]
};


const learnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];





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