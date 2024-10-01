export default function iterateThroughObject(reportWithIterator) {
  const employees = []; // Array to hold employee names

  for (const employee of reportWithIterator) {
    employees.push(employee); // Add each employee name to the array
  }

  return employees.join(' | '); // Join the names with ' | ' and return
}
