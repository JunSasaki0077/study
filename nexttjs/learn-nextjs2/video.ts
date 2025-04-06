const func = (arg: string) => {
  const parsed: unknown = JSON.parse(arg)

  if (
    typeof parsed === 'object' &&
    parsed !== null &&
    'name' in parsed &&
    typeof parsed.name === 'string'
  ) {
    // ✍🏼 エラーにならないように修正してください
    console.log(parsed.name.toUpperCase())
  }
}

func(`{ "name": "Alice" }`) // "ALICE"
func(`{ "name": "bob" }`) // "BOB"

func(`{ "name": 404 }`) // 実行時にエラーになります
func(`{ "age": 20 }`) // 実行時にエラーになります
func('null') // 実行時にエラーになります
func('true') // 実行時にエラーになります
