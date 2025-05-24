import { Component } from '@angular/core';
interface Project {
  title: string;
  description: string;
  tech: string;
  github: string;
  category: 'design-patterns' | 'razor-pages' | 'full-stack' | 'front-end';
}
@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
 selectedCategory: string = 'all';

  projects: Project[] = [
    // Design Patterns Projects
    {
      title: 'Mediator Design Pattern',
      description: 'Implementation of Mediator pattern in C#',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/MediatorMethodDesignPattren',
      category: 'design-patterns'
    },
    {
      title: 'Interpreter Design Pattern',
      description: 'Interpreter pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/InterpreterMethodDesignPattern',
      category: 'design-patterns'
    },
    // ... أكمل بنفس الطريقة لكل مشاريع Design Patterns (نفس الفكرة لكل لينك)
    {
      title: 'Momento Design Pattern',
      description: 'Momento pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/MomentoMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Visitor Design Pattern',
      description: 'Visitor pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/VisitorMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Template Method Design Pattern',
      description: 'Template Method pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/TemplateMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Strategy Design Pattern',
      description: 'Strategy pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/StrategyMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'State Design Pattern',
      description: 'State pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/StateMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Observer Design Pattern',
      description: 'Observer pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/ObserverMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Command Design Pattern',
      description: 'Command pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/CommandMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Proxy Design Pattern',
      description: 'Proxy pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/ProxyMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Flyweight Design Pattern',
      description: 'Flyweight pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/FlyweightMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Facade Design Pattern',
      description: 'Facade pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/FacadeMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Decorator Design Pattern',
      description: 'Decorator pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/DecoratorMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Composite Design Pattern',
      description: 'Composite pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/CompositeMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Singleton Design Pattern',
      description: 'Singleton pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/SingltonMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Adapter Design Pattern',
      description: 'Adapter pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/AdapterMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Bridge Design Pattern',
      description: 'Bridge pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/BridgeMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Prototype Design Pattern',
      description: 'Prototype pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/PrototypeMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Builder Design Pattern',
      description: 'Builder pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/BuilderMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Abstract Factory Design Pattern',
      description: 'Abstract Factory pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/AbstractFactoryMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'Factory Method Design Pattern',
      description: 'Factory Method pattern example project',
      tech: 'C# - Design Patterns',
      github: 'https://github.com/AmanyHamza93/FactoryMethodDesignPattern',
      category: 'design-patterns'
    },
    {
      title: 'SOLID Principles',
      description: 'SOLID Principles in C#',
      tech: 'C# - SOLID Principles',
      github: 'https://github.com/AmanyHamza93/SOLID-Principle',
      category: 'design-patterns'
    },

    // Razor Pages and Backend Projects
    {
      title: 'SignalR Chat Razor Pages',
      description: 'Real-time chat app using SignalR and Razor Pages',
      tech: 'ASP.NET Core, SignalR, Razor Pages',
      github: 'https://github.com/AmanyHamza93/SignalR-Chat/tree/main/SignalRChat/Pages',
      category: 'razor-pages'
    },

    // Full Stack Projects (Backend + Angular)
    {
      title: 'Product CRUD System',
      description: 'Full stack system for managing products with .NET backend and Angular frontend',
      tech: '.NET Core, Angular',
      github: 'https://github.com/AmanyHamza93/Product-Crud-System',
      category: 'full-stack'
    },
    {
      title: 'Angular Filter',
      description: 'Angular project demonstrating filter functionality',
      tech: 'Angular',
      github: 'https://github.com/AmanyHamza93/ANGLUAR-FILTER',
      category: 'full-stack'
    },
    {
      title: 'Axure Landing Page',
      description: 'A responsive UI landing page built with HTML, CSS & JS.',
      tech: 'HTML, CSS, JS',
      github: 'https://axurecom.netlify.app/',
      category: 'front-end'
    },
    {
      title: 'World Countries Info',
      description: 'Frontend project showing all world countries with API.',
      tech: 'HTML, CSS, JS, REST API',
      github: 'https://world-all.netlify.app/',
      category: 'front-end'
    },
     {
      title: 'Creative Page UI',
      description: 'Another creative frontend design.',
      tech: 'HTML, CSS, UI',
      github: 'https://adorable-cactus-f14a74.netlify.app/',
      category: 'front-end'
    },
  ];

  // دالة لتغيير التصنيف
  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  // Projects مصنفة حسب التصنيف المختار
  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    } else {
      return this.projects.filter(p => p.category === this.selectedCategory);
    }
  }


}
