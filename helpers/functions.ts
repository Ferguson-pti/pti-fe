/* 5th September 2025 */
export const isEarlyBird = new Date(2025, 8, 5).getTime() > Date.now()

export const userAvatarText = (name: string) => {
  const names = name.split(' ')

  if (names.length > 1) {
    return names[0]!.slice(0, 1).toUpperCase() + name[1]!.slice(0, 1).toUpperCase()
  }
  else {
    return name.slice(0, 1).toUpperCase()
  }
}
