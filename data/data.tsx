interface Data {
  type: string
  label: string
  list: {
    label: string
  }[]
  baned: string[]
  limited: string[][]
  warning: Map<string, string>
}
