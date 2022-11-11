/**
 * This is a stub that will be converted into an AST to be inserted at
 * locations that we want to be able to dynamically patch.
 */
export function __PATCH_TEMPLATE__() {
  // Pass a getter so that we can use the original implementation lazily only if its needed.
  global.__jsMockStubHook(
    "{PATCH_ID}",
    () => "{ORIGINAL_IMPLEMENTATION_PLACEHOLDER}"
  );
}
