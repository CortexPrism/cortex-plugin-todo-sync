// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const todo_syncTool: Tool = {
  definition: {
    name: 'todo_sync',
    description: 'Bi-directional sync tasks with Todoist/TickTick',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[todo-sync] todo_sync executed');
      return ok('todo_sync', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'todo_sync',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const todo_createTool: Tool = {
  definition: {
    name: 'todo_create',
    description: 'Create task from agent context',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[todo-sync] todo_create executed');
      return ok('todo_create', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'todo_create',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const todo_mark_completeTool: Tool = {
  definition: {
    name: 'todo_mark_complete',
    description: 'Mark task complete and notify agent',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[todo-sync] todo_mark_complete executed');
      return ok('todo_mark_complete', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'todo_mark_complete',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const todo_listTool: Tool = {
  definition: {
    name: 'todo_list',
    description: 'List pending tasks',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[todo-sync] todo_list executed');
      return ok('todo_list', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'todo_list',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-todo-sync] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-todo-sync] Unloading...');
}
export const tools: Tool[] = [
  todo_syncTool,
  todo_createTool,
  todo_mark_completeTool,
  todo_listTool,
];
