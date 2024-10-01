export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();
  let index = 0;

  return {
    next() {
      if (index < employees.length) {
        const value = employees[index]; // Get the current employee
        index += 1; // Increment index without using ++
        return { value, done: false };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
