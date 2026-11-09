const employees = [
    {
        id: 1,
        firstName: "Shaik",
        email: "shaik@gmail.com",
        password: "123",
        taskNumbers: {
            active: 3,
            newTask: 2,
            completed: 22,
            failed: 0
        },
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Create Login Page",
                taskDescription: "Develop a responsive login page using React and Tailwind CSS.",
                taskDate: "2026-11-06",
                category: "Development"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Fix Navbar Design",
                taskDescription: "Improve the navbar layout and make it mobile responsive.",
                taskDate: "2026-11-07",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Setup React Project",
                taskDescription: "Initialize the React project and configure Tailwind CSS.",
                taskDate: "2026-11-04",
                category: "Development"
            }
        ]
    },
    {
        id: 2,
        firstName: "Priya",
        email: "employee2@example.com",
        password: "123",
        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 15,
            failed: 0
        },
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Build Dashboard",
                taskDescription: "Create an employee dashboard with task statistics.",
                taskDate: "2026-11-06",
                category: "Development"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Write API Documentation",
                taskDescription: "Document the API endpoints and their expected responses.",
                taskDate: "2026-11-08",
                category: "Documentation"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Design Dashboard Layout",
                taskDescription: "Prepare the dashboard wireframe and component structure.",
                taskDate: "2026-11-03",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Implement Search",
                taskDescription: "Add search functionality to filter employee records.",
                taskDate: "2026-11-09",
                category: "Development"
            }
        ]
    },
    {
        id: 3,
        firstName: "Arjun",
        email: "employee3@example.com",
        password: "123",
        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 18,
            failed: 0
        },
        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create Registration Form",
                taskDescription: "Build a registration form with input validation.",
                taskDate: "2026-11-07",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Test Login Functionality",
                taskDescription: "Test login validation for admin and employee accounts.",
                taskDate: "2026-11-06",
                category: "Testing"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Prepare UI Components",
                taskDescription: "Create reusable buttons, inputs, and card components.",
                taskDate: "2026-11-02",
                category: "Development"
            }
        ]
    },
    {
        id: 4,
        firstName: "Sneha",
        email: "employee4@example.com",
        password: "123",
        taskNumbers: {
            active: 2,
            newTask: 2,
            completed: 10,
            failed: 0
        },
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Fix Responsive Issues",
                taskDescription: "Resolve layout issues on mobile and tablet screens.",
                taskDate: "2026-11-06",
                category: "Bug Fix"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create Profile Page",
                taskDescription: "Develop an employee profile page with personal details.",
                taskDate: "2026-11-10",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Review CSS Styles",
                taskDescription: "Clean up CSS and remove unused styles.",
                taskDate: "2026-11-04",
                category: "Code Review"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Update Footer",
                taskDescription: "Improve footer design and add useful navigation links.",
                taskDate: "2026-11-11",
                category: "Design"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Test Dashboard",
                taskDescription: "Check dashboard functionality and report any bugs.",
                taskDate: "2026-11-12",
                category: "Testing"
            }
        ]
    },
    {
        id: 5,
        firstName: "Vikram",
        email: "employee5@example.com",
        password: "123",
        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 12,
            failed: 0
        },
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Setup GitHub Repository",
                taskDescription: "Create the project repository and push the initial code.",
                taskDate: "2026-11-01",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Integrate Employee Data",
                taskDescription: "Connect employee data with the React dashboard.",
                taskDate: "2026-11-06",
                category: "Development"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Prepare Project Report",
                taskDescription: "Create a report explaining completed features and pending tasks.",
                taskDate: "2026-11-13",
                category: "Documentation"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Fix Form Validation",
                taskDescription: "Add validation messages for required form fields.",
                taskDate: "2026-11-09",
                category: "Bug Fix"
            }
        ]
    }
];



const admin = [
    {
        id: 1,
        email: "admin@me.com",
        password: "123",
    }
];

// export { employees, admin };

export const setLocalStorage = () => {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }

    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(admin));
    }
}

export const getLocalStorage = () => {
    const employees = localStorage.getItem('employees');
    const admin = localStorage.getItem('admin');

    return {
        employees: employees ? JSON.parse(employees) : [],
        admin: admin ? JSON.parse(admin) : []
    }
}


export default localStorage