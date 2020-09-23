require_relative "Employee.rb"

class Manager < Employee

    attr_reader :employees
    def initialize(name, title, salary, boss)
        @employees = []
        super(name, title, salary, boss)
    end

    def bonus(multiplier)
        total_salary = self.employees.map {|employee| employee.salary}.sum 
        total_salary * multiplier
    end

    def add_employee(employee)
        self.employees << employee
    end
end

david = Employee.new("David", "TA", 10000, "Darren") 
shawna = Employee.new("Shawna", "TA", 12000, "Darren")
darren = Manager.new("Darren", "TA Manger", 78000, "Ned") 
ned = Manager.new("Ned", "Founder", 1000000, nil)