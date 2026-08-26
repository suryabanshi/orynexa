/**
 * bank.ts — Number Bank
 *
 * A simple account tracker (ac tk) that collects odd numbers.
 * Provides deposit (with odd-number filtering), withdrawal,
 * balance queries, and full ledger access.
 */

export interface BankEntry {
  value: number;
  timestamp: Date;
}

export class OddNumberBank {
  private ledger: BankEntry[] = [];

  /** Returns true if n is an odd integer */
  static isOdd(n: number): boolean {
    return Number.isInteger(n) && n % 2 !== 0;
  }

  /**
   * Deposit a number into the bank.
   * Only odd integers are accepted; even numbers are silently ignored.
   * Returns true if the deposit was accepted, false otherwise.
   */
  deposit(value: number): boolean {
    if (!OddNumberBank.isOdd(value)) return false;
    this.ledger.push({ value, timestamp: new Date() });
    return true;
  }

  /**
   * Deposit an array of numbers at once.
   * Returns only the values that were accepted (odd numbers).
   */
  depositMany(values: number[]): number[] {
    return values.filter((v) => this.deposit(v));
  }

  /**
   * Collect all odd numbers from a range [start, end] (inclusive)
   * and deposit them into the bank.
   */
  collectRange(start: number, end: number): number[] {
    const range = Array.from(
      { length: Math.abs(end - start) + 1 },
      (_, i) => Math.min(start, end) + i
    );
    return this.depositMany(range);
  }

  /** Total count of entries in the bank */
  get count(): number {
    return this.ledger.length;
  }

  /** Sum of all stored odd numbers */
  get balance(): number {
    return this.ledger.reduce((sum, e) => sum + e.value, 0);
  }

  /** All stored odd numbers (values only, oldest first) */
  get numbers(): number[] {
    return this.ledger.map((e) => e.value);
  }

  /** Full ledger with timestamps */
  get entries(): BankEntry[] {
    return [...this.ledger];
  }

  /** Remove and return the most recently deposited entry */
  withdraw(): BankEntry | undefined {
    return this.ledger.pop();
  }

  /** Clear all entries */
  clear(): void {
    this.ledger = [];
  }

  /** Return a summary string */
  summary(): string {
    return `OddNumberBank | Count: ${this.count} | Balance: ${this.balance} | Numbers: [${this.numbers.join(", ")}]`;
  }
}

/** Singleton bank instance for shared use across the app */
export const bank = new OddNumberBank();
