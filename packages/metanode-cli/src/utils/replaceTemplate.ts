export type Variable = {
  replacer: string
  value: any
}

export const replaceTemplate = (template: string, variables: Variable[]) => {
  let newTemplate = template

  variables.forEach((variable) => {
    const newRegex = new RegExp(variable.replacer, 'g')
    const value =
      typeof variable.value === 'object' ? JSON.stringify(variable.value) : variable.value
    newTemplate = newTemplate.replace(newRegex, String(value))
  })

  return newTemplate
}
