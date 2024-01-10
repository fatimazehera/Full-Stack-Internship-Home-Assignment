package ma.dnaengineering.backend.service;

import ma.dnaengineering.backend.model.Employee;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {
    private static final String CSV_FILE_PATH = "C:\\Users\\admin\\Downloads\\Full-Stack-Internship-Home-Assignment-main\\data\\employees.csv";

    public List<Employee> readAndProcessCSV() {
        List<Employee> employees = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(CSV_FILE_PATH))) {
            // Lire la première ligne (en-tête) pour ignorer
            br.readLine();

            String line;
            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                if (data.length == 4) { // Vérifier si la ligne a le bon nombre de colonnes
                    long id = Long.parseLong(data[0].trim());
                    String employeeName = data[1].trim();
                    String jobTitle = data[2].trim();
                    double salary = Double.parseDouble(data[3].trim());

                    Employee employee = new Employee(id, employeeName, jobTitle, salary);
                    employees.add(employee);
                } else {
                    System.err.println("Ignorer la ligne incorrecte: " + line);
                }
            }
        } catch (IOException | NumberFormatException e) {
            e.printStackTrace();
        }

        return employees;
    }

}
