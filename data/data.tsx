interface Data {
  type: string
  label: string
  list: {
    label: string
  }[]
  baned: string[]
  limited: {
    name: string[]
    num: number
  }[]
  warning: Map<string, string>
}
