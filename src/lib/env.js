export function getEnv(env, Astro, name) {
  return env[name] ?? Astro.locals?.runtime?.env?.[name]
}

export function getChannels(env, Astro) {
  const channels = getEnv(env, Astro, 'CHANNEL')
  if (!channels) {
    return []
  }
  return channels.split(',').map(c => c.trim()).filter(Boolean)
}
