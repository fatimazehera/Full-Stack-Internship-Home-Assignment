package ma.dnaengineering.backend.controller;

import ma.dnaengineering.backend.model.Employee;
import ma.dnaengineering.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/list")
    public List<Employee> getEmployeeList() {
        return employeeService.readAndProcessCSV();
    }

    @GetMapping("/summary")
    public Map<String, Double> getAverageSalaryByJobTitle() {
        List<Employee> employees = employeeService.readAndProcessCSV();

        return employees.stream()
                .collect(Collectors.groupingBy(Employee::getJobTitle, Collectors.averagingDouble(Employee::getSalary)));
    }

}
