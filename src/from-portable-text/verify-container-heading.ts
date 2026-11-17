// Carried by renderer context and renderNode so container checks use the
// root writer's parser and schema, including through options-copying wrappers.
export const verifyContainerHeading = Symbol('verifyContainerHeading')
