/**
 * settings.ts — Swift Settings & Knowledge Store
 *
 * Lightweight, type-safe configuration and knowledge management.
 * Supports typed settings with defaults, runtime overrides,
 * and a key-value knowledge base — all with zero dependencies.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type SettingValue = string | number | boolean | null;

export interface SettingDefinition<T extends SettingValue = SettingValue> {
  default: T;
  description: string;
  readonly?: boolean;
}

export interface KnowledgeEntry {
  key: string;
  value: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// ─── Default App Settings ─────────────────────────────────────────────────────

export const APP_SETTINGS = {
  // Model defaults
  defaultModel: {
    default: "deepseek",
    description: "Active language model",
  } as SettingDefinition<string>,

  maxTokens: {
    default: 2048,
    description: "Max tokens per response",
  } as SettingDefinition<number>,

  temperature: {
    default: 0.7,
    description: "Model temperature (0–2)",
  } as SettingDefinition<number>,

  streamResponse: {
    default: true,
    description: "Enable streaming responses",
  } as SettingDefinition<boolean>,

  // UI
  theme: {
    default: "system",
    description: "UI theme: light | dark | system",
  } as SettingDefinition<string>,

  language: {
    default: "en",
    description: "App language code",
  } as SettingDefinition<string>,

  // Bank integration
  bankAutoCollect: {
    default: false,
    description: "Auto-collect odd numbers from model outputs",
  } as SettingDefinition<boolean>,
} as const;

export type AppSettingKey = keyof typeof APP_SETTINGS;

// ─── SettingsStore ────────────────────────────────────────────────────────────

export class SettingsStore {
  private overrides = new Map<string, SettingValue>();

  /** Get the current value of a setting (override or default) */
  get<K extends AppSettingKey>(key: K): (typeof APP_SETTINGS)[K]["default"] {
    if (this.overrides.has(key)) {
      return this.overrides.get(key) as (typeof APP_SETTINGS)[K]["default"];
    }
    return APP_SETTINGS[key].default as (typeof APP_SETTINGS)[K]["default"];
  }

  /** Set a runtime override for a setting */
  set<K extends AppSettingKey>(key: K, value: (typeof APP_SETTINGS)[K]["default"]): void {
    const def = APP_SETTINGS[key] as SettingDefinition;
    if (def.readonly) throw new Error(`Setting "${key}" is read-only`);
    this.overrides.set(key, value);
  }

  /** Reset a single setting to its default */
  reset(key: AppSettingKey): void {
    this.overrides.delete(key);
  }

  /** Reset all settings to defaults */
  resetAll(): void {
    this.overrides.clear();
  }

  /** Return all current settings as a plain object */
  snapshot(): Record<AppSettingKey, SettingValue> {
    return Object.fromEntries(
      (Object.keys(APP_SETTINGS) as AppSettingKey[]).map((k) => [k, this.get(k)])
    ) as Record<AppSettingKey, SettingValue>;
  }

  /** Pretty-print all settings */
  describe(): string {
    return (Object.keys(APP_SETTINGS) as AppSettingKey[])
      .map((k) => {
        const def = APP_SETTINGS[k] as SettingDefinition;
        const current = this.get(k);
        const isOverridden = this.overrides.has(k);
        return `  ${k}: ${JSON.stringify(current)}${isOverridden ? " (overridden)" : " (default)"} — ${def.description}`;
      })
      .join("\n");
  }
}

// ─── KnowledgeBase ────────────────────────────────────────────────────────────

export class KnowledgeBase {
  private store = new Map<string, KnowledgeEntry>();

  /** Add or update a knowledge entry */
  set(key: string, value: string, tags: string[] = []): KnowledgeEntry {
    const now = new Date();
    const existing = this.store.get(key);
    const entry: KnowledgeEntry = {
      key,
      value,
      tags,
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    };
    this.store.set(key, entry);
    return entry;
  }

  /** Retrieve a knowledge entry by key */
  get(key: string): KnowledgeEntry | undefined {
    return this.store.get(key);
  }

  /** Get the value string for a key (shorthand) */
  getValue(key: string): string | undefined {
    return this.store.get(key)?.value;
  }

  /** Delete an entry */
  delete(key: string): boolean {
    return this.store.delete(key);
  }

  /** Find entries by tag */
  findByTag(tag: string): KnowledgeEntry[] {
    return [...this.store.values()].filter((e) => e.tags.includes(tag));
  }

  /** Full-text search across keys and values */
  search(query: string): KnowledgeEntry[] {
    const q = query.toLowerCase();
    return [...this.store.values()].filter(
      (e) => e.key.toLowerCase().includes(q) || e.value.toLowerCase().includes(q)
    );
  }

  /** All entries */
  get all(): KnowledgeEntry[] {
    return [...this.store.values()];
  }

  /** Entry count */
  get size(): number {
    return this.store.size;
  }

  /** Clear all knowledge */
  clear(): void {
    this.store.clear();
  }

  /** Export as plain object */
  export(): Record<string, string> {
    return Object.fromEntries([...this.store.entries()].map(([k, e]) => [k, e.value]));
  }
}

// ─── Singleton exports ────────────────────────────────────────────────────────

export const settings = new SettingsStore();
export const knowledge = new KnowledgeBase();

// Seed initial knowledge
knowledge.set("project.name", "Earthsmart-ittokuya", ["meta", "project"]);
knowledge.set("project.description", "Eco-conscious AI model integration platform", ["meta", "project"]);
knowledge.set("models.supported", "deepseek, qwen, gemma, minimax, glm-5, kimi-k2.5", ["models"]);
knowledge.set("nas.host", "buffalonas.jp", ["infra", "network"]);
