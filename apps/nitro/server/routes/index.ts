export default defineCachedEventHandler(() => {
  return "<pre>Hello from Nitro Server!</pre>"
}, {
  maxAge: 1000 * 60 * 60 * 24,
  staleMaxAge: 1000 * 60 * 60 * 24 * 7,
})