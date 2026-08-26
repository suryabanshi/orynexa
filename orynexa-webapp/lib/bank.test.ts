/**
 * bank.test.ts — Basic tests for OddNumberBank
 */

import { OddNumberBank, bank } from "./bank";

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(`FAIL: ${message}`);
  console.log(`  PASS: ${message}`);
}

console.log("\n=== OddNumberBank Tests ===\n");

// --- isOdd ---
console.log("isOdd()");
assert(OddNumberBank.isOdd(1), "1 is odd");
assert(OddNumberBank.isOdd(3), "3 is odd");
assert(OddNumberBank.isOdd(-7), "-7 is odd");
assert(!OddNumberBank.isOdd(2), "2 is not odd");
assert(!OddNumberBank.isOdd(0), "0 is not odd");
assert(!OddNumberBank.isOdd(1.5), "1.5 is not odd (non-integer)");

// --- deposit ---
console.log("\ndeposit()");
const b = new OddNumberBank();
assert(b.deposit(5) === true, "5 accepted");
assert(b.deposit(4) === false, "4 rejected");
assert(b.count === 1, "count is 1 after one successful deposit");
assert(b.balance === 5, "balance is 5");

// --- depositMany ---
console.log("\ndepositMany()");
const b2 = new OddNumberBank();
const accepted = b2.depositMany([1, 2, 3, 4, 5, 6, 7]);
assert(JSON.stringify(accepted) === JSON.stringify([1, 3, 5, 7]), "odd numbers 1,3,5,7 accepted");
assert(b2.count === 4, "count is 4");
assert(b2.balance === 16, "balance is 1+3+5+7=16");

// --- collectRange ---
console.log("\ncollectRange()");
const b3 = new OddNumberBank();
const collected = b3.collectRange(1, 10);
assert(JSON.stringify(collected) === JSON.stringify([1, 3, 5, 7, 9]), "range 1–10 collects 1,3,5,7,9");
assert(b3.balance === 25, "balance is 1+3+5+7+9=25");

// --- withdraw ---
console.log("\nwithdraw()");
const last = b3.withdraw();
assert(last?.value === 9, "last withdrawn is 9");
assert(b3.count === 4, "count reduced to 4 after withdraw");

// --- singleton ---
console.log("\nsingleton bank");
bank.depositMany([11, 13, 15]);
assert(bank.count === 3, "singleton bank has 3 entries");

console.log("\n=== All tests passed ===\n");
console.log(b2.summary());
