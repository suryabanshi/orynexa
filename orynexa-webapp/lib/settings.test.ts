/**
 * settings.test.ts — Tests for SettingsStore & KnowledgeBase
 */

import { SettingsStore, KnowledgeBase, settings, knowledge } from "./settings";

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(`FAIL: ${message}`);
  console.log(`  PASS: ${message}`);
}

console.log("\n=== SettingsStore Tests ===\n");

const s = new SettingsStore();

console.log("defaults");
assert(s.get("defaultModel") === "deepseek", "defaultModel defaults to deepseek");
assert(s.get("maxTokens") === 2048, "maxTokens defaults to 2048");
assert(s.get("temperature") === 0.7, "temperature defaults to 0.7");
assert(s.get("streamResponse") === true, "streamResponse defaults to true");
assert(s.get("theme") === "system", "theme defaults to system");

console.log("\noverride + reset");
s.set("defaultModel", "qwen");
assert(s.get("defaultModel") === "qwen", "model overridden to qwen");
s.reset("defaultModel");
assert(s.get("defaultModel") === "deepseek", "model reset to default");

console.log("\nsnapshot");
const snap = s.snapshot();
assert(snap.maxTokens === 2048, "snapshot has maxTokens 2048");
assert(typeof snap.streamResponse === "boolean", "snapshot streamResponse is boolean");

console.log("\ndescribe (no error)");
const desc = s.describe();
assert(desc.includes("defaultModel"), "describe mentions defaultModel");
assert(desc.includes("(default)"), "describe shows default label");

console.log("\n=== KnowledgeBase Tests ===\n");

const kb = new KnowledgeBase();

console.log("set & get");
kb.set("greeting", "hello world", ["general"]);
assert(kb.getValue("greeting") === "hello world", "retrieved greeting value");
assert(kb.size === 1, "size is 1");

console.log("\nupdate");
kb.set("greeting", "hi there", ["general", "updated"]);
assert(kb.getValue("greeting") === "hi there", "value updated");
assert(kb.get("greeting")!.tags.includes("updated"), "tags updated");
assert(kb.size === 1, "size still 1 after update");

console.log("\nfindByTag");
kb.set("farewell", "goodbye", ["general"]);
kb.set("secret", "shh", ["internal"]);
const general = kb.findByTag("general");
assert(general.length === 2, "2 entries tagged 'general'");

console.log("\nsearch");
const results = kb.search("bye");
assert(results.length === 1, "search 'bye' finds farewell");
assert(results[0].key === "farewell", "correct entry found");

console.log("\ndelete");
kb.delete("secret");
assert(kb.size === 2, "size is 2 after delete");

console.log("\nexport");
const exported = kb.export();
assert(typeof exported === "object", "export returns object");
assert(exported["greeting"] === "hi there", "export includes greeting");

console.log("\nsingleton knowledge (pre-seeded)");
assert(knowledge.getValue("project.name") === "Earthsmart-ittokuya", "project name seeded");
assert(knowledge.findByTag("models").length > 0, "models tag entry present");

console.log("\nsingleton settings");
assert(settings.get("theme") === "system", "singleton settings works");
settings.set("theme", "dark");
assert(settings.get("theme") === "dark", "singleton setting overridden");
settings.resetAll();
assert(settings.get("theme") === "system", "singleton settings reset");

console.log("\n=== All tests passed ===\n");
