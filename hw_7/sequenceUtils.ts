export class SequenceUtils {
  static generateFibonacci(limit: number): number[] {
    const sequence: number[] = [0, 1];
    while (true) {
      const next =
        sequence[sequence.length - 1] + sequence[sequence.length - 2];
      if (next > limit) break;
      sequence.push(next);
    }
    return sequence;
  }

  static generatePrimeNumbers(limit: number): number[] {
    const primes: number[] = [];
    for (let i = 2; i <= limit; i++) {
      if (primes.every((prime) => i % prime !== 0)) {
        primes.push(i);
      }
    }
    return primes;
  }
}
