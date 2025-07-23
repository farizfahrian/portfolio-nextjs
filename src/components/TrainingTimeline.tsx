import { Timeline } from '@/components/ui/timeline';
import Chip from './Chip';

export function TrainingTimeline() {
  const data = [
    {
      date: 'June 2025',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Becoming a React Web Developer Expert
          </h3>
          <div className="mb-2">
            <Chip text="Dicoding" className="text-xs bg-blue-50 border-blue-200 text-blue-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
            Advanced class for React developers focused on clean code, state management, automated testing, and efficient deployment. By the end of the course, participants can build React applications with structured code, Redux state management, automated testing, and CI/CD deployment.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="Clean Code & Linting" className="text-xs" />
            <Chip text="Redux" className="text-xs" />
            <Chip text="Automated Testing" className="text-xs" />
            <Chip text="CI/CD" className="text-xs" />
            <Chip text="Next.js" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'February 2025',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            React Web Fundamentals
          </h3>
          <div className="mb-2">
            <Chip text="Dicoding" className="text-xs bg-blue-50 border-blue-200 text-blue-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          Comprehensive React fundamentals course focusing on essential concepts for building modern web applications. Covers props validation with PropTypes, navigation using React Router, component lifecycle methods, state management with Context API, and functional components with React Hooks implementation.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="PropTypes" className="text-xs" />
            <Chip text="React Router" className="text-xs" />
            <Chip text="Lifecycle Methods" className="text-xs" />
            <Chip text="Context API" className="text-xs" />
            <Chip text="React Hooks" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'February 2025',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            React Web Fundamentals
          </h3>
          <div className="mb-2">
            <Chip text="Dicoding" className="text-xs bg-blue-50 border-blue-200 text-blue-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          Comprehensive React fundamentals course focusing on essential concepts for building modern web applications. Covers props validation with PropTypes, navigation using React Router, component lifecycle methods, state management with Context API, and functional components with React Hooks implementation.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="PropTypes" className="text-xs" />
            <Chip text="React Router" className="text-xs" />
            <Chip text="Lifecycle Methods" className="text-xs" />
            <Chip text="Context API" className="text-xs" />
            <Chip text="React Hooks" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'September 2024',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Learning to Build Web Applications with React
          </h3>
          <div className="mb-2">
            <Chip text="Dicoding" className="text-xs bg-blue-50 border-blue-200 text-blue-600" />
          </div>
    
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
            This class is designed for front-end web developers who want to create
            websites using reusable, declarative UI components that react to data
            changes. By the end of the course, students will be able to build React
            web applications leveraging functional components, stateful components,
            and controlled components.
          </p>
    
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="Introduction to React" className="text-xs" />
            <Chip text="Basic React Concepts" className="text-xs" />
            <Chip text="React UI Components" className="text-xs" />
            <Chip text="Stateful Components" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'August 2023',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            3rd Place – Provincial Youth Creativity Festival (Software Category)
          </h3>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
            Awarded third place in the East Kalimantan Provincial Youth Creativity Festival 2023 for the Software (“TI Lunak”) category, demonstrating proficiency in designing and implementing digital solutions. Recognized for creative problem‑solving across social, cultural, and economic domains, and for effective collaboration under competitive conditions.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="Software Development" className="text-xs" />
            <Chip text="Digital Technology" className="text-xs" />
            <Chip text="Creative Problem‑Solving" className="text-xs" />
            <Chip text="Social Impact" className="text-xs" />
            <Chip text="Cultural Innovation" className="text-xs" />
            <Chip text="Team Collaboration" className="text-xs" />
          </div>
        </div>
      ),
    },     
    {
      date: 'June 2022',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Flutter App Development for Beginners
          </h3>
          <div className="mb-2">
            <Chip text="Dicoding" className="text-xs bg-blue-50 border-blue-200 text-blue-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          Comprehensive Flutter development course for building cross-platform applications. Covers fundamental Flutter widgets, state management techniques, screen navigation patterns, and deployment processes for both mobile platforms (Android/iOS) and web applications. By the end of the course, participants can create responsive, visually appealing applications with a single codebase.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="Flutter Widgets" className="text-xs" />
            <Chip text="State Management" className="text-xs" />
            <Chip text="Navigation" className="text-xs" />
            <Chip text="Deployment" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'August 2021',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Java Programming
          </h3>
          <div className="mb-2">
            <Chip text="Oracle" className="text-xs bg-red-50 border-red-200 text-red-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          Comprehensive Java programming course teaching core language fundamentals and advanced concepts. Covers Java syntax and structure, object-oriented programming principles, collections framework for data management, robust exception handling mechanisms, and introduction to multithreading for concurrent programming. Students gain practical experience building Java applications with industry-standard coding practices.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="Java Syntax" className="text-xs" />
            <Chip text="OOP" className="text-xs" />
            <Chip text="Collections" className="text-xs" />
            <Chip text="Exception Handling" className="text-xs" />
            <Chip text="Multithreading" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'August 2021',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Node.js Web Development
          </h3>
          <div className="mb-2">
            <Chip text="Progate" className="text-xs bg-blue-50 border-blue-200 text-blue-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          Structured learning path for backend development with Node.js, progressing through essential stages of server-side programming. Covers environment setup, HTTP server implementation, routing strategies, middleware integration, error handling patterns, and RESTful API development with Express. Participants learn best practices for project organization and deployment of scalable Node.js applications.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="Node.js" className="text-xs" />
            <Chip text="HTTP Server" className="text-xs" />
            <Chip text="Express" className="text-xs" />
            <Chip text="Middleware" className="text-xs" />
            <Chip text="CRUD API" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'May 2021',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            SOLID Programming Principles
          </h3>
          <div className="mb-2">
            <Chip text="Dicoding" className="text-xs bg-blue-50 border-blue-200 text-blue-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          In-depth exploration of the five SOLID principles that form the foundation of maintainable object-oriented programming. Covers Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion principles with practical examples and implementation patterns. Students learn to write clean, testable, and extensible code that minimizes technical debt and adapts efficiently to changing requirements.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="Single Responsibility" className="text-xs" />
            <Chip text="Open/Closed" className="text-xs" />
            <Chip text="Liskov Substitution" className="text-xs" />
            <Chip text="Interface Segregation" className="text-xs" />
            <Chip text="Dependency Inversion" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'May 2021',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Dart Programming Basics
          </h3>
          <div className="mb-2">
            <Chip text="Dicoding" className="text-xs bg-blue-50 border-blue-200 text-blue-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          Foundational course on the Dart programming language designed as preparation for Flutter development. Covers Dart syntax fundamentals, type system including null safety features, object-oriented concepts, asynchronous programming with Futures and Streams, package management with pub.dev, and testing methodologies. Students gain the essential Dart skills needed to build efficient Flutter applications.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="Dart Syntax" className="text-xs" />
            <Chip text="Async/Await" className="text-xs" />
            <Chip text="Package Management" className="text-xs" />
            <Chip text="Build Tools" className="text-xs" />
            <Chip text="Unit Testing" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'January 2021',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Alibaba Cloud Apsara Clouder
          </h3>
          <div className="mb-2">
            <Chip text="Alibaba Cloud" className="text-xs bg-orange-50 border-orange-200 text-orange-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          Comprehensive certification training from Alibaba Cloud Academy focused on cloud infrastructure management and optimization. Covers the fundamentals of Auto Scaling services, resource management strategies, dynamic workload adaptation techniques, and cloud architecture design principles. Participants learn to configure and manage compute resources that automatically adjust based on business workloads, ensuring optimal performance and cost efficiency in cloud environments.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="Auto Scaling" className="text-xs" />
            <Chip text="Resource Management" className="text-xs" />
            <Chip text="Cloud Architecture" className="text-xs" />
            <Chip text="Cloud Computing" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'November 2020',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Machine Learning for Beginners
          </h3>
          <div className="mb-2">
            <Chip text="Dicoding" className="text-xs bg-blue-50 border-blue-200 text-blue-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          Introductory Machine Learning course covering essential concepts and practical implementation techniques. Outlines end-to-end ML workflows, data preprocessing and feature engineering, fundamental algorithms like linear regression and k-means clustering, model evaluation metrics, and implementation using scikit-learn. Students learn to develop basic ML models and gain the foundation necessary for more advanced machine learning and AI studies.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="ML Workflow" className="text-xs" />
            <Chip text="Algorithms" className="text-xs" />
            <Chip text="Model Evaluation" className="text-xs" />
            <Chip text="scikit-learn" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'October 2020',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Python Programming Basics
          </h3>
          <div className="mb-2">
            <Chip text="Dicoding" className="text-xs bg-purple-50 border-purple-200 text-purple-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          Comprehensive introduction to Python programming designed for beginners entering the world of software development. Covers development environment setup, Python syntax and coding conventions, core data structures (lists, tuples, dictionaries, sets), function definition and usage, file I/O operations, exception handling, and package management with virtual environments. Students gain practical skills for writing efficient and readable Python code.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="Python Syntax" className="text-xs" />
            <Chip text="Data Structures" className="text-xs" />
            <Chip text="Functions" className="text-xs" />
            <Chip text="File I/O" className="text-xs" />
            <Chip text="Package Management" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'September 2020',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Data Visualization Fundamentals
          </h3>
          <div className="mb-2">
            <Chip text="Dicoding" className="text-xs bg-purple-50 border-purple-200 text-purple-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          Foundational course on data visualization principles and techniques for effectively communicating insights from data. Covers appropriate chart type selection (bar, line, pie, scatter plots), visual design elements including axis configuration and color theory, data storytelling methodology, implementation using visualization libraries, and best practices for insight extraction. Students learn to transform raw data into compelling visual narratives that drive understanding and decision-making.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="Chart Types" className="text-xs" />
            <Chip text="Visual Design" className="text-xs" />
            <Chip text="Data Storytelling" className="text-xs" />
            <Chip text="Visualization Tools" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'September 2020',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Database Foundations
          </h3>
          <div className="mb-2">
            <Chip text="Oracle" className="text-xs bg-red-50 border-red-200 text-red-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          Comprehensive introduction to relational database concepts and practical implementation techniques. Covers entity-relationship modeling for database design, normalization processes through Third Normal Form, SQL operations for data manipulation (SELECT, INSERT, UPDATE, DELETE), advanced queries using JOINs and aggregation functions, and performance optimization through proper indexing. Students gain the skills to design efficient database schemas and write effective queries for data management applications.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="ER Modeling" className="text-xs" />
            <Chip text="Normalization" className="text-xs" />
            <Chip text="SQL Queries" className="text-xs" />
            <Chip text="JOINs" className="text-xs" />
            <Chip text="Indexing" className="text-xs" />
          </div>
        </div>
      ),
    },
    {
      date: 'August 2020',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Kotlin Programming Basics
          </h3>
          <div className="mb-2">
            <Chip text="Dicoding" className="text-xs bg-blue-50 border-blue-200 text-blue-600" />
          </div>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
          Comprehensive introduction to the Kotlin programming language, designed for developers in the Java Virtual Machine ecosystem. Covers development environment setup, Kotlin syntax and language features, type system with null safety, control flow constructs, functional programming concepts including extension functions, object-oriented programming principles, and interoperability with Java. Students gain proficiency in writing concise, safe, and expressive code with Kotlin.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip text="Kotlin Syntax" className="text-xs" />
            <Chip text="Data Types" className="text-xs" />
            <Chip text="Null Safety" className="text-xs" />
            <Chip text="OOP Concepts" className="text-xs" />
            <Chip text="Build Tools" className="text-xs" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default TrainingTimeline;
