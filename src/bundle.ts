export const version = '0.0.1';
export const name = "yaml-extension-bundle";

const commandActions = new Map<string, Function>();
commandActions.set("sample_command", () => {
    // yaml language server context grab the current parse results
    return "some_results";
});
export const commandFunctions = commandActions;
