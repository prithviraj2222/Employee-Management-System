localStorage.clear();

const employees = [
    {
      id: 1,
      firstName: "Aarav",
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Task 1 for Employee 1",
          taskDescription: "Complete the initial setup.",
          taskDate: "2024-12-29",
          category: "Setup",
        },
        {
          active: true,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Task 2 for Employee 1",
          taskDescription: "Submit the report.",
          taskDate: "2024-12-25",
          category: "Reporting",
        },
      ],
      taskNumbers: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0,
      },
    },
    {
      id: 2,
      firstName: "Vihaan",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Task 1 for Employee 2",
          taskDescription: "Finish coding feature A.",
          taskDate: "2024-12-30",
          category: "Development",
        },
        {
          active: true,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Task 2 for Employee 2",
          taskDescription: "Test the module.",
          taskDate: "2024-12-28",
          category: "Testing",
        },
      ],
      taskNumbers: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0,
      },
    },
    {
      id: 3,
      firstName: "Aditya",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Task 1 for Employee 3",
          taskDescription: "Write documentation.",
          taskDate: "2024-12-29",
          category: "Documentation",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Task 2 for Employee 3",
          taskDescription: "Fix bugs in the system.",
          taskDate: "2024-12-24",
          category: "Bug Fixing",
        },
      ],
      taskNumbers: {
        active: 2,
        newTask: 1,
        completed: 0,
        failed: 1,
      },
    },
    {
      id: 4,
      firstName: "Ishaan",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Task 1 for Employee 4",
          taskDescription: "Complete the user interface design.",
          taskDate: "2024-12-30",
          category: "Design",
        },
        {
          active: true,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Task 2 for Employee 4",
          taskDescription: "Review pull requests.",
          taskDate: "2024-12-28",
          category: "Review",
        },
      ],
      taskNumbers: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0,
      },
    },
    {
      id: 5,
      firstName: "Rohan",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Task 1 for Employee 5",
          taskDescription: "Create new user stories.",
          taskDate: "2024-12-30",
          category: "Story Writing",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Task 2 for Employee 5",
          taskDescription: "Review QA results.",
          taskDate: "2024-12-25",
          category: "Quality Assurance",
        },
      ],
      taskNumbers: {
        active: 2,
        newTask: 1,
        completed: 0,
        failed: 1,
      },
    },
  ];
  
  const admin = [
    {
      id: 1,
      firstName: "Aryan",
      email: "admin@example.com",
      password: "123",
    },
  ];
  

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
