export default cachedEventHandler(e => {
    return `Hello ${e.context.params.name}!`
});
