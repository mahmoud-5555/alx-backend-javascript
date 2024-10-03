export default function guardrail(mathFunction) {
  const quere = [];
  try {
    quere.push(mathFunction());
  } catch (error) {
    quere.push(error.toString());
  }
  quere.push('Guardrail was processed');
  return quere;
}
