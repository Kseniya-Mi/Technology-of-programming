var customers = [
    {
        id: "1",
        description: "Иванов Иван",
        createdAt: new Date("2024-01-15"),
        author: "Система",
        photoLink: null,
        contactInfo: {
            phone: "+123456789",
            email: "ivanov@example.com"
        },
        purchaseHistory: [
            { saleId: "301", date: new Date("2024-02-10") },
            { saleId: "302", date: new Date("2024-02-15") }
        ],
        totalSpent: 500,
        discountPercent: 5
    },
    {
        id: "2",
        description: "Петров Петр",
        createdAt: new Date("2024-01-16"),
        author: "Система",
        photoLink: null,
        contactInfo: {
            phone: "+987654321",
            email: "petrov@example.com"
        },
        purchaseHistory: [
            { saleId: "303", date: new Date("2024-02-12") },
            { saleId: "304", date: new Date("2024-02-20") }
        ],
        totalSpent: 1200,
        discountPercent: 10
    }
];

var products = [
    {
        id: "101",
        description: "Молоко 1 литр",
        createdAt: new Date("2024-01-17"),
        author: "Система",
        category: "Продукты питания",
        price: 50,
        stockQuantity: 100
    },
    {
        id: "102",
        description: "Хлеб 500 г",
        createdAt: new Date("2024-01-19"),
        author: "Система",
        category: "Продукты питания",
        price: 25,
        stockQuantity: 200
    }
];

var invoices = [
    {
        id: "201",
        description: "Накладная от 01.02.2024",
        createdAt: new Date("2024-02-01"),
        author: "Поставщик",
        items: [
            { productId: "101", quantity: 50 },
            { productId: "102", quantity: 30 }
        ],
        receivedById: "402"
    },
    {
        id: "202",
        description: "Накладная от 05.02.2024",
        createdAt: new Date("2024-02-05"),
        author: "Поставщик",
        items: [
            { productId: "102", quantity: 60 }
        ],
        receivedById: "402"
    }
];

var sales = [
    {
        id: "301",
        description: "Продажа молока",
        createdAt: new Date("2024-02-10"),
        author: "Продавец Петров",
        customerId: "1",
        sellerId: "401",
        items: [
            { productId: "101", quantity: 2 },
            { productId: "102", quantity: 1 }
        ],
        totalAmount: 125
    },
    {
        id: "302",
        description: "Продажа хлеба",
        createdAt: new Date("2024-02-15"),
        author: "Продавец Петров",
        customerId: "2",
        sellerId: "401",
        items: [
            { productId: "102", quantity: 3 }
        ],
        totalAmount: 75
    }
];

var employees = [
    {
        id: "401",
        description: "Петров Петр",
        createdAt: new Date("2024-01-16"),
        author: "Администратор",
        role: "Продавец",
        contactInfo: {
            phone: "+123456789",
            email: "petrov@example.com"
        }
    },
    {
        id: "402",
        description: "Смирнова Ольга",
        createdAt: new Date("2024-01-18"),
        author: "Администратор",
        role: "Товаровед",
        contactInfo: {
            phone: "+987654321",
            email: "smirnova@example.com"
        }
    },
    {
        id: "403",
        description: "Петров Иван",
        createdAt: new Date("2024-01-16"),
        author: "Администратор",
        role: "Продавец",
        contactInfo: {
            phone: "+123456789",
            email: "petrov@example.com"
        }
    },
    {
        id: "404",
        description: "Петров Никита",
        createdAt: new Date("2024-01-16"),
        author: "Администратор",
        role: "Продавец",
        contactInfo: {
            phone: "+123456789",
            email: "petrov@example.com"
        }
    },
    {
        id: "405",
        description: "Петров Олег",
        createdAt: new Date("2024-01-16"),
        author: "Администратор",
        role: "Продавец",
        contactInfo: {
            phone: "+123456789",
            email: "petrov@example.com"
        }
    },
    {
        id: "406",
        description: "Петров Владимир",
        createdAt: new Date("2024-01-16"),
        author: "Администратор",
        role: "Продавец",
        contactInfo: {
            phone: "+123456789",
            email: "petrov@example.com"
        }
    },
    {
        id: "407",
        description: "Киш Олег",
        createdAt: new Date("2024-01-16"),
        author: "Администратор",
        role: "Продавец",
        contactInfo: {
            phone: "+123456789",
            email: "petrov@example.com"
        }
    },
    {
        id: "408",
        description: "Киш Владимир",
        createdAt: new Date("2024-01-16"),
        author: "Администратор",
        role: "Продавец",
        contactInfo: {
            phone: "+123456789",
            email: "petrov@example.com"
        }
    },
    {
        id: "409",
        description: "Киш Петр",
        createdAt: new Date("2024-01-16"),
        author: "Администратор",
        role: "Продавец",
        contactInfo: {
            phone: "+123456789",
            email: "petrov@example.com"
        }
    },
    {
        id: "410",
        description: "Киш никита",
        createdAt: new Date("2024-01-16"),
        author: "Администратор",
        role: "Продавец",
        contactInfo: {
            phone: "+123456789",
            email: "petrov@example.com"
        }
    },
    {
        id: "411",
        description: "Смирнова Ольга",
        createdAt: new Date("2024-01-18"),
        author: "Администратор",
        role: "Товаровед",
        contactInfo: {
            phone: "+987654321",
            email: "smirnova@example.com"
        }
    },
    {
        id: "412",
        description: "Никитина Светлана",
        createdAt: new Date("2024-01-18"),
        author: "Администратор",
        role: "Товаровед",
        contactInfo: {
            phone: "+987654321",
            email: "smirnova@example.com"
        }
    },
    {
        id: "413",
        description: "Никитина Алеся",
        createdAt: new Date("2024-01-18"),
        author: "Администратор",
        role: "Товаровед",
        contactInfo: {
            phone: "+987654321",
            email: "smirnova@example.com"
        }
    },
    {
        id: "414",
        description: "Никитина Наталья",
        createdAt: new Date("2024-01-18"),
        author: "Администратор",
        role: "Товаровед",
        contactInfo: {
            phone: "+987654321",
            email: "smirnova@example.com"
        }
    },
    {
        id: "415",
        description: "Никитина Ольга",
        createdAt: new Date("2024-01-18"),
        author: "Администратор",
        role: "Товаровед",
        contactInfo: {
            phone: "+987654321",
            email: "smirnova@example.com"
        }
    },
    {
        id: "416",
        description: "Смирнова Алеся",
        createdAt: new Date("2024-01-18"),
        author: "Администратор",
        role: "Товаровед",
        contactInfo: {
            phone: "+987654321",
            email: "smirnova@example.com"
        }
    },
    {
        id: "417",
        description: "Смирнова Людмила",
        createdAt: new Date("2024-01-18"),
        author: "Администратор",
        role: "Товаровед",
        contactInfo: {
            phone: "+987654321",
            email: "smirnova@example.com"
        }
    },
    {
        id: "418",
        description: "Смирнова Татьяна",
        createdAt: new Date("2024-01-18"),
        author: "Администратор",
        role: "Товаровед",
        contactInfo: {
            phone: "+987654321",
            email: "smirnova@example.com"
        }
    },
    {
        id: "419",
        description: "Смирнова Ирина",
        createdAt: new Date("2024-01-18"),
        author: "Администратор",
        role: "Товаровед",
        contactInfo: {
            phone: "+987654321",
            email: "smirnova@example.com"
        }
    },
    {
        id: "420",
        description: "Смирнова Наталья",
        createdAt: new Date("2024-01-18"),
        author: "Администратор",
        role: "Товаровед",
        contactInfo: {
            phone: "+987654321",
            email: "smirnova@example.com"
        }
    }
];

var workSessions = [
    {
        id: "601",
        description: "Рабочая смена Петрова",
        author: "Администратор",
        createdAt: new Date("2024-02-01"),
        startTime: new Date("2024-02-01T08:00:00"),
        endTime: new Date("2024-02-01T16:00:00"),
        employeeId: "401",
        role: "Продавец"
    },
    {
        id: "602",
        description: "Рабочая смена Смирновой",
        author: "Администратор",
        createdAt: new Date("2024-02-02"),
        startTime: new Date("2024-02-02T09:00:00"),
        endTime: new Date("2024-02-02T17:00:00"),
        employeeId: "402",
        role: "Товаровед"
    }
];

class ObjManager {
    #customers = [];
    #products = [];
    #invoices = [];
    #sales = []; 
    #employees = [];
    #workSessions = [];
    
    constructor(customers = [], products = [], invoices = [], sales = [], employees = [], workSessions = []) {
        this.#customers = customers;
        this.#products = products;
        this.#invoices = invoices;
        this.#sales = sales;
        this.#employees = employees;
        this.#workSessions = workSessions;
}

    getObjs(arrayName, skip = 0, top = 20, filterConfig = {}) {
        let array = this.#getArrayByName(arrayName);
        if (Object.keys(filterConfig).length > 0) {
            array = this.#applyFilter(array, filterConfig);
        }

        array.sort((a, b) => a.id.localeCompare(b.id));

        return array.slice(skip, skip + top);
    }

    getObj(arrayName, id) {
        const array = this.#getArrayByName(arrayName);
        return array.find(obj => obj.id === id) || false;
    }

    validateObj(obj) {
        if (typeof obj.id !== 'string' || obj.id.length < 1 ) {
            return false;
        }

        if (typeof obj.description !== 'string' || obj.description.length >= 200 || obj.description.length < 1) {
            return false;
        }

        if (typeof obj.author !== 'string' || obj.author.length === 0) {
            
            return false;
        }

        return true;
    }

    addObj(arrayName, obj) {
        if (!this.validateObj(obj) || this.#getArrayByName(arrayName).some(existingObj => existingObj.id === obj.id)) {
           console.log(this.validateObj(obj));
            return false;
        }

        this.#getArrayByName(arrayName).push(obj);
        return true;
    }

    editObj(arrayName, id, obj) {
        let array = this.#getArrayByName(arrayName);
        var existingObj = array.find(o => o.id === id);

        if (!existingObj || !this.validateObj(obj)) {
            return false;
        }

        Object.keys(obj).forEach(key => {
            if (key !== 'id' && key !== 'author' && key !== 'createdAt') {
                existingObj[key] = obj[key];
            }
        });

        return true;
    }

    removeObj(arrayName, id) {
        const array = this.#getArrayByName(arrayName);
        const index = array.findIndex(obj => obj.id === id);
        if (index === -1) return false;

        array.splice(index, 1);
        return true;
    }

    clear(arrayName) {
        this.#getArrayByName(arrayName).length = 0;
        return true;
    }

    clearAll() {
        this.#customers = [];
        this.#products = [];
        this.#invoices = [];
        this.#sales = [];
        this.#employees = [];
        this.#workSessions = [];
        return true;
    }

    #applyFilter(array, filterConfig) {
        return array.filter(obj => {
            return Object.keys(filterConfig).every(key => obj[key] === filterConfig[key]);
        });
    }

    #getArrayByName(arrayName) {
        switch (arrayName) {
            case 'customers':
                return this.#customers;
            case 'products':
                return this.#products;
            case 'invoices':
                return this.#invoices;
            case 'sales':
                return this.#sales;
            case 'employees':
                return this.#employees;
            case 'workSessions':
                return this.#workSessions;
            default:
                throw new Error('Unknown array name');
        }
    }

    save() {
        localStorage.setItem('customersdata', JSON.stringify(this.#customers));
        localStorage.setItem('productsdata', JSON.stringify(this.#products));
        localStorage.setItem('invoicesdata', JSON.stringify(this.#invoices));
        localStorage.setItem('salesdata', JSON.stringify(this.#sales));
        localStorage.setItem('employeesdata', JSON.stringify(this.#employees));
        localStorage.setItem('workSessionsdata', JSON.stringify(this.#workSessions));
      }

    restore() {
        var storedData = localStorage.getItem('customersdata');
        if (storedData) {
          this.#customers = JSON.parse(storedData);
        }

        storedData = localStorage.getItem('productsdata');
        if (storedData) {
          this.#products = JSON.parse(storedData);
        }

        storedData = localStorage.getItem('invoicesdata');
        if (storedData) {
          this.#invoices = JSON.parse(storedData);
        }

        storedData = localStorage.getItem('salesdata');
        if (storedData) {
          this.#sales = JSON.parse(storedData);
        }

        storedData = localStorage.getItem('employeesdata');
        if (storedData) {
          this.#employees = JSON.parse(storedData);
        }

        storedData = localStorage.getItem('workSessionsdata');
        if (storedData) {
          this.#workSessions = JSON.parse(storedData);
        }
    }
}

//model
var objManager = new ObjManager(customers, products, invoices, sales, employees, workSessions);

//View

class View{

    constructor() {
        this.user = "none";
        this.buttonContainer = document.getElementById('buttons_place');
        this.roleContainer = document.getElementById('role');
        this.NamePlace = document.getElementById('info');
        this.renderLogin();
        this.renderAdminControls();
    }
    
    renderAdminControls()
    {
        this.roleContainer.innerHTML='Ваша роль:'
        const username = document.createElement('article');
        username.textContent = this.user;
        this.roleContainer.appendChild(username);
        this.buttonContainer.innerHTML='';
        if (this.user === 'admin') {
          const editButton = document.createElement('button');
          editButton.textContent = 'Редактировать';
          const addButton = document.createElement('button');
          addButton.textContent = 'Добавить';
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Удалить';
          const SearchButton = document.createElement('button');
          SearchButton.textContent = 'Поиск';
          this.buttonContainer.appendChild(editButton);
          this.buttonContainer.appendChild(addButton);
          this.buttonContainer.appendChild(deleteButton);
          this.buttonContainer.appendChild(SearchButton);
    
          }
      }

      renderManipulationForm(action) {
        const container = document.getElementById('manipulationFormContainer');
        container.innerHTML = `
          <form id="manipulationForm">
            <input type="hidden" name="action" value="${action}">
            <label for="data">Введите данные (JSON):</label>
            <input type="text" id="data" name="data" required>
            <button type="submit">Применить</button>
          </form>
        `;
      }

      updateUser(username) {
        this.user = username;
        this.renderAdminControls();
      }

      renderLogin() {
        const loginContainer = document.getElementById('loginContainer');
        loginContainer.innerHTML = `
          <form id="loginForm">
            <label for="username">Введите логин:</label>
            <input type="text" id="username" name="username" required>
            <button type="submit">Войти</button>
          </form>
        `;
      }

      renderTable(Name, filterConfig) 
      {
        var ShowingArray=objManager.getObjs(Name, 0, 20, filterConfig)
        if (ShowingArray.length === 0) {
            container.innerHTML = '<p>No data to display</p>';
            return false;
          }
          
        const container = document.getElementById('table');
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        container.innerHTML='';
        thead.innerHTML = `
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Date</th>
            <th>Author</th>
          </tr>
        `;
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        ShowingArray.forEach(item => {
          const row = document.createElement('tr');
          var newdate=new Date(item.createdAt)
          row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.description}</td>
            <td>${newdate.toLocaleDateString()}</td>
            <td>${item.author}</td>
          `;
          tbody.appendChild(row);
        });
        table.appendChild(tbody);
        container.appendChild(table);
        return true;
      }
    }

class controler{
       
    constructor(viewclassname, modelname){
        this.view=viewclassname;
        this.model=modelname;
        this.lastarray=localStorage.getItem('last')||'employees';
        this.user= localStorage.getItem('userRole')||"none";
        this.view.updateUser(this.user);
        this.#init();
    }

    #init() {
        this.model.restore();
        this.view.renderTable(this.lastarray);
        this.bindLoginEvent();
        this.bindManipulationEvents();
      };

      bindLoginEvent() {
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const formData = new FormData(loginForm);
          const username = formData.get('username');
    
          if (username) {
            this.user = username;
            localStorage.setItem('userRole', username);
            this.view.updateUser(username);
          }
        });
      }

      bindManipulationEvents() {
        const buttonContainer = document.getElementById('buttons_place');
    
        buttonContainer.addEventListener('click', (event) => {
          if (event.target.tagName === 'BUTTON') {
            const action = event.target.textContent;
    
            switch (action) {
              case 'Добавить':
              case 'Редактировать':
              case 'Удалить':
              case 'Поиск':
                this.view.renderManipulationForm(action);
                break;
            }
          }
        });
    
        document.getElementById('manipulationFormContainer').addEventListener('submit', (event) => {
          event.preventDefault();
    
          const formData = new FormData(event.target);
          const action = formData.get('action');
          const data = JSON.parse(formData.get('data'));
    
          switch (action) {
            case 'Добавить':
              this.addInTable(data.arrayName, data.obj)
              break;
            case 'Редактировать':
              this.editTable(data.arrayName, data.id, data.obj);
              break;
            case 'Удалить':
            this.deleteFromTable(data.arrayName, data.id);
              break;
            case 'Поиск':
              this.display(data);
              return;
          }
            });
      }

    deleteFromTable(Name, id)
      {
        if(objManager.removeObj(Name, id))
        {
            localStorage.clear();
            this.model.save();
            localStorage.setItem('last', Name);
            this.view.renderTable(Name);
            return true;
        };
        return false;
      }

    addInTable(Name, obj)
        {
            if(objManager.addObj(Name, obj))
            {
                this.model.save();
                localStorage.setItem('last', Name);
                this.view.renderTable(Name);
                return true;
            };  
            return false;
        }

    editTable(Name, id, obj)
        {
            if(objManager.editObj(Name, id, obj))
            {
                this.model.save();
                localStorage.setItem('last', Name);
                this.view.renderTable(Name);
                return true;
            };
            return false;
        } 

        display(Name, filterConfig)
        {
            this.model.save();
            localStorage.setItem('last', Name);
            this.view.renderTable(Name, filterConfig);
            return true;
        }
    }

var Viewclass = new View();
var controlerclass = new controler(Viewclass, objManager);

      //controlerclass.addInTable('customers', { id: "23", description: 'Иванов Иван', createdAt: new Date(), author: 'Администратор', totalSpent: 500, discountPercent: 5 } )
      //controlerclass.addInTable('customers', { id: "22", description: 'Иванов Иван', createdAt: new Date(), author: 'Администратор', totalSpent: 500, discountPercent: 5 } )
      //controlerclass.display('customers', {description: "Иванов Иван"});
      //controlerclass.deleteFromTable('customers', "1");
      //controlerclass.addInTable('customers', { id: "23", description: 'Иванов Иван', createdAt: new Date(), author: 'Администратор', totalSpent: 500, discountPercent: 5 } )
      //controlerclass.display('employees');
      //controlerclass.addInTable('employees', {id: "430", description: "Петров Петр 2", createdAt: new Date("2024-01-16"), author: "Администратор", role: "Продавец", contactInfo: {phone: "+123456789", email: "petrov@example.com"}})
      //controlerclass.editTable('employees', '401', {id: "401", description: "Петров Петр new", createdAt: new Date("2024-01-16"), author: "Администратор", role: "Продавец", contactInfo: {phone: "+123456789", email: "petrov@example.com"}});
      //controlerclass.deleteFromTable('employees', "404");

//console.log(objManager.addObj('customers', { id: '23', description: 'Иванов Иван', createdAt: new Date(), author: 'Администратор', totalSpent: 500, discountPercent: 5 }));

//console.log(objManager.addObj('customers', { id: '23', description: 'Иванов Иван', createdAt: new Date(), author: 'Администратор', totalSpent: 500, discountPercent: 5 }));

//console.log(objManager.addObj('customers', { id: '1', description: 'Иванов Иван', createdAt: new Date(), author: 'Администратор', totalSpent: 500, discountPercent: 5 }));

//console.log(objManager.addObj('customers', { id: '', description: 'Иванов Иван', createdAt: new Date(), author: 'Администратор', totalSpent: 500, discountPercent: 5 }));

//console.log(objManager.addObj('customers', { id: '25', description: '', createdAt: new Date(), author: 'Администратор', totalSpent: 500, discountPercent: 5 }));

//console.log(objManager.getObjs('employees', 0, 20, {role: "Товаровед"}));

//console.log(objManager.getObjs('employees', 3, 5 ));

//console.log(objManager.getObj('customers', '1'))

//console.log(objManager.getObj('customers', '23'))

//console.log(objManager.validateObj('customers', { id: '', description: 'Иванов Иван', createdAt: new Date(), author: 'Администратор', totalSpent: 500, discountPercent: 5 } ))

//console.log(objManager.validateObj('customers', { id: '24', description: 'Иванов Иван', createdAt: new Date(), author: 'Администратор', totalSpent: 500, discountPercent: 5 } ))

//console.log(objManager.getObj('customers', '23'))

//console.log(objManager.editObj('customers','23', { id: '23', description: 'Иванов Иван new', createdAt: new Date(), author: 'Администратор', totalSpent: 500, discountPercent: 5 } ))

//console.log(objManager.getObj('customers', '23'))

//console.log(objManager.removeObj('customers', '23'))

//console.log(objManager.getObj('customers', '23'))

//console.log(objManager.clear('employees'));

//console.log(objManager.clearAll());