export class StringUtils {
  static capitalize(str: string): string {
    if (!str) return `str is not define`;
    return str
      .split(' ')
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
  }

  static reverseStr(str: string): string{
    return str.split('').reverse().join('')
  }
}
